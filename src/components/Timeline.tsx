import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Timeline = () => {
  const events = [
    { time: "08:00 AM", title: "Registration & Check-in", description: "Welcome coffee and team formation" },
    { time: "09:00 AM", title: "Opening Ceremony", description: "Keynote speeches and theme announcement" },
    { time: "10:00 AM", title: "Coding Begins", description: "Innovation starts now" },
    { time: "12:00 PM", title: "Lunch Break", description: "Networking and refreshments" },
    { time: "02:00 PM", title: "Mentor Sessions", description: "One-on-one guidance from experts" },
    { time: "04:00 PM", title: "Final Submissions", description: "Project demos and presentations" },
    { time: "05:00 PM", title: "Judging & Evaluation", description: "Expert panel reviews all projects" },
    { time: "06:00 PM", title: "Closing Ceremony", description: "Winners announcement and prizes" },
  ];

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Event <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            One day of intensive innovation, learning, and collaboration
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

            {/* Timeline Events */}
            <div className="space-y-8">
              {events.map((event, index) => (
                <div key={index} className="relative pl-20 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-4 w-5 h-5 rounded-full bg-card border-2 border-primary group-hover:scale-125 transition-transform">
                    <CheckCircle2 className="w-3 h-3 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  {/* Event Card */}
                  <Card className="group-hover:scale-105 transition-all duration-300 bg-card border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-primary">{event.time}</span>
                            <div className="h-px w-8 bg-border" />
                            <h3 className="text-lg font-semibold">{event.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
