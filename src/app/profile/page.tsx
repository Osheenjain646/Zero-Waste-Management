'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/ui/Sidebar'
import VerifiedBadge from '@/components/ui/VerifiedBadge'
import { cn } from '@/lib/utils'

export default function ProfilePage() {
  const { data: session, status, update } = useSession()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({ name: '', businessName: '', phone: '', city: '' })
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/login')
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/profile').then(r => r.json()).then(d => {
        setUser(d.user)
        setForm({ name: d.user.name, businessName: d.user.businessName || '', phone: d.user.phone || '', city: d.user.city })
      })
    }
  }, [status])

  async function buyVerification() {
    if (confirm('Buy verification badge for ₹499?')) {
      setSaving(true)
      const res = await fetch('/api/profile/verify', { method: 'POST' })
      if (res.ok) {
        setUser((prev: any) => ({ ...prev, isVerified: true }))
        await update({ isVerified: true })
        setToast('Verification badge purchased successfully!')
        setTimeout(() => setToast(''), 3000)
      }
      setSaving(false)
    }
  }

  async function save() {
    setSaving(true)
    const res = await fetch('/api/profile', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      const d = await res.json()
      setUser((prev: any) => ({ ...prev, ...d.user }))
      setEditing(false)
      setToast('Profile updated!')
      setTimeout(() => setToast(''), 3000)
    }
    setSaving(false)
  }

  if (!user) return (
    <div className="flex min-h-screen"><Sidebar />
      <main className="flex-1 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-400 border-t-transparent rounded-full animate-spin" />
      </main>
    </div>
  )

  const trustBg = user.trustScore >= 71 ? 'bg-brand-50 dark:bg-brand-800/30 text-brand-700 dark:text-brand-400 border-brand-200 dark:border-brand-800/50' : user.trustScore >= 41 ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/50' : 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800/50'
  const trustLabel = user.trustScore >= 71 ? 'Trusted' : user.trustScore >= 41 ? 'Moderate' : 'Low'

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="font-bold text-slate-900 dark:text-white">Profile</h1>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Account details and trust score</p>
          </div>
          {!editing
            ? <button onClick={() => setEditing(true)} className="btn-secondary text-sm">Edit profile</button>
            : <div className="flex gap-2">
                <button onClick={() => setEditing(false)} className="btn-ghost text-sm">Cancel</button>
                <button onClick={save} disabled={saving} className="btn-primary text-sm">{saving ? 'Saving...' : 'Save'}</button>
              </div>
          }
        </div>

        <div className="p-6 max-w-2xl space-y-5">
          {/* Profile card */}
          <div className="card p-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-700 dark:text-brand-400 font-bold text-xl shrink-0">
                {user.name?.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()}
              </div>
              <div className="flex-1">
                {editing ? (
                  <div className="space-y-2">
                    <input className="input" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full name" />
                    <input className="input" value={form.businessName} onChange={e => setForm({ ...form, businessName: e.target.value })} placeholder="Business name" />
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="font-bold text-slate-900 dark:text-white text-lg flex items-center">
                        {user.name}
                        {user.isVerified && <VerifiedBadge className="w-5 h-5 ml-1.5 text-blue-500" />}
                      </h2>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{user.businessName}</div>
                  </>
                )}
                <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">{user.email} · {user.role}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="label">Phone</label>
                {editing
                  ? <input className="input" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  : <div className="text-sm text-slate-700 dark:text-slate-200">{user.phone || '—'}</div>}
              </div>
              <div>
                <label className="label">City</label>
                {editing
                  ? <select className="input" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}>
                      {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  : <div className="text-sm text-slate-700 dark:text-slate-200">{user.city}</div>}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-4">
              {[
                { label: 'Total meals', val: user.totalMeals, color: 'text-brand-500' },
                { label: 'Feed Points', val: user.feedPoints, color: 'text-amber-500' },
                { label: 'Day streak', val: user.streakDays, color: 'text-orange-500' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className={cn('text-2xl font-bold', s.color)}>{s.val}</div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust score */}
          <div className="card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100">Trust Score</h3>
              <span className={cn('badge border text-sm font-bold px-3 py-1', trustBg)}>
                {user.trustScore} · {trustLabel}
              </span>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden mb-4">
              <div className="h-full bg-brand-400 rounded-full" style={{ width: `${user.trustScore}%` }} />
            </div>
            <div className="space-y-2">
              {[
                { label: 'On-time pickup rate', val: Math.min(user.trustScore + 2, 100) },
                { label: 'Average rating', val: user.trustScore },
                { label: 'No cancellations', val: Math.min(user.trustScore + 5, 100) },
                { label: 'Profile completion', val: [user.name, user.businessName, user.phone, user.city].filter(Boolean).length * 25 },
              ].map(item => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500 dark:text-slate-400">{item.label}</span>
                    <span className="font-medium">{item.val}%</span>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="h-full bg-brand-400 rounded-full" style={{ width: `${item.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 bg-slate-50 dark:bg-slate-950 rounded-lg p-3 border border-slate-100 dark:border-slate-800">
              Trust score is updated automatically after every transaction. Scores below 40 are flagged for review.
            </p>
          </div>

          {/* Subscription (for NGO) */}
          {user.role === 'NGO' && (
            <div className="card p-5">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Subscription</h3>
                  <div className="flex items-center gap-2">
                    <span className="badge badge-green capitalize">{user.subTier}</span>
                    {user.subEndsAt && (
                      <span className="text-xs text-slate-400 dark:text-slate-500">
                        Renews {new Date(user.subEndsAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
                <a href="/pricing" className="btn-secondary text-xs">Upgrade</a>
              </div>
            </div>
          )}

          {/* Verification Badge Purchase */}
          {!user.isVerified && (
            <div className="card p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-indigo-950/50 dark:to-slate-900 border-blue-100 dark:border-indigo-900/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-1">
                    Get Verified <span className="text-blue-500">
                      <VerifiedBadge className="w-5 h-5 text-current" />
                    </span>
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Stand out with a verified badge next to your name and build more trust within the community.
                  </p>
                </div>
                <button 
                  onClick={buyVerification} 
                  disabled={saving}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors whitespace-nowrap shadow-sm flex-shrink-0"
                >
                  {saving ? 'Processing...' : 'Buy for ₹499'}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl text-sm font-medium z-50 animate-fade-up">
          ✓ {toast}
        </div>
      )}
    </div>
  )
}
