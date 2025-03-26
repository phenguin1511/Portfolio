import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stage, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Robot } from "./Robot";

const RobotComponent = () => {
      return (
            <Canvas>
                  <Suspense fallback='{...loading}'>
                        <Stage environment="night" intensity={8}>
                              <Robot />
                        </Stage>
                        <OrbitControls
                              enableZoom={false}
                        />
                        <PerspectiveCamera position={[0, 0, 5]} zoom={1} makeDefault />
                  </Suspense>
            </Canvas>
      )
}

export default RobotComponent;
