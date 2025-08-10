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
import EventVideoEmbed from '@/components/sections/event-video-embed'; // New import for the video component

export default function Home() {
  const eventVideoUrl = "https://streamable.com/woa89k"; // Define the video URL here

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ContactBar />
        <Gallery />
        <Highlights />
        <section className="py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Event Highlight Video</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
                Catch a glimpse of the powerful atmosphere awaiting you.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <EventVideoEmbed videoUrl={eventVideoUrl} />
            </div>
          </div>
        </section>
        <Videos />
        <Registration />
        <Hosts />
        <AdditionalHighlights />
        <Videos />
        <Registration />
        <Gallery />
        <Registration />
        <SpecialInvitation />
        <Location />
        <Registration />
        <StayConnected />
        <ShareTool />
      </main>
      <Footer />
    </div>
  );
}