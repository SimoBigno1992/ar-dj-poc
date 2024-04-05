"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Shoe from "./shoe";

function Scene() {
  return (
    <Canvas
      eventPrefix="client"
      camera={{ position: [0, 0, 4], fov: 40, zoom: 0.5 }}
      style={{
        position: "absolute",
        left: "30%",
        height: "120%",
        filter: "drop-shadow(3px 6px 24px #6D8BB0)",
      }}>
      <ambientLight intensity={1} />
      <Environment preset="city" blur={1} />
      <Shoe />
    </Canvas>
  );
}

export default Scene;
