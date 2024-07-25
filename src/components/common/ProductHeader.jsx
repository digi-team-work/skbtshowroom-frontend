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
      <div ref={productTPRef} className='block fixed left-0 top-0 w-full h-full z-50 bg-white pointer-events-none select-none'></div>

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
