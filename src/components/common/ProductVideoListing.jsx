'use client'

import React from 'react'
import { useEffect, useRef, useState } from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Script from 'next/script'

export default function ProductVideoListing({
  listing=[
    {video_id:"0zaRC8zFj_M", poster:"/assets/img/product/video-poster-1.jpg"}
  ],
  uuid="1"
}) {
  const ref_ytplayer = useRef();
  const uuid_ytplayer = `ytplayer_${uuid}`;
  const SplideRef = useRef();
  const [nowPlay, setNowPlay] = useState(0);

  function fn_get_ytid(_url){
    let ytid = _url.trim();
    ytid = ytid.replace('https://youtu.be/','');
    ytid = ytid.replace('https://www.youtube.com/watch?v=','');
    ytid = ytid.split('&')[0];
    ytid = ytid.split('?')[0];

    return ytid;
  }

  function fn_yt_next_play(_key){
    setNowPlay(_key);

    let ytvideo = new YT.Player(uuid_ytplayer, {
      height: '360',
      width: '640',
      // videoId: listing[_key].video_id,
      videoId: fn_get_ytid(listing[_key].video_url),
      playerVars: {
        'playsinline': 1
      },
      events: {
        'onReady': function(event){
          event.target.playVideo();
        },
        'onStateChange': function(event){
          // console.log('change status : '+event.data);

          if(event.data == 0){
            if(listing.length <= 1){
              // ytplayer.src = ytplayer.src;
              ref_ytplayer.current.src = ref_ytplayer.current.src;
              fn_yt_next_play(0);
            }else {
              if(nowPlay+1 >= listing.length){
                // fn_yt_next_play(0);
                SplideRef.current.splide.go(0);
              }else {
                // fn_yt_next_play(_key+1);
              SplideRef.current.splide.go(_key+1);
              }
            }
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
        let ytvideo = new YT.Player(uuid_ytplayer, {
          height: '360',
          width: '640',
          // videoId: listing[nowPlay].video_id,
          videoId: fn_get_ytid(listing[nowPlay].video_url),
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': function(event){
              event.target.playVideo();
            },
            'onStateChange': function(event){
              if(event.data == 0){
                if(listing.length <= 1){
                  // ytplayer.src = ytplayer.src;
                  ref_ytplayer.current.src = ref_ytplayer.current.src;
                  fn_yt_next_play(0);
                }else {
                  if(nowPlay+1 >= listing.length){
                    // fn_yt_next_play(0);
                    SplideRef.current.splide.go(0);
                  }else {
                    // fn_yt_next_play(nowPlay+1);
                    SplideRef.current.splide.go(nowPlay+1);
                  }
                }
              }
            }
          }
        });
      }
    },500);

    // splide bind event
    if ( SplideRef.current) {
      SplideRef.current.splide.on('moved', function (newIndex, prevIndex, destIndex) {
        fn_yt_next_play(newIndex);
      } );
    }
  }, [nowPlay]);

  return (
    <>
      <div className='video-player pointer-events-none select-none'>
        <iframe 
          ref={ref_ytplayer}
          id={uuid_ytplayer}
          // data-videoid={listing[nowPlay].video_id}
          // src={`https://www.youtube.com/embed/${listing[nowPlay].video_id}?enablejsapi=1&autoplay=1&mute=1&playsinline=1&controls=0&loop=1&info=0`}
          
          data-videoid={fn_get_ytid(listing[nowPlay].video_url)}
          src={`https://www.youtube.com/embed/${fn_get_ytid(listing[nowPlay].video_url)}?enablejsapi=1&autoplay=1&mute=1&playsinline=1&controls=0&loop=1&info=0`}
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </div>
      <Script id={`script_${uuid_ytplayer}`}>
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

      <div className={`video-listing ${listing.length <= 1 && '!hidden'}`}>
        <div className='list-items'>
          <Splide 
            ref={SplideRef}
            aria-label={`thumbnail_slide_${uuid_ytplayer}`} 
            options={{
              gap   : '6px',
              padding: { right: '80px' },
              perPage : 1,
              arrows : true,
              pagination : false,
              breakpoints: {
                1023: {
                  padding: 0,
                  autoWidth:true,
                  focus    : 'center',
                  trimSpace: false
                }
              }
            }}
          >
            {listing.map((item, itemKey) => (
              <SplideSlide key={itemKey}>
                <div 
                  className={`one-item`}
                  onClick={() => {
                    SplideRef.current.splide.go(itemKey);
                  }}
                >
                  {item.poster && (
                    <img src={item.poster} alt="thumbnail" />
                  )}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className='slide-page'><b>{nowPlay+1}</b>/<b className='text-c-orange-500'>{listing.length}</b></div>
      </div>
    </>
  )
}
