"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const logoRef = useRef<HTMLDivElement>(null);
  const [visibleRatio, setVisibleRatio] = useState(1);

  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;

    let animationFrame: number | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const newRatio = entry.intersectionRatio;

        if (animationFrame) cancelAnimationFrame(animationFrame);

        const animate = () => {
          setVisibleRatio((prev) => {
            const diff = newRatio - prev;
            const step = diff * 0.15;
            const next = prev + step;
            return Math.abs(diff) < 0.001 ? newRatio : next;
          });
          animationFrame = requestAnimationFrame(animate);
        };
        animationFrame = requestAnimationFrame(animate);
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
        rootMargin: "0px 0px -20% 0px",
      }
    );

    observer.observe(el);
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById('request-ride');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const opacity = Math.max(0, Math.min(1, visibleRatio));
  const scale = 0.95 + opacity * 0.05;

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(140% 90% at 80% -20%, #B8F8B8 0%, #89E689 25%, #C9FFD3 55%, #ECFFF2 85%)",
          }}
        />
        <div
          className="absolute -top-60 -left-80 w-[950px] h-[950px] rounded-full blur-[200px] opacity-80"
          style={{
            background:
              "radial-gradient(circle at 35% 40%, rgba(0,255,130,0.7), rgba(255,255,255,0))",
          }}
        />
        <div
          className="absolute bottom-[-250px] right-[-300px] w-[1100px] h-[1100px] rounded-full blur-[220px] opacity-50"
          style={{
            background:
              "radial-gradient(circle at 70% 80%, rgba(0,128,96,0.35), rgba(255,255,255,0))",
          }}
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1.5px]" />
      </div>

      <div className="relative container mx-auto px-4 py-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-md">
                {COMPANY_INFO.name}
              </h1>
              <p className="text-xl md:text-2xl text-green-700 font-medium">
                {COMPANY_INFO.tagline}
              </p>
            </div>

            <p className="text-lg text-gray-700 max-w-xl md:max-w-none leading-relaxed mx-auto md:mx-0">
              Professional, compassionate medical transportation services throughout New Jersey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto md:mx-0 pt-4">
              <div className="p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border-2 border-green-200 hover:border-green-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-green-700 font-semibold mb-1">
                  Professional
                </div>
                <div className="text-sm text-gray-600">Trained drivers</div>
              </div>
              <div className="p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border-2 border-delta-blue/30 hover:border-delta-blue hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-delta-blue font-semibold mb-1">
                  Accessible
                </div>
                <div className="text-sm text-gray-600">All mobility needs</div>
              </div>
              <div className="p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border-2 border-delta-red/30 hover:border-delta-red hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-delta-red font-semibold mb-1">
                  Reliable
                </div>
                <div className="text-sm text-gray-600">Always on time</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-6">
              <Button
                onClick={scrollToForm}
                size="lg"
                aria-label="Book an appointment"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Request an Estimate
              </Button>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, "")}`}>
                <Button
                  size="lg"
                  aria-label={`Call ${COMPANY_INFO.phone}`}
                  className="w-full sm:w-auto bg-white hover:bg-gray-50 text-delta-blue border-2 border-delta-blue/30 hover:border-delta-blue px-10 py-4 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Call {COMPANY_INFO.phone}
                </Button>
              </a>
            </div>

            <p className="text-sm text-gray-500 pt-4 text-center md:text-left">
              Available 24/7 for scheduled appointments
            </p>
          </div>

          <div
            ref={logoRef}
            className="relative flex justify-center md:justify-end will-change-transform"
            style={{
              opacity,
              transform: `scale(${scale})`,
              transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease-out",
            }}
          >
            <Image
              src="/logo.png"
              alt="Delta Medical Transportation - Professional medical transport service"
              width={650}
              height={450}
              className="relative z-10 object-contain drop-shadow-2xl rounded-xl"
              priority
              quality={75}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 w-4/5 h-4/5 flex items-center justify-center">
              <div className="w-full h-full bg-green-400/25 rounded-full blur-[100px] mix-blend-multiply opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
