import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Church, Flame, Award, GitBranchPlus, HeartHandshake, Sparkles, MapPin, Calendar, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const highlights = [
  { icon: <Flame className="w-8 h-8 text-primary" />, title: 'Forensic Prophecy', description: 'Witness forensic prophecy, deep deliverance, and healing.' },
  { icon: <Sparkles className="w-8 h-8 text-primary" />, title: 'Supernatural Encounters', description: 'Experience the supernatural like never before.' },
  { icon: <Award className="w-8 h-8 text-primary" />, title: 'Divine Elevation', description: 'This is more than a meeting, it\'s your moment of divine elevation.' },
  { icon: <GitBranchPlus className="w-8 h-8 text-primary" />, title: 'Undiluted Revelations', description: 'Be empowered by undiluted revelations from the Word of God.' },
  { icon: <HeartHandshake className="w-8 h-8 text-primary" />, title: 'Deliverance & Breakthrough', description: 'Step into your season of bountiful harvests and miracles.' },
  { icon: <Church className="w-8 h-8 text-primary" />, title: 'Life-Transforming Experience', description: 'Join a life-transforming experience as heaven kisses earth.' },
];

export default function Highlights() {
  const address = 'National Event Venue Space, 1000 Finch Avenue W, North York, ON M3J 2V5, Canada';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 max-w-2xl mx-auto">
          <Card className="border-primary shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-headline font-bold text-center text-primary">Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base md:text-lg text-foreground">
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
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto mb-20">
          <div className="space-y-4 text-muted-foreground md:text-lg/relaxed text-left">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-foreground">An Unforgettable Encounter</h2>
            <p>
              Get ready for an unforgettable, destiny-shifting encounter at the "Grass to Grace" Canada Invasion 2025! This is a unique opportunity to join Prophet Joshua Iginla live for a life-transforming experience where heaven is expected to touch earth in a new dimension of grace, glory, and greatness. Attendees should prepare for a mighty shift to the next level in every area of their lives.
            </p>
            <h3 className="text-3xl md:text-4xl font-bold font-headline text-foreground pt-4">An Invitation to Divine Elevation</h3>
            <p>
             This special healing, deliverance, and anointing service is designed to usher participants into a season of bountiful harvests, undeniable miracles, and profound divine encounters. You can anticipate being empowered by undiluted revelations from the Word of God and witnessing forensic prophecy, deep deliverance, healing, and the supernatural like never before. This is more than just a meeting; it is poised to be your personal moment of divine elevation as "Grace is Invading" Canada.
            </p>
          </div>
          <div>
            <Image
              src="https://i.imgur.com/PBMI6Zy.png"
              alt="Canada Invasion 2025 Event Poster"
              width={720}
              height={1080}
              className="rounded-lg shadow-xl mx-auto"
              priority
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <Card key={highlight.title} className="flex flex-col items-center text-center p-6 bg-primary rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="p-4 bg-gray-900 rounded-full mb-4">
                  {highlight.icon}
                </div>
                <CardTitle className="font-headline text-xl text-primary-foreground">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-primary-foreground/90">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}