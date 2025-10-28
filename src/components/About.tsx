const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg hover:shadow-primary/10 transition-all">
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            I'm a dedicated web developer skilled in building backend systems and APIs using 
            <span className="text-primary font-semibold"> Django</span> and 
            <span className="text-primary font-semibold"> Laravel</span>. 
            I have experience working with RESTful APIs, authentication (JWT), and database 
            management (PostgreSQL, MySQL).
          </p>
          
          <p className="text-lg text-foreground/90 leading-relaxed">
            I'm passionate about <span className="text-primary font-semibold">clean code</span>, 
            <span className="text-primary font-semibold"> performance</span>, and creating 
            projects that solve real problems.
          </p>
          
          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="text-xl font-semibold mb-4 text-primary">Currently Learning</h3>
            <p className="text-foreground/80">
              Advanced backend concepts, clean architecture, and modern web design principles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
