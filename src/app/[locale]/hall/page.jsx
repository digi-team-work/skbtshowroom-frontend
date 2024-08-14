import React from 'react'

import { MetadataDefault } from "@/lib/metadata";
import ShowroomInfinity from '@/components/common/ShowroomInfinity';

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const resMetaData = await fetch(`https://skbt-main.digi-team.work/onlineshowroom-backend/wp-json/restapi/v2/showroom-infinity`).then((res) => res.json())
  const metaData = resMetaData.seo_data;
  
  return {
    title: metaData.title ? (metaData.title):(MetadataDefault.title),
    description: metaData.description ? (metaData.description):(MetadataDefault.description),
    keywords: metaData.keywords ? (metaData.keywords):(MetadataDefault.keywords),
    openGraph: {
      type: metaData.og_type ? (metaData.og_type): (MetadataDefault.openGraph.type),
      title: metaData.og_title ? (metaData.og_title) : (MetadataDefault.openGraph.title),
      description: metaData.og_description ? (metaData.og_description):(MetadataDefault.openGraph.description),
      locale: metaData.og_locale ? (metaData.og_locale):(MetadataDefault.openGraph.locale),
      url: `${process.env.SKBT_HTTP_HOST}${process.env.SKBT_SUBFOLDER}/hall`,
      siteName: MetadataDefault.openGraph.siteName,
      images: metaData.og_image ? (metaData.og_image):(MetadataDefault.openGraph.images),
    },
    twitter : {
      card: metaData.twitter_card ? (metaData.twitter_card): (MetadataDefault.twitter.card),
      title: metaData.twitter_title ? (metaData.twitter_title): (MetadataDefault.twitter.title),
      description: metaData.twitter_description ? (metaData.twitter_description): (MetadataDefault.twitter.description),
      images: metaData.twitter_image ? ([metaData.twitter_image]): (MetadataDefault.twitter.images)
    },
    robots : metaData.robots
  }
}

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
  //     // video : ["https://skbt-main.digi-team.work/onlineshowroom-backend/wp-content/uploads/2024/07/presenter.mp4", "https://skbt-main.digi-team.work/onlineshowroom-backend/wp-content/uploads/2024/07/presenter-alpha-1.mp4"],
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
      if(item.image_showroom){
        items.push({
          id:item.id,
          type : item.type,
          title:"",
          texture:item.image_showroom,
          video:[],
          url:`${linkPath}/product/${item.slug ? (item.slug):(item.id)}`
        });
      }
    }else if(item.type == "person") {
      items.push({
        id:item.id,
        type : item.type,
        title:"",
        texture:item.person.person_image,
        video:[
          item.person.person_video_rgb ? (item.person.person_video_rgb):(''), 
          item.person.person_video_alpha ? (item.person.person_video_alpha):('')
        ],
        url:``
      });
    }
  });

  // add space
  if(items.length%2 > 0){
    items.push({
      id:-1,
      type : 'space',
      title:"",
      texture:"",
      video:[],
      url:""
    });
  }

  // switch pos
  if(items.length != 0){
    let itemFirst = items.pop();
    items.unshift(itemFirst);
  }

  const picture = [productList.image_showroom.left_wall_image, productList.image_showroom.right_wall_image];
  const presenter = items.find((item, itemKey) => item.type == 'person');
  const audioClick = productList.sound_showroom;

  return (
    <ShowroomInfinity items={items} basePath={basePath} picture={picture} presenter={presenter} audioClick={audioClick} />
  )
}
