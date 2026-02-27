"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });

    return (
        <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
            <MeshDistortMaterial
                color="#00ff99"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    );
};

const Hero3D = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={1} />
                <directionalLight position={[2, 1, 1]} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
