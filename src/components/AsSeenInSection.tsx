
const AsSeenInSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Revolutionary Weight Loss Approach",
      description: "Early's medical-first approach is changing how people lose weight permanently."
    },
    {
      id: 2,
      title: "Diagnosis Before Diet",
      description: "Why medical testing should be the first step in every weight loss journey."
    },
    {
      id: 3,
      title: "Beyond Calories",
      description: "How metabolic health testing reveals the real reasons behind weight gain."
    }
  ];

  return (
    <section className="py-6 px-4 lg:px-16 pb-36 lg:pb-6" style={{ backgroundColor: '#FAF8F1' }}>
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

const NewsCard = ({ item }: { item: { id: number; title: string; description: string } }) => {
  return (
    <div className="rounded-2xl p-6 shadow-lg h-full" style={{ backgroundColor: '#434a35' }}>
      <h3 className="font-unna text-xl mb-3 text-white">
        {item.title}
      </h3>
      <p className="font-satoshi text-sm leading-relaxed text-gray-300">
        {item.description}
      </p>
    </div>
  );
};

export { AsSeenInSection };
