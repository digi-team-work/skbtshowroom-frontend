"use client"

import React, { useEffect, useRef } from 'react';

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function ProductFooter({copyright="สงวนลิขสิทธิ์ © 2022 บริษัทสยามคูโบต้าคอร์ปอเรชั่น จำกัด", mobileMenu, basePath, linkPath, back2top="กลับสู่ด้านบน"}) {
  const b2t = useRef();

  useEffect(() => {
    function winScroll(e){
      const ST = (window.scrollY || window.scrollTop || window.pageYOffset);

      if(ST < 30){
        if(`${b2t.current.classList.value}`.indexOf('btn-show') >= 0){
          b2t.current.classList.remove('btn-show');
        }
      }else {
        if(`${b2t.current.classList.value}`.indexOf('btn-show') < 0){
          b2t.current.classList.add('btn-show');
        }
      }
    }
    winScroll();

    window.addEventListener("scroll", winScroll);
    return () => window.removeEventListener('scroll', winScroll);
  }, []);

  return (
    <>
      <div className='footer-page'>
        <div className='container'>
            <div>{copyright}</div>
        </div>
      </div>

      <div 
        ref={b2t}
        className='btnBack2Top'
        onClick={() => {
          gsap.to(window, { duration: 1, scrollTo: 0 });
        }}
      >
        <img src={`${basePath}/assets/img/product/back2top.png`} alt='back to top' />
        <div>{back2top}</div>
      </div>

      {mobileMenu && (
        <div className={`mobile-menu-bottom ${mobileMenu?.length == 0 && '!hidden'}`}>
          {mobileMenu?.map((item, itemKey) => (
            <a key={`mobile-menu-${itemKey}`} className='one-menu' href={`${item.link.url}`} target={`${item.link.target}`}>
              <img src={`${item.icon}`} alt={`${item.title}`} />
              {item.title}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
