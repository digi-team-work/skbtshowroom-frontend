'use client'

import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'

import { gsap } from "gsap";

export default function HomeDesktop({basePath}) {
  const router = useRouter();
  const [start, setStart] = useState(false);
  const anchorRef = useRef();
  const scene = useRef();
  const tp = useRef();

  const [sceneScale, setSceneScale] = useState(1);

  useLayoutEffect(() => {
    let ww = window.innerWidth;
    let wh = window.innerHeight;
    let newScale = 1;

    // default
    // setSceneScale(ww >= 1024);
    // console.log("w : "+ww/1920 +", h : "+wh/1080);
    if((ww/1920) > 1 || (wh/1080) > 1){
      newScale = (ww/1920) > (wh/1080) ? (ww/1920):(wh/1080);
      // console.log(newScale);
      gsap.set(anchorRef.current, {scale:newScale});
      setSceneScale(newScale);
    }

    function w_resize(e){
      if(ww != window.innerWidth){
        ww = window.innerWidth;

        // change view
        // sceneScale(ww >= 1024);
        // console.log("w : "+ww/1920 +", h : "+wh/1080);
        if((ww/1920) > 1 || (wh/1080) > 1){
          newScale = (ww/1920) > (wh/1080) ? (ww/1920):(wh/1080);
          // console.log(newScale);
          gsap.set(anchorRef.current, {scale:newScale});
          setSceneScale(newScale);
        }
      }
    }
    
    window.addEventListener('resize', w_resize);
    return () => window.removeEventListener('resize', w_resize);
  }, [sceneScale]);

  useEffect(() => {
    const frameStart = Date.now();
    const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    let animateFrame;
    let breakAnimate = false;
    let mx = (window.innerWidth * 0.5);
    let my = (window.innerHeight * 0.5);

    if(!start){
      gsap.fromTo(tp.current, {
        opacity:1
      }, {
        duration:0.6,
        delay:0.2,
        opacity:0
      });
    }

    // function
    function step(timestamp) {
      let newErx = (mx - (window.innerWidth * 0.5)) * 0.005;
      let oldErx = gsap.getProperty(scene.current, "rotateY");
      let newEry = ((window.innerHeight * 0.8) - my) * 0.0025; // my * 0.01; 
      let oldEry = gsap.getProperty(scene.current, "rotateX");
      let newEx = ((window.innerWidth * 0.5) - mx) * 0.5;
      let oldEx = gsap.getProperty(scene.current, "x");
      let newEy = ((window.innerHeight * 0.5) - my) * 0.2; // my * 0.01; 
      let oldEy = gsap.getProperty(scene.current, "y");

      // gsap scene.current
      if(!breakAnimate){
        if(!start){
          gsap.set(scene.current, {
            x:(oldEx + (newEx - oldEx)*0.1), 
            y:(oldEy + (newEy - oldEy)*0.1),
            rotateY:(oldErx + (newErx - oldErx)*0.1), 
            rotateX:(oldEry + (newEry - oldEry)*0.1)
          });
        }else {
          breakAnimate = true;
  
          // animate
          gsap.to(scene.current, {
            duration:2,
            ease:'power2.in',
            rotateX:0,
            rotateY:0,
            x:-100, 
            y:-300,
            z:0,
            onComplete:function(){
              router.push('/showroom');
          }});
  
          gsap.to(scene.current, {
            duration:1.5,
            ease:'power2.in',
            perspective:250
          });
  
          gsap.fromTo(tp.current, {
            opacity:0
          }, {
            duration:0.5,
            delay:1.5,
            opacity:1
          });
        }

        animateFrame = requestAnimationFrame(step);
      }else {
        cancelAnimationFrame(animateFrame);
      }
    }

    // event
    scene.current.addEventListener("mousemove", function(e){
      mx = e.x;
      my = e.y;
    });

    // run frame
    animateFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animateFrame);
  }, [start]);

  return (    
    <div className='home-page'>
      <div ref={anchorRef} className='anchor'>
        <div ref={scene} className="scene">
          <div className='bg'>
            <img className='bg-rp' src={`${basePath}/assets/img/home/bg-home.png`} alt="bg" width={3000} height={1260} />

            <div className='bird-fly'>
              <video width="320" height="240" autoPlay playsInline muted loop>
                <source src={`${basePath}/assets/video/home-bird-fly.mp4`} type="video/mp4" />
              </video>
            </div>

            <div className='frame-video'>
              <video width="320" height="240" autoPlay playsInline muted loop>
                <source src={`${basePath}/assets/video/home.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className='ground'>
            <div></div>
            <div></div>
            <div></div>

            <div></div>
            <div></div>
            <div></div>

            <div></div>
            <div></div>
            <div></div>

            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className='drone'><img src={`${basePath}/assets/img/home/drone.png`} alt="drone" width={210} height={71} /></div>
          <div className='tree'><img src={`${basePath}/assets/img/home/tree.png`} alt="tree" width={925} height={986} /></div>
          <div className='kubota-1'><img src={`${basePath}/assets/img/home/kubota-1.png`} alt="kubota" width={597} height={378} /></div>
          <div className='kubota-2'><img src={`${basePath}/assets/img/home/kubota-2.png`} alt="kubota" width={384} height={336} /></div>
          <div 
            className='enter' 
            onClick={() => {
              // clear and animate
              setStart(true);
            }}
          >
            <img className='arrow-1' src={`${basePath}/assets/img/home/enter.png`} alt="enter" width={51} height={90} />
            <img className='arrow-2' src={`${basePath}/assets/img/home/enter.png`} alt="enter" width={51} height={90} />
          </div>
          <div className='presenter'><img src={`${basePath}/assets/img/home/presenter.png`} alt="presenter" width={161} height={318} /></div>
        </div>
      </div>

      <div className='logo-kubota'><img src={`${basePath}/assets/img/home/logo.png`} alt="logo" width={221} height={71} /></div>

      <div ref={tp} className='transition-page'></div>
    </div>
  )
}
