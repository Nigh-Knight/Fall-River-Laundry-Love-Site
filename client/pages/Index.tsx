import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bubbles from "../components/Bubbles";
import { PreRegistrationForm } from "../components/PreRegistrationForm";

import photo1 from "../Assets/Snapchat-1048474142.jpg";
import photo2 from "../Assets/Snapchat-1917530325.jpg";
import photo3 from "../Assets/Snapchat-455259218.jpg";
import photo4 from "../Assets/Snapchat-1683266484.jpg";
import photo5 from "../Assets/Snapchat-1873169240.jpg";
import photo6 from "../Assets/Snapchat-1711699805.jpg";

function getWednesdaysOfMonth(year: number, month: number): Date[] {
  const wednesdays: Date[] = [];
  const d = new Date(year, month, 1);
  while (d.getMonth() === month) {
    if (d.getDay() === 3) wednesdays.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return wednesdays;
}

function getNextEventDate(position: "second-to-last" | "last"): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Check current month and next month to find the next upcoming date
  for (let offset = 0; offset < 2; offset++) {
    const year = today.getFullYear();
    const month = today.getMonth() + offset;
    const d = new Date(year, month, 1);
    const wednesdays = getWednesdaysOfMonth(d.getFullYear(), d.getMonth());

    const target = position === "last"
      ? wednesdays[wednesdays.length - 1]
      : wednesdays[wednesdays.length - 2];

    if (target && target >= today) {
      return target.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }
  }
  return "";
}

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref} className={className}>{children}</div>;
}

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Bubbles />
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-[72px]">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8f4fd] via-[#f0f8ff] to-[#dbeafe]" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #0072D5 1px, transparent 0)", backgroundSize: "40px 40px" }} />

        <div className="relative container mx-auto px-4 max-w-7xl py-20 md:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <RevealSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-blue-100 text-sm font-medium text-[#0072D5] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#0072D5] animate-pulse" />
                  Serving Fall River since 2023
                </div>
              </RevealSection>

              <RevealSection delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#171A1F] leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Fall River{" "}
                  <span className="gradient-text">Laundry Love</span>
                </h1>
              </RevealSection>

              <RevealSection delay={200}>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#565D6D] leading-snug">
                  Clean Clothes &amp; a Helping Hand
                </h2>
              </RevealSection>

              <RevealSection delay={300}>
                <p className="text-base md:text-lg text-[#565D6D] leading-relaxed max-w-xl">
                  We provide free laundry services to those in need, fostering dignity, community, and support. Everyone deserves the comfort and confidence that comes with clean clothes.
                </p>
              </RevealSection>

              <RevealSection delay={400}>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#0072D5] to-[#00a4ff] rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all btn-glow border-none cursor-pointer"
                  >
                    Sign Up for Next Event
                  </button>
                  <button
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-8 py-3.5 text-base font-semibold text-[#0072D5] bg-white border-2 border-[#0072D5]/20 rounded-xl hover:border-[#0072D5]/40 hover:bg-blue-50/50 transition-all cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </RevealSection>
            </div>

            {/* Right Column - Image */}
            <RevealSection delay={200} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/50">
                <img
                  src={photo3}
                  alt="Laundry Love in action"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0072D5]/10 to-transparent" />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#0072D5]/20 to-[#00a4ff]/20 rounded-2xl blur-xl" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#00a4ff]/20 to-[#0072D5]/20 rounded-full blur-xl" />
            </RevealSection>
          </div>
        </div>

        {/* Animated Wave divider */}
        <div className="relative h-20 md:h-28">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Back wave - slower, lighter */}
            <path className="wave-back" d="M0 60C240 90 480 30 720 60C960 90 1200 30 1440 60V120H0V60Z" fill="rgba(255,255,255,0.5)" />
            {/* Middle wave */}
            <path className="wave-mid" d="M0 70C360 100 720 40 1080 70C1260 85 1380 50 1440 70V120H0V70Z" fill="rgba(255,255,255,0.7)" />
            {/* Front wave - fastest, solid */}
            <path className="wave-front" d="M0 80C240 110 480 50 720 80C960 110 1200 50 1440 80V120H0V80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Photos Section */}
      <section id="photos" className="relative py-20 md:py-28 overflow-hidden">
        {/* Soft background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f0f8ff]/50 to-white" />

        <div className="relative container mx-auto px-4 max-w-7xl">
          <RevealSection className="text-center mb-14">
            <p className="text-sm font-semibold text-[#0072D5] uppercase tracking-widest mb-3">Gallery</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#171A1F] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Photos of Past Events
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#0072D5] to-[#00a4ff] rounded-full" />
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[photo1, photo2, photo3, photo4, photo5, photo6].map((src, idx) => (
              <RevealSection key={idx} delay={idx * 100}>
                <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover bg-white">
                  <img
                    src={src}
                    alt={`Event photo ${idx + 1}`}
                    className="w-full h-56 md:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] to-[#eef5fb]" />

        <div className="relative container mx-auto px-4 max-w-7xl">
          <RevealSection className="text-center mb-14">
            <p className="text-sm font-semibold text-[#0072D5] uppercase tracking-widest mb-3">Find Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#171A1F] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Locations &amp; Next Events
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#0072D5] to-[#00a4ff] rounded-full" />
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { name: "STAR Laundry 6", address: "123 Main Street, Fall River, MA", date: getNextEventDate("second-to-last") },
              { name: "Kam's Laundromat", address: "456 Oak Avenue, Fall River, MA", date: getNextEventDate("last") },
            ].map((loc, idx) => (
              <RevealSection key={idx} delay={idx * 150}>
                <div className="bg-white rounded-2xl p-8 md:p-10 text-center space-y-4 shadow-lg shadow-blue-900/5 border border-blue-50 card-hover">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-[#0072D5]/10 to-[#00a4ff]/10 flex items-center justify-center mb-2">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0072D5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#171A1F]">
                    {loc.name}
                  </h3>
                  <p className="text-base md:text-lg text-[#565D6D]">
                    {loc.address}
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0072D5]/5 to-[#00a4ff]/10 text-[#0072D5] font-semibold rounded-full text-sm border border-[#0072D5]/10">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Next Event: {loc.date}
                    </span>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <RevealSection className="text-center mb-14">
            <p className="text-sm font-semibold text-[#0072D5] uppercase tracking-widest mb-3">Our Mission</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#171A1F] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              About Fall River Laundry Love
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#0072D5] to-[#00a4ff] rounded-full" />
          </RevealSection>

          <div className="space-y-8">
            <RevealSection>
              <p className="text-lg leading-relaxed text-[#565D6D] text-center">
                Fall River Laundry Love is a non-profit organization dedicated to serving our community by offering free laundry services to individuals and families experiencing homelessness, poverty, and other hardships. We believe in the dignity of having clean clothes and the positive impact it has on self-esteem and daily life. Our events provide a safe, welcoming, and hygienic environment for everyone to wash their clothes, fostering a sense of community and support.
              </p>
            </RevealSection>

            <RevealSection delay={100}>
              <p className="text-lg leading-relaxed text-[#565D6D] text-center">
                Beyond providing practical assistance, Fall River Laundry Love aims to connect people, build relationships, and offer a space where everyone feels valued and respected. We collaborate with local laundromats and volunteers to host regular events, ensuring that clean clothes are accessible to those who need them most. Join us in making a difference, one load of laundry at a time.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Queue App Section */}
      <section id="events" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0072D5] to-[#005CAD]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />

        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <RevealSection>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Track Your Turn with the Queuert App!
            </h2>
          </RevealSection>

          <RevealSection delay={100}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              The Queuert App simplifies your Laundry Love experience. Check event schedules, find locations, and join the virtual queue from your phone, so you can spend less time waiting and more time connecting.
            </p>
          </RevealSection>

          <RevealSection delay={200}>
            <button className="px-10 py-4 text-base font-semibold text-[#0072D5] bg-white rounded-xl hover:bg-gray-50 hover:shadow-xl hover:shadow-black/10 transition-all border-none cursor-pointer">
              Ask about downloading at the next Laundry Love event
            </button>
          </RevealSection>
        </div>
      </section>

      {/* Sign Up Form Section */}
      <section id="signup" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-2xl">
          <RevealSection className="text-center mb-12">
            <p className="text-sm font-semibold text-[#0072D5] uppercase tracking-widest mb-3">Get Involved</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#171A1F] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Sign Up for Our Next Event
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#0072D5] to-[#00a4ff] rounded-full" />
          </RevealSection>

          <RevealSection delay={100}>
            <div className="bg-white rounded-2xl border border-blue-50 shadow-xl shadow-blue-900/5 p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-[#171A1F] text-center mb-8">
                Pre-Registration Form
              </h3>

              <PreRegistrationForm />

              <p className="text-sm text-[#9095A0] text-center italic leading-relaxed mt-6">
                Your information will be kept strictly confidential and used solely for event coordination and support purposes.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />

      {/* About The Creator Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e17] via-[#111827] to-[#0a0e17]" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "50px 50px" }} />

        <div className="relative container mx-auto px-4 max-w-6xl">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              About The Site Creator
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#0072D5] to-[#00a4ff] rounded-full" />
          </RevealSection>

          <RevealSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
              {/* Left - Image and Name */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-blue-500/10">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Face269c45895465387439bd5ba59a80e%2F466021496b9c46f096eafa0936214782"
                      alt="Kepler Pierre"
                      className="w-[400px] h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#0072D5]/30 to-[#00a4ff]/30 -z-10 blur-sm" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-6 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                  KEPLER
                </h3>
              </div>

              {/* Right - Content */}
              <div className="space-y-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-10">
                <p className="text-base text-gray-300 leading-relaxed">
                  Hello, my name is Kepler, and I am the creator of this site. I'm a music enthusiast and a developer, currently based in Massachusetts and studying as a University student.
                </p>

                <p className="text-base text-gray-300 leading-relaxed">
                  I'm the sole developer of this site and quick to respond to messages. I'm always excited to collaborate with others.
                </p>

                <p className="text-base text-gray-300 leading-relaxed">
                  My contact is{' '}
                  <a href="https://instagram.com/kepler.ep" className="text-[#00a4ff] hover:text-[#0072D5] transition-colors font-medium">
                    kepler.ep
                  </a>
                  {' '}on Instagram and{' '}
                  <a href="mailto:name.of.kepler@gmail.com" className="text-[#00a4ff] hover:text-[#0072D5] transition-colors font-medium">
                    name.of.kepler@gmail.com
                  </a>
                  {' '}on email.
                </p>

                <div className="pt-3">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#0072D5] to-[#00a4ff] text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all rounded-xl btn-glow"
                  >
                    Learn More About This Site
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
