'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/dashboard',     label: 'Dashboard',   icon: '▦' },
  { href: '/listings',      label: 'Listings',    icon: '◫' },
  { href: '/map',           label: 'Live Map',    icon: '◎' },
  { href: '/transactions',  label: 'History',     icon: '◳' },
  { href: '/rewards',       label: 'Rewards',     icon: '◆' },
  { href: '/leaderboard',   label: 'Leaderboard', icon: '◈' },
  { href: '/prizes',        label: 'Prize Pool',  icon: '◇', badge: 'LIVE' },
  { href: '/profile',       label: 'Profile',     icon: '◉' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const user = session?.user as any
  const initials = user?.name?.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase() || 'ZW'

  return (
    <aside className="w-56 shrink-0 hidden md:flex flex-col bg-white border-r border-slate-100 min-h-screen sticky top-0">
      <Link href="/" className="flex items-center gap-2.5 px-5 py-5 border-b border-slate-100">
        <div className="w-8 h-8 bg-brand-400 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">ZW</span>
        </div>
        <span className="font-semibold text-slate-800">ZeroWaste</span>
      </Link>

      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {nav.map(item => {
          const active = pathname === item.href || pathname.startsWith(item.href + '/')
          return (
            <Link key={item.href} href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                active ? 'bg-brand-50 text-brand-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              )}>
              <span className="shrink-0">{item.icon}</span>
              <span className="flex-1">{item.label}</span>
              {item.badge && <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded">{item.badge}</span>}
            </Link>
          )
        })}
      </nav>

      {user?.role === 'NGO' && (
        <div className="px-3 pb-2">
          <Link href="/pricing" className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors font-medium">
            <span>↑</span> Upgrade plan
          </Link>
        </div>
      )}

      <div className="p-3 border-t border-slate-100">
        {user && (
          <div className="flex items-center gap-2.5 p-2 rounded-lg mb-1">
            <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 text-xs font-bold shrink-0">
              {initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-medium text-slate-700 truncate">{user.businessName || user.name}</div>
              <div className="text-[10px] text-slate-400 capitalize">{user.role?.toLowerCase()}</div>
            </div>
          </div>
        )}
        <button onClick={() => signOut({ callbackUrl: '/' })}
          className="w-full flex items-center gap-2 px-2 py-1.5 text-xs text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
          <span>↩</span> Sign out
        </button>
      </div>
    </aside>
  )
}
