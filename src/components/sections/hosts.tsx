import Image from 'next/image';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';

export default function Hosts() {
  const hosts = [
    {
      name: 'Prophet Joshua Iginla',
      title: 'Lead Pastor, Champions Royal Assembly',
      bio: 'An internationally renowned minister, prophetic voice, prolific author, mentor, and philanthropist. He serves as the Lead Pastor of Champions Royal Assembly, an 80,000-seat church headquartered in Abuja, Nigeria, with branches spanning Africa, Europe, and the US. He also spearheads Champions Television, which reaches millions of viewers worldwide.\n\nKnown for his extraordinary prophetic accuracy, powerful demonstration of God\'s anointing, and profound compassion, Prophet Iginla is deeply committed to setting captives free and raising champions for Christ. His ministry extends beyond the pulpit through the Joshua Iginla Foundation, which has empowered thousands of widows, orphans, and the less privileged with scholarships, financial support, and transformative acts of generosity.\n\nA prolific author with over 100 transformational books to his name, Prophet Iginla also mentors numerous pastors and leaders globally. He continues to impact lives worldwide through his ministry, philanthropy, and unwavering passion to showcase God\'s love in action. He is happily married to Prophetess Stella Iginla Zimasa, and they are blessed with five beautiful children.',
      imageSrc: 'https://i.imgur.com/zUFXAPs.png',
      imageAlt: 'Prophet Joshua Iginla',
      aiHint: 'man portrait',
    },
  ];

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Meet Your Host</h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Internationally renowned minister and prophetic voice.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {hosts.map((host, index) => (
            <Card key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full flex flex-col md:flex-row items-stretch">
              <div className="w-full md:w-1/2 h-96 md:h-auto flex-shrink-0">
                <Image
                  src={host.imageSrc}
                  alt={host.imageAlt}
                  data-ai-hint={host.aiHint}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-1/2">
                <CardTitle className="font-headline text-2xl md:text-3xl">{host.name}</CardTitle>
                <CardDescription className="text-primary font-semibold mt-2 text-base md:text-lg">{host.title}</CardDescription>
                <p className="mt-4 text-muted-foreground text-sm md:text-base whitespace-pre-line">
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