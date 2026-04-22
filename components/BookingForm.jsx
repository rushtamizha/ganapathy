// "use client";

// import React, { useState, useRef } from 'react';
// import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
// import { 
//   Plane, Route, MapPin, Calendar, Clock, 
//   ArrowRight, MessageSquare, Loader2 
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Assuming shadcn path
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const LIBRARIES = ['places'];

// const BookingForm = () => {
//   const [activeTrip, setActiveTrip] = useState('airport');
//   const [formData, setFormData] = useState({
//     pickup: '',
//     drop: '',
//     date: '',
//     time: ''
//   });

//   // Google Maps API Loader
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
//     libraries: LIBRARIES,
//   });

//   const pickupRef = useRef(null);
//   const dropRef = useRef(null);

//   const handlePlaceChanged = (type) => {
//     const autocomplete = type === 'pickup' ? pickupRef.current : dropRef.current;
//     if (autocomplete) {
//       const place = autocomplete.getPlace();
//       setFormData(prev => ({ 
//         ...prev, 
//         [type]: place.formatted_address || place.name 
//       }));
//     }
//   };

//   const handleWhatsAppRedirect = () => {
//     const phoneNumber = "919626388683"; // Replace with your business number
//     const message = `*New Booking Request*%0A` +
//       `--------------------------%0A` +
//       `*Service:* ${activeTrip.toUpperCase()}%0A` +
//       `*Pickup:* ${formData.pickup}%0A` +
//       `*Drop:* ${formData.drop}%0A` +
//       `*Date:* ${formData.date}%0A` +
//       `*Time:* ${formData.time}%0A` +
//       `--------------------------%0A` +
//       `Please confirm the available cabs.`;

//     window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
//   };

//   if (!isLoaded) return <div className="flex items-center justify-center h-64 bg-white border rounded-2xl border-slate-100"><Loader2 className="animate-spin text-amber-500" /></div>;

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="w-full max-w-2xl p-2 bg-white border rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-slate-100 lg:p-4"
//     >
//       <Tabs defaultValue="airport" onValueChange={setActiveTrip} className="w-full">
//         <TabsList className="grid w-full h-auto grid-cols-3 p-1.5 bg-slate-50 rounded-2xl mb-4">
//           <TabsTrigger value="airport" className="data-[state=active]:bg-slate-900 data-[state=active]:text-yellow-300 data-[state=active]:shadow-sm py-3 rounded-xl font-bold text-xs sm:text-sm transition-all">
//             <Plane className="w-4 h-4 mr-2" />Airport
//           </TabsTrigger>
//           <TabsTrigger value="outstation" className="data-[state=active]:bg-slate-900 data-[state=active]:text-yellow-300 data-[state=active]:shadow-sm py-3 rounded-xl font-bold text-xs sm:text-sm transition-all">
//             <Route className="w-4 h-4 mr-2" />Outstation
//           </TabsTrigger>
//           <TabsTrigger value="local" className="data-[state=active]:bg-slate-900 data-[state=active]:text-yellow-300 data-[state=active]:shadow-sm py-3 rounded-xl font-bold text-xs sm:text-sm transition-all">
//             <MapPin className="w-4 h-4 mr-2" />Local
//           </TabsTrigger>
//         </TabsList>

//         <div className="space-y-4">
//           <div className="grid gap-4 sm:grid-cols-2">
//             {/* Pickup Address */}
//             <div className="space-y-1.5">
//               <Label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold ml-1">
//                 <MapPin className="inline w-3 h-3 mr-1 text-amber-500" />Pickup Location
//               </Label>
//               <Autocomplete
//                 onLoad={(ref) => (pickupRef.current = ref)}
//                 onPlaceChanged={() => handlePlaceChanged('pickup')}
//               >
//                 <Input 
//                   placeholder="Area, Apartment or Hotel" 
//                   className="h-12 font-medium border-none bg-slate-50 focus-visible:ring-2 focus-visible:ring-amber-500/20 rounded-xl"
//                   onChange={(e) => setFormData({...formData, pickup: e.target.value})}
//                 />
//               </Autocomplete>
//             </div>

//             {/* Drop Address */}
//             <div className="space-y-1.5">
//               <Label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold ml-1">
//                 <MapPin className="inline w-3 h-3 mr-1 text-amber-500" />
//                 {activeTrip === 'local' ? 'Landmark' : 'Drop Location'}
//               </Label>
//               <Autocomplete
//                 onLoad={(ref) => (dropRef.current = ref)}
//                 onPlaceChanged={() => handlePlaceChanged('drop')}
//               >
//                 <Input 
//                   placeholder={activeTrip === 'local' ? 'Area / Landmark' : 'Destination Address'} 
//                   className="h-12 font-medium border-none bg-slate-50 focus-visible:ring-2 focus-visible:ring-amber-500/20 rounded-xl"
//                   onChange={(e) => setFormData({...formData, drop: e.target.value})}
//                 />
//               </Autocomplete>
//             </div>

