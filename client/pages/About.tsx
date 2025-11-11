import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#F0F8FF] py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#171A1F] uppercase mb-6 tracking-wide">
            About This Site
          </h1>
          <p className="text-xl md:text-2xl text-[#0072D5] font-semibold">
            Created by a student passionate about community service and technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {/* Creator Info */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#0072D5] flex-shrink-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Face269c45895465387439bd5ba59a80e%2F466021496b9c46f096eafa0936214782"
                  alt="Kepler Pierre"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#171A1F] uppercase mb-4">
                  Kepler Pierre
                </h2>
                <p className="text-xl text-[#0072D5] mb-4">
                  University Student & Developer
                </p>
                <p className="text-lg text-[#565D6D] leading-relaxed">
                  Based in Massachusetts, USA
                </p>
              </div>
            </div>

            {/* About the Project */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#171A1F] uppercase">
                About This Project
              </h3>
              <p className="text-lg text-[#171A1F] leading-relaxed">
                As a university student studying computer science and passionate about making a difference in my community, 
                I created this website to support the Fall River Laundry Love initiative. This project combines my technical 
                skills with my desire to help those in need access essential services with dignity and ease.
              </p>
              <p className="text-lg text-[#171A1F] leading-relaxed">
                The site was built from the ground up using modern web technologies including React, TypeScript, and Tailwind CSS. 
                My goal was to create a clean, accessible, and user-friendly platform that makes it easy for community members 
                to learn about Laundry Love events, find locations, and sign up for services.
              </p>
            </div>

            {/* Why I Built This */}
            <div className="space-y-6 bg-[#F0F8FF] p-8 md:p-12 border border-[#DEE1E6]">
              <h3 className="text-2xl md:text-3xl font-bold text-[#171A1F] uppercase">
                Why I Built This
              </h3>
              <p className="text-lg text-[#171A1F] leading-relaxed">
                I believe that technology should serve people and communities. When I learned about the Fall River Laundry Love 
                organization and their mission to provide free laundry services to those experiencing hardship, I knew I wanted 
                to contribute my skills to help amplify their impact.
              </p>
              <p className="text-lg text-[#171A1F] leading-relaxed">
                This website serves as a digital hub for the organization, making it easier for people to access information, 
                stay updated on events, and connect with the services they need. As a student, this project has been an 
                incredible learning experience and a meaningful way to give back to my community.
              </p>
            </div>

            {/* Technical Details */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#171A1F] uppercase">
                Technical Details
              </h3>
              <p className="text-lg text-[#171A1F] leading-relaxed">
                This website was built using:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-[#171A1F] ml-4">
                <li>React for the user interface</li>
                <li>TypeScript for type-safe code</li>
                <li>Tailwind CSS for responsive design</li>
                <li>Vite for fast development and building</li>
                <li>React Router for navigation</li>
              </ul>
              <p className="text-lg text-[#171A1F] leading-relaxed">
                The site is designed to be fully responsive, accessible, and easy to maintain, ensuring it can grow 
                alongside the organization's needs.
              </p>
            </div>

            {/* Contact Section */}
            <div className="space-y-6 bg-[#DEE1E6] p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#171A1F] uppercase">
                Get In Touch
              </h3>
              <p className="text-lg text-[#171A1F] leading-relaxed">
                I'm always excited to collaborate with others and discuss new projects. 
                Feel free to reach out if you have questions about this site or want to connect!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://instagram.com/kepler.ep" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#0072D5] text-white text-lg font-medium hover:bg-[#005CAD] transition-colors rounded-lg"
                >
                  Instagram: @kepler.ep
                </a>
                <a 
                  href="mailto:name.of.kepler@gmail.com"
                  className="px-8 py-3 bg-transparent border-2 border-[#0072D5] text-[#0072D5] text-lg font-medium hover:bg-[#0072D5] hover:text-white transition-colors rounded-lg"
                >
                  Email Me
                </a>
              </div>
            </div>

            {/* Personal Note */}
            <div className="space-y-6 text-center">
              <p className="text-lg text-[#565D6D] leading-relaxed italic">
                "As a student and developer, I'm passionate about using technology to create positive change. 
                This project represents my commitment to both my craft and my community. I'm the sole developer 
                of this site and quick to respond to any feedback or suggestions."
              </p>
              <p className="text-xl font-semibold text-[#171A1F]">
                — Kepler Pierre
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
