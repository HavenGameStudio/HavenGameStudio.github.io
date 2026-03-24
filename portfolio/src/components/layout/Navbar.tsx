import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#home"
          className="font-display font-bold text-lg text-foreground tracking-wider"
          data-testid="link-logo"
        >
          AC<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid={`link-nav-${label.toLowerCase()}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://drive.google.com/file/d/1Iike4bA2xejxIjM9-_I9n4iLsYCbq3FK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
            data-testid="button-hire-me"
          >
            Hire Me
          </a>
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-1"
          data-testid="nav-mobile"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-base font-medium text-foreground py-3 border-b border-border last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1Iike4bA2xejxIjM9-_I9n4iLsYCbq3FK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-center px-5 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-md"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
