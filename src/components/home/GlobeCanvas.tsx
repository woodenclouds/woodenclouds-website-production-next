"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type GlobeProps = {
  scrollProgress: React.MutableRefObject<number>;
  showConnections?: boolean;
};

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

/** Soft circular sprite so Points render as round dots, not squares. */
function makeRoundDotTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  // Hard-ish disc with soft edge — visible, clearly round
  const g = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  );
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.5, "rgba(255,255,255,1)");
  g.addColorStop(0.72, "rgba(255,255,255,0.55)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.NoColorSpace;
  tex.premultiplyAlpha = true;
  tex.needsUpdate = true;
  return tex;
}

function fibonacciSphere(
  count: number,
  radius: number,
  jitter = 0.08,
  seed = 1,
) {
  const arr = new Float32Array(count * 3);
  const golden = Math.PI * (1 + 5 ** 0.5);
  let s = seed;

  const rand = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };

  for (let i = 0; i < count; i++) {
    const t = i / count;
    const incl = Math.acos(1 - 2 * t);
    const azim = golden * i;
    const r = radius * (1 - jitter / 2 + rand() * jitter);
    arr[i * 3] = r * Math.sin(incl) * Math.cos(azim);
    arr[i * 3 + 1] = r * Math.sin(incl) * Math.sin(azim);
    arr[i * 3 + 2] = r * Math.cos(incl);
  }
  return arr;
}

function makeRing(count: number, radius: number, tiltX: number, tiltZ: number) {
  const arr = new Float32Array(count * 3);
  const cx = Math.cos(tiltX);
  const sx = Math.sin(tiltX);
  const cz = Math.cos(tiltZ);
  const sz = Math.sin(tiltZ);

  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const x0 = Math.cos(a) * radius;
    const y0 = Math.sin(a) * radius;
    const z0 = 0;
    const y1 = y0 * cx - z0 * sx;
    const z1 = y0 * sx + z0 * cx;
    const x2 = x0 * cz - y1 * sz;
    const y2 = x0 * sz + y1 * cz;
    arr[i * 3] = x2;
    arr[i * 3 + 1] = y2;
    arr[i * 3 + 2] = z1;
  }
  return arr;
}

/** Latitude / longitude wireframe for a clear round globe silhouette. */
function buildGlobeGrid(
  radius: number,
  latCount = 6,
  lonCount = 12,
  segs = 48,
) {
  const verts: number[] = [];

  for (let i = 1; i < latCount; i++) {
    const phi = (i / latCount) * Math.PI;
    const y = Math.cos(phi) * radius;
    const r = Math.sin(phi) * radius;
    for (let s = 0; s < segs; s++) {
      const a0 = (s / segs) * Math.PI * 2;
      const a1 = ((s + 1) / segs) * Math.PI * 2;
      verts.push(
        Math.cos(a0) * r,
        y,
        Math.sin(a0) * r,
        Math.cos(a1) * r,
        y,
        Math.sin(a1) * r,
      );
    }
  }

  for (let i = 0; i < lonCount; i++) {
    const theta = (i / lonCount) * Math.PI * 2;
    for (let s = 0; s < segs; s++) {
      const p0 = (s / segs) * Math.PI;
      const p1 = ((s + 1) / segs) * Math.PI;
      verts.push(
        Math.sin(p0) * Math.cos(theta) * radius,
        Math.cos(p0) * radius,
        Math.sin(p0) * Math.sin(theta) * radius,
        Math.sin(p1) * Math.cos(theta) * radius,
        Math.cos(p1) * radius,
        Math.sin(p1) * Math.sin(theta) * radius,
      );
    }
  }

  return new Float32Array(verts);
}

/** Great-circle arcs between nearby sphere nodes. */
function buildConnectionArcs(
  positions: Float32Array,
  maxDist: number,
  maxNeighbors: number,
  segmentsPerArc = 10,
  lift = 0.08,
) {
  const count = positions.length / 3;
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    pts.push(
      new THREE.Vector3(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2],
      ),
    );
  }

  const pairs: [number, number][] = [];
  for (let i = 0; i < count; i++) {
    const near: { j: number; d: number }[] = [];
    for (let j = i + 1; j < count; j++) {
      const d = pts[i].distanceTo(pts[j]);
      if (d > 0.01 && d < maxDist) near.push({ j, d });
    }
    near.sort((a, b) => a.d - b.d);
    for (const { j } of near.slice(0, maxNeighbors)) {
      pairs.push([i, j]);
    }
  }

  const vertsPerArc = segmentsPerArc * 2;
  const arr = new Float32Array(pairs.length * vertsPerArc * 3);
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const mid = new THREE.Vector3();
  let o = 0;

  for (const [i, j] of pairs) {
    a.copy(pts[i]);
    b.copy(pts[j]);
    const ra = a.length();
    const rb = b.length();

    for (let s = 0; s < segmentsPerArc; s++) {
      const t0 = s / segmentsPerArc;
      const t1 = (s + 1) / segmentsPerArc;

      for (const t of [t0, t1]) {
        mid.lerpVectors(a, b, t).normalize();
        const bulge = 1 + Math.sin(t * Math.PI) * lift;
        const r = (ra + (rb - ra) * t) * bulge;
        mid.multiplyScalar(r);
        arr[o++] = mid.x;
        arr[o++] = mid.y;
        arr[o++] = mid.z;
      }
    }
  }

  return { positions: arr, arcCount: pairs.length, vertsPerArc };
}

