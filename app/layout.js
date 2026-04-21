import './globals.css'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'

// This is the closest free/legal alternative to Google Sans
const googleSansAlternative = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-google-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Sri Ganapathy Travels | Premium Taxi Services in Pondicherry & TN',
    template: '%s | Sri Ganapathy Travels'
  },
  description: 'Experience premium travel with Sri Ganapathy Travels. Specialized in Pondicherry to Chennai Airport drops, luxury outstation tours, and local rentals across Tamil Nadu.',
  keywords: [
    'Pondicherry Airport Taxi', 
    'Chennai to Pondicherry Taxi', 
    'Sri Ganapathy Travels', 
    'Innova Crysta Rental Pondicherry', 
    'Tamil Nadu Temple Tours',
    'Premium Cab Service Pondicherry'
  ],
  authors: [{ name: 'Wepzite Digital' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${googleSansAlternative.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        {/* Performance & Error Handling Script */}
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="antialiased  bg-slate-50/30 text-slate-900 selection:bg-amber-100 selection:text-amber-900">
        <main className="relative min-h-screen">
          {children}
        </main>
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  )
}