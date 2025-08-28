
const AsSeenInSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Revolutionary Weight Loss Approach",
      description: "Early's medical-first approach is changing how people lose weight permanently.",
      source: "Health Tribune"
    },
    {
      id: 2,
      title: "Diagnosis Before Diet",
      description: "Why medical testing should be the first step in every weight loss journey.",
      source: "Wellness Weekly"
    },
    {
      id: 3,
      title: "Beyond Calories",
      description: "How metabolic health testing reveals the real reasons behind weight gain.",
      source: "Medical Today"
    }
  ];

  return (
    <section className="py-8 px-4 lg:px-16 pb-32 lg:pb-8" style={{ backgroundColor: '#FAF8F1' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-unna text-3xl lg:text-4xl mb-4" style={{ color: '#393f2d' }}>
            As Featured In
          </h2>
        </div>

        {/* Mobile Layout - Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="overflow-x-scroll scrollbar-hide">
            <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
              {newsItems.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-72">
                  <NewsCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsCard = ({ item }: { item: { id: number; title: string; description: string; source: string } }) => {
  return (
    <div className="rounded-2xl p-6 shadow-lg h-full" style={{ backgroundColor: '#434a35' }}>
      <h3 className="font-unna text-xl mb-3 text-white">
        {item.title}
      </h3>
      <p className="font-satoshi text-sm mb-4 text-gray-300 leading-relaxed">
        {item.description}
      </p>
      <p className="font-satoshi text-xs font-semibold text-gray-400">
        {item.source}
      </p>
    </div>
  );
};

export { AsSeenInSection };
