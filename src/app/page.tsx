import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Placeholder for future sections */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            More sections coming soon...
          </h2>
          <p className="text-gray-600">
            Photo gallery, locations, about section, and pre-registration form will be added here.
          </p>
        </div>
      </div>

      {/* Pre-registration form placeholder - this will be the scroll target */}
      <div id="pre-registration-form" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Pre-Registration Form
          </h2>
          <p className="text-gray-600">
            Form component will be implemented in a future task.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
