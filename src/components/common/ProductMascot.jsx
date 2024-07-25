"use client";

import React, { useLayoutEffect, useRef } from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProductMascot({type, color, mascot, title, title_img}) {
  const root = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // titleMascot
    // ==================================================
    let titleMascot = gsap.context(() => {
      let time1 = 0;

      if(mascot){
        let tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            toggleActions:"restart stop restart stop"
          }
        });

        tl1.fromTo('.mascot img', {
          opacity: 0,
          x:-60,
          y:20,
          scale:0.7
        }, {
          delay:0.5,
          opacity: 1,
          x:0,
          y:0,
          scale:1,
          duration: 0.7,
          ease: "back.out",
        }, time1);

      }
    }, root);

    // cleanup
    return () => {
      titleMascot.revert();
    }
  }, []);

  return (
    <div ref={root} className='section-title'>
      {mascot && (
        <div className='mascot'>
          <img src={`${mascot}`} alt="mascot" width={250} height={250} />
        </div>
      )}

      {type == "image" ? (
        <h2 
          className='title'
          style={{
            color: color ? (color):('revert-layer')
          }}
        >
          <img src={title_img} alt={`${title}`} width={640} />
        </h2>
      ):(
        <h2 
          className='title'
          style={{
            color: color ? (color):('revert-layer')
          }}
          dangerouslySetInnerHTML={{__html:title}}
        />
      )}
    </div>
  )
}
