import { Layout } from '@/components/dom/Layout'
import '@/styles/globals.css'
import '@/styles/home.css'
import '@/styles/product.css'
import '@/styles/r3f.css'

import { MetadataDefault } from '@/lib/metadata'
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = MetadataDefault

export default function RootLayout({ children, params: { locale } }) {
  const basePath = `${process.env.SKBT_BASEPATH}`
  const gtm = `${process.env.NEXT_PUBLIC_GTM}`

  return (
    <html lang={locale} className='antialiased'>
      <head>
        <link rel='icon' href={`${basePath}/favicon.ico`} sizes='any' />
      </head>
      <body>
        {gtm !== 'GTM-XXX' && <GoogleTagManager gtmId={`${gtm}`} />}
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
