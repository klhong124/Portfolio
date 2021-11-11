import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.04, mesh.current.rotation.y += 0.04))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}


function Home() {
  return (<div>
    <Head>
      <title>My pagee title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Link href="/">
      <button>hello</button>
    </Link>

    <div className="text-blue-600 bg-red-600">
      Should be blue
    </div>


    <div id="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas >
    </div>
  </div>)
}

export default Home
