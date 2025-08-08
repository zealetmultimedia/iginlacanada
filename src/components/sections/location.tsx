import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Location() {
  const address = 'National Event Venue Space, 1000 Finch Avenue W, North York, ON M3J 2V5, Canada';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Event Location</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <MapPin className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold font-headline">National Event Venue Space</h3>
            <p className="text-xl">
              1000 Finch Avenue W<br />
              North York, ON M3J 2V5<br />
              Canada
            </p>
            <Button asChild variant="link" className="mt-4 text-lg text-primary p-0 h-auto">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.183075324155!2d-79.46921309999999!3d43.7690584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2dfd73d94d9d%3A0xc87b9744baa63637!2sNational%20Event%20Venue%20Space!5e0!3m2!1sen!2sng!4v1754682807583!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
