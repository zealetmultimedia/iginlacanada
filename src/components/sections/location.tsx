import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Location() {
  const address = 'National Event Venue Space, 1000 Finch Avenue W, North York, ON M3J 2V5, Canada';
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.183075324155!2d-79.46921309999999!3d43.7690584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2dfd73d94d9d%3A0xc87b9744baa63637!2sNational%20Event%20Venue%20Space!5e0!3m2!1sen!2sng!4v1754682807583!5m2!1sen!2sng`;

  return (
    <section className="py-30 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Event Location</h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Find your way to an unforgettable experience.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 items-center max-w-5xl mx-auto">
          <Card className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 flex flex-col items-center text-center">
            <CardHeader className="p-0 mb-4">
              <div className="mx-auto bg-primary p-3 rounded-full w-fit mb-4">
                <MapPin className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="font-headline text-2xl md:text-3xl text-primary">National Event Venue Space</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-lg md:text-xl text-foreground space-y-2">
              <p className="font-semibold">1000 Finch Avenue W</p>
              <p>North York, ON M3J 2V5</p>
              <p>Canada</p>
              <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground font-bold text-lg px-8 py-6 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg">
                <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">
                  Get Directions <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <div className="aspect-w-16 aspect-h-12">
            <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <iframe
                src={googleMapsUrl}
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