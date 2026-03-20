'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/ui/Sidebar'
import { cn } from '@/lib/utils'

const REDEEM_OPTIONS = [
  { key: 'FREE_MONTH', label: '1 free subscription month', cost: 500, icon: '★', desc: 'Standard plan free for 30 days' },
  { key: 'PRIORITY_LISTING', label: 'Priority listing badge', cost: 200, icon: '↑', desc: 'Your listings appear first for 7 days' },
  { key: 'EARLY_ACCESS', label: 'Early access unlock', cost: 150, icon: '◎', desc: 'See listings 30 min before others' },
  { key: 'STREAK_FREEZE', label: 'Streak freeze', cost: 100, icon: '❄', desc: "Protect your streak for 1 day" },
  { key: 'PRIZE_ENTRY', label: 'Extra prize draw entry', cost: 80, icon: '◇', desc: 'One extra entry in the monthly draw' },
]

const EARN_ACTIONS = [
  { label: 'Create a food listing', pts: 10, icon: '+' },
  { label: 'Pickup completed', pts: 25, icon: '◎' },
  { label: 'Receive 5-star rating', pts: 15, icon: '★' },
  { label: '7-day streak bonus', pts: 50, icon: '🔥' },
  { label: 'First ever listing', pts: 50, icon: '◆' },
  { label: 'Welcome bonus', pts: 50, icon: '🎉' },
]

export default function RewardsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [tab, setTab] = useState<'earn' | 'redeem' | 'history'>('earn')
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [redeeming, setRedeeming] = useState<string | null>(null)
  const [toast, setToast] = useState('')

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/login')
  }, [status, router])

  function load() {
    fetch('/api/rewards').then(r => r.json()).then(d => { setData(d); setLoading(false) })
  }

  useEffect(() => { if (status === 'authenticated') load() }, [status])

  async function redeem(key: string, cost: number) {
    setRedeeming(key)
    const res = await fetch('/api/rewards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: key }),
    })
    const d = await res.json()
    setRedeeming(null)
    if (res.ok) {
      setToast(`Redeemed! −${cost} pts`)
      load()
    } else {
      setToast(d.error || 'Redemption failed')
    }
    setTimeout(() => setToast(''), 3000)
  }

  if (loading) return (
    <div className="flex min-h-screen"><Sidebar />
      <main className="flex-1 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-400 border-t-transparent rounded-full animate-spin" />
      </main>
    </div>
  )

  const points = data?.user?.feedPoints ?? 0
  const streak = data?.user?.streakDays ?? 0
  const logs = data?.logs ?? []
  const progress = Math.min((points / 500) * 100, 100)

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="bg-white border-b border-slate-100 px-6 py-4">
          <h1 className="font-bold text-slate-900">Feed Points</h1>
          <p className="text-xs text-slate-400 mt-0.5">Earn by doing good. Redeem for perks.</p>
        </div>

        <div className="p-6 max-w-2xl space-y-5">
          {/* Wallet */}
          <div className="card p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-xs text-slate-400 mb-1">Your balance</div>
                <div className="text-5xl font-bold text-amber-500 tabular-nums">{points}</div>
                <div className="text-sm text-slate-400 mt-1">Feed Points</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-1">Tier</div>
                <div className="bg-slate-100 text-slate-700 font-semibold px-3 py-1.5 rounded-full text-sm">
                  {points >= 500 ? 'Gold 🏆' : points >= 200 ? 'Silver' : 'Bronze'}
                </div>
              </div>
            </div>

            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Progress to Gold</span>
              <span>{points} / 500</span>
            </div>
            <div className="bg-slate-100 rounded-full h-2.5 overflow-hidden mb-1">
              <div className="h-full bg-amber-400 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }} />
            </div>

            {/* Streak */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className={cn(
                    'w-7 h-7 rounded-lg flex items-center justify-center text-xs',
                    i < streak ? 'bg-amber-400 text-white' : 'bg-slate-100 text-slate-300'
                  )}>
                    {i < streak ? '🔥' : '·'}
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-600">
                <strong>{streak}-day streak</strong> {streak >= 7 ? '· Bonus earned!' : `· ${7 - streak} to bonus`}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-100">
            {(['earn', 'redeem', 'history'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={cn(
                  'flex-1 py-3 text-sm font-medium transition-all border-b-2 capitalize',
                  tab === t ? 'text-brand-600 border-brand-400' : 'text-slate-400 border-transparent hover:text-slate-600'
                )}>
                {t}
              </button>
            ))}
          </div>

          {/* Earn */}
          {tab === 'earn' && (
            <div className="space-y-2 animate-fade-in">
              {EARN_ACTIONS.map((item, i) => (
                <div key={i} className="card p-4 flex items-center gap-3">
                  <div className="w-9 h-9 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center text-sm shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 text-sm text-slate-700">{item.label}</div>
                  <div className="text-sm font-bold text-brand-600">+{item.pts} pts</div>
                </div>
              ))}
              <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-400 text-center border border-slate-100">
                Feed Points are non-transferable and have no cash value. Platform-only perks only.
              </div>
            </div>
          )}

          {/* Redeem */}
          {tab === 'redeem' && (
            <div className="space-y-3 animate-fade-in">
              <p className="text-xs text-slate-400">Balance: <strong className="text-amber-500">{points} pts</strong></p>
              <div className="grid sm:grid-cols-2 gap-3">
                {REDEEM_OPTIONS.map(opt => {
                  const can = points >= opt.cost
                  return (
                    <div key={opt.key} className={cn('card p-4', !can && 'opacity-50')}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="w-8 h-8 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center">{opt.icon}</div>
                        <span className={cn('text-xs font-bold px-2 py-0.5 rounded-full', can ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-400')}>
                          {opt.cost} pts
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-slate-800 mb-0.5">{opt.label}</div>
                      <div className="text-xs text-slate-400 mb-3">{opt.desc}</div>
                      <button
                        disabled={!can || redeeming === opt.key}
                        onClick={() => redeem(opt.key, opt.cost)}
                        className={cn('w-full text-xs font-medium py-2 rounded-lg transition-all',
                          can ? 'bg-brand-400 text-white hover:bg-brand-600' : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                        )}>
                        {redeeming === opt.key ? 'Redeeming...' : can ? 'Redeem' : 'Not enough pts'}
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* History */}
          {tab === 'history' && (
            <div className="space-y-2 animate-fade-in">
              {logs.length === 0 ? (
                <p className="text-center text-sm text-slate-400 py-10">No points history yet</p>
              ) : logs.map((log: any) => (
                <div key={log.id} className="card p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 text-xs shrink-0">
                    {log.points > 0 ? '+' : '−'}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-700">{log.description}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{new Date(log.createdAt).toLocaleString()}</div>
                  </div>
                  <span className={cn('text-sm font-bold', log.points > 0 ? 'text-brand-600' : 'text-red-500')}>
                    {log.points > 0 ? '+' : ''}{log.points}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl text-sm font-medium z-50 animate-fade-up">
          {toast}
        </div>
      )}
    </div>
  )
}
