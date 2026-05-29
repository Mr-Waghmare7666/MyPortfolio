import { Canvas } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Cluster() {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.2;
    groupRef.current.rotation.x += delta * 0.08;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.2}>
      <group ref={groupRef}>
        <mesh>
          <icosahedronGeometry args={[1.25, 1]} />
          <meshStandardMaterial color="#79A1FF" wireframe />
        </mesh>

        <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[2.2, 0.08, 24, 120]} />
          <meshStandardMaterial color="#5BE6C9" />
        </mesh>

        <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2.2, Math.PI / 6]}>
          <torusGeometry args={[1.75, 0.06, 20, 120]} />
          <meshStandardMaterial color="#FF9A77" />
        </mesh>
      </group>
    </Float>
  );
}

export default function Scene() {
  return (
    <Canvas className="h-full w-full">
      <ambientLight intensity={0.65} />
      <directionalLight position={[2, 3, 2]} intensity={1.1} color="#D5E4FF" />
      <pointLight position={[-3, -2, -2]} intensity={1.4} color="#5BE6C9" />
      <Stars radius={36} depth={28} count={1800} factor={3.4} saturation={0.7} fade speed={1} />
      <Cluster />
    </Canvas>
  );
}