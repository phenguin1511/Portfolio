
import { useGLTF } from '@react-three/drei'

export function Contact(props) {
  const { nodes, materials } = useGLTF('/contact.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.tel_fijo_tel_fijo_0.geometry} material={materials.tel_fijo} rotation={[-1.489, 0, 0]} scale={[6.504, 9.088, 6.504]} />
      </group>
    </group>
  )
}

useGLTF.preload('/contact.glb')
