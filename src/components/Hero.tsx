import { Github } from "lucide-react";
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
    <section className="min-h-[85vh] flex items-center justify-center px-6 py-20">
      <div className="section-container text-center">
        <p className={`text-primary font-medium mb-4 tracking-wide uppercase text-sm transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          Backend Developer
        </p>
        
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
          Building scalable Django &<br />REST systems
        </h1>
        
        <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
          Python · Django · DRF · PostgreSQL · Redis · WebSockets · Celery
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium"
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            asChild
            className="border-border text-foreground hover:bg-secondary px-8 py-6 text-base font-medium"
          >
            <a href="https://github.com/codekat123" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
