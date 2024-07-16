import React from 'react'

import ShowroomInfinity from '@/components/common/ShowroomInfinity';

export default function HallPage() {
  const basePath = `${process.env.SKBT_BASEPATH}`;
  const linkPath  = `${process.env.SKBT_HTTP_HOST}${process.env.SKBT_SUBFOLDER}`;

  const items = [
    {
      title : "presenter", 
      texture : basePath+"/product/presenter.png",
      video : [basePath+"/product/presenter.webm"],
      url : ""
    },
    {
      title : "kubota 1", 
      texture : basePath+"/product/trackter_1.png",
      video : [],
      url : linkPath+"/product/1",
    },
    {
      title : "kubota 2", 
      texture : basePath+"/product/trackter_2.png",
      video : [],
      url : linkPath+"/product/2"
    }, 
    {
      title : "kubota 3", 
      texture : basePath+"/product/trackter_3.png",
      video : [],
      url : linkPath+"/product/3"
    }, 
    {
      title : "kubota 4", 
      texture : basePath+"/product/trackter_4.png",
      video : [],
      url : linkPath+"/product/4"
    }, 
    {
      title : "kubota 5", 
      texture : basePath+"/product/trackter_5.png",
      video : [],
      url : linkPath+"/product/5"
    },
    {
      title : "kubota 6", 
      texture : basePath+"/product/trackter_6.png",
      video : [],
      url : linkPath+"/product/6"
    },
    {
      title : "kubota 7", 
      texture : basePath+"/product/trackter_7.png",
      video : [],
      url : linkPath+"/product/7"
    }
  ];

  const picture = [basePath+"/picture-01.png", basePath+"/picture-02.png"];

  return (
    <ShowroomInfinity items={items} basePath={basePath} picture={picture} />
  )
}
