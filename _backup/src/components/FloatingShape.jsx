import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';

export default function FloatingShape() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color="#1e3a8a"
          speed={3}
          distort={0.4}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}
