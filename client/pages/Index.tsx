import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative bg-[#F0F8FF] py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-[#171A1F] uppercase leading-tight tracking-wide text-center lg:text-left">
                Fall River Laundry Love
              </h1>
              
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#0072D5] uppercase leading-tight text-center lg:text-left">
                Clean Clothes and a Helping Hand
              </h2>
              
              <p className="text-lg md:text-xl text-[#171A1F] leading-relaxed text-center lg:text-left">
                Fall River Laundry Love provides free laundry services to those in need, fostering dignity, community, and support. We believe that everyone deserves the comfort and confidence that comes with clean clothes.
              </p>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d369fbc3b34fa1cdcd654325daecd0ed4e44b6ee?width=1104"
                alt="Laundry Love in action"
                className="w-full h-auto border-2 border-[#DEE1E6] rounded-sm"
              />
            </div>
          </div>
          
          {/* Decorative Hearts - Hidden on mobile */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/64eda7930642d2eaf11082ba9c28c742ea2ae02a?width=200"
            alt=""
            className="absolute left-4 top-0 w-16 md:w-20 lg:w-24 h-auto hidden md:block"
            aria-hidden="true"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a03e811f1762c904cc67d9a98acc567f98eef9af?width=200"
            alt=""
            className="absolute right-4 top-0 w-16 md:w-20 lg:w-24 h-auto hidden md:block"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Photos Section */}
      <section id="photos" className="relative py-16 md:py-24 bg-[#0072D5]/[0.32]">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#171A1F] uppercase text-center mb-8 md:mb-12 tracking-wide">
            photos of past Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              'https://api.builder.io/api/v1/image/assets/TEMP/94beec0f1443c377eae579d930d2018066885a28?width=718',
              'https://api.builder.io/api/v1/image/assets/TEMP/20890d5e5528482d787d828bde102836596cd0ee?width=717',
              'https://api.builder.io/api/v1/image/assets/TEMP/46a7d1437639259317195716c1b67f404afe94ee?width=717',
              'https://api.builder.io/api/v1/image/assets/TEMP/335b7634a6d92f9b744f5c75272a75a69a77679b?width=717',
              'https://api.builder.io/api/v1/image/assets/TEMP/20890d5e5528482d787d828bde102836596cd0ee?width=717',
              'https://api.builder.io/api/v1/image/assets/TEMP/335b7634a6d92f9b744f5c75272a75a69a77679b?width=717'
            ].map((src, idx) => (
              <div key={idx} className="border-2 border-[#DEE1E6] bg-white p-0.5">
                <img
                  src={src}
                  alt={`Event photo ${idx + 1}`}
                  className="w-full h-48 md:h-52 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-16 md:py-24 bg-[#FAFAFB] border-t-2 border-b-2 border-[#1E2128]">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#171A1F] uppercase text-center mb-8 md:mb-12 tracking-wide">
            Our Locations & Next Event Dates
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Location 1 */}
            <div className="bg-[#F0F8FF] p-8 md:p-12 text-center space-y-4 border border-[#DEE1E6]">
              <h3 className="text-2xl md:text-3xl font-bold text-[#171A1F] tracking-tight">
                STAR Laundry 6
              </h3>
              <p className="text-2xl md:text-3xl text-[#171A1F]">
                123 Main Street, Fall River, MA
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-[#0072D5]">
                Next Event: October 26, 2024
              </p>
            </div>
            
            {/* Location 2 */}
            <div className="bg-[#F0F8FF] p-8 md:p-12 text-center space-y-4 border border-[#DEE1E6]">
              <h3 className="text-2xl md:text-3xl font-bold text-[#171A1F] tracking-tight">
                Kam's Laundromat
              </h3>
              <p className="text-2xl md:text-3xl text-[#171A1F]">
                456 Oak Avenue, Fall River, MA
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-[#0072D5]">
                Next Event: November 10, 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#171A1F] uppercase text-center mb-8 md:mb-12 tracking-wide">
            About the Fall River Laundry Love
          </h2>
          
          <div className="space-y-6 text-center">
            <p className="text-lg leading-relaxed text-[#171A1F]">
              Fall River Laundry Love is a non-profit organization dedicated to serving our community by offering free laundry services to individuals and families experiencing homelessness, poverty, and other hardships. We believe in the dignity of having clean clothes and the positive impact it has on self-esteem and daily life. Our events provide a safe, welcoming, and hygienic environment for everyone to wash their clothes, fostering a sense of community and support.
            </p>
            
            <p className="text-lg leading-relaxed text-[#171A1F]">
              Beyond providing practical assistance, Fall River Laundry Love aims to connect people, build relationships, and offer a space where everyone feels valued and respected. We collaborate with local laundromats and volunteers to host regular events, ensuring that clean clothes are accessible to those who need them most. Join us in making a difference, one load of laundry at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Queue App Section */}
      <section id="events" className="py-16 md:py-24 bg-[#DEE1E6] border-t-2 border-b-2 border-[#1E2128]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#171A1F] uppercase mb-6 md:mb-8 tracking-wide">
            Track Your Turn with the Queuert App!
          </h2>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-[#171A1F] leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
            The Queuert App simplifies your Laundry Love experience. Check event schedules, find locations, and join the virtual queue from your phone, so you can spend less time waiting and more time connecting.
          </p>
          
          <button className="px-12 md:px-16 py-3 md:py-4 text-lg md:text-xl font-medium text-[#005CAD] bg-transparent border-2 border-[#005CAD] rounded-lg hover:bg-[#005CAD] hover:text-white transition-colors shadow-lg">
            Join the Waitlist
          </button>
        </div>
      </section>

      {/* Sign Up Form Section */}
      <section id="signup" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#171A1F] uppercase text-center mb-8 md:mb-12 tracking-wide">
            Sign Up for Our Next Event
          </h2>
          
          <div className="bg-white border-2 border-[#DEE1E6] shadow-lg p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#171A1F] uppercase text-center mb-8">
              Sign Up for Our Next Event
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-xs font-medium text-[#171A1F] mb-2 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="John Doe"
                  className="w-full px-3 py-4 border border-[#DEE1E6] text-sm text-[#565D6D] placeholder:text-[#565D6D] focus:outline-none focus:ring-2 focus:ring-[#0072D5]"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-[#171A1F] mb-2 uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="(123) 456-7890"
                  className="w-full px-3 py-4 border border-[#DEE1E6] text-sm text-[#565D6D] placeholder:text-[#565D6D] focus:outline-none focus:ring-2 focus:ring-[#0072D5]"
                />
              </div>
              
              <div>
                <label htmlFor="livingSituation" className="block text-xs font-medium text-[#171A1F] mb-2 uppercase">
                  Living Situation
                </label>
                <select
                  id="livingSituation"
                  className="w-full px-3 py-4 border border-[#DEE1E6] text-sm text-[#171A1F] bg-white focus:outline-none focus:ring-2 focus:ring-[#0072D5] appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjU0NjMgNS41MTYzMUMxMS44MDc5IDUuMjU0NjUgMTIuMjMyMSA1LjI1NDY1IDEyLjQ5MzcgNS41MTYzMUMxMi43NTU0IDUuNzc3OTYgMTIuNzU1NCA2LjIwMjA3IDEyLjQ5MzcgNi40NjM3M0w4LjQ3MzY5IDEwLjQ4MzdDOC4yMTIwNiAxMC43NDU0IDcuNzg3OTUgMTAuNzQ1NCA3LjUyNjMxIDEwLjQ4MzdMMy41MDYzIDYuNDYzNzNMMy40NjA1IDYuNDEyN0MzLjI0NTg2IDYuMTQ5NTMgMy4yNjEgNS43NjE2IDMuNTA2MyA1LjUxNjMxQzMuNzUxNTkgNS4yNzEwMSA0LjEzOTUzIDUuMjU1ODcgNC40MDI2OCA1LjQ3MDUxTDQuNDUzNzIgNS41MTYzMUw4IDkuMDYyNjFMMTEuNTQ2MyA1LjUxNjMxWiIgZmlsbD0iIzE3MUExRiIvPgo8L3N2Zz4K')] bg-[length:16px_16px] bg-[right_12px_center] bg-no-repeat pr-10"
                >
                  <option>Select your living situation</option>
                  <option>Housed</option>
                  <option>Homeless</option>
                  <option>Transitional Housing</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 md:py-4 bg-[#0072D5] text-white text-lg md:text-xl font-medium hover:bg-[#005CAD] transition-colors"
              >
                Join the Queue
              </button>
              
              <p className="text-sm text-[#565D6D] text-center italic leading-relaxed">
                Your information will be kept strictly confidential and used solely for event coordination and support purposes.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
