'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Sidebar from '@/components/ui/Sidebar'
import VerifiedBadge from '@/components/ui/VerifiedBadge'
import { cn, timeLeft, CATEGORIES } from '@/lib/utils'

const STATUS_COLORS: Record<string, string> = {
  ACTIVE: 'badge-green',
  CLAIMED: 'badge-amber',
  COMPLETED: 'badge-gray',
  EXPIRED: 'badge-red',
  CANCELLED: 'badge-gray',
}

export default function ListingsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const role = (session?.user as any)?.role

  const [listings, setListings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('ACTIVE')
  const [showForm, setShowForm] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [claiming, setClaiming] = useState<string | null>(null)
  const [toast, setToast] = useState('')

  const [form, setForm] = useState({
    foodName: '', description: '', quantity: '', unit: 'portions',
    category: 'Cooked Meal', isVegan: false, isHalal: false, hasNuts: false,
    pickupStart: '', pickupEnd: '', address: '', city: 'Mumbai',
  })

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/login')
  }, [status, router])

  function fetchListings() {
    setLoading(true)
    const mine = role === 'DONOR' ? '&mine=true' : ''
    fetch(`/api/listings?status=${filter}${mine}`)
      .then(r => r.json())
      .then(d => { setListings(d.listings || []); setLoading(false) })
  }

  useEffect(() => { if (status === 'authenticated') fetchListings() }, [status, filter])

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const res = await fetch('/api/listings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, quantity: Number(form.quantity) }),
    })
    const data = await res.json()

    if (!res.ok) {
      setError(data.error || 'Failed to create listing')
      setSubmitting(false)
      return
    }

    setShowForm(false)
    setSubmitting(false)
    setForm({ foodName: '', description: '', quantity: '', unit: 'portions', category: 'Cooked Meal', isVegan: false, isHalal: false, hasNuts: false, pickupStart: '', pickupEnd: '', address: '', city: 'Mumbai' })
    showToast('Listing created! +10 Feed Points earned 🎉')
    fetchListings()
  }

  async function handleClaim(listingId: string) {
    setClaiming(listingId)
    const res = await fetch(`/api/listings/${listingId}/claim`, { method: 'POST' })
    const data = await res.json()
    setClaiming(null)

    if (!res.ok) {
      showToast(data.error || 'Failed to claim listing')
      return
    }

    showToast('Listing claimed! Coordinate pickup with the donor.')
    fetchListings()
  }

  async function handleComplete(listingId: string) {
    const res = await fetch(`/api/listings/${listingId}/complete`, { method: 'POST' })
    const data = await res.json()
    if (res.ok) {
      showToast('Pickup marked complete! +25 Feed Points earned 🎉')
      fetchListings()
    } else {
      showToast(data.error || 'Failed to complete')
    }
  }

  const now = new Date().toISOString().slice(0, 16)

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-slate-900 dark:text-white">
              {role === 'DONOR' ? 'My Listings' : 'Available Food'}
            </h1>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {role === 'DONOR' ? 'Manage your food listings' : 'Claim available listings near you'}
            </p>
          </div>
          {role === 'DONOR' && (
            <button onClick={() => setShowForm(true)} className="btn-primary text-sm flex items-center gap-1">
              <span className="text-lg leading-none">+</span> New listing
            </button>
          )}
        </div>

        <div className="p-6">
          {/* Status filters */}
          <div className="flex gap-2 mb-5 flex-wrap">
            {['ACTIVE', 'CLAIMED', 'COMPLETED', 'EXPIRED'].map(s => (
              <button key={s} onClick={() => setFilter(s)}
                className={cn(
                  'px-3 py-1.5 rounded-full text-xs font-medium border transition-all',
                  filter === s ? 'bg-brand-400 text-white border-brand-400' : 'border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-brand-200 dark:border-brand-800/50'
                )}>
                {s.charAt(0) + s.slice(1).toLowerCase()}
              </button>
            ))}
          </div>

          {/* Listings */}
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-brand-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : listings.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-4xl mb-3">🍱</div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-1">No listings found</h3>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                {role === 'DONOR' ? 'Create your first food listing above' : 'Check back soon for new listings'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {listings.map((listing: any) => (
                <div key={listing.id} className="card p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-brand-50 dark:bg-brand-800/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 text-xl shrink-0">
                      🍱
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <h3 className="font-semibold text-slate-800 dark:text-slate-100">{listing.foodName}</h3>
                        <span className={cn('badge', STATUS_COLORS[listing.status] || 'badge-gray')}>
                          {listing.status}
                        </span>
                      </div>

                      {listing.description && (
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 line-clamp-1">{listing.description}</p>
                      )}

                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">
                          {listing.quantity} {listing.unit}
                        </span>
                        <span className="text-xs bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">
                          {listing.category}
                        </span>
                        {listing.isVegan && <span className="badge badge-green text-[10px]">Vegan</span>}
                        {listing.isHalal && <span className="badge badge-green text-[10px]">Halal</span>}
                        {listing.hasNuts && <span className="badge badge-amber text-[10px]">Contains nuts</span>}
                      </div>

                      <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                        <div className="text-xs text-slate-400 dark:text-slate-500">
                          📍 {listing.address} ·{' '}
                          {listing.status === 'ACTIVE'
                            ? <span>Closes: <strong className={timeLeft(listing.pickupEnd) === 'Expired' ? 'text-red-500' : 'text-slate-600 dark:text-slate-300'}>{timeLeft(listing.pickupEnd)}</strong></span>
                            : listing.status === 'COMPLETED'
                            ? <span className="text-brand-600 dark:text-brand-400 font-medium">Picked up ✓</span>
                            : null}
                        </div>

                        {listing.donor && role !== 'DONOR' && (
                          <div className="text-xs text-slate-400 dark:text-slate-500 flex items-center">
                            By <span className="font-medium text-slate-600 dark:text-slate-300 ml-1">{listing.donor.businessName || listing.donor.name}</span>
                            {listing.donor.isVerified && <VerifiedBadge className="w-3.5 h-3.5 ml-1 text-blue-500" />}
                            <span className="ml-1 text-brand-600 dark:text-brand-400">· Trust {listing.donor.trustScore}</span>
                          </div>
                        )}

                        <div className="flex gap-2">
                          {/* NGO can claim active listings */}
                          {role === 'NGO' && listing.status === 'ACTIVE' && (
                            <button
                              onClick={() => handleClaim(listing.id)}
                              disabled={claiming === listing.id}
                              className="btn-primary text-xs py-1.5 px-3"
                            >
                              {claiming === listing.id ? 'Claiming...' : 'Claim listing'}
                            </button>
                          )}

                          {/* Either side can mark complete */}
                          {listing.status === 'CLAIMED' && listing.transaction && (
                            <button
                              onClick={() => handleComplete(listing.id)}
                              className="btn-secondary text-xs py-1.5 px-3"
                            >
                              Mark complete
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Create listing modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-2xl overflow-y-auto max-h-[90vh] animate-fade-up">
            <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800">
              <h2 className="font-bold text-slate-900 dark:text-white">New food listing</h2>
              <button onClick={() => setShowForm(false)} className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:text-slate-300 text-2xl leading-none w-8 h-8 flex items-center justify-center">×</button>
            </div>

            <form onSubmit={handleCreate} className="p-5 space-y-4">
              <div>
                <label className="label">Food name *</label>
                <input className="input" placeholder="e.g. Dal Makhani + Basmati Rice"
                  value={form.foodName} onChange={e => setForm({ ...form, foodName: e.target.value })} required />
              </div>

              <div>
                <label className="label">Description (optional)</label>
                <textarea className="input resize-none" rows={2} placeholder="Any extra details..."
                  value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label">Quantity *</label>
                  <input type="number" className="input" placeholder="25" min="1"
                    value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })} required />
                </div>
                <div>
                  <label className="label">Unit</label>
                  <select className="input" value={form.unit} onChange={e => setForm({ ...form, unit: e.target.value })}>
                    {['portions', 'kg', 'boxes', 'litres', 'packets'].map(u => <option key={u}>{u}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label">Category</label>
                  <select className="input" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                    {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label">City</label>
                  <select className="input" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}>
                    {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label">Pickup starts *</label>
                  <input type="datetime-local" className="input" min={now}
                    value={form.pickupStart} onChange={e => setForm({ ...form, pickupStart: e.target.value })} required />
                </div>
                <div>
                  <label className="label">Pickup ends *</label>
                  <input type="datetime-local" className="input" min={form.pickupStart || now}
                    value={form.pickupEnd} onChange={e => setForm({ ...form, pickupEnd: e.target.value })} required />
                </div>
              </div>

              <div>
                <label className="label">Pickup address *</label>
                <input className="input" placeholder="Full address where food can be collected"
                  value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} required />
              </div>

              <div>
                <label className="label">Dietary info</label>
                <div className="flex gap-5">
                  {[
                    { key: 'isVegan', label: 'Vegan' },
                    { key: 'isHalal', label: 'Halal' },
                    { key: 'hasNuts', label: 'Contains nuts' },
                  ].map(({ key, label }) => (
                    <label key={key} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-brand-400"
                        checked={(form as any)[key]}
                        onChange={e => setForm({ ...form, [key]: e.target.checked })} />
                      <span className="text-xs text-slate-600 dark:text-slate-300">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-brand-50 dark:bg-brand-800/30 border border-brand-100 dark:border-brand-800/50 rounded-xl p-3">
                <div className="text-xs font-medium text-brand-700 dark:text-brand-400">🎉 You'll earn +10 Feed Points for this listing</div>
              </div>

              {error && <div className="bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-800/50 text-red-600 dark:text-red-400 text-xs px-3 py-2 rounded-lg">{error}</div>}

              <div className="flex gap-3 pt-1">
                <button type="button" onClick={() => setShowForm(false)} className="btn-ghost flex-1">Cancel</button>
                <button type="submit" disabled={submitting} className="btn-primary flex-1">
                  {submitting ? 'Creating...' : 'Create listing'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl text-sm font-medium flex items-center gap-2 z-50 animate-fade-up">
          <span className="text-brand-400">✓</span> {toast}
        </div>
      )}
    </div>
  )
}
