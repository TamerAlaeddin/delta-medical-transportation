"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label, Textarea } from "@/components/ui/form";
import { COMPANY_INFO } from "@/lib/constants";

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  
  // Estimate calculator state
  const [vehicleType, setVehicleType] = useState<'wheelchair' | 'ambulance'>('wheelchair');
  const [miles, setMiles] = useState('');
  const [estimate, setEstimate] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  const PRICING = {
    wheelchair: { loadingFee: 45, perMile: 5 },
    ambulance: { loadingFee: 185, perMile: 5 }
  };

  const handleVehicleTypeChange = (type: 'wheelchair' | 'ambulance') => {
    setVehicleType(type);
    setEstimate(null);
    setShowForm(false);
    setMiles('');
  };

  const calculateEstimate = () => {
    const mileage = parseFloat(miles);
    if (isNaN(mileage) || mileage < 0) {
      alert('Please enter a valid number of miles');
      return;
    }
    const pricing = PRICING[vehicleType];
    const total = pricing.loadingFee + (pricing.perMile * mileage);
    setEstimate(total);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

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
      estimatedCost: estimate ? `$${estimate.toFixed(2)}` : 'Not calculated',
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
        setTimeout(() => {
          setIsSuccess(false);
          setEstimate(null);
          setMiles('');
          setShowForm(false);
        }, 5000);
      } else {
        setFormError("Failed to submit. Please try calling us instead.");
      }
    } catch {
      setFormError("Failed to submit. Please try calling us instead.");
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
              Get an Estimate & Request a Ride
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 via-delta-blue to-delta-red mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600">
              Calculate your estimate first to request a ride
            </p>
          </div>

          {/* ESTIMATE CALCULATOR */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-green-100 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Calculate Your Estimate
            </h3>
            
            <div className="mb-6">
              <Label className="text-lg font-semibold text-gray-900 mb-3 block">
                Select Vehicle Type
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleVehicleTypeChange('wheelchair')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    vehicleType === 'wheelchair'
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-300 hover:border-green-400'
                  }`}
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Wheelchair Van</h4>
                  <p className="text-sm text-gray-600">Accessible transport</p>
                </button>

                <button
                  type="button"
                  onClick={() => handleVehicleTypeChange('ambulance')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    vehicleType === 'ambulance'
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-300 hover:border-green-400'
                  }`}
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Ambulance</h4>
                  <p className="text-sm text-gray-600">Medical transport</p>
                </button>
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="miles" className="text-lg font-semibold text-gray-900 mb-2">
                Estimated Distance (miles)
              </Label>
              <Input
                id="miles"
                type="number"
                min="0"
                step="0.1"
                value={miles}
                onChange={(e) => setMiles(e.target.value)}
                placeholder="Enter miles (e.g., 15)"
                className="text-lg border-2"
              />
            </div>

            <Button
              type="button"
              onClick={calculateEstimate}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg"
            >
              Calculate Estimate
            </Button>

            {estimate !== null && (
              <div className="mt-6 p-6 bg-green-50 rounded-xl border-2 border-green-200">
                <p className="text-center text-sm text-gray-600 mb-2">Estimated Total Cost</p>
                <p className="text-center text-4xl font-bold text-green-600 mb-4">
                  ${estimate.toFixed(2)}
                </p>
                <div className="text-sm text-gray-600 bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">⚠️ Important:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>This is an estimate only</li>
                    <li>Final price may vary based on patient weight, stairs, wait times, and other factors</li>
                    <li>We&apos;ll confirm the exact price when you call to book</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* BOOKING FORM - Only shows after estimate */}
          {showForm && (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-green-100 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Request Your Ride
              </h3>

              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-800 text-center">
                  Thank you! We have received your request and will contact you shortly.
                </div>
              )}

              {formError && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-800 text-center">
                  {formError}
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
                    <select id="service" name="service" required defaultValue={vehicleType === 'wheelchair' ? 'Wheelchair Van' : 'Ambulance'} className="w-full h-11 rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent">
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
          )}
        </div>
      </div>
    </section>
  );
}
