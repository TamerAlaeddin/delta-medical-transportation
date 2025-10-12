"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={scrollToTop} className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-200">
              <Image 
                src="/logo.png" 
                alt={COMPANY_INFO.name}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-xl font-bold text-gray-900 group-hover:text-sage-600 transition-colors duration-200">
                {COMPANY_INFO.name}
              </span>
              <span className="text-xs text-gray-600 italic">{COMPANY_INFO.tagline}</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-sage-600 font-medium transition-colors duration-200">
              Services
            </button>
            <button onClick={() => scrollToSection('why-choose-us')} className="text-gray-700 hover:text-sage-600 font-medium transition-colors duration-200">
              Why Us
            </button>
            <button onClick={() => scrollToSection('request-ride')} className="text-gray-700 hover:text-sage-600 font-medium transition-colors duration-200">
              Request Ride
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2 text-gray-700 hover:text-sage-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>
            
            <Button 
              onClick={() => scrollToSection('request-ride')}
              className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Book Now
            </Button>
          </div>

          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-sage-600 transition-colors" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-2 border-t border-gray-100 pt-4">
            <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-sage-600 hover:bg-sage-50 font-medium transition-all py-3 px-4 rounded-lg">
              Services
            </button>
            <button onClick={() => scrollToSection('why-choose-us')} className="text-left text-gray-700 hover:text-sage-600 hover:bg-sage-50 font-medium transition-all py-3 px-4 rounded-lg">
              Why Us
            </button>
            <button onClick={() => scrollToSection('request-ride')} className="text-left text-gray-700 hover:text-sage-600 hover:bg-sage-50 font-medium transition-all py-3 px-4 rounded-lg">
              Request Ride
            </button>
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="text-gray-700 hover:text-sage-600 hover:bg-sage-50 font-medium transition-all py-3 px-4 rounded-lg flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {COMPANY_INFO.phone}
            </a>
            <Button 
              onClick={() => scrollToSection('request-ride')}
              className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 rounded-lg font-semibold shadow-md mt-2"
            >
              Book Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
