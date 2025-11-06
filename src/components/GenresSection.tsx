import { Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const genres = [
  { name: "Pop", emoji: "🎤", count: "12.5K" },
  { name: "Hip-Hop", emoji: "🎧", count: "8.3K" },
  { name: "Rock", emoji: "🎸", count: "9.7K" },
  { name: "R&B", emoji: "🎵", count: "5.2K" },
  { name: "Country", emoji: "🤠", count: "4.8K" },
  { name: "Electronic", emoji: "🎹", count: "6.1K" },
  { name: "Latin", emoji: "💃", count: "7.4K" },
  { name: "K-Pop", emoji: "🌟", count: "5.9K" },
];

const GenresSection = () => {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Music className="h-6 w-6 text-accent" />
          Browse by Genre
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {genres.map((genre, index) => (
            <a
              key={index}
              href="#"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/80 to-secondary/40 border border-border p-6 hover:border-accent/50 transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all" />
              <div className="relative text-center">
                <div className="text-4xl mb-2">{genre.emoji}</div>
                <div className="font-bold text-foreground group-hover:text-accent transition-colors">
                  {genre.name}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {genre.count} songs
                </div>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GenresSection;
