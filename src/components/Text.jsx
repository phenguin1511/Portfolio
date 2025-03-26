import { Canvas } from '@react-three/fiber';



const Text = () => {
      return (
            <section className='text'>
                  <Canvas>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                  </Canvas>
            </section>
      )
}
export default Text;
