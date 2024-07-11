"use client";

import React, { useState } from 'react'

export default function Button({children, setStyle={normal:{}, hover:{}}, ...prop}) {
  const [hover, setHover] = useState(false);

  return (
    <a 
      {...prop} 
      onMouseEnter={()=>{
        setHover(true);
      }}
      onMouseLeave={()=>{
        setHover(false);
      }}
      style={hover ? (setStyle.hover):(setStyle.normal)}
    >{children}</a>
  )
}
