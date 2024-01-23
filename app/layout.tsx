import type { Metadata } from 'next';
import { Yantramanav } from 'next/font/google';
import './globals.scss';
import  'bootstrap/dist/css/bootstrap.css';

const inter = Yantramanav({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"]})

export const metadata: Metadata = {
    title: 'NPC - Ropa de EDM',
    description: 'Encuentra merch de tus djs favoritos para tus festivales favoritos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
