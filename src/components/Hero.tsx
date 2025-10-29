import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        <div className={`mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-6 hover:bg-primary/20 transition-colors duration-300">
            Available for Freelance
          </span>
        </div>
        
        <h1 className={`text-6xl md:text-8xl font-bold mb-6 tracking-tight transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Ahmed Gaber
          </span>
        </h1>
        
        <h2 className={`text-2xl md:text-4xl text-foreground/90 mb-8 font-light transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
          Backend Developer
        </h2>
        
        <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
          Building robust backend systems and APIs with Django and Python. Specialized in clean architecture, testable code, and predictable deployments.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '800ms' }}>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 font-medium relative overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary text-lg px-10 py-7 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium"
          >
            Get in Touch
          </Button>
        </div>

        <div className={`flex gap-8 justify-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1000ms' }}>
          <a
            href="https://github.com/codekat123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-gaber-509b88359"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
          >
            <Linkedin className="w-7 h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
