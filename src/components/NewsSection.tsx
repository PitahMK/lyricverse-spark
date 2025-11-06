import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const newsArticles = [
  {
    title: "Taylor Swift Breaks Streaming Records with 'Midnights'",
    excerpt: "The pop superstar's latest album has shattered multiple streaming records across all major platforms, becoming the most-streamed album in a single week.",
    date: "2 days ago",
    category: "Breaking News",
  },
  {
    title: "The Rise of Afrobeats: A Global Phenomenon",
    excerpt: "From Lagos to London, Afrobeats continues to dominate charts worldwide. We explore how this genre became a mainstream sensation.",
    date: "5 days ago",
    category: "Music Trends",
  },
  {
    title: "Behind the Lyrics: SZA's 'Kill Bill' Meaning Explained",
    excerpt: "Dive deep into the metaphors and storytelling behind one of the year's most talked-about tracks. What inspired SZA to write this revenge anthem?",
    date: "1 week ago",
    category: "Analysis",
  },
  {
    title: "Grammy Nominations 2024: Complete List Revealed",
    excerpt: "The Recording Academy announces this year's Grammy nominees. Beyoncé leads with 9 nominations, followed closely by Kendrick Lamar and Adele.",
    date: "1 week ago",
    category: "Awards",
  },
];

const NewsSection = () => {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Newspaper className="h-6 w-6 text-accent" />
          Latest Music News
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {newsArticles.map((article, index) => (
            <a
              key={index}
              href="#"
              className="group block p-4 rounded-lg border border-border hover:border-accent/50 bg-secondary/20 hover:bg-secondary/40 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsSection;
