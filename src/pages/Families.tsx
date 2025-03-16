
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import { CheckCircle } from 'lucide-react';

// Sample family images
const familyImages = [
  '/photo-1465146344425-f00d5f5c8f07',
  '/photo-1509316975850-ff9c5deb0cd9',
  '/photo-1518495973542-4542c06a5843',
  '/photo-1500375592092-40eb2168fd21',
];

// Family session packages
const familyPackages = [
  {
    name: "Family Session",
    time: "1 Hour",
    price: "$450",
    features: [
      "1 hour on-location session",
      "Up to 5 family members",
      "Online gallery with 40+ digital images",
      "Print release for personal use",
      "Location guidance and styling tips"
    ]
  },
  {
    name: "Extended Family Session",
    time: "1.5 Hours",
    price: "$650",
    featured: true,
    features: [
      "1.5 hours on-location session",
      "Extended family groups (up to 10 people)",
      "Multiple groupings and combinations",
      "Online gallery with 60+ digital images",
      "Print release for personal use",
      "Location guidance and styling tips"
    ]
  },
  {
    name: "Mini Session",
    time: "30 Minutes",
    price: "$300",
    features: [
      "30 minutes on-location session",
      "Up to 5 family members",
      "Online gallery with 20+ digital images",
      "Print release for personal use",
      "Available on select dates throughout the year"
    ]
  }
];

const Families = () => {
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
            <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">Family Photography</h3>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Authentic Family Moments
            </h1>
            <p className="text-charcoal/80 text-lg mb-8 leading-relaxed">
              Capturing the genuine connections, laughter, and love that make your family unique.
            </p>
          </div>
        </div>
      </section>

      {/* Family Gallery Preview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-heading">Family Portfolio</h2>
            <p className="text-charcoal/80">
              Real moments of connection from family sessions across Wisconsin.
            </p>
          </div>
          
          <ImageGallery images={familyImages} columns={2} />
          
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-secondary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Family Experience */}
      <section className="py-16 md:py-24 bg-blush/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">The Experience</h3>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
                What to Expect
              </h2>
              
              <div className="space-y-6">
                <p className="text-charcoal/80 leading-relaxed">
                  My approach to family photography is all about capturing authentic connections. 
                  I believe in creating a relaxed, fun environment where your family can be 
                  themselves, resulting in images that genuinely reflect your relationships.
                </p>
                
                <p className="text-charcoal/80 leading-relaxed">
                  Family sessions typically take place outdoors in beautiful natural settings 
                  across Wisconsin, though in-home lifestyle sessions are also available. I'll 
                  guide you through the entire process, from location selection to what to wear, 
                  ensuring you feel prepared and confident.
                </p>
                
                <p className="text-charcoal/80 leading-relaxed">
                  During your session, I'll provide gentle direction while allowing plenty of 
                  room for natural moments to unfold. My goal is to create an experience that's 
                  enjoyable for everyone, including children, resulting in images that capture 
                  the true essence of your family.
                </p>
                
                <div className="pt-4">
                  <Link to="/contact" className="btn-primary">
                    Book Your Session
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-md overflow-hidden shadow-lg relative z-10">
                <img 
                  src="/photo-1470813740244-df37b8c1edcb" 
                  alt="Wisconsin family photography"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 h-1/2 bg-gold/20 rounded-md -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Packages */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">Pricing</h3>
            <h2 className="section-heading">Family Session Collections</h2>
            <p className="text-charcoal/80">
              Customized sessions to capture your family's unique connections. All packages include 
              high-resolution digital images with a personal print release.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {familyPackages.map((pkg, index) => (
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
                  <p className="text-sm text-charcoal/70 mb-4">{pkg.time}</p>
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
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-charcoal/70 mb-2">Additional family members can be added for $50 per person</p>
            <p className="mb-6">Custom sessions are available upon request</p>
            <Link to="/contact" className="btn-ghost">
              Contact Me for Details
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">FAQ</h3>
              <h2 className="section-heading">Common Questions</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-md shadow-sm">
                <h3 className="font-serif text-xl mb-2">When should we book our family session?</h3>
                <p className="text-charcoal/80">
                  I recommend booking 2-3 months in advance, especially for fall sessions which tend to book quickly. 
                  Spring and summer also offer beautiful opportunities for outdoor family portraits.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-md shadow-sm">
                <h3 className="font-serif text-xl mb-2">What should we wear?</h3>
                <p className="text-charcoal/80">
                  I provide all clients with a detailed styling guide, but generally recommend coordinating (not matching) 
                  outfits in complementary neutral tones with some subtle texture and depth. Comfort is key!
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-md shadow-sm">
                <h3 className="font-serif text-xl mb-2">What if my children won't cooperate?</h3>
                <p className="text-charcoal/80">
                  Don't worry! I have lots of experience working with children of all ages and temperaments. We'll take breaks 
                  as needed, play games, and keep things fun. Some of the most beautiful images come from unplanned moments.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-md shadow-sm">
                <h3 className="font-serif text-xl mb-2">How long until we receive our images?</h3>
                <p className="text-charcoal/80">
                  You'll receive a few preview images within a week of your session, with the full gallery delivered within 
                  2-3 weeks. Your online gallery includes high-resolution digital downloads and a print shop for professional 
                  quality prints and products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gold/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center relative">
            <div className="text-5xl font-serif text-gold/30 absolute -top-10 left-1/2 transform -translate-x-1/2">"</div>
            <p className="text-xl md:text-2xl font-serif italic mb-6 relative z-10">
              Nikki has been our family photographer for three years now. She has an incredible ability 
              to capture our children's personalities and the love we share. We treasure these photos!
            </p>
            <p className="font-medium">The Taylor Family</p>
            <p className="text-sm text-charcoal/70">Green Bay, WI</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Ready to Capture Your Family's Story?
            </h2>
            <p className="text-lg text-charcoal/80 mb-8 max-w-2xl mx-auto">
              Let's create beautiful images that your family will cherish for generations.
            </p>
            <Link to="/contact" className="btn-primary">
              Book Your Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Families;
