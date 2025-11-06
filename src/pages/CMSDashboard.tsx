import CMSHeader from "@/components/CMSHeader";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Music, List, LayoutGrid } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const CMSDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <CMSHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Content Management System</h1>
          <p className="text-muted-foreground">
            Manage your website content from one central location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Posts Management
              </CardTitle>
              <CardDescription>
                Create and manage news articles and lyrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NavLink to="/cms/posts">
                <Button className="w-full">Manage Posts</Button>
              </NavLink>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music className="h-5 w-5" />
                Playlist Management
              </CardTitle>
              <CardDescription>
                Create and organize music playlists
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NavLink to="/cms/playlists">
                <Button className="w-full">Manage Playlists</Button>
              </NavLink>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LayoutGrid className="h-5 w-5" />
                Genre Management
              </CardTitle>
              <CardDescription>
                Organize and categorize music genres
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NavLink to="/cms/genres">
                <Button className="w-full">Manage Genres</Button>
              </NavLink>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
              <CardDescription>Overview of your content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">Total Posts</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">Playlists</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">Genres</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CMSDashboard;
