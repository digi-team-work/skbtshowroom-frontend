'use client'

import * as THREE from 'three'
import { Suspense, useMemo, useRef, useState } from 'react'
import { useGLTF, Line, useCursor, MeshDistortMaterial, StatsGl, useScroll, ScrollControls, Environment, Merged, Text, MeshReflectorMaterial, CameraShake } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRouter } from 'next/navigation'

export const Blob = ({ route = '/', ...props }) => {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0.5} color={hovered ? 'hotpink' : '#1fb2f5'} />
    </mesh>
  )
}

export const Logo = ({ route = '/blob', ...props }) => {
  const mesh = useRef(null)
  const router = useRouter()

  const [hovered, hover] = useState(false)
  const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])

  useCursor(hovered)
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
    mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
    mesh.current.rotation.z -= delta / 4
  })

  return (
    <group ref={mesh} {...props}>
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} />
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} rotation={[0, 0, 1]} />
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} rotation={[0, 0, -1]} />
      <mesh onClick={() => router.push(route)} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshPhysicalMaterial roughness={0.5} color={hovered ? 'hotpink' : '#1fb2f5'} />
      </mesh>
    </group>
  )
}

export function Duck(props) {
  const { scene } = useGLTF('/duck.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} {...props} />
}
export function Dog(props) {
  const { scene } = useGLTF('/dog.glb')

  return <primitive object={scene} {...props} />
}

// ============================
function Rig() {
  const [vec] = useState(() => new THREE.Vector3())
  const { camera, mouse } = useThree()
  useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05))
  return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} />
}
export const TrainNoScroll = () => {
  const ref = useRef()
  const [cabin, seat] = useGLTF(['/cabin-transformed.glb', '/seat-transformed.glb'])
  const meshes = useMemo(() => ({ Cabin: cabin.nodes.cabin_1, Seat: seat.nodes.seat }), [cabin, seat])
  useFrame(() => {
    // ref.current.position.z = scroll.offset * 120;
    // ref.current.position.x = 0 + (Math.sin(scroll.offset * 10));
  })
  // Merged creates THREE.InstancedMeshes out of the meshes you feed it
  // All in all we end up with just 5 draw-calls for the entire scene
  return (
    <Merged castShadow receiveShadow meshes={meshes}>
      {(models) => (
        <group ref={ref}>
          <Cabin models={models} color="#252525" seatColor="sandybrown" name="1A" position={[0, 0, -6]} />
          <Cabin models={models} color="#454545" seatColor="gray" name="2B" position={[0, 0, -32]} />
          <Cabin models={models} color="#252525" seatColor="lightskyblue" name="3A" position={[0, 0, -58]} />
          <Cabin models={models} color="#454545" seatColor="gray" name="4B" position={[0, 0, -84]} />
          <Cabin models={models} color="#252525" seatColor="sandybrown" name="5B" position={[0, 0, -110]} />
        </group>
      )}
    </Merged>
  )
}
export const Train = () => {
  const ref = useRef()
  const scroll = useScroll()
  const [cabin, seat] = useGLTF(['/cabin-transformed.glb', '/seat-transformed.glb'])
  const meshes = useMemo(() => ({ Cabin: cabin.nodes.cabin_1, Seat: seat.nodes.seat }), [cabin, seat])
  useFrame(() => {
    ref.current.position.z = scroll.offset * 120;
    // ref.current.position.x = 0 + (Math.sin(scroll.offset * 10));
  })
  // Merged creates THREE.InstancedMeshes out of the meshes you feed it
  // All in all we end up with just 5 draw-calls for the entire scene
  return (
    <Merged castShadow receiveShadow meshes={meshes}>
      {(models) => (
        <group ref={ref}>
          <models.Cabin color="#ffffff" position={[0, 0, -6]} />
          <models.Cabin color="#ffffff" position={[0, 0, -32]} />
          <models.Cabin color="#ffffff" position={[0, 0, -58]} />
          <models.Cabin color="#ffffff" position={[0, 0, -84]} />
          <models.Cabin color="#ffffff" position={[0, 0, -110]} />
        </group>
      )}
    </Merged>
  )
}
const Quarter = ({ models, color, ...props }) => (
  <group {...props}>
    <models.Seat color={color} position={[-0.35, 0, 0.7]} />
    <models.Seat color={color} position={[0.35, 0, 0.7]} />
    <models.Seat color={color} position={[-0.35, 0, -0.7]} rotation={[0, Math.PI, 0]} />
    <models.Seat color={color} position={[0.35, 0, -0.7]} rotation={[0, Math.PI, 0]} />
  </group>
)

const Row = ({ models, color, ...props }) => (
  <group {...props}>
    <Quarter models={models} color={color} position={[-1.2, -0.45, 9.75]} />
    <Quarter models={models} color={color} position={[1.2, -0.45, 9.75]} />
  </group>
)

const Cabin = ({ models, color = 'white', seatColor = 'white', name, ...props }) => (
  <group {...props}>
    {/* <Text fontSize={4} color="#101020" position={[0, 6, 4]} rotation={[-Math.PI / 2, 0, 0]}>
      {name}
    </Text> */}
    <models.Cabin color={color} />
    {/* <Row models={models} color={seatColor} />
    <Row models={models} color={seatColor} position={[0, 0, -1.9]} />
    <Row models={models} color={seatColor} position={[0, 0, -6.6]} />
    <Row models={models} color={seatColor} position={[0, 0, -8.5]} />
    <Row models={models} color={seatColor} position={[0, 0, -11]} />
    <Row models={models} color={seatColor} position={[0, 0, -12.9]} />
    <Row models={models} color={seatColor} position={[0, 0, -17.6]} />
    <Row models={models} color={seatColor} position={[0, 0, -19.5]} /> */}
  </group>
)