function Starfield({ dotMap }: { dotMap: THREE.Texture | null }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 900;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.elapsedTime * 0.012;
    points.current.rotation.x = Math.sin(clock.elapsedTime * 0.05) * 0.04;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#c8d4ea"
        map={dotMap ?? undefined}
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function ConnectionNetwork({
  scrollProgress,
  nodePositions,
  maxDist,
  maxNeighbors,
  segmentsPerArc = 8,
  lift = 0.08,
  color = "#6aa8e8",
  baseOpacity = 0.22,
  peakOpacity = 0.62,
  nodeSize = 0.05,
  startReveal = 0,
  revealDelay = 0.04,
  dotMap,
}: {
  scrollProgress: React.MutableRefObject<number>;
  nodePositions: Float32Array;
  maxDist: number;
  maxNeighbors: number;
  segmentsPerArc?: number;
  lift?: number;
  color?: string;
  baseOpacity?: number;
  peakOpacity?: number;
  nodeSize?: number;
  startReveal?: number;
  revealDelay?: number;
  dotMap: THREE.Texture | null;
}) {
  const lines = useRef<THREE.LineSegments>(null);
  const nodes = useRef<THREE.Points>(null);

  const network = useMemo(
    () =>
      buildConnectionArcs(
        nodePositions,
        maxDist,
        maxNeighbors,
        segmentsPerArc,
        lift,
      ),
    [nodePositions, maxDist, maxNeighbors, segmentsPerArc, lift],
  );

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const p = clamp01(scrollProgress.current);
    // Hero stays unconnected; lines bloom in as you scroll toward Connect
    const grow = clamp01((p - revealDelay) / Math.max(0.55, 0.85 - revealDelay));
    const reveal = startReveal + grow * (1 - startReveal);
    const opacity =
      baseOpacity +
      grow * (peakOpacity - baseOpacity) +
      (grow > 0.02 ? Math.sin(t * 1.1) * 0.02 : 0);

    if (lines.current) {
      const geo = lines.current.geometry;
      const total = network.arcCount * network.vertsPerArc;
      const visible =
        grow < 0.02 ? 0 : Math.max(2, Math.floor(total * reveal));
      geo.setDrawRange(0, visible - (visible % 2));

      const mat = lines.current.material as THREE.LineBasicMaterial;
      mat.opacity = opacity;
    }

    if (nodes.current) {
      const mat = nodes.current.material as THREE.PointsMaterial;
      mat.opacity =
        grow * (0.75 + grow * 0.2) +
        (grow > 0.02 ? Math.sin(t * 1.3) * 0.04 : 0);
      mat.size = nodeSize * (0.95 + grow * 0.35);
    }
  });

  return (
    <group>
      <points ref={nodes}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={nodeSize}
          color="#ffffff"
          map={dotMap ?? undefined}
          transparent
          opacity={0}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[network.positions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={color}
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

function GlobeWireframe({
  scrollProgress,
  radius,
}: {
  scrollProgress: React.MutableRefObject<number>;
  radius: number;
}) {
  const lines = useRef<THREE.LineSegments>(null);
  const grid = useMemo(() => buildGlobeGrid(radius, 6, 12, 48), [radius]);

  useFrame(({ clock }) => {
    if (!lines.current) return;
    const p = clamp01(scrollProgress.current);
    const grow = clamp01((p - 0.08) / 0.7);
    const mat = lines.current.material as THREE.LineBasicMaterial;
    mat.opacity =
      grow * (0.06 + grow * 0.05) +
      (grow > 0.02 ? Math.sin(clock.elapsedTime * 0.6) * 0.008 : 0);
  });

  return (
    <lineSegments ref={lines}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[grid, 3]} />
      </bufferGeometry>
      <lineBasicMaterial
        color="#7eb4ef"
        transparent
        opacity={0}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

function PointGlobe({
  scrollProgress,
  showConnections = false,
  dotMap,
}: GlobeProps & { dotMap: THREE.Texture | null }) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Points>(null);
  const shell = useRef<THREE.Points>(null);
  const ringA = useRef<THREE.Points>(null);
  const ringB = useRef<THREE.Points>(null);
  const glow = useRef<THREE.Mesh>(null);

  // Minimal dotted sphere — visible round silhouette, no fill cloud
  const corePos = useMemo(
    () =>
      fibonacciSphere(
        showConnections ? 2400 : 4200,
        showConnections ? 2.3 : 2.32,
        showConnections ? 0.01 : 0.1,
        11,
      ),
    [showConnections],
  );
  const shellPos = useMemo(
    () =>
      fibonacciSphere(
        showConnections ? 420 : 900,
        showConnections ? 2.5 : 2.72,
        showConnections ? 0.025 : 0.18,
        29,
      ),
    [showConnections],
  );
  const ringPosA = useMemo(() => makeRing(160, 3.0, 0.55, 0.2), []);
  const ringPosB = useMemo(() => makeRing(120, 3.28, -0.35, 0.7), []);

  // Sparse network on the sphere — local mesh + a few long global arcs
  const meshNodes = useMemo(
    () => (showConnections ? fibonacciSphere(160, 2.34, 0.01, 47) : null),
    [showConnections],
  );
  const midNodes = useMemo(
    () => (showConnections ? fibonacciSphere(64, 2.38, 0.012, 67) : null),
    [showConnections],
  );
  const longNodes = useMemo(
    () => (showConnections ? fibonacciSphere(40, 2.42, 0.008, 91) : null),
    [showConnections],
  );

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const p = clamp01(scrollProgress.current);

    if (group.current) {
      group.current.rotation.y = t * 0.055 + p * 1.35;
      group.current.rotation.x = 0.22 + Math.sin(t * 0.16) * 0.035 + p * 0.12;
      const scale = showConnections
        ? 1.08 + p * 0.14
        : 0.74 + p * 0.3;
      group.current.scale.setScalar(scale);
      group.current.position.y = showConnections
        ? (0.1 - p) * 0.08
        : (0.5 - p) * 0.35;
      group.current.position.z = showConnections ? p * 0.12 : p * 0.7;
    }

    if (core.current) {
      const mat = core.current.material as THREE.PointsMaterial;
      if (showConnections) {
        // Soft dotted globe only at top — connections stay off until scroll
        mat.opacity = 0.58 + p * 0.08 + Math.sin(t * 0.9) * 0.025;
        mat.size = 0.034 + p * 0.003 + Math.sin(t * 1.4) * 0.001;
      } else {
        mat.opacity = 0.42 + p * 0.3 + Math.sin(t * 0.9) * 0.03;
        mat.size = 0.015 + p * 0.01 + Math.sin(t * 1.4) * 0.0015;
      }
    }

    if (shell.current) {
      const mat = shell.current.material as THREE.PointsMaterial;
      mat.opacity = showConnections
        ? 0.34 + p * 0.1 + Math.sin(t * 0.6 + 1) * 0.025
        : 0.24 + p * 0.22 + Math.sin(t * 0.6 + 1) * 0.04;
      mat.size = showConnections
        ? 0.038 + p * 0.004
        : 0.03;
      shell.current.rotation.y = -t * 0.04;
    }

    if (ringA.current) {
      ringA.current.rotation.z = t * 0.22;
      const mat = ringA.current.material as THREE.PointsMaterial;
      mat.opacity = 0.18 + p * 0.1 + Math.sin(t * 1.1) * 0.03;
    }

    if (ringB.current) {
      ringB.current.rotation.z = -t * 0.14;
      const mat = ringB.current.material as THREE.PointsMaterial;
      mat.opacity = 0.12 + p * 0.08 + Math.sin(t * 0.8 + 2) * 0.025;
    }

    if (glow.current) {
      const mat = glow.current.material as THREE.MeshBasicMaterial;
      mat.opacity =
        (showConnections ? 0.045 : 0.06) +
        Math.sin(t * 0.7) * 0.008 +
        p * 0.02;
      glow.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.03);
    }
  });

  return (
    <group ref={group}>
      <points ref={core}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[corePos, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={showConnections ? 0.034 : 0.016}
          color={showConnections ? "#e4ecf8" : "#b4c6e8"}
          map={dotMap ?? undefined}
          transparent
          opacity={showConnections ? 0.6 : 0.55}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <points ref={shell}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[shellPos, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={showConnections ? 0.038 : 0.03}
          color={showConnections ? "#b8d0ee" : "#7aa8e8"}
          map={dotMap ?? undefined}
          transparent
          opacity={showConnections ? 0.36 : 0.28}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {showConnections && (
        <GlobeWireframe scrollProgress={scrollProgress} radius={2.32} />
      )}

      {meshNodes && (
        <ConnectionNetwork
          scrollProgress={scrollProgress}
          nodePositions={meshNodes}
          maxDist={1.15}
          maxNeighbors={5}
          segmentsPerArc={8}
          lift={0.07}
          color="#8ebef0"
          baseOpacity={0.02}
          peakOpacity={0.48}
          nodeSize={0.07}
          startReveal={0}
          revealDelay={0.05}
          dotMap={dotMap}
        />
      )}

      {midNodes && (
        <ConnectionNetwork
          scrollProgress={scrollProgress}
          nodePositions={midNodes}
          maxDist={1.85}
          maxNeighbors={3}
          segmentsPerArc={10}
          lift={0.11}
          color="#6aa8e8"
          baseOpacity={0.01}
          peakOpacity={0.4}
          nodeSize={0.085}
          startReveal={0}
          revealDelay={0.18}
          dotMap={dotMap}
        />
      )}

      {longNodes && (
        <ConnectionNetwork
          scrollProgress={scrollProgress}
          nodePositions={longNodes}
          maxDist={2.8}
          maxNeighbors={2}
          segmentsPerArc={12}
          lift={0.15}
          color="#5b9de8"
          baseOpacity={0.01}
          peakOpacity={0.34}
          nodeSize={0.1}
          startReveal={0}
          revealDelay={0.32}
          dotMap={dotMap}
        />
      )}

      <points ref={ringA}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[ringPosA, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.016}
          color="#5b9de8"
          map={dotMap ?? undefined}
          transparent
          opacity={0.2}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <points ref={ringB}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[ringPosB, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.014}
          color="#8eb4e0"
          map={dotMap ?? undefined}
          transparent
          opacity={0.14}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <mesh ref={glow}>
        <sphereGeometry args={[showConnections ? 2.0 : 1.55, 48, 48]} />
        <meshBasicMaterial
          color="#3d6fa8"
          transparent
          opacity={showConnections ? 0.04 : 0.06}
          depthWrite={false}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[showConnections ? 2.45 : 2.5, 48, 48]} />
        <meshBasicMaterial
          color="#5b9de8"
          transparent
          opacity={showConnections ? 0.02 : 0.035}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function PointerParallax({
  scrollProgress,
  cameraZ = 7.2,
}: {
  scrollProgress: React.MutableRefObject<number>;
  cameraZ?: number;
}) {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      target.current.x = nx * 0.28;
      target.current.y = -ny * 0.18;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame(() => {
    current.current.x += (target.current.x - current.current.x) * 0.045;
    current.current.y += (target.current.y - current.current.y) * 0.045;
    const p = clamp01(scrollProgress.current);
    camera.position.x = current.current.x;
    camera.position.y = current.current.y + (0.5 - p) * 0.12;
    camera.position.z = cameraZ;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function GlobeCanvas({
  scrollProgress,
  showConnections = false,
}: {
  scrollProgress: React.MutableRefObject<number>;
  showConnections?: boolean;
}) {
  const cameraZ = showConnections ? 6.1 : 7.2;
  const dotMap = useMemo(() => makeRoundDotTexture(), []);

  useEffect(() => {
    return () => {
      dotMap?.dispose();
    };
  }, [dotMap]);

  return (
    <div
      className={`wc-globe absolute inset-0 z-0${showConnections ? " wc-globe--network" : ""}`}
      aria-hidden
    >
      <div className="wc-globe-nebula" />
      <div className="wc-globe-nebula wc-globe-nebula--secondary" />

      <Canvas
        className="relative z-[1] !bg-transparent"
        camera={{ position: [0, 0, cameraZ], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, premultipliedAlpha: false }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 2, 6]} intensity={1.2} color="#7aa8e8" />
        <pointLight position={[-4, -2, 3]} intensity={0.4} color="#4a7ab8" />
        <Starfield dotMap={dotMap} />
        <PointGlobe
          scrollProgress={scrollProgress}
          showConnections={showConnections}
          dotMap={dotMap}
        />
        <PointerParallax scrollProgress={scrollProgress} cameraZ={cameraZ} />
      </Canvas>

      <div className="wc-globe-vignette" />
      <div className="wc-globe-grain" />
    </div>
  );
}
