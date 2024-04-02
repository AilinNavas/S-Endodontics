import "./Tooth.css";
import { Model } from '/public/Model'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";

function Tooth() {
    return (<div className="Tooth">
        <Canvas camera={{ position: [0, 5, 0] }}>
            <ambientLight intensity={10.5} />
            {/* Luz direccional */}
            <directionalLight intensity={5} position={[1, 1, 1]} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <Environment preset="sunset" />
            <OrbitControls />

        </Canvas>
    </div>);
}
export default Tooth;