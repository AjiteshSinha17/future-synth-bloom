import { Card, CardContent } from "@/components/ui/card";
import faculty1 from "@/assets/faculty1.jpg";
import faculty2 from "@/assets/faculty2.jpg";

const FacultyCoordinators = () => {
  const faculty = [
    {
      name: "Dr. Amit Verma",
      designation: "Professor, CSE",
      email: "amit.verma@gngroup.org",
      phone: "+91 98765 43210",
      image: faculty1
    },
    {
      name: "Dr. Sunita Gupta",
      designation: "Associate Professor, CSE",
      email: "sunita.gupta@gngroup.org",
      phone: "+91 98765 43211",
      image: faculty2
    },
    {
      name: "Dr. Vikram Singh",
      designation: "Assistant Professor, CSE",
      email: "vikram.singh@gngroup.org",
      phone: "+91 98765 43212",
      image: faculty1
    },
    {
      name: "Dr. Neha Patel",
      designation: "Assistant Professor, CSE",
      email: "neha.patel@gngroup.org",
      phone: "+91 98765 43213",
      image: faculty2
    },
    {
      name: "Dr. Rahul Sharma",
      designation: "Assistant Professor, CSE",
      email: "rahul.sharma@gngroup.org",
      phone: "+91 98765 43214",
      image: faculty1
    }
  ];

  return (
    <section id="faculty" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Faculty <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Coordinators</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated faculty members ensuring a seamless hackathon experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {faculty.map((member, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-xs font-medium text-primary mb-3">{member.designation}</p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p className="break-all">{member.email}</p>
                      <p>{member.phone}</p>
                    </div>
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

export default FacultyCoordinators;
