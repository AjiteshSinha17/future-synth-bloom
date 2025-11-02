import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import clubphoto from "@/assets/final logo.png";
import gnLogo from "@/assets/gn-logo.png";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Futuristic AI robot in nature" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center pt-16">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          {/* College Logo */}
          <div className="flex justify-center mb-6">
            
          </div>
          
          {/* Badge */}
          <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-4 overflow-hidden rounded-full bg-transparent">
            <img className="w-full h-full object-cover object-center transform scale-125 transition-transform duration-300 ease-out" src={clubphoto} alt="TechVision Club" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
            <div className="text-sm font-medium">TechVision Club Presents</div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block mb-2">GNC TECHTHON</span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-glow">
              1.0
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Where <span className="text-primary font-semibold">Innovation</span> meets{" "}
            <span className="text-secondary font-semibold">Execution</span>
          </p>

          {/* Date & Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-medium">29th November 2025</span>
            </div>
            {/* <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <Users className="w-5 h-5 text-secondary" />
              <span className="font-medium">500+ Participants</span>
             </div> */}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 shadow-lg shadow-primary/25" asChild>
              <a href="https://chat.whatsapp.com/DWT4oIEjnYwKYBKGchOxxx" target="_blank" rel="noopener noreferrer">
                Join WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8" asChild>
              <a href="https://unstop.com/p/glb-hackathon-40" target="_blank" rel="noopener noreferrer">
                Apply Unstop
              </a>
            </Button>
          </div>

          {/* Tagline */}
          <p className="text-lg text-muted-foreground italic pt-8">
            "Fuel Ideas, Code Genius"
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>;
};
export default Hero;