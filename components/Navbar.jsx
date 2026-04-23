"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Phone, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const PHONE = "+919626388683";

  return (
    <header className="sticky top-0 z-[10] border-b bg-white/80 backdrop-blur-xl border-slate-100">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 overflow-hidden transition-transform border shadow-sm rounded-xl border-slate-100 group-hover:scale-105">
            <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
          </div>
          <div className="leading-none">
            <div className="text-xl font-black tracking-tighter uppercase text-slate-900">
              Sri Ganapathy
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-black mt-0.5">
              Travels
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-8 text-[13px] font-black uppercase tracking-wider lg:flex text-slate-500">
          {[
            ["Airport Taxi", "/#airport"],
            ["Outstation", "/#outstation"],
            ["Local Rental", "/#local"],
            ["Popular Routes", "/#routes"],
          ].map(([label, link]) => (
            <a
              key={link}
              href={link}
              className="transition-colors hover:text-amber-600 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="items-center hidden gap-2 px-4 py-2 text-sm font-bold transition rounded-full md:inline-flex text-slate-900 bg-slate-50 hover:bg-amber-50 hover:text-amber-600"
          >
            <Phone className="w-4 h-4" /> {PHONE}
          </a>

          <Link href="/contact" className="hidden md:flex">
            <Button className="px-6 font-black transition-all rounded-full shadow-lg text-slate-900 bg-amber-500 hover:bg-amber-400 shadow-amber-200 active:scale-95">
              BOOK NOW <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenu((v) => !v)}
            className="p-2.5 ml-1 text-slate-900 bg-white border border-slate-200 rounded-xl lg:hidden active:scale-95 transition-transform"
          >
            {mobileMenu ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute left-0 w-full duration-300 bg-white border-b shadow-2xl top-full border-slate-100 lg:hidden animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2 p-6">
            {[
              ["Airport Taxi", "/#airport"],
              ["Outstation", "/#outstation"],
              ["Local Rental", "/#local"],
              ["Popular Routes", "/#routes"],
              ["Why Us", "/#why"],
              ["FAQ", "#faq"],
            ].map(([label, link]) => (
              <a
                key={link}
                href={link}
                onClick={() => setMobileMenu(false)}
                className="px-4 py-4 text-sm font-black tracking-widest uppercase transition-colors border-b text-slate-900 hover:bg-amber-50 rounded-2xl border-slate-50 last:border-0"
              >
                {label}
              </a>
            ))}
            <div className="pt-6 mt-4 border-t border-slate-100">
              <Link href="/contact">
                <Button className="w-full font-black h-14 text-slate-900 bg-amber-500 rounded-2xl">
                  BOOK YOUR CAB
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
