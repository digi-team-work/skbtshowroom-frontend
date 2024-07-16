"use client"

import React, { useLayoutEffect, useRef } from 'react'
import { useRouter } from 'next/navigation';

import { gsap } from "gsap";
import { useState } from 'react';

export default function HomeMobile({basePath, linkPath}) {
  const router = useRouter();
  const ground = useRef();
  const bg = useRef();
  const kubota1 = useRef();
  const kubota2 = useRef();
  const enter = useRef();
  const presenter = useRef();
  const tp = useRef();
  const logo = useRef();
  const btn = useRef();
  const [oneClick, setOneClick] = useState(true);

  useLayoutEffect(() => {
    // transition in
    gsap.fromTo(ground.current, {opacity:0, scale:1.2}, {opacity:1, scale:1, delay:0.3, duration:0.7});

    gsap.fromTo(bg.current, {opacity:0}, {opacity:1, delay:0.7, duration:0.3});
    gsap.fromTo(bg.current, {scale:1.2}, {scale:1, ease:'power1.out', delay:0.7, duration:0.6});

    gsap.fromTo(enter.current, {opacity:0}, {opacity:1, delay:0.7, duration:0.6});
    gsap.fromTo(enter.current, {scale:2, x:0, y:100}, {x:0, y:0, scale:1, ease:'power1.out', delay:0.7, duration:1});
    
    gsap.fromTo(kubota1.current, {opacity:0}, {opacity:1, delay:0.9, duration:0.3});
    gsap.fromTo(kubota1.current, {scale:2, x:-250, y:0}, {x:0, y:0, scale:1, ease:'power2.out', delay:0.9, duration:0.9});

    gsap.fromTo(kubota2.current, {opacity:0}, {opacity:1, delay:0.9, duration:0.3});
    gsap.fromTo(kubota2.current, {scale:2, x:250, y:0}, {x:0, y:0, scale:1, ease:'power2.out', delay:0.9, duration:0.9});

    gsap.fromTo(presenter.current, {opacity:0}, {opacity:1, delay:1.2, duration:0.2});
    gsap.fromTo(presenter.current, {scale:2, x:-120, y:0}, {x:0, y:0, scale:1, ease:'power2.out', delay:1.2, duration:1});

    gsap.fromTo(logo.current, {opacity:0, x:0, y:30}, {opacity:1, x:0, y:0, ease:'power2.out', delay:1.2, duration:0.7});
    gsap.fromTo(btn.current, {opacity:0, x:0, y:-30}, {opacity:1, x:0, y:0, ease:'power2.out', delay:1.4, duration:0.7});

    return () => {
      // clear
      gsap.set(ground.current, {opacity:0, scale:1});
      gsap.set(bg.current, {opacity:0, scale:1});
      gsap.set(enter.current, {opacity:0, x:0, y:0, scale:1});
      gsap.set(kubota1.current, {opacity:0, x:0, y:0, scale:1});
      gsap.set(kubota2.current, {opacity:0, x:0, y:0, scale:1});
      gsap.set(presenter.current, {opacity:0, x:0, y:0, scale:1});

      gsap.set(logo.current, {opacity:0, x:0, y:0});
      gsap.set(btn.current, {opacity:0, x:0, y:0});
    }
  }, []);

  return (
    <div className='home-mobile-page'>
      <div ref={ground} className='bg-mobile' style={{backgroundImage:`url(${basePath}/assets/img/home/bg-mobile.png)`}}></div>

      <div className='logo-kubota'>
        <img ref={logo} src={`${basePath}/assets/img/home/logo.png`} alt="logo" />
      </div>

      <div className='box-showroom'>
        <div className='scene'>
          <div ref={bg} className='bg-showroom'>
            <img src={`${basePath}/assets/img/home/bg-home-mobile.png`} alt="" />
          </div>

          <div ref={kubota1} className='kubota-1'><img src={`${basePath}/assets/img/home/kubota-1.png`} alt="kubota" width={597} height={378} /></div>
          <div ref={kubota2} className='kubota-2'><img src={`${basePath}/assets/img/home/kubota-2.png`} alt="kubota" width={384} height={336} /></div>
          <div ref={enter} className='enter'>
            <img className='arrow-1' src={`${basePath}/assets/img/home/enter.png`} alt="enter" width={51} height={90} />
            <img className='arrow-2' src={`${basePath}/assets/img/home/enter.png`} alt="enter" width={51} height={90} />
          </div>
          <div ref={presenter} className='presenter'><img src={`${basePath}/assets/img/home/presenter.png`} alt="presenter" width={161} height={318} /></div>
        </div>
      </div>

      <div ref={btn} className='box-btn'>
        <div 
          className='btn-style-3 min-w-[214px] cursor-pointer'
          onClick={() => {
            // animate
            if(oneClick){
              gsap.to(presenter.current, {scale:8, x:-600, y:0, duration:1.5, ease:'power2.in'});

              gsap.to(kubota1.current, {scale:4, x:-700, y:0, duration:1.3, ease:'power2.in'});
              gsap.to(kubota2.current, {scale:4, x:500, y:0, duration:1.3, ease:'power2.in'});

              gsap.to(enter.current, {scale:4, x:0, y:200, duration:1.5, ease:'power2.in'});

              gsap.to(bg.current, {scale:4, x:-50, y:-200, duration:1.5, ease:'power2.in'});

              gsap.to(tp.current, {opacity:1, delay:0.8, duration:0.5, onComplete:function(){
                router.push(`${linkPath}/hall`);
              }});
            }

            setOneClick(false);
          }}
        >เข้าชมโชว์รูม</div>
      </div>

      <div ref={tp} className="transition-page"></div>
    </div>
  )
}
