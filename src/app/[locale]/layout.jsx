import { Layout } from '@/components/dom/Layout'
import '@/styles/globals.css'
import '@/styles/home.css'
import '@/styles/product.css'
import '@/styles/r3f.css'

import { MetadataDefault } from "@/lib/metadata";

export const metadata = MetadataDefault;

export default function RootLayout({ children, params: { locale } }) {
  const basePath = `${process.env.SKBT_BASEPATH}`;

  return (
    <html lang={locale} className='antialiased'>
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
