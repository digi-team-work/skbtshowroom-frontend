"use client"

import React from 'react'
import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from "gsap";

const RoomInfinite = dynamic(() => import('@/components/canvas/RoomInfinity').then((mod) => mod.RoomInfinite), { ssr: false });

export default function ShowroomInfinity({items, picture, basePath}) {
  const [firstTime, setFirstTime] = useState(true);
  const [howto, setHowto] = useState(true);
  const [itemFocus, setItemFocus] = useState(-1);
  const transitionPageRef = useRef();
  const router = useRouter();

  useEffect(() => {
    if(itemFocus != -1){
      // animate
      gsap.fromTo(transitionPageRef.current, {opacity:0}, {opacity:1, delay:0.5, duration:1, ease:'power2.out', onComplete:function(){
        router.push(items[itemFocus].url);
      }});
    }else {
      if(firstTime){
        gsap.fromTo(transitionPageRef.current, {opacity:1}, {opacity:0, delay:3.85, duration:0.6, onComplete:function(){
          setHowto(false);
        }});
        setFirstTime(false);
      }
      
    }
  }, [itemFocus]);

  return (
    <>
      <RoomInfinite items={items} focus={itemFocus} setFocus={setItemFocus} picture={picture} basePath={basePath} />
      
      <div ref={transitionPageRef} className='transitionPage flex justify-center items-center fixed left-0 top-0 w-full h-[100vh] bg-white pointer-events-none select-none z-[100]'>
        {howto && (
          <div className='p-5 w-[500px] max-w-full'>
            <div className='flex flex-nowrap items-center justify-center text-center whitespace-nowrap'>
              <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
              </svg>

              <div className='text-3xl font-bold'>LOADING</div>
            </div>

            <hr className='border-t-[3px] border-dotted my-10' />

            <div className='grid grid-cols-2 gap-4 text-lg lg:text-xl font-medium leading-[10px] text-center'>
              <div>
                <div className='leading-none'>
                  <b>MAC</b> <br />SCROLL UP
                </div>
                <div className='block relative mx-auto my-4 w-8 h-14 border-[3px] border-black rounded-full'>
                  <span className='block absolute left-0 right-0 top-2 mx-auto w-[3px] h-3 rounded-full bg-black'></span>
                </div>
              </div>

              <div>
                <div className='leading-none'>
                  <b>WINDOW</b> <br />SCROLL DOWN
                </div>
                <div className='block relative mx-auto my-4 w-8 h-14 border-[3px] border-black rounded-full'>
                  <span className='block absolute left-0 right-0 bottom-2 mx-auto w-[3px] h-3 rounded-full bg-black'></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
