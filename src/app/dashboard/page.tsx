'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Sidebar from '@/components/ui/Sidebar'
import VerifiedBadge from '@/components/ui/VerifiedBadge'
import { cn, timeLeft, fmtCurrency } from '@/lib/utils'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/login')
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/dashboard')
        .then(r => r.json())
        .then(d => { setData(d); setLoading(false) })
    }
  }, [status])

  if (status === 'loading' || loading) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-brand-400 border-t-transparent rounded-full animate-spin" />
        </main>
      </div>
    )
  }

  if (!data) return null

  const { user, stats, pool } = data
  const role = (session?.user as any)?.role

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 py-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400 dark:text-slate-500">Welcome back</p>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                {user.businessName || user.name}
                {user.isVerified && <VerifiedBadge className="w-5 h-5 ml-1.5 text-blue-500" />}
              </h1>
              <span className={cn(
                'text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block',
                role === 'DONOR' ? 'bg-brand-50 dark:bg-brand-800/30 text-brand-700 dark:text-brand-400' : 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
              )}>
                {role === 'DONOR' ? 'Food Donor' : 'NGO Collector'}
              </span>
            </div>
            {role === 'DONOR' && (
              <Link href="/listings" className="btn-primary text-sm flex items-center gap-1">
                <span className="text-lg leading-none">+</span> Add listing
              </Link>
            )}
          </div>

          {/* Streak */}
          {user.streakDays > 0 && (
            <div className="mt-4 bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-800/50 rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-2xl">🔥</span>
              <div>
                <div className="text-sm font-semibold text-amber-800">{user.streakDays}-day streak!</div>
                <div className="text-xs text-amber-600 dark:text-amber-400">Keep it up to earn bonus Feed Points</div>
              </div>
              <div className="ml-auto text-xs font-medium text-amber-700 dark:text-amber-400 bg-amber-100 px-2 py-1 rounded-full">
                {user.streakDays >= 7 ? '+50 pts earned' : `${7 - user.streakDays} days to bonus`}
              </div>
            </div>
          )}
        </div>

        <div className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Total meals', value: user.totalMeals?.toLocaleString('en-IN') || '0', color: 'text-brand-600 dark:text-brand-400' },
              { label: 'CO₂ saved', value: `${stats.co2Saved}kg`, color: 'text-teal-600 dark:text-teal-400' },
              { label: 'Feed Points', value: user.feedPoints, color: 'text-amber-500' },
              { label: 'City rank', value: stats.rank > 0 ? `#${stats.rank}` : '—', color: 'text-purple-600 dark:text-purple-400' },
            ].map(s => (
              <div key={s.label} className="card p-4">
                <div className="text-xs text-slate-400 dark:text-slate-500 mb-1">{s.label}</div>
                <div className={cn('text-2xl font-bold tabular-nums', s.color)}>{s.value}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="card p-4">
              <div className="text-xs text-slate-400 dark:text-slate-500 mb-1">Active listings</div>
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">{stats.activeListings}</div>
            </div>
            <div className="card p-4">
              <div className="text-xs text-slate-400 dark:text-slate-500 mb-1">Completed pickups</div>
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">{stats.completedPickups}</div>
            </div>
            <div className="card p-4">
              <div className="text-xs text-slate-400 dark:text-slate-500 mb-1">Trust score</div>
              <div className="flex items-end gap-2">
                <div className="text-2xl font-bold text-brand-600 dark:text-brand-400">{user.trustScore}</div>
                <div className="text-xs text-slate-400 dark:text-slate-500 mb-1">/ 100</div>
              </div>
              <div className="mt-2 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <div className="h-full bg-brand-400 rounded-full" style={{ width: `${user.trustScore}%` }} />
              </div>
            </div>
          </div>

          {/* Recent listings */}
          {user.listings?.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Your active listings</h2>
                <Link href="/listings" className="text-sm text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:text-brand-400">See all →</Link>
              </div>
              <div className="space-y-2">
                {user.listings.map((l: any) => (
                  <div key={l.id} className="card p-4 flex items-center gap-3">
                    <div className="w-9 h-9 bg-brand-50 dark:bg-brand-800/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0">◫</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-800 dark:text-slate-100 text-sm truncate">{l.foodName}</div>
                      <div className="text-xs text-slate-400 dark:text-slate-500">{l.quantity} {l.unit} · Closes {timeLeft(l.pickupEnd)}</div>
                    </div>
                    <span className="badge badge-green text-[10px]">Active</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Points log */}
          {user.pointsLog?.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Recent activity</h2>
                <Link href="/rewards" className="text-sm text-brand-600 dark:text-brand-400">View points →</Link>
              </div>
              <div className="card divide-y divide-slate-50">
                {user.pointsLog.slice(0, 5).map((log: any) => (
                  <div key={log.id} className="p-3 flex items-center gap-3">
                    <div className="w-7 h-7 bg-brand-50 dark:bg-brand-800/30 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 text-xs shrink-0">
                      {log.points > 0 ? '+' : '−'}
                    </div>
                    <div className="flex-1 text-xs text-slate-600 dark:text-slate-300">{log.description}</div>
                    <span className={cn('text-xs font-bold', log.points > 0 ? 'text-brand-600 dark:text-brand-400' : 'text-red-500')}>
                      {log.points > 0 ? '+' : ''}{log.points} pts
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prize pool */}
          {pool && (
            <div className="bg-slate-900 rounded-2xl p-5 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                    <span className="text-xs text-slate-400 dark:text-slate-500">Monthly draw</span>
                  </div>
                  <h3 className="font-bold text-lg">Community Prize Pool</h3>
                  <div className="text-3xl font-bold text-amber-400 tabular-nums mt-1">
                    {fmtCurrency(pool.total)}
                  </div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                    You have <span className="text-white font-medium">{pool.myEntries} {pool.myEntries === 1 ? 'entry' : 'entries'}</span> this month
                  </p>
                </div>
                <Link href="/prizes" className="text-xs bg-amber-400 text-slate-900 dark:text-white font-semibold px-3 py-1.5 rounded-lg hover:bg-amber-300 transition-colors shrink-0">
                  View pool →
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
