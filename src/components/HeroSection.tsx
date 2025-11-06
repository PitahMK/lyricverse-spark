import { PlayCircle, Star } from "lucide-react";
import { Card } from "./ui/card";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 mb-12">
      <Card className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-card to-accent/10 border-primary/30">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl" />
        <div className="relative p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  Featured Today
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                "Midnight Rain"
              </h2>
              <p className="text-xl text-muted-foreground mb-2">Taylor Swift</p>
              <p className="text-muted-foreground mb-6">
                Dive into the poetic brilliance of Taylor Swift's latest hit. Explore every word and discover the story behind the lyrics.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <PlayCircle className="h-5 w-5" />
                View Lyrics
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/40 to-accent/40 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎵</div>
                  <p className="text-sm text-muted-foreground">Album: Midnights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default HeroSection;
