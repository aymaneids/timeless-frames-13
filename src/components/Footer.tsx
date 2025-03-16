
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-offwhite border-t border-blush/20 text-charcoal py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About/Contact Section */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium">Nikki Nischke Photography</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:9203231114" className="hover:text-blush transition-colors">
                  (920) 323-1114
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:nikki@nikki-n.com" className="hover:text-blush transition-colors">
                  nikki@nikki-n.com
                </a>
              </li>
              <li>Based in Manitowoc, Wisconsin</li>
              <li>Serving Milwaukee, Madison, Door County, Green Bay, Kohler, and beyond</li>
            </ul>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="hover:text-blush transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blush transition-colors">About</Link>
              <Link to="/weddings" className="hover:text-blush transition-colors">Weddings</Link>
              <Link to="/families" className="hover:text-blush transition-colors">Families</Link>
              <Link to="/portfolio" className="hover:text-blush transition-colors">Portfolio</Link>
              <Link to="/contact" className="hover:text-blush transition-colors">Contact</Link>
            </div>
          </div>
          
          {/* Social/Subscribe */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-charcoal text-offwhite p-2 rounded-full hover:bg-blush transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-charcoal text-offwhite p-2 rounded-full hover:bg-blush transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            <div className="pt-4">
              <Link to="/contact" className="btn-secondary text-sm">
                Book a Session
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-blush/20 text-center text-sm text-charcoal/70">
          <p>© {new Date().getFullYear()} Nikki Nischke Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
