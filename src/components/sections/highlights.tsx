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
        <div className="mb-12 max-w-5xl mx-auto">
          <Card className="border-primary shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-headline font-bold text-center text-primary">Event Details</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-8 p-6 md:p-8 text-base md:text-lg text-foreground">
                <div className="flex items-start gap-4">
                    <MapPin className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <p className="font-bold">Location</p>
                        <p>National Event Venue Space</p>
                        <p>1000 Finch Ave W, North York, ON</p>
                    </a>
                </div>
                <div className="flex items-start gap-4">
                    <Calendar className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <p className="font-bold">Date & Time</p>
                        <p>September 6th–7th, 2025</p>
                        <p>4 PM daily</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Phone className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-foreground">Special Invitation: Don't Come Alone!</h2>
            <p>
              Join Prophet Joshua Iginla live in Canada for the "Grass to Grace" Healing, Deliverance, and Anointing Service on September 6th-7th, 2025. This is an unforgettable, destiny-shifting encounter where you can expect forensic prophecy, deep deliverance, and supernatural healing. Don't miss this opportunity to witness heaven kiss earth in a new dimension of grace, glory, and greatness.
            </p>
            <h3 className="text-3xl md:text-4xl font-bold font-headline text-foreground pt-4">An Invitation to Divine Elevation</h3>
            <p>
             The atmosphere will be charged with the undiluted Word of God, creating an environment ripe for spiritual breakthroughs and undeniable miracles. This isn't just a meeting; it's your moment for divine elevation. Bring your family, friends, neighbors, coworkers, or anyone who needs a miracle and a life-transforming experience. One invitation could unlock someone's miracle!
            </p>
            <p>
              Spread the word about this powerful Canadian revival at the National Event Venue Space, 1000 Finch Ave W, North York, ON M3J 2V5. Let's pack the house with expectation and watch God move! Come ready for your breakthrough – Canada, get ready... grace is invading!
            </p>
          </div>
          <div>
            <Image
              src="https://i.imgur.com/Nd1PEVK.png"
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