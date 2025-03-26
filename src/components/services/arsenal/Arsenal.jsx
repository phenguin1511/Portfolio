import { useGLTF } from '@react-three/drei'

export function Arsenal(props) {
  const { nodes, materials } = useGLTF('/arsenal.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-26.295, -23.474, 0]} rotation={[0, 0, -0.004]}>
        <group position={[324.296, 227.133, -31.462]} rotation={[0, 0, 0.007]}>
          <mesh geometry={nodes.Rounding_1_Mat_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Cap_1_Mat_0.geometry} material={materials.material} />
        </group>
        <group position={[324.296, 227.133, -31.462]} rotation={[0, 0, 0.007]}>
          <mesh geometry={nodes.Rounding_2_Mat_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Cap_2_Mat_0.geometry} material={materials.material} />
        </group>
        <mesh geometry={nodes.Extrude_NURBS_7_Mat_0.geometry} material={materials.material} />
      </group>
      <group rotation={[0, 0, -0.015]}>
        <group position={[317.568, 227.312, -44.028]}>
          <mesh geometry={nodes.Rounding_1_2_Mat1_0.geometry} material={materials['Mat.1']} />
          <mesh geometry={nodes.Cap_1_2_Mat1_0.geometry} material={materials['Mat.1']} />
        </group>
        <group position={[317.568, 227.312, -44.028]}>
          <mesh geometry={nodes.Rounding_2_2_Mat1_0.geometry} material={materials['Mat.1']} />
          <mesh geometry={nodes.Cap_2_2_Mat1_0.geometry} material={materials['Mat.1']} />
        </group>
        <mesh geometry={nodes.Extrude_NURBS_6_Mat1_0.geometry} material={materials['Mat.1']} />
      </group>
      <group position={[1.953, -25, -0.081]}>
        <group position={[349.278, 263.859, -62.93]} rotation={[0, 0, -0.006]}>
          <mesh geometry={nodes.Rounding_1_3_Mat_0.geometry} material={materials.Mat_0} />
          <mesh geometry={nodes.Cap_1_3_Mat_0.geometry} material={materials.Mat_0} />
        </group>
        <group position={[349.278, 263.859, -62.93]} rotation={[0, 0, -0.006]}>
          <mesh geometry={nodes.Rounding_2_3_Mat_0.geometry} material={materials.Mat_0} />
          <mesh geometry={nodes.Cap_2_3_Mat_0.geometry} material={materials.Mat_0} />
        </group>
        <mesh geometry={nodes.Extrude_NURBS_5_Mat_0.geometry} material={materials.Mat_0} />
      </group>
      <group position={[0, -4.015, 0]}>
        <group position={[196.168, 207.11, 11.957]}>
          <mesh geometry={nodes.Rounding_1_4_Mat2_0.geometry} material={materials['Mat.2']} />
          <mesh geometry={nodes.Cap_1_4_Mat2_0.geometry} material={materials['Mat.2']} />
        </group>
        <group position={[196.168, 207.11, 11.957]}>
          <mesh geometry={nodes.Rounding_2_4_Mat2_0.geometry} material={materials['Mat.2']} />
          <mesh geometry={nodes.Cap_2_4_Mat2_0.geometry} material={materials['Mat.2']} />
        </group>
        <mesh geometry={nodes.Extrude_NURBS_4_Mat2_0.geometry} material={materials['Mat.2']} />
      </group>
      <group position={[0, -4.015, 0]}>
        <group position={[196.168, 208.333, 14.006]}>
          <mesh geometry={nodes.Rounding_1_5_Mat_0.geometry} material={materials.Mat_0} />
          <mesh geometry={nodes.Cap_1_5_Mat_0.geometry} material={materials.Mat_0} />
        </group>
        <group position={[196.168, 208.333, 14.006]}>
          <mesh geometry={nodes.Rounding_2_5_Mat_0.geometry} material={materials.Mat_0} />
          <mesh geometry={nodes.Cap_2_5_Mat_0.geometry} material={materials.Mat_0} />
        </group>
        <mesh geometry={nodes.Extrude_NURBS_3_Mat_0.geometry} material={materials.Mat_0} />
      </group>
      <group position={[3.155, 0, -126.384]}>
        <group position={[160.847, 191.351, 143.677]}>
          <mesh geometry={nodes.Rounding_1_7_Mat2_0.geometry} material={materials['Mat.2']} />
          <mesh geometry={nodes.Cap_1_7_Mat2_0.geometry} material={materials['Mat.2']} />
        </group>
        <group position={[160.847, 191.351, 143.677]}>
          <mesh geometry={nodes.Rounding_2_7_Mat2_0.geometry} material={materials['Mat.2']} />
          <mesh geometry={nodes.Cap_2_7_Mat2_0.geometry} material={materials['Mat.2']} />
        </group>
        <mesh geometry={nodes.wheel_1_Mat2_0.geometry} material={materials['Mat.2']} />
      </group>
      <group position={[-4.336, 0, -1.2]}>
        <group position={[82.81, 156.248, 18.529]}>
          <mesh geometry={nodes.Rounding_1_8_Mat2_0.geometry} material={materials['Mat.2']} />
          <mesh geometry={nodes.Cap_1_8_Mat2_0.geometry} material={materials['Mat.2']} />
        </group>
        <group position={[82.81, 156.248, 18.529]}>
          <mesh geometry={nodes.Rounding_2_8_Mat2_0.geometry} material={materials['Mat.2']} />
          <mesh geometry={nodes.Cap_2_8_Mat2_0.geometry} material={materials['Mat.2']} />
        </group>
        <mesh geometry={nodes.canon_part_a_1_Mat2_0.geometry} material={materials['Mat.2']} />
      </group>
      <group position={[0, 4.233, 0]}>
        <group position={[162, 191.391, 0]}>
          <mesh geometry={nodes.Rounding_1_12_Mat_0.geometry} material={materials.Mat_0} />
          <mesh geometry={nodes.Cap_1_14_Mat_0.geometry} material={materials.Mat_0} />
        </group>
        <group position={[162, 191.391, 0]}>
          <mesh geometry={nodes.Rounding_2_12_Mat_0.geometry} material={materials.Mat_0} />
          <mesh geometry={nodes.Cap_2_11_Mat_0.geometry} material={materials.Mat_0} />
        </group>
        <mesh geometry={nodes.back_Mat_0.geometry} material={materials.Mat_0} />
      </group>
      <group position={[-4.336, 0, 0]}>
        <group position={[82.81, 156.248, 18.529]}>
          <mesh geometry={nodes.Rounding_1_13_Mat_0.geometry} material={materials.Mat_0} />
          <mesh geometry={nodes.Cap_1_15_Mat_0.geometry} material={materials.Mat_0} />
        </group>
        <group position={[82.81, 156.248, 18.529]}>
          <mesh geometry={nodes.Rounding_2_13_Mat_0.geometry} material={materials.Mat_0} />
          <mesh geometry={nodes.Cap_2_12_Mat_0.geometry} material={materials.Mat_0} />
        </group>
        <mesh geometry={nodes.canon_part_a_Mat_0.geometry} material={materials.Mat_0} />
      </group>
      <group position={[3.155, 0, -126.384]}>
        <group position={[160.847, 191.351, 144.949]}>
          <mesh geometry={nodes.Rounding_1_15_Mat_0.geometry} material={materials.Mat_0} />
          <mesh geometry={nodes.Cap_1_17_Mat_0.geometry} material={materials.Mat_0} />
        </group>
        <group position={[160.847, 191.351, 144.949]}>
          <mesh geometry={nodes.Rounding_2_15_Mat_0.geometry} material={materials.Mat_0} />
          <mesh geometry={nodes.Cap_2_14_Mat_0.geometry} material={materials.Mat_0} />
        </group>
        <mesh geometry={nodes.wheel_Mat_0.geometry} material={materials.Mat_0} />
      </group>
      <group position={[0, -15.911, 0]}>
        <group position={[164.393, 207.396, 4.281]}>
          <mesh geometry={nodes.Rounding_1_16_Mat1_0.geometry} material={materials['Mat.1']} />
          <mesh geometry={nodes.Cap_1_18_Mat1_0.geometry} material={materials['Mat.1']} />
        </group>
        <group position={[164.393, 207.396, 4.281]}>
          <mesh geometry={nodes.Rounding_2_16_Mat1_0.geometry} material={materials['Mat.1']} />
          <mesh geometry={nodes.Cap_2_15_Mat1_0.geometry} material={materials['Mat.1']} />
        </group>
        <mesh geometry={nodes.back_blue_Mat1_0.geometry} material={materials['Mat.1']} />
      </group>
      <group position={[0, 8.353, 0]}>
        <group position={[103.216, 183.879, 6.243]}>
          <mesh geometry={nodes.Rounding_1_19_Mat2_0.geometry} material={materials['Mat.2']} />
          <mesh geometry={nodes.Cap_1_21_Mat2_0.geometry} material={materials['Mat.2']} />
        </group>
        <group position={[103.216, 183.879, 6.243]}>
          <mesh geometry={nodes.Rounding_2_19_Mat2_0.geometry} material={materials['Mat.2']} />
          <mesh geometry={nodes.Cap_2_18_Mat2_0.geometry} material={materials['Mat.2']} />
        </group>
        <mesh geometry={nodes.white_back_Mat2_0.geometry} material={materials['Mat.2']} />
      </group>
      <group position={[160.828, 195.027, 17.006]}>
        <mesh geometry={nodes.Rounding_1_6_Mat2_0.geometry} material={materials['Mat.2']} />
        <mesh geometry={nodes.Cap_1_6_Mat2_0.geometry} material={materials['Mat.2']} />
      </group>
      <group position={[160.828, 195.027, 17.006]}>
        <mesh geometry={nodes.Rounding_2_6_Mat2_0.geometry} material={materials['Mat.2']} />
        <mesh geometry={nodes.Cap_2_6_Mat2_0.geometry} material={materials['Mat.2']} />
      </group>
      <mesh geometry={nodes.wheel_frame_1_Mat2_0.geometry} material={materials['Mat.2']} />
      <group position={[128.052, 200.013, 14.242]} rotation={[-0.04, 0.026, -1.188]}>
        <mesh geometry={nodes.Rounding_1_9_Mat_0.geometry} material={materials.Mat_0} />
        <mesh geometry={nodes.Cap_1_9_Mat_0.geometry} material={materials.Mat_0} />
      </group>
      <mesh geometry={nodes.Extrude_NURBS_2_Mat_0.geometry} material={materials.Mat_0} />
      <mesh geometry={nodes.Rounding_2_9_Mat_0.geometry} material={materials.Mat_0} position={[128.052, 200.013, 14.242]} rotation={[-0.04, 0.026, -1.188]} />
      <group position={[146.284, 224.213, 14.247]} rotation={[-0.04, 0.026, -2.096]}>
        <mesh geometry={nodes.Rounding_1_10_Mat_0.geometry} material={materials.Mat_0} />
        <mesh geometry={nodes.Cap_1_10_Mat_0.geometry} material={materials.Mat_0} />
      </group>
      <mesh geometry={nodes.Extrude_NURBS_1_Mat_0.geometry} material={materials.Mat_0} />
      <mesh geometry={nodes.Rounding_2_10_Mat_0.geometry} material={materials.Mat_0} position={[146.284, 224.213, 14.247]} rotation={[-0.04, 0.026, -2.096]} />
      <group position={[180.801, 222.564, 14.244]} rotation={[-0.04, 0.026, -3.123]}>
        <mesh geometry={nodes.Rounding_1_11_Mat_0.geometry} material={materials.Mat_0} />
        <mesh geometry={nodes.Cap_1_11_Mat_0.geometry} material={materials.Mat_0} />
      </group>
      <mesh geometry={nodes.Extrude_Mat_0.geometry} material={materials.Mat_0} />
      <mesh geometry={nodes.Rounding_2_11_Mat_0.geometry} material={materials.Mat_0} position={[180.801, 222.564, 14.244]} rotation={[-0.04, 0.026, -3.123]} />
      <mesh geometry={nodes.left_Mat4_0.geometry} material={materials['Mat.4']} />
      <mesh geometry={nodes.Cap_1_12_Mat4_0.geometry} material={materials['Mat.4']} position={[219.694, 193.109, 12.054]} />
      <mesh geometry={nodes.Cap_2_9_Mat4_0.geometry} material={materials['Mat.4']} position={[219.694, 193.109, 12.054]} />
      <mesh geometry={nodes.right_Mat3_0.geometry} material={materials['Mat.3']} />
      <mesh geometry={nodes.Cap_1_13_Mat3_0.geometry} material={materials['Mat.3']} position={[105.151, 193.521, 12.46]} />
      <mesh geometry={nodes.Cap_2_10_Mat3_0.geometry} material={materials['Mat.3']} position={[105.151, 193.521, 12.46]} />
      <group position={[160.828, 195.027, 18.149]}>
        <mesh geometry={nodes.Rounding_1_14_Mat_0.geometry} material={materials.Mat_0} />
        <mesh geometry={nodes.Cap_1_16_Mat_0.geometry} material={materials.Mat_0} />
      </group>
      <group position={[160.828, 195.027, 18.149]}>
        <mesh geometry={nodes.Rounding_2_14_Mat_0.geometry} material={materials.Mat_0} />
        <mesh geometry={nodes.Cap_2_13_Mat_0.geometry} material={materials.Mat_0} />
      </group>
      <mesh geometry={nodes.wheel_frame_Mat_0.geometry} material={materials.Mat_0} />
      <group position={[161.395, 315.839, 18.219]}>
        <mesh geometry={nodes.Rounding_1_17_Mat_0.geometry} material={materials.Mat_0} />
        <mesh geometry={nodes.Cap_1_19_Mat_0.geometry} material={materials.Mat_0} />
      </group>
      <group position={[161.395, 315.839, 18.219]}>
        <mesh geometry={nodes.Rounding_2_17_Mat_0.geometry} material={materials.Mat_0} />
        <mesh geometry={nodes.Cap_2_16_Mat_0.geometry} material={materials.Mat_0} />
      </group>
      <mesh geometry={nodes.name_outline_Mat_0.geometry} material={materials.Mat_0} />
      <group position={[134.312, 309.773, 19.527]}>
        <mesh geometry={nodes.Rounding_1_18_Mat2_0.geometry} material={materials['Mat.2']} />
        <mesh geometry={nodes.Cap_1_20_Mat2_0.geometry} material={materials['Mat.2']} />
      </group>
      <group position={[134.312, 309.773, 19.527]}>
        <mesh geometry={nodes.Rounding_2_18_Mat2_0.geometry} material={materials['Mat.2']} />
        <mesh geometry={nodes.Cap_2_17_Mat2_0.geometry} material={materials['Mat.2']} />
      </group>
      <mesh geometry={nodes.name_Mat2_0.geometry} material={materials['Mat.2']} />
    </group>
  )
}

useGLTF.preload('/arsenal.glb')
