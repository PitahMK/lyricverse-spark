import Header from "@/components/Header";
import SearchHero from "@/components/SearchHero";
import TrendingLyrics from "@/components/TrendingLyrics";
import LatestAdditions from "@/components/LatestAdditions";
import FeaturedArtists from "@/components/FeaturedArtists";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <SearchHero />
        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <TrendingLyrics />
            <LatestAdditions />
          </div>
          <FeaturedArtists />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
