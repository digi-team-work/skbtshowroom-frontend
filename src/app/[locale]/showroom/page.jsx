import React from 'react'

import ShowroomInfinity from '@/components/common/ShowroomInfinity';

export default function ShowroomPage() {
  const basePath = `${process.env.SKBT_BASEPATH}`;
  const items = [
    {
      title : "presenter", 
      texture : basePath+"/product/presenter.png",
      url : ""
    },
    {
      title : "kubota 1", 
      texture : basePath+"/product/trackter_1.png",
      url : "/product/1",
    },
    {
      title : "kubota 2", 
      texture : basePath+"/product/trackter_2.png",
      url : "/product/2"
    }, 
    {
      title : "kubota 3", 
      texture : basePath+"/product/trackter_3.png",
      url : "/product/3"
    }, 
    {
      title : "kubota 4", 
      texture : basePath+"/product/trackter_4.png",
      url : "/product/4"
    }, 
    {
      title : "kubota 5", 
      texture : basePath+"/product/trackter_5.png",
      url : "/product/5"
    },
    {
      title : "kubota 6", 
      texture : basePath+"/product/trackter_6.png",
      url : "/product/6"
    },
    {
      title : "kubota 7", 
      texture : basePath+"/product/trackter_7.png",
      url : "/product/7"
    }
  ];

  const picture = [basePath+"/picture-01.png", basePath+"/picture-02.png"];

  return (
    // <div className='touch-overscroll'>
    <ShowroomInfinity items={items} basePath={basePath} picture={picture} />
    // </div>
  )
}
