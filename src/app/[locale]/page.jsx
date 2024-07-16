
import React from 'react';

import HomeClient from '@/components/common/HomeClient';

export default function Index() {
  // const basePath = `${process.env.SKBT_HTTP_HOST}${process.env.SKBT_SUBFOLDER}`;
  const basePath = `${process.env.SKBT_BASEPATH}`;
  const linkPath  = `${process.env.SKBT_HTTP_HOST}${process.env.SKBT_SUBFOLDER}`;
  
  return (
    <HomeClient basePath={`${basePath}`} linkPath={`${linkPath}`} />
  )
}
