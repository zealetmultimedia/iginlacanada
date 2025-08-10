'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Countdown from '@/components/sections/countdown';
import { Calendar, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  const eventDate = '2025-09-06T16:00:00';
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSerF0kVh5vVFlvU9ZkL8ToE-tkURDjU4BW_jToRs9pNdC9N-Q/viewform?usp=dialog";
  const address = 'National Event Venue Space, 1000 Finch Avenue W, North York, ON M3J 2V5, Canada';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="relative w-full min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden py-12">
      <Image
        src="https://imgur.com/tNpSznu.png"
        alt="Canada Invasion 2025 banner with Prophet Joshua Iginla and Toronto skyline"
        data-ai-hint="preacher stage, Toronto skyline"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 container px-4 md:px-6 flex flex-col items-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary drop-shadow-lg">
          Canada Invasion 2025
        </h1>
        <p className="mt-4 text-2xl font-bold font-headline drop-shadow-md">
            THEME: GRACE TO GRACE
        </p>
        <p className="mt-2 text-lg md:text-xl drop-shadow-md">
            (Healing, Deliverance, and Anointing Service)
        </p>
        <p className="mt-4 text-2xl font-bold font-headline drop-shadow-md">
            Sat 6th - Sun 7th September, 2025 | 4PM Daily
        </p>
        <Countdown targetDate={eventDate} />
        <div className="mt-8">
          <Button asChild size="lg" className="bg-accent text-accent-foreground font-bold text-lg px-8 py-6 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg">
            <Link href={googleFormUrl} target="_blank" rel="noopener noreferrer">Reserve Your Seat Now!</Link>
          </Button>
        </div>

        <div className="mt-12 text-left max-w-md w-full bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-headline font-bold text-center mb-4 text-primary">Event Details</h3>
            <div className="space-y-4 text-base md:text-lg">
                <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <p className="font-bold">National Event Venue Space</p>
                        <p>1000 Finch Avenue W</p>
                        <p>North York, ON M3J 2V5, Canada</p>
                    </a>
                </div>
                <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <p className="font-bold">September 6th–7th, 2025, 4 PM daily</p>
                        <p>– 27th @ 7 AM</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <p className="font-bold">
                            <a href="tel:+14375510381" className="hover:underline">+1 (437) 551-0381</a>, <a href="tel:+2348149439447" className="hover:underline">+234 814 943 9447</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}