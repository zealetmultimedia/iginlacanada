'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';
// Removed useState and Dialog imports as they are no longer needed

interface Video {
  imageSrc: string;
  videoUrl: string;
  aiHint: string;
  title: string;
  subtitle: string;
}

interface VideosProps {
  videoList: Video[];
}

// Helper function to get the embed URL from a given video URL
const getEmbedUrl = (url: string) => {
  if (url.includes('youtu.be/') || url.includes('youtube.com/')) {
    const videoId = url.split('v=')[1] || url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`; // Removed autoplay=1 to prevent all videos from playing at once
  }
  if (url.includes('streamable.com/')) {
    const videoId = url.split('streamable.com/')[1];
    return `https://streamable.com/e/${videoId}`; // Removed autoplay=1
  }
  return url; // Fallback
};

export default function Videos({ videoList }: VideosProps) {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSerF0kVh5vVFlvU9ZkL8ToE-tkURDjU4BW_jToRs9pNdC9N-Q/viewform?usp=dialog";

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
          {videoList.map((video, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Card className="group relative w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="absolute top-0 left-0 w-full bg-secondary/80 text-secondary-foreground p-2 text-sm font-bold flex items-center z-10">
                    <Volume2 className="w-4 h-4 mr-2" />
                    <p>COME AND RECEIVE YOUR MIRACLE!</p>
                  </div>
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={getEmbedUrl(video.videoUrl)}
                      width="100%"
                      height="100%"
                      allowFullScreen
                      // Removed allow="autoplay" to prevent all videos from playing automatically
                      className="absolute top-0 left-0 w-full h-full border-0"
                      title={video.title}
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
              <h3 className="font-headline text-xl font-bold mt-4">{video.title}</h3>
              <p className="text-sm text-muted-foreground">{video.subtitle}</p>
              <Button asChild className="mt-4 font-bold transition-transform duration-300 hover:scale-105" variant="secondary">
                <Link href={googleFormUrl} target="_blank" rel="noopener noreferrer">Reserve My Seat</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* Removed Dialog component */}
    </section>
  );
}