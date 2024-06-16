import { Html, useGLTF } from "@react-three/drei"

export default function Laptop() {
    return (
        <primitive object={useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf').scene} position-y="-1.2" position-z="2">
            <Html
                position={[0, 1.5, -1.5]}
                transform
                distanceFactor={1.16}
                rotation-x={-0.25}
                >
                <iframe className="max-w-5xl max-h-[670px] h-screen w-screen border-none rounded-3xl" src="https://chckn.vercel.app"/>
            </Html>
        </primitive>
    );
}