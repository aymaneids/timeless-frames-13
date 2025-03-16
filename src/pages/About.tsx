
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Heart, User, Map } from 'lucide-react';

const About = () => {
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
            <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">About</h3>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Meet Nikki Nischke
            </h1>
            <p className="text-charcoal/80 text-lg mb-8 leading-relaxed">
              Wisconsin wedding and portrait photographer capturing timeless moments with an authentic approach.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-md overflow-hidden shadow-lg relative z-10">
                <img 
                  src="/photo-1470813740244-df37b8c1edcb" 
                  alt="Nikki Nischke, Wisconsin Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 h-1/2 bg-gold/20 rounded-md -z-10"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-medium mb-2">
                Hello, I'm Nikki
              </h2>
              
              <p className="text-charcoal/80 leading-relaxed">
                I'm a Wisconsin-based photographer specializing in weddings and portraits. My journey 
                in photography began with a passion for capturing authentic moments that tell a story.
              </p>
              
              <p className="text-charcoal/80 leading-relaxed">
                My approach to photography is centered around creating a comfortable, relaxed 
                environment where genuine connections can shine through. I believe that the most 
                beautiful photographs come from real moments and emotions, not forced poses.
              </p>
              
              <p className="text-charcoal/80 leading-relaxed">
                When I'm not behind the camera, you might find me exploring Wisconsin's beautiful 
                landscapes, spending time with loved ones, or dreaming up new creative projects.
              </p>
              
              <div className="pt-4">
                <Link to="/contact" className="btn-primary">
                  Let's Work Together
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-blush/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">My Philosophy</h3>
            <h2 className="section-heading">Why I Love Photography</h2>
            <p className="text-charcoal/80">
              Photography allows me to preserve fleeting moments and create tangible memories 
              that will be cherished for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-md shadow-sm">
              <div className="flex mb-5">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                  <Camera className="text-blush" size={20} />
                </div>
                <h3 className="font-serif text-xl">My Approach</h3>
              </div>
              <p className="text-charcoal/80 leading-relaxed">
                I take a documentary approach to photography, focusing on candid moments while 
                providing gentle direction when needed. I strive to make every session relaxed 
                and enjoyable, allowing your authentic personalities to shine through.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-md shadow-sm">
              <div className="flex mb-5">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                  <Heart className="text-blush" size={20} />
                </div>
                <h3 className="font-serif text-xl">Why It Matters</h3>
              </div>
              <p className="text-charcoal/80 leading-relaxed">
                I believe photographs are more than just images – they're tangible memories and 
                emotional connections to our most precious moments. My goal is to create images 
                that transport you back to exactly how you felt in that moment, for years to come.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-md shadow-sm">
              <div className="flex mb-5">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                  <User className="text-blush" size={20} />
                </div>
                <h3 className="font-serif text-xl">Client Experience</h3>
              </div>
              <p className="text-charcoal/80 leading-relaxed">
                From our first conversation to the delivery of your final gallery, I'm committed to 
                providing an exceptional experience. I limit the number of clients I take on each 
                year to ensure every client receives my full attention and dedication.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-md shadow-sm">
              <div className="flex mb-5">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                  <Map className="text-blush" size={20} />
                </div>
                <h3 className="font-serif text-xl">Areas Served</h3>
              </div>
              <p className="text-charcoal/80 leading-relaxed">
                Based in Manitowoc, I serve clients throughout Wisconsin, including Milwaukee, 
                Madison, Door County, Green Bay, and Kohler. I'm also available for destination 
                weddings and sessions with additional travel fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gold/10">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Ready to Create Beautiful Memories?
            </h2>
            <p className="text-lg text-charcoal/80 mb-8 max-w-2xl mx-auto">
              I'd love to learn more about you and how I can help capture your special moments.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