//             {/* Date Picker */}
//             <div className="space-y-1.5">
//               <Label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold ml-1">
//                 <Calendar className="inline w-3 h-3 mr-1 text-amber-500" />Travel Date
//               </Label>
//               <Input 
//                 type="date" 
//                 className="h-12 font-medium border-none bg-slate-50 focus-visible:ring-2 focus-visible:ring-amber-500/20 rounded-xl"
//                 onChange={(e) => setFormData({...formData, date: e.target.value})}
//               />
//             </div>

//             {/* Time Picker */}
//             <div className="space-y-1.5">
//               <Label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold ml-1">
//                 <Clock className="inline w-3 h-3 mr-1 text-amber-500" />Pickup Time
//               </Label>
//               <Input 
//                 type="time" 
//                 className="h-12 font-medium border-none bg-slate-50 focus-visible:ring-2 focus-visible:ring-amber-500/20 rounded-xl"
//                 onChange={(e) => setFormData({...formData, time: e.target.value})}
//               />
//             </div>
//           </div>

//           <Button
//             onClick={handleWhatsAppRedirect}
//             className="w-full text-base font-black text-white transition-all duration-300 shadow-lg h-14 bg-slate-900 hover:bg-amber-600 rounded-2xl group shadow-slate-200"
//           >
//             Check Available Cabs 
//             <MessageSquare className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
//           </Button>
          
//           <p className="text-[10px] text-center text-slate-400 font-medium hidden">
//             * Instant confirmation via WhatsApp. No hidden charges.
//           </p>
//         </div>
//       </Tabs>
//     </motion.div>
//   );
// };

// export default BookingForm;


"use client";

