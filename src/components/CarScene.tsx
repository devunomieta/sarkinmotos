"use client";

import { Canvas } from "@react-three/fiber";
import CarModel from "./CarModel";

export default function CarScene() {
  return (
    <Canvas camera={{ position: [0, 1, 6], fov: 50 }}>
      <CarModel />
    </Canvas>
  );
}
