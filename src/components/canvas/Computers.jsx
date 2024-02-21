import { Suspense, useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber'; // empty canvas allowed us place something on it
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'; // tools help us draw on this canvas

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={2.0} groundColor="black" />
      <pointLight intensity={2.0} />
      <spotLight 
        position={[10, 10, 10]}
        angle={0.25}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }} // way to look the 3D model
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* allow us move the model left and right in a specific angle*/}
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;