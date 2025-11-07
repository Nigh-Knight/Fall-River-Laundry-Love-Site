import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Locations() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#171A1F] uppercase mb-8">
            Our Locations
          </h1>
          <p className="text-lg text-[#565D6D]">
            This page is coming soon. Continue prompting to fill in this content!
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
