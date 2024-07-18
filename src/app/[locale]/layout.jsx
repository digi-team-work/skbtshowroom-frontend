import { Layout } from '@/components/dom/Layout'
import '@/styles/globals.css'
import '@/styles/home.css'
import '@/styles/product.css'
import '@/styles/r3f.css'

import { MetadataDefault } from "@/lib/metadata";

export const metadata = MetadataDefault;

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} className='antialiased'>
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
