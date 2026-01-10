import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingShape() {
  const meshRef = useRef();
  const wireRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = -time * 0.1;
      wireRef.current.rotation.z = time * 0.2;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
      <group>
        {/* Core AI Intelligence Sphere */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color="#001d3d"
            speed={2}
            distort={0.4}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>

        {/* Outer Neural Network Web */}
        <mesh ref={wireRef}>
          <sphereGeometry args={[1.3, 16, 16]} />
          <meshStandardMaterial
            color="#00f3ff"
            wireframe
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Digital Nodes */}
        <group>
          {[...Array(8)].map((_, i) => (
            <mesh key={i} position={[
              Math.sin(i * Math.PI / 4) * 1.5,
              Math.cos(i * Math.PI / 4) * 1.5,
              Math.sin(i * 2) * 0.5
            ]}>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
            </mesh>
          ))}
        </group>
      </group>
    </Float>
  );
}
