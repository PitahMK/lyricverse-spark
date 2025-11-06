import { Mic2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const featuredArtists = [
  "Taylor Swift",
  "Drake",
  "SZA",
  "Bad Bunny",
  "The Weeknd",
  "Olivia Rodrigo",
  "Doja Cat",
  "Harry Styles",
  "Beyoncé",
  "Billie Eilish",
];

const FeaturedArtists = () => {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Mic2 className="h-6 w-6 text-accent" />
          Featured Artists
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {featuredArtists.map((artist, index) => (
            <a
              key={index}
              href="#"
              className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/60 border border-border text-center font-semibold transition-all hover:scale-105 hover:border-accent group"
            >
              <span className="group-hover:text-accent transition-colors">
                {artist}
              </span>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedArtists;
