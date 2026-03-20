'use client'

import { useEffect, useState } from 'react'
import Sidebar from '@/components/ui/Sidebar'
import { fmtCurrency } from '@/lib/utils'

function Countdown({ target }: { target: string }) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 })
  useEffect(() => {
    function tick() {
      const diff = new Date(target).getTime() - Date.now()
      if (diff <= 0) return
      setT({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return (
    <div className="flex gap-3 justify-center">
      {[['Days', t.d], ['Hours', t.h], ['Mins', t.m], ['Secs', t.s]].map(([l, v]) => (
        <div key={l} className="text-center">
          <div className="bg-white/10 rounded-xl w-14 h-14 flex items-center justify-center">
            <span className="text-2xl font-bold tabular-nums">{String(v).padStart(2, '0')}</span>
          </div>
          <div className="text-xs mt-1 opacity-60">{l}</div>
        </div>
      ))}
    </div>
  )
}

export default function PrizesPage() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch('/api/prizes').then(r => r.json()).then(setData)
  }, [])

  const pool = data?.pool
  const total = pool?.total ?? 0

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="bg-slate-900 text-white px-6 py-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-xs text-slate-400">Monthly community draw</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Prize Pool</h1>
          <div className="text-6xl font-bold text-amber-400 tabular-nums mb-2">{fmtCurrency(total)}</div>
          <p className="text-slate-400 text-sm mb-6">
            {data?.totalEntries ?? 0} eligible entries · You have{' '}
            <strong className="text-white">{data?.myEntries ?? 0} {data?.myEntries === 1 ? 'entry' : 'entries'}</strong>
          </p>
          {pool?.drawDate && (
            <>
              <div className="text-xs text-slate-400 mb-2 uppercase tracking-widest">Draw in</div>
              <Countdown target={pool.drawDate} />
            </>
          )}
        </div>

        <div className="p-6 max-w-2xl space-y-5">
          {/* Funding sources */}
          {pool && (
            <div className="card p-5">
              <h2 className="font-semibold text-slate-800 mb-4">How the pool is funded</h2>
              <div className="space-y-4">
                {[
                  { label: 'Cancellation fees', amount: pool.cancellationFees, color: 'bg-red-400' },
                  { label: '1% transaction slice', amount: pool.transactionSlice, color: 'bg-amber-400' },
                  { label: `Sponsor · ${pool.sponsorName || 'Partner'}`, amount: pool.sponsorAmount, color: 'bg-brand-400' },
                ].map(src => (
                  <div key={src.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-600">{src.label}</span>
                      <span className="font-semibold">{fmtCurrency(src.amount)}</span>
                    </div>
                    <div className="bg-slate-100 rounded-full h-2.5 overflow-hidden">
                      <div className={cn('h-full rounded-full', src.color)}
                        style={{ width: `${Math.round((src.amount / total) * 100)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How to earn entries */}
          <div className="card p-5">
            <h2 className="font-semibold text-slate-800 mb-4">Earn draw entries</h2>
            <div className="space-y-2">
              {[
                { action: 'Complete a food pickup', entries: 1 },
                { action: 'Maintain a 7-day streak', entries: 2 },
                { action: 'Receive a 5-star rating', entries: 1 },
                { action: 'Redeem 80 Feed Points', entries: 1 },
                { action: 'Subscribe to Standard or Enterprise', entries: 3 },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <span className="text-sm text-slate-700">{item.action}</span>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                    +{item.entries} {item.entries === 1 ? 'entry' : 'entries'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fair draw policy */}
          <div className="card p-5 bg-slate-50">
            <h3 className="font-semibold text-slate-800 mb-2 text-sm">Fair draw policy</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              One winner is drawn randomly each month from all eligible entries. Winners receive the prize via UPI or bank transfer within 7 business days. The pool is never funded by ZeroWaste's own revenue — 100% comes from platform activity.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

function cn(...args: string[]) { return args.filter(Boolean).join(' ') }
