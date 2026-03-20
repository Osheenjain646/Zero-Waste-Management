'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/ui/Sidebar'
import { cn } from '@/lib/utils'

const TIERS = [
  {
    key: 'basic',
    name: 'Basic',
    price: 999,
    desc: 'For small local NGOs getting started',
    features: [
      '10 orders per month',
      'Standard notifications',
      'Quarterly impact report',
      'Community support',
      '1 prize draw entry / month',
    ],
    hot: false,
  },
  {
    key: 'standard',
    name: 'Standard',
    price: 2499,
    desc: 'For growing organisations',
    features: [
      'Unlimited orders',
      'Early access (30 min before public)',
      'Route optimisation',
      'Monthly impact report',
      'Priority support',
      '3 prize draw entries / month',
      'Feed Points multiplier ×2',
    ],
    hot: true,
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    price: 7999,
    desc: 'For large trusts and government bodies',
    features: [
      'Everything in Standard',
      'Dedicated account manager',
      'White-label reports',
      'API access',
      'Annual CSR certificate',
      'Custom pickup schedules',
      'Admin dashboard access',
      '5 prize draw entries / month',
    ],
    hot: false,
  },
]

export default function PricingPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const role = (session?.user as any)?.role
  const [loading, setLoading] = useState<string | null>(null)
  const [toast, setToast] = useState('')

  async function subscribe(tier: string) {
    if (!session) { router.push('/auth/register?role=ngo'); return }
    if (role !== 'NGO') { setToast('Only NGO accounts can subscribe'); setTimeout(() => setToast(''), 3000); return }

    setLoading(tier)
    const res = await fetch('/api/subscription', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tier }),
    })
    const data = await res.json()
    setLoading(null)

    if (res.ok) {
      setToast(`Subscribed to ${data.user?.subTier} plan!`)
      setTimeout(() => { setToast(''); router.push('/dashboard') }, 2000)
    } else {
      setToast(data.error || 'Failed to subscribe')
      setTimeout(() => setToast(''), 3000)
    }
  }

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      {session && <Sidebar />}
      <main className="flex-1 overflow-auto">
        {!session && (
          <nav className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">ZW</span>
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-100">ZeroWaste</span>
            </div>
            <div className="flex gap-2">
              <a href="/auth/login" className="btn-ghost text-sm">Log in</a>
              <a href="/auth/register" className="btn-primary text-sm">Get started</a>
            </div>
          </nav>
        )}

        <div className="px-4 py-12">
          <div className="text-center mb-12 max-w-xl mx-auto">
            <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-2">For NGOs</p>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Simple, transparent pricing</h1>
            <p className="text-slate-400 dark:text-slate-500">First 60 days free on all plans. No credit card required. Cancel anytime.</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-5">
            {TIERS.map(plan => (
              <div key={plan.key}
                className={cn(
                  'rounded-2xl p-6 border flex flex-col',
                  plan.hot ? 'bg-brand-400 border-brand-400' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800'
                )}>
                {plan.hot && (
                  <div className="text-xs bg-white text-brand-600 px-2.5 py-1 rounded-full inline-block mb-3 font-medium self-start">
                    Most popular
                  </div>
                )}

                <div className={cn('font-bold text-xl mb-1', plan.hot ? 'text-white' : 'text-slate-900 dark:text-white')}>
                  {plan.name}
                </div>
                <div className={cn('text-sm mb-4', plan.hot ? 'text-white/80' : 'text-slate-400 dark:text-slate-500')}>
                  {plan.desc}
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className={cn('text-4xl font-bold', plan.hot ? 'text-white' : 'text-slate-900 dark:text-white')}>
                    ₹{plan.price.toLocaleString('en-IN')}
                  </span>
                  <span className={cn('text-sm', plan.hot ? 'text-white/70' : 'text-slate-400 dark:text-slate-500')}>/month</span>
                </div>

                <div className={cn('border-t mb-4', plan.hot ? 'border-white/20' : 'border-slate-100 dark:border-slate-800')} />

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className={plan.hot ? 'text-white mt-0.5' : 'text-brand-400 mt-0.5'}>✓</span>
                      <span className={plan.hot ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => subscribe(plan.key)}
                  disabled={loading === plan.key}
                  className={cn(
                    'w-full py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2',
                    plan.hot
                      ? 'bg-white text-brand-600 hover:bg-slate-50 active:scale-95'
                      : 'bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-400 hover:bg-brand-100 dark:hover:bg-slate-700 active:scale-95'
                  )}>
                  {loading === plan.key
                    ? <><div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" /> Subscribing...</>
                    : session ? `Subscribe to ${plan.name}` : 'Start free trial'
                  }
                </button>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto mt-16 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-6">Common questions</h2>
            {[
              { q: 'Do I need a credit card to start?', a: 'No. First 60 days are completely free on all plans with no card required.' },
              { q: 'Can I cancel anytime?', a: 'Yes. Cancel from your profile page anytime. You keep access until the end of the billing period.' },
              { q: 'What if my NGO is not yet verified?', a: 'You can sign up and use the Basic plan immediately. Verification unlocks Standard and Enterprise features.' },
              { q: 'Is there a discount for annual billing?', a: 'Yes — pay annually and get 2 months free. Contact us at support@zerowaste.in.' },
            ].map(({ q, a }) => (
              <div key={q} className="card p-5">
                <div className="font-semibold text-slate-800 dark:text-slate-100 text-sm mb-1">{q}</div>
                <div className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">{a}</div>
              </div>
            ))}
          </div>
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
