export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-magi-white border-b border-magi-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <span className="font-outfit font-extrabold text-lg tracking-tight shrink-0">MAGI</span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-magi-secondary">
          <a href="#desktop-app" className="hover:text-magi-primary transition-colors">
            Anti-cheating
          </a>
          <a href="#how-it-works" className="hover:text-magi-primary transition-colors">
            How it works
          </a>
          <a href="#institutions" className="hover:text-magi-primary transition-colors">
            For institutions
          </a>
        </nav>
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a href="#" className="hidden sm:inline text-sm text-magi-secondary hover:text-magi-primary transition-colors">
            Sign in
          </a>
          <a
            href="#demo"
            className="px-3 sm:px-4 py-2 rounded-lg bg-magi-primary text-white text-sm font-semibold transition-all hover:bg-magi-hover whitespace-nowrap"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
