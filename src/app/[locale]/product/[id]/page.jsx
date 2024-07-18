import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';

import ProductModalSlide from '@/components/common/ProductModalSlide';
import ProductVideoListing from '@/components/common/ProductVideoListing';
import ProductRelateSlide from '@/components/common/ProductRelateSlide';
import ProductVideoBanner from '@/components/common/ProductVideoBanner';
import Button from '@/components/common/Button';
import ProductHeader from '@/components/common/ProductHeader';
import ProductFooter from '@/components/common/ProductFooter';


// fetch function
async function getProductDetail(locale, id) {
  // const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/product?id=${id}&locale=${locale}`, { cache: 'no-store' });
  // return res.json();

  const res = await fetch(`https://skbt-main.digi-team.work/onlineshowroom-backend/wp-json/restapi/v2/products/${id}`, { cache: 'no-store' });
  return res.json();
}

export default async function ProductDetail({ params }) {
  const locale = await getLocale();
  const t = await getTranslations('Product');
  const productCMS = await getProductDetail(locale, params.id);
  const basePath = `${process.env.SKBT_BASEPATH}`;
  const linkPath  = `${process.env.SKBT_HTTP_HOST}${process.env.SKBT_SUBFOLDER}`;

  // console.log(productCMS);

  return (
    <div className='product-page'>
      {/* header */}      
      <ProductHeader header={productCMS.header} basePath={basePath} linkPath={linkPath} back_showroom={t('back_showroom')} />

      {/* sections */}
      {productCMS.section?.map((section, sectionKey) => (
        <div 
          key={sectionKey}
        >
          {/* section-banner */}
          {section.widget === "section-banner" && (
            <div className='section-banner'>
              {section.banner_type === "image" ? (
                <picture>
                  {section.image_background_desktop && (<source media="(min-width:1024px)" srcSet={`${section.image_background_desktop}`} />)}
                  {section.image_background_mobile ? (
                    <img src={`${section.image_background_mobile}`} alt='image'  />
                  ):(
                    <>
                      {section.image_background_desktop && (<img src={`${section.image_background_desktop}`} alt='image'  />)}
                    </>
                  )}
                </picture>
              ):(
                <ProductVideoBanner video_id={section.image_desktop} uuid={`${Math.floor(Math.random() * 9999999999)}`} /> 
              )}
            </div>
          )}

          {/* section-1 */}
          {section.widget === "section-1" && (
            <div 
              className='section-1'
              style={{
                backgroundColor: section.background_color ? (section.background_color):('inherit'), 
                backgroundImage: section.background_image ? (section.background_image):('none'), 
                backgroundPosition: section.background_position ? (section.background_position):('left top'), 
                backgroundSize: section.background_size ? (section.background_size):('auto auto'), 
                backgroundRepeat: section.background_repeat ? (section.background_repeat):('repeat')
              }}
            >
              <div className='container'>
                <div className='section-title'>
                  {section.mascot && (
                    <div className='mascot'>
                      <img src={`${process.env.SKBT_BASEPATH}/assets/img/product/mascot.png`} alt="mascot" width={250} height={250} />
                    </div>
                  )}

                  <h2 
                    className='title'
                    style={{
                      color: section.title_color ? (section.title_color):('inherit')
                    }}
                  >
                    {section.title_type == "image" ? (
                      <img src={section.title_image} alt={`${section.title}`} width={640} />
                    ):(section.title)}
                  </h2>
                </div>
      
                <div className='list-items'>
                  {section.lists?.map((item, itemKey) => (
                    <div 
                      key={`content1-${sectionKey}-${itemKey}`} 
                      className={`one-item ${item.template}`}
                      style={{
                        backgroundColor: item.background ? (item.background):('inherit')
                      }}
                    >
                      <div className='thumbnail'>
                        <picture>
                          {item.template == "template-1" && (
                            <source media="(min-width:1024px)" srcSet={item.image_desktop} />
                          )}
                          <img className={`${item.animate && 'img-ani'}`} src={item.image_mobile} alt='product'  />
                        </picture>
                      </div>
                      <div className='content'>
                        <div>
                          <h4 
                            style={{
                              color: item.title_color ? (item.title_color):('inherit')
                            }}
                          >{item.title.text}</h4>
                          <p 
                            style={{
                              color: item.excerpt_color ? (item.excerpt_color):('inherit')
                            }}
                          >{item.excerpt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* section-2 */}
          {section.widget === "section-2" && (
            <div 
              className='section-2'
              style={{
                backgroundColor: section.background_color ? (section.background_color):('inherit'), 
                backgroundImage: section.background_image ? (section.background_image):('none'), 
                backgroundPosition: section.background_position ? (section.background_position):('left top'), 
                backgroundSize: section.background_size ? (section.background_size):('auto auto'), 
                backgroundRepeat: section.background_repeat ? (section.background_repeat):('repeat')
              }}
            >
              <div className='container'>
                <div className='section-title'>
                  <h2 
                    className='title'
                    style={{
                      color: section.title_color ? (section.title_color):('inherit')
                    }}
                  >
                    {section.title_type == "image" ? (
                      <img src={section.title_image} alt={`${section.title}`} width={860} height={125} />
                    ):(section.title)}
                  </h2>
                </div>
      
                <div className='list-items'>
                  <ProductModalSlide items={section.lists} />
                </div>
              </div>
            </div>
          )}

          {/* section-3 */}
          {section.widget === "section-3" && (
            <div className='section-3'>
              <ProductVideoListing listing={section.lists} uuid={`${Math.floor(Math.random() * 9999999999)}`} />
            </div>
          )}

          {/* section-4 */}
          {section.widget === "section-4" && (
            <div 
              className='section-4'
              style={{
                backgroundColor: section.background_color ? (section.background_color):('inherit')
              }}
            >
              <div className='cover'>
                <picture>
                  {section.image_background_desktop && (<source media="(min-width:1024px)" srcSet={`${section.image_background_desktop}`} />)}
                  {section.image_background_mobile ? (
                    <img src={`${section.image_background_mobile}`} alt='image'  />
                  ):(
                    <>
                      {section.image_background_desktop && (<img src={`${section.image_background_desktop}`} alt='image'  />)}
                    </>
                  )}
                </picture>
              </div>

              <div className={`box-btn ${!section.button && '!hidden'}`}>
                <div className='container'>
                  <Button 
                    className='btn-style-3' 
                    setStyle={{
                      normal:{
                        backgroundColor:section.button.background_color_normal ? (section.button.background_color_normal):('inherit'),
                        color:section.button.title_color_normal ? (section.button.title_color_normal):('inherit')
                      },
                      hover:{
                        backgroundColor:section.button.background_color_hover ? (section.button.background_color_hover):('inherit'),
                        color:section.button.title_color_hover ? (section.button.title_color_hover):('inherit')
                      }
                    }}
                    href={section.button.href} 
                    target={section.button.target}
                  >
                    {section.button.icon != "" && (<img className='w-6 h-auto' src={section.button.icon} alt="icon" />)}
                    {section.button.title}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* section-5 */}
          {section.widget === "section-5" && (
            <div 
              className='section-5'
              style={{
                backgroundColor: section.background_color ? (section.background_color):('inherit')
              }}
            >
              <div className='cover'>
                <picture>
                  {section.image_background_desktop && (<source media="(min-width:1024px)" srcSet={`${section.image_background_desktop}`} />)}
                  {section.image_background_mobile ? (
                    <img src={`${section.image_background_mobile}`} alt='image'  />
                  ):(
                    <>
                      {section.image_background_desktop && (<img src={`${section.image_background_desktop}`} alt='image'  />)}
                    </>
                  )}
                </picture>
              </div>

              <div className={`box-btn ${!section.button && '!hidden'}`}>
                <div className='container'>
                  <Button 
                    className='btn-style-3' 
                    setStyle={{
                      normal:{
                        backgroundColor:section.button.background_color_normal ? (section.button.background_color_normal):('inherit'),
                        color:section.button.title_color_normal ? (section.button.title_color_normal):('inherit')
                      },
                      hover:{
                        backgroundColor:section.button.background_color_hover ? (section.button.background_color_hover):('inherit'),
                        color:section.button.title_color_hover ? (section.button.title_color_hover):('inherit')
                      }
                    }}
                    href={section.button.href} 
                    target={section.button.target}
                  >
                    {section.button.icon != "" && (<img className='w-6 h-auto' src={section.button.icon} alt="icon" />)}
                    {section.button.title}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* section-6 */}
          {/* {section.widget === "section-6" && (
            <div className='section-6'>
              <div className='container'>
                <div className='section-title'>
                  <h2 className='title' dangerouslySetInnerHTML={{__html:section.title}}></h2>
                </div>

                <div className='list-items'>
                  <ProductRelateSlide items={section.lists} />
                </div>
              </div>
            </div>
          )} */}
        </div>
      ))}

      {/* footer */}
      <ProductFooter copyright={t('copyright')} basePath={basePath} back2top={t('back2top')} />
    </div>
  );
}
