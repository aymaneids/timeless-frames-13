
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Gallery categories with images
const categories = [
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Authentic moments from your special day',
    image: '/photo-1482938289607-e9573fc25ebb',
    link: '/weddings',
  },
  {
    id: 'families',
    title: 'Families',
    description: 'Capturing genuine family connections',
    image: '/photo-1518495973542-4542c06a5843',
    link: '/families',
  },
  {
    id: 'engagements',
    title: 'Engagements',
    description: 'Celebrating your love story',
    image: '/photo-1469474968028-56623f02e42e',
    link: '/portfolio',
  },
];

const FeaturedGallery = () => {
  // Track which images have loaded
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">Featured Work</h3>
          <h2 className="section-heading mb-4">A Glimpse into My Portfolio</h2>
          <p className="text-charcoal/80">
            From intimate weddings to family portraits, I capture genuine emotions and create timeless photographs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group overflow-hidden rounded-md shadow-sm bg-white">
              <Link to={category.link} className="block relative h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-all duration-500 z-10"></div>
                
                <img
                  src={category.image}
                  alt={category.title}
                  onLoad={() => handleImageLoad(category.id)}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                    loadedImages[category.id] ? 'blur-0' : 'blur-sm'
                  } group-hover:scale-105`}
                />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="font-serif text-2xl text-white mb-2">{category.title}</h3>
                  <p className="text-white/90 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Gallery
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/portfolio" className="btn-secondary">
            View All Galleries
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
