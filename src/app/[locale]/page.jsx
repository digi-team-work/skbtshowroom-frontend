'use client'

import React, { useLayoutEffect, useState } from 'react';

import HomeDesktop from "@/components/common/HomeDesktop";
import HomeMobile from '@/components/common/HomeMobile';


export default function Index() {
  const [init, setInit] = useState(false);
  const [mq, setMQ] = useState(false);

  useLayoutEffect(() => {
    let ww = window.innerWidth;

    // default
    setMQ(ww >= 1024);
    setInit(true);

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
    <>
      {init && (
        <>
          {mq ? (<HomeDesktop />):(<HomeMobile />)}
        </>
      )}
    </>
  )
}
