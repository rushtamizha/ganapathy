'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Users, Luggage, Snowflake, Phone, MessageCircle,
  Route, BadgeIndianRupee, Clock, ShieldCheck, Sparkles, ArrowRight,
} from 'lucide-react'

const PHONE = '+919626388683'
const WHATSAPP = '919626388683'

export default function CarCard({ vehicle, variant = 'airport', onBook }) {
  const waText = encodeURIComponent(`Hi, I'd like to book the ${vehicle.name}. Please share availability.`)

  return (
    <div className="overflow-hidden transition-all duration-300 bg-white border group rounded-2xl border-slate-200 ">
      <div className="relative overflow-hidden h-44 bg-gradient-to-br from-amber-50 via-white to-slate-50">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        {vehicle.tag && (
          <Badge className="absolute top-3 left-3 bg-slate-900 text-amber-400 hover:bg-slate-900 border-0 shadow-md px-2.5 py-1 text-[10px] font-bold tracking-wide">
            <Sparkles className="w-3 h-3 mr-1" />{vehicle.tag.toUpperCase()}
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm border border-slate-100">
          <Users className="h-3.5 w-3.5 text-slate-700" />
          <span className="text-xs font-bold text-slate-800">{vehicle.seats}</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className=" text-lg font-semibold leading-snug text-slate-900">
            {vehicle.name}
          </h3>
        </div>

        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider mr-1">Fare</span>
          <span className="text-2xl font-bold text-slate-900">₹{Number(vehicle.fare).toLocaleString('en-IN')}.00</span>
          {variant === 'outstation' && <span className="text-sm font-medium text-slate-500">/km</span>}
        </div>

        <div className="mb-5 space-y-2 text-sm">
          {variant === 'airport' && (
            <>
              <Spec icon={BadgeIndianRupee} label="Toll" value={vehicle.toll} />
              <Spec icon={Luggage} label="Luggage" value={vehicle.seats?.startsWith('12') ? 'XL Space' : vehicle.seats?.startsWith('7') ? 'Large' : 'Standard'} />
            </>
          )}
          {variant === 'outstation' && (
            <>
              <Spec icon={BadgeIndianRupee} label="Driver Bata" value={`₹${vehicle.bata}.00/day`} />
              <Spec icon={ShieldCheck} label="Includes" value="Toll & Parking Extra" />
            </>
          )}
          {variant === 'local' && (
            <>
              <Spec icon={Clock} label="Package" value={vehicle.included} />
              <Spec icon={Route} label="Extra /km" value={`₹${vehicle.extraKm}.00`} />
              <Spec icon={Clock} label="Extra /hr" value={`₹${vehicle.extraHr}.00`} />
            </>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Button
            onClick={() => onBook?.(vehicle)}
            className="h-10 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-amber-400"
          >
            Book <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </Button>
          <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center h-10 text-xs font-semibold transition bg-white border rounded-md border-slate-200 hover:bg-slate-50 text-slate-900">
            <Phone className="h-3.5 w-3.5 mr-1 text-amber-600" /> Call
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${waText}`}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center h-10 text-xs font-semibold text-white transition rounded-md bg-emerald-500 hover:bg-emerald-600"
          >
            <MessageCircle className="h-3.5 w-3.5 mr-1" /> WA
          </a>
        </div>
      </div>
    </div>
  )
}

function Spec({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between text-slate-700">
      <span className="inline-flex items-center gap-1.5 text-slate-500">
        <Icon className="h-3.5 w-3.5" /> {label}
      </span>
      <span className="font-medium text-slate-800">{value}</span>
    </div>
  )
}
