export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-primary-orange">
              Contact Us
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>Fall River Laundry Love</p>
              <p>Email: info@fallriverlaundryLove.org</p>
              <p>Phone: (508) 555-0123</p>
              <p>Volunteer Coordinator: Jane Smith</p>
            </div>
          </div>

          {/* Our Locations Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-primary-orange">
              Our Locations
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-medium text-white">STAR Laundry 6</h4>
                <p className="text-sm">123 Main Street</p>
                <p className="text-sm">Fall River, MA 02720</p>
              </div>
              <div>
                <h4 className="font-medium text-white">Kam&apos;s Laundromat</h4>
                <p className="text-sm">456 Oak Avenue</p>
                <p className="text-sm">Fall River, MA 02721</p>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-primary-orange">
              Follow Us
            </h3>
            <div className="space-y-3">
              <div className="flex flex-col space-y-2 text-gray-300">
                <a 
                  href="#" 
                  className="hover:text-primary-orange transition-colors duration-200"
                >
                  Facebook Community Page
                </a>
                <a 
                  href="#" 
                  className="hover:text-primary-orange transition-colors duration-200"
                >
                  Instagram @FallRiverLaundryLove
                </a>
                <a 
                  href="#" 
                  className="hover:text-primary-orange transition-colors duration-200"
                >
                  Newsletter Signup
                </a>
              </div>
              <div className="pt-2">
                <p className="text-sm text-gray-400">
                  Stay updated on upcoming events and volunteer opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Fall River Laundry Love. All rights reserved. | 
            <span className="ml-1">
              A community initiative bringing clean clothes and hope to Fall River
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}