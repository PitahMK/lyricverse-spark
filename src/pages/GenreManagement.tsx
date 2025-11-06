import { useState } from "react";
import CMSHeader from "@/components/CMSHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Search, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Genre {
  id: string;
  name: string;
  description: string;
  color: string;
  songCount: number;
  trending: boolean;
}

const GenreManagement = () => {
  const { toast } = useToast();
  const [genres, setGenres] = useState<Genre[]>([
    {
      id: "1",
      name: "Pop",
      description: "Popular music that appeals to a wide audience",
      color: "#FF6B6B",
      songCount: 1250,
      trending: true
    },
    {
      id: "2",
      name: "Rock",
      description: "Music characterized by a strong beat and amplified instruments",
      color: "#4ECDC4",
      songCount: 890,
      trending: false
    },
    {
      id: "3",
      name: "Hip Hop",
      description: "Music featuring rhythmic and rhyming speech",
      color: "#95E1D3",
      songCount: 720,
      trending: true
    },
    {
      id: "4",
      name: "Jazz",
      description: "Music characterized by swing and blue notes",
      color: "#F38181",
      songCount: 450,
      trending: false
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingGenre, setEditingGenre] = useState<Genre | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    color: "#FF6B6B",
    trending: false,
  });

  const handleCreateGenre = () => {
    const newGenre: Genre = {
      id: Date.now().toString(),
      ...formData,
      songCount: 0,
    };
    setGenres([newGenre, ...genres]);
    setIsDialogOpen(false);
    resetForm();
    toast({
      title: "Success",
      description: "Genre created successfully",
    });
  };

  const handleUpdateGenre = () => {
    if (!editingGenre) return;
    setGenres(genres.map(genre =>
      genre.id === editingGenre.id
        ? { ...genre, ...formData }
        : genre
    ));
    setIsDialogOpen(false);
    setEditingGenre(null);
    resetForm();
    toast({
      title: "Success",
      description: "Genre updated successfully",
    });
  };

  const handleDeleteGenre = (id: string) => {
    setGenres(genres.filter(genre => genre.id !== id));
    toast({
      title: "Success",
      description: "Genre deleted successfully",
    });
  };

  const handleEdit = (genre: Genre) => {
    setEditingGenre(genre);
    setFormData({
      name: genre.name,
      description: genre.description,
      color: genre.color,
      trending: genre.trending,
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      color: "#FF6B6B",
      trending: false,
    });
  };

  const filteredGenres = genres.filter(genre =>
    genre.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    genre.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const predefinedColors = [
    "#FF6B6B", "#4ECDC4", "#95E1D3", "#F38181",
    "#AA96DA", "#FCBAD3", "#FFFFD2", "#A8D8EA",
    "#FF8B94", "#FFC6AC", "#FDFFAB", "#C1FBA4"
  ];

  return (
    <div className="min-h-screen bg-background">
      <CMSHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Genre Management</h1>
          <p className="text-muted-foreground">Organize and manage music genres</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => { setEditingGenre(null); resetForm(); }}>
                <Plus className="mr-2 h-4 w-4" /> New Genre
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingGenre ? "Edit Genre" : "Create New Genre"}</DialogTitle>
                <DialogDescription>
                  {editingGenre ? "Update the genre details" : "Fill in the details to create a new genre"}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Genre Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter genre name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Enter genre description"
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="color">Color</Label>
                  <div className="flex gap-2 flex-wrap">
                    {predefinedColors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          formData.color === color ? "border-primary scale-110" : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setFormData({ ...formData, color })}
                      />
                    ))}
                  </div>
                  <Input
                    id="color"
                    type="color"
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    className="w-full h-10"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="trending"
                    checked={formData.trending}
                    onChange={(e) => setFormData({ ...formData, trending: e.target.checked })}
                    className="rounded"
                  />
                  <Label htmlFor="trending">Mark as trending</Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button onClick={editingGenre ? handleUpdateGenre : handleCreateGenre}>
                  {editingGenre ? "Update" : "Create"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredGenres.length === 0 ? (
            <Card className="col-span-full">
              <CardContent className="flex items-center justify-center py-12">
                <p className="text-muted-foreground">No genres found. Create your first genre!</p>
              </CardContent>
            </Card>
          ) : (
            filteredGenres.map((genre) => (
              <Card
                key={genre.id}
                className="hover:shadow-lg transition-all hover:scale-105"
                style={{ borderTop: `4px solid ${genre.color}` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{genre.name}</span>
                    {genre.trending && (
                      <TrendingUp className="h-4 w-4 text-primary" />
                    )}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {genre.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: genre.color }}
                      />
                      <Badge variant="outline">
                        {genre.songCount} {genre.songCount === 1 ? "song" : "songs"}
                      </Badge>
                      {genre.trending && (
                        <Badge variant="default">Trending</Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleEdit(genre)}
                      >
                        <Edit className="h-4 w-4 mr-1" /> Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleDeleteGenre(genre.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GenreManagement;
