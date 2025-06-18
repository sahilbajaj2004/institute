import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Prerna Institution",
  description:
    "Welcome to Prerna Institution – Empowering minds, shaping futures with quality education and holistic development.",
  keywords:
    "Prerna Institution, education, school, learning, holistic development, academics, institute",
  openGraph: {
    title: "Prerna Institution - Empowering Minds",
    description:
      "Discover Prerna Institution: quality education, dedicated faculty, and a nurturing environment for student success.",
    url: "https://bajaj-institute.vercel.app/",
    siteName: "Prerna Institution",
    // images: [
    //   {
    //     img: "https://prernainstitution.com/images/banner.png",
    //     width: 800,
    //     height: 600,
    //     alt: "Prerna Institution Campus",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
