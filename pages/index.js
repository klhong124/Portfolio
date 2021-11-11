import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, ScreenQuad } from '@react-three/drei'

import React, { useRef, useState } from 'react'
import Head from 'next/head'

function Box(props) {
  // This reference will give us direct access to the mesh
  const ref = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.01
  })
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'red' : 'orange'} />
    </mesh>
  )
}


function Home() {
  return (
    <div className="">

      <div className=" dark:bg-gray-900">
        <Head>
          <title>Ryan Kwan</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <div className="h-screen">
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Box position={[0, 0, 0]} />
          </Canvas>
        </div>
      </div>
    </div>

  )
}

export default Home
