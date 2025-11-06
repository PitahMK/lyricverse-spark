import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const trendingSongs = [
  { rank: 1, title: "Anti-Hero", artist: "Taylor Swift" },
  { rank: 2, title: "Flowers", artist: "Miley Cyrus" },
  { rank: 3, title: "Kill Bill", artist: "SZA" },
  { rank: 4, title: "Creepin'", artist: "Metro Boomin, The Weeknd & 21 Savage" },
  { rank: 5, title: "Escapism", artist: "RAYE ft. 070 Shake" },
  { rank: 6, title: "Unholy", artist: "Sam Smith & Kim Petras" },
  { rank: 7, title: "As It Was", artist: "Harry Styles" },
  { rank: 8, title: "Rich Flex", artist: "Drake & 21 Savage" },
  { rank: 9, title: "Boy's a liar Pt. 2", artist: "PinkPantheress & Ice Spice" },
  { rank: 10, title: "Just Wanna Rock", artist: "Lil Uzi Vert" },
  { rank: 11, title: "Calm Down", artist: "Rema & Selena Gomez" },
  { rank: 12, title: "Snooze", artist: "SZA" },
  { rank: 13, title: "Search & Rescue", artist: "Drake" },
  { rank: 14, title: "Players", artist: "Coi Leray" },
  { rank: 15, title: "All My Life", artist: "Lil Durk ft. J. Cole" },
];

const TrendingLyrics = () => {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <TrendingUp className="h-6 w-6 text-accent" />
          Trending Lyrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {trendingSongs.map((song) => (
            <a
              key={song.rank}
              href="#"
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
            >
              <span className="text-2xl font-bold text-muted-foreground w-8 text-center group-hover:text-accent transition-colors">
                {song.rank}
              </span>
              <div className="flex-1">
                <div className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {song.title}
                </div>
                <div className="text-sm text-muted-foreground">{song.artist}</div>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingLyrics;
