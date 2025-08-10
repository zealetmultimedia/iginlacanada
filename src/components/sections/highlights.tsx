import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Calendar, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const highlights = [
  { title: 'Forensic Prophecy', description: 'Witness forensic prophecy, deep deliverance, and healing.' },
  { title: 'Supernatural Encounters', description: 'Experience the supernatural like never before.' },
  { title: 'Divine Elevation', description: 'This is more than a meeting, it\'s your moment of divine elevation.' },
];

export default function Highlights() {
  const address = 'National Event Venue Space, 1000 Finch Avenue W, North York, ON M3J 2V5, Canada';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 mx-auto">
          <Card className="border-primary shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-headline font-bold text-center text-primary">Event Details</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4 p-6 md:p-8 text-base md:text-lg text-foreground">
                <div className="flex flex-col items-center text-center gap-2">
                    <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <p className="font-bold">Location</p>
                        <p>National Event Venue Space</p>
                        <p>1000 Finch Ave W, North York, ON M3J 2V5, Canada</p>
                    </a>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                    <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                        <p className="font-bold">Date & Time</p>
                        <p>September 6th–7th, 2025</p>
                        <p>4 PM daily</p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                    <Phone className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                        <p className="font-bold">Contact</p>
                        <p><a href="tel:+14375510381" className="hover:underline">+1 (437) 551-0381</a></p>
                        <p><a href="tel:+2348149439447" className="hover:underline">+234 814 943 9447</a></p>
                    </div>
                </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto mb-20">
          <div className="space-y-4 text-muted-foreground md:text-lg/relaxed text-left">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-foreground">An Unforgettable Encounter</h2>
            <p>
              Get ready for an <strong className="text-primary">unforgettable, destiny-shifting encounter</strong> at the <strong className="text-primary">"From Grass to Grace" Canada Divine Visitation 2025!</strong> This is a unique opportunity to join <strong className="text-primary">Prophet Joshua Iginla live</strong> for a <strong className="text-primary">life-transforming experience</strong> where heaven is expected to touch earth in a new dimension of <strong className="text-primary">grace, glory, and greatness</strong>. Attendees should prepare for a <strong className="text-primary">mighty shift to the next level</strong> in every area of their lives.
            </p>
            <h3 className="text-3xl md:text-4xl font-bold font-headline text-foreground pt-4">An Invitation to Divine Elevation</h3>
            <p>
             This special <strong className="text-primary">healing, deliverance, and anointing service</strong> is designed to usher participants into a season of <strong className="text-primary">bountiful harvests, undeniable miracles, and profound divine encounters</strong>. You can anticipate being empowered by <strong className="text-primary">undiluted revelations from the Word of God</strong> and witnessing <strong className="text-primary">forensic prophecy, deep deliverance, healing, and the supernatural</strong> like never before. This is more than just a meeting; it is poised to be your <strong className="text-primary">personal moment of divine elevation</strong> as <strong className="text-primary">"Grace is Invading" Canada</strong>.
            </p>
          </div>
          <div>
            <Image
              src="https://imgur.com/9MNEqLf.png"
              alt="Canada Divine Visitation 2025 Event Poster"
              width={720}
              height={1080}
              className="rounded-lg shadow-xl mx-auto"
              priority
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <Card key={highlight.title} className="flex flex-col items-center text-center p-6 bg-black rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 border-2 border-primary">
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-xl text-primary">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-primary">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}