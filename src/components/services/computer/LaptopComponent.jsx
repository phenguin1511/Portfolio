import { Laptop } from "./Laptop";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stage, OrbitControls, PerspectiveCamera } from "@react-three/drei";
const LaptopComponent = () => {
      return (
            <Canvas>
                  <Suspense fallback='{...loading}'>
                        <Stage environment="night" intensity={8}>
                              <Laptop />
                        </Stage>
                        <OrbitControls
                              enableZoom={false}
                        />
                        <PerspectiveCamera position={[0, 0, 5]} zoom={0.7} makeDefault />
                  </Suspense>
            </Canvas>
      )
}

export default LaptopComponent;
