'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/react'
import Sidebar from '@/components/ui/Sidebar'
import { cn, timeLeft } from '@/lib/utils'

const MapComponent = dynamic(() => import('@/components/map/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="flex-1 flex items-center justify-center bg-slate-100 rounded-xl">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-brand-400 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
        <p className="text-xs text-slate-400">Loading map...</p>
      </div>
    </div>
  ),
})

export default function MapPage() {
  const { data: session } = useSession()
  const role = (session?.user as any)?.role

  const [listings, setListings] = useState<any[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [vegan, setVegan] = useState(false)
  const [halal, setHalal] = useState(false)
  const [toast, setToast] = useState('')
  const [claiming, setClaiming] = useState<string | null>(null)

  function fetchListings() {
    const params = new URLSearchParams({ status: 'ACTIVE' })
    if (vegan) params.set('vegan', 'true')
    fetch(`/api/listings?${params}`)
      .then(r => r.json())
      .then(d => setListings(d.listings || []))
  }

  useEffect(() => { fetchListings() }, [vegan, halal])

  const filteredListings = halal ? listings.filter(l => l.isHalal) : listings

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  async function handleClaim(id: string) {
    setClaiming(id)
    const res = await fetch(`/api/listings/${id}/claim`, { method: 'POST' })
    const data = await res.json()
    setClaiming(null)
    if (res.ok) {
      showToast('Claimed! Coordinate with donor for pickup.')
      fetchListings()
    } else {
      showToast(data.error || 'Could not claim listing')
    }
  }

  const selectedListing = listings.find(l => l.id === selected)

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <h1 className="font-bold text-slate-900">Live Map</h1>
            <p className="text-xs text-slate-400 mt-0.5">{filteredListings.length} active listings</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-100">
            <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-pulse" /> Live
          </span>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Filters + listing list */}
          <div className="w-64 shrink-0 bg-white border-r border-slate-100 flex flex-col overflow-y-auto">
            <div className="p-4 space-y-4 border-b border-slate-100">
              <div className="text-xs font-medium text-slate-600 mb-2">Dietary filters</div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={vegan} onChange={e => setVegan(e.target.checked)} className="accent-brand-400" />
                  <span className="text-xs text-slate-600">Vegan only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={halal} onChange={e => setHalal(e.target.checked)} className="accent-brand-400" />
                  <span className="text-xs text-slate-600">Halal only</span>
                </label>
              </div>
              <div className="text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-brand-400 rounded-full" /> Active</div>
                <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-amber-400 rounded-full" /> Expiring soon</div>
              </div>
            </div>

            <div className="flex-1 p-3 space-y-2">
              {filteredListings.length === 0 ? (
                <p className="text-xs text-slate-400 text-center py-8">No active listings</p>
              ) : filteredListings.map(l => (
                <button key={l.id} onClick={() => setSelected(l.id)}
                  className={cn(
                    'w-full text-left p-3 rounded-xl border transition-all',
                    selected === l.id ? 'border-brand-200 bg-brand-50' : 'border-slate-100 bg-white hover:border-slate-200'
                  )}>
                  <div className="font-medium text-slate-800 text-xs truncate">{l.foodName}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{l.quantity} {l.unit}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5 truncate">{l.address?.split(',')[0]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="flex-1 relative p-3">
            <MapComponent
              listings={filteredListings}
              selectedId={selected}
              onSelect={setSelected}
              canClaim={role === 'NGO'}
              onClaim={handleClaim}
            />

            {/* Selected popup */}
            {selectedListing && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-80 card p-4 shadow-xl z-[1000] animate-fade-up">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-slate-800 text-sm">{selectedListing.foodName}</h3>
                  <button onClick={() => setSelected(null)} className="text-slate-300 hover:text-slate-500 text-xl leading-none ml-2">×</button>
                </div>
                <p className="text-xs text-slate-400 mb-2">📍 {selectedListing.address}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="badge badge-gray text-[10px]">{selectedListing.quantity} {selectedListing.unit}</span>
                  {selectedListing.isVegan && <span className="badge badge-green text-[10px]">Vegan</span>}
                  {selectedListing.isHalal && <span className="badge badge-green text-[10px]">Halal</span>}
                </div>
                <p className="text-xs text-slate-400 mb-3">
                  Closes: <strong>{timeLeft(selectedListing.pickupEnd)}</strong>
                  {' · '}By <strong>{selectedListing.donor?.businessName || selectedListing.donor?.name}</strong>
                </p>
                {role === 'NGO' && selectedListing.status === 'ACTIVE' && (
                  <button
                    onClick={() => handleClaim(selectedListing.id)}
                    disabled={claiming === selectedListing.id}
                    className="btn-primary w-full text-sm py-2"
                  >
                    {claiming === selectedListing.id ? 'Claiming...' : 'Claim this listing →'}
                  </button>
                )}
                {!session && (
                  <p className="text-xs text-slate-400 text-center">
                    <a href="/auth/login" className="text-brand-600 hover:underline">Log in as NGO</a> to claim
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl text-sm font-medium flex items-center gap-2 z-50 animate-fade-up">
          <span className="text-brand-400">✓</span> {toast}
        </div>
      )}
    </div>
  )
}
