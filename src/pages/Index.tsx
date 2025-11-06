import ViewerHeader from "@/components/ViewerHeader";
import SearchHero from "@/components/SearchHero";
import HeroSection from "@/components/HeroSection";
import GenresSection from "@/components/GenresSection";
import TrendingLyrics from "@/components/TrendingLyrics";
import LatestAdditions from "@/components/LatestAdditions";
import FeaturedPlaylists from "@/components/FeaturedPlaylists";
import NewsSection from "@/components/NewsSection";
import FeaturedArtists from "@/components/FeaturedArtists";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ViewerHeader />
      <main>
        <SearchHero />
        <HeroSection />
        <div className="container mx-auto px-4 pb-16 space-y-8">
          <GenresSection />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TrendingLyrics />
            <LatestAdditions />
          </div>
          <FeaturedPlaylists />
          <NewsSection />
          <FeaturedArtists />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
