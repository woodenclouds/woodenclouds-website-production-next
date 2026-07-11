"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const count = 900;

  const { positions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.3) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return { positions: pos };
  }, []);

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.elapsedTime * 0.04;
    points.current.rotation.x = Math.sin(clock.elapsedTime * 0.15) * 0.08;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#89b4f0"
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function NetworkLines() {
  const group = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    const result: [number, number, number][][] = [];
    for (let i = 0; i < 24; i++) {
      const ax = (Math.random() - 0.2) * 10;
      const ay = (Math.random() - 0.5) * 6;
      const az = (Math.random() - 0.5) * 5;
      result.push([
        [ax, ay, az],
        [
          ax + (Math.random() - 0.5) * 2.4,
          ay + (Math.random() - 0.5) * 2.4,
          az + (Math.random() - 0.5) * 2.4,
        ],
      ]);
    }
    return result;
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.03;
  });

  return (
    <group ref={group}>
      {lines.map((pts, i) => (
        <Line
          key={i}
          points={pts}
          color="#5b9de8"
          transparent
          opacity={0.28}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

function CoreOrb() {
  const mesh = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (mesh.current) {
      mesh.current.rotation.y = t * 0.35;
      mesh.current.rotation.x = t * 0.15;
    }
    if (ring.current) {
      ring.current.rotation.z = t * 0.4;
      ring.current.rotation.x = Math.PI / 2.4 + Math.sin(t * 0.5) * 0.15;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.6}>
      <group position={[2.2, 0.1, 0]}>
        <mesh ref={mesh}>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshStandardMaterial
            color="#0b1220"
            emissive="#2977d4"
            emissiveIntensity={0.55}
            wireframe
            transparent
            opacity={0.9}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#a8bdea"
            emissive="#5b9de8"
            emissiveIntensity={1.2}
            roughness={0.2}
            metalness={0.7}
          />
        </mesh>
        <mesh ref={ring}>
          <torusGeometry args={[1.7, 0.015, 16, 100]} />
          <meshBasicMaterial color="#89b4f0" transparent opacity={0.55} />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0.4, 0]}>
          <torusGeometry args={[2.1, 0.008, 12, 120]} />
          <meshBasicMaterial color="#a8bdea" transparent opacity={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

function DataStreams() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      child.position.y = ((clock.elapsedTime * (0.4 + i * 0.05) + i) % 8) - 4;
    });
  });

  return (
    <group ref={group} position={[4.5, 0, -1]}>
      {Array.from({ length: 18 }).map((_, i) => (
        <mesh key={i} position={[(i % 6) * 0.35 - 1, 0, Math.floor(i / 6) * -0.4]}>
          <boxGeometry args={[0.03, 0.55 + (i % 3) * 0.2, 0.03]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? "#5b9de8" : "#a8bdea"}
            transparent
            opacity={0.45}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#03050a"]} />
      <fog attach="fog" args={["#03050a", 6, 18]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 2, 4]} intensity={1.4} color="#5b9de8" />
      <pointLight position={[-3, -1, 2]} intensity={0.6} color="#a8bdea" />
      <Stars radius={40} depth={30} count={1200} factor={2.5} saturation={0} fade speed={0.6} />
      <ParticleField />
      <NetworkLines />
      <CoreOrb />
      <DataStreams />
    </>
  );
}

export function FutureCanvas() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,5,10,0.92) 0%, rgba(3,5,10,0.55) 38%, rgba(3,5,10,0.25) 70%), linear-gradient(180deg, rgba(3,5,10,0.35) 0%, transparent 40%, rgba(3,5,10,0.75) 100%)",
        }}
      />
    </div>
  );
}
