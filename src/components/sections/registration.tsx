'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Registration() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSerF0kVh5vVFlvU9ZkL8ToE-tkURDjU4BW_jToRs9pNdC9N-Q/viewform?usp=dialog"; // Replace with your Google Form URL

  return (
    <section className="py-8 md:py-16 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <Card className="rounded-xl shadow-2xl border-primary border-2">
            <CardHeader className="text-center p-8">
              <CardTitle className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">
                Reserve Your Seat!
              </CardTitle>
              <CardDescription className="mt-2 text-muted-foreground text-lg">
                Entry is free, but registration is required. Don't miss out!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 flex justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground font-bold text-lg py-6 px-8 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg">
                <Link href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                  Register Now <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}