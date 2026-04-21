"use client";

import React, { useState, useRef } from 'react';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
import { 
  Plane, Route, MapPin, Calendar, Clock, 
  ArrowRight, MessageSquare, Loader2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Assuming shadcn path
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LIBRARIES = ['places'];

const BookingForm = () => {
  const [activeTrip, setActiveTrip] = useState('airport');
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    date: '',
    time: ''
  });

  // Google Maps API Loader
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: LIBRARIES,
  });

  const pickupRef = useRef(null);
  const dropRef = useRef(null);

  const handlePlaceChanged = (type) => {
    const autocomplete = type === 'pickup' ? pickupRef.current : dropRef.current;
    if (autocomplete) {
      const place = autocomplete.getPlace();
      setFormData(prev => ({ 
        ...prev, 
        [type]: place.formatted_address || place.name 
      }));
    }
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919789335689"; // Replace with your business number
    const message = `*New Booking Request*%0A` +
      `--------------------------%0A` +
      `*Service:* ${activeTrip.toUpperCase()}%0A` +
      `*Pickup:* ${formData.pickup}%0A` +
      `*Drop:* ${formData.drop}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Time:* ${formData.time}%0A` +
      `--------------------------%0A` +
      `Please confirm the available cabs.`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isLoaded) return <div className="flex items-center justify-center h-64 bg-white border rounded-2xl border-slate-100"><Loader2 className="animate-spin text-amber-500" /></div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl p-2 bg-white border rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-slate-100 lg:p-4"
    >
      <Tabs defaultValue="airport" onValueChange={setActiveTrip} className="w-full">
        <TabsList className="grid w-full h-auto grid-cols-3 p-1.5 bg-slate-50 rounded-2xl mb-4">
          <TabsTrigger value="airport" className="data-[state=active]:bg-white data-[state=active]:text-amber-700 data-[state=active]:shadow-sm py-3 rounded-xl font-bold text-xs sm:text-sm transition-all">
            <Plane className="w-4 h-4 mr-2" />Airport
          </TabsTrigger>
          <TabsTrigger value="outstation" className="data-[state=active]:bg-white data-[state=active]:text-amber-700 data-[state=active]:shadow-sm py-3 rounded-xl font-bold text-xs sm:text-sm transition-all">
            <Route className="w-4 h-4 mr-2" />Outstation
          </TabsTrigger>
          <TabsTrigger value="local" className="data-[state=active]:bg-white data-[state=active]:text-amber-700 data-[state=active]:shadow-sm py-3 rounded-xl font-bold text-xs sm:text-sm transition-all">
            <MapPin className="w-4 h-4 mr-2" />Local
          </TabsTrigger>
        </TabsList>

        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Pickup Address */}
            <div className="space-y-1.5">
              <Label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold ml-1">
                <MapPin className="inline w-3 h-3 mr-1 text-amber-500" />Pickup Location
              </Label>
              <Autocomplete
                onLoad={(ref) => (pickupRef.current = ref)}
                onPlaceChanged={() => handlePlaceChanged('pickup')}
              >
                <Input 
                  placeholder="Area, Apartment or Hotel" 
                  className="h-12 font-medium border-none bg-slate-50 focus-visible:ring-2 focus-visible:ring-amber-500/20 rounded-xl"
                  onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                />
              </Autocomplete>
            </div>

            {/* Drop Address */}
            <div className="space-y-1.5">
              <Label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold ml-1">
                <MapPin className="inline w-3 h-3 mr-1 text-amber-500" />
                {activeTrip === 'local' ? 'Landmark' : 'Drop Location'}
              </Label>
              <Autocomplete
                onLoad={(ref) => (dropRef.current = ref)}
                onPlaceChanged={() => handlePlaceChanged('drop')}
              >
                <Input 
                  placeholder={activeTrip === 'local' ? 'Area / Landmark' : 'Destination Address'} 
                  className="h-12 font-medium border-none bg-slate-50 focus-visible:ring-2 focus-visible:ring-amber-500/20 rounded-xl"
                  onChange={(e) => setFormData({...formData, drop: e.target.value})}
                />
              </Autocomplete>
            </div>

            {/* Date Picker */}
            <div className="space-y-1.5">
              <Label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold ml-1">
                <Calendar className="inline w-3 h-3 mr-1 text-amber-500" />Travel Date
              </Label>
              <Input 
                type="date" 
                className="h-12 font-medium border-none bg-slate-50 focus-visible:ring-2 focus-visible:ring-amber-500/20 rounded-xl"
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>

            {/* Time Picker */}
            <div className="space-y-1.5">
              <Label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold ml-1">
                <Clock className="inline w-3 h-3 mr-1 text-amber-500" />Pickup Time
              </Label>
              <Input 
                type="time" 
                className="h-12 font-medium border-none bg-slate-50 focus-visible:ring-2 focus-visible:ring-amber-500/20 rounded-xl"
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>
          </div>

          <Button
            onClick={handleWhatsAppRedirect}
            className="w-full text-base font-black text-white transition-all duration-300 shadow-lg h-14 bg-slate-900 hover:bg-amber-600 rounded-2xl group shadow-slate-200"
          >
            Check Available Cabs 
            <MessageSquare className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
          </Button>
          
          <p className="text-[10px] text-center text-slate-400 font-medium">
            * Instant confirmation via WhatsApp. No hidden charges.
          </p>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default BookingForm;