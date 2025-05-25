import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GlassWater } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-amber-950/95 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <GlassWater className="h-8 w-8 text-amber-400" />
            <span className="text-xl font-serif font-bold tracking-tight text-white">
              Vulpine Bar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'About', path: '/about' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  location.pathname === item.path
                    ? 'text-amber-400'
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-amber-600 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors hover:bg-amber-500"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-amber-950 px-4 py-4 mt-1">
          <div className="flex flex-col space-y-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'About', path: '/about' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-amber-900 text-amber-400'
                    : 'text-white hover:bg-amber-900/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-amber-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-amber-500 text-center mt-2"
            >
              Book Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;