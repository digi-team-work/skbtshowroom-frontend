"use client"

import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

// import * as THREE from 'three'
import { TextureLoader, Vector3, DoubleSide, MathUtils, RepeatWrapping, LinearEncoding, sRGBEncoding, AdditiveBlending, BackSide, VideoTexture} from 'three'
import { useGLTF, useCursor, StatsGl, Environment, MeshReflectorMaterial, CameraShake, PerspectiveCamera, Line, useTexture, ScrollControls, useScroll, Preload, useSpriteLoader, SpriteAnimator} from '@react-three/drei'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'

import { motion } from "framer-motion-3d"
import { Bloom, EffectComposer } from '@react-three/postprocessing'

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);


export const Ground = ({room_depth, pos}) => {
  // const normal = useLoader(TextureLoader, '/ground/normal.jpg');

  // useEffect(() => {
  //   [normal].forEach((t) => {
  //     t.wrapS = RepeatWrapping;
  //     t.wrapT = RepeatWrapping;
  //     t.repeat.set(15,room_depth);
  //   });

  //   normal.encoding = LinearEncoding;
  // }, [normal]);

  const min_depth = 160;

  return (
    <group position={pos}>
      <mesh position={[0,0,0]} rotation={[-(Math.PI*0.5),0,0]}>
        <planeGeometry args={[20, (room_depth >= min_depth ? (room_depth):(min_depth))]} />
        <MeshReflectorMaterial
          envMapIntensity={0}
          dithering={true}
          color={'#77777a'}
          // normalMap={normal}
          // normalScale={[14, room_depth]}
          metalness={0}
          roughness={0.022}
          blur={[400, 400]}
          mixBlur={43}
          mixStrength={4}
          mixContrast={1}
          resolution={1024}
          mirror={0}
          depthScale={0.01}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.2}
          debug={0}
          reflectorOffset={0}
        />
      </mesh>
    </group>
  )
}

