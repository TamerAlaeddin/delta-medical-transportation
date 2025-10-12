import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Features } from "@/components/sections/features";
import { BookingForm } from "@/components/sections/booking-form";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="services">
        <ServicesGrid />
      </div>
      <div id="why-choose-us">
        <Features />
      </div>
      <div id="request-ride">
        <BookingForm />
      </div>
      <CTASection />
    </>
  );
}
