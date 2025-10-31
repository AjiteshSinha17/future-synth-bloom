import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Trees, HeartPulse, Zap, Building2, Smartphone } from "lucide-react";

const Themes = () => {
  const themes = [
    {
      icon: Bot,
      title: "Humanoid Robotics",
      description: "Design intelligent robots that mimic human behavior and interaction patterns",
      tags: ["AI", "Robotics", "Computer Vision"],
      color: "primary",
    },
    {
      icon: Trees,
      title: "Eco-Tech Solutions",
      description: "Create sustainable technology solutions inspired by natural ecosystems",
      tags: ["Sustainability", "IoT", "Green Tech"],
      color: "secondary",
    },
    {
      icon: HeartPulse,
      title: "Healthcare AI",
      description: "Develop AI-powered healthcare solutions for better diagnosis and treatment",
      tags: ["ML", "Healthcare", "Diagnostics"],
      color: "accent",
    },
    {
      icon: Zap,
      title: "Smart Energy",
      description: "Build intelligent systems for renewable energy management and optimization",
      tags: ["Energy", "Automation", "Analytics"],
      color: "primary",
    },
    {
      icon: Building2,
      title: "Smart Cities",
      description: "Create solutions for urban challenges using AI and IoT technologies",
      tags: ["Urban Tech", "IoT", "Infrastructure"],
      color: "secondary",
    },
    {
      icon: Smartphone,
      title: "AR/VR Nature",
      description: "Immersive experiences blending digital worlds with natural environments",
      tags: ["AR/VR", "Gaming", "Education"],
      color: "accent",
    },
  ];

  const colorMap = {
    primary: "border-primary/50 hover:border-primary",
    secondary: "border-secondary/50 hover:border-secondary",
    accent: "border-accent/50 hover:border-accent",
  };

  return (
    <section id="themes" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Hackathon <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Themes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose your track and build innovative solutions at the intersection of AI and nature
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:scale-105 transition-all duration-300 bg-card border-2 ${colorMap[theme.color as keyof typeof colorMap]} hover:shadow-2xl`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${theme.color} to-${theme.color}/50 p-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-full h-full text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{theme.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{theme.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {theme.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Themes;
