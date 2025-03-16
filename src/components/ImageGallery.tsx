
import { useState, useEffect } from 'react';

interface ImageGalleryProps {
  images: string[];
  columns?: number;
}

const ImageGallery = ({ images, columns = 3 }: ImageGalleryProps) => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageLoad = (imagePath: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [imagePath]: true
    }));
  };

  // Close modal when pressing escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <>
      <div 
        className={`grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 ${
          columns === 3 ? 'lg:grid-cols-3' : columns === 2 ? 'lg:grid-cols-2' : ''
        }`}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="aspect-[3/4] overflow-hidden rounded-md shadow-sm cursor-pointer image-hover group"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-all duration-300 z-10"></div>
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                onLoad={() => handleImageLoad(image)}
                className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
                  loadedImages[image] ? 'blur-0' : 'blur-sm'
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged gallery image"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
