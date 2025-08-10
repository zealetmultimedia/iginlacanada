import Image from 'next/image';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';

export default function Hosts() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Meet Your Host</h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            An internationally renowned minister and prophetic voice.
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-5xl w-full md:grid md:grid-cols-2 items-center">
            <div className="w-full h-full">
              <Image
                src="https://i.imgur.com/zUFXAPs.png"
                alt="Prophet Joshua Iginla"
                data-ai-hint="man portrait"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <CardTitle className="font-headline text-3xl md:text-4xl">Prophet Joshua Iginla</CardTitle>
              <CardDescription className="text-primary font-semibold mt-2 text-lg">Lead Pastor, Champions Royal Assembly</CardDescription>
              <p className="mt-4 text-muted-foreground md:text-lg">
                An internationally renowned minister, prophetic voice, author, and philanthropist. Known for his prophetic accuracy and demonstration of God's power, he leads an 80,000-seat church and Champions Television, with a vision to set captives free and raise champions for Christ.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}