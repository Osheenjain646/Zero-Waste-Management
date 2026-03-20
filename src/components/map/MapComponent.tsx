'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { timeLeft } from '@/lib/utils'

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

function makeIcon(isExpiring: boolean, isSelected: boolean) {
  const color = isExpiring ? '#EF9F27' : '#1D9E75'
  const size = isSelected ? 16 : 10
  return L.divIcon({
    className: '',
    html: `<div style="
      width:${size}px;height:${size}px;
      background:${color};border:2px solid white;
      border-radius:50%;
      box-shadow:0 2px 8px ${color}80;
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  })
}

function FlyTo({ listings, selectedId }: { listings: any[]; selectedId?: string }) {
  const map = useMap()
  useEffect(() => {
    const l = listings.find(x => x.id === selectedId)
    if (l) map.flyTo([l.latitude, l.longitude], 16, { duration: 0.8 })
  }, [selectedId])
  return null
}

interface Props {
  listings: any[]
  selectedId?: string | null
  onSelect?: (id: string) => void
  canClaim?: boolean
  onClaim?: (id: string) => void
}

export default function MapComponent({ listings, selectedId, onSelect, canClaim, onClaim }: Props) {
  const center: [number, number] = [19.076, 72.8777]

  return (
    <MapContainer center={center} zoom={13}
      style={{ height: '100%', width: '100%', minHeight: 400, borderRadius: 12 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://openstreetmap.org">OpenStreetMap</a>'
      />
      <FlyTo listings={listings} selectedId={selectedId ?? undefined} />
      <Circle center={center} radius={5000}
        pathOptions={{ color: '#1D9E75', fillColor: '#1D9E75', fillOpacity: 0.04, weight: 1, dashArray: '4 4' }} />
      {listings.map(l => (
        <Marker key={l.id} position={[l.latitude, l.longitude]}
          icon={makeIcon(isExpiringSoon(l.pickupEnd), selectedId === l.id)}
          eventHandlers={{ click: () => onSelect?.(l.id) }}>
          <Popup maxWidth={250} closeButton={false}>
            <div style={{ fontFamily: 'Sora,sans-serif', padding: 14, minWidth: 210 }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: '#2C2C2A', marginBottom: 6 }}>{l.foodName}</div>
              <div style={{ fontSize: 11, color: '#888780', marginBottom: 6 }}>
                {l.quantity} {l.unit} · {l.address?.split(',')[0]}
              </div>
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 8 }}>
                {l.isVegan && <span style={{ background: '#E1F5EE', color: '#0F6E56', fontSize: 10, padding: '2px 6px', borderRadius: 20, fontWeight: 500 }}>Vegan</span>}
                {l.isHalal && <span style={{ background: '#E1F5EE', color: '#0F6E56', fontSize: 10, padding: '2px 6px', borderRadius: 20, fontWeight: 500 }}>Halal</span>}
                {l.hasNuts && <span style={{ background: '#FAEEDA', color: '#854F0B', fontSize: 10, padding: '2px 6px', borderRadius: 20 }}>Nuts</span>}
              </div>
              <div style={{ fontSize: 11, color: '#888780', marginBottom: 8 }}>
                Donor: <strong>{l.donor?.businessName || l.donor?.name}</strong>
                {l.donor?.trustScore && <span style={{ marginLeft: 4, color: '#1D9E75' }}>· Trust {l.donor.trustScore}</span>}
              </div>
              <div style={{ fontSize: 11, color: '#888780', marginBottom: 10 }}>
                Closes: <strong>{timeLeft(l.pickupEnd)}</strong>
              </div>
              {canClaim && l.status === 'ACTIVE' && (
                <button
                  style={{ width: '100%', background: '#1D9E75', color: 'white', border: 'none', borderRadius: 8, padding: '8px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}
                  onClick={() => onClaim?.(l.id)}
                >
                  Claim listing →
                </button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

function isExpiringSoon(date: string | Date) {
  const d = new Date(date)
  const diff = d.getTime() - Date.now()
  return diff > 0 && diff < 3600000
}
