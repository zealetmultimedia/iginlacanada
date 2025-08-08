import { Phone } from 'lucide-react';

export default function ContactBar() {
  return (
    <section className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4">
          <Phone className="w-6 h-6" />
          <p className="text-lg md:text-xl font-bold text-center">
            For Enquiries/Volunteers Call: <a href="tel:+14375510381" className="hover:underline whitespace-nowrap">+1 (437) 551-0381</a>, <a href="tel:+2348149439447" className="hover:underline whitespace-nowrap">+234 814 943 9447</a>
          </p>
        </div>
      </div>
    </section>
  );
}
