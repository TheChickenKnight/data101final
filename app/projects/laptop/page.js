"use client"
import { Environment, Html, PresentationControls } from "@react-three/drei";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
const Laptop = dynamic(() => import('./laptop.js'));

export default function Page() {
    return (
        <Canvas>
            <Environment preset="warehouse"/>
            <PresentationControls global polar={[-0.1, 1]} azimuth={[-0.4, 0.4]}>
                <Laptop/>
            </PresentationControls>
        </Canvas>
    ); 
}