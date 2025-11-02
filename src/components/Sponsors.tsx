import { Card, CardContent } from "@/components/ui/card";
import sponsor1 from "@/assets/sponsor1.jpg";

const Sponsors = () => {
  const sponsors = [
    { name: "Tech Corp", logo: sponsor1, tier: "Platinum" },
    { name: "Innovation Labs", logo: sponsor1, tier: "Gold" },
    { name: "Digital Solutions", logo: sponsor1, tier: "Gold" },
    { name: "Cloud Systems", logo: sponsor1, tier: "Silver" },
    { name: "AI Ventures", logo: sponsor1, tier: "Silver" },
    { name: "Code Academy", logo: sponsor1, tier: "Silver" },
  ];

  return (
    <section id="sponsors" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sponsors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powered by industry leaders who believe in innovation
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 border-border hover:border-primary/50"
            >
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                <div className="w-24 h-24 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold">{sponsor.name}</p>
                  <p className="text-xs text-muted-foreground">{sponsor.tier}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
