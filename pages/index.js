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
  const [ref, api] = useBox(() => ({ type: 'Static', args: [0.5, 1, 2] }))
  useFrame(({ mouse: { x, y } }) => {
    api.position.set(x * 3.5, y * 3, 0);
  })
  return (
    <mesh ref={ref} />
  );
}
function Vue(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/vue.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon001.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

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
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));

  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

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
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

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
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

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
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

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
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

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
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

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
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve020.geometry} material={nodes.Curve020.material} />
    </group>

  );
}
function Photoshop(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/photoshop.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon008.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve.geometry} material={nodes.Curve.material} />
      <mesh geometry={nodes.Curve022.geometry} material={nodes.Curve022.material} />
    </group>

  );
}
function Illustrator(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/illustrator.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon009.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve023.geometry} material={nodes.Curve023.material} />
      <mesh geometry={nodes.Curve024.geometry} material={nodes.Curve024.material} />
    </group>

  );
}
function Davinci(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/davinci-resolve.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon010.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve025.geometry} material={nodes.Curve025.material} />
      <mesh geometry={nodes.Curve026.geometry} material={nodes.Curve026.material} />
      <mesh geometry={nodes.Curve027.geometry} material={nodes.Curve027.material} />
      <mesh geometry={nodes.Curve028.geometry} material={nodes.Curve028.material} />
      <mesh geometry={nodes.Curve029.geometry} material={nodes.Curve029.material} />
    </group>

  );
}
function Vscode(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/vscode.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon011.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve030.geometry} material={nodes.Curve030.material} />
      <mesh geometry={nodes.Curve031.geometry} material={nodes.Curve031.material} />
      <mesh geometry={nodes.Curve032.geometry} material={nodes.Curve032.material} />
      <mesh geometry={nodes.Curve033.geometry} material={nodes.Curve033.material} />
      <mesh geometry={nodes.Curve034.geometry} material={nodes.Curve034.material} />
    </group>

  );
}
function Graphql(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/graphql.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve035.geometry} material={nodes.Curve035.material} />
    </group>

  );
}
function Python(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/python.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve037.geometry} material={nodes.Curve037.material} />
      <mesh geometry={nodes.Curve038.geometry} material={nodes.Curve038.material} />
    </group>

  );
}
function Firebase(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/firebase.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve041.geometry} material={nodes.Curve041.material} />
      <mesh geometry={nodes.Curve036.geometry} material={nodes.Curve036.material} />
      <mesh geometry={nodes.Curve039.geometry} material={nodes.Curve039.material} />
      <mesh geometry={nodes.Curve040.geometry} material={nodes.Curve040.material} />
    </group>

  );
}
function CloudRun(props) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes } = useGLTF("./model/cloud-run.gltf");
  const geo = useMemo(() => toConvexProps(nodes.Cannon.geometry), [nodes]);
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 1000, ...props, args: geo }));
  const bind = useDrag(({ xy: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0);
      api.velocity.set(0, 0, 0);
    } else if (last) {
      api.mass.set(1000);
    }
    api.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, 0);

  }, { pointerEvents: true });
  return (
    <group ref={ref} {...props} {...bind()} >
      <mesh geometry={nodes.Curve043.geometry} material={nodes.Curve043.material} />
      <mesh geometry={nodes.Curve044.geometry} material={nodes.Curve044.material} />
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
            <div className="lg:text-9xl md:text-7xl text-5xl font-bold mt-[100px] text-white">RYAN KWAN</div>
            <div className="lg:text-5xl md:text-3xl text-1xl font-semibold mt-8 text-gray-300">Developer | UX Designer</div>
          </div>
          <Canvas shadows camera={{ position: [0, -5, 2.5], fov: 50 }}>
            <color attach="background" args={['#171720']} />
            <ambientLight intensity={0.3} />
            <pointLight position={[-2, 0, 10]} color="white" intensity={0.3} />
            <pointLight position={[2, 0, 10]} color="white" intensity={0.3} />

            <Suspense fallback={null}>

              <Physics gravity={[0, 0, -30]}>
                {/* <Debug> */}
                <Mouse />
                <Plane />
                <Plane position={[-1.6, 0, 0]} rotation={[0, 1.4, 0]} />
                <Plane position={[1.6, 0, 0]} rotation={[0, -1.4, 0]} />
                <Plane position={[0, -1, 0]} rotation={[1.5, 0, 0]} />
                <Plane position={[0, -3, 0]} rotation={[-1.5, 0, 0]} />
                <Vue position={[-0.8, -2.5, 7]} rotation={[2.1, -0.6, 0.3]} />
                <Python position={[-1.2, -2.5, 10]} rotation={[2.1, 0.1, 0.4]} />
                <NodeJS position={[0.1, -2.6, 5]} rotation={[2, 0.3, 0]} />
                <ReactIcon position={[1.2, -2.5, 6]} rotation={[2, 0.1, 0]} />
                <Figma position={[0.6, -2.6, 6.7]} rotation={[2, -0.3, 0.3]} />
                <Miro position={[-0.7, -1.5, 6.3]} rotation={[2, 0.5, 0.3]} />
                <MongoDB position={[1.2, -1.5, 7]} rotation={[2, 0.3, 0]} />
                <Tailwind position={[0.3, -2.2, 9.7]} rotation={[2, 0, 0]} />
                <Laravel position={[-0.3, -2.4, 7.5]} rotation={[2, -0.2, 0.1]} />
                <Firebase position={[-0.4, -2.7, 6.2]} rotation={[2.3, 0.1, 0.2]} />
                <Photoshop position={[0, -2.2, 9.2]} rotation={[2.7, 0.1, 0.1]} />
                <Illustrator position={[1.3, -2, 9]} rotation={[2, -0.1, 0]} />
                <Vscode position={[0, -1.6, 8.1]} rotation={[2.5, 0, 0]} />
                <Graphql position={[-1.3, -2.7, 8.6]} rotation={[2.3, 0, 0]} />
                <Davinci position={[-1.23, -1.7, 6.5]} rotation={[2.5, 0, 0.3]} />
                <CloudRun position={[-1.3, -2, 6.2]} rotation={[2.5, 0.1, 0.3]} />

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

