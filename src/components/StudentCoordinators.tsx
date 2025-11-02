import { Card, CardContent } from "@/components/ui/card";
import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";

const StudentCoordinators = () => {
  const students = [
    {
      name: "Arjun Mehta",
      course: "B.Tech CSE, 3rd Year",
      email: "arjun.mehta@student.gngroup.org",
      phone: "+91 98765 54321",
      image: student1
    },
    {
      name: "Kavya Reddy",
      course: "B.Tech CSE, 3rd Year",
      email: "kavya.reddy@student.gngroup.org",
      phone: "+91 98765 54322",
      image: student2
    },
    {
      name: "Rohan Desai",
      course: "B.Tech CSE, 4th Year",
      email: "rohan.desai@student.gngroup.org",
      phone: "+91 98765 54323",
      image: student1
    },
    {
      name: "Ananya Singh",
      course: "B.Tech CSE, 3rd Year",
      email: "ananya.singh@student.gngroup.org",
      phone: "+91 98765 54324",
      image: student2
    },
    {
      name: "Karan Malhotra",
      course: "B.Tech CSE, 4th Year",
      email: "karan.malhotra@student.gngroup.org",
      phone: "+91 98765 54325",
      image: student1
    }
  ];

  return (
    <section id="student-coordinators" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Student <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Coordinators</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your peers helping you navigate through the hackathon journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {students.map((student, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-secondary/20 group-hover:ring-secondary/50 transition-all duration-300">
                    <img 
                      src={student.image} 
                      alt={student.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{student.name}</h3>
                    <p className="text-xs font-medium text-secondary mb-3">{student.course}</p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p className="break-all">{student.email}</p>
                      <p>{student.phone}</p>
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

export default StudentCoordinators;
