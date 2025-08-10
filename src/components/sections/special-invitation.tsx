import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift } from 'lucide-react';
import Image from 'next/image';

export default function SpecialInvitation() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-6xl mx-auto rounded-xl shadow-lg border-accent/50 overflow-hidden">
          <div className="md:grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <CardHeader className="p-0 text-center md:text-left">
                <div className="mx-auto md:mx-0 bg-accent p-4 rounded-full w-fit mb-4">
                  <Gift className="w-10 h-10 text-accent-foreground" />
                </div>
                <CardTitle className="font-headline text-3xl md:text-4xl text-accent">
                  Special Invitation: Don't Come Alone!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-6 space-y-4 text-lg text-muted-foreground text-left">
                <p>
                  Join Prophet Joshua Iginla live in Canada for the "Grass to Grace" Healing, Deliverance, and Anointing Service on September 6th-7th, 2025. This is an unforgettable, destiny-shifting encounter where you can expect forensic prophecy, deep deliverance, and supernatural healing. Don't miss this opportunity to witness heaven kiss earth in a new dimension of grace, glory, and greatness.
                </p>
                <p>
                  The atmosphere will be charged with the undiluted Word of God, creating an environment ripe for spiritual breakthroughs and undeniable miracles. This isn't just a meeting; it's your moment for divine elevation. Bring your family, friends, neighbors, coworkers, or anyone who needs a miracle and a life-transforming experience. <strong>One invitation could unlock someone's miracle!</strong>
                </p>
                <p>
                  Spread the word about this powerful Canadian revival at the National Event Venue Space, 1000 Finch Ave W, North York, ON M3J 2V5. Let's pack the house with expectation and watch God move! Come ready for your breakthrough – Canada, get ready... grace is invading!
                </p>
              </CardContent>
            </div>
            <div className="relative w-full min-h-[500px] md:min-h-full">
              <Image
                src="https://i.imgur.com/Nd1PEVK.png"
                alt="Canada Invasion 2025 Event Poster"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}