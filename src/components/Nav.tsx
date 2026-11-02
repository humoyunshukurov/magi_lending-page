export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-magi-white border-b border-magi-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-outfit font-extrabold text-lg tracking-tight">MAGI</span>
        <nav className="hidden sm:flex items-center gap-8 text-sm text-magi-secondary">
          <a href="#how-it-works" className="hover:text-magi-primary transition-colors">
            How it works
          </a>
          <a href="#institutions" className="hover:text-magi-primary transition-colors">
            For institutions
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-magi-secondary hover:text-magi-primary transition-colors">
            Sign in
          </a>
          <a
            href="#demo"
            className="px-4 py-2 rounded-lg bg-magi-primary text-white text-sm font-semibold transition-all hover:bg-magi-hover"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
