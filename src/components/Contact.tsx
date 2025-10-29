import { Mail, MessageCircle, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Get in Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Interested in working together? Send me a message or reach out directly!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-background border-border text-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background border-border text-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  className="bg-background border-border text-foreground resize-none"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Connect Buttons */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Connect With Me</h3>
            
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground justify-start"
              >
                <a href="mailto:ahmed.gaber4371@gmail.com">
                  <Mail className="w-5 h-5 mr-3" />
                  Email Me
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground justify-start"
              >
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  WhatsApp
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-border hover:bg-card hover:border-primary justify-start"
              >
                <a href="https://github.com/codekat123" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3" />
                  GitHub
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-border hover:bg-card hover:border-primary justify-start"
              >
                <a href="https://www.linkedin.com/in/ahmed-gaber-509b88359" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn
                </a>
              </Button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border text-center space-y-2">
              <p className="text-muted-foreground">Email: ahmed.gaber4371@gmail.com</p>
              <p className="text-muted-foreground">Currently open to freelance opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
