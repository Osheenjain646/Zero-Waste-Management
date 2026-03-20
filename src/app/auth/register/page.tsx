'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

function RegisterForm() {
  const router = useRouter()
  const params = useSearchParams()
  const defaultRole = params.get('role') === 'ngo' ? 'NGO' : 'DONOR'

  const [role, setRole] = useState<'DONOR' | 'NGO'>(defaultRole as any)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '', email: '', password: '', businessName: '', phone: '', city: 'Mumbai',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // 1. Create account
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, role }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Registration failed')
        setLoading(false)
        return
      }

      // 2. Auto sign in
      const signin = await signIn('credentials', {
        email: form.email,
        password: form.password,
        redirect: false,
      })

      if (signin?.error) {
        setError('Account created but login failed. Please log in manually.')
        router.push('/auth/login')
        return
      }

      router.push('/dashboard')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-brand-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">ZW</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Create your account</h1>
          <p className="text-sm text-slate-400 mt-1">Join the zero waste movement</p>
        </div>

        {/* Role selector */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {(['DONOR', 'NGO'] as const).map(r => (
            <button key={r} onClick={() => setRole(r)}
              className={cn(
                'p-4 rounded-xl border-2 text-left transition-all',
                role === r ? 'border-brand-400 bg-brand-50' : 'border-slate-100 bg-white hover:border-slate-200'
              )}>
              <div className="text-xl mb-2">{r === 'DONOR' ? '🍱' : '🤝'}</div>
              <div className="font-semibold text-slate-800 text-sm">
                {r === 'DONOR' ? 'Food Donor' : 'NGO / Organisation'}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {r === 'DONOR' ? 'Restaurant, hotel, dhaba, household' : 'Verified org to collect & serve food'}
              </div>
            </button>
          ))}
        </div>

        <div className="card p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="label">Your full name *</label>
                <input className="input" placeholder="Riya Sharma" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className="col-span-2">
                <label className="label">
                  {role === 'DONOR' ? 'Restaurant / business name *' : 'Organisation name *'}
                </label>
                <input className="input"
                  placeholder={role === 'DONOR' ? "Riya's Kitchen" : 'Asha Foundation'}
                  value={form.businessName}
                  onChange={e => setForm({ ...form, businessName: e.target.value })} required />
              </div>
              <div className="col-span-2">
                <label className="label">Email address *</label>
                <input type="email" className="input" placeholder="you@example.com"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div>
                <label className="label">Phone *</label>
                <input type="tel" className="input" placeholder="9876543210"
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
              </div>
              <div>
                <label className="label">City *</label>
                <select className="input" value={form.city}
                  onChange={e => setForm({ ...form, city: e.target.value })}>
                  {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata'].map(c =>
                    <option key={c} value={c}>{c}</option>
                  )}
                </select>
              </div>
              <div className="col-span-2">
                <label className="label">Password * (min 8 characters)</label>
                <input type="password" className="input" placeholder="••••••••"
                  value={form.password} onChange={e => setForm({ ...form, password: e.target.value })}
                  required minLength={8} />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 text-xs px-3 py-2 rounded-lg">
                {error}
              </div>
            )}

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-3 text-xs text-brand-700">
              🎉 Welcome bonus: <strong>50 Feed Points</strong> on sign up · First 60 days free
            </div>

            <button type="submit" disabled={loading}
              className="btn-primary w-full py-3 flex items-center justify-center gap-2">
              {loading
                ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Creating account...</>
                : 'Create account'}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-slate-500 mt-5">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-brand-600 font-medium hover:text-brand-700">Sign in →</Link>
        </p>
      </div>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-brand-400 border-t-transparent rounded-full animate-spin" /></div>}>
      <RegisterForm />
    </Suspense>
  )
}
