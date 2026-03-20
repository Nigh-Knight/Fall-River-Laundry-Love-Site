import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = isHomePage
    ? [
        { label: "Home", action: () => scrollToSection("home") },
        { label: "Gallery", action: () => scrollToSection("photos") },
        { label: "Locations", action: () => scrollToSection("locations") },
        { label: "About", action: () => scrollToSection("about") },
        { label: "Events", action: () => scrollToSection("signup") },
      ]
    : [];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/5"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="group">
            <span className="text-lg font-bold text-[#171A1F] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Fall River <span className="gradient-text">Laundry Love</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="px-4 py-2 text-sm font-semibold text-[#565D6D] hover:text-[#0072D5] hover:bg-blue-50 rounded-lg transition-all cursor-pointer bg-transparent border-none"
              >
                {item.label}
              </button>
            ))}
            {!isHomePage && (
              <Link
                to="/"
                className="px-4 py-2 text-sm font-semibold text-[#565D6D] hover:text-[#0072D5] hover:bg-blue-50 rounded-lg transition-all"
              >
                Home
              </Link>
            )}
            <Link
              to="/about"
              className="px-4 py-2 text-sm font-semibold text-[#565D6D] hover:text-[#0072D5] hover:bg-blue-50 rounded-lg transition-all"
            >
              About Site
            </Link>
            <button
              onClick={() => scrollToSection("signup")}
              className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#0072D5] to-[#00a4ff] rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all btn-glow border-none cursor-pointer"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#171A1F] hover:bg-gray-100 rounded-lg transition-colors bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col gap-1 pt-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action();
                    setMenuOpen(false);
                  }}
                  className="px-4 py-3 text-sm font-semibold text-[#565D6D] hover:text-[#0072D5] hover:bg-blue-50 rounded-lg transition-all text-left bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              {!isHomePage && (
                <Link
                  to="/"
                  className="px-4 py-3 text-sm font-semibold text-[#565D6D] hover:text-[#0072D5] hover:bg-blue-50 rounded-lg transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              <Link
                to="/about"
                className="px-4 py-3 text-sm font-semibold text-[#565D6D] hover:text-[#0072D5] hover:bg-blue-50 rounded-lg transition-all"
                onClick={() => setMenuOpen(false)}
              >
                About Site
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
