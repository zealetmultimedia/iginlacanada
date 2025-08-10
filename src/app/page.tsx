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
import EventVideoEmbed from '@/components/sections/event-video-embed';

export default function Home() {
  const eventVideoUrl = "https://streamable.com/woa89k"; // Define the video URL here
  const videoInvitationUrl = "https://streamable.com/on4lrg"; // New video invitation URL

  const firstVideoSet = [
    {
      imageSrc: 'https://img.youtube.com/vi/ljv9vYLWqpo/hqdefault.jpg',
      videoUrl: 'https://youtu.be/ljv9vYLWqpo', // Updated link
      aiHint: 'preacher sermon',
      title: 'FORENSIC PROPHECY',
      subtitle: 'PART 1',
    },
    {
      imageSrc: 'https://img.youtube.com/vi/x9QegoXqIcI/hqdefault.jpg',
      videoUrl: 'https://youtu.be/x9QegoXqIcI', // Updated link
      aiHint: 'church congregation',
      title: 'FORENSIC PROPHECY',
      subtitle: 'PART 2',
    },
    {
      imageSrc: 'https://i.imgur.com/video_placeholder.png',
      videoUrl: 'https://streamable.com/ifql3d',
      aiHint: 'powerful testimonies, church service',
      title: 'POWERFUL TESTIMONIES',
      subtitle: 'Witness the Miracles',
    },
  ];

  const secondVideoSet = [
    {
      imageSrc: 'https://img.youtube.com/vi/Wo17Mw0EG4c/hqdefault.jpg',
      videoUrl: 'https://youtu.be/Wo17Mw0EG4c',
      aiHint: 'preacher sermon',
      title: 'NEW VIDEO',
      subtitle: 'Part 1',
    },
    {
      imageSrc: 'https://img.youtube.com/vi/pMN813fAzcc/hqdefault.jpg',
      videoUrl: 'https://youtu.be/pMN813fAzcc',
      aiHint: 'preacher sermon',
      title: 'NEW VIDEO',
      subtitle: 'Part 2',
    },
    {
      imageSrc: 'https://img.youtube.com/vi/qzkjl_QeCyM/hqdefault.jpg',
      videoUrl: 'https://youtu.be/qzkjl_QeCyM',
      aiHint: 'preacher sermon',
      title: 'NEW VIDEO',
      subtitle: 'Part 3',
    },
  ];

  const firstGallerySet = [
    {
      src: "https://i.imgur.com/NoJphEb.png",
      alt: 'Prophet Joshua Iginla during a sermon.',
      aiHint: 'preacher sermon',
    },
    {
      src: "https://i.imgur.com/sjwf53X.png",
      alt: 'Prophet Joshua Iginla in prayer.',
      aiHint: 'man praying',
    },
    {
      src: "https://i.imgur.com/mi8X3Ub.png",
      alt: 'Prophet Joshua Iginla ministering to the congregation.',
      aiHint: 'pastor preaching',
    },
    {
      src: "https://i.imgur.com/itCY6Nd.png",
      alt: 'A portrait of Prophet Joshua Iginla.',
      aiHint: 'man portrait',
    },
  ];

  const secondGallerySet = [
    {
      src: "https://imgur.com/EqgjCQp.png",
      alt: 'Prophet Joshua Iginla ministering.',
      aiHint: 'preacher ministering',
    },
    {
      src: "https://imgur.com/7GdU5n7.png",
      alt: 'Prophet Joshua Iginla speaking.',
      aiHint: 'preacher speaking',
    },
    {
      src: "https://imgur.com/SLmOGvr.png",
      alt: 'Prophet Joshua Iginla in a moment of worship.',
      aiHint: 'man worshiping',
    },
    {
      src: "https://imgur.com/ODlCxX8.png",
      alt: 'Prophet Joshua Iginla with a microphone.',
      aiHint: 'preacher with microphone',
    },
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ContactBar />
        <Gallery imageList={firstGallerySet} /> {/* First instance of Gallery */}
        <Registration /> {/* Moved Registration here */}
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
        <Highlights />
        <Videos videoList={firstVideoSet} /> {/* First instance of Videos */}
        <Hosts />
        {/* New Video Invitation Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Special Video Invitation</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
                A personal message from Prophet Joshua Iginla.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <EventVideoEmbed videoUrl={videoInvitationUrl} />
            </div>
          </div>
        </section>
        <AdditionalHighlights />
        <Videos videoList={secondVideoSet} /> {/* Second instance of Videos with new links */}
        <Registration />
        <Gallery imageList={secondGallerySet} /> {/* Second instance of Gallery with new images */}
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