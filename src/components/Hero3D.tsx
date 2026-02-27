"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere, Float } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

const Bubble = ({ index, phase, startPos }: { index: number, phase: number, startPos: THREE.Vector3 }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const speed = useMemo(() => 0.2 + Math.random() * 0.5, []);
    const offset = useMemo(() => Math.random() * Math.PI * 2, []);
    const radius = useMemo(() => 1.5 + Math.random() * 1, []);
    const burstDelay = useMemo(() => Math.random() * 2, []);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();

        if (phase === 2) { // Orbiting Photo (Right)
            const targetX = 3 + Math.cos(time * speed + offset) * radius;
            const targetY = Math.sin(time * speed + offset * 1.5) * radius;
            const targetZ = Math.sin(time * speed + offset * 0.5) * radius;

            meshRef.current.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.05);
            meshRef.current.scale.lerp(new THREE.Vector3(0.4, 0.4, 0.4), 0.1);
            meshRef.current.visible = true;
        } else if (phase === 3) { // Bursting
            if (time % 25 > 13 + burstDelay) { // Simple burst logic based on loop time
                meshRef.current.scale.lerp(new THREE.Vector3(0, 0, 0), 0.1);
                if (meshRef.current.scale.x < 0.01) meshRef.current.visible = false;
            } else {
                meshRef.current.scale.lerp(new THREE.Vector3(0.8, 0.8, 0.8), 0.1);
            }
        } else if (phase === 0) { // Resetting/Hidden
            meshRef.current.visible = false;
            meshRef.current.position.copy(startPos);
            meshRef.current.scale.set(0, 0, 0);
        }
    });

    return (
        <Sphere args={[1, 32, 32]} ref={meshRef}>
            <MeshDistortMaterial
                color="#00ff99"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.8}
                transparent
                opacity={0.6}
            />
        </Sphere>
    );
};

const MainSphere = ({ phase, onPhaseChange }: { phase: number, onPhaseChange: (p: number) => void }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [startTime] = useState(Date.now());

    useFrame((state) => {
        if (!meshRef.current) return;
        const elapsed = (Date.now() - startTime) / 1000;
        const loopTime = elapsed % 25; // 25s total loop

        // Phase Transitions
        if (loopTime < 5) {
            if (phase !== 1) onPhaseChange(1); // Phase 1: Near Text
        } else if (loopTime < 13) {
            if (phase !== 2) onPhaseChange(2); // Phase 2: Orbiting
        } else if (loopTime < 15) {
            if (phase !== 3) onPhaseChange(3); // Phase 3: Bursting
        } else {
            if (phase !== 0) onPhaseChange(0); // Phase 0: Reset/Wait
        }

        if (phase === 1) { // Near Text (Left)
            meshRef.current.position.lerp(new THREE.Vector3(-3.5, 0.5, 0), 0.05);
            meshRef.current.scale.lerp(new THREE.Vector3(2.2, 2.2, 2.2), 0.05);
            meshRef.current.visible = true;
        } else { // Gone
            meshRef.current.scale.lerp(new THREE.Vector3(0, 0, 0), 0.1);
            if (meshRef.current.scale.x < 0.01) meshRef.current.visible = false;
        }

        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });

    return (
        <Sphere args={[1, 100, 200]} ref={meshRef}>
            <MeshDistortMaterial
                color="#00ff99"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.1}
                metalness={0.9}
            />
        </Sphere>
    );
};

const Hero3D = () => {
    const [phase, setPhase] = useState(1);
    const startPos = useMemo(() => new THREE.Vector3(-3.5, 0.5, 0), []);
    const bubbles = useMemo(() => Array.from({ length: 12 }), []);

    return (
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
            <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[2, 1, 1]} />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <MainSphere phase={phase} onPhaseChange={setPhase} />
                    {bubbles.map((_, i) => (
                        <Bubble key={i} index={i} phase={phase} startPos={startPos} />
                    ))}
                </Float>
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
