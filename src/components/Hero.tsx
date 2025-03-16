
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

// Array of hero images
const heroImages = [
  'https://img.freepik.com/premium-photo/woman-with-sleek-straight-hair-parted-middle-posing-against-minimalist-background-highlight-simplicity-elegance-her-style_1229213-60889.jpg',
  '/photo-1472396961693-142e6e269027',
  '/photo-1465146344425-f00d5f5c8f07',
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Image rotation logic
  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 500); // This matches the transition duration in CSS
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 
              ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}
              ${isTransitioning ? 'scale-105' : 'scale-100'} transition-transform duration-3000`}
          >
            <img
              src={image}
              alt={`Wedding photography by Nikki Nischke - slide ${index + 1}`}
              className={`w-full h-full object-cover transition-all duration-1000 
                ${isLoaded ? 'blur-0' : 'blur-md'}`}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 text-white z-10">
        <div className="animate-fade-in-up">
          <h2 className="font-serif text-xl md:text-2xl lg:text-3xl uppercase tracking-wider mb-2 text-gold">
            Wisconsin Wedding & Portrait Photographer
          </h2>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 max-w-4xl mx-auto">
            Capturing Timeless Moments with Authentic Connection
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-offwhite/90">
            Authentic connections, organic moments, and a timeless approach to photography.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/portfolio" 
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-md hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Portfolio
              <ChevronRight size={16} />
            </Link>
            <Link 
              to="/contact" 
              className="bg-cream text-charcoal px-6 py-3 rounded-md hover:bg-blush transition-all duration-300 flex items-center justify-center gap-2"
            >
              Inquire About Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center text-white/90">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
