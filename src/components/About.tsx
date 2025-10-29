import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-32 px-6 relative" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>
        
        <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-10 md:p-12 shadow-elevated hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 group hover:-translate-y-1">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            I build backend services that developers and businesses rely on. I focus on{' '}
            <span className="text-primary font-semibold">clean architecture</span>,{' '}
            <span className="text-primary font-semibold">testable code</span>, and{' '}
            <span className="text-primary font-semibold">predictable deployments</span>.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            Specialized in building scalable backend systems and APIs using{' '}
            <span className="text-primary font-semibold">Django</span> and{' '}
            <span className="text-primary font-semibold">Python</span>, with experience in 
            RESTful APIs, authentication (JWT), database management (PostgreSQL, MySQL), and asynchronous task 
            processing with Celery.
          </p>
          
          <div className="mt-10 pt-8 border-t border-border/50">
            <h3 className="text-2xl font-semibold mb-5 text-foreground">Learning Goals</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently learning advanced backend concepts, microservices architecture, and performance optimization to become a professional Backend Developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
