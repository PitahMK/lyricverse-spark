import ViewerHeader from "@/components/ViewerHeader";
import Footer from "@/components/Footer";

const Albums = () => {
  return (
    <div className="min-h-screen bg-background">
      <ViewerHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Albums</h1>
            <p className="text-muted-foreground">
              Browse and discover albums from your favorite artists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Album content will be added here */}
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Featured Albums</h3>
              <p className="text-muted-foreground">
                Coming soon...
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">New Releases</h3>
              <p className="text-muted-foreground">
                Coming soon...
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Top Albums</h3>
              <p className="text-muted-foreground">
                Coming soon...
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Albums;
