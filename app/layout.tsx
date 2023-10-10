import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Workspace inspiration | Newsletter',
  description: 'Desafio #40 da Rocketseat #boraCodar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head></head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
