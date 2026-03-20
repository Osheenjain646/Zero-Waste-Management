'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/ui/Sidebar'
import { cn, fmtDate } from '@/lib/utils'

const STATUS_STYLE: Record<string, string> = {
  PENDING:   'badge-amber',
  COMPLETED: 'badge-green',
  CANCELLED: 'badge-red',
}

function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState(0)
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(n => (
        <button key={n}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(n)}
          className="text-xl transition-transform hover:scale-110">
          <span className={(hover || value) >= n ? 'text-amber-400' : 'text-slate-200'}>★</span>
        </button>
      ))}
    </div>
  )
}

export default function TransactionsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const userId = (session?.user as any)?.id
  const role   = (session?.user as any)?.role

  const [txns, setTxns] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [ratingModal, setRatingModal] = useState<any>(null)
  const [score, setScore] = useState(0)
  const [comment, setComment] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => { if (status === 'unauthenticated') router.push('/auth/login') }, [status, router])

  function load() {
    fetch('/api/transactions').then(r => r.json()).then(d => { setTxns(d.transactions || []); setLoading(false) })
  }

  useEffect(() => { if (status === 'authenticated') load() }, [status])

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(''), 3000) }

  async function submitRating() {
    if (!score) return
    setSubmitting(true)
    const ratedId = role === 'DONOR' ? ratingModal.collectorId : ratingModal.donorId
    const res = await fetch('/api/ratings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ transactionId: ratingModal.id, ratedId, score, comment }),
    })
    const data = await res.json()
    setSubmitting(false)
    if (res.ok) {
      setRatingModal(null)
      setScore(0)
      setComment('')
      showToast(score === 5 ? 'Rating submitted! +15 Feed Points awarded 🎉' : 'Rating submitted!')
      load()
    } else {
      showToast(data.error || 'Could not submit rating')
    }
  }

  function alreadyRated(tx: any) {
    return tx.ratings?.some((r: any) => r.raterId === userId)
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="bg-white border-b border-slate-100 px-6 py-4">
          <h1 className="font-bold text-slate-900">Transaction History</h1>
          <p className="text-xs text-slate-400 mt-0.5">All your pickups and deliveries</p>
        </div>

        <div className="p-6 max-w-2xl">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-brand-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : txns.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-semibold text-slate-700 mb-1">No transactions yet</h3>
              <p className="text-sm text-slate-400">
                {role === 'DONOR' ? 'Create a listing to get started' : 'Claim a listing to see your history here'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {txns.map((tx: any) => {
                const canRate = tx.status === 'COMPLETED' && !alreadyRated(tx)
                const otherParty = role === 'DONOR' ? tx.collector : tx.donor

                return (
                  <div key={tx.id} className="card p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-800 truncate">{tx.listing?.foodName}</h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {tx.listing?.quantity} {tx.listing?.unit} · {tx.listing?.address?.split(',')[0]}
                        </p>
                      </div>
                      <span className={cn('badge shrink-0', STATUS_STYLE[tx.status] || 'badge-gray')}>
                        {tx.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 mb-3">
                      <span>Claimed: {fmtDate(tx.claimedAt)}</span>
                      {tx.completedAt && <span>Completed: {fmtDate(tx.completedAt)}</span>}
                    </div>

                    {otherParty && (
                      <div className="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2 mb-3">
                        <div className="text-xs text-slate-500">
                          {role === 'DONOR' ? 'Collected by' : 'Donated by'}:{' '}
                          <span className="font-medium text-slate-700">
                            {otherParty.businessName || otherParty.name}
                          </span>
                        </div>
                        <div className="text-xs text-brand-600">Trust {otherParty.trustScore}</div>
                      </div>
                    )}

                    {/* Existing ratings */}
                    {tx.ratings?.length > 0 && (
                      <div className="flex gap-1 mb-2">
                        {tx.ratings.map((r: any, i: number) => (
                          <span key={i} className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                            {'★'.repeat(r.score)} {r.comment && `· "${r.comment}"`}
                          </span>
                        ))}
                      </div>
                    )}

                    {canRate && (
                      <button
                        onClick={() => setRatingModal(tx)}
                        className="text-xs text-brand-600 border border-brand-200 px-3 py-1.5 rounded-lg hover:bg-brand-50 transition-colors"
                      >
                        Rate this {role === 'DONOR' ? 'collector' : 'donor'} →
                      </button>
                    )}
                    {alreadyRated(tx) && (
                      <span className="text-xs text-slate-400">You've rated this transaction ✓</span>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Rating modal */}
        {ratingModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 animate-fade-up">
              <h2 className="font-bold text-slate-900 mb-1">Rate this {role === 'DONOR' ? 'collector' : 'donor'}</h2>
              <p className="text-sm text-slate-400 mb-5">
                {ratingModal.listing?.foodName} · {fmtDate(ratingModal.claimedAt)}
              </p>

              <div className="flex justify-center mb-5">
                <StarRating value={score} onChange={setScore} />
              </div>

              <div className="mb-5">
                <label className="label">Comment (optional)</label>
                <textarea
                  className="input resize-none"
                  rows={3}
                  placeholder="How was the experience?"
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  maxLength={300}
                />
                <div className="text-xs text-slate-300 text-right mt-1">{comment.length}/300</div>
              </div>

              {score === 5 && (
                <div className="bg-brand-50 border border-brand-100 rounded-lg p-2 text-xs text-brand-700 mb-4 text-center">
                  🎉 5 stars! They'll earn +15 Feed Points
                </div>
              )}

              <div className="flex gap-3">
                <button onClick={() => { setRatingModal(null); setScore(0); setComment('') }} className="btn-ghost flex-1">
                  Cancel
                </button>
                <button
                  onClick={submitRating}
                  disabled={!score || submitting}
                  className="btn-primary flex-1"
                >
                  {submitting ? 'Submitting...' : 'Submit rating'}
                </button>
              </div>
            </div>
          </div>
        )}

        {toast && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl text-sm font-medium z-50 animate-fade-up">
            <span className="text-brand-400">✓</span> {toast}
          </div>
        )}
      </main>
    </div>
  )
}
