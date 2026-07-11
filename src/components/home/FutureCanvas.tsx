"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function WireSphere() {
  const outer = useRef<THREE.Mesh>(null);
  const mid = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (outer.current) {
      outer.current.rotation.y = t * 0.08;
      outer.current.rotation.x = Math.sin(t * 0.12) * 0.08;
    }
    if (mid.current) {
      mid.current.rotation.y = -t * 0.12;
      mid.current.rotation.z = t * 0.05;
    }
  });

  return (
    <group>
      <mesh ref={outer}>
        <icosahedronGeometry args={[2.6, 2]} />
        <meshBasicMaterial color="#4d7ec4" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh ref={mid}>
        <icosahedronGeometry args={[2.05, 1]} />
        <meshBasicMaterial color="#6f9ad8" wireframe transparent opacity={0.28} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.55, 48, 48]} />
        <meshBasicMaterial color="#5b9de8" transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

function CoreHex() {
  const core = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (core.current) {
      core.current.rotation.y = t * 0.45;
      core.current.rotation.x = t * 0.2;
    }
    if (glow.current) {
      const s = 1 + Math.sin(t * 2.2) * 0.06;
      glow.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      <mesh ref={glow}>
        <sphereGeometry args={[0.72, 32, 32]} />
        <meshBasicMaterial color="#7eb0ff" transparent opacity={0.12} />
      </mesh>
      <mesh ref={core}>
        <dodecahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color="#c5d8f5"
          emissive="#5b9de8"
          emissiveIntensity={2.2}
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>
      <mesh>
        <dodecahedronGeometry args={[0.62, 0]} />
        <meshBasicMaterial color="#a8bdea" wireframe transparent opacity={0.65} />
      </mesh>
    </group>
  );
}

function OrbitRings() {
  const a = useRef<THREE.Group>(null);
  const b = useRef<THREE.Group>(null);
  const c = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (a.current) a.current.rotation.z = t * 0.25;
    if (b.current) b.current.rotation.z = -t * 0.18;
    if (c.current) c.current.rotation.z = t * 0.12;
  });

  return (
    <>
      <group ref={a} rotation={[Math.PI / 2.6, 0.35, 0]}>
        <mesh>
          <torusGeometry args={[3.15, 0.012, 12, 180]} />
          <meshBasicMaterial color="#89b4f0" transparent opacity={0.7} />
        </mesh>
      </group>
      <group ref={b} rotation={[Math.PI / 3.2, -0.55, 0.4]}>
        <mesh>
          <torusGeometry args={[3.55, 0.008, 12, 180]} />
          <meshBasicMaterial color="#a8bdea" transparent opacity={0.45} />
        </mesh>
      </group>
      <group ref={c} rotation={[1.1, 0.8, -0.2]}>
        <mesh>
          <torusGeometry args={[3.9, 0.006, 12, 160]} />
          <meshBasicMaterial color="#5b9de8" transparent opacity={0.28} />
        </mesh>
      </group>
    </>
  );
}

function DataRain() {
  const group = useRef<THREE.Group>(null);

  const streaks = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        x: (i % 9) * 0.55 - 2.2,
        z: Math.floor(i / 9) * -0.55 - 0.2,
        speed: 0.55 + (i % 5) * 0.12,
        len: 0.4 + (i % 4) * 0.25,
        delay: i * 0.37,
      })),
    [],
  );

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      const s = streaks[i];
      child.position.y = ((clock.elapsedTime * s.speed + s.delay) % 9) - 4.5;
    });
  });

  return (
    <group ref={group} position={[1.5, 0, 0]}>
      {streaks.map((s, i) => (
        <mesh key={i} position={[s.x, 0, s.z]}>
          <boxGeometry args={[0.012, s.len, 0.012]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? "#7aa8e8" : "#c4d4f0"}
            transparent
            opacity={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

function Dust() {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 700;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.35) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.elapsedTime * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#b8cdf0"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function FutureRig() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * 0.25 + t * 0.05,
      0.04,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * 0.12 + 0.15,
      0.04,
    );
  });

  return (
    <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.35}>
      <group ref={group} position={[2.4, 0.05, 0]} scale={1.05}>
        <WireSphere />
        <CoreHex />
        <OrbitRings />
        <DataRain />
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#02040a"]} />
      <fog attach="fog" args={["#02040a", 8, 22]} />
      <ambientLight intensity={0.25} />
      <pointLight position={[5, 3, 4]} intensity={2.2} color="#6ea4ef" />
      <pointLight position={[-4, -2, 2]} intensity={0.8} color="#a8bdea" />
      <pointLight position={[2, 1, 3]} intensity={1.4} color="#ffffff" />
      <Stars radius={50} depth={40} count={1800} factor={2.8} saturation={0} fade speed={0.5} />
      <Dust />
      <FutureRig />
    </>
  );
}

export function FutureCanvas() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8.2], fov: 40 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(2,4,10,0.88) 0%, rgba(2,4,10,0.35) 42%, rgba(2,4,10,0.08) 72%), linear-gradient(180deg, rgba(2,4,10,0.45) 0%, transparent 35%, rgba(2,4,10,0.7) 100%)",
        }}
      />
    </div>
  );
}
