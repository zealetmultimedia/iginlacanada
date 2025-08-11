import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSerF0kVh5vVFlvU9ZkL8ToE-tkURDjU4BW_jToRs9pNdC9N-Q/viewform?usp=dialog";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <img src="https://i.imgur.com/hgzTcOy.png" alt="Joshua Iginla Ministries Logo" className="h-16" />
        </Link>
        <nav>
          <Button asChild className="font-bold text-lg py-3 px-6 transition-transform duration-300 hover:scale-105 uppercase" variant="default" style={{ backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}>
            <Link href={googleFormUrl} target="_blank" rel="noopener noreferrer">Reserve My Seat</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}