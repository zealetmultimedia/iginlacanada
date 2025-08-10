import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle, Volume2 } from 'lucide-react';

const videos = [
  {
    imageSrc: 'https://img.youtube.com/vi/FH4UcrBKjxQ/hqdefault.jpg',
    videoUrl: 'https://youtu.be/ljv9vYLWqpo?si',
    aiHint: 'preacher sermon',
    title: 'FORENSIC PROPHECY',
    subtitle: 'PART 1',
  },
  {
    imageSrc: 'https://img.youtube.com/vi/oC1-f34axLQ/hqdefault.jpg',
    videoUrl: 'https://youtu.be/oC1-f34axLQ',
    aiHint: 'church congregation',
    title: 'FORENSIC PROPHECY',
    subtitle: 'PART 2',
  },
  {
    imageSrc: 'https://img.youtube.com/vi/87HCwOeNTW4/hqdefault.jpg',
    videoUrl: 'https://youtu.be/87HCwOeNTW4',
    aiHint: 'worship event',
    title: 'FORENSIC PROPHECY',
    subtitle: 'PART 3',
  },
];

export default function Videos() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSerF0kVh5vVFlvU9ZkL8ToE-tkURDjU4BW_jToRs9pNdC9N-Q/viewform?usp=dialog";

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-primary-foreground/80 font-semibold tracking-wider">Champions International Ministry</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter mt-2">
            COME AND RECEIVE YOUR MIRACLE
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Link href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Card className="group relative w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="absolute top-0 left-0 w-full bg-primary/80 text-primary-foreground p-2 text-sm font-bold flex items-center z-10">
                      <Volume2 className="w-4 h-4 mr-2" />
                      <p>COME AND RECEIVE YOUR MIRACLE!</p>
                    </div>
                    <Image
                      src={video.imageSrc}
                      alt={video.title}
                      data-ai-hint={video.aiHint}
                      width={600}
                      height={400}
                      className="w-full object-cover aspect-video transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <PlayCircle className="w-20 h-20 text-white/80" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <h3 className="font-headline text-xl font-bold mt-4">{video.title}</h3>
              <p className="text-sm text-primary-foreground/80">{video.subtitle}</p>
              <Button asChild className="mt-4 font-bold transition-transform duration-300 hover:scale-105" variant="secondary">
                <Link href={googleFormUrl} target="_blank" rel="noopener noreferrer">Reserve My Seat</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
