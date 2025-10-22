"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";

export function CTASection() {
  const scrollToForm = () => {
    const element = document.getElementById('request-ride');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[400px] md:h-[450px] lg:h-[550px] flex items-center justify-center">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-2xl rounded-full"></div>
            
            {/* Smaller and moved left */}
            <div className="relative w-full h-full scale-[1.3] md:scale-110 lg:scale-125 md:-mt-12 lg:-mt-32">
              <Image 
                src="/images/car.png" 
                alt="Delta Medical Transport Vehicle - Wheelchair accessible van"
                fill
                className="object-contain"
                style={{ objectPosition: '40% center' }}
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="text-center lg:text-left space-y-8 z-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ready to Schedule Your Ride?
              </h2>
              <p className="text-lg md:text-xl text-green-100 leading-relaxed">
                Book your appointment today and experience professional, compassionate medical transportation
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center pt-4">
              <Button 
                onClick={scrollToForm}
                size="lg"
                aria-label="Book your ride online"
                className="w-full sm:w-auto bg-white hover:bg-green-50 text-green-700 px-10 py-5 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Book Online
              </Button>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}>
                <Button 
                  size="lg"
                  aria-label={`Call us now at ${COMPANY_INFO.phone}`}
                  className="w-full sm:w-auto bg-green-800 hover:bg-green-900 text-white border-2 border-white/20 px-10 py-5 text-lg font-semibold rounded-xl shadow-xl transition-all duration-300"
                >
                  Call Now
                </Button>
              </a>
            </div>

            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 pt-6">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="flex flex-col items-center lg:items-start p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
                aria-label={`Phone: ${COMPANY_INFO.phone}`}
              >
                <span className="text-green-200 text-xs mb-1">Phone</span>
                <span className="text-white font-medium text-sm">{COMPANY_INFO.phone}</span>
              </a>
              
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex flex-col items-center lg:items-start p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
                aria-label={`Email: ${COMPANY_INFO.email}`}
              >
                <span className="text-green-200 text-xs mb-1">Email</span>
                <span className="text-white font-medium text-xs break-all">{COMPANY_INFO.email}</span>
              </a>
              
              <a 
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center lg:items-start p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
                aria-label="Follow us on Instagram"
              >
                <span className="text-green-200 text-xs mb-1">Follow Us</span>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-white font-medium text-sm">Instagram</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
