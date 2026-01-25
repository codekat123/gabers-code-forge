import { Mail, Github, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="section-spacing border-t border-border" ref={ref}>
      <div className={`section-container transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
          Contact
        </h2>
        <p className="text-2xl md:text-3xl font-semibold text-foreground mb-8 max-w-2xl">
          Let's talk
        </p>
        
        <div className="space-y-4">
          <a 
            href="mailto:ahmed.gaber.dev@gmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="group-hover:underline">ahmed.gaber.dev@gmail.com</span>
          </a>
          
          <a 
            href="https://github.com/codekat123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Github className="w-5 h-5 text-primary" />
            <span className="group-hover:underline">github.com/codekat123</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/ahmed-gaber-509b88359"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Linkedin className="w-5 h-5 text-primary" />
            <span className="group-hover:underline">linkedin.com/in/ahmed-gaber-509b88359</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
