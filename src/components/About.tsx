import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="section-spacing border-t border-border" ref={ref}>
      <div className={`section-container transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
          About
        </h2>
        
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
            Backend developer focused on building production-ready APIs and systems with <span className="font-semibold">Django</span> and <span className="font-semibold">Django REST Framework</span>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in authentication systems, real-time features with WebSockets, async task processing with Celery, and clean modular architecture. My projects handle user management, payments, real-time chat, and background jobs—the infrastructure that real products need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
