import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

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

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <a href="mailto:ajiteshsinha2004@gmail.com" className="text-sm text-muted-foreground hover:text-primary">
                        ajiteshsinha2004@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Phone</div>
                      <a href="tel:+911204588500" className="text-sm text-muted-foreground hover:text-secondary">
                        +91 120 458 8500
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Location</div>
                      <p className="text-sm text-muted-foreground">
                        GN Group of Institute<br />
                        Knowledge Park-2, Plot-6B<br />
                        Greater Noida, UP - 201206
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border">
              <CardContent className="p-8 flex flex-col justify-center space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto flex items-center justify-center animate-glow">
                    <MessageCircle className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Connect With Us</h3>
                  <p className="text-muted-foreground">
                    Join our WhatsApp group for updates and connect via phone
                  </p>
                </div>

                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
                    asChild
                  >
                    <a href="https://chat.whatsapp.com/DWT4oIEjnYwKYBKGchOxxx" target="_blank" rel="noopener noreferrer">
                      Join WhatsApp Group
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Innovate?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join 500+ talented developers, designers, and innovators in creating the future of AI and nature-inspired technology
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                asChild
              >
                <a href="https://unstop.com/p/glb-hackathon-40" target="_blank" rel="noopener noreferrer">
                  Apply with Unstop
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
