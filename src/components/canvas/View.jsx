'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'

export const Common = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)

export const Env = () => (
  <Suspense fallback={null}>
    <color attach='background' args={['#ffffff']} />
    <ambientLight intensity={1.8} />
  </Suspense>
)

export const Env2 = () => (
  <Suspense fallback={null}>
    <color attach='background' args={['#ffffff']} />
    <ambientLight intensity={1} />

    <directionalLight castShadow intensity={1} position={[0,-3,0]} shadow-mapSize={[1024, 1024]}>
      <orthographicCamera attach="shadow-camera" left={0} right={0} top={0} bottom={0} />
    </directionalLight>
  </Suspense>
)

const View = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
