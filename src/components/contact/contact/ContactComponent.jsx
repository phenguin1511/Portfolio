import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stage, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Contact } from "./Contact";

const ContactComponent = () => {
      return (
            <Canvas>
                  <Suspense fallback='{...loading}'>
                        <Stage environment="night" intensity={1}>
                              <Contact />
                        </Stage>
                        <OrbitControls
                              enableZoom={false}
                        />
                        <PerspectiveCamera position={[2, 2, 2]} zoom={0.9} makeDefault />
                  </Suspense>
            </Canvas>
      )
}
export default ContactComponent;