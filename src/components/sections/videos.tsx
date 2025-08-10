'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle, Volume2 } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const videos = [
  {
    imageSrc: 'https://img.youtube.com/vi/ljv9vYLWqpo/hqdefault.jpg',
    videoUrl: 'https://youtu.be/Wo17Mw0EG4c',
    aiHint: 'preacher sermon',
    title: 'FORENSIC PROPHECY',
    subtitle: 'PART 1',
  },
  {
    imageSrc: 'https://img.youtube.com/vi/x9QegoXqIcI/hqdefault.jpg',
    videoUrl: 'https://youtu.be/Wo17Mw0EG4c',
    aiHint: 'church congregation',
    title: 'FORENSIC PROPHECY',
    subtitle: 'PART 2',
  },
  {
    imageSrc: 'https://i.imgur.com/video_placeholder.png', // Using a generic placeholder image for Streamable video
    videoUrl: 'https://streamable.com/pr7gsk',
    aiHint: 'powerful testimonies, church service',
    title: 'POWERFUL TESTIMONIES',
    subtitle: 'Witness the Miracles',
  },
];

// Helper function to get the embed URL from a given video URL
const getEmbedUrl = (url: string) => {
  if (url.includes('youtu.be/') || url.includes('youtube.com/')) {
    const videoId = url.split('v=')[1] || url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
  if (url.includes('streamable.com/')) {
    const videoId = url.split('streamable.com/')[1];
    return `https://streamable.com/e/${videoId}?autoplay=1`;
  }
  return url; // Fallback
};

export default function Videos() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSerF0kVh5vVFlvU9ZkL8ToE-tkURDjU4BW_jToRs9pNdC9N-Q/viewform?usp=dialog";
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-secondary text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground font-semibold tracking-wider">Champions International Ministry</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter mt-2">
            COME AND RECEIVE YOUR MIRACLE
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                onClick={() => setSelectedVideoUrl(video.videoUrl)}
                className="w-full cursor-pointer"
              >
                <Card className="group relative w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="absolute top-0 left-0 w-full bg-secondary/80 text-secondary-foreground p-2 text-sm font-bold flex items-center z-10">
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
              </div>
              <h3 className="font-headline text-xl font-bold mt-4">{video.title}</h3>
              <p className="text-sm text-muted-foreground">{video.subtitle}</p>
              <Button asChild className="mt-4 font-bold transition-transform duration-300 hover:scale-105" variant="secondary">
                <Link href={googleFormUrl} target="_blank" rel="noopener noreferrer">Reserve My Seat</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedVideoUrl} onOpenChange={() => setSelectedVideoUrl(null)}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle>Watch Video</DialogTitle>
            <DialogDescription>
              Enjoy the powerful moments from our ministry.
            </DialogDescription>
          </DialogHeader>
          {selectedVideoUrl && (
            <div className="relative w-full aspect-video">
              <iframe
                src={getEmbedUrl(selectedVideoUrl)}
                width="100%"
                height="100%"
                allowFullScreen
                allow="autoplay"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Embedded Video"
              ></iframe>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}