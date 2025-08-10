import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function StayConnected() {
  const whatsappUrl = "https://wa.me/+2348137014834"; // Placeholder URL
  const facebookUrl = "https://www.facebook.com/joshuaiginlaministries/";

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto rounded-xl shadow-lg border-primary/50">
            <CardHeader className="text-center p-8">
                <div className="mx-auto bg-primary p-3 rounded-full w-fit mb-4">
                    <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="font-headline text-3xl">Stay Connected</CardTitle>
                <CardDescription className="mt-2 text-lg text-muted-foreground">
                    Join our communities for updates on the Harvest Miracles Gathering, prophetic messages, prayer alerts, and more.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-6 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg w-full sm:w-auto">
                    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2" /> Join WhatsApp
                    </Link>
                </Button>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-6 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg w-full sm:w-auto">
                    <Link href={facebookUrl} target="_blank" rel="noopener noreferrer">
                        <Facebook className="mr-2" /> Follow on Facebook
                    </Link>
                </Button>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}