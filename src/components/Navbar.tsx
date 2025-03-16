
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-charcoal font-serif italic text-2xl md:text-3xl tracking-wide transition-all duration-300"
          >
            Nikki Nischke
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Weddings', path: '/weddings' },
              { name: 'Families', path: '/families' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'Contact', path: '/contact' },
            ].map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`text-sm text-charcoal py-1 transition-all duration-300 hover:text-blush ${
                  location.pathname === path ? 'font-medium border-b border-blush' : 'font-normal'
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-charcoal" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-cream/95 backdrop-blur-md z-40 pt-20 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 p-6">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Weddings', path: '/weddings' },
            { name: 'Families', path: '/families' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Contact', path: '/contact' },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`text-lg text-charcoal py-2 transition-all duration-300 hover:text-blush ${
                location.pathname === path ? 'font-medium border-b border-blush' : 'font-normal'
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
