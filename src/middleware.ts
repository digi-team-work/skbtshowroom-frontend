import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

const locales: string[] = ['th', 'en']
// const publicPages: string[] = ['/', '/login', '/room', '/room3d', '/blob', '/room_1', '/index_bk', '/master1']

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'th'
})

export default function middleware(req: NextRequest): Promise<NextResponse> | NextResponse {
  // const publicPathnameRegex: RegExp = RegExp(`^(/(${locales.join('|')}))?(${publicPages.join('|')})?/?$`, 'i')
  // const isPublicPage: boolean = publicPathnameRegex.test(req.nextUrl.pathname)

  // if (isPublicPage) {
  //   return intlMiddleware(req)
  // } else {
  //   return NextResponse.redirect(new URL('/', req.url))
  // }

  return intlMiddleware(req)
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/', '/(th|en)/:path*', '/((?!api|_next|.*\\..*).*)'],

}
