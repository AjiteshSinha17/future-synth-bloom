import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare, Youtube, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We're here to help!
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Faculty Section */}
            <Card className="bg-card border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Faculty Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:faculty@gngroup.org" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        faculty@gngroup.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Student Coordinators Section */}
            <Card className="bg-card border-border hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Student Coordinators</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:ajiteshsinha2004@gmail.com" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                        ajiteshsinha2004@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:+919876554321" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                        +91 98765 54321
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Card */}
          <Card className="bg-card border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 mb-12">
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  GN GROUP OF INSTITUTE, KNOWLEDGE PARK-2, PLOT-6B, GREATER NOIDA UP 201206
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Connect With Us */}
          <Card className="bg-gradient-to-br from-card to-muted border-primary/50 mb-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
                  asChild
                >
                  <a href="https://chat.whatsapp.com/DWT4oIEjnYwKYBKGchOxxx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  asChild
                >
                  <a href="https://www.youtube.com/@gngroupofinstitutes9600" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Youtube className="w-5 h-5" />
                    YouTube
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                  asChild
                >
                  <a href="https://www.instagram.com/gngroupofficials/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  asChild
                >
                  <a href="https://www.linkedin.com/company/gngroupofficials/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Innovate?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join talented developers, designers, and innovators in creating the future with cutting-edge technology
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                asChild
              >
                <a href="https://unstop.com/p/glb-hackathon-40" target="_blank" rel="noopener noreferrer">
                  Apply via Unstop
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
