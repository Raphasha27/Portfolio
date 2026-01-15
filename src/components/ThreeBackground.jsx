import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars, MeshDistortMaterial } from '@react-three/drei';

// Helper to generate points in a sphere
const generateSpherePoints = (count, radius) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = Math.cbrt(Math.random()) * radius;
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
};

// Dynamic Star Field
function StarField(props) {
  const ref = useRef();
  const [sphere] = useState(() => generateSpherePoints(5000, 1.5));
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#4299e1"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// Floating Cyber Sphere
function CyberSphere() {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
      <mesh scale={[1, 1, 1]}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#4338ca"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0}
          emissive="#1e1b4b"
          emissiveIntensity={0.5}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
}

// Tech Node Connections
function TechNodes() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = t * 0.1;
  });

  return (
    <group ref={ref}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-slate-950">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <fog attach="fog" args={['#020617', 0, 3]} />
        <ambientLight intensity={0.5} />
        <StarField />
        <CyberSphere />
        <TechNodes />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
