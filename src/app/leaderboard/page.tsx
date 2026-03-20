'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Sidebar from '@/components/ui/Sidebar'
import { cn } from '@/lib/utils'

export default function LeaderboardPage() {
  const { data: session } = useSession()
  const [tab, setTab] = useState<'donors' | 'ngos'>('donors')
  const [list, setList] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const userId = (session?.user as any)?.id

  useEffect(() => {
    setLoading(true)
    fetch(`/api/leaderboard?type=${tab}`)
      .then(r => r.json())
      .then(d => { setList(d.leaderboard || []); setLoading(false) })
  }, [tab])

  const top3 = list.slice(0, 3)
  const rest = list.slice(3)

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="bg-white border-b border-slate-100 px-6 py-4">
          <h1 className="font-bold text-slate-900">Leaderboard</h1>
          <p className="text-xs text-slate-400 mt-0.5">Ranked by total meals contributed</p>
        </div>

        <div className="p-6 max-w-2xl">
          <div className="flex gap-2 mb-6">
            {(['donors', 'ngos'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={cn('px-5 py-2 rounded-full text-sm font-medium border transition-all',
                  tab === t ? 'bg-brand-400 text-white border-brand-400' : 'border-slate-200 text-slate-500 hover:border-brand-200'
                )}>
                {t === 'donors' ? 'Food Donors' : 'NGO Collectors'}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-brand-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : list.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400">No data yet. Be the first on the board!</p>
            </div>
          ) : (
            <>
              {/* Podium */}
              <div className="card p-6 mb-5">
                <div className="flex items-end justify-center gap-4">
                  {[top3[1], top3[0], top3[2]].map((entry, idx) => {
                    if (!entry) return <div key={idx} className="flex-1" />
                    const isFirst = idx === 1
                    const heights = ['h-14', 'h-20', 'h-10']
                    const bgColors = ['bg-slate-200', 'bg-amber-400', 'bg-amber-600/50']
                    const textColors = ['text-slate-500', 'text-white', 'text-white']
                    const nums = ['2', '1', '3']
                    return (
                      <div key={entry.id} className="flex-1 text-center">
                        {isFirst && <div className="text-lg mb-1">👑</div>}
                        <div className={cn('w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center font-bold text-sm',
                          isFirst ? 'bg-amber-100 border-2 border-amber-400 text-amber-700' : 'bg-slate-100 text-slate-600'
                        )}>
                          {(entry.businessName || entry.name).slice(0, 2).toUpperCase()}
                        </div>
                        <div className={cn('rounded-t-xl flex items-end justify-center pb-2', heights[idx], bgColors[idx])}>
                          <span className={cn('text-xl font-bold', textColors[idx])}>{nums[idx]}</span>
                        </div>
                        <div className="text-xs font-semibold text-slate-700 mt-2 truncate px-1">
                          {entry.businessName || entry.name}
                        </div>
                        <div className="text-xs text-slate-400">{entry.totalMeals} meals</div>
                        {entry.id === userId && <div className="text-[10px] text-brand-600 font-bold">You!</div>}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Rest of list */}
              <div className="space-y-2">
                {rest.map((entry: any) => (
                  <div key={entry.id} className={cn('card p-4 flex items-center gap-3',
                    entry.id === userId && 'border-brand-200 bg-brand-50/30'
                  )}>
                    <div className="w-8 text-center font-mono text-sm font-semibold text-slate-400">#{entry.rank}</div>
                    <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 text-xs font-bold shrink-0">
                      {(entry.businessName || entry.name).slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={cn('text-sm font-semibold truncate', entry.id === userId ? 'text-brand-700' : 'text-slate-800')}>
                        {entry.businessName || entry.name}
                        {entry.id === userId && <span className="ml-1 text-xs font-normal text-brand-400">you</span>}
                      </div>
                      <div className="text-xs text-slate-400">{entry.streakDays}d streak · Trust {entry.trustScore}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-brand-600">{entry.totalMeals}</div>
                      <div className="text-[10px] text-slate-400">meals</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
