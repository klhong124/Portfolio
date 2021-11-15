import * as THREE from "three";
import React, { Suspense, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Physics, usePlane, useConvexPolyhedron, Debug, useBox } from "@react-three/cannon";
import { useGLTF, OrbitControls, Box } from "@react-three/drei";
import { useDrag } from "@use-gesture/react";

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



function Mouse(props) {
  const [ref, api] = useBox(() => ({ type: 'Static', args: [0.5, 0.5, 2] }))
  useFrame(({ mouse: { x, y } }) => {
    api.position.set(x * 3, y * 3, 0);
  })
  return (
    <mesh ref={ref}>

    </mesh>

  );
}
function Vue(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/vue.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon001.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 1);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve002.geometry} material={nodes.Curve002.material} />
      <mesh geometry={nodes.Curve014.geometry} material={nodes.Curve014.material} />
    </group>

  );
}
function ReactIcon(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/react.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon002.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1, ...props, args: geo }));

  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 1);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve007.geometry} material={nodes.Curve007.material} />
      <mesh geometry={nodes.Curve004.geometry} material={nodes.Curve004.material} />
    </group>

  );
}
function NodeJS(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/nodejs.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon003.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 1);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve005.geometry} material={nodes.Curve005.material} />
      <mesh geometry={nodes.Curve006.geometry} material={nodes.Curve006.material} />
    </group>

  );
}
function Figma(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/figma.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 1);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve008.geometry} material={nodes.Curve008.material} />
      <mesh geometry={nodes.Curve009.geometry} material={nodes.Curve009.material} />
      <mesh geometry={nodes.Curve010.geometry} material={nodes.Curve010.material} />
      <mesh geometry={nodes.Curve011.geometry} material={nodes.Curve011.material} />
      <mesh geometry={nodes.Curve012.geometry} material={nodes.Curve012.material} />
      <mesh geometry={nodes.Curve013.geometry} material={nodes.Curve013.material} />
    </group>

  );
}
function Miro(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/miro.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 1);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve019.geometry} material={nodes.Curve019.material} />
      <mesh geometry={nodes.Curve001.geometry} material={nodes.Curve001.material} />
    </group>

  );
}
function MongoDB(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/mongodb.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 1);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve015.geometry} material={nodes.Curve015.material} />
      <mesh geometry={nodes.Curve016.geometry} material={nodes.Curve016.material} />
      <mesh geometry={nodes.Curve017.geometry} material={nodes.Curve017.material} />
      <mesh geometry={nodes.Curve018.geometry} material={nodes.Curve018.material} />
    </group>

  );
}
function Tailwind(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/tailwindcss.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon004.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 1);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve.geometry} material={nodes.Curve.material} />
    </group>

  );
}
function Laravel(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/laravel.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon008.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 1);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve020.geometry} material={nodes.Curve020.material} />
    </group>

  );
}



const Plane = (props) => {
  const [ref] = usePlane(() => ({
    type: 'Static',
    mass: 5,
    ...props
  }))
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
          <div className="absolute z-10 w-screen text-center">
            <div className="text-9xl font-bold mt-[100px] text-white">RYAN KWAN</div>
            <div className="text-5xl font-semibold mt-10 text-gray-300">Programer | UX Designer</div>
          </div>
          <Canvas shadows camera={{ position: [0, -5, 2.5], fov: 50 }}>
            <color attach="background" args={['#171720']} />
            <ambientLight intensity={0.3} />
            <pointLight position={[2, 10, 0]} color="white" intensity={0.2} />

            <Suspense fallback={null}>

              <Physics gravity={[0, 0, -10]}>
                {/* <Debug> */}
                <Mouse />
                <Plane />
                <Plane position={[-2, 0, 0]} rotation={[0, 1.4, 0]} />
                <Plane position={[2, 0, 0]} rotation={[0, -1.4, 0]} />
                <Plane position={[0, -1, 0]} rotation={[1.5, 0, 0]} />
                <Plane position={[0, -3, 0]} rotation={[-1.5, 0, 0]} />
                <Vue position={[-1, -2, 10]} rotation={[Math.random() * 2.2, Math.random() * 2.2, Math.random() * 2.2]} />
                <NodeJS position={[0, -2, 10]} rotation={[Math.random() * 2.2, Math.random() * 2.2, Math.random() * 2.2]} />
                <ReactIcon position={[1, -2, 10]} rotation={[Math.random() * 2.2, Math.random() * 2.2, Math.random() * 2.2]} />
                <Figma position={[0, -2, 10]} rotation={[Math.random() * 2.2, Math.random() * 2.2, Math.random() * 2.2]} />
                <Miro position={[-1, -2, 10]} rotation={[Math.random() * 2.2, Math.random() * 2.2, Math.random() * 2.2]} />
                <MongoDB position={[0, -2, 10]} rotation={[Math.random() * 2.2, Math.random() * 2.2, Math.random() * 2.2]} />
                <Tailwind position={[1, -2, 10]} rotation={[Math.random() * 2.2, Math.random() * 2.2, Math.random() * 2.2]} />
                <Laravel position={[0, -2, 10]} rotation={[Math.random() * 2.2, Math.random() * 2.2, Math.random() * 2.2]} />

                {/* </Debug> */}
              </Physics>

            </Suspense>
            {/* <OrbitControls /> */}
          </Canvas>
        </div>
      </div>
    </div>

  )
}

export default Home

