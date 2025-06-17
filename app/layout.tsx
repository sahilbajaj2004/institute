import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bajaj',
  description: 'The institute website made by sahil bajaj',
  icons: {
    icon: '/favicon.ico', // Make sure this path points to your favicon file
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Bajaj</title>
        <meta name="description" content="The institute website made by sahil bajaj" />
      </head>
      <body>{children}</body>
    </html>
  )
}
