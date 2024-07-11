import React from 'react'

import ShowroomInfinity from '@/components/common/ShowroomInfinity';

export default function ShowroomPage() {
  const items = [
    {
      title : "presenter", 
      texture : "/product/presenter.png",
      url : ""
    },
    {
      title : "kubota 1", 
      texture : "/product/trackter_1.png",
      url : "/product/1",
    },
    {
      title : "kubota 2", 
      texture : "/product/trackter_2.png",
      url : "/product/2"
    }, 
    {
      title : "kubota 3", 
      texture : "/product/trackter_3.png",
      url : "/product/3"
    }, 
    {
      title : "kubota 4", 
      texture : "/product/trackter_4.png",
      url : "/product/4"
    }, 
    {
      title : "kubota 5", 
      texture : "/product/trackter_5.png",
      url : "/product/5"
    },
    {
      title : "kubota 6", 
      texture : "/product/trackter_6.png",
      url : "/product/6"
    },
    {
      title : "kubota 7", 
      texture : "/product/trackter_7.png",
      url : "/product/7"
    }
  ];

  const picture = ["/picture-01.png", "/picture-02.png"];

  return (
    // <div className='touch-overscroll'>
    <ShowroomInfinity items={items} picture={picture} />
    // </div>
  )
}
