import { MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-6">
            Available for Freelance
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in tracking-tight">
          Ahmed Gaber
        </h1>
        
        <h2 className="text-2xl md:text-4xl text-foreground/90 mb-8 animate-fade-in font-light" style={{ animationDelay: '200ms' }}>
          Backend Developer
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
          Building robust backend systems and APIs with Django and Python. Specialized in clean architecture, testable code, and predictable deployments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 font-medium"
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary text-lg px-10 py-7 rounded-xl hover:scale-105 transition-all duration-300 font-medium"
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex gap-8 justify-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <a
            href="https://github.com/codekat123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-gaber-509b88359"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-7 h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
