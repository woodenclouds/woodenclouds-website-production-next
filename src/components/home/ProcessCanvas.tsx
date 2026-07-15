"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type ProcessCanvasProps = {
  scrollProgress: React.MutableRefObject<number>;
  stepCount: number;
};

const DUST = 420;
const ORBIT = 48;

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function ease(t: number) {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
}

function seeded(i: number, salt: number) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function buildFormations(count: number, steps: number) {
  const out: Float32Array[] = [];

  for (let s = 0; s < steps; s++) {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = i / count;
      const r1 = seeded(i, s + 1);
      const r2 = seeded(i, s + 17);
      const r3 = seeded(i, s + 41);
      let x = 0;
      let y = 0;
      let z = 0;

      switch (s % 6) {
        case 0: {
          // Discover — expansive nebula
          const radius = 1.35 + r1 * 1.85;
          const theta = r2 * Math.PI * 2;
          const phi = Math.acos(2 * r3 - 1);
          x = radius * Math.sin(phi) * Math.cos(theta);
          y = radius * Math.sin(phi) * Math.sin(theta) * 0.72;
          z = radius * Math.cos(phi);
          break;
        }
        case 1: {
          // Define — tight orbital ring + poles
          if (i % 5 === 0) {
            y = (r1 - 0.5) * 3.2;
            x = (r2 - 0.5) * 0.35;
            z = (r3 - 0.5) * 0.35;
          } else {
            const a = u * Math.PI * 2;
            const ring = 1.7 + (r1 - 0.5) * 0.1;
            x = Math.cos(a) * ring;
            y = Math.sin(a * 2) * 0.2;
            z = Math.sin(a) * ring;
          }
          break;
        }
        case 2: {
          // Design — layered planes
          const layer = i % 3;
          const cols = 18;
          const row = Math.floor(i / cols);
          const col = i % cols;
          x = (col / (cols - 1) - 0.5) * 3.4;
          y = (row / Math.ceil(count / cols) - 0.5) * 2.2;
          z = (layer - 1) * 0.55 + (r1 - 0.5) * 0.08;
          break;
        }
        case 3: {
          // Build — cubic scaffold
          const side = Math.ceil(Math.cbrt(count));
          const ix = i % side;
          const iy = Math.floor(i / side) % side;
          const iz = Math.floor(i / (side * side));
          x = (ix / Math.max(side - 1, 1) - 0.5) * 2.4;
          y = (iy / Math.max(side - 1, 1) - 0.5) * 2.4;
          z = (iz / Math.max(side - 1, 1) - 0.5) * 2.4;
          break;
        }
        case 4: {
          // Launch — rising helix
          const t = u;
          const a = t * Math.PI * 8;
          const radius = 1.55 * (1 - t * 0.82);
          x = Math.cos(a) * radius;
          y = (t - 0.42) * 3.6;
          z = Math.sin(a) * radius;
          break;
        }
        default: {
          // Evolve — living torus cloud
          const a = u * Math.PI * 2;
          const tube = 0.62 + (r1 - 0.5) * 0.22;
          const R = 1.45;
          const twist = a * 4;
          x = (R + tube * Math.cos(twist)) * Math.cos(a);
          y = tube * Math.sin(twist);
          z = (R + tube * Math.cos(twist)) * Math.sin(a);
          break;
        }
      }

      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    out.push(arr);
  }

  return out;
}

function makeDotTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(10,10,10,1)");
  g.addColorStop(0.28, "rgba(10,10,10,0.75)");
  g.addColorStop(0.62, "rgba(10,10,10,0.22)");
  g.addColorStop(1, "rgba(10,10,10,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function WireCore({
  scrollProgress,
  stepCount,
}: {
  scrollProgress: React.MutableRefObject<number>;
  stepCount: number;
}) {
  const group = useRef<THREE.Group>(null);
  const ico = useRef<THREE.LineSegments>(null);
  const octa = useRef<THREE.LineSegments>(null);
  const box = useRef<THREE.LineSegments>(null);
  const torus = useRef<THREE.LineSegments>(null);

  const geos = useMemo(
    () => ({
      ico: new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.35, 1)),
      octa: new THREE.EdgesGeometry(new THREE.OctahedronGeometry(1.2, 0)),
      box: new THREE.EdgesGeometry(new THREE.BoxGeometry(1.7, 1.7, 1.7)),
      torus: new THREE.EdgesGeometry(new THREE.TorusKnotGeometry(0.85, 0.22, 100, 12)),
    }),
    [],
  );

  useFrame((state) => {
    const p = clamp01(scrollProgress.current);
    const scaled = p * Math.max(stepCount - 1, 1);
    const step = scaled;
    const t = state.clock.elapsedTime;

    if (group.current) {
      group.current.rotation.y = t * 0.18 + p * Math.PI * 0.85;
      group.current.rotation.x = Math.sin(t * 0.35) * 0.18 + p * 0.25;
      group.current.rotation.z = Math.cos(t * 0.22) * 0.08;
      const breathe = 1 + Math.sin(t * 1.1) * 0.03;
      group.current.scale.setScalar((0.95 + p * 0.2) * breathe);
    }

    const setOpacity = (ref: React.RefObject<THREE.LineSegments | null>, weight: number) => {
      if (!ref.current) return;
      const mat = ref.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.05 + weight * 0.55;
      ref.current.visible = weight > 0.04;
      ref.current.scale.setScalar(0.85 + weight * 0.25);
    };

    setOpacity(ico, ease(1 - Math.abs(step - 0) * 0.7) * (step < 2 ? 1 : 0.35));
    setOpacity(octa, ease(1 - Math.abs(step - 1.2) * 0.75));
    setOpacity(box, ease(1 - Math.abs(step - 3) * 0.7));
    setOpacity(torus, ease(1 - Math.abs(step - 5) * 0.65) + ease((step - 4) / 2) * 0.4);
  });

  return (
    <group ref={group}>
      <lineSegments ref={ico} geometry={geos.ico}>
        <lineBasicMaterial color="#0a0a0a" transparent opacity={0.35} depthWrite={false} />
      </lineSegments>
      <lineSegments ref={octa} geometry={geos.octa}>
        <lineBasicMaterial color="#0a0a0a" transparent opacity={0.12} depthWrite={false} />
      </lineSegments>
      <lineSegments ref={box} geometry={geos.box}>
        <lineBasicMaterial color="#0a0a0a" transparent opacity={0.12} depthWrite={false} />
      </lineSegments>
      <lineSegments ref={torus} geometry={geos.torus}>
        <lineBasicMaterial color="#0a0a0a" transparent opacity={0.1} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

function OrbitRings({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const a = useRef<THREE.Mesh>(null);
  const b = useRef<THREE.Mesh>(null);
  const c = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const p = clamp01(scrollProgress.current);
    const t = state.clock.elapsedTime;
    if (a.current) {
      a.current.rotation.x = 0.7 + p * 0.4;
      a.current.rotation.z = t * 0.22;
      a.current.scale.setScalar(1 + p * 0.15);
      (a.current.material as THREE.MeshBasicMaterial).opacity = 0.18 + p * 0.2;
    }
    if (b.current) {
      b.current.rotation.y = t * -0.16;
      b.current.rotation.x = 1.2 - p * 0.35;
      (b.current.material as THREE.MeshBasicMaterial).opacity = 0.12 + p * 0.16;
    }
    if (c.current) {
      c.current.rotation.z = t * 0.1 + p;
      c.current.rotation.x = -0.4;
      (c.current.material as THREE.MeshBasicMaterial).opacity = 0.1 + Math.sin(t) * 0.03 + p * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={a}>
        <torusGeometry args={[1.85, 0.01, 12, 160]} />
        <meshBasicMaterial color="#0a0a0a" transparent opacity={0.22} depthWrite={false} />
      </mesh>
      <mesh ref={b}>
        <torusGeometry args={[2.25, 0.006, 12, 180]} />
        <meshBasicMaterial color="#0a0a0a" transparent opacity={0.14} depthWrite={false} />
      </mesh>
      <mesh ref={c}>
        <torusGeometry args={[2.6, 0.004, 12, 200]} />
        <meshBasicMaterial color="#0a0a0a" transparent opacity={0.1} depthWrite={false} />
      </mesh>
    </group>
  );
}

function OrbitalNodes({
  scrollProgress,
  stepCount,
}: {
  scrollProgress: React.MutableRefObject<number>;
  stepCount: number;
}) {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(() => {
    return Array.from({ length: stepCount }, (_, i) => {
      const t = stepCount === 1 ? 0 : i / (stepCount - 1);
      const angle = t * Math.PI * 1.65 - 0.4;
      return {
        base: new THREE.Vector3(
          Math.cos(angle) * 2.35,
          Math.sin(t * Math.PI) * 1.1 - 0.35,
          Math.sin(angle) * 2.35,
        ),
      };
    });
  }, [stepCount]);

  useFrame((state) => {
    const p = clamp01(scrollProgress.current);
    const scaled = p * Math.max(stepCount - 1, 1);
    const t = state.clock.elapsedTime;
    if (!group.current) return;
    group.current.rotation.y = t * 0.08;

    group.current.children.forEach((child, idx) => {
      const dist = Math.abs(scaled - idx);
      const active = Math.max(0, 1 - dist * 0.9);
      const node = nodes[idx]!;
      const pulse = 1 + Math.sin(t * 3 + idx) * 0.04 * active;
      const s = (0.28 + active * 0.95) * pulse;
      child.scale.setScalar(s);
      child.position.set(
        node.base.x,
        node.base.y + Math.sin(t * 1.4 + idx) * 0.08,
        node.base.z,
      );
      const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      mat.opacity = 0.25 + active * 0.7;
    });
  });

  return (
    <group ref={group}>
      {nodes.map((_, i) => (
        <mesh key={i}>
          <octahedronGeometry args={[0.12, 0]} />
          <meshBasicMaterial color="#0a0a0a" transparent opacity={0.4} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

function GrowingRibbon({
  scrollProgress,
  stepCount,
}: {
  scrollProgress: React.MutableRefObject<number>;
  stepCount: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const curve = useMemo(() => {
    const pts = Array.from({ length: stepCount }, (_, i) => {
      const t = stepCount === 1 ? 0 : i / (stepCount - 1);
      const angle = t * Math.PI * 1.65 - 0.4;
      return new THREE.Vector3(
        Math.cos(angle) * 2.35,
        Math.sin(t * Math.PI) * 1.1 - 0.35,
        Math.sin(angle) * 2.35,
      );
    });
    return new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.4);
  }, [stepCount]);

  const fullGeo = useMemo(() => {
    return new THREE.TubeGeometry(curve, 160, 0.018, 8, false);
  }, [curve]);

  useFrame(() => {
    const p = ease(clamp01(scrollProgress.current));
    if (!mesh.current) return;
    // Reveal the tube by scaling along a draw-progress using morph of drawRange on position
    const geo = mesh.current.geometry as THREE.BufferGeometry;
    const count = geo.getAttribute("position")?.count ?? 0;
    if (count) geo.setDrawRange(0, Math.floor(count * Math.max(0.02, p)));
    const mat = mesh.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.2 + p * 0.45;
  });

  return (
    <mesh ref={mesh} geometry={fullGeo}>
      <meshBasicMaterial color="#0a0a0a" transparent opacity={0.35} depthWrite={false} />
    </mesh>
  );
}

function DustField({
  scrollProgress,
  stepCount,
}: {
  scrollProgress: React.MutableRefObject<number>;
  stepCount: number;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => new Float32Array(DUST * 3), []);
  const formations = useMemo(() => buildFormations(DUST, stepCount), [stepCount]);
  const texture = useMemo(() => makeDotTexture(), []);
  const sizes = useMemo(() => {
    const arr = new Float32Array(DUST);
    for (let i = 0; i < DUST; i++) arr[i] = 0.6 + seeded(i, 9) * 1.4;
    return arr;
  }, []);

  useFrame((state) => {
    const p = clamp01(scrollProgress.current);
    const maxIndex = Math.max(stepCount - 1, 1);
    const scaled = p * maxIndex;
    const i0 = Math.floor(scaled);
    const i1 = Math.min(i0 + 1, stepCount - 1);
    const local = ease(scaled - i0);

    const a = formations[i0];
    const b = formations[i1];
    if (a && b) {
      for (let i = 0; i < DUST; i++) {
        const i3 = i * 3;
        // gentle living motion overlaid on morph targets
        const wobble = Math.sin(state.clock.elapsedTime * 0.9 + i * 0.15) * 0.03;
        positions[i3] = a[i3]! + (b[i3]! - a[i3]!) * local;
        positions[i3 + 1] = a[i3 + 1]! + (b[i3 + 1]! - a[i3 + 1]!) * local + wobble;
        positions[i3 + 2] = a[i3 + 2]! + (b[i3 + 2]! - a[i3 + 2]!) * local;
      }
      const attr = pointsRef.current?.geometry.getAttribute("position");
      if (attr) (attr as THREE.BufferAttribute).needsUpdate = true;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05 + p * 0.4;
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      mat.size = 0.055 + p * 0.02;
      mat.opacity = 0.55 + p * 0.25;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        map={texture ?? undefined}
        size={0.065}
        transparent
        depthWrite={false}
        opacity={0.7}
        sizeAttenuation
        color="#0a0a0a"
      />
    </points>
  );
}

function SatelliteShards({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const shards = useMemo(() => {
    return Array.from({ length: ORBIT }, (_, i) => {
      const a = (i / ORBIT) * Math.PI * 2;
      const r = 2.7 + seeded(i, 3) * 0.55;
      return {
        x: Math.cos(a) * r,
        y: (seeded(i, 4) - 0.5) * 2.2,
        z: Math.sin(a) * r,
        s: 0.04 + seeded(i, 5) * 0.08,
        speed: 0.2 + seeded(i, 6) * 0.5,
        kind: i % 3,
      };
    });
  }, []);

  useFrame((state) => {
    const p = clamp01(scrollProgress.current);
    const t = state.clock.elapsedTime;
    if (!group.current) return;
    group.current.rotation.y = t * 0.12 + p * 0.5;
    group.current.children.forEach((child, i) => {
      const shard = shards[i]!;
      const orbit = t * shard.speed;
      child.position.set(
        Math.cos(orbit + i) * (2.5 + p * 0.35 + shard.s * 4),
        shard.y + Math.sin(orbit * 1.3) * 0.2,
        Math.sin(orbit + i) * (2.5 + p * 0.35 + shard.s * 4),
      );
      child.rotation.x = t * 0.8 + i;
      child.rotation.y = t * 0.5;
      child.scale.setScalar(shard.s * (1.2 + p * 0.8));
      const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      mat.opacity = 0.18 + p * 0.25;
    });
  });

  return (
    <group ref={group}>
      {shards.map((shard, i) => (
        <mesh key={i} position={[shard.x, shard.y, shard.z]}>
          {shard.kind === 0 ? (
            <boxGeometry args={[1, 1, 1]} />
          ) : shard.kind === 1 ? (
            <tetrahedronGeometry args={[1, 0]} />
          ) : (
            <octahedronGeometry args={[1, 0]} />
          )}
          <meshBasicMaterial color="#0a0a0a" transparent opacity={0.25} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const target = useRef(new THREE.Vector3());
  const desired = useRef(new THREE.Vector3());

  useFrame((state) => {
    const p = ease(clamp01(scrollProgress.current));
    const angle = -0.35 + p * Math.PI * 1.15;
    const radius = 5.4 - p * 0.85;
    const height = 0.35 + Math.sin(p * Math.PI) * 0.55;
    desired.current.set(
      Math.sin(angle) * radius,
      height + Math.sin(state.clock.elapsedTime * 0.35) * 0.05,
      Math.cos(angle) * radius,
    );
    state.camera.position.lerp(desired.current, 0.065);
    target.current.set(0, Math.sin(p * Math.PI) * 0.15, 0);
    state.camera.lookAt(target.current);
    const cam = state.camera as THREE.PerspectiveCamera;
    cam.fov = THREE.MathUtils.lerp(cam.fov, 38 + p * 6, 0.05);
    cam.updateProjectionMatrix();
  });

  return null;
}

function ProcessScene({
  scrollProgress,
  stepCount,
}: {
  scrollProgress: React.MutableRefObject<number>;
  stepCount: number;
}) {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 8]} intensity={0.35} color="#ffffff" />
      <CameraRig scrollProgress={scrollProgress} />
      <DustField scrollProgress={scrollProgress} stepCount={stepCount} />
      <WireCore scrollProgress={scrollProgress} stepCount={stepCount} />
      <OrbitRings scrollProgress={scrollProgress} />
      <OrbitalNodes scrollProgress={scrollProgress} stepCount={stepCount} />
      <GrowingRibbon scrollProgress={scrollProgress} stepCount={stepCount} />
      <SatelliteShards scrollProgress={scrollProgress} />
    </>
  );
}

export function ProcessCanvas({ scrollProgress, stepCount }: ProcessCanvasProps) {
  return (
    <Canvas
      className="wc-process-canvas"
      camera={{ position: [0, 0.4, 5.4], fov: 40, near: 0.1, far: 50 }}
      dpr={[1, 2]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        premultipliedAlpha: false,
      }}
      style={{ background: "transparent" }}
    >
      <ProcessScene scrollProgress={scrollProgress} stepCount={stepCount} />
    </Canvas>
  );
}
