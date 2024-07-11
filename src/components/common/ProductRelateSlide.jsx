"use client"

import React from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function ProductRelateSlide({items=[
  {
    thumbnail : "/assets/img/product/product-relate-1.png",
    title : "แทรกเตอร์คูโบต้า",
    features : [
      {
        label : "แรงม้า",
        value : "98",
        unit : "แรงม้า",
        class : ""
      },
      {
        label : "ราคาเริ่มต้น",
        value : "1,379,000",
        unit : "บาท",
        class : "price-value"
      }
    ]
  }
]}) {
  return (
    <>
      {items.length == 1 ? (
        <div className='one-item only-one'>
          <div className='thumbnail'>
            <img src={items[0].thumbnail} alt="thumbnail" />
          </div>

          <div className='content'>
            <div>
              <h4>{items[0].title}</h4>
              <div className='list-feature'>
                {items[0].features?.map((feature, featureKey) => (
                  <div key={`feature-${featureKey}`} className='one-feature'>
                    <div>{feature.label}</div>
                    <div className={`${feature.class}`}><span>{feature.value} </span> {feature.unit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='box-btn'>
            <a className='btn-style-4' href="#">ดูรายละเอียด</a>
          </div>
        </div>
      ):(
        <Splide 
          aria-label="slide" 
          options={{
            gap   : '20px',
            perPage : (items.length == 2 ? (2):(3)),
            arrows : false,
            breakpoints: {
              640: {
                perPage: 1,
              },
              992: {
                perPage: 2,
              }
            }
          }}
        >
          {items?.map((item, itemKey) => (
            <SplideSlide key={itemKey}>
              <div className='one-item'>
                <div className='thumbnail'>
                  <img src={item.thumbnail} alt="thumbnail" />
                </div>

                <div className='content'>
                  <div>
                    <h4>{item.title}</h4>
                    <div className='list-feature'>
                      {item.features?.map((feature, featureKey) => (
                        <div key={`feature-${featureKey}`} className='one-feature'>
                          <div>{feature.label}</div>
                          <div className={`${feature.class}`}><span>{feature.value} </span> {feature.unit}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='box-btn'>
                  <a className='btn-style-4' href="#">ดูรายละเอียด</a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </>
  )
}
