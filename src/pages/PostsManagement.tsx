import { useState } from "react";
import CMSHeader from "@/components/CMSHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Post {
  id: string;
  title: string;
  content: string;
  type: "news" | "lyrics";
  status: "draft" | "published";
  createdAt: string;
  author: string;
}

const PostsManagement = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      title: "New Album Release: The Sound of Tomorrow",
      content: "Exciting news for music lovers...",
      type: "news",
      status: "published",
      createdAt: "2024-01-15",
      author: "Admin"
    },
    {
      id: "2",
      title: "Shape of You - Ed Sheeran",
      content: "The club isn't the best place to find a lover...",
      type: "lyrics",
      status: "published",
      createdAt: "2024-01-14",
      author: "Admin"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "news" | "lyrics">("all");

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    type: "news" as "news" | "lyrics",
    status: "draft" as "draft" | "published",
  });

  const handleCreatePost = () => {
    const newPost: Post = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString().split('T')[0],
      author: "Admin"
    };
    setPosts([newPost, ...posts]);
    setIsDialogOpen(false);
    resetForm();
    toast({
      title: "Success",
      description: "Post created successfully",
    });
  };

  const handleUpdatePost = () => {
    if (!editingPost) return;
    setPosts(posts.map(post =>
      post.id === editingPost.id
        ? { ...post, ...formData }
        : post
    ));
    setIsDialogOpen(false);
    setEditingPost(null);
    resetForm();
    toast({
      title: "Success",
      description: "Post updated successfully",
    });
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
    toast({
      title: "Success",
      description: "Post deleted successfully",
    });
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      type: post.type,
      status: post.status,
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      type: "news",
      status: "draft",
    });
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || post.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      <CMSHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Posts Management</h1>
          <p className="text-muted-foreground">Manage your news articles and lyrics</p>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setFilterType("all")}>All Posts</TabsTrigger>
              <TabsTrigger value="news" onClick={() => setFilterType("news")}>News</TabsTrigger>
              <TabsTrigger value="lyrics" onClick={() => setFilterType("lyrics")}>Lyrics</TabsTrigger>
            </TabsList>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => { setEditingPost(null); resetForm(); }}>
                  <Plus className="mr-2 h-4 w-4" /> New Post
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{editingPost ? "Edit Post" : "Create New Post"}</DialogTitle>
                  <DialogDescription>
                    {editingPost ? "Update the post details below" : "Fill in the details to create a new post"}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Enter post title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Type</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value: "news" | "lyrics") => setFormData({ ...formData, type: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="news">News</SelectItem>
                        <SelectItem value="lyrics">Lyrics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="Enter post content"
                      rows={10}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(value: "draft" | "published") => setFormData({ ...formData, status: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                  <Button onClick={editingPost ? handleUpdatePost : handleCreatePost}>
                    {editingPost ? "Update" : "Create"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-sm"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPosts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center text-muted-foreground">
                        No posts found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>
                          <Badge variant={post.type === "news" ? "default" : "secondary"}>
                            {post.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={post.status === "published" ? "default" : "outline"}>
                            {post.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{post.createdAt}</TableCell>
                        <TableCell>{post.author}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(post)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeletePost(post.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default PostsManagement;
