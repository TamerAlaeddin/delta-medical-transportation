"use client";

import { COMPANY_INFO, CONTACT_METHODS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        {/* Company Info */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">{COMPANY_INFO.name}</h3>
          <p className="text-sage-400 text-sm italic">{COMPANY_INFO.tagline}</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-6">
          <button onClick={scrollToTop} className="text-gray-400 hover:text-sage-400 transition-colors duration-200">
            Home
          </button>
          <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-sage-400 transition-colors duration-200">
            Services
          </button>
          <button onClick={() => scrollToSection('why-choose-us')} className="text-gray-400 hover:text-sage-400 transition-colors duration-200">
            Why Us
          </button>
          <button onClick={() => scrollToSection('request-ride')} className="text-gray-400 hover:text-sage-400 transition-colors duration-200">
            Request Ride
          </button>
        </nav>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-6">
          {CONTACT_METHODS.map((method) => (
            <div key={method.type}>
              {method.href ? (
                <a href={method.href} className="text-gray-400 hover:text-sage-400 transition-colors duration-200">
                  {method.label}: {method.value}
                </a>
              ) : (
                <span className="text-gray-400">{method.label}: {method.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="flex justify-center mb-6">
          <a 
            href={COMPANY_INFO.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-sage-400 transition-colors duration-200"
            aria-label="Follow us on Instagram"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span className="text-sm">Follow us on Instagram</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
