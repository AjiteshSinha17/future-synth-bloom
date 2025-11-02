import { Card, CardContent } from "@/components/ui/card";
import mentor1 from "@/assets/mentor1.jpg";
import mentor2 from "@/assets/mentor2.jpg";

const Mentors = () => {
  const mentors = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Senior AI Researcher",
      expertise: "Machine Learning & AI",
      image: mentor1
    },
    {
      name: "Ms. Priya Sharma",
      title: "Tech Lead",
      expertise: "Full Stack Development",
      image: mentor2
    }
  ];

  return (
    <section id="mentors" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mentors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry experts and seasoned professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mentors.map((mentor, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{mentor.name}</h3>
                    <p className="text-sm font-medium text-primary mb-2">{mentor.title}</p>
                    <p className="text-sm text-muted-foreground">{mentor.expertise}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
