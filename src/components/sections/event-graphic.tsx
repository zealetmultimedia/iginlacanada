import Image from 'next/image';

export default function EventGraphic() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://imgur.com/xq1gr8m.png"
            alt="Canada Divine Visitation 2025 Event Graphic"
            width={1200}
            height={675}
            layout="responsive"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}