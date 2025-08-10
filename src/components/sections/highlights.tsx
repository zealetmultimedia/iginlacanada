import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Church, Flame, Award, GitBranchPlus, HeartHandshake, Sparkles } from 'lucide-react';
import Image from 'next/image';

const highlights = [
  { icon: <Flame className="w-8 h-8 text-primary" />, title: 'Forensic Prophecy', description: 'Witness forensic prophecy, deep deliverance, and healing.' },
  { icon: <Sparkles className="w-8 h-8 text-primary" />, title: 'Supernatural Encounters', description: 'Experience the supernatural like never before.' },
  { icon: <Award className="w-8 h-8 text-primary" />, title: 'Divine Elevation', description: 'This is more than a meeting, it\'s your moment of divine elevation.' },
  { icon: <GitBranchPlus className="w-8 h-8 text-primary" />, title: 'Undiluted Revelations', description: 'Be empowered by undiluted revelations from the Word of God.' },
  { icon: <HeartHandshake className="w-8 h-8 text-primary" />, title: 'Deliverance & Breakthrough', description: 'Step into your season of bountiful harvests and miracles.' },
  { icon: <Church className="w-8 h-8 text-primary" />, title: 'Life-Transforming Experience', description: 'Join a life-transforming experience as heaven kisses earth.' },
];

export default function Highlights() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">An Unforgettable Encounter</h2>
           <div className="mt-4 max-w-4xl mx-auto text-muted-foreground md:text-lg/relaxed space-y-4 text-left sm:text-center">
            <p>
              Get ready for an unforgettable, destiny-shifting encounter at the "Grass to Grace" Canada Invasion 2025! This is a unique opportunity to join Prophet Joshua Iginla live for a life-transforming experience where heaven is expected to touch earth in a new dimension of grace, glory, and greatness. Attendees should prepare for a mighty shift to the next level in every area of their lives.
            </p>
            <div className="my-8 flex justify-center">
              <Image
                src="https://i.imgur.com/a/PBMI6Zy.png"
                alt="Canada Invasion 2025 Event Poster"
                width={720}
                height={1080}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
            <p>
             This special healing, deliverance, and anointing service is designed to usher participants into a season of bountiful harvests, undeniable miracles, and profound divine encounters. You can anticipate being empowered by undiluted revelations from the Word of God and witnessing forensic prophecy, deep deliverance, healing, and the supernatural like never before. This is more than just a meeting; it is poised to be your personal moment of divine elevation as "Grace is Invading" Canada.
            </p>
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