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
    description : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
    background_color:"White",
    title_color:"Black",
    excerpt_color:"Black"
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
            className={`one-item ${!(item.thumbnail && item.thumbnail != "") && 'not-thumbnail'} ${item.description && 'has-detail'}`}
            style={{
              backgroundColor: item.background_color ? (item.background_color):('revert-layer') 
            }}
          >
            {(item.thumbnail && item.thumbnail != "") && (
              <div className='thumbnail'>
                <img src={item.thumbnail} alt="thumbnail" />
              </div>
            )}
            <div className='content'>
              <div>
                <h4 style={{
                  color: item.title_color ? (item.title_color):('revert-layer')
                }}>{item.title}</h4>
                <p style={{
                  color: item.excerpt_color ? (item.excerpt_color):('revert-layer')
                }}>{item.excerpt}</p>
              </div>
            </div>

            {item.description && (
              <>
                <div 
                  className='readmore'
                  style={{
                    backgroundColor: item.button.button_color ? (item.button.button_color):('revert-layer') 
                  }}
                >
                  <span
                    style={{
                      backgroundColor: item.button.text_color ? (item.button.text_color):('revert-layer') 
                    }}
                  ></span>
                  <span
                    style={{
                      backgroundColor: item.button.text_color ? (item.button.text_color):('revert-layer') 
                    }}
                  ></span>
                </div>

                <Dialog>
                  <DialogTrigger className='hit'></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                      <DialogDescription>{item.description}</DialogDescription>
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
