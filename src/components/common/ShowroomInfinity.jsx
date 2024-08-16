"use client"

import React from 'react'
import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from "gsap";

const RoomInfinite = dynamic(() => import('@/components/canvas/RoomInfinity').then((mod) => mod.RoomInfinite), { ssr: false });

export default function ShowroomInfinity({items, picture, basePath, presenter, audioClick}) {
  const [firstTime, setFirstTime] = useState(true);
  const [howto, setHowto] = useState(true);
  const [itemFocus, setItemFocus] = useState(-1);
  const router = useRouter();
  const transitionPageRef = useRef();
  const bgVideoRef = useRef();
  const videoPresenterRef = useRef();
  const videoPresenterAlphaRef = useRef();
  const audioClickRef = useRef();

  const [consoleLog, setConsoleLog] = useState('');

  useEffect(() => {
    if(itemFocus != -1){
      // play sound
      audioClickRef.current.play();

      // animate
      let ww = window.innerWidth;
      if(ww >= 1024){
        gsap.fromTo(transitionPageRef.current, {opacity:0}, {opacity:1, delay:2, duration:2, ease:'power2.out', onComplete:function(){
          router.push(items[itemFocus].url);
        }});
      }else {
        gsap.fromTo(transitionPageRef.current, {opacity:0}, {opacity:1, delay:0.5, duration:0.5, ease:'power2.out', onComplete:function(){
          router.push(items[itemFocus].url);
        }});
      }
      
    }else {
      if(firstTime){
        gsap.fromTo(transitionPageRef.current, {opacity:1}, {opacity:0, delay:1.5, duration:0.6, onComplete:function(){
          // setHowto(false);
        }});
        setFirstTime(false);
      }
    }
  }, [itemFocus]);

  return (
    <>
      <div className='block invisible absolute left-0 top-0 w-1 h-0 overflow-hidden'>
        <video ref={bgVideoRef} src={`${basePath}/bg-presenter.mp4`} controls={true} muted={true} playsInline={true} autoPlay={true} loop={true} crossOrigin="Anonymous" />

        {presenter && (
          <>
            {presenter.video.length > 0 && (
              <>
                {presenter.video[0] != '' && (
                  <video ref={videoPresenterRef} src={presenter.video[0]} controls={true} muted={true} playsInline={true} autoPlay={true} loop={false} crossOrigin="Anonymous" />
                )}
                {presenter.video[1] != '' && (
                  <video ref={videoPresenterAlphaRef} src={presenter.video[1]} controls={true} muted={true} playsInline={true} autoPlay={true} loop={false} crossOrigin="Anonymous" />
                )}
              </>
            )}
          </>
        )}

        <audio ref={audioClickRef} controls playsInline>
          {(audioClick && audioClick != '') ? (
            <source src={audioClick} type="audio/mpeg" />
          ):(
            <source src={`${basePath}/audio-click.mp3`} type="audio/mpeg" />
          )}
        </audio>
      </div>

      <RoomInfinite setConsoleLog={setConsoleLog} items={items} focus={itemFocus} setFocus={setItemFocus} picture={picture} basePath={basePath} bgVideoRef={bgVideoRef} videoPresenterRef={videoPresenterRef} videoPresenterAlphaRef={videoPresenterAlphaRef} />

      <div className='hidden lg:flex justify-center items-center fixed left-0 bottom-0 w-full h-auto pointer-events-none select-none z-[90] p-4 bg-gradient-to-b from-black/0 to-black/50'>
        <div className='grid grid-cols-2 gap-10 text-lg lg:text-xl  leading-[10px] text-center text-white'>
          <div>
          <div className='block relative mx-auto my-4 w-6 h-10 border border-white rounded-full'>
              <span className='block absolute left-0 right-0 top-2 mx-auto w-[1px] h-2 rounded-full bg-white'></span>
            </div>
            <div className='leading-none'>
              MAC เลื่อนขึ้น
            </div>
          </div>

          <div>
            <div className='block relative mx-auto my-4 w-6 h-10 border border-white rounded-full'>
              <span className='block absolute left-0 right-0 bottom-2 mx-auto w-[1px] h-2 rounded-full bg-white'></span>
            </div>
            <div className='leading-none'>
              WINDOW เลื่อนลง
            </div>
          </div>
        </div> 
      </div>

      <div className='fixed left-3 bottom-3 z-[99] bg-red-500 p-2 text-white'>status : {consoleLog}</div>
      
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

              <div className='text-3xl font-bold'>กำลังโหลด</div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
