
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import { CheckCircle } from 'lucide-react';

// Sample wedding images
const weddingImages = [
  '/photo-1472396961693-142e6e269027',
  '/photo-1482938289607-e9573fc25ebb',
  '/photo-1469474968028-56623f02e42e',
  '/photo-1470071459604-3b5ec3a7fe05',
  '/photo-1513836279014-a89f7a76ae86',
];

// Wedding packages
const weddingPackages = [
  {
    name: "Intimate Coverage",
    hours: "6 Hours",
    price: "$2,800",
    features: [
      "6 hours of wedding day coverage",
      "Complimentary engagement session",
      "Online gallery with digital downloads",
      "Print release for personal use",
      "Wedding day timeline consultation"
    ]
  },
  {
    name: "Signature Coverage",
    hours: "8 Hours",
    price: "$3,600",
    featured: true,
    features: [
      "8 hours of wedding day coverage",
      "Second photographer",
      "Complimentary engagement session",
      "Online gallery with digital downloads",
      "Print release for personal use",
      "Wedding day timeline consultation",
      "Custom USB with high-resolution images"
    ]
  },
  {
    name: "Premier Coverage",
    hours: "10 Hours",
    price: "$4,500",
    features: [
      "10 hours of wedding day coverage",
      "Second photographer",
      "Complimentary engagement session",
      "Online gallery with digital downloads",
      "Print release for personal use",
      "Wedding day timeline consultation",
      "Custom USB with high-resolution images",
      "10x10 heirloom wedding album"
    ]
  }
];

const Weddings = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">Wedding Photography</h3>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Capturing Your Love Story
            </h1>
            <p className="text-charcoal/80 text-lg mb-8 leading-relaxed">
              Authentic, timeless photography for couples who value genuine moments and emotional storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Gallery Preview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-heading">Wedding Portfolio</h2>
            <p className="text-charcoal/80">
              A glimpse into the authentic moments and emotions I've captured for couples across Wisconsin.
            </p>
          </div>
          
          <ImageGallery images={weddingImages} />
          
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-secondary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Wedding Experience */}
      <section className="py-16 md:py-24 bg-blush/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">The Experience</h3>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
                Your Wedding Journey
              </h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center text-charcoal font-serif">1</div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">Inquiry & Consultation</h3>
                    <p className="text-charcoal/80">
                      Reach out through my contact form, and we'll schedule a consultation to discuss your vision and needs for your wedding day.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center text-charcoal font-serif">2</div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">Booking & Planning</h3>
                    <p className="text-charcoal/80">
                      Once you've chosen your package, a retainer and signed contract will secure your date. We'll begin planning your engagement session and discussing timeline details.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center text-charcoal font-serif">3</div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">Engagement Session</h3>
                    <p className="text-charcoal/80">
                      This is our chance to work together before the wedding day, helping you feel comfortable in front of the camera and creating beautiful images to celebrate your engagement.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center text-charcoal font-serif">4</div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">Your Wedding Day</h3>
                    <p className="text-charcoal/80">
                      I'll be there to document all the special moments, from getting ready to your first dance, with a blend of documentary-style photography and gentle guidance.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center text-charcoal font-serif">5</div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">Delivery & Beyond</h3>
                    <p className="text-charcoal/80">
                      You'll receive preview images within a week, with the full gallery delivered within 6-8 weeks. I'll guide you through album design and print options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-md overflow-hidden shadow-lg relative z-10">
                <img 
                  src="/photo-1518495973542-4542c06a5843" 
                  alt="Wisconsin wedding photography"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-2/3 h-1/2 bg-gold/20 rounded-md -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Packages */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">Pricing</h3>
            <h2 className="section-heading">Wedding Collections</h2>
            <p className="text-charcoal/80">
              Customized coverage options to suit your unique wedding day needs. All packages include high-resolution 
              digital images with a personal print release.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, index) => (
              <div 
                key={index} 
                className={`rounded-md overflow-hidden shadow-sm transition-all duration-300 ${
                  pkg.featured ? 'border-2 border-blush relative bg-white transform hover:-translate-y-1' : 'border border-gold/20 bg-white hover:shadow-md'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 right-0 bg-blush text-white text-xs font-medium px-3 py-1 rounded-bl-md">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="font-serif text-2xl mb-1">{pkg.name}</h3>
                  <p className="text-sm text-charcoal/70 mb-4">{pkg.hours}</p>
                  <p className="text-3xl font-serif mb-6">{pkg.price}</p>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="text-blush flex-shrink-0 mr-2 mt-1" size={16} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className={pkg.featured ? "btn-primary w-full text-center" : "btn-secondary w-full text-center"}
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-charcoal/70 mb-2">Looking for something specific?</p>
            <p className="mb-6">Custom collections are available upon request.</p>
            <Link to="/contact" className="btn-ghost">
              Contact Me for Details
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gold/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center relative">
            <div className="text-5xl font-serif text-gold/30 absolute -top-10 left-1/2 transform -translate-x-1/2">"</div>
            <p className="text-xl md:text-2xl font-serif italic mb-6 relative z-10">
              Nikki's calm presence on our wedding day made us feel completely at ease. She captured 
              moments we didn't even know happened, and looking through our gallery feels like reliving our day.
            </p>
            <p className="font-medium">Alexandra & James</p>
            <p className="text-sm text-charcoal/70">Milwaukee Wedding</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Ready to Capture Your Wedding Day?
            </h2>
            <p className="text-lg text-charcoal/80 mb-8 max-w-2xl mx-auto">
              Let's chat about your vision and how I can help tell your unique love story.
            </p>
            <Link to="/contact" className="btn-primary">
              Inquire About Your Date
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Weddings;
