"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type GlobeProps = {
  scrollProgress: React.MutableRefObject<number>;
};

function PointGlobe({ scrollProgress }: GlobeProps) {
  const points = useRef<THREE.Points>(null);
  const group = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    const count = 3200;
    const arr = new Float32Array(count * 3);
    const radius = 2.35;

    for (let i = 0; i < count; i++) {
      // Fibonacci sphere for even distribution
      const t = i / count;
      const incl = Math.acos(1 - 2 * t);
      const azim = Math.PI * (1 + 5 ** 0.5) * i;
      const r = radius * (0.92 + Math.random() * 0.08);
      arr[i * 3] = r * Math.sin(incl) * Math.cos(azim);
      arr[i * 3 + 1] = r * Math.sin(incl) * Math.sin(azim);
      arr[i * 3 + 2] = r * Math.cos(incl);
    }
    return arr;
  }, []);

  const ringPositions = useMemo(() => {
    const count = 180;
    const arr = new Float32Array(count * 3);
    const radius = 2.85;
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      arr[i * 3] = Math.cos(a) * radius;
      arr[i * 3 + 1] = Math.sin(a) * radius * 0.22;
      arr[i * 3 + 2] = Math.sin(a) * radius * 0.15;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const p = scrollProgress.current;

    if (group.current) {
      group.current.rotation.y = t * 0.12 + p * 1.8;
      group.current.rotation.x = 0.25 + Math.sin(t * 0.2) * 0.08 + p * 0.35;
      const scale = 0.85 + p * 0.35;
      group.current.scale.setScalar(scale);
      group.current.position.y = (1 - p) * 0.15;
    }

    if (points.current) {
      const mat = points.current.material as THREE.PointsMaterial;
      mat.opacity = 0.35 + p * 0.45;
    }
  });

  return (
    <group ref={group}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.018}
          color="#9eb6e8"
          transparent
          opacity={0.55}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[ringPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.022}
          color="#5b9de8"
          transparent
          opacity={0.4}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <mesh>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshBasicMaterial color="#0a1220" transparent opacity={0.35} wireframe />
      </mesh>
    </group>
  );
}

function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[2.55, 48, 48]} />
      <meshBasicMaterial color="#5b9de8" transparent opacity={0.04} side={THREE.BackSide} />
    </mesh>
  );
}

export function GlobeCanvas({
  scrollProgress,
}: {
  scrollProgress: React.MutableRefObject<number>;
}) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 40 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[4, 2, 5]} intensity={1.2} color="#7aa8e8" />
        <PointGlobe scrollProgress={scrollProgress} />
        <Atmosphere />
      </Canvas>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 48%, transparent 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.88) 100%)",
        }}
      />
    </div>
  );
}
