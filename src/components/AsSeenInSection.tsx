export const AsSeenInSection = () => {
  const mediaLogos = [
    { name: "The Times of India", logo: "TOI" },
    { name: "Forbes", logo: "FORBES" },
    { name: "YourStory", logo: "YOURSTORY" },
    { name: "The Economic Times", logo: "ET" },
    { name: "Hindustan Times", logo: "HT" }
  ];

  return (
    <section className="py-12 px-4 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="font-satoshi font-medium text-sm lg:text-base text-secondary mb-8 tracking-wider uppercase">
          AS FEATURED IN
        </h2>

        {/* Media Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {mediaLogos.map((media, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="px-6 py-3 text-muted-foreground font-satoshi font-bold text-lg lg:text-xl tracking-wide opacity-60 hover:opacity-80 transition-opacity">
                {media.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};