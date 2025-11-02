import { Card, CardContent } from "@/components/ui/card";
import themeAI from "@/assets/theme-ai.jpg";
import themeBlockchain from "@/assets/theme-blockchain.jpg";
import themeIoT from "@/assets/theme-iot.jpg";
import themeSecurity from "@/assets/theme-security.jpg";
import themeHealth from "@/assets/theme-health.jpg";

const HackathonThemes = () => {
  const themes = [
    {
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to create intelligent solutions",
      image: themeAI,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Blockchain & Web3",
      description: "Build decentralized applications and explore blockchain technology",
      image: themeBlockchain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "IoT & Smart Cities",
      description: "Connect devices and create smart solutions for urban living",
      image: themeIoT,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Cybersecurity",
      description: "Develop secure systems and protect digital infrastructure",
      image: themeSecurity,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Healthcare Tech",
      description: "Innovate in digital health and medical technology",
      image: themeHealth,
      color: "from-blue-400 to-cyan-400"
    }
  ];

  return (
    <section id="themes" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Hackathon <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Themes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your track and build innovative solutions across these cutting-edge domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={theme.image} 
                    alt={theme.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${theme.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{theme.title}</h3>
                  <p className="text-sm text-muted-foreground">{theme.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonThemes;
