"use client";

import { useGLTF, Environment, ContactShadows, PresentationControls, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CarModel() {
  const { scene } = useGLTF("/buick_riviera_1963-1965__www.vecarz.com.glb");
  const groupRef = useRef<THREE.Group>(null);

  // Animation targets - Massive Scale
  const targetPosition = new THREE.Vector3(0, -1, 0);
  const targetScale = new THREE.Vector3(3.5, 3.5, 3.5);
  const targetRotationY = -Math.PI / 10;

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smoothly lerp towards the massive target position and scale
      groupRef.current.position.lerp(targetPosition, delta * 2);
      groupRef.current.scale.lerp(targetScale, delta * 2);
      
      // Smoothly lerp rotation
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, delta * 2);
    }
  });

  return (
    <PresentationControls 
      global
      rotation={[0, 0.3, 0]} 
      polar={[-Math.PI / 6, Math.PI / 6]} 
      azimuth={[-Math.PI / 4, Math.PI / 4]}
    >
      <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.05}>
        <group
          ref={groupRef}
          position={[0, 0, -20]}
          rotation={[0, Math.PI / 4, 0]}
          scale={0}
        >
          <primitive object={scene} />
          
          {/* Extremely Cinematic Lighting Setup */}
          <ambientLight intensity={0.1} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" castShadow />
          <directionalLight position={[-5, 5, -5]} intensity={2.5} color="#D4AF37" />
          <spotLight position={[0, 10, 0]} intensity={4} angle={0.6} penumbra={1} color="#ffffff" />
          <spotLight position={[10, 0, 0]} intensity={3} angle={0.3} penumbra={1} color="#D4AF37" />
          
          <Environment preset="studio" />
          <ContactShadows position={[0, -0.6, 0]} opacity={0.8} scale={15} blur={3} far={4} color="#000000" resolution={512} />
        </group>
      </Float>
    </PresentationControls>
  );
}

// Preload the model
useGLTF.preload("/buick_riviera_1963-1965__www.vecarz.com.glb");
