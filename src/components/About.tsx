const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          About Me
        </h2>
        
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg hover:shadow-primary/10 transition-all">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            I build backend services that developers and businesses rely on. I focus on{' '}
            <span className="text-primary font-semibold">clean architecture</span>,{' '}
            <span className="text-primary font-semibold">testable code</span>, and{' '}
            <span className="text-primary font-semibold">predictable deployments</span>.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Specialized in building scalable backend systems and APIs using{' '}
            <span className="text-primary font-semibold">Django</span> and{' '}
            <span className="text-primary font-semibold">Python</span>, with experience in 
            RESTful APIs, authentication (JWT), database management (PostgreSQL, MySQL), and asynchronous task 
            processing with Celery.
          </p>
          
          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Learning Goals</h3>
            <p className="text-muted-foreground">
              Currently learning advanced backend concepts, microservices architecture, and performance optimization to become a professional Backend Developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
