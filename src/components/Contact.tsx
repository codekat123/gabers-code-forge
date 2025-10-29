import { Mail, MessageCircle, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xanprkaq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">
            Interested in working together? Send me a message or reach out directly!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-10 hover:border-primary/30 hover:shadow-elevated transition-all duration-500">
            <h3 className="text-3xl font-semibold mb-8 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-background/50 border-border/50 text-foreground h-12 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="bg-background/50 border-border/50 text-foreground h-12 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-background/50 border-border/50 text-foreground resize-none rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          {/* Connect Buttons */}
          <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-10 hover:border-primary/30 hover:shadow-elevated transition-all duration-500">
            <h3 className="text-3xl font-semibold mb-8 text-foreground">Connect With Me</h3>
            
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground justify-start py-6 rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 font-medium"
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
                className="w-full border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary justify-start py-6 rounded-xl hover:scale-105 transition-all duration-300 font-medium"
              >
                <a href="https://wa.me/201004968716" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  WhatsApp
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary justify-start py-6 rounded-xl hover:scale-105 transition-all duration-300 font-medium"
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
                className="w-full border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary justify-start py-6 rounded-xl hover:scale-105 transition-all duration-300 font-medium"
              >
                <a href="https://www.linkedin.com/in/ahmed-gaber-509b88359" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn
                </a>
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50 text-center space-y-2">
              <p className="text-muted-foreground text-base">Email: ahmed.gaber4371@gmail.com</p>
              <p className="text-muted-foreground text-base">Currently open to freelance opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
