'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '@/components/ui/accordion'
import {
  Plane, MapPin, Route, Clock, Calendar, Phone, MessageCircle, ArrowRight,
  ShieldCheck, Headphones, BadgeIndianRupee, Star, Award, CarFront,
  Users, Sparkles, Check, Menu, X, Mail, Facebook, Instagram, Twitter,
  ChevronRight, Quote, Car, Timer, Gauge, Snowflake, Wifi, CircleUserRound,
} from 'lucide-react'
import CarCard from '@/components/CarCard'
import BookingDialog from '@/components/BookingDialog'
import {
  AIRPORT_TAXIS, OUTSTATION_TAXIS, LOCAL_TAXIS, OUTSTATION_ROUTES,
  TESTIMONIALS, FAQS, CAR_IMAGES,
} from '@/lib/data'
import BookingForm from '@/components/BookingForm'

const PHONE = '+919626388683'
const WHATSAPP = '919626388683'

const App = () => {
  const [activeTrip, setActiveTrip] = useState('airport')
  const [bookingOpen, setBookingOpen] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [mobileMenu, setMobileMenu] = useState(false)

  const openBooking = (vehicle) => {
    setSelectedVehicle(vehicle || { name: 'Any Available Cab' })
    setBookingOpen(true)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top announcement bar */}
      <div className="hidden text-xs bg-slate-900 text-slate-100">
        <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              Pondycherry&apos;s most trusted taxi  Certified
            </span>
            <span className="inline-flex items-center gap-1 sm:hidden">
              <Sparkles className="w-3 h-3 text-amber-400" /> Trusted 
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-1 transition hover:text-amber-400">
              <Phone className="w-3 h-3" /> <span className="hidden sm:inline">{PHONE}</span>
            </a>
            <a href="mailto:Shajaramesh5@gmail.com" className="items-center hidden gap-1 transition md:inline-flex hover:text-amber-400">
              <Mail className="w-3 h-3" /> Shajaramesh5@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur-xl border-slate-100">
        <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 shadow-md rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-amber-200">
              <CarFront className="w-5 h-5 text-slate-900" />
            </div>
            <div className="leading-tight">
              <div className="text-xl font-bold uppercase text-slate-900">Sri Ganapathy Travels</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-amber-600 font-semibold"> Travels</div>
            </div>
          </a>

          <nav className="items-center hidden gap-8 text-sm font-medium lg:flex text-slate-700">
            <a href="#airport" className="transition hover:text-amber-600">Airport Taxi</a>
            <a href="#outstation" className="transition hover:text-amber-600">Outstation</a>
            <a href="#local" className="transition hover:text-amber-600">Local Rental</a>
            <a href="#routes" className="transition hover:text-amber-600">Popular Routes</a>
            <a href="#why" className="transition hover:text-amber-600">Why Us</a>
            <a href="#faq" className="transition hover:text-amber-600">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href={`tel:${PHONE}`} className="items-center hidden gap-2 px-3 py-2 text-sm font-medium transition md:inline-flex text-slate-700 hover:text-amber-600">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <Button onClick={() => openBooking(null)} className="hidden px-5 font-semibold text-amber-400 bg-slate-900 hover:bg-slate-800 md:flex">
              Book Now <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <button onClick={() => setMobileMenu(v => !v)} className="p-2 ml-1 border rounded-md lg:hidden border-slate-200">
              {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="bg-white border-t lg:hidden border-slate-100">
            <div className="flex flex-col gap-1 px-4 py-3 text-sm font-medium">
              {[['Airport Taxi','#airport'],['Outstation','#outstation'],['Local Rental','#local'],['Popular Routes','#routes'],['Why Us','#why'],['FAQ','#faq']].map(([l,h])=> (
                <a key={h} href={h} onClick={()=>setMobileMenu(false)} className="py-2 text-slate-700 hover:text-amber-600">{l}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="grid items-center gap-10 px-4 py-12 mx-auto max-w-7xl lg:py-20 lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-7">
            <Badge className="px-3 py-1 mb-5 font-semibold text-amber-800 bg-amber-100 border-amber-200 hover:bg-amber-100">
              <Star className="h-3.5 w-3.5 mr-1 fill-amber-500 text-amber-500" />
              4.9 / 5 rated on Google · 12,000+ happy riders
            </Badge>
            <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-slate-900 mb-5">
              Premium Taxi Service <br />
              for <span className="text-amber-600">Pondicherry</span> Travellers.
            </h1>
            <p className="max-w-xl mb-8 text-lg text-slate-600">
              Airport transfers, outstation journeys and local rentals — transparent fares, chauffeur-driven
              sedans, SUVs and Tempo Travellers. Available 24 × 7.
            </p>

            {/* Booking form */}
            <BookingForm/>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-slate-600">
              {[{icon: ShieldCheck, t: 'Verified Drivers'}, {icon: BadgeIndianRupee, t: 'Transparent Fare'}, {icon: Headphones, t: '24/7 Support'}, {icon: Award, t: 'ISO Certified'}].map(({icon: I, t}) => (
                <div key={t} className="inline-flex items-center gap-2">
                  <I className="w-4 h-4 text-amber-600" /> <span className="font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-3xl overflow-hidden card-shadow">
              <Image
                src={CAR_IMAGES.heroTaxi}
                alt="Premium taxi "
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 via-transparent to-transparent" />

              {/* Floating stats */}
              <div className="absolute px-3 py-2 border shadow-lg top-4 left-4 bg-white/95 backdrop-blur rounded-xl border-white/40">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Trips Completed</div>
                    <div className="font-bold text-slate-900">42,000+</div>
                  </div>
                </div>
              </div>
              <div className="absolute px-3 py-2 border shadow-lg bottom-4 right-4 bg-white/95 backdrop-blur rounded-xl border-white/40">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                    <Star className="w-4 h-4 text-amber-600 fill-amber-500" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Rated</div>
                    <div className="font-bold text-slate-900">4.9 / 5</div>
                  </div>
                </div>
              </div>
              <div className="absolute px-3 py-2 text-white shadow-lg bottom-4 left-4 bg-slate-900/90 backdrop-blur rounded-xl">
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold">Fast Arrival</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos / Ticker */}
      <section className="overflow-hidden bg-white border-y border-slate-100">
        <div className="py-5 overflow-hidden">
          <div className="flex ticker whitespace-nowrap">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex items-center gap-12 px-6 shrink-0">
                {['TCS','Infosys','Wipro','Flipkart','Accenture','Biocon','Bosch','Google','Amazon','Mercedes-Benz','Deloitte','KPMG'].map((brand)=>(
                  <span key={brand} className="text-xl tracking-widest text-slate-400">{brand}</span>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-2 text-xs font-medium text-center text-slate-400">Trusted by leading enterprises for employee transport</div>
        </div>
      </section>

      {/* AIRPORT TAXI */}
      <section id="airport" className="px-4 py-16 mx-auto max-w-7xl lg:py-24">
        <SectionHeader
          eyebrow="Airport Transfers"
          icon={Plane}
          title="Chennai Airport Taxi "
          subtitle="Choose from the wide range of Cab/Taxi with our airport taxi . Flat rates, no surge, meet-and-greet drivers."
        />
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {AIRPORT_TAXIS.map((v) => (
            <CarCard key={v.id} vehicle={v} variant="airport" onBook={openBooking} />
          ))}
        </div>
      </section>

      <section id="outstation" className="px-4 py-16 mx-auto max-w-7xl lg:py-24">
        <SectionHeader
          eyebrow="Outstation Cabs"
          icon={Route}
          title="Book Outstation Taxi Hire from Pondicherry"
          subtitle="Choose from the wide range of outstation taxi . Per-km pricing with driver bata. Round-trip or one-way."
        />
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {OUTSTATION_TAXIS.map((v) => (
            <CarCard key={v.id} vehicle={v} variant="outstation" onBook={openBooking} />
          ))}
        </div>
      </section>

      <section id="local" className="px-4 py-16 mx-auto max-w-7xl lg:py-24">
        <SectionHeader
          eyebrow="Local Rentals"
          icon={Car}
          title="Best Pondicherry Local Taxi Hire Service"
          subtitle="Choose from the wide range of Cab/Taxi with our local taxi . Hourly packages with flexible extensions."
        />
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {LOCAL_TAXIS.map((v) => (
            <CarCard key={v.id} vehicle={v} variant="local" onBook={openBooking} />
          ))}
        </div>
      </section>

      <section id="routes" className="bg-gradient-to-b from-amber-50/60 to-white border-y border-amber-100/70">
        <div className="px-4 py-16 mx-auto max-w-7xl lg:py-20">
          <SectionHeader
            eyebrow="Our Services Locations"
            icon={MapPin}
            title=""
            subtitle="Our most-booked outstation destinations with dedicated chauffeurs and all-inclusive pricing."
          />
          <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {OUTSTATION_ROUTES.map(r => (
              <div key={r.city} className="group relative rounded-2xl overflow-hidden border border-white shadow-sm hover:shadow-xl transition aspect-[4/3]">
                <Image src={r.img} alt={r.city} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                  <div className="mb-1 text-2xl font-bold">{r.city}</div>
                  <div className="flex items-center justify-between">


                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section id="why" className="text-white bg-slate-950">
        <div className="px-4 py-16 mx-auto max-w-7xl lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-4 text-amber-400 bg-amber-500/10 border-amber-500/20 hover:bg-amber-500/10">
                <Sparkles className="h-3.5 w-3.5 mr-1" /> Why Sri Ganapathy Travels
              </Badge>
              <h2 className="mb-5 text-3xl font-bold text-white lg:text-5xl">
                Seamless Travel, <span className="text-amber-400">Sophisticated Rides.</span>
              </h2>
              <p className="mb-8 text-lg text-slate-300">
                Over a decade of experience serving  Fortune 500 enterprises to families heading on
                holiday. Every ride is tracked, insured and delivered with absolute hospitality.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[{n:'42k+', l:'Trips / year'}, {n:'650+', l:'Verified Drivers'}, {n:'98%', l:'On-time Pickups'}].map(s => (
                  <div key={s.l} className="p-4 border rounded-xl bg-white/5 border-white/10">
                    <div className="text-3xl font-bold text-amber-400">{s.n}</div>
                    <div className="mt-1 text-xs tracking-wider uppercase text-slate-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {i: ShieldCheck, t:'Police-Verified Drivers', d:'Every chauffeur is background checked, trained and uniformed.'},
                {i: BadgeIndianRupee, t:'Zero Hidden Charges', d:'What you see is what you pay. Transparent pricing, always.'},
                {i: Snowflake, t:'Sanitized A/C Fleet', d:'Every cab is sanitized and serviced before each trip.'},
                {i: Gauge, t:'GPS Tracked Rides', d:'Real-time tracking shared with your loved ones for safety.'},
                {i: Headphones, t:'24 / 7 Support', d:'Our concierge team is one call away, round the clock.'},
                {i: CircleUserRound, t:'Dedicated Chauffeurs', d:'Same driver through your multi-day outstation trip.'},
              ].map(({i:I,t,d}) => (
                <div key={t} className="p-5 transition border rounded-xl bg-white/5 border-white/10 hover:bg-white/10">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg text-amber-400 bg-amber-500/15">
                    <I className="w-5 h-5" />
                  </div>
                  <div className="mb-1 font-semibold">{t}</div>
                  <div className="text-sm text-slate-400">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Popular Routes */}
      

      {/* LOCAL */}
      

      {/* How it works */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="px-4 py-16 mx-auto max-w-7xl lg:py-20">
          <SectionHeader
            eyebrow="Simple. Instant. Effortless."
            icon={Sparkles}
            title="Book your cab in under 60 seconds"
            subtitle="No sign-ups, no wait. Our concierge confirms your booking within 2 minutes over call."
          />
          <div className="grid gap-6 mt-10 md:grid-cols-4">
            {[
              {n:'01', i: MapPin, t:'Choose Trip Type', d:'Airport, Outstation or Local rental — pick what suits your journey.'},
              {n:'02', i: CarFront, t:'Select Your Cab', d:'Sedan, SUV or Tempo Traveller. Transparent fares shown upfront.'},
              {n:'03', i: Calendar, t:'Share Details', d:'Enter pickup, drop, date & time. No account required.'},
              {n:'04', i: CheckMark, t:'Ride in Comfort', d:'Verified chauffeur arrives on time. Pay cash, UPI or card.'},
            ].map(({n,i:I,t,d}) => (
              <div key={n} className="relative p-6 bg-white border rounded-2xl border-slate-100 card-shadow">
                <div className="absolute flex items-center justify-center w-10 h-10 text-sm font-bold text-amber-400 -top-3 -right-3 rounded-xl bg-slate-900">{n}</div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-amber-700 bg-amber-100 rounded-xl">
                  <I className="w-6 h-6" />
                </div>
                <div className="mb-1 text-lg font-semibold text-slate-900">{t}</div>
                <div className="text-sm text-slate-600">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 mx-auto max-w-7xl lg:py-24">
        <SectionHeader
          eyebrow="Rider Stories"
          icon={Quote}
          title="Loved by 12,000+ Customers"
          subtitle="From business travellers to weekend-getaway families — here’s what they say."
        />
        <div className="grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="relative p-6 bg-white border rounded-2xl border-slate-100 card-shadow">
              <Quote className="absolute w-8 h-8 text-amber-100 top-4 right-4" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_,i)=>(<Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-700">“{t.text}”</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-center w-10 h-10 font-bold rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-slate-900">
                  {t.name.split(' ').map(x=>x[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 pb-16 mx-auto max-w-7xl">
        <div className="relative p-8 overflow-hidden text-white rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 lg:p-14">
          <div className="absolute rounded-full -top-16 -right-16 h-72 w-72 bg-amber-500/20 blur-3xl" />
          <div className="absolute rounded-full -bottom-20 -left-20 h-72 w-72 bg-amber-500/10 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => openBooking(null)} className="h-12 px-6 font-bold bg-amber-500 hover:bg-amber-600 text-slate-900">
                  Book My Ride <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
                <a href={`tel:${PHONE}`} className="inline-flex items-center h-12 px-6 font-semibold border rounded-md border-white/20 hover:bg-white/10">
                  <Phone className="w-4 h-4 mr-2" /> Call {PHONE}
                </a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="inline-flex items-center h-12 px-6 font-semibold text-white rounded-md bg-emerald-500 hover:bg-emerald-600">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{i:Plane, t:'Airport Pick/Drop'},{i:Route,t:'Outstation Trips'},{i:Car,t:'Local Rentals'},{i:Users,t:'Group Travel'}].map(({i:I,t})=>(
                <div key={t} className="p-5 text-center transition border rounded-2xl border-white/10 bg-white/5 hover:bg-white/10">
                  <I className="w-8 h-8 mx-auto mb-2 text-amber-400" />
                  <div className="font-semibold">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl px-4 py-16 mx-auto lg:py-24">
        <SectionHeader
          eyebrow="Frequently Asked"
          icon={CheckMark}
          title="Your questions, answered."
          subtitle="Everything you need to know before booking your Bengaluru taxi."
        />
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`i${i}`} className="px-5 bg-white border border-slate-200 rounded-xl">
              <AccordionTrigger className="py-4 font-semibold text-left text-slate-900 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-slate-600">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300">
        <div className="grid gap-10 px-4 mx-auto max-w-7xl py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                <CarFront className="w-5 h-5 text-slate-900" />
              </div>
              <div>
                <div className="text-lg font-bold text-white uppercase">Sri Ganapathy Travels</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-amber-400">Travels</div>
              </div>
            </div>
            <p className="mb-4 text-sm text-slate-400">
              Pondycherry's most trusted premium taxi  Airport, outstation and local rentals with
              transparent pricing and verified chauffeurs.
            </p>
            <div className="flex items-center hidden gap-3">
              {[Facebook, Instagram, Twitter].map((I, i) => (
                <a key={i} href="#" className="flex items-center justify-center transition rounded-full h-9 w-9 bg-white/5 hover:bg-amber-500 hover:text-slate-900">
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 font-semibold text-white">Services</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#airport" className="hover:text-amber-400">Airport Taxi</a></li>
              <li><a href="#outstation" className="hover:text-amber-400">Outstation Cabs</a></li>
              <li><a href="#local" className="hover:text-amber-400">Local Rentals</a></li>
              <li><a href="#routes" className="hover:text-amber-400">Popular Routes</a></li>
              <li><a href="#" className="hover:text-amber-400">Corporate Travel</a></li>
              <li><a href="#" className="hover:text-amber-400">Wedding & Events</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-4 font-semibold text-white">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#why" className="hover:text-amber-400">Why Choose Us</a></li>
              <li><a href="#faq" className="hover:text-amber-400">FAQ</a></li>
              <li><a href="#" className="hover:text-amber-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-400">Refund Policy</a></li>
              <li><a href="#" className="hover:text-amber-400">Careers</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-4 font-semibold text-white">Reach Us</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" /> 113, Mission St, Heritage Town, Puducherry, 605001</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-400" /> <a href={`tel:${PHONE}`} className="hover:text-amber-400">{PHONE}</a></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-amber-400" /> <a href="mailto:Shajaramesh5@gmail.com" className="hover:text-amber-400">Shajaramesh5@gmail.com</a></li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-400" /> 24 × 7 · All days</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-3 px-4 py-5 mx-auto text-xs max-w-7xl sm:flex-row text-slate-500">
            <div>© {new Date().getFullYear()} Sri Ganapathy Travels. All rights reserved.</div>
            <div>GSTIN: 29AAAAA0000A1Z5 · PAN: AAAAA0000A</div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank" rel="noreferrer"
        className="fixed z-40 flex items-center justify-center text-white transition rounded-full shadow-xl bottom-6 right-6 h-14 w-14 bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/40 hover:scale-110"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-40 animate-ping"></span>
      </a>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} vehicle={selectedVehicle} />
    </div>
  )
}

function SectionHeader({ eyebrow, icon: Icon, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase border rounded-full text-amber-700 border-amber-100 bg-amber-50">
        {Icon ? <Icon className="h-3.5 w-3.5" /> : null} {eyebrow}
      </div>
      <h2 className="mb-3 text-3xl font-bold leading-tight lg:text-5xl text-slate-900">
        {title}
      </h2>
      <p className="hidden text-base text-slate-600 lg:text-lg">{subtitle}</p>
      <div className="w-20 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300" />
    </div>
  )
}

function CheckMark(props) {
  return <Check {...props} />
}

export default App
