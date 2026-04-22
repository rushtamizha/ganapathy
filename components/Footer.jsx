import React from 'react'
import { 
  CarFront, MapPin, Phone, Mail, Clock, 
  ChevronRight, ExternalLink 
} from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  // Use your company constants here
  const PHONE = "+919626388683";

  return (
    <footer className="font-sans border-t bg-slate-950 text-slate-300 border-slate-900">
        <div className="grid gap-10 px-6 py-16 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden border rounded-xl border-slate-800">
                <Image 
                  src="/logo.jpg" 
                  alt="Sri Ganapathy Travels" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-lg font-black leading-none tracking-tighter text-white uppercase">
                  Sri Ganapathy
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold">
                  Travels
                </div>
              </div>
            </div>
            
            <p className="text-sm font-medium leading-relaxed text-slate-400">
              Pondicherry's premier transport partner. Specializing in reliable 
              Chennai Airport transfers and premium outstation tours across Tamil Nadu.
            </p>

            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Available 24/7 for Bookings</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <div className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">Services</div>
            <ul className="space-y-3 text-sm font-bold">
              {['Airport Taxi', 'Outstation Cabs', 'Local Rentals', 'Temple Tours', 'Corporate Travel'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="flex items-center gap-2 transition-colors group hover:text-amber-400">
                    <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-amber-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">Legal & Support</div>
            <ul className="space-y-3 text-sm font-bold">
              {['terms', 'privacy', 'refund', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`/${item}`} className="flex items-center gap-2 transition-colors group hover:text-amber-400 text-slate-400">
                    <ChevronRight className="w-3 h-3 text-slate-800 group-hover:text-amber-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <div className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">Contact HQ</div>
            <ul className="space-y-4 text-sm font-bold">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="leading-tight text-slate-400">113, Mission St, Heritage Town, Puducherry, 605001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500" />
                <a href={`tel:${PHONE}`} className="text-white hover:text-amber-400">{PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500" />
                <a href="mailto:Shajaramesh5@gmail.com" className="truncate text-slate-400 hover:text-amber-400">Shajaramesh5@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 bg-black/40">
          <div className="flex flex-col items-center justify-between gap-6 px-6 py-8 mx-auto max-w-7xl sm:flex-row">
            <div className="text-[11px] font-bold text-slate-600 uppercase tracking-widest text-center sm:text-left">
              © {new Date().getFullYear()} Sri Ganapathy Travels. All rights reserved.
              <div className="mt-1 opacity-50">GSTIN: 34AAAAA0000A1Z5</div>
            </div>
            
            {/* Developer Credit */}
            <a 
              href="https://wepzite.in" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 transition-all border rounded-full bg-slate-900/50 border-slate-800 group hover:border-amber-500/50"
            >
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">Developed by</span>
              <span className="text-xs font-black text-white transition-colors group-hover:text-amber-500">Wepzite.in</span>
              <ExternalLink className="w-3 h-3 text-slate-700 group-hover:text-amber-500" />
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer