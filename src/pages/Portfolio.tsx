
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageGallery from '../components/ImageGallery';

// Gallery images by category
const galleryData = {
  weddings: [
    '/photo-1472396961693-142e6e269027',
    '/photo-1482938289607-e9573fc25ebb',
    '/photo-1469474968028-56623f02e42e',
    '/photo-1470071459604-3b5ec3a7fe05',
    '/photo-1513836279014-a89f7a76ae86',
  ],
  families: [
    '/photo-1465146344425-f00d5f5c8f07',
    '/photo-1509316975850-ff9c5deb0cd9',
    '/photo-1518495973542-4542c06a5843',
    '/photo-1500375592092-40eb2168fd21',
  ],
  engagements: [
    '/photo-1470813740244-df37b8c1edcb',
    '/photo-1469474968028-56623f02e42e',
    '/photo-1518495973542-4542c06a5843',
  ],
  portraits: [
    '/photo-1509316975850-ff9c5deb0cd9',
    '/photo-1500375592092-40eb2168fd21',
    '/photo-1470813740244-df37b8c1edcb',
  ]
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Combined gallery for "all" tab
  const allImages = [
    ...galleryData.weddings.slice(0, 3),
    ...galleryData.families.slice(0, 2),
    ...galleryData.engagements.slice(0, 2),
    ...galleryData.portraits.slice(0, 2),
  ];

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
            <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">Portfolio</h3>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Capturing Timeless Moments
            </h1>
            <p className="text-charcoal/80 text-lg mb-8 leading-relaxed">
              A collection of authentic moments, genuine emotions, and beautiful connections.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <Tabs 
            defaultValue="all" 
            className="w-full"
            onValueChange={(value) => setActiveTab(value)}
          >
            <div className="flex justify-center mb-12">
              <TabsList className="bg-offwhite p-1">
                <TabsTrigger 
                  value="all"
                  className={`px-6 py-2 rounded-md transition-all ${
                    activeTab === 'all' ? 'bg-white shadow-sm' : 'hover:bg-white/50'
                  }`}
                >
                  All
                </TabsTrigger>
                <TabsTrigger 
                  value="weddings"
                  className={`px-6 py-2 rounded-md transition-all ${
                    activeTab === 'weddings' ? 'bg-white shadow-sm' : 'hover:bg-white/50'
                  }`}
                >
                  Weddings
                </TabsTrigger>
                <TabsTrigger 
                  value="engagements"
                  className={`px-6 py-2 rounded-md transition-all ${
                    activeTab === 'engagements' ? 'bg-white shadow-sm' : 'hover:bg-white/50'
                  }`}
                >
                  Engagements
                </TabsTrigger>
                <TabsTrigger 
                  value="families"
                  className={`px-6 py-2 rounded-md transition-all ${
                    activeTab === 'families' ? 'bg-white shadow-sm' : 'hover:bg-white/50'
                  }`}
                >
                  Families
                </TabsTrigger>
                <TabsTrigger 
                  value="portraits"
                  className={`px-6 py-2 rounded-md transition-all ${
                    activeTab === 'portraits' ? 'bg-white shadow-sm' : 'hover:bg-white/50'
                  }`}
                >
                  Portraits
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0 animate-fade-in">
              <ImageGallery images={allImages} />
            </TabsContent>
            
            <TabsContent value="weddings" className="mt-0 animate-fade-in">
              <ImageGallery images={galleryData.weddings} />
            </TabsContent>
            
            <TabsContent value="engagements" className="mt-0 animate-fade-in">
              <ImageGallery images={galleryData.engagements} />
            </TabsContent>
            
            <TabsContent value="families" className="mt-0 animate-fade-in">
              <ImageGallery images={galleryData.families} />
            </TabsContent>
            
            <TabsContent value="portraits" className="mt-0 animate-fade-in">
              <ImageGallery images={galleryData.portraits} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 md:py-24 bg-blush/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">Instagram</h3>
            <h2 className="section-heading">Follow Along</h2>
            <p className="text-charcoal/80 mb-6">
              For more recent work and behind-the-scenes moments, follow me on Instagram.
            </p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              @nikkinischkephotography
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gold/10">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Ready to Create Your Own Gallery?
            </h2>
            <p className="text-lg text-charcoal/80 mb-8 max-w-2xl mx-auto">
              Let's work together to capture your special moments in a way that's authentic to you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/weddings" className="btn-secondary">
                Wedding Information
              </Link>
              <Link to="/families" className="btn-secondary">
                Family Sessions
              </Link>
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
