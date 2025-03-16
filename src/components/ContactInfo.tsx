
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="py-12 bg-offwhite">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl mb-2">Let's Connect</h3>
            <p className="text-charcoal/80 mb-4 max-w-md">
              Based in Manitowoc, serving Milwaukee, Madison, Door County, Green Bay, Kohler, and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link to="/contact" className="btn-primary">
                Contact Me
              </Link>
              <a 
                href="mailto:nikki@nikki-n.com" 
                className="btn-secondary"
              >
                nikki@nikki-n.com
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a 
              href="https://goo.gl/maps/1234" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-charcoal hover:text-blush transition-colors"
            >
              <MapPin size={18} />
              <span>Manitowoc, WI</span>
            </a>
            <a 
              href="tel:9203231114" 
              className="flex items-center gap-2 text-charcoal hover:text-blush transition-colors"
            >
              <Phone size={18} />
              <span>(920) 323-1114</span>
            </a>
            <a 
              href="mailto:nikki@nikki-n.com" 
              className="flex items-center gap-2 text-charcoal hover:text-blush transition-colors"
            >
              <Mail size={18} />
              <span>nikki@nikki-n.com</span>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-charcoal hover:text-blush transition-colors"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-charcoal hover:text-blush transition-colors"
            >
              <Facebook size={18} />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
