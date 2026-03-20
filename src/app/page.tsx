'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import ThemeToggle from '@/components/ui/ThemeToggle'

function Counter({ target }: { target: number }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    let s = 0
    const step = target / 80
    const t = setInterval(() => {
      s += step
      if (s >= target) { setN(target); clearInterval(t) }
      else setN(Math.floor(s))
    }, 20)
    return () => clearInterval(t)
  }, [target])
  return <>{n.toLocaleString('en-IN')}</>
}

export default function HomePage() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white dark:bg-slate-900/90 backdrop-blur border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">ZW</span>
            </div>
            <span className="font-semibold text-slate-800 dark:text-slate-100">ZeroWaste</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <Link href="/map" className="hover:text-brand-600 dark:text-brand-400 transition-colors">Live Map</Link>
            <Link href="/leaderboard" className="hover:text-brand-600 dark:text-brand-400 transition-colors">Leaderboard</Link>
            <Link href="/prizes" className="hover:text-brand-600 dark:text-brand-400 transition-colors">Prize Pool</Link>
          </div>
          <div className="flex items-center gap-2">
            {session ? (
              <Link href="/dashboard" className="btn-primary text-sm">Go to Dashboard</Link>
            ) : (
              <>
                <Link href="/auth/login" className="btn-ghost text-sm hidden md:block">Log in</Link>
                <Link href="/auth/register" className="btn-primary text-sm">Get started</Link>
              </>
            )}
            <div className="ml-2 border-l border-slate-200 dark:border-slate-700 pl-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#E1F5EE_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,#04342C_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#FAEEDA_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_70%_80%,#4A3719_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-800/30 text-brand-700 dark:text-brand-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-brand-100 dark:border-brand-800/50 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-pulse" />
            Live in Mumbai · Zero food waste pledge
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6 animate-fade-up">
            Feed people.<br />
            <span className="text-brand-400">Waste nothing.</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-10 animate-fade-up leading-relaxed">
            Restaurants, hotels, and dhabas list surplus food. Verified NGOs claim it. Communities get fed. Real time. Zero cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up">
            <Link href="/auth/register?role=donor" className="btn-primary px-8 py-3 text-base">I have food to share</Link>
            <Link href="/auth/register?role=ngo" className="btn-secondary px-8 py-3 text-base">My NGO needs food</Link>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-3xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {[
            { label: 'Meals saved', value: 12847 },
            { label: 'Active donors', value: 320 },
            { label: 'NGOs onboarded', value: 84 },
            { label: 'CO₂ saved (kg)', value: 6423 },
          ].map(s => (
            <div key={s.label} className="card p-5 text-center">
              <div className="text-3xl font-bold text-brand-400 tabular-nums">
                <Counter target={s.value} />
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest">The process</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">How it works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-slate-100" />
            {[
              { n: '01', role: 'Donor', title: 'List surplus food', desc: 'Add food name, quantity, pickup window, and address in 60 seconds.' },
              { n: '02', role: 'Platform', title: 'We verify & match', desc: 'Listings appear live on the map. NGOs near you get notified instantly.' },
              { n: '03', role: 'NGO', title: 'Claim and collect', desc: 'Verified organisations claim listings and coordinate pickup directly.' },
              { n: '04', role: 'Impact', title: 'Food reaches people', desc: 'Meals served, CO₂ tracked, Feed Points awarded to both sides.' },
            ].map((s, i) => (
              <div key={i} className="text-center relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-800/30 border border-brand-100 dark:border-brand-800/50 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-600 dark:text-brand-400 font-mono text-sm font-bold">{s.n}</span>
                </div>
                <p className="text-xs font-semibold text-brand-500 mb-1 uppercase tracking-wide">{s.role}</p>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Everything built in</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: '◎', color: 'bg-brand-50 dark:bg-brand-800/30 text-brand-600 dark:text-brand-400', title: 'Live map', desc: 'Real-time Leaflet map shows all active listings. Filter by distance, diet, category.' },
              { icon: '◆', color: 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400', title: 'Feed Points', desc: 'Earn points for every listing and pickup. Redeem for free subscriptions and perks.' },
              { icon: '◇', color: 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400', title: 'Prize pool', desc: 'Monthly draw funded by platform activity. Good behaviour earns you entries.' },
              { icon: '◈', color: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400', title: 'Trust scores', desc: 'Every user has a live trust score based on ratings, pickups, and cancellations.' },
              { icon: '◉', color: 'bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400', title: 'NGO-only buying', desc: 'Only verified organisations can claim. Ensures food reaches communities, not resellers.' },
              { icon: '▦', color: 'bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400', title: 'Impact dashboard', desc: 'Track meals saved, CO₂ avoided, streaks, and monthly leaderboard rankings.' },
            ].map((f, i) => (
              <div key={i} className="card-hover p-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4 ${f.color}`}>{f.icon}</div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2 text-sm">{f.title}</h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prize pool banner */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Monthly draw</p>
          <h2 className="text-3xl font-bold text-white mb-2">Community Prize Pool</h2>
          <div className="text-5xl font-bold text-amber-400 tabular-nums mb-3">₹38,450</div>
          <p className="text-slate-400 dark:text-slate-500 text-sm mb-8">Funded by cancellation fees, transaction slices, and sponsors. Every completed pickup earns you an entry.</p>
          <Link href="/auth/register" className="inline-block bg-amber-400 text-slate-900 dark:text-white font-semibold px-8 py-3 rounded-xl hover:bg-amber-300 transition-colors">
            Start earning entries →
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">NGO plans</h2>
            <p className="text-slate-400 dark:text-slate-500 text-sm mt-2">First 60 days free. No credit card required.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: 'Basic', price: '999', features: ['10 orders/month', 'Standard alerts', 'Quarterly report'], hot: false },
              { name: 'Standard', price: '2,499', features: ['Unlimited orders', 'Early access 30 min', 'Route optimisation', 'Monthly report', 'Priority support'], hot: true },
              { name: 'Enterprise', price: '7,999', features: ['All Standard', 'Dedicated manager', 'API access', 'CSR certificate', 'White-label reports'], hot: false },
            ].map(p => (
              <div key={p.name} className={`rounded-2xl p-6 border ${p.hot ? 'bg-brand-400 border-brand-400 text-white' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800'}`}>
                {p.hot && <div className="text-xs bg-white text-brand-600 px-2 py-0.5 rounded-full inline-block mb-3 font-medium">Most popular</div>}
                <div className="font-bold text-xl mb-1">{p.name}</div>
                <div className="text-3xl font-bold mb-1">₹{p.price}<span className={`text-base font-normal ${p.hot ? 'text-white/70' : 'text-slate-400 dark:text-slate-500'}`}>/mo</span></div>
                <div className={`my-4 border-t ${p.hot ? 'border-white/20' : 'border-slate-100 dark:border-slate-800'}`} />
                <ul className="space-y-2 mb-6">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className={p.hot ? 'text-white' : 'text-brand-400'}>✓</span>
                      <span className={p.hot ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/auth/register?role=ngo"
                  className={`block text-center py-2.5 rounded-xl font-medium text-sm transition-all ${p.hot ? 'bg-white text-brand-600 hover:bg-slate-50' : 'bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-400 hover:bg-brand-100 dark:hover:bg-slate-700'}`}>
                  Start free trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 dark:border-slate-800 py-8 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-brand-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">ZW</span>
            </div>
            <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm">ZeroWaste Marketplace</span>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500">© 2025 ZeroWaste. Made with purpose in Mumbai, India.</p>
        </div>
      </footer>
    </div>
  )
}
