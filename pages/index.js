import * as THREE from "three";
import React, { Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, usePlane, useConvexPolyhedron, Debug } from "@react-three/cannon";
import { useGLTF, OrbitControls, Box } from "@react-three/drei";
import { Geometry } from "three-stdlib";
import { createRef, useEffect, useCallback } from 'react'

import Head from 'next/head'

/**
 * Returns legacy geometry vertices, faces for ConvP
 * @param {THREE.BufferGeometry} bufferGeometry
 */
function toConvexProps(bufferGeometry) {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry);
  // Merge duplicate vertices resulting from glTF export.
  // Cannon assumes contiguous, closed meshes to work
  geo.mergeVertices();
  return [geo.vertices.map((v) => [v.x, v.y, v.z]), geo.faces.map((f) => [f.a, f.b, f.c]), []]; // prettier-ignore
}





function ReactIcon(props) {
  const { nodes } = useGLTF("./model/react.glb");

  const geo = useMemo(() => toConvexProps(nodes.Curve.geometry), [nodes]);
  const [ref] = useConvexPolyhedron(() => ({ mass: 1, ...props, args: geo }));

  return (
    <mesh
      castShadow
      receiveShadow
      ref={ref}
      {...props}
    >
      <primitive object={nodes.Scene} />
    </mesh>

  );
}
function Vue(props) {
  const { nodes } = useGLTF("./model/vue.glb");
  const geo = useMemo(() => toConvexProps(nodes.Curve002.geometry), [nodes]);
  const [ref] = useConvexPolyhedron(() => ({ mass: 1, ...props, args: geo }));
  return (

    <mesh
      castShadow
      receiveShadow
      ref={ref}
      {...props}
    >
      <primitive object={nodes.Scene} />
    </mesh>

  );
}



const Plane = () => {
  const [ref, api] = usePlane(() => ({
    type: 'Static',
    mass: 5,
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }))
  useFrame(({ mouse }) => {
    api.rotation.set(-Math.PI / 2 - mouse.y *0.5 + mouse.x*0.5 , 0, 0);
  })
  return (
    <mesh scale={200} ref={ref} receiveShadow>
      <planeGeometry />
      <shadowMaterial color="#171717" />
    </mesh>
  )
}

function Home() {
  return (
    <div className="dark">

      <div className=" dark:bg-gray-900">
        <Head>
          <title>Ryan Kwan</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <div className="h-screen">
          <Canvas shadows dpr={[1, 2]} camera={{ position: [-1, 4, 5], fov: 50 }}>
            <color attach="background" args={['#171720']} />
            <fog attach="fog" args={['#171720', 20, 70]} />
            <ambientLight intensity={0.2} />
            <pointLight position={[-10, -10, -10]} color="red" intensity={0.2} />
            <pointLight position={[10, 10, 10]} color="blue" intensity={0.2} />

            <Suspense fallback={null}>

              <Physics gravity={[0, -10, 0]}>
                <Plane />
                <Vue position={[1, 5, 0]} rotation={[0.4, 2.3, 0.5]} />
                <ReactIcon position={[2, 3, 0]} rotation={[2, 1.1, 2.1]} />

              </Physics>
            </Suspense>
            {/* <OrbitControls/> */}
          </Canvas>
        </div>
        <h1>hello</h1>
      </div>
    </div>

  )
}

export default Home

