//@ts-nocheck

"use client";

import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group, Object3DEventMap } from "three";

function Shoe() {
  const ref = useRef<Group<Object3DEventMap>>(null);

  const { nodes, materials } = useGLTF("/nike.glb");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.set(1, 2.2, -0.8);
      ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
      ref.current.scale.set(0.9, 0.9, 0.9);
    }
  });

  return (
    <group ref={ref}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.NikeShoe}
      />
    </group>
  );
}

export default Shoe;
