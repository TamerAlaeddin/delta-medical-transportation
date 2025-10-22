"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ServicesGrid() {
  const scrollToForm = () => {
    const element = document.getElementById('request-ride');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    {
      title: "Medical Appointments",
      description: "Never miss an important doctor visit, dialysis session, or specialist appointment. Our trained staff ensures you arrive safely and on time.",
      features: ["Doctor Visits", "Dialysis", "Therapy Sessions", "Lab Work"],
      icon: "🏥",
    },
    {
      title: "Hospital & Facility Transport",
      description: "Compassionate transport to and from hospitals, nursing homes, and rehabilitation centers with specialized care for your comfort.",
      features: ["Hospital Discharge", "Nursing Homes", "Rehab Centers", "Emergency Care"],
      icon: "🚑",
    },
    {
      title: "Non-Emergency Services",
      description: "Maintain your independence with reliable transportation for daily needs, social events, and special occasions.",
      features: ["Airport Transfers", "Social Events", "Family Visits", "Shopping Trips"],
      icon: "✈️",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Consistent decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Medical Transportation Throughout New Jersey
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you need wheelchair-accessible transportation or ambulance services, 
            Delta Medical Transportation provides safe, reliable, and comfortable rides for all your healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-100 hover:border-green-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-600 to-green-700 p-1">
            <div className="bg-white rounded-[22px] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto md:min-h-[450px] p-4 md:p-8 flex items-center justify-center">
                  <div className="relative w-full h-full scale-125 md:scale-110">
                    <Image 
                      src="/images/car.png" 
                      alt="Delta Medical Transport Fleet"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    State-of-the-Art Fleet
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our modern fleet includes wheelchair-accessible vans and fully-equipped ambulances, 
                    all maintained to the highest safety standards and cleaned after every trip.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Wheelchair lifts & ramps
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      GPS tracking & monitoring
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Climate-controlled comfort
                    </li>
                  </ul>
                  <Button 
                    onClick={scrollToForm}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Request an Estimate Today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Serving All of New Jersey
          </h3>
          <p className="text-lg text-green-100 max-w-3xl mx-auto mb-6">
            We provide reliable medical transportation throughout the entire Garden State. 
            Our professional drivers are familiar with all routes and facilities across New Jersey, 
            ensuring you receive timely and safe service wherever you need to go.
          </p>
        </div>
      </div>
    </section>
  );
}
