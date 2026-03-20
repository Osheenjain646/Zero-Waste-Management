import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const path = req.nextUrl.pathname

    // NGO-only routes
    if (path.startsWith('/ngo') && token?.role !== 'NGO') {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // Donor-only routes
    if (path.startsWith('/donor') && token?.role !== 'DONOR') {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname
        const protectedPaths = ['/dashboard', '/listings', '/rewards', '/leaderboard', '/prizes', '/profile', '/map']
        const isProtected = protectedPaths.some(p => path.startsWith(p))
        if (isProtected) return !!token
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/listings/:path*',
    '/rewards/:path*',
    '/leaderboard/:path*',
    '/prizes/:path*',
    '/profile/:path*',
    '/map/:path*',
  ],
}
