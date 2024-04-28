"use client"
import { Environment, Html, PresentationControls, useGLTF } from "@react-three/drei";
import { Canvas } from "react-three-fiber";

export default function Laptop() {
    const laptop = useGLTF(
        "https://chckn.vercel.app/collegewrite/model.gltf"
    );

    return (
        <Canvas>
            <Environment preset="warehouse"/>
            <PresentationControls global polar={[-0.4, 0.4]} azimuth={[-0.4, 0.4]} rotation={[0.2, 0.4, 0]}>
                <primitive object={laptop.scene} position-y="-1.2" position-z="2">
                    <Html
                        position={[0, 1.5, -1.5]}
                        transform
                        distanceFactor={1.16}
                        rotation-x={-0.25}
                    >
                        <iframe className="max-w-5xl max-h-[670px] h-screen w-screen border-none rounded-3xl" src="https://chckn.vercel.app"/>
                    </Html>
                </primitive>
            </PresentationControls>
        </Canvas>
    )
}