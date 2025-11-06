const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Lyricalsource
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              About LyricalSource
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Copyright Disclaimer
            </a>
          </nav>
        </div>
        <div className="text-center mt-6 text-sm text-muted-foreground">
          © 2025 Lyricalsource. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
