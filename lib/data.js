// Vehicle image mapping
export const CAR_IMAGES = {
  sedan: "/cars/2026-01-18-11-38-48-SedanCarRental.jpg",
  etios: "/cars/2026-01-18-11-39-09-EtiosCarRental.jpg",
  ciaz: "/cars/2026-01-18-11-19-19-CiazAirportTaxi.png",
  ertiga: "/cars/2026-01-18-11-40-32-ErtigaCarRental.png",
  kia: "/cars/2026-01-18-11-41-15-KiaCarnesCarRental.png",
  innova: "/cars/2026-01-18-11-42-20-InnovaCarRental.png",
  crysta: "/cars/2026-01-18-11-43-38-InnovaCrystaCarRental.png",
  hycross: "/cars/2026-01-18-11-46-30-InnovaHycrossCarRental.png",
  tempo: "/cars/2026-01-18-11-46-59-TempoTravellerRental.png",
  tempoAc: "/cars/2026-01-18-11-47-26-TempoTravellerRental.png",
  heroTaxi: "https://img.freepik.com/photos-gratuite/panneau-jaune-noir-taxi-place-au-dessus-voiture-pendant-nuit_181624-10624.jpg",
}

export const AIRPORT_TAXIS = [
  { id: 'a1', name: 'Sedan', image: CAR_IMAGES.sedan, seats: '4+1', fare: 2499, toll: 'Optional', range: 'Upto 30 km', tag: 'Most Booked' },
  { id: 'a2', name: 'Etios Airport Taxi', image: CAR_IMAGES.etios, seats: '4+1', fare: 2499, toll: 'Optional', range: 'Upto 30 km' },
  { id: 'a3', name: 'Ciaz Airport Taxi', image: CAR_IMAGES.ciaz, seats: '4+1', fare: 2699, toll: 'Optional', range: 'Upto 30 km' },
  { id: 'a4', name: 'Ertiga Airport Taxi', image: CAR_IMAGES.ertiga, seats: '6+1', fare: 3499, toll: 'Optional', range: 'Upto 30 km', tag: 'Family Pick' },
  { id: 'a5', name: 'Kia Carens Airport Taxi', image: CAR_IMAGES.kia, seats: '6+1', fare: 3499, toll: 'Optional', range: 'Upto 30 km' },
  { id: 'a6', name: 'Innova Airport Taxi', image: CAR_IMAGES.innova, seats: '7+1', fare: 3799, toll: 'Optional', range: 'Upto 30 km' },
  { id: 'a7', name: 'Innova Crysta Airport Taxi', image: CAR_IMAGES.crysta, seats: '7+1', fare: 4499, toll: 'Optional', range: 'Upto 40 km', tag: 'Premium' },
  { id: 'a9', name: 'Tempo Traveller For Airport', image: CAR_IMAGES.tempo, seats: '12+1', fare: 7499, toll: 'Optional', range: 'Upto 40 km', tag: 'Group' },
]

export const OUTSTATION_TAXIS = [
  { id: 'o1', name: 'Sedan Outstation Cab', image: CAR_IMAGES.sedan, seats: '4+1', fare: 13, bata: 300, min: '300 Kms min rental/day', tag: 'Budget' },
  { id: 'o2', name: 'Etios Outstation Cab', image: CAR_IMAGES.etios, seats: '4+1', fare: 13, bata: 300, min: '300 Kms min rental/day' },

  { id: 'o3', name: 'Ertiga Outstation Cab', image: CAR_IMAGES.ertiga, seats: '6+1', fare: 18, bata: 500, min: '300 Kms min rental/day' },
  { id: 'o4', name: 'Ciaz Outstation Cab', image: CAR_IMAGES.ciaz, seats: '4+1', fare: 14, bata: 500, min: '300 Kms min rental/day' },
  { id: 'o5', name: 'Kia Carens Outstation Cab', image: CAR_IMAGES.kia, seats: '6+1', fare: 18, bata: 500, min: '300 Kms min rental/day' },
  { id: 'o6', name: 'Innova Outstation Cab', image: CAR_IMAGES.innova, seats: '7+1', fare: 18, bata: 500, min: '300 Kms min rental/day', tag: 'Best Seller' },
  { id: 'o7', name: 'Innova Crysta Outstation Cab', image: CAR_IMAGES.crysta, seats: '7+1', fare: 20, bata: 500, min: '300 Kms min rental/day', tag: 'Premium' },
]

