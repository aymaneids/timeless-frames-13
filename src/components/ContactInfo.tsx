
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="py-16 bg-offwhite">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">Get In Touch</h3>
          <h2 className="section-heading mb-4">Let's Connect</h2>
          <p className="text-charcoal/80">
            Based in Manitowoc, Wisconsin, serving clients throughout the state including 
            Milwaukee, Madison, Door County, Green Bay, and Kohler.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl mb-4">Ready to book?</h3>
            <p className="text-charcoal/80 mb-6 max-w-md">
              I'd love to hear about your photography needs and how I can help capture your special moments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Me
              </Link>
              <a 
                href="mailto:nikki@nikki-n.com" 
                className="btn-secondary"
              >
                Send Email
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 mt-6 md:mt-0">
            <a 
              href="https://goo.gl/maps/1234" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-charcoal hover:text-blush transition-colors group"
            >
              <div className="w-10 h-10 bg-blush/20 rounded-full flex items-center justify-center group-hover:bg-blush/30 transition-colors">
                <MapPin size={18} />
              </div>
              <span>Manitowoc, Wisconsin</span>
            </a>
            <a 
              href="tel:9203231114" 
              className="flex items-center gap-3 text-charcoal hover:text-blush transition-colors group"
            >
              <div className="w-10 h-10 bg-blush/20 rounded-full flex items-center justify-center group-hover:bg-blush/30 transition-colors">
                <Phone size={18} />
              </div>
              <span>(920) 323-1114</span>
            </a>
            <a 
              href="mailto:nikki@nikki-n.com" 
              className="flex items-center gap-3 text-charcoal hover:text-blush transition-colors group"
            >
              <div className="w-10 h-10 bg-blush/20 rounded-full flex items-center justify-center group-hover:bg-blush/30 transition-colors">
                <Mail size={18} />
              </div>
              <span>nikki@nikki-n.com</span>
            </a>
          </div>
        </div>
        
        <div className="flex justify-center mt-12 gap-6">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-charcoal hover:text-blush transition-colors"
            aria-label="Follow on Instagram"
          >
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors">
              <Instagram size={20} />
            </div>
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-charcoal hover:text-blush transition-colors"
            aria-label="Follow on Facebook"
          >
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors">
              <Facebook size={20} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
