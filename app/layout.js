import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'Sri Ganapathy Travels — Premium Airport, Outstation & Local Taxi in pondycherry and tamil nadu',
  description: 'Book reliable and premium airport, outstation and local taxi services in Pondycherry. Transparent fares, verified drivers, 24x7 support. Sedan, SUV, Innova, Tempo Traveller.',
  keywords: 'pondycherry airport taxi, outstation cab pondycherry, Innova Crysta rental, Tempo Traveller pondycherry, taxi booking pondycherry',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
