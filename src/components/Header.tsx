import { NavLink } from "./NavLink";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Lyricalsource
          </NavLink>
          <nav className="flex gap-6">
            <NavLink 
              to="/new" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              activeClassName="text-accent"
            >
              New
            </NavLink>
            <NavLink 
              to="/popular" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              activeClassName="text-accent"
            >
              Popular
            </NavLink>
            <NavLink 
              to="/albums" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              activeClassName="text-accent"
            >
              Albums
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
