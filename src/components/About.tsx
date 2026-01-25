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
            Backend developer specializing in{' '}
            <span className="text-primary font-semibold">Python</span>,{' '}
            <span className="text-primary font-semibold">Django</span>, and{' '}
            <span className="text-primary font-semibold">Django REST Framework</span>.
            Experienced in building RESTful APIs, authentication systems, asynchronous tasks, caching, and real-time features.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            Strong understanding of relational databases and clean backend architecture. Proficient with{' '}
            <span className="text-primary font-semibold">Django Channels (WebSockets)</span>,{' '}
            <span className="text-primary font-semibold">Celery & Redis</span> for async tasks and caching,{' '}
            <span className="text-primary font-semibold">JWT Authentication</span>, and{' '}
            <span className="text-primary font-semibold">Docker</span> for containerization.
          </p>
          
          <div className="mt-10 pt-8 border-t border-border/50">
            <h3 className="text-2xl font-semibold mb-5 text-foreground">Experience</h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-foreground">Team Member – DIGITOPIA (AI & Software Competition)</h4>
              <p className="text-sm text-primary mb-2">MCIT – Ministry of Communications & Information Technology</p>
              <p className="text-muted-foreground leading-relaxed">
                Collaborated with cross-functional team members in a competitive tech environment. Demonstrated teamwork, adaptability, and effective communication while working under pressure to meet deadlines.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/50">
            <h3 className="text-2xl font-semibold mb-5 text-foreground">Education</h3>
            <p className="text-lg text-foreground">Bachelor's in Management Information Systems</p>
            <p className="text-muted-foreground">Mansoura Higher Institute</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
