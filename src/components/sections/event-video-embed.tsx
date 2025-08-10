import { Card, CardContent } from '@/components/ui/card';

export default function EventVideoEmbed({ videoUrl }: { videoUrl: string }) {
  // Streamable embed URLs typically use '/e/' prefix
  const embedUrl = videoUrl.replace('streamable.com/', 'streamable.com/e/');

  return (
    <Card className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative w-full aspect-video">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            allowFullScreen
            allow="autoplay"
            className="absolute top-0 left-0 w-full h-full border-0"
            title="Event Highlight Video"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
}