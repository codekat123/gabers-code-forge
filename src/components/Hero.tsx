import { MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card -z-10" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border backdrop-blur-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Egypt</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Ahmed Gaber
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
          Web Developer | Backend & Full Stack Developer
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Building robust backend systems and APIs with Django and Laravel. 
          Passionate about clean code, performance, and creating solutions that matter.
        </p>
        
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/20 transition-all"
          >
            <a href="https://github.com/codekat123" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:bg-card hover:border-primary transition-all"
          >
            <a href="https://www.linkedin.com/in/ahmed-gaber-509b88359" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
