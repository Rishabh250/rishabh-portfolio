'use client';

import { Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

const SubtleParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const particleData = useMemo(() => {
    const count = 50;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 15;
      positions[i + 1] = (Math.random() - 0.5) * 15;
      positions[i + 2] = (Math.random() - 0.5) * 5;
    }

    return positions;
  }, []);

  useFrame(state => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          args={[particleData, 3]}
          attach="attributes-position"
          count={50}
          array={particleData}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#3b82f6"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
};

const FloatingOrb = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(state => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial
        color="#3b82f6"
        transparent
        opacity={0.1}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Subtle Lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.3} />

          {/* Minimal Floating Elements */}
          <FloatingOrb position={[-3, 1, -2]} />
          <FloatingOrb position={[3, -1, -3]} />
          <FloatingOrb position={[0, 2, -4]} />

          {/* Subtle Particles */}
          <SubtleParticles />

          {/* Minimal Stars */}
          <Stars
            radius={80}
            depth={40}
            count={200}
            factor={2}
            saturation={0}
            fade
            speed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
