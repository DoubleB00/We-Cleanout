import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Trash2 } from 'lucide-react';

const PHONE = '570-730-0447';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-green-700 rounded-lg p-2 group-hover:bg-green-800 transition-colors">
              <Trash2 className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-green-800 font-black text-base md:text-lg tracking-tight">
                We Cleanout
              </span>
              <span className="block text-orange-500 font-bold text-xs md:text-sm tracking-widest uppercase -mt-0.5">
                Junk LLC
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  location.pathname === to
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg text-sm"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${
                  location.pathname === to
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 bg-orange-500 text-white font-bold px-4 py-3 rounded-full mt-3 transition-colors hover:bg-orange-600"
            >
              <Phone className="w-4 h-4" />
              Call {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
