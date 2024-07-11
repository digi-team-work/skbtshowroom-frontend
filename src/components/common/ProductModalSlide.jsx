"use client"

import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function ProductModalSlide({items=[
  {
    thumbnail : "/assets/img/product/product-section-2-1.png",
    title : "1 ระบบปรับอากาศ",
    excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
    detail : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
    style:{},
    readmore:{
      visible : true,
      style:{}
    }
  }
]}) {
  return (
    <Splide 
      aria-label="slide" 
      options={{
        gap   : '24px',
        autoWidth : true,
        arrows : false,
        breakpoints: {
          640: {
            gap: '16px'
          }
        }
      }}
    >
      {items?.map((item, itemKey) => (
        <SplideSlide key={`product-slide-${itemKey}`}>
          <div 
            className={`one-item ${item.thumbnail == "" && 'not-thumbnail'} ${item.readmore.visible && 'has-detail'}`}
            style={item.style}
          >
            {item.thumbnail != "" && (
              <div className='thumbnail'>
                <img src={item.thumbnail} alt="thumbnail" />
              </div>
            )}
            <div className='content'>
              <div>
                <h4>{item.title}</h4>
                <p>{item.excerpt}</p>
              </div>
            </div>

            {item.readmore.visible && (
              <>
                <div 
                  className='readmore'
                  style={item.readmore.style}
                ><span></span></div>

                <Dialog>
                  <DialogTrigger className='hit'></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                      <DialogDescription>{item.detail}</DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </>
            )}
          </div>
        </SplideSlide>
      ))}
    </Splide>
  )
}
