"use client"

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import { gsap } from "gsap";

export default function ProductHeader({header, basePath, linkPath, back_showroom}) {
  const router = useRouter();
  const productTPRef = useRef();

  useEffect(() => {
    // transition in
    gsap.fromTo(productTPRef.current, {opacity:1}, {opacity:0, duration:0.4, onStart:function(){
      window.scrollTo(0,0);
    }});
  }, []);

  return (
    <>
      <div ref={productTPRef} className='flex justify-center items-center fixed left-0 top-0 w-full h-[100vh] bg-white pointer-events-none select-none z-[100]'>
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
      </div>

      <div className='header-page'>
        <div className='container'>
          <div className='main-menu'>
            <div className='mobile-top'>
              <a 
                className='btn-style-1 cursor-pointer'
                onClick={() => {
                  gsap.fromTo(productTPRef.current, {opacity:0}, {opacity:1, duration:0.3, onComplete:function(){
                    window.scrollTo(0,0);
                    // router.back();
                    router.push(linkPath+'/hall');
                  }});
                }}
              >
                <img src={`${basePath}/assets/img/icon/back.svg`} alt={`${back_showroom}`} />
                {back_showroom}
              </a>
            </div>

            {header && (
              <div className={`mobile-bottom ${header?.length == 0 && '!hidden'}`}>
                {header?.map((item, itemKey) => (
                  <a key={`header-menu-${itemKey}`} className='one-menu' href={`${item.link.url}`} target={`${item.link.target}`}>
                    <img src={`${item.icon}`} alt={`${item.title}`} />
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
