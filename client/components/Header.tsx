import { Link, useLocation } from "react-router-dom";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="bg-white border-b-2 border-[#DEE1E6]">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-end h-[90px] gap-6 md:gap-8 lg:gap-12">
          {isHomePage ? (
            <>
              <button
                onClick={() => scrollToSection('home')}
                className="text-base font-bold text-[#171A1F] hover:text-[#0072D5] transition-colors cursor-pointer bg-none border-none p-0"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('photos')}
                className="text-base font-bold text-[#171A1F] hover:text-[#0072D5] transition-colors cursor-pointer bg-none border-none p-0"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('locations')}
                className="text-base font-bold text-[#171A1F] hover:text-[#0072D5] transition-colors cursor-pointer bg-none border-none p-0"
              >
                Locations
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-base font-bold text-[#171A1F] hover:text-[#0072D5] transition-colors cursor-pointer bg-none border-none p-0"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('signup')}
                className="text-base font-bold text-[#171A1F] hover:text-[#0072D5] transition-colors cursor-pointer bg-none border-none p-0"
              >
                Events
              </button>
            </>
          ) : (
            <Link
              to="/"
              className="text-base font-bold text-[#171A1F] hover:text-[#0072D5] transition-colors"
            >
              Home
            </Link>
          )}
          <Link
            to="/about"
            className="text-base font-bold text-[#171A1F] hover:text-[#0072D5] transition-colors"
          >
            About Site
          </Link>
        </nav>
      </div>
    </header>
  );
}
