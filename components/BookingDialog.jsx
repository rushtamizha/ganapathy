

'use client'

import { useState, useRef } from 'react'
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import {
  Car, MapPin, Calendar, Clock, Phone, User, CheckCircle2, Sparkles, Loader2
} from 'lucide-react'

const LIBRARIES = ['places'];

export default function BookingDialog({ open, onOpenChange, vehicle }) {
  const [submitting, setSubmitting] = useState(false)
  
  // State for form data to sync with Autocomplete
  const [locations, setLocations] = useState({ from: '', to: '' });

  // Refs for Google Autocomplete instances
  const pickupRef = useRef(null);
  const dropRef = useRef(null);

  // Load Google Maps Script
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: LIBRARIES,
  });

  const onPlaceChanged = (type) => {
    const autocomplete = type === 'from' ? pickupRef.current : dropRef.current;
    if (autocomplete) {
      const place = autocomplete.getPlace();
      setLocations(prev => ({ 
        ...prev, 
        [type]: place.formatted_address || place.name 
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Formatting data for WhatsApp or Backend
    const bookingDetails = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      from: locations.from || formData.get('from'),
      to: locations.to || formData.get('to'),
      date: formData.get('date'),
      time: formData.get('time'),
      notes: formData.get('notes'),
      vehicle: vehicle?.name
    };

    setSubmitting(true);
    
    // Create WhatsApp Message
    const text = `*New Booking Request*%0A*Vehicle:* ${bookingDetails.vehicle}%0A*Name:* ${bookingDetails.name}%0A*Phone:* ${bookingDetails.phone}%0A*From:* ${bookingDetails.from}%0A*To:* ${bookingDetails.to}%0A*Date:* ${bookingDetails.date}%0A*Time:* ${bookingDetails.time}`;
    
    await new Promise(r => setTimeout(r, 900));
    
    window.open(`https://wa.me/919626388683?text=${text}`, '_blank');
    
    setSubmitting(false);
    onOpenChange(false);
    toast.success('Redirecting to WhatsApp...', {
      description: `Confirm your ${vehicle?.name} booking with our agent.`,
      icon: <CheckCircle2 className="w-5 h-5" />,
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg overflow-hidden bg-white border-amber-100">
        {!isLoaded ? (
          <div className="h-[400px] flex flex-col items-center justify-center gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
            <p className="text-sm font-medium text-slate-500">Initializing Secure Booking...</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1 text-amber-600">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-semibold tracking-wider uppercase">Premium Service</span>
              </div>
              <DialogTitle className="text-2xl">
                Book {vehicle?.name || 'Your Cab'}
              </DialogTitle>
              <DialogDescription>
                Select your addresses from the dropdown for accurate pricing.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="pt-2 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-bold text-slate-500"><User className="inline w-3 h-3 mr-1" />Full Name</Label>
                  <Input id="name" name="name" required placeholder="Name" className="h-11 bg-slate-50/50 border-slate-200 focus:ring-amber-500" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs font-bold text-slate-500"><Phone className="inline w-3 h-3 mr-1" />Mobile</Label>
                  <Input id="phone" name="phone" required type="tel" placeholder="Phone" className="h-11 bg-slate-50/50 border-slate-200" />
                </div>
              </div>

              {/* Pickup with Autocomplete */}
              <div className="space-y-1.5">
                <Label htmlFor="from" className="text-xs font-bold text-slate-500"><MapPin className="inline w-3 h-3 mr-1 text-red-500" />Pickup Location</Label>
                <Autocomplete
                  onLoad={(ref) => (pickupRef.current = ref)}
                  onPlaceChanged={() => onPlaceChanged('from')}
                  options={{ componentRestrictions: { country: "IN" } }}
                >
                  <Input 
                    id="from" 
                    name="from" 
                    required 
                    placeholder="Search Pickup Area..." 
                    className="h-11 bg-slate-50/50 border-slate-200"
                  />
                </Autocomplete>
              </div>

              {/* Drop with Autocomplete */}
              <div className="space-y-1.5">
                <Label htmlFor="to" className="text-xs font-bold text-slate-500"><MapPin className="inline w-3 h-3 mr-1 text-green-500" />Drop Location</Label>
                <Autocomplete
                  onLoad={(ref) => (dropRef.current = ref)}
                  onPlaceChanged={() => onPlaceChanged('to')}
                  options={{ componentRestrictions: { country: "IN" } }}
                >
                  <Input 
                    id="to" 
                    name="to" 
                    required 
                    placeholder="Search Destination..." 
                    className="h-11 bg-slate-50/50 border-slate-200"
                  />
                </Autocomplete>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="date" className="text-xs font-bold text-slate-500"><Calendar className="inline w-3 h-3 mr-1" />Pickup Date</Label>
                  <Input id="date" name="date" required type="date" className="h-11 bg-slate-50/50 border-slate-200" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="time" className="text-xs font-bold text-slate-500"><Clock className="inline w-3 h-3 mr-1" />Pickup Time</Label>
                  <Input id="time" name="time" required type="time" className="h-11 bg-slate-50/50 border-slate-200" />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="notes" className="text-xs font-bold text-slate-500">Special Requests</Label>
                <Textarea id="notes" name="notes" placeholder="Extra luggage, child seat, etc." className="min-h-[60px] bg-slate-50/50" />
              </div>

              <div className="flex items-center justify-between px-4 py-3 text-white shadow-inner rounded-xl bg-slate-900">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-white/10 rounded-lg">
                    <Car className="w-4 h-4 text-amber-400" />
                  </div>
                  <span className="text-sm font-bold">{vehicle?.name || 'Vehicle'}</span>
                </div>
                <div className="text-sm font-black text-amber-400">
                  {vehicle?.fare ? (typeof vehicle.fare === 'number' ? `₹${vehicle.fare}` : vehicle.fare) : 'Contact for Fare'}
                </div>
              </div>

              <Button type="submit" disabled={submitting}
                className="w-full h-12 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-black text-base shadow-lg shadow-amber-200 transition-all active:scale-[0.98]">
                {submitting ? (
                  <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Processing...</span>
                ) : (
                  'Confirm & Send to WhatsApp'
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
