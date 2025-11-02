import { Card, CardContent } from "@/components/ui/card";
import { Brain, Leaf, Zap, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Explore cutting-edge artificial intelligence and machine learning technologies",
      gradient: "from-primary to-accent",
    },
    {
      icon: Leaf,
      title: "Nature Integration",
      description: "Discover biomimetic solutions inspired by natural ecosystems",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Zap,
      title: "Rapid Development",
      description: "36-hour intensive hackathon to bring your ideas to life",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Connect with brilliant minds and build something extraordinary",
      gradient: "from-secondary to-accent",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-secondary" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div> */}

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-muted border-border overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold">GNC COLLEGE</h3>
                  <p className="text-muted-foreground">
                    Since 1997, GNC College has been reshaping talented Indian youth into global multifaceted professionals.
                    With thriving institutes, we're committed to excellence in education across engineering, management,
                    and technology.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-background/50">
                    <div className="text-3xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">Years Excellence</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background/50">
                    <div className="text-3xl font-bold text-secondary">12</div>
                    <div className="text-sm text-muted-foreground">Institutes</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background/50">
                    <div className="text-3xl font-bold text-accent">10k+</div>
                    <div className="text-sm text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background/50">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Faculty</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 mt-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Hackathon</span>
          </h2>
          <p className="text-lg indent-center text-muted-foreground">

            The Computer Science & Engineering Department of Greater Noida College and Management
            recently organized an exciting and innovative “GNC-TECHTHON 1.0” aimed at fostering
            creativity, collaboration, and technical excellence among students. The event brought together
            aspiring developers, coders, and tech enthusiasts who worked in teams to solve real-world
            problems through software solutions. Over the course of the hackathon, participants showcased
            their skills in programming, design, and critical thinking, developing impressive projects under
            time constraints. Industry professionals and faculty members mentored the teams, providing
            valuable insights and feedback. The “GNC-TECHTHON 1.0” not only encouraged practical
            application of classroom knowledge but also promoted teamwork and innovation, making it a
            memorable and enriching experience for all involved.
            Are you ready to unlock your potential and rise to the challenge?
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
