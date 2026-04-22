import { notFound } from "next/navigation";
import BookingForm from "@/components/BookingForm";
import { MapPin, Shield, Star, Zap } from "lucide-react";

// Helper to turn "coimbatore-chennai-taxi" into "Coimbatore Chennai Taxi"
const formatTitle = (slug) => {
  if (!slug) return "Travel Blog";
  
  // If it's a catch-all [...slug], it's an array. 
  // If it's a single [slug], it's a string.
  const lastSegment = Array.isArray(slug) ? slug[slug.length - 1] : slug;
  
  return lastSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export async function generateMetadata({ params }) {
  // Defensive check: if slug doesn't exist, default to empty string
  const slug = params.slug || [];
  const displayTitle = formatTitle(slug);
  
  // Convert array to string for the URL, or use the string directly
  const urlPath = Array.isArray(slug) ? slug.join('/') : slug;
  
  return {
    title: `${displayTitle} | Sri Ganapathy Travels`,
    description: `Safe and affordable ${displayTitle} taxi services. Book one-way or round-trip with professional drivers. Premium Sedans and SUVs available 24/7.`,
    alternates: {
      canonical: `/blog/${urlPath}`,
    }
  };
}

export default function DynamicBlog({ params }) {
  const slug = params.slug || [];
  const displayTitle = formatTitle(slug);
  
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Article Header */}
      <div className="px-6 py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border rounded-full bg-amber-500/10 border-amber-500/20">
            <Zap className="w-3 h-3 text-amber-500" />
            <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Premium Route Guide</span>
          </div>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            Best {displayTitle} Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-medium text-slate-400">
            Experience the most reliable and comfortable travel experience. 
            Professional drivers and premium fleet for your {displayTitle} journey.
          </p>
        </div>
      </div>

      <div className="max-w-5xl px-6 pb-20 mx-auto -mt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Main Content Area */}
          <div className="space-y-8 lg:col-span-2">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="mb-6 text-2xl italic font-black text-slate-900">Why choose our {displayTitle} service?</h2>
              
              <div className="font-medium leading-relaxed prose prose-lg prose-slate max-w-none text-slate-600">
                <p>
                  Traveling for {displayTitle} has never been easier. We offer specialized 
                  one-way and round-trip packages tailored for this specific route. 
                  Whether you are traveling for business or leisure, our fleet of 
                  Sedans and SUVs ensures a smooth ride via the best national highways.
                </p>
                <ul className="p-0 my-8 space-y-4 list-none">
                  {[
                    "Door-to-door pickup and drop-off",
                    "Transparent billing with no hidden costs",
                    "Highly experienced professional drivers",
                    "24/7 customer support for your journey"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                      <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                      <span className="font-bold text-slate-700">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Local SEO Context */}
            <div className="p-8 bg-amber-500 rounded-[2.5rem] text-slate-900">
              <h3 className="mb-2 text-xl font-black tracking-tighter uppercase">Route Information</h3>
              <p className="text-sm font-bold opacity-90">
                Our {displayTitle} service covers all major suburbs and transit points. 
                Average travel time and distance are optimized for efficiency and safety.
              </p>
            </div>
          </div>

          {/* Sticky Sidebar Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="px-4 mb-4">
                <h3 className="text-lg font-black text-slate-900">Book This Route</h3>
                <p className="text-xs font-bold uppercase text-slate-400">Instant WhatsApp Confirmation</p>
              </div>
              <BookingForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
