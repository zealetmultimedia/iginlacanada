'use client';

import { useState } from 'react';
import { suggestSocialMediaPosts, SuggestSocialMediaPostsOutput } from '@/ai/flows/suggest-social-media-posts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Copy, Share2, Facebook, Twitter, Instagram } from 'lucide-react';

export default function ShareTool() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<SuggestSocialMediaPostsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setPosts(null);
    try {
      const eventDetails = {
        eventName: 'Canada Divine Visitation 2025: GRACE TO GRACE',
        eventDescription: 'Get ready for an unforgettable, destiny-shifting encounter at the "Grass to Grace" Canada Divine Visitation 2025! This is a unique opportunity to join Prophet Joshua Iginla live for a life-transforming experience where heaven is expected to touch earth in a new dimension of grace, glory, and greatness. Attendees should prepare for a mighty shift to the next level in every area of their lives. This special healing, deliverance, and anointing service is designed to usher participants into a season of bountiful harvests, undeniable miracles, and profound divine encounters. You can anticipate being empowered by undiluted revelations from the Word of God and witnessing forensic prophecy, deep deliverance, healing, and the supernatural like never before. This is more than just a meeting; it is poised to be your personal moment of divine elevation as "Grace is Invading" Canada.',
        hosts: 'Joshua Iginla',
        dates: 'Saturday 6th - Sunday 7th September, 2025, from 4PM daily.',
        location: 'National Event Venue Space, 1000 Finch Ave W, North York, ON M3J 2V5, Canada',
      };
      const result = await suggestSocialMediaPosts(eventDetails);
      setPosts(result);
    } catch (e) {
      console.error(e);
      setError('Failed to generate posts. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string, platform: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied to clipboard!',
      description: `${platform} post is ready to be shared.`,
    });
  };

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto rounded-xl shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary p-3 rounded-full w-fit mb-4">
              <Share2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="font-headline text-3xl">Spread the Word!</CardTitle>
            <CardDescription className="mt-2 text-lg">
              Use our AI tool to generate a post and share the excitement on social media.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            {!posts && (
              <Button onClick={handleGenerate} disabled={loading} size="lg" className="bg-primary text-primary-foreground font-bold">
                {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Share2 className="mr-2 h-5 w-5" />}
                {loading ? 'Generating...' : 'Generate Shareable Posts'}
              </Button>
            )}

            {error && <p className="mt-4 text-destructive">{error}</p>}

            {posts && (
              <div className="w-full mt-6">
                <Tabs defaultValue="facebook" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="facebook"><Facebook className="mr-2" />Facebook</TabsTrigger>
                    <TabsTrigger value="x"><Twitter className="mr-2" />X / Twitter</TabsTrigger>
                    <TabsTrigger value="instagram"><Instagram className="mr-2" />Instagram</TabsTrigger>
                  </TabsList>
                  <TabsContent value="facebook">
                    <PostCard platform="Facebook" content={posts.facebookPost} onCopy={handleCopy} />
                  </TabsContent>
                  <TabsContent value="x">
                    <PostCard platform="X / Twitter" content={posts.xPost} onCopy={handleCopy} />
                  </TabsContent>
                  <TabsContent value="instagram">
                    <PostCard platform="Instagram" content={posts.instagramPost} onCopy={handleCopy} />
                  </TabsContent>
                </Tabs>
                 <Button onClick={handleGenerate} disabled={loading} size="sm" variant="outline" className="mt-4 mx-auto flex">
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    {loading ? 'Regenerating...' : 'Regenerate'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

interface PostCardProps {
  platform: string;
  content: string;
  onCopy: (content: string, platform: string) => void;
}

function PostCard({ platform, content, onCopy }: PostCardProps) {
  return (
    <Card className="mt-2">
      <CardContent className="p-4">
        <Textarea value={content} readOnly className="h-48 text-base bg-background" />
        <Button onClick={() => onCopy(content, platform)} className="mt-4 w-full">
          <Copy className="mr-2 h-4 w-4" /> Copy {platform} Post
        </Button>
      </CardContent>
    </Card>
  );
}