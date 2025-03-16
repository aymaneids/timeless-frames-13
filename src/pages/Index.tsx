
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedGallery from '../components/FeaturedGallery';
import Testimonials from '../components/Testimonials';
import ContactInfo from '../components/ContactInfo';
import { Camera, Heart, Clock } from 'lucide-react';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">About Me</h3>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-5">
                Hi, I'm Nikki Nischke
              </h2>
              <p className="text-charcoal/80 mb-6 leading-relaxed">
                I'm a Wisconsin wedding and portrait photographer dedicated to capturing authentic moments 
                and creating timeless images. My approach is all about building genuine connections 
                and documenting the real, unscripted moments that tell your unique story.
              </p>
              <p className="text-charcoal/80 mb-8 leading-relaxed">
                Based in Manitowoc, I serve clients throughout Wisconsin, including Milwaukee, 
                Madison, Door County, Green Bay, and Kohler.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Me
              </Link>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-md overflow-hidden shadow-lg relative z-10">
                <img 
                  src="/photo-1500375592092-40eb2168fd21" 
                  alt="Nikki Nischke, Wisconsin Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 bg-blush/20 rounded-md -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-offwhite">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">My Approach</h3>
            <h2 className="section-heading">Creating Timeless Memories</h2>
            <p className="text-charcoal/80">
              My photography style is defined by authentic connections, natural light, and timeless editing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="text-blush" />,
                title: "Authentic Approach",
                description: "I focus on creating a comfortable environment where genuine moments can unfold naturally."
              },
              {
                icon: <Heart className="text-blush" />,
                title: "Emotional Connection",
                description: "I believe in capturing the feelings and connections that make your relationships special."
              },
              {
                icon: <Clock className="text-blush" />,
                title: "Timeless Style",
                description: "My editing style ensures your photos will remain beautiful and relevant for generations."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-md shadow-sm text-center">
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-charcoal/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Galleries */}
      <FeaturedGallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Information */}
      <ContactInfo />
    </div>
  );
};

export default Index;
