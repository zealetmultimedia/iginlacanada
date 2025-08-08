'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Countdown from '@/components/sections/countdown';

export default function Hero() {
  const eventDate = '2025-09-06T16:00:00';
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSerF0kVh5vVFlvU9ZkL8ToE-tkURDjU4BW_jToRs9pNdC9N-Q/viewform?usp=dialog";

  return (
    <section className="relative w-full h-[80vh] min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="https://i.imgur.com/your_new_image_id.png"
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
      </div>
    </section>
  );
}