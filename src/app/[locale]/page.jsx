
import React from 'react';

import { MetadataDefault } from "@/lib/metadata";
import HomeClient from '@/components/common/HomeClient';


export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const resMetaData = await fetch(`https://skbt-main.digi-team.work/onlineshowroom-backend/wp-json/restapi/v2/home-managements`).then((res) => res.json())
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
      url: `${process.env.SKBT_HTTP_HOST}${process.env.SKBT_SUBFOLDER}`,
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
async function getHomeDetail() {
  const res = await fetch(`https://skbt-main.digi-team.work/onlineshowroom-backend/wp-json/restapi/v2/home-managements`, { cache: 'no-store' });
  return res.json();
}

export default async function Index() {
  // const basePath = `${process.env.SKBT_HTTP_HOST}${process.env.SKBT_SUBFOLDER}`;
  const basePath = `${process.env.SKBT_BASEPATH}`;
  const linkPath  = `${process.env.SKBT_HTTP_HOST}${process.env.SKBT_SUBFOLDER}`;

  // data home
  const homeData = await getHomeDetail();
  
  return (
    <HomeClient basePath={`${basePath}`} linkPath={`${linkPath}`} video={homeData.video_url} />
  )
}
