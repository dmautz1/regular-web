import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michael Chen",
      role: "Marketing Director",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      quote: "Regular has transformed my daily routine. I've maintained a consistent workout schedule for 3 months now - the longest streak I've ever had!",
      rating: 5
    },
    {
      id: 2,
      name: "Sofia Rodriguez",
      role: "Freelance Designer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      quote: "As a freelancer, structure is everything. Regular helps me balance client work with personal projects and keeps me accountable.",
      rating: 5
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Software Engineer",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      quote: "The creator programs feature is game-changing. I'm following a senior developer's productivity routine and it's dramatically improved my workflow.",
      rating: 4
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            What Our Users <span className="text-primary-500 dark:text-primary-400">Say</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg max-w-2xl mx-auto">
            Hear from people who have transformed their daily routines with Regular.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={20} 
                            className={i < testimonial.rating ? "text-accent-500 dark:text-accent-400 fill-accent-500 dark:fill-accent-400" : "text-neutral-300 dark:text-neutral-600"} 
                          />
                        ))}
                      </div>
                      <blockquote className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-200 italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div>
                          <h4 className="font-semibold text-lg text-neutral-900 dark:text-white">{testimonial.name}</h4>
                          <p className="text-neutral-500 dark:text-neutral-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-neutral-800 shadow-md flex items-center justify-center text-neutral-700 dark:text-neutral-300 focus:outline-none hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors z-10 md:-translate-x-6"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-neutral-800 shadow-md flex items-center justify-center text-neutral-700 dark:text-neutral-300 focus:outline-none hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors z-10 md:translate-x-6"
          >
            <ArrowRight size={20} />
          </button>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  i === current ? 'bg-primary-500 dark:bg-primary-400' : 'bg-neutral-300 dark:bg-neutral-600'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;