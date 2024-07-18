'use client'

import React from 'react'
import { useEffect, useRef } from 'react';

import Script from 'next/script'

export default function ProductVideoBanner({
  video_id="0zaRC8zFj_M",
  uuid="1"
}) {
  const ref_ytbanner = useRef();
  const uuid_ytbanner = `ytbanner_${uuid}`;

  function fn_get_ytid(_url){
    let ytid = _url.trim();
    ytid = ytid.replace('https://youtu.be/','');
    ytid = ytid.replace('https://www.youtube.com/watch?v=','');
    ytid = ytid.split('&')[0];
    ytid = ytid.split('?')[0];

    return ytid;
  }

  function fn_ytbanner_next_play(){
    let ytvideo = new YT.Player(uuid_ytbanner, {
      height: '360',
      width: '640',
      // videoId: video_id,
      videoId: fn_get_ytid(video_id),
      playerVars: {
        'playsinline': 1
      },
      events: {
        'onReady': function(event){
          event.target.playVideo();
        },
        'onStateChange': function(event){
          if(event.data == 0){
            // ytbanner.src = ytbanner.src;
            // console.log(uuid_ytbanner, ref_ytbanner.current);
            ref_ytbanner.current.src = ref_ytbanner.current.src
            fn_ytbanner_next_play(0);
          }
        }
      }
    });
  }

  useEffect(() => {
    // first time ready
    let nameTimeout;

    if(nameTimeout){
      clearInterval(nameTimeout);
    }
    nameTimeout = setInterval(function(){
      if(YT){
        // clear
        clearInterval(nameTimeout);

        // init
        let ytvideo = new YT.Player(uuid_ytbanner, {
          height: '360',
          width: '640',
          // videoId: video_id,
          videoId: fn_get_ytid(video_id),
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': function(event){
              event.target.playVideo();
            },
            'onStateChange': function(event){
              if(event.data == 0){
                // ytbanner.src = ytbanner.src;
                // console.log(uuid_ytbanner, ref_ytbanner.current);
                ref_ytbanner.current.src = ref_ytbanner.current.src
                fn_ytbanner_next_play(0);
              }
            }
          }
        });
      }
    },500);
  }, []);

  return (
    <>
      <div className='video pointer-events-none select-none'>
        <iframe 
          ref={ref_ytbanner}
          id={uuid_ytbanner}
          // src={`https://www.youtube.com/embed/${video_id}?enablejsapi=1&autoplay=1&mute=1&playsinline=1&controls=0&loop=1&info=0`}
          src={`https://www.youtube.com/embed/${fn_get_ytid(video_id)}?enablejsapi=1&autoplay=1&mute=1&playsinline=1&controls=0&loop=1&info=0`}
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </div>
      <Script id={`script_${uuid_ytbanner}`}>
        {`
          if(typeof script_yt === 'undefined'){
            var tag = document.createElement('script');
            tag.id = "script_yt";
            tag.src = "https://www.youtube.com/player_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          }
        `}
      </Script>
    </>
  )
}
