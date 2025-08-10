import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift } from 'lucide-react';
import Image from 'next/image';

export default function SpecialInvitation() {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-6xl mx-auto rounded-xl shadow-lg border-primary/50 overflow-hidden">
          <div className="md:grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <CardHeader className="p-0 text-center md:text-left">
                <div className="mx-auto md:mx-0 bg-primary p-4 rounded-full w-fit mb-4">
                  <Gift className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="font-headline text-3xl md:text-4xl text-primary">
                  Special Invitation: Don't Come Alone!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-6 space-y-4 text-lg text-foreground text-left">
                <p>
                  Join <strong className="text-primary">Prophet Joshua Iginla</strong> live in Canada for the <strong className="text-primary">"Grass to Grace"</strong> Healing, Deliverance, and Anointing Service on <strong className="text-primary">September 6th-7th, 2025</strong>. This is an unforgettable, destiny-shifting encounter where you can expect <strong className="text-primary">forensic prophecy, deep deliverance, and supernatural healing</strong>. Don't miss this opportunity to witness heaven kiss earth in a new dimension of grace, glory, and greatness.
                </p>
                <p>
                  The atmosphere will be charged with the undiluted Word of God, creating an environment ripe for spiritual breakthroughs and undeniable miracles. This isn't just a meeting; it's your moment for divine elevation. Bring your family, friends, neighbors, coworkers, or anyone who needs a miracle and a life-transforming experience. <strong>One invitation could unlock someone's miracle!</strong>
                </p>
                <p>
                  Spread the word about this powerful Canadian revival at the <strong className="text-primary">National Event Venue Space, 1000 Finch Ave W, North York, ON M3J 2V5, Canada</strong>. Let's pack the house with expectation and watch God move! Come ready for your breakthrough – Canada, get ready... grace is invading!
                </p>
              </CardContent>
            </div>
            <div className="relative w-full min-h-[500px] md:min-h-full">
              <Image
                src="https://i.imgur.com/hbzd0ze.png"
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