import React, { useState, useRef } from 'react';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
import { 
  Plane, Route, MapPin, Calendar, Clock, 
  MessageSquare, Loader2, Users, Car, Phone, User
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const LIBRARIES = ['places'];

const BookingForm = () => {
  const [activeTrip, setActiveTrip] = useState('airport');
  const [formData, setFormData] = useState({
    tripType: 'One-way',
    name: '',
    mobile: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
    members: '',
    carType: ''
  });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: LIBRARIES,
  });

  const pickupRef = useRef(null);
  const dropRef = useRef(null);

  // Generate 24 hours list
  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 || 12;
    const ampm = i < 12 ? 'AM' : 'PM';
    return `${hour}:00 ${ampm}`;
  });

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
    const phoneNumber = "919626388683"; 
    const message = `*New Booking Request*%0A` +
      `--------------------------%0A` +
      `*Service:* ${activeTrip.toUpperCase()}%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*From:* ${formData.pickup}%0A` +
      `*To:* ${formData.drop}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Time:* ${formData.time}%0A` +
      `*Members:* ${formData.members}%0A` +
      `*Vehicle:* ${formData.carType}%0A` +
      `--------------------------%0A` +
      `Please confirm availability.`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isLoaded) return <div className="flex items-center justify-center h-64 bg-white border rounded-2xl border-slate-100"><Loader2 className="animate-spin text-amber-500" /></div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl p-4 bg-white border rounded-[2rem] shadow-2xl shadow-slate-200/50 border-slate-100 lg:p-6"
    >
      <Tabs defaultValue="airport" onValueChange={setActiveTrip} className="w-full">
        <TabsList className="grid w-full h-auto grid-cols-3 p-1.5 bg-slate-50 rounded-2xl mb-6">
          <TabsTrigger value="airport" className="data-[state=active]:bg-slate-900 data-[state=active]:text-amber-400 py-3 rounded-xl font-black text-xs transition-all">
            <Plane className="w-4 h-4 mr-2" />AIRPORT
          </TabsTrigger>
          <TabsTrigger value="outstation" className="data-[state=active]:bg-slate-900 data-[state=active]:text-amber-400 py-3 rounded-xl font-black text-xs transition-all">
            <Route className="w-4 h-4 mr-2" />OUTSTATION
          </TabsTrigger>
          <TabsTrigger value="local" className="data-[state=active]:bg-slate-900 data-[state=active]:text-amber-400 py-3 rounded-xl font-black text-xs transition-all">
            <MapPin className="w-4 h-4 mr-2" />LOCAL
          </TabsTrigger>
        </TabsList>

        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Name */}
            <div className="space-y-1.5">
              <Label className="text-[10px] uppercase tracking-widest text-slate-400 font-black ml-1"><User className="inline w-3 h-3 mr-1" />Your Name</Label>
              <Input 
                placeholder="Full Name" 
                className="h-12 border-none bg-slate-50 rounded-xl"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Mobile */}
            <div className="space-y-1.5">
              <Label className="text-[10px] uppercase tracking-widest text-slate-400 font-black ml-1"><Phone className="inline w-3 h-3 mr-1" />Mobile Number</Label>
              <Input 
                placeholder="Phone Number" 
                className="h-12 border-none bg-slate-50 rounded-xl"
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              />
            </div>

            {/* Pickup */}
            <div className="space-y-1.5">
              <Label className="text-[10px] uppercase tracking-widest text-slate-400 font-black ml-1"><MapPin className="inline w-3 h-3 mr-1" />Pickup From</Label>
              <Autocomplete onLoad={(ref) => (pickupRef.current = ref)} onPlaceChanged={() => handlePlaceChanged('pickup')}>
                <Input placeholder="Enter pickup location" className="h-12 border-none bg-slate-50 rounded-xl" />
              </Autocomplete>
            </div>

            {/* Drop */}
            <div className="space-y-1.5">
              <Label className="text-[10px] uppercase tracking-widest text-slate-400 font-black ml-1"><MapPin className="inline w-3 h-3 mr-1" />Drop To</Label>
              <Autocomplete onLoad={(ref) => (dropRef.current = ref)} onPlaceChanged={() => handlePlaceChanged('drop')}>
                <Input placeholder="Enter destination" className="h-12 border-none bg-slate-50 rounded-xl" />
              </Autocomplete>
            </div>

            {/* Members */}
            <div className="space-y-1.5">
              <Label className="text-[10px] uppercase tracking-widest text-slate-400 font-black ml-1"><Users className="inline w-3 h-3 mr-1" />No. of Members</Label>
              <Select onValueChange={(v) => setFormData({...formData, members: v})}>
                <SelectTrigger className="h-12 border-none bg-slate-50 rounded-xl">
                  <SelectValue placeholder="Select Members" />
                </SelectTrigger>
                <SelectContent>
                  {[1,2,3,4,5,6,7,8,12,14].map(num => (
                    <SelectItem key={num} value={num.toString()}>{num} Members</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Car Type */}
            <div className="space-y-1.5">
              <Label className="text-[10px] uppercase tracking-widest text-slate-400 font-black ml-1"><Car className="inline w-3 h-3 mr-1" />Car Type</Label>
              <Select onValueChange={(v) => setFormData({...formData, carType: v})}>
                <SelectTrigger className="h-12 border-none bg-slate-50 rounded-xl">
                  <SelectValue placeholder="Select Vehicle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Sedan">Sedan (Etios/Dzire)</SelectItem>
                  <SelectItem value="SUV">SUV (Ertiga/Marazzo)</SelectItem>
                  <SelectItem value="Premium SUV">Premium (Innova Crysta)</SelectItem>
                  <SelectItem value="Tempo">Tempo Traveller</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date */}
            <div className="space-y-1.5">
              <Label className="text-[10px] uppercase tracking-widest text-slate-400 font-black ml-1"><Calendar className="inline w-3 h-3 mr-1" />Travel Date</Label>
              <Input 
                type="date" 
                className="h-12 border-none bg-slate-50 rounded-xl"
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>

            {/* Time (Hours Only Dropdown) */}
            <div className="space-y-1.5">
              <Label className="text-[10px] uppercase tracking-widest text-slate-400 font-black ml-1"><Clock className="inline w-3 h-3 mr-1" />Pickup Time</Label>
              <Select onValueChange={(v) => setFormData({...formData, time: v})}>
                <SelectTrigger className="h-12 border-none bg-slate-50 rounded-xl">
                  <SelectValue placeholder="Select Hour" />
                </SelectTrigger>
                <SelectContent>
                  {hours.map(hour => (
                    <SelectItem key={hour} value={hour}>{hour}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={handleWhatsAppRedirect}
            className="w-full text-base font-black transition-all duration-300 shadow-xl text-slate-900 h-14 bg-amber-500 hover:bg-amber-400 rounded-2xl group"
          >
            CONFIRM BOOKING ON WHATSAPP
            <MessageSquare className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
          </Button>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default BookingForm;