export const LOCAL_TAXIS = [
  { id: 'l1', name: 'Sedan Rental Cab', image: CAR_IMAGES.sedan, seats: '4+1', fare: 2399, included: '8Hrs 80Kms included', extraKm: 10, extraHr: 300 },
  { id: 'l2', name: 'Etios Rental Cab', image: CAR_IMAGES.etios, seats: '4+1', fare: 2399, included: '8Hrs 80Kms included', extraKm: 10, extraHr: 300 },

  { id: 'l3', name: 'Ertiga Rental Cab', image: CAR_IMAGES.ertiga, seats: '6+1', fare: 3599, included: '8Hrs 80Kms included', extraKm: 10, extraHr: 450 },
  { id: 'l4', name: 'Kia Carens Rental Cab', image: CAR_IMAGES.kia, seats: '6+1', fare: 3599, included: '8Hrs 80Kms included', extraKm: 10, extraHr: 450 },

  { id: 'l5', name: 'Innova Rental Cab', image: CAR_IMAGES.innova, seats: '7+1', fare: 4399, included: '8Hrs 80Kms included', extraKm: 10, extraHr: 500, tag: 'Popular' },
  { id: 'l6', name: 'Crysta Rental Cab', image: CAR_IMAGES.crysta, seats: '6+1', fare: 3999, included: '8Hrs 80Kms included', extraKm: 10, extraHr: 550 },

  { id: 'l7', name: 'Tempo Traveller', image: CAR_IMAGES.tempo, seats: '12+1', fare: 5499, included: '8Hrs 80Kms included', extraKm: 10, extraHr: 400 },

]

export const OUTSTATION_ROUTES = [
  { city: 'Tamil Nadu', distance: '150 km', time: '3h', from: 2499, img: 'https://s7ap1.scene7.com/is/image/incredibleindia/1-meenakshi-amman-temple-madurai-tamil-nadu-attr-hero?qlt=82&ts=1726654442664' },
  { city: 'Bangalore', distance: '270 km', time: '6h', from: 4999, img: 'https://s7ap1.scene7.com/is/image/incredibleindia/vidhana-soudha-bangalore-karnataka-hero?qlt=82&ts=1742199603184' },
  { city: 'Kerala', distance: '260 km', time: '5h 30m', from: 4499, img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D' },
  { city: 'Andhra', distance: '245 km', time: '5h', from: 4299, img: 'https://s7ap1.scene7.com/is/image/incredibleindia/varaha-lakshmi-narasimha-temple-buddhist-complex-visakhapatnam-andhra-pradesh-1-attr-hero?qlt=82&ts=1742150957215' },
]

export const TESTIMONIALS = [
  { name: 'Arjun Mehta', role: 'Business Traveller', rating: 5, text: 'Booked a Crysta for a 4AM airport pickup. Driver was waiting 15 minutes early, car was spotless. Absolutely premium experience.' },
  { name: 'Priya Raghavan', role: 'Family Trip to Coorg', rating: 5, text: 'Took the Ertiga outstation to Coorg. Transparent pricing, no surprises. Driver Mr. Suresh knew all the scenic routes.' },
  { name: 'Vikram Shetty', role: 'Corporate Client', rating: 5, text: 'We use Sri Ganapathy Travels for all our executive pickups. On-time, well-dressed drivers and immaculate Innovas. Highly recommended.' },
  { name: 'Sneha Kulkarni', role: 'Wedding Guest', rating: 5, text: 'Booked a Tempo Traveller for a family of 11 to Mysore. Huge luggage space, comfortable ride, fair pricing.' },
]

export const FAQS = [
  { 
    q: 'How do I book a taxi for Pondicherry or Tamil Nadu?', 
    a: 'You can book instantly through our website, call us at +91 9626388683, or WhatsApp us. We specialize in Chennai-Pondicherry ECR drops and long-distance Tamil Nadu tours with instant confirmation.' 
  },
  { 
    q: 'Are Tamil Nadu or Pondicherry entry permits included in the fare?', 
    a: 'Our outstation quotes are transparent. While base fares are fixed, inter-state entry permits and tolls are charged at actuals to ensure you only pay for what is used on your specific route.' 
  },
  { 
    q: 'Do you offer round-trip packages for pilgrimage sites?', 
    a: 'Yes, we provide specialized premium packages for Navagraha temple tours, Velankanni, and Madurai-Rameshwaram circuits, including driver stay arrangements.' 
  },
  { 
    q: 'What are the charges for a one-way drop to Chennai Airport?', 
    a: 'We offer dedicated one-way premium drops from Pondicherry to Chennai Airport (MAA) via ECR or NH66 at competitive fixed rates, inclusive of driver allowance.' 
  },
  { 
    q: 'Can I reschedule my trip if my plans change?', 
    a: 'Absolutely. We offer free rescheduling up to 4 hours before your journey. For multi-day Tamil Nadu tours, we provide flexible itinerary adjustments at no extra service cost.' 
  },
  { 
    q: 'Are your drivers familiar with Tamil Nadu routes?', 
    a: 'Our elite drivers are locals with  years of experience. They are fluent in Tamil and English, and have expert knowledge of Pondicherry highways and hidden tourist gems in Pondicherry.' 
  },
]