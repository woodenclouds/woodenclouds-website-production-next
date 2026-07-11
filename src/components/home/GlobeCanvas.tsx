"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type GlobeProps = {
  scrollProgress: React.MutableRefObject<number>;
  showConnections?: boolean;
};

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

/** Build great-circle-ish arcs between nearby sphere nodes. */
function buildConnectionArcs(
  positions: Float32Array,
  maxDist: number,
  maxNeighbors: number,
  segmentsPerArc = 10,
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
        // Lift arc slightly off the surface at the middle
        const lift = 1 + Math.sin(t * Math.PI) * 0.045;
        const r = (ra + (rb - ra) * t) * lift;
        mid.multiplyScalar(r);
        arr[o++] = mid.x;
        arr[o++] = mid.y;
        arr[o++] = mid.z;
      }
    }
  }

  return { positions: arr, arcCount: pairs.length, vertsPerArc };
}

function Starfield() {
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
  color = "#6aa8e8",
  baseOpacity = 0.12,
  peakOpacity = 0.72,
  nodeSize = 0.05,
}: {
  scrollProgress: React.MutableRefObject<number>;
  nodePositions: Float32Array;
  maxDist: number;
  maxNeighbors: number;
  segmentsPerArc?: number;
  color?: string;
  baseOpacity?: number;
  peakOpacity?: number;
  nodeSize?: number;
}) {
  const lines = useRef<THREE.LineSegments>(null);
  const nodes = useRef<THREE.Points>(null);

  const network = useMemo(
    () => buildConnectionArcs(nodePositions, maxDist, maxNeighbors, segmentsPerArc),
    [nodePositions, maxDist, maxNeighbors, segmentsPerArc],
  );

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const p = scrollProgress.current;
    // Ease toward a fully connected mesh by end of page scroll
    const eased = p * p * (3 - 2 * p);
    const reveal = 0.08 + eased * 0.92;
    const opacity =
      baseOpacity + eased * (peakOpacity - baseOpacity) + Math.sin(t * 1.15) * 0.035;

    if (lines.current) {
      const geo = lines.current.geometry;
      const total = network.arcCount * network.vertsPerArc;
      const visible = Math.max(2, Math.floor(total * reveal));
      geo.setDrawRange(0, visible - (visible % 2));

      const mat = lines.current.material as THREE.LineBasicMaterial;
      mat.opacity = opacity;
    }

    if (nodes.current) {
      const mat = nodes.current.material as THREE.PointsMaterial;
      mat.opacity = 0.35 + eased * 0.6 + Math.sin(t * 1.4) * 0.05;
      mat.size = nodeSize * (0.85 + eased * 0.55);
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
          color="#b8d4f5"
          transparent
          opacity={0.55}
          sizeAttenuation
          depthWrite={false}
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
          opacity={baseOpacity}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

function PointGlobe({ scrollProgress, showConnections = false }: GlobeProps) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Points>(null);
  const shell = useRef<THREE.Points>(null);
  const ringA = useRef<THREE.Points>(null);
  const ringB = useRef<THREE.Points>(null);
  const glow = useRef<THREE.Mesh>(null);

  const corePos = useMemo(() => fibonacciSphere(4200, 2.32, 0.1, 11), []);
  const shellPos = useMemo(() => fibonacciSphere(900, 2.72, 0.18, 29), []);
  const ringPosA = useMemo(() => makeRing(220, 3.05, 0.55, 0.2), []);
  const ringPosB = useMemo(() => makeRing(160, 3.35, -0.35, 0.7), []);
  // Dense mesh + longer-range arcs for the full connected look
  const meshNodes = useMemo(
    () => (showConnections ? fibonacciSphere(380, 2.46, 0.03, 47) : null),
    [showConnections],
  );
  const longNodes = useMemo(
    () => (showConnections ? fibonacciSphere(120, 2.52, 0.02, 91) : null),
    [showConnections],
  );

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const p = scrollProgress.current;
    const eased = p * p * (3 - 2 * p);

    if (group.current) {
      group.current.rotation.y = t * 0.055 + p * 1.85;
      group.current.rotation.x = 0.16 + Math.sin(t * 0.16) * 0.04 + p * 0.28;
      // Fill the viewport; grow slightly as the network completes
      const scale = (showConnections ? 1.12 : 0.74) + eased * 0.38;
      group.current.scale.setScalar(scale);
      group.current.position.y = showConnections ? (0.35 - p) * 0.2 : (0.5 - p) * 0.35;
      group.current.position.z = showConnections ? eased * 0.35 : p * 0.7;
    }

    if (core.current) {
      const mat = core.current.material as THREE.PointsMaterial;
      mat.opacity = 0.22 + eased * 0.45 + Math.sin(t * 0.9) * 0.03;
      mat.size = 0.012 + eased * 0.008 + Math.sin(t * 1.4) * 0.0012;
    }

    if (shell.current) {
      const mat = shell.current.material as THREE.PointsMaterial;
      mat.opacity = 0.14 + eased * 0.28 + Math.sin(t * 0.6 + 1) * 0.04;
      shell.current.rotation.y = -t * 0.04;
    }

    if (ringA.current) {
      ringA.current.rotation.z = t * 0.22;
      const mat = ringA.current.material as THREE.PointsMaterial;
      mat.opacity = 0.28 + eased * 0.2 + Math.sin(t * 1.1) * 0.06;
    }

    if (ringB.current) {
      ringB.current.rotation.z = -t * 0.14;
      const mat = ringB.current.material as THREE.PointsMaterial;
      mat.opacity = 0.18 + eased * 0.15 + Math.sin(t * 0.8 + 2) * 0.05;
    }

    if (glow.current) {
      const mat = glow.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.05 + Math.sin(t * 0.7) * 0.01 + eased * 0.04;
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
          size={0.016}
          color="#b4c6e8"
          transparent
          opacity={0.55}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <points ref={shell}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[shellPos, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#7aa8e8"
          transparent
          opacity={0.28}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {meshNodes && (
        <ConnectionNetwork
          scrollProgress={scrollProgress}
          nodePositions={meshNodes}
          maxDist={1.15}
          maxNeighbors={5}
          segmentsPerArc={7}
          color="#7eb4ef"
          baseOpacity={0.1}
          peakOpacity={0.78}
          nodeSize={0.042}
        />
      )}

      {longNodes && (
        <ConnectionNetwork
          scrollProgress={scrollProgress}
          nodePositions={longNodes}
          maxDist={2.1}
          maxNeighbors={3}
          segmentsPerArc={12}
          color="#5b9de8"
          baseOpacity={0.06}
          peakOpacity={0.55}
          nodeSize={0.065}
        />
      )}

      <points ref={ringA}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[ringPosA, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#5b9de8"
          transparent
          opacity={0.4}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <points ref={ringB}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[ringPosB, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.016}
          color="#8eb4e0"
          transparent
          opacity={0.28}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <mesh ref={glow}>
        <sphereGeometry args={[1.55, 48, 48]} />
        <meshBasicMaterial
          color="#3d6fa8"
          transparent
          opacity={0.06}
          depthWrite={false}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.5, 48, 48]} />
        <meshBasicMaterial
          color="#5b9de8"
          transparent
          opacity={0.035}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function PointerParallax({
  scrollProgress,
}: {
  scrollProgress: React.MutableRefObject<number>;
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
    const p = scrollProgress.current;
    camera.position.x = current.current.x;
    camera.position.y = current.current.y + (0.5 - p) * 0.15;
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
  return (
    <div
      className={`wc-globe absolute inset-0 z-0${showConnections ? " wc-globe--network" : ""}`}
      aria-hidden
    >
      <div className="wc-globe-nebula" />
      <div className="wc-globe-nebula wc-globe-nebula--secondary" />

      <Canvas
        className="relative z-[1] !bg-transparent"
        camera={{ position: [0, 0, showConnections ? 6.4 : 7.2], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, premultipliedAlpha: false }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[5, 2, 6]} intensity={1.1} color="#7aa8e8" />
        <pointLight position={[-4, -2, 3]} intensity={0.35} color="#4a7ab8" />
        <Starfield />
        <PointGlobe
          scrollProgress={scrollProgress}
          showConnections={showConnections}
        />
        <PointerParallax scrollProgress={scrollProgress} />
      </Canvas>

      <div className="wc-globe-vignette" />
      <div className="wc-globe-grain" />
    </div>
  );
}
