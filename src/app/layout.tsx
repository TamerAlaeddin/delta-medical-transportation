import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delta Medical Transportation - Professional Medical Transport in NJ",
  description: "Professional wheelchair-accessible and ambulance medical transportation services throughout New Jersey. Licensed, insured, and available 24/7 for scheduled appointments. Call (973) 389-3110.",
  keywords: "medical transportation, wheelchair accessible transport, ambulance service, New Jersey medical transport, non-emergency medical transport, NEMT NJ, dialysis transport, hospital discharge transport",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Delta Medical Transportation - NJ Medical Transport Services",
    description: "Safe, reliable medical transportation services throughout New Jersey. Wheelchair vans and ambulances available.",
    type: "website",
    images: ['/favicon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
