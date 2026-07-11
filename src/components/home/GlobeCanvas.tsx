"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type GlobeProps = {
  scrollProgress: React.MutableRefObject<number>;
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
    // tilt X then Z
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

function PointGlobe({ scrollProgress }: GlobeProps) {
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

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const p = scrollProgress.current;

    if (group.current) {
      group.current.rotation.y = t * 0.07 + p * 2.4;
      group.current.rotation.x = 0.18 + Math.sin(t * 0.18) * 0.05 + p * 0.5;
      const scale = 0.74 + p * 0.52;
      group.current.scale.setScalar(scale);
      group.current.position.y = (0.5 - p) * 0.35;
      group.current.position.z = p * 0.7;
    }

    if (core.current) {
      const mat = core.current.material as THREE.PointsMaterial;
      mat.opacity = 0.28 + p * 0.55 + Math.sin(t * 0.9) * 0.04;
      mat.size = 0.013 + p * 0.01 + Math.sin(t * 1.4) * 0.0015;
    }

    if (shell.current) {
      const mat = shell.current.material as THREE.PointsMaterial;
      mat.opacity = 0.18 + p * 0.35 + Math.sin(t * 0.6 + 1) * 0.05;
      shell.current.rotation.y = -t * 0.04;
    }

    if (ringA.current) {
      ringA.current.rotation.z = t * 0.22;
      const mat = ringA.current.material as THREE.PointsMaterial;
      mat.opacity = 0.35 + Math.sin(t * 1.1) * 0.08;
    }

    if (ringB.current) {
      ringB.current.rotation.z = -t * 0.14;
      const mat = ringB.current.material as THREE.PointsMaterial;
      mat.opacity = 0.22 + Math.sin(t * 0.8 + 2) * 0.06;
    }

    if (glow.current) {
      const mat = glow.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.055 + Math.sin(t * 0.7) * 0.012 + p * 0.03;
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

      {/* Soft luminous core — frames the headline */}
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
}: {
  scrollProgress: React.MutableRefObject<number>;
}) {
  return (
    <div className="wc-globe absolute inset-0 z-0" aria-hidden>
      {/* Atmospheric wash — depth behind the particle field */}
      <div className="wc-globe-nebula" />
      <div className="wc-globe-nebula wc-globe-nebula--secondary" />

      <Canvas
        className="relative z-[1] !bg-transparent"
        camera={{ position: [0, 0, 7.2], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, premultipliedAlpha: false }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[5, 2, 6]} intensity={1.1} color="#7aa8e8" />
        <pointLight position={[-4, -2, 3]} intensity={0.35} color="#4a7ab8" />
        <Starfield />
        <PointGlobe scrollProgress={scrollProgress} />
        <PointerParallax scrollProgress={scrollProgress} />
      </Canvas>

      <div className="wc-globe-vignette" />
      <div className="wc-globe-grain" />
    </div>
  );
}
