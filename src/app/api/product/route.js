import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale');
  const id = searchParams.get('id');

  // return data
  let content_cms = {};

  if(id === "1"){
    switch (locale) {
      case "th":
        content_cms = {
          title: `รายละเอียดสินค้า`,
          header : {
            back : true,
            lists : [
              {
                icon : "/assets/img/icon/detail.svg",
                title : "อ่านรายละเอียดสินค้า",
                link : {
                  href : "#",
                  target : "_blank"
                }
              },
              {
                icon : "/assets/img/icon/find.svg",
                title : "ค้นหาร้านผู้แทนจำหน่าย",
                link : {
                  href : "#",
                  target : "_blank"
                }
              },
              {
                icon : "/assets/img/icon/pdf.svg",
                title : "แค็ตตาล็อกออนไลน์",
                link : {
                  href : "#",
                  target : "_blank"
                }
              },
              {
                icon : "/assets/img/icon/reserve.svg",
                title : "จองสินค้าก่อนใคร",
                link : {
                  href : "#",
                  target : "_blank"
                }
              }
            ]
          },
          sections : [
            {
              widget : "section-banner",
              graphic : {
                type : "image",
                image : [
                  "/assets/img/product/banner-mobile.png",
                  "/assets/img/product/banner.png"
                ],
                link : {
                  href : "#",
                  target : "_blank"
                }
                // type : "video",
                // video : "RP0_5L5m93Q"
              }
            },
            {
              widget : "section-1",
              style : {},
              title : {
                text : "คุ้ม..กับห้องโดยสาร ที่ตอบโจทย์ การทำงานและปลอดภัย",
                url : "",
                style:{},
                mascot : true
              },
              lists : [
                {
                  template : "template-1",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {}
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{},
                  animate : true
                }, 
                {
                  template : "",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {}
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{},
                  animate : false
                },
                {
                  template : "",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {}
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{},
                  animate : true
                },
                {
                  template : "template-2",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {}
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{},
                  animate : false
                },
                {
                  template : "template-3",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {}
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{},
                  animate : false
                }
              ]
            },
            {
              widget : "section-2",
              style : {},
              title : {
                text : "คุ้ม..กับความสะดวกสบายอีกระดับ",
                url : "",
                style:{}
              },
              lists:[
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "1 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : false,
                    style:{}
                  }
                },
                {
                  thumbnail : "",
                  title : "2 ช่องเก็บของขนาดใหญ่ ระบบกรองอากาศพร้อมที่วางขวดน้ำ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                },
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "3 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                },
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "4 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                },
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "5 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                }
              ]
            },
            {
              widget : "section-3",
              lists:[
                {
                  video_id:"0zaRC8zFj_M", 
                  poster:"/assets/img/product/video-poster-1.jpg"
                },
                {
                  video_id:"RP0_5L5m93Q",
                  poster:"/assets/img/product/video-poster-1.jpg"
                },
                {
                  video_id:"vkJ8WhFVgB0",
                  poster:"/assets/img/product/video-poster-1.jpg"
                }
              ]
            },
            {
              widget : "section-4",
              style:{},
              image : [
                "/assets/img/product/cover-1-mobile.png",
                "/assets/img/product/cover-1.png"
              ],
              link : {
                visible:true,
                href : "#",
                target : "_blank",
                title : "Readmore", 
                icon : "",
                style:{},
                style_hover:{}
              }
            },
            {
              widget : "section-5",
              style:{},
              image : [
                "/assets/img/product/cover-2-mobile.png",
                "/assets/img/product/cover-2.png"
              ],
              link : {
                visible:true,
                href : "#",
                target : "_blank",
                title : "จองสินค้าก่อนใคร", 
                icon : "/assets/img/icon/reserve.svg",
                style:{},
                style_hover:{}
              }
            },
            {
              widget : "section-6",
              title : "L-CABIN <span>SERIES</span>",
              lists:[
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                },
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                },
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                },
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                }
              ]
            }
          ]
        };
        break;
      case "en":
        content_cms = {
          title: `Product Detail`,
          header : {
            back : true,
            lists : [
              {
                icon : "/assets/img/icon/detail.svg",
                title : "Read details",
                link : {
                  href : "#",
                  target : "_blank"
                }
              },
              {
                icon : "/assets/img/icon/find.svg",
                title : "Find a dealer",
                link : {
                  href : "#",
                  target : "_blank"
                }
              },
              {
                icon : "/assets/img/icon/pdf.svg",
                title : "Online catalog",
                link : {
                  href : "#",
                  target : "_blank"
                }
              },
              {
                icon : "/assets/img/icon/reserve.svg",
                title : "Reserve products",
                link : {
                  href : "#",
                  target : "_blank"
                }
              }
            ]
          },
          sections : [
            {
              widget : "section-banner",
              graphic : {
                type : "image",
                image : [
                  "/assets/img/product/banner.png",
                  "/assets/img/product/banner.png"
                ],
                link : {
                  href : "#",
                  target : "_blank"
                }
                // type : "video",
                // video : "RP0_5L5m93Q"
              }
            },
            {
              widget : "section-1",
              style : {},
              title : {
                text : "คุ้ม..กับห้องโดยสาร ที่ตอบโจทย์ การทำงานและปลอดภัย",
                url : "",
                style:{},
                mascot : true
              },
              lists : [
                {
                  template : "template-1",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {}
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{},
                  animate : true
                }, 
                {
                  template : "",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {}
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{},
                  animate : false
                },
                {
                  template : "",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {}
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{},
                  animate : true
                },
                {
                  template : "template-2",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {}
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{},
                  animate : false
                },
                {
                  template : "template-3",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {}
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{},
                  animate : false
                }
              ]
            },
            {
              widget : "section-2",
              style : {},
              title : {
                text : "คุ้ม..กับความสะดวกสบายอีกระดับ",
                url : "/assets/img/product/title-image-2.png",
                style:{}
              },
              lists:[
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "1 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                },
                {
                  thumbnail : "",
                  title : "2 ช่องเก็บของขนาดใหญ่ ระบบกรองอากาศพร้อมที่วางขวดน้ำ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                },
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "3 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                },
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "4 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                },
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "5 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                }
              ]
            },
            {
              widget : "section-3",
              lists:[
                {
                  video_id:"0zaRC8zFj_M", 
                  poster:"/assets/img/product/video-poster-1.jpg"
                },
                {
                  video_id:"RP0_5L5m93Q",
                  poster:"/assets/img/product/video-poster-1.jpg"
                },
                {
                  video_id:"vkJ8WhFVgB0",
                  poster:"/assets/img/product/video-poster-1.jpg"
                }
              ]
            },
            {
              widget : "section-4",
              style:{},
              image : [
                "/assets/img/product/cover-1-mobile.png",
                "/assets/img/product/cover-1.png"
              ],
              link : {
                visible:true,
                href : "#",
                target : "_blank",
                title : "Readmore", 
                icon : "",
                style:{},
                style_hover:{}
              }
            },
            {
              widget : "section-5",
              style:{},
              image : [
                "/assets/img/product/cover-2-mobile.png",
                "/assets/img/product/cover-2.png"
              ],
              link : {
                visible:true,
                href : "#",
                target : "_blank",
                title : "จองสินค้าก่อนใคร", 
                icon : "/assets/img/icon/reserve.svg",
                style:{},
                style_hover:{}
              }
            },
            {
              widget : "section-6",
              title : "L-CABIN <span>SERIES</span>",
              lists:[
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                },
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                },
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                },
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                }
              ]
            }
          ]
        };
        break;
      default: break;
    }
  }else {
    switch (locale) {
      case "th":
        content_cms = {
          title: `รายละเอียดสินค้า`,
          header : {
            back : true,
            lists : [
              {
                icon : "/assets/img/icon/detail.svg",
                title : "อ่านรายละเอียดสินค้า",
                link : {
                  href : "#",
                  target : "_blank"
                }
              },
              {
                icon : "/assets/img/icon/find.svg",
                title : "ค้นหาร้านผู้แทนจำหน่าย",
                link : {
                  href : "#",
                  target : "_blank"
                }
              },
              {
                icon : "/assets/img/icon/pdf.svg",
                title : "แค็ตตาล็อกออนไลน์",
                link : {
                  href : "#",
                  target : "_blank"
                }
              },
              {
                icon : "/assets/img/icon/reserve.svg",
                title : "จองสินค้าก่อนใคร",
                link : {
                  href : "#",
                  target : "_blank"
                }
              }
            ]
          },
          sections : [
            {
              widget : "section-banner",
              graphic : {
                // type : "image",
                // image : [
                //   "/assets/img/product/banner.png",
                //   "/assets/img/product/banner.png"
                // ],
                // link : {
                //   href : "#",
                //   target : "_blank"
                // }
                type : "video",
                video : "RP0_5L5m93Q"
              }
            },
            {
              widget : "section-1",
              style : {
                background:"url(/assets/img/product/demo-bg-1.png) center top"
              },
              title : {
                text : "คุ้ม..กับห้องโดยสาร ที่ตอบโจทย์ การทำงานและปลอดภัย",
                url : "/assets/img/product/title-image-1.png",
                style:{
                  color:"#ffffff"
                },
                mascot : true
              },
              lists : [
                {
                  template : "template-1",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {}
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{},
                  animate : true
                }, 
                {
                  template : "",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {}
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{},
                  animate : false
                },
                {
                  template : "",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {
                      color:"#ffffff"
                    }
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{
                    color:"#ffffff",
                    background:"#ff6600"
                  },
                  animate : true
                },
                {
                  template : "template-2",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {
                      color:"#ffffff"
                    }
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{
                    color:"#ffffff"
                  },
                  animate : false
                },
                {
                  template : "template-3",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {
                      color:"#ffffff"
                    }
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{
                    color:"#ffffff"
                  },
                  animate : false
                }
              ]
            },
            {
              widget : "section-2",
              style : {
                background:"url(/assets/img/product/demo-bg-2.png) center top",
                backgroundSize:"cover"
              },
              title : {
                text : "คุ้ม..กับความสะดวกสบายอีกระดับ",
                url : "/assets/img/product/title-image-2.png",
                style:{
                  color:"#ffffff"
                }
              },
              lists:[
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "1 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                },
                {
                  thumbnail : "",
                  title : "2 ช่องเก็บของขนาดใหญ่ ระบบกรองอากาศพร้อมที่วางขวดน้ำ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{
                    color:"#ffffff",
                    background:"#ff6600"
                  },
                  readmore:{
                    visible : true,
                    style:{
                      background:"#000000"
                    }
                  }
                },
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "3 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{
                    color:"#ffffff",
                    background:"#ff6600"
                  },
                  readmore:{
                    visible : true,
                    style:{
                      background:"#00a8a9"
                    }
                  }
                },
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "4 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                },
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "5 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                }
              ]
            },
            {
              widget : "section-3",
              lists:[
                {
                  video_id:"0zaRC8zFj_M", 
                  poster:"/assets/img/product/video-poster-1.jpg"
                },
                {
                  video_id:"RP0_5L5m93Q",
                  poster:"/assets/img/product/video-poster-1.jpg"
                },
                {
                  video_id:"vkJ8WhFVgB0",
                  poster:"/assets/img/product/video-poster-1.jpg"
                }
              ]
            },
            {
              widget : "section-4",
              style:{},
              image : [
                "/assets/img/product/cover-1-mobile.png",
                "/assets/img/product/cover-1.png"
              ],
              link : {
                visible:true,
                href : "#",
                target : "_blank",
                title : "Readmore", 
                icon : "",
                style:{},
                style_hover:{}
              }
            },
            {
              widget : "section-5",
              style:{},
              image : [
                "/assets/img/product/cover-2-mobile.png",
                "/assets/img/product/cover-2.png"
              ],
              link : {
                visible:true,
                href : "#",
                target : "_blank",
                title : "จองสินค้าก่อนใคร", 
                icon : "/assets/img/icon/reserve.svg",
                style:{},
                style_hover:{}
              }
            },
            {
              widget : "section-6",
              title : "L-CABIN <span>SERIES</span>",
              lists:[
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                },
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                },
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                },
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                }
              ]
            }
          ]
        };
        break;
      case "en":
        content_cms = {
          title: `Product Detail`,
          header : {
            back : true,
            lists : [
              {
                icon : "/assets/img/icon/detail.svg",
                title : "Read details",
                link : {
                  href : "#",
                  target : "_blank"
                }
              },
              {
                icon : "/assets/img/icon/find.svg",
                title : "Find a dealer",
                link : {
                  href : "#",
                  target : "_blank"
                }
              },
              {
                icon : "/assets/img/icon/pdf.svg",
                title : "Online catalog",
                link : {
                  href : "#",
                  target : "_blank"
                }
              },
              {
                icon : "/assets/img/icon/reserve.svg",
                title : "Reserve products",
                link : {
                  href : "#",
                  target : "_blank"
                }
              }
            ]
          },
          sections : [
            {
              widget : "section-banner",
              graphic : {
                type : "image",
                image : [
                  "/assets/img/product/banner.png",
                  "/assets/img/product/banner.png"
                ],
                link : {
                  href : "#",
                  target : "_blank"
                }
                // type : "video",
                // video : "RP0_5L5m93Q"
              }
            },
            {
              widget : "section-1",
              style : {
                background:"url(/assets/img/product/demo-bg-1.png) center top"
              },
              title : {
                text : "คุ้ม..กับห้องโดยสาร ที่ตอบโจทย์ การทำงานและปลอดภัย",
                url : "/assets/img/product/title-image-1.png",
                style:{
                  color:"#ffffff"
                },
                mascot : true
              },
              lists : [
                {
                  template : "template-1",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {}
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{},
                  animate : true
                }, 
                {
                  template : "",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {}
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{},
                  animate : false
                },
                {
                  template : "",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {
                      color:"#ffffff"
                    }
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{
                    color:"#ffffff",
                    background:"#ff6600"
                  },
                  animate : true
                },
                {
                  template : "template-2",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {
                      color:"#ffffff"
                    }
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{
                    color:"#ffffff"
                  },
                  animate : false
                },
                {
                  template : "template-3",
                  thumbnail : [
                    "/assets/img/product/product-1-mobile.png",
                    "/assets/img/product/product-1.png"
                  ],
                  title : {
                    text : "โครงสร้างห้องโดยสาร", 
                    style : {
                      color:"#ffffff"
                    }
                  },
                  excerpt : "ตามมาตรฐานประเทศญี่ปุ่นน้ำหนักเบามั่นใจได้ความปลอดภัย",
                  style:{
                    color:"#ffffff"
                  },
                  animate : false
                }
              ]
            },
            {
              widget : "section-2",
              style : {
                background:"url(/assets/img/product/demo-bg-2.png) center top",
                backgroundSize:"cover"
              },
              title : {
                text : "คุ้ม..กับความสะดวกสบายอีกระดับ",
                url : "/assets/img/product/title-image-2.png",
                style:{
                  color:"#ffffff"
                }
              },
              lists:[
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "1 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                },
                {
                  thumbnail : "",
                  title : "2 ช่องเก็บของขนาดใหญ่ ระบบกรองอากาศพร้อมที่วางขวดน้ำ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{
                    color:"#ffffff",
                    background:"#ff6600"
                  },
                  readmore:{
                    visible : true,
                    style:{background:"#000000"}
                  }
                },
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "3 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{
                    color:"#ffffff",
                    background:"#ff6600"
                  },
                  readmore:{
                    visible : true,
                    style:{background:"#00a8a9"}
                  }
                },
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "4 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                },
                {
                  thumbnail : "/assets/img/product/product-section-2-1.png",
                  title : "5 ระบบปรับอากาศ",
                  excerpt : "ช่องแอร์ปรับทิศทางแบบ 360 องศา 4 ช่อง ปรับความแรงลมได้ 4 ระดับ",
                  detail : "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
                  style:{},
                  readmore:{
                    visible : true,
                    style:{}
                  }
                }
              ]
            },
            {
              widget : "section-3",
              lists:[
                {
                  video_id:"0zaRC8zFj_M", 
                  poster:"/assets/img/product/video-poster-1.jpg"
                },
                {
                  video_id:"RP0_5L5m93Q",
                  poster:"/assets/img/product/video-poster-1.jpg"
                },
                {
                  video_id:"vkJ8WhFVgB0",
                  poster:"/assets/img/product/video-poster-1.jpg"
                }
              ]
            },
            {
              widget : "section-4",
              style:{},
              image : [
                "/assets/img/product/cover-1-mobile.png",
                "/assets/img/product/cover-1.png"
              ],
              link : {
                visible:true,
                href : "#",
                target : "_blank",
                title : "Readmore", 
                icon : "",
                style:{},
                style_hover:{}
              }
            },
            {
              widget : "section-5",
              style:{},
              image : [
                "/assets/img/product/cover-2-mobile.png",
                "/assets/img/product/cover-2.png"
              ],
              link : {
                visible:true,
                href : "#",
                target : "_blank",
                title : "จองสินค้าก่อนใคร", 
                icon : "/assets/img/icon/reserve.svg",
                style:{},
                style_hover:{}
              }
            },
            {
              widget : "section-6",
              title : "L-CABIN <span>SERIES</span>",
              lists:[
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                },
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                },
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                },
                {
                  thumbnail : "/assets/img/product/product-relate-1.png",
                  title : "แทรกเตอร์คูโบต้า",
                  features : [
                    {
                      label : "แรงม้า",
                      value : "98",
                      unit : "แรงม้า",
                      class : ""
                    },
                    {
                      label : "ราคาเริ่มต้น",
                      value : "1,379,000",
                      unit : "บาท",
                      class : "price-value"
                    }
                  ]
                }
              ]
            }
          ]
        };
        break;
      default: break;
    }
  }
  

  const dataJson = {
    status: true,
    cms: content_cms
  }
  return NextResponse.json(dataJson);
}