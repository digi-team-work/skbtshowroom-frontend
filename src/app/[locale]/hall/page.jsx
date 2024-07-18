import React from 'react'

import ShowroomInfinity from '@/components/common/ShowroomInfinity';

// fetch function
async function getProducts() {
  const res = await fetch(`https://skbt-main.digi-team.work/onlineshowroom-backend/wp-json/restapi/v2/showroom-infinity`, { cache: 'no-store' });
  return res.json();
}

export default async function HallPage() {
  const basePath = `${process.env.SKBT_BASEPATH}`;
  const linkPath  = `${process.env.SKBT_HTTP_HOST}${process.env.SKBT_SUBFOLDER}`;

  const productList = await getProducts();

  // const items = [
  //   {
  //     type : 'product',
  //     title : "kubota 1", 
  //     texture : basePath+"/product/trackter_1.png",
  //     video : [],
  //     url : linkPath+"/product/1",
  //   },
  //   {
  //     type : 'presenter',
  //     title : "presenter", 
  //     texture : basePath+"/product/presenter.png",
  //     // video : [basePath+"/product/presenter.webm"],
  //     video : [basePath+"/product/presenter.mp4", basePath+"/product/presenter-alpha.mp4"],
  //     // video : [],
  //     url : ""
  //   },
  //   {
  //     type : 'product',
  //     title : "kubota 2", 
  //     texture : basePath+"/product/trackter_2.png",
  //     video : [],
  //     url : linkPath+"/product/2"
  //   }, 
  //   {
  //     type : 'product',
  //     title : "kubota 3", 
  //     texture : basePath+"/product/trackter_3.png",
  //     video : [],
  //     url : linkPath+"/product/3"
  //   }, 
  //   {
  //     type : 'product',
  //     title : "kubota 4", 
  //     texture : basePath+"/product/trackter_4.png",
  //     video : [],
  //     url : linkPath+"/product/4"
  //   }, 
  //   {
  //     type : 'product',
  //     title : "kubota 5", 
  //     texture : basePath+"/product/trackter_5.png",
  //     video : [],
  //     url : linkPath+"/product/5"
  //   },
  //   {
  //     type : 'product',
  //     title : "kubota 6", 
  //     texture : basePath+"/product/trackter_6.png",
  //     video : [],
  //     url : linkPath+"/product/6"
  //   },
  //   {
  //     type : 'product',
  //     title : "kubota 7", 
  //     texture : basePath+"/product/trackter_7.png",
  //     video : [],
  //     url : linkPath+"/product/7"
  //   }
  // ];
  // const picture = [basePath+"/picture-01.png", basePath+"/picture-02.png"];
  // const presenter = items.find((item, itemKey) => item.type == 'presenter');

  let items = [];
  productList.products.map((item, itemKey) => {
    if(item.type == "product"){
      items.push({
        id:item.id,
        type : item.type,
        title:"",
        texture:item.image_showroom,
        video:[],
        url:`${linkPath}/product/${item.id}`
      });
    }else if(item.type == "person") {
      items.push({
        id:item.id,
        type : item.type,
        title:"",
        texture:item.person_image,
        video:[
          (item.person_video ? (item.person_video):('')), 
          (item.person_video ? (item.person_video):(''))
        ],
        url:`${linkPath}/product/${item.id}`
      });
    }
  });
  const picture = [productList.image_showroom.left_wall_image, productList.image_showroom.right_wall_image];
  const presenter = productList.products.find((item, itemKey) => item.type == 'person');

  return (
    <ShowroomInfinity items={items} basePath={basePath} picture={picture} presenter={presenter} />
  )
}
