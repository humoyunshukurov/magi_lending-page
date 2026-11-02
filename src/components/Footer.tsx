export function Footer() {
  return (
    <footer className="border-t border-magi-border py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-outfit font-extrabold text-sm tracking-tight">MAGI</span>
        <nav className="flex items-center gap-6 text-xs text-magi-secondary">
          <a href="#how-it-works" className="hover:text-magi-primary transition-colors">
            How it works
          </a>
          <a href="#institutions" className="hover:text-magi-primary transition-colors">
            For institutions
          </a>
        </nav>
        <span className="text-xs text-magi-secondary font-light">&copy; {new Date().getFullYear()} MAGI</span>
      </div>
    </footer>
  );
}
