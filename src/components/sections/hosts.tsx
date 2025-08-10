import Image from 'next/image';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';

export default function Hosts() {
  const hosts = [
    {
      name: 'Prophet Joshua Iginla',
      title: 'Lead Pastor, Champions Royal Assembly',
      bio: 'An internationally renowned minister, prophetic voice, author, and philanthropist. Known for his prophetic accuracy and demonstration of God\'s power, he leads an 80,000-seat church and Champions Television, with a vision to set captives free and raise champions for Christ.',
      imageSrc: 'https://i.imgur.com/zUFXAPs.png',
      imageAlt: 'Prophet Joshua Iginla',
      aiHint: 'man portrait',
    },
    {
      name: 'Prophetess Stella Iginla',
      title: 'Co-Pastor, Champions Royal Assembly',
      bio: 'A powerful woman of God, co-pastor, and spiritual mother, Prophetess Stella Iginla stands alongside Prophet Joshua Iginla, ministering with grace and anointing. Her teachings and prayers bring healing, deliverance, and spiritual growth to many, complementing the ministry with a profound touch of compassion and wisdom.',
      imageSrc: 'https://i.imgur.com/2y0222L.png', // Placeholder image, replace with actual image
      imageAlt: 'Prophetess Stella Iginla',
      aiHint: 'woman portrait',
    },
  ];

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Meet Your Hosts</h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Internationally renowned ministers and prophetic voices.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {hosts.map((host, index) => (
            <Card key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
                <Image
                  src={host.imageSrc}
                  alt={host.imageAlt}
                  data-ai-hint={host.aiHint}
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2">
                <CardTitle className="font-headline text-2xl md:text-3xl">{host.name}</CardTitle>
                <CardDescription className="text-primary font-semibold mt-2 text-base md:text-lg">{host.title}</CardDescription>
                <p className="mt-4 text-muted-foreground text-sm md:text-base">
                  {host.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}