import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function ProphetessStella() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto rounded-xl shadow-lg overflow-hidden">
          <Image
            src="https://i.imgur.com/MWqm8oS.png"
            alt="Prophetess Stella Iginla"
            width={1200}
            height={800}
            className="w-full object-cover"
            priority
          />
        </Card>
      </div>
    </section>
  );
}