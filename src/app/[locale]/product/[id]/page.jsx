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
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/product?id=${id}&locale=${locale}`, { cache: 'no-store' });
  return res.json();
}

export default async function ProductDetail({ params }) {
  const locale = await getLocale();
  const t = await getTranslations('Product');
  const productCMS = await getProductDetail(locale, params.id);
  const basePath = `${process.env.SKBT_BASEPATH}`;
  const linkPath  = `${process.env.SKBT_HTTP_HOST}${process.env.SKBT_SUBFOLDER}`;

  return (
    <div className='product-page'>
      {/* header */}      
      <ProductHeader header={productCMS.cms.header} basePath={basePath} linkPath={linkPath} back_showroom={t('back_showroom')} />

      {/* sections */}
      {productCMS.cms.sections?.map((section, sectionKey) => (
        <div 
          key={sectionKey}
        >
          {/* section-banner */}
          {section.widget === "section-banner" && (
            <div className='section-banner'>
              {section.graphic.type === "image" && (
                <picture>
                  <source media="(min-width:1024px)" srcSet={`${section.graphic.image[1]}`} />
                  <img src={`${section.graphic.image[0]}`} alt='banner'  />
                </picture>
              )}

              {section.graphic.type === "video" && (
                <ProductVideoBanner video_id={section.graphic.video} uuid={`${Math.floor(Math.random() * 9999999999)}`} /> 
              )}
            </div>
          )}

          {/* section-1 */}
          {section.widget === "section-1" && (
            <div 
              className='section-1'
              style={section.style}
            >
              <div className='container'>
                <div className='section-title'>
                  {section.title.mascot && (
                    <div className='mascot'>
                      {/* <Image src={`${process.env.SKBT_BASEPATH}/assets/img/product/mascot.png`} alt="mascot" width={250} height={250} /> */}
                      <img src={`${process.env.SKBT_BASEPATH}/assets/img/product/mascot.png`} alt="mascot" width={250} height={250} />
                    </div>
                  )}

                  <h2 
                    className='title'
                    style={section.title.style}
                  >
                    {section.title.url == "" ? (section.title.text):(
                      // <Image src={section.title.url} alt={`${section.title.text}`} width={640} height={125} />
                      <img src={section.title.url} alt={`${section.title.text}`} width={640} height={125} />
                    )}
                  </h2>
                </div>
      
                <div className='list-items'>
                  {section.lists?.map((item, itemKey) => (
                    <div 
                      key={`content1-${sectionKey}-${itemKey}`} 
                      className={`one-item ${item.template}`}
                      style={item.style}
                    >
                      <div className='thumbnail'>
                        <picture>
                          {item.template == "template-1" && (
                            <source media="(min-width:1024px)" srcSet={item.thumbnail[1]} />
                          )}
                          <img className={`${item.animate && 'img-ani'}`} src={item.thumbnail[0]} alt='product'  />
                        </picture>
                      </div>
                      <div className='content'>
                        <div>
                          <h4 style={item.title.style}>{item.title.text}</h4>
                          <p>{item.excerpt}</p>
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
              style={section.style}
            >
              <div className='container'>
                <div className='section-title'>
                  <h2 
                    className='title'
                    style={section.title.style}
                  >
                    {section.title.url == "" ? (section.title.text):(
                      // <Image src={section.title.url} alt={`${section.title.text}`} width={860} height={125} />
                      <img src={section.title.url} alt={`${section.title.text}`} width={860} height={125} />
                    )}
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
              style={section.style}
            >
              <div className='cover'>
                <picture>
                  <source media="(min-width:1024px)" srcSet={`${section.image[1]}`} />
                  <img src={`${section.image[0]}`} alt='image'  />
                </picture>
              </div>

              <div className={`box-btn ${!section.link.visible && '!hidden'}`}>
                <div className='container'>
                  <Button 
                    className='btn-style-3' 
                    setStyle={{
                      normal:section.link.style,
                      hover:section.link.style_hover
                    }}
                    href={section.link.href} 
                    target={section.link.target}
                  >
                    {section.link.icon != "" && (<img src={section.link.icon} alt="icon" />)}
                    {section.link.title}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* section-5 */}
          {section.widget === "section-5" && (
            <div 
              className='section-5'
              style={section.style}
            >
              <div className='cover'>
                <picture>
                  <source media="(min-width:1024px)" srcSet={`${section.image[1]}`} />
                  <img src={`${section.image[0]}`} alt='image'  />
                </picture>
              </div>


              <div className={`box-btn ${!section.link.visible && '!hidden'}`}>
                <div className='container'>
                  <Button 
                    className='btn-style-3' 
                    setStyle={{
                      normal:section.link.style,
                      hover:section.link.style_hover
                    }}
                    href={section.link.href} 
                    target={section.link.target}
                  >
                    {section.link.icon != "" && (<img src={section.link.icon} alt="icon" />)}
                    {section.link.title}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* section-6 */}
          {section.widget === "section-6" && (
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
          )}
        </div>
      ))}

      {/* footer */}
      <ProductFooter copyright={t('copyright')} basePath={basePath} back2top={t('back2top')} />
    </div>
  );
}
