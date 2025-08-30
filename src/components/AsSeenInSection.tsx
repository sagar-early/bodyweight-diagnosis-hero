
const AsSeenInSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Revolutionary Weight Loss Program Launches in India",
      description: "EarlyFit introduces India's first doctor-led GLP-1 weight loss program with senior endocrinologists - HindustanMetro",
      link: "https://www.hindustanmetro.com/earlyfit-launched-indias-first-doctor-led-glp-1-weight-loss-program-led-by-a-team-of-senior-endocrinologists/"
    },
    {
      id: 2,
      title: "Medical Breakthrough in Weight Management",
      description: "EarlyFit's innovative approach to weight loss with specialist endocrinologist team makes headlines - TPTV News",
      link: "https://tptv.in/earlyfit-launched-indias-first-doctor-led-glp-1-weight-loss-program-led-by-a-team-of-senior-endocrinologists"
    }
  ];

  return (
    <section className="py-6 px-4 lg:px-16 pb-36 lg:pb-12" style={{ backgroundColor: '#FAF8F1' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="font-unna text-3xl lg:text-4xl mb-4" style={{ color: '#393f2d' }}>
            As Featured In
          </h2>
        </div>

        {/* Mobile Layout - Horizontal Scroll - Fixed scrolling */}
        <div className="lg:hidden">
          <div className="overflow-x-auto scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
            <div className="flex gap-4 pb-4" style={{ minWidth: 'max-content' }}>
              {newsItems.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-72">
                  <NewsCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Center aligned with 2 cards */}
        <div className="hidden lg:flex lg:justify-center lg:gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="w-full max-w-md">
              <NewsCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsCard = ({ item }: { item: { id: number; title: string; description: string; link: string } }) => {
  return (
    <a 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block rounded-2xl p-6 shadow-lg h-full hover:transform hover:scale-105 transition-transform duration-200" 
      style={{ backgroundColor: '#434a35' }}
    >
      <h3 className="font-unna text-xl mb-3 text-white">
        {item.title}
      </h3>
      <p className="font-satoshi text-sm leading-relaxed text-gray-300">
        {item.description}
      </p>
    </a>
  );
};

export { AsSeenInSection };
