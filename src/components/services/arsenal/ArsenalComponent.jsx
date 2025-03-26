import { Canvas } from "@react-three/fiber";
import { Arsenal } from "./Arsenal";
import { Suspense } from "react";
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";

const ArsenalComponent = () => {
      return (
            <Canvas>
                  <Suspense fallback='{...loading}'>
                        <Stage environment="city" intensity={1}>
                              <Arsenal />
                        </Stage>
                        <OrbitControls
                              enableZoom={false}
                        />
                        <PerspectiveCamera position={[0, 0, 5]} zoom={1} makeDefault />
                  </Suspense>
            </Canvas>
      )
}
export default ArsenalComponent;