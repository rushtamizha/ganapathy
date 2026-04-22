import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export default function Contact() {
  return (
    <div className="min-h-screen py-20 bg-slate-50">
      <div className="grid grid-cols-1 gap-16 px-6 mx-auto max-w-7xl lg:grid-cols-2">
        <div>
          <h1 className="mb-6 text-5xl font-black tracking-tighter uppercase text-slate-900">Get In Touch</h1>
          <p className="mb-10 font-bold text-slate-500">Have a special request or a corporate inquiry? Reach out to us directly.</p>
          
          <div className="space-y-6">
            {[
              { icon: <Phone/>, label: "Call Us", val: "+91 96263 88683" },
              { icon: <Mail/>, label: "Email", val: "Shajaramesh5@gmail.com" },
              { icon: <MapPin/>, label: "Office", val: "113, Mission St, Heritage Town, Puducherry" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-white border shadow-sm rounded-2xl border-slate-100">
                <div className="p-3 bg-amber-500 rounded-xl text-slate-900">{item.icon}</div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{item.label}</p>
                  <p className="font-bold text-slate-900">{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
            <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl">
                <BookingForm />
            </div>
        </div>
      </div>
    </div>
  );
}