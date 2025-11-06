import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const latestSongs = [
  { title: "Karma", artist: "Taylor Swift" },
  { title: "Dance The Night", artist: "Dua Lipa" },
  { title: "Paint The Town Red", artist: "Doja Cat" },
  { title: "vampire", artist: "Olivia Rodrigo" },
  { title: "Cruel Summer", artist: "Taylor Swift" },
  { title: "fukumean", artist: "Gunna" },
  { title: "Seven", artist: "Jungkook ft. Latto" },
  { title: "What Was I Made For?", artist: "Billie Eilish" },
];

const LatestAdditions = () => {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Clock className="h-6 w-6 text-accent" />
          Latest Additions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {latestSongs.map((song, index) => (
            <a
              key={index}
              href="#"
              className="block p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
            >
              <div className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {song.title}
              </div>
              <div className="text-sm text-muted-foreground">{song.artist}</div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LatestAdditions;
