
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  publication: string;
  publicationColor: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "WHO Scientists Endorse Weight Loss Drugs For Controlling Obesity: What Does It Mean For Therapies?",
    date: "December 2024",
    publication: "The Indian EXPRESS",
    publicationColor: "text-red-600"
  },
  {
    id: 2,
    title: "Not Just Weight Loss, GLP-1 Drugs Like Ozempic Can Help With 175 Conditions, Says Groundbreaking Study",
    date: "January 2025",
    publication: "TOI",
    publicationColor: "text-red-600"
  },
  {
    id: 3,
    title: "Oprah Winfrey Shares Experience Of Taking 'magic Drug For Weight Loss: 'One Of The First Things I Realised...'",
    date: "February 2025",
    publication: "The Indian EXPRESS",
    publicationColor: "text-red-600"
  },
  {
    id: 4,
    title: "New Study Shows Metabolic Testing Improves Weight Loss Success By 85%",
    date: "March 2025",
    publication: "Forbes",
    publicationColor: "text-blue-600"
  },
  {
    id: 5,
    title: "Personalized Medicine Approach to Obesity Shows Promising Results",
    date: "April 2025",
    publication: "ET Health",
    publicationColor: "text-green-600"
  }
];

export const AsSeenInSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsArticles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsArticles.length) % newsArticles.length);
  };

  const getVisibleArticles = () => {
    const articles = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % newsArticles.length;
      articles.push(newsArticles[index]);
    }
    return articles;
  };

  return (
    <section className="py-12 px-4 lg:px-16 bg-muted">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="font-unna text-2xl lg:text-3xl text-center text-foreground mb-12">
          GLP-1s as Seen in Top Health News
        </h2>

        {/* Mobile Layout - Single Card */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="bg-secondary rounded-2xl p-6 text-white min-h-[200px] flex flex-col justify-between">
              <h3 className="font-satoshi font-semibold text-lg mb-4 leading-tight">
                {newsArticles[currentIndex].title}
              </h3>
              <div className="flex justify-between items-end">
                <span className="font-satoshi text-sm opacity-90">
                  {newsArticles[currentIndex].date}
                </span>
                <span className={`font-bold text-lg ${newsArticles[currentIndex].publicationColor} bg-white px-3 py-1 rounded`}>
                  {newsArticles[currentIndex].publication}
                </span>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {newsArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-secondary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Three Cards with Navigation */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-secondary" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-secondary" />
            </button>

            {/* Cards Container */}
            <div className="grid grid-cols-3 gap-6">
              {getVisibleArticles().map((article) => (
                <div key={article.id} className="bg-secondary rounded-2xl p-6 text-white min-h-[280px] flex flex-col justify-between">
                  <h3 className="font-satoshi font-semibold text-lg mb-4 leading-tight">
                    {article.title}
                  </h3>
                  <div className="flex flex-col gap-3">
                    <span className="font-satoshi text-sm opacity-90">
                      {article.date}
                    </span>
                    <div className="self-end">
                      <span className={`font-bold text-lg ${article.publicationColor} bg-white px-3 py-1 rounded`}>
                        {article.publication}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
