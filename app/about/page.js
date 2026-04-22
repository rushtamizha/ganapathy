import { ShieldCheck, Users, Trophy, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl px-6 py-20 mx-auto">
        <h1 className="mb-6 text-5xl font-black tracking-tighter uppercase text-slate-900">Our Story</h1>
        <p className="mb-12 text-xl font-medium leading-relaxed text-slate-500">
          Serving Pondicherry and Tamil Nadu since 2015, Sri Ganapathy Travels was founded on a simple principle: 
          Premium travel should be accessible, safe, and transparent.
        </p>

        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2">
          {[
            { icon: <ShieldCheck className="w-8 h-8 text-amber-500"/>, title: "Safety First", desc: "Every driver is background-verified and every vehicle is GPS-tracked." },
            { icon: <Users className="w-8 h-8 text-amber-500"/>, title: "Local Experts", desc: "Our chauffeurs know every shortcut in Pondicherry and the best routes to Chennai." },
            { icon: <Trophy className="w-8 h-8 text-amber-500"/>, title: "Premium Fleet", desc: "From Etios to Innova Crysta, we maintain our cars to showroom standards." },
            { icon: <MapPin className="w-8 h-8 text-amber-500"/>, title: "Wide Reach", desc: "Specializing in Pondy-Chennai Airport drops and TN Temple tours." },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              {item.icon}
              <h3 className="mt-4 mb-2 text-xl font-black text-slate-900">{item.title}</h3>
              <p className="text-sm font-medium leading-relaxed text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}