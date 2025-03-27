import { Sphere, MeshDistortMaterial } from '@react-three/drei';


const Shape = () => {
      return (
            <>
                  <Sphere args={[1, 100, 200]} scale={2.8}>
                        <MeshDistortMaterial color='#e30613' distort={0.5} speed={4} />
                  </Sphere>
                  <ambientLight {...{ intensity: 2 }} />
                  <directionalLight {...{ position: [1, 2, 3] }} />
            </>

      );
};

export default Shape;
