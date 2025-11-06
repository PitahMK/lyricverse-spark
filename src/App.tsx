import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Viewer Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NewPage from "./pages/NewPage";
import Popular from "./pages/Popular";
import Albums from "./pages/Albums";
import Login from "./pages/Login";

// CMS Pages
import CMSDashboard from "./pages/CMSDashboard";
import PostsManagement from "./pages/PostsManagement";
import PlaylistManagement from "./pages/PlaylistManagement";
import GenreManagement from "./pages/GenreManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Viewer Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/login" element={<Login />} />

            {/* CMS Routes - Protected */}
            <Route path="/cms" element={<ProtectedRoute><CMSDashboard /></ProtectedRoute>} />
            <Route path="/cms/posts" element={<ProtectedRoute><PostsManagement /></ProtectedRoute>} />
            <Route path="/cms/playlists" element={<ProtectedRoute><PlaylistManagement /></ProtectedRoute>} />
            <Route path="/cms/genres" element={<ProtectedRoute><GenreManagement /></ProtectedRoute>} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
