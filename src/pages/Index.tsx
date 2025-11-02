import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import photo1 from "@/assets/clubphoto.jpg";
import photo2 from "@/assets/hero-bg.jpg";
import photo3 from "@/assets/tech-pattern.jpg";
import photo4 from "@/assets/final logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* Previous Events Photo Grid */}
        <section id="previous-events" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Previous Events</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                photo1,
                photo2,
                photo3,
                photo4,
                photo1,
                photo2,
                photo3,
                photo4,
                
              ].map((src, idx) => (
                <div key={idx} className="w-full h-40 md:h-48 overflow-hidden rounded-lg">
                  <img src={src} alt={`Previous event ${idx + 1}`} className="w-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <Timeline /> */}
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
