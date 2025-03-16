
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael',
    role: 'Wedding Clients',
    quote: "Nikki captured the essence of our wedding day perfectly. Her calm demeanor and artistic eye resulted in photos that genuinely reflect our relationship and the joy of our celebration.",
  },
  {
    id: 2,
    name: 'The Johnson Family',
    role: 'Family Session',
    quote: "Working with Nikki was wonderful from start to finish. She made our children feel comfortable and captured candid moments that we'll treasure forever.",
  },
  {
    id: 3,
    name: 'Emma & David',
    role: 'Engagement Session',
    quote: "Nikki has an incredible talent for making you feel at ease in front of the camera. Our engagement photos perfectly captured this special time in our lives.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gold/10">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-blush uppercase tracking-wide text-sm font-medium mb-3">Testimonials</h3>
            <h2 className="section-heading">What My Clients Say</h2>
          </div>

          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-1000 ease-in-out ${
                  index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Quote className="text-blush mb-6" size={32} />
                <p className="text-lg md:text-xl italic mb-6 px-6">{testimonial.quote}</p>
                <div className="font-medium text-charcoal">{testimonial.name}</div>
                <div className="text-sm text-charcoal/70">{testimonial.role}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full transition-all ${
                  index === activeIndex ? 'bg-blush w-4' : 'bg-charcoal/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
