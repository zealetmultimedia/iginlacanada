import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-background/95">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <div className="text-center text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2 mb-2">
                <Phone className="w-4 h-4"/>
                <p className="font-semibold">For Enquiries/Volunteers Call: <a href="tel:+14375510381" className="hover:underline">+1 (437) 551-0381</a>, <a href="tel:+2348149439447" className="hover:underline">+234 814 943 9447</a></p>
            </div>
            <p className="text-balance leading-loose">
            © 2025 | Canada Invasion 2025™ | <Link href="#" className="hover:underline">Terms & Conditions</Link> | <Link href="#" className="hover:underline">Privacy Policy</Link>
            </p>
        </div>
      </div>
    </footer>
  );
}
