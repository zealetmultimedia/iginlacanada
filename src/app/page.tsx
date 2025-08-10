import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import ContactBar from '@/components/sections/contact-bar';
import Highlights from '@/components/sections/highlights';
import Hosts from '@/components/sections/hosts';
import Location from '@/components/sections/location';
import Registration from '@/components/sections/registration';
import ShareTool from '@/components/sections/share-tool';
import Videos from '@/components/sections/videos';
import StayConnected from '@/components/sections/stay-connected';
import Gallery from '@/components/sections/gallery';
import SpecialInvitation from '@/components/sections/special-invitation';
import AdditionalHighlights from '@/components/sections/additional-highlights';
import EventGraphic from '@/components/sections/event-graphic'; // New import

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ContactBar />
        <Highlights />
        <Registration />
        <Hosts />
        <EventGraphic /> {/* New component added here */}
        <AdditionalHighlights />
        <Registration />
        <Videos />
        <Gallery />
        <Registration />
        <SpecialInvitation />
        <Location />
        <StayConnected />
        <ShareTool />
      </main>
      <Footer />
    </div>
  );
}