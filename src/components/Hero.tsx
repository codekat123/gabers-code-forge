import { MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card -z-10" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border backdrop-blur-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Egypt</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Ahmed Gaber
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
          Backend Developer
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Building robust backend systems and APIs with Django and Python. Specialized in clean architecture, testable code, and predictable deployments.
        </p>
        
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button 
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/20 transition-all"
          >
            View Projects
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="border-border hover:bg-card hover:border-primary transition-all"
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4">
          <a href="https://github.com/codekat123" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/ahmed-gaber-509b88359" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