export const OneRoom = ({position=[0,0,0], table=true, wallEnd=false, pic_1, pic_2, basePath}) => {
  const { nodes, materials } = useGLTF(basePath+'/room-upper.glb');

  return (
    <group position={position} dispose={null}>

      <mesh position={[-9.85,4.2,1]} scale={0.08}>
        <sphereGeometry args={[1,8,6]} />
        <meshStandardMaterial color={[2,2,2]} toneMapped={false} roughness={0} metalness={0} />
      </mesh>
      <pointLight position={[-9.8,4.02,1]} args={[0xff6600, 0.7, 8]} />

      <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
        <group position={[-75.945, 0, -58.283]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeilingShape_body.geometry}
            material={materials.matBeamWhite}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCeilingShape_frame.geometry}
            material={materials.matBeamWhite}
          />
        </group>
        <group position={[49.054, 38.704, -58.283]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeilingShape_body001.geometry}
            material={materials.matBeamWhite}
            position={[9.656, -42.186, 0]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCeilingShape_frame001.geometry}
            material={materials.matBeamWhite}
            position={[9.656, -42.186, 0]}
            rotation={[0, 0, Math.PI]}
          />
        </group>
        <group position={[-6.592, 13.596, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLight01.geometry}
            material={materials.lightWhite}
            position={[0, 0, -13.283]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLightBase01.geometry}
            material={materials.matChromeGray}
            position={[0, 0, -13.283]}
          />
        </group>
        <group position={[-5.768, 5.768, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLight02.geometry}
            material={materials.lightWhite}
            position={[0, 0, -13.283]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLightBase02.geometry}
            material={materials.matChromeGray}
            position={[0, 0, -13.283]}
          />
        </group>
        <group position={[11.124, 14.008, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLight03.geometry}
            material={materials.lightWhite}
            position={[0, 0, -13.283]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLightBase03.geometry}
            material={materials.matChromeGray}
            position={[0, 0, -13.283]}
          />
        </group>
        <group position={[5.768, 43.259, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLight04.geometry}
            material={materials.lightWhite}
            position={[0, 0, -13.283]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLightBase04.geometry}
            material={materials.matChromeGray}
            position={[0, 0, -13.283]}
          />
        </group>
        <group position={[-6.592, -2.472, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLight05.geometry}
            material={materials.lightWhite}
            position={[0, 0, -15.459]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLightBase05.geometry}
            material={materials.matChromeGray}
            position={[0, 0, -15.459]}
          />
        </group>

        {table && (
        <group position={[50,100, 0]} scale={1.2}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pTable.geometry}
            material={materials.matTable}
            position={[0, 0, -6.49]}
            scale={[6.463, 6.463, 0.274]}
          />
          <group rotation={[0, 0, -Math.PI / 3]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh027.geometry}
              material={materials.matTable}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh027_1.geometry}
              material={materials.matChrome}
            />
          </group>
          <group rotation={[0, 0, -2.094]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh028.geometry}
              material={materials.matTable}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh028_1.geometry}
              material={materials.matChrome}
            />
          </group>
          <group rotation={[0, 0, Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh029.geometry}
              material={materials.matTable}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh029_1.geometry}
              material={materials.matChrome}
            />
          </group>
          <group rotation={[0, 0, 2.094]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh030.geometry}
              material={materials.matTable}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh030_1.geometry}
              material={materials.matChrome}
            />
          </group>
          <group rotation={[0, 0, Math.PI / 3]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh031.geometry}
              material={materials.matTable}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh031_1.geometry}
              material={materials.matChrome}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh026.geometry}
            material={materials.matTable}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh026_1.geometry}
            material={materials.matChrome}
          />
        </group>
        )}

        <group position={[30.695, 27.138, -3.242]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pWallBumpFrame.geometry}
            material={materials.matFrame}
            position={[-98.108, 0, -5.185]}
          >
            {/* <meshMatcapMaterial color={"#ff6600"} /> */}
          </mesh>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pWallBumpLight.geometry}
            // material={materials.lightGold}
            position={[-98.071, 0, -5.185]}
          >
            {/* <meshMatcapMaterial color={"#ff6600"} /> */}
            <meshStandardMaterial color={"#ff6600"} roughness={0.25} metalness={0.02} />
          </mesh>
        </group>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pBeamL.geometry}
          material={materials.matBeamLR}
          position={[0, 0, -13.283]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pBeamR.geometry}
          material={materials.matBeamLR}
          position={[197.999, 0, -13.283]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pMainBeam1.geometry}
          material={materials.matBeamImg}
          position={[0, 0, -13.157]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pMainBeam1.geometry}
          material={materials.matBeamImg}
          position={[0, 60, -13.157]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pMainBeam1.geometry}
          material={materials.matBeamImg}
          position={[0, -60, -13.157]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pWallL.geometry}
          material={materials.matWallL}
          position={[0, 0, -13.283]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pWallLRough.geometry}
          material={materials.matWallRough}
        >
          {/* <meshBasicMaterial toneMapped={false}>
            <videoTexture attach="map" color="#000000" args={[video]} encoding={THREE.sRGBEncoding} />
          </meshBasicMaterial> */}
        </mesh>


        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pWallR.geometry}
          material={materials.matWallR}
          position={[-0.917, 0, -13.283]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole01.geometry}
          material={materials.matChrome}
          position={[-11.124, -18.951, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole02.geometry}
          material={materials.matChrome}
          position={[7.141, -15.762, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole03.geometry}
          material={materials.matChrome}
          position={[11.2, -23.01, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole04.geometry}
          material={materials.matChrome}
          position={[-69.108, -32.288, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole05.geometry}
          material={materials.matChrome}
          position={[-72.297, -14.023, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole06.geometry}
          material={materials.matChrome}
          position={[-79.546, -25.91, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole07.geometry}
          material={materials.matChrome}
          position={[-29.389, 41.353, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole08.geometry}
          material={materials.matChrome}
          position={[-23.011, 52.37, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole09.geometry}
          material={materials.matChrome}
          position={[52.08, 21.928, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole10.geometry}
          material={materials.matChrome}
          position={[59.328, 16.709, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole11.geometry}
          material={materials.matChrome}
          position={[-68.545, -75.45, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole12.geometry}
          material={materials.matChrome}
          position={[-62.458, -86.332, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole13.geometry}
          material={materials.matChrome}
          position={[-50.469, -86.332, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh046.geometry}
          material={materials.matFloorGrey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh046_1.geometry}
          material={materials.lightWhite}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh046_2.geometry}
          material={materials.matFloor}
        /> */}
      </group>

      <group position={[0, 0, -20]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.1}>
        <group position={[-75.945, 0, -58.283]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeilingShape_body002.geometry}
            material={materials.matBeamWhite}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCeilingShape_frame002.geometry}
            material={materials.matBeamWhite}
          />
        </group>
        <group position={[49.054, 38.704, -58.283]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeilingShape_body003.geometry}
            material={materials.matBeamWhite}
            position={[9.656, -42.186, 0]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCeilingShape_frame003.geometry}
            material={materials.matBeamWhite}
            position={[9.656, -42.186, 0]}
            rotation={[0, 0, Math.PI]}
          />
        </group>
        <group position={[-6.592, 13.596, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLight01001.geometry}
            material={materials.lightWhite}
            position={[0, 0, -13.283]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLightBase01001.geometry}
            material={materials.matChromeGray}
            position={[0, 0, -13.283]}
          />
        </group>
        <group position={[-5.768, 5.768, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLight02001.geometry}
            material={materials.lightWhite}
            position={[0, 0, -13.283]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLightBase02001.geometry}
            material={materials.matChromeGray}
            position={[0, 0, -13.283]}
          />
        </group>
        <group position={[11.124, 14.008, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLight03001.geometry}
            material={materials.lightWhite}
            position={[0, 0, -13.283]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLightBase03001.geometry}
            material={materials.matChromeGray}
            position={[0, 0, -13.283]}
          />
        </group>
        <group position={[5.768, 43.259, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLight04001.geometry}
            material={materials.lightWhite}
            position={[0, 0, -13.283]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLightBase04001.geometry}
            material={materials.matChromeGray}
            position={[0, 0, -13.283]}
          />
        </group>
        <group position={[-6.592, -2.472, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLight05001.geometry}
            material={materials.lightWhite}
            position={[0, 0, -15.459]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CeLightBase05001.geometry}
            material={materials.matChromeGray}
            position={[0, 0, -15.459]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pMainBeam1.geometry}
          material={materials.matBeamImg}
          position={[0, 0, -13.157]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pMainBeam1.geometry}
          material={materials.matBeamImg}
          position={[0, 60, -13.157]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pMainBeam1.geometry}
          material={materials.matBeamImg}
          position={[0, -60, -13.157]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole01001.geometry}
          material={materials.matChrome}
          position={[-11.124, -18.951, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole02001.geometry}
          material={materials.matChrome}
          position={[7.141, -15.762, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole03001.geometry}
          material={materials.matChrome}
          position={[11.2, -23.01, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole04001.geometry}
          material={materials.matChrome}
          position={[-69.108, -32.288, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole05001.geometry}
          material={materials.matChrome}
          position={[-72.297, -14.023, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole06001.geometry}
          material={materials.matChrome}
          position={[-79.546, -25.91, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole07001.geometry}
          material={materials.matChrome}
          position={[-29.389, 41.353, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole08001.geometry}
          material={materials.matChrome}
          position={[-23.011, 52.37, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole09001.geometry}
          material={materials.matChrome}
          position={[52.08, 21.928, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole10001.geometry}
          material={materials.matChrome}
          position={[59.328, 16.709, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole11001.geometry}
          material={materials.matChrome}
          position={[-68.545, -75.45, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole12001.geometry}
          material={materials.matChrome}
          position={[-62.458, -86.332, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plightpole13001.geometry}
          material={materials.matChrome}
          position={[-50.469, -86.332, -70.466]}
          scale={[0.554, 0.554, 26.154]}
        />
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh093.geometry}
          material={materials.matFloorGrey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh093_1.geometry}
          material={materials.lightWhite}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh093_2.geometry}
          material={materials.matFloor}
        /> */}
      </group>

      {wallEnd && (
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
          <group position={[163.696, -345.802, -3.303]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pPartitionArc.geometry}
              material={materials.matBeamWhite}
              // material={materials.lightGold}
              position={[-98.108, 0, -13.283]}
            >
              {/* <meshBasicMaterial color={"#ff6600"} /> */}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pPartitionArcLight.geometry}
              // material={materials.lightGold}
              position={[-98.139, 0, -13.283]}
            >
              {/* <meshBasicMaterial color={[1.9, 0.71, 0.25]} toneMapped={false} /> */}
              <meshBasicMaterial color={"#bbbbbb"} />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pWallEnd.geometry}
              material={materials.matWallEnd}
              position={[-163.696, 45.802, -46.481]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
        </group>
      )}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.framePicture_01.geometry}
        material={materials.matFramePicture}

        position={[0.312, -0.552, -0.966]}
        scale={[1.032, 1.196, 1.196]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.framePicture_02.geometry}
        material={materials.matFramePicture}

        position={[0, -0.772, 1.915]}
        scale={[1, 1.324, 1.324]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.picture_02.geometry}
        // material={materials['matPicture.002']}

        position={[0, -0.772, 1.915]}
        scale={[1, 1.324, 1.324]}
      >
        <meshBasicMaterial map={pic_2} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.picture_01.geometry}
        // material={materials['matPicture.001']}

        position={[0.312, -0.552, -0.966]}
        scale={[1.032, 1.196, 1.196]}
      >
        <meshBasicMaterial map={pic_1} />
      </mesh>
    </group>
  )
}
// useGLTF.preload('/room-upper.glb')

export const Stand = ({hover}) => {
  const [Rmin, setRmin] = useState(0);
  const [Rmax, setRmax] = useState(0);
  const deltaRIn = 8;
  const deltaROut = 4;

  useFrame(() => {
    if(hover){
      if(Rmin < 2.6){setRmin(Rmin + ((2.6 - Rmin)/deltaRIn))}
      if(Rmax < 2.8){setRmax(Rmax + ((2.8 - Rmax)/deltaROut))}
    }else {
      if(Rmin > 0){setRmin(Rmin + ((0 - Rmin)/deltaROut))}
      if(Rmax > 0){setRmax(Rmax + ((0 - Rmax)/deltaRIn))}
    }
  })

  return (
  <>
    <mesh position={[0,-2.11,0]} rotation={[(Math.PI * -0.5),0,0]}>
      <ringGeometry args={[Rmin,Rmax,64]} />
      <meshStandardMaterial color={[4,4,4]} toneMapped={false} envMapIntensity={0} />
    </mesh>
  </>
  )
}

export const Video = ({bgVideoRef}) => {
  const particle = useRef();
  // const [video] = useState(() => Object.assign(document.createElement('video'), { src: basePath+'/bg-presenter.mp4', crossOrigin: 'Anonymous', loop: true, playsinline:true, muted: true }))
  // useEffect(() => void video.play(), [video])

  const [video] = useState(bgVideoRef.current);
  useEffect(() => {
    video.play();
  }, [video])

  useFrame(() => {
    particle.current.rotation.y += 0.001;
  })

  return (
    <mesh ref={particle} position={[0,-1,0]} rotation={[0,0,0]} scale={0.15}>
      <sphereGeometry args={[10, 32, 32]} />
      <meshBasicMaterial toneMapped={false} color={[1,1,1]} blending={AdditiveBlending} side={BackSide} transparent={true}> 
        <videoTexture attach="map" color="#000000" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  )
}

export const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
`;

export const fragmentShader = `
    uniform sampler2D uTexture;
    varying vec2 vUv;
    void main() {
        vec4 textureColor = texture2D(uTexture, vec2(vUv.x, 0.5 + vUv.y/2.)); 
        vec4 textureWhite = texture2D(uTexture, vec2(vUv.x, vUv.y/2.));
        gl_FragColor = vec4(textureColor.xyz, textureWhite.x); 
    }
`;

export const VideoComponent = ({indexKey, itemTotal, scroll, videoPresenterRef, videoPresenterAlphaRef}) => {
  const sOffset = indexKey/itemTotal;
  const divOffset = indexKey == 0 ? ((1/itemTotal * 0.7) - 1):(1/itemTotal * 0.7);

  // console.log(sOffset - divOffset);

  const [countHi, setCountHi] = useState(0);
  // const [video_presenter] = useState(() => Object.assign(
  //   document.createElement('video'), 
  //   { src: video[0], crossOrigin: 'Anonymous', controls : true, loop: false, playsinline:true, muted: true 
  // }))
  // useEffect(() => void video_presenter.play(), [video_presenter])

  // console.log((sOffset - divOffset), scroll.offset);

  const [video_presenter] = useState(videoPresenterRef.current);
  const [video_presenter_alpha] = useState(videoPresenterAlphaRef.current);

  useEffect(() => void video_presenter.play(), [video_presenter])
  useEffect(() => void video_presenter_alpha.play(), [video_presenter_alpha])

  useFrame(() => {
    // console.log(scroll.offset, frameName);
    // if(scroll.offset >= 0.9){
    if(scroll.offset >= (sOffset - divOffset)){
      if (countHi == 0) {
        // if(video_presenter.ended){
        //   video_presenter.currentTime = 0;
        // }

        video_presenter.play();
        video_presenter_alpha.play()
        setCountHi(countHi+1);
      }
    }else {
      if(countHi > 0){
        setCountHi(0);
      }
    }
  });

  // const vt = new VideoTexture(video_presenter);
  // const uniforms = {
  //   uTexture: { value: vt },
  // };


  

  return (
    <mesh position={[0,-0.17,0]}>
      <planeGeometry args={[6, 6]} />
      <meshBasicMaterial toneMapped={false} color={[1,1,1]} transparent={true}> 
        <videoTexture attach="map" color="#000000" args={[video_presenter]} encoding={sRGBEncoding} />
        <videoTexture attach="alphaMap" color="#ffffff" args={[video_presenter_alpha]} encoding={sRGBEncoding} />
      </meshBasicMaterial>

      {/* 
      <mesh position={[-0.1,-1.06,0.1]}>
        <planeGeometry args={[3,3]} />
          <shaderMaterial
          depthTest={false}
          transparent={true}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
        </mesh>
      */}
    </mesh>
  )
};

// export const VideoPresenter = ({video, scroll}) => {
//   const [frameName, setFrameName] = useState('stand');
//   const [countHello, setCountHello] = useState(0);
//   const { spriteObj } = useSpriteLoader(
//     video[0],
//     video[1],
  
//     ['stand', 'hello'],
//     null
//   );

//   const onEnd = ({ currentFrameName, currentFrame }) => {
//     if (currentFrameName === 'hello') {
//       setFrameName('stand')
//     }
//   }

//   // setFrameName('hello')
//   useFrame(() => {
//     // console.log(scroll.offset, frameName);
//     if(scroll.offset >= 0.9){
//       if (frameName === 'stand' && countHello == 0) {
//         setFrameName('hello');
//         setCountHello(countHello+1);
//       }
//     }else {
//       if(countHello > 0){
//         setCountHello(0);
//       }
//     }
//   });

//   return (
//     <SpriteAnimator
//       scale={5.9}
//       position={[0,-0.2,0]}
//       onLoopEnd={onEnd}
//       frameName={frameName}
//       fps={24}
//       animationNames={['stand', 'hello']}
//       autoPlay={true}
//       loop={true}
//       alphaTest={0.01}
//       // textureImageURL={video[0]}
//       // textureDataURL={video[1]}
//       spriteDataset={spriteObj}
//     />
//   );
// }


export const OneProduct = ({indexKey, texture, video, distance, pos, setFocus,  itemTotal, scroll, interactive, mq, basePath, bgVideoRef, videoPresenterRef, videoPresenterAlphaRef}) => {
  const mat = useLoader(TextureLoader, texture);
  mat.color = "#000000";
  // mat.encoding = THREE.sRGBEncoding;

  const [cursor, setCursor] = useState(false);

  useCursor(cursor);

  return (
    <group position={pos}>
      {interactive ? (
        <>
          <mesh position={[0,-0.4,0]}>
            <planeGeometry args={[6, 6]} />
            <meshBasicMaterial makeDefault map={mat} transparent={true} depthTest={false} />
          </mesh>

          <Stand hover={cursor} />
          <mesh 
            position={[0,-0.5,0.2]} 
            onClick={(e) => {
              e.stopPropagation();

              let totalHeight = scroll.el.clientHeight * itemTotal * distance;
              let cameraOffset = scroll.el.clientHeight * 0.5;
              let scrollFocus = ((indexKey/itemTotal) * totalHeight) - cameraOffset;

              let ww = window.innerWidth;

              if(ww >= 1024){
                // desktop
                if((indexKey/itemTotal) < scroll.offset){
                  // console.log(1+((indexKey-0.5)/itemTotal));

                  scroll.scroll.current = 1+((indexKey-0.5)/itemTotal);
                }else {
                  // console.log(scrollFocus);

                  scroll.el.scroll(0, scrollFocus);
                }
              }
              else {
                // mobile
                if((indexKey/itemTotal) < scroll.offset){
                  // scroll.scroll.current = 1+((indexKey-0.5)/itemTotal);
                }else {
                  // scroll.el.scroll(0, scrollFocus);
                  gsap.to(scroll.el, {duration:1.5, scrollTo: {x: 0, y: scrollFocus}, ease:"power1.in"});
                }
              }

              // set focus
              setFocus(indexKey);
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              setCursor(true);
            }}
            onPointerOut={() => {
              setCursor(false);
            }}
          >
            <planeGeometry args={[4, 3]} />
            <meshBasicMaterial makeDefault visible={false} /> 
          </mesh>
        </>
      ):(
        <>
          {video.length > 0 ? (
            <VideoComponent indexKey={indexKey} itemTotal={itemTotal} scroll={scroll} videoPresenterRef={videoPresenterRef} videoPresenterAlphaRef={videoPresenterAlphaRef} />
          ):(
            <mesh position={[0,-0.2,0]}>
              <planeGeometry args={[6, 6]} />
              <meshBasicMaterial makeDefault map={mat} transparent={true} depthTest={false} />
            </mesh>
          )}
          <Video bgVideoRef={bgVideoRef} />
          <mesh position={[0,-2.11,0]} rotation={[(Math.PI * -0.5),0,0]}>
            <ringGeometry args={[0.9,1,64]} />
            <meshStandardMaterial color={[3,3,3]} toneMapped={false} envMapIntensity={0} />
          </mesh>
        </>
      )}
    </group>
  )
}

export const CameraLoop = ({mcDepth, mcRepeat}) => {
  const scroll = useScroll();
  const { camera } = useThree();
  const [vec] = useState(() => new Vector3())

  const cameraY = 2;
  const cameraX = 4.5 * 0.55;
  const cameraZ = 20;
  const offsetPI = 0;

  useFrame(() => {
    // if(camera){
      // const percentRoom = (scroll.offset * mcRepeat)%1;

      // camera.position.set((Math.sin((2 * Math.PI) * (percentRoom+offsetPI)) * cameraX), cameraY, (scroll.offset * mcDepth * mcRepeat));
      // camera.position.lerp(vec.set((Math.sin((2 * Math.PI) * (percentRoom+offsetPI)) * cameraX), cameraY, (scroll.offset * mcDepth * mcRepeat)), 1);

      // camera.rotation.set(MathUtils.degToRad(-5), 0, 0);
    // }
  })

  return (<></>)
}

export const AllProducts = ({items, mcDepth, distance, mcRepeat, setFocus, picture, mq, basePath, bgVideoRef, videoPresenterRef, videoPresenterAlphaRef}) => {
  // let textureLoader = new TextureLoader();
  //     textureLoader.crossOrigin = null;
  const [pic_1, pic_2] = useLoader(TextureLoader, picture);
  // const [pic_1, pic_2] = useLoader(textureLoader, picture);
  const roomRef = useRef();
  const scroll = useScroll();

  // const { camera } = useThree()

  // const cameraY = 2;
  const cameraX = 4.5 * 0.55;
  // const cameraZ = 20;
  const offsetPI = 0; //0.5;

  const product_x = 4.5 * 0.6;
  const product_y = 2.1; //1.7;
  const product_z = 20;
  const start_z = 0;

  let countStop = 0;

  let room_repeat_arr = [''];
  for(let i=0; i<=mcRepeat; i++){
    room_repeat_arr.push('');
  }

  let firstScrollSet = true;
  useFrame(() => {
    const percentRoom = (scroll.offset * mcRepeat)%1;
    roomRef.current.position.set((Math.sin((2 * Math.PI) * (percentRoom + offsetPI)) * cameraX), 0, (scroll.offset * mcDepth * mcRepeat));

    // console.log(scroll.el.scrollTop+'/'+(scroll.el.scrollHeight-scroll.el.offsetHeight), scroll.scroll.current);
    // if(scroll.scroll.current == 1){
    //   countStop += 1;
    //   // console.log('count');

    //   if(countStop >= 100){
    //     scroll.el.scrollTop = (scroll.el.scrollHeight-scroll.el.offsetHeight) - 2;
    //     scroll.scroll.current = 0.995;

    //     // console.log('jump');
    //   }
    // }else if(scroll.scroll.current == 0){
    //   countStop += 1;
    //   // console.log('count');

    //   if(countStop >= 100){
    //     scroll.el.scrollTop = 2;
    //     scroll.scroll.current = 0.005;

    //     // console.log('jump');
    //   }
    // }else {
    //   countStop = 0;
    //   // console.log('clear');
    // }
  })

  return (
    <group ref={roomRef} position={[0,0,0]}>

      <OneRoom position={[0,0,mcDepth]} pic_1={pic_1} pic_2={pic_2} basePath={basePath} />
      <OneRoom position={[0,0,0]} pic_1={pic_1} pic_2={pic_2} basePath={basePath} />
      {room_repeat_arr.map((item, itemKey) => (
        <OneRoom key={itemKey} position={[0,0,-mcDepth*(itemKey+1)]} pic_1={pic_1} pic_2={pic_2} basePath={basePath} />
      ))}

      {items.map((item, itemKey) => (
        <group key={itemKey}>
          {item.texture != "" && (
            <>
              <OneProduct 
                indexKey={itemKey} 
                setFocus={setFocus} 
                scroll={scroll}
                itemTotal={items.length}
                texture={item.texture} 
                video={item.video} 
                interactive={item.url != ""}
                mq={mq}
                basePath={basePath}
                bgVideoRef={bgVideoRef}
                videoPresenterRef={videoPresenterRef} 
                videoPresenterAlphaRef={videoPresenterAlphaRef}
                distance={distance}
                pos={[product_x * (itemKey%2 == 0 ? (1):(-1)), product_y, start_z+(product_z * (items.length - itemKey))]}
              />

              <OneProduct 
                indexKey={itemKey} 
                setFocus={setFocus} 
                scroll={scroll}
                itemTotal={items.length}
                texture={item.texture} 
                video={item.video} 
                interactive={item.url != ""}
                mq={mq}
                basePath={basePath}
                bgVideoRef={bgVideoRef}
                videoPresenterRef={videoPresenterRef} 
                videoPresenterAlphaRef={videoPresenterAlphaRef}
                distance={distance}
                pos={[product_x * (itemKey%2 == 0 ? (1):(-1)), product_y, start_z+(-product_z * itemKey)]}
              />

              <OneProduct 
                indexKey={itemKey} 
                setFocus={setFocus} 
                scroll={scroll}
                itemTotal={items.length}
                texture={item.texture} 
                video={item.video} 
                interactive={item.url != ""}
                mq={mq}
                basePath={basePath}
                bgVideoRef={bgVideoRef}
                videoPresenterRef={videoPresenterRef} 
                videoPresenterAlphaRef={videoPresenterAlphaRef}
                distance={distance}
                pos={[product_x * (itemKey%2 == 0 ? (1):(-1)), product_y, start_z+(-product_z * (itemKey+items.length))]}
              />
            </>
          )}
        </group>
      ))}

      <group position={[0,0,0]}>
        <mesh position={[0,8.6,0]} rotation={[-(Math.PI*0.5),0,0]}>
          <planeGeometry args={[24, (2 * mcDepth * (mcRepeat+3))]} />
          <meshBasicMaterial color={'#000000'} side={DoubleSide} />
        </mesh>

        <mesh position={[-7,0.004,0]} rotation={[-(Math.PI*0.5),0,0]}>
          <planeGeometry args={[0.2, (2 * mcDepth * (mcRepeat+2))]} />
          <meshStandardMaterial color={[2,2,2]} toneMapped={false} roughness={0} metalness={0} />
        </mesh>
        <mesh position={[7,0.004,0]} rotation={[-(Math.PI*0.5),0,0]}>
          <planeGeometry args={[0.2, (2 * mcDepth * (mcRepeat+3))]} />
          <meshStandardMaterial color={[2,2,2]} toneMapped={false} roughness={0} metalness={0} />
        </mesh>

        <mesh position={[-9,0,0]} rotation={[-(Math.PI*0.5),0,0]}>
          <planeGeometry args={[3.8, (2 * mcDepth * (mcRepeat+3))]} />
          <meshBasicMaterial color={[0.45, 0.45, 0.48]} />
        </mesh>
        <mesh position={[9,0,0]} rotation={[-(Math.PI*0.5),0,0]}>
          <planeGeometry args={[3.8, (2 * mcDepth * (mcRepeat+3))]} />
          <meshBasicMaterial color={[0.45, 0.45, 0.48]} />
        </mesh> 
      </group>
    </group>
  )
}

export const RoomInfinite = ({items, focus, setFocus, picture, basePath, bgVideoRef, videoPresenterRef, videoPresenterAlphaRef}) => {
  const router = useRouter();
  const [cursor, setCursor] = useState(false);
  useCursor(cursor);

  const count_items = items.length;
  const room_item = 2;
  const room_repeat = Math.ceil(count_items/room_item);
  const one_room_depth = 40;
  const scroll_distance = 2;

  const [mq, setMQ] = useState(false);
  useLayoutEffect(() => {
    let ww = window.innerWidth;

    // default
    setMQ(ww >= 1024);

    function w_resize(e){
      if(ww != window.innerWidth && ((window.innerWidth >= 1024) !== mq)){
        ww = window.innerWidth;

        // change view
        setMQ(ww >= 1024);
      }
    }
    
    window.addEventListener('resize', w_resize);
    return () => window.removeEventListener('resize', w_resize);
  }, [mq]);

  return (
    <Canvas 
      shadows={true}
      gl={{
        powerPreference: "high-performance",
        alpha: false,
        antialias: false,
        stencil: false,
        depth: false
      }}
    >
      {/* <StatsGl /> */}

      <motion.fog 
        attach="fog" 
        color={[1,1,1]}
        far={5}
        near={0.5}
        initial={{far:1, near:0.5}}
        animate={{far:100, near:70 }}
        transition={{ ease:[0.33, 1, 0.68, 1], duration: 3 }}
      />
      <color attach='background' args={['#ffffff']} />
      <ambientLight intensity={1.6} />

      <Environment preset="city" />

      <PerspectiveCamera makeDefault fov={35} position={[0, 1.5, 0]} rotation={[MathUtils.degToRad(-2), 0, 0]} />

      <Suspense fallback={null}>
        <Ground pos={[0,-0.02,0]} room_depth={(one_room_depth * (room_repeat+1))} />

        <motion.group
            initial={{ z: -20 }}
            animate={{ z: 0}}
            transition={{ ease:[0.33, 1, 0.68, 1], duration: 3 }}
          >
          <ScrollControls infinite damping={mq ? (2):(0)} distance={scroll_distance} pages={count_items}>
              <AllProducts items={items} mcDepth={one_room_depth} distance={scroll_distance} mcRepeat={room_repeat} setFocus={setFocus} picture={picture} mq={mq} basePath={basePath} bgVideoRef={bgVideoRef} videoPresenterRef={videoPresenterRef} videoPresenterAlphaRef={videoPresenterAlphaRef} />
          </ScrollControls>
        </motion.group>
      </Suspense>

      <Suspense fallback={null}>
        <EffectComposer 
          disableNormalPass={true} 
        >
          <Bloom
            intensity={0.3} 
            luminanceThreshold={0.9}
            // mipmapBlur
          />
        </EffectComposer>
      </Suspense>

      <Preload all={true} />
    </Canvas>
  )
}
