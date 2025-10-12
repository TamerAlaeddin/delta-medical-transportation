"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label, Textarea } from "@/components/ui/form";
import { COMPANY_INFO } from "@/lib/constants";

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      date: formData.get("date"),
      pickup: formData.get("pickup"),
      dropoff: formData.get("dropoff"),
      notes: formData.get("notes"),
    };

    try {
      const response = await fetch("/api/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError("Failed to submit. Please try calling us instead.");
      }
    } catch (error) {
      setError("Failed to submit. Please try calling us instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Request a Ride
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 via-delta-blue to-delta-red mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600">
              Fill out the form below and we will get back to you as soon as possible
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-green-100">
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-800 text-center">
                Thank you! We have received your request and will contact you shortly.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-800 text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" type="text" required placeholder="John Doe" className="w-full border-2 focus:border-green-500" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="(973) 123-4567" className="w-full border-2 focus:border-green-500" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" required placeholder="johndoe@example.com" className="w-full border-2 focus:border-green-500" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="service">Vehicle Type</Label>
                  <select id="service" name="service" required className="w-full h-11 rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent">
                    <option value="">Select vehicle type</option>
                    <option value="Wheelchair Van">Wheelchair Van</option>
                    <option value="Ambulance">Ambulance</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" name="date" type="date" required className="w-full border-2 focus:border-green-500" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="pickup">Pickup Address</Label>
                  <Input id="pickup" name="pickup" type="text" required placeholder="123 Main St, Newark, NJ" className="w-full border-2 focus:border-green-500" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dropoff">Dropoff Address</Label>
                  <Input id="dropoff" name="dropoff" type="text" required placeholder="456 Oak Ave, Jersey City, NJ" className="w-full border-2 focus:border-green-500" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea id="notes" name="notes" placeholder="Any special requirements or additional information..." className="w-full min-h-[120px] border-2 focus:border-green-500" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, "")}`} className="w-full sm:w-auto">
                  <Button type="button" variant="outline" className="w-full border-2 border-delta-blue text-delta-blue hover:bg-delta-blue hover:text-white px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300">
                    Or Call {COMPANY_INFO.phone}
                  </Button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
