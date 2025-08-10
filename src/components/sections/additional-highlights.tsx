import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GitBranchPlus, HeartHandshake, Church } from 'lucide-react';

const additionalHighlights = [
  { icon: <GitBranchPlus className="w-8 h-8 text-foreground" />, title: 'Undiluted Revelations', description: 'Be empowered by undiluted revelations from the Word of God.' },
  { icon: <HeartHandshake className="w-8 h-8 text-foreground" />, title: 'Deliverance & Breakthrough', description: 'Step into your season of bountiful harvests and miracles.' },
  { icon: <Church className="w-8 h-8 text-foreground" />, title: 'Life-Transforming Experience', description: 'Join a life-transforming experience as heaven kisses earth.' },
];

export default function AdditionalHighlights() {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {additionalHighlights.map((highlight) => (
            <Card key={highlight.title} className="flex flex-col items-center text-center p-6 bg-muted rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="p-4 bg-primary rounded-full mb-4">
                  {highlight.icon}
                </div>
                <CardTitle className="font-headline text-xl text-primary">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-primary">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}