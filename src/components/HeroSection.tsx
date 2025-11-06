'use client';

import { Button } from './ui/Button';

export function HeroSection() {
  const scrollToForm = () => {
    const formElement = document.getElementById('pre-registration-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Clean Clothes and a Helping Hand
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Join Fall River Laundry Love for free laundry services and community support
        </p>
        
        <Button
          onClick={scrollToForm}
          size="lg"
          className="bg-primary-orange hover:bg-orange-700 text-white font-semibold px-8 py-4 text-lg transition-colors duration-200"
        >
          Sign Up for an Event
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white/70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
}