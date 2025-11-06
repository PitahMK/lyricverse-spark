import { ListMusic, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const playlists = [
  {
    name: "Today's Top Hits",
    description: "The hottest songs right now",
    songCount: 50,
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    name: "Chill Vibes",
    description: "Relax with these smooth tracks",
    songCount: 42,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Workout Energy",
    description: "High-energy beats for your gym session",
    songCount: 38,
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    name: "Indie Favorites",
    description: "Discover underground gems",
    songCount: 45,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

const FeaturedPlaylists = () => {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <ListMusic className="h-6 w-6 text-accent" />
          Featured Playlists
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {playlists.map((playlist, index) => (
            <a
              key={index}
              href="#"
              className="group relative overflow-hidden rounded-xl border border-border bg-secondary/30 hover:bg-secondary/60 transition-all hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${playlist.gradient} opacity-50`} />
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center">
                    <Play className="h-8 w-8 text-foreground" />
                  </div>
                  <div className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded">
                    {playlist.songCount} songs
                  </div>
                </div>
                <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                  {playlist.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {playlist.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedPlaylists;
