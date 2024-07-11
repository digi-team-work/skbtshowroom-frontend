
import React from 'react';

import HomeClient from '@/components/common/HomeClient';

export default function Index() {

  return (
    <HomeClient basePath={`${process.env.SKBT_HTTP_HOST}${process.env.SKBT_SUBFOLDER}`} />
  )
}
