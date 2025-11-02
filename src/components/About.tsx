import { Card, CardContent } from "@/components/ui/card";
import chairmanImg from "@/assets/chairman.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-secondary" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About College Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">College</span>
          </h2>
          
          <Card className="bg-gradient-to-br from-card to-muted border-border overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
            <CardContent className="p-8 sm:p-12">
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  GN Group has two decades old legacy of imparting quality education in multidiscipline.
                </p>
                <p>
                  GN Group of Institutes is one of the largest educational groups based in Greater Noida, having large strength of students spread across the country. It has energetic, dedicated and highly qualified faculty members from IITs, NITs, IIITs, IIMs and other reputed institutes and universities.
                </p>
                <p>
                  The group is committed to ensure that every learner is transformed into a skilled professional able to grab the best placement offers at par with industry standards. With the persistent efforts and untiring commitment displayed by team members of the Group, the popularity of the heritage campus has increased manifold among the aspiring students and therefore we have been able to attract the best talent desirous of pursuing Technical, Management, Pharmacy, Law and other job oriented courses available from across India.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 rounded-lg bg-background/50 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Years Excellence</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-secondary">6</div>
                  <div className="text-sm text-muted-foreground">Institutes</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-accent">15k+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Faculty</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chairman's Message */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
            Chairman's <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Message</span>
          </h2>
          
          <Card className="bg-gradient-to-br from-card to-muted border-border overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
            <CardContent className="p-8 sm:p-12">
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="mx-auto md:mx-0">
                  <img 
                    src={chairmanImg} 
                    alt="Chairman" 
                    className="w-48 h-48 rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg font-semibold text-foreground">Dear Participants,</p>
                  <p>
                    It gives me immense pleasure to welcome you all to the Hackathon organized by the Computer Science & Engineering Department of Greater Noida College. This event is not just a competition, it's a celebration of innovation, creativity, and the unyielding spirit of young minds determined to shape the future through technology.
                  </p>
                  <p>
                    Hackathons are more than just coding marathons; they are platforms where ideas come to life, collaboration thrives, and solutions to real-world problems emerge. As you dive into this challenge, remember that every line of code you write, every problem you solve, and every idea you bring to the table contributes to a larger vision of progress and transformation.
                  </p>
                  <p>
                    Embrace the pressure, enjoy the process, and don't be afraid to fail, because even in failure, there is learning. Let this experience empower you to think big, work smart, and push your boundaries.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About Hackathon Section */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Hackathon</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The Computer Science & Engineering Department of Greater Noida College and Management recently organized an exciting and innovative "GNC-TECHTHON 1.0" aimed at fostering creativity, collaboration, and technical excellence among students. The event brought together aspiring developers, coders, and tech enthusiasts who worked in teams to solve real-world problems through software solutions. Over the course of the hackathon, participants showcased their skills in programming, design, and critical thinking, developing impressive projects under time constraints. Industry professionals and faculty members mentored the teams, providing valuable insights and feedback. The "GNC-TECHTHON 1.0" not only encouraged practical application of classroom knowledge but also promoted teamwork and innovation, making it a memorable and enriching experience for all involved.
            Are you ready to unlock your potential and rise to the challenge?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
