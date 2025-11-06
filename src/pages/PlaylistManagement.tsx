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
import { Plus, Edit, Trash2, Music, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Song {
  id: string;
  title: string;
  artist: string;
}

interface Playlist {
  id: string;
  name: string;
  description: string;
  songs: Song[];
  createdAt: string;
  isPublic: boolean;
}

const PlaylistManagement = () => {
  const { toast } = useToast();
  const [playlists, setPlaylists] = useState<Playlist[]>([
    {
      id: "1",
      name: "Summer Vibes 2024",
      description: "Best summer hits to brighten your day",
      songs: [
        { id: "s1", title: "Blinding Lights", artist: "The Weeknd" },
        { id: "s2", title: "Levitating", artist: "Dua Lipa" }
      ],
      createdAt: "2024-01-15",
      isPublic: true
    },
    {
      id: "2",
      name: "Chill Acoustic",
      description: "Relaxing acoustic melodies",
      songs: [
        { id: "s3", title: "The A Team", artist: "Ed Sheeran" }
      ],
      createdAt: "2024-01-10",
      isPublic: false
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPlaylist, setEditingPlaylist] = useState<Playlist | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    isPublic: true,
  });

  const handleCreatePlaylist = () => {
    const newPlaylist: Playlist = {
      id: Date.now().toString(),
      ...formData,
      songs: [],
      createdAt: new Date().toISOString().split('T')[0],
    };
    setPlaylists([newPlaylist, ...playlists]);
    setIsDialogOpen(false);
    resetForm();
    toast({
      title: "Success",
      description: "Playlist created successfully",
    });
  };

  const handleUpdatePlaylist = () => {
    if (!editingPlaylist) return;
    setPlaylists(playlists.map(playlist =>
      playlist.id === editingPlaylist.id
        ? { ...playlist, ...formData }
        : playlist
    ));
    setIsDialogOpen(false);
    setEditingPlaylist(null);
    resetForm();
    toast({
      title: "Success",
      description: "Playlist updated successfully",
    });
  };

  const handleDeletePlaylist = (id: string) => {
    setPlaylists(playlists.filter(playlist => playlist.id !== id));
    toast({
      title: "Success",
      description: "Playlist deleted successfully",
    });
  };

  const handleEdit = (playlist: Playlist) => {
    setEditingPlaylist(playlist);
    setFormData({
      name: playlist.name,
      description: playlist.description,
      isPublic: playlist.isPublic,
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      isPublic: true,
    });
  };

  const filteredPlaylists = playlists.filter(playlist =>
    playlist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    playlist.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <CMSHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Playlist Management</h1>
          <p className="text-muted-foreground">Create and manage your music playlists</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search playlists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => { setEditingPlaylist(null); resetForm(); }}>
                <Plus className="mr-2 h-4 w-4" /> New Playlist
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingPlaylist ? "Edit Playlist" : "Create New Playlist"}</DialogTitle>
                <DialogDescription>
                  {editingPlaylist ? "Update the playlist details" : "Fill in the details to create a new playlist"}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Playlist Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter playlist name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Enter playlist description"
                    rows={4}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isPublic"
                    checked={formData.isPublic}
                    onChange={(e) => setFormData({ ...formData, isPublic: e.target.checked })}
                    className="rounded"
                  />
                  <Label htmlFor="isPublic">Make playlist public</Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button onClick={editingPlaylist ? handleUpdatePlaylist : handleCreatePlaylist}>
                  {editingPlaylist ? "Update" : "Create"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaylists.length === 0 ? (
            <Card className="col-span-full">
              <CardContent className="flex items-center justify-center py-12">
                <p className="text-muted-foreground">No playlists found. Create your first playlist!</p>
              </CardContent>
            </Card>
          ) : (
            filteredPlaylists.map((playlist) => (
              <Card key={playlist.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        <Music className="h-5 w-5" />
                        {playlist.name}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {playlist.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant={playlist.isPublic ? "default" : "secondary"}>
                        {playlist.isPublic ? "Public" : "Private"}
                      </Badge>
                      <Badge variant="outline">
                        {playlist.songs.length} {playlist.songs.length === 1 ? "song" : "songs"}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Created: {playlist.createdAt}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleEdit(playlist)}
                      >
                        <Edit className="h-4 w-4 mr-1" /> Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleDeletePlaylist(playlist.id)}
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

export default PlaylistManagement;
