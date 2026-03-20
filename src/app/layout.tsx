import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'ZeroWaste Marketplace — Feed People, Waste Nothing',
  description: 'Connect surplus food from restaurants and hotels with verified NGOs across India.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
