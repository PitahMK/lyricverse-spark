import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchHero = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10" />
          <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-2xl">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-6 w-6" />
              <Input 
                type="search"
                placeholder="Search for lyrics by song title or artist..."
                className="pl-14 pr-4 py-6 text-lg bg-secondary/50 border-border focus:border-primary focus:ring-primary transition-all"
              />
            </div>
            <p className="text-muted-foreground text-lg font-medium">
              Explore Music Lyrics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchHero;
