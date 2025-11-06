import { NavLink } from "./NavLink";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const CMSHeader = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <NavLink to="/cms" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lyricalsource CMS
            </NavLink>
            <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Admin</span>
          </div>
          <nav className="flex gap-6 items-center">
            <NavLink
              to="/cms/posts"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              activeClassName="text-accent"
            >
              Posts
            </NavLink>
            <NavLink
              to="/cms/playlists"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              activeClassName="text-accent"
            >
              Playlists
            </NavLink>
            <NavLink
              to="/cms/genres"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              activeClassName="text-accent"
            >
              Genres
            </NavLink>
            <NavLink
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              View Site
            </NavLink>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="ml-2"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default CMSHeader;
