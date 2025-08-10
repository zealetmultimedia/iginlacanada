import Image from 'next/image';
import { Card } from '@/components/ui/card';

const images = [
  {
    src: "https://i.imgur.com/NoJphEb.png",
    alt: 'Prophet Joshua Iginla during a sermon.',
    aiHint: 'preacher sermon',
  },
  {
    src: "https://i.imgur.com/sjwf53X.png",
    alt: 'Prophet Joshua Iginla in prayer.',
    aiHint: 'man praying',
  },
  {
    src: "https://i.imgur.com/mi8X3Ub.png",
    alt: 'Prophet Joshua Iginla ministering to the congregation.',
    aiHint: 'pastor preaching',
  },
  {
    src: "https://i.imgur.com/itCY6Nd.png",
    alt: 'A portrait of Prophet Joshua Iginla.',
    aiHint: 'man portrait',
  },
];

export default function Gallery() {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl"></h2>
          <p className="mt-3 max-w-2xl mx-auto text-foreground md:text-xl/relaxed font-bold font-headline">
            Moments of faith and power with Prophet Joshua Iginla.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.aiHint}
                width={600}
                height={400}
                className="w-full object-cover aspect-[3/2]"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}