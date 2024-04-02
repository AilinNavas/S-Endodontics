import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.024, 0.263, -2.202]} rotation={[1.014, -0.003, 0.022]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Layer_1__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Layer_2__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Layer_5__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Layer_6__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Layer_7__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Layer_8__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Layer_9__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Layer_10__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Layer_11__0.geometry}
            material={materials['Scene_-_Root']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

