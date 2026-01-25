import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const reasons = [
  {
    title: "Backend-First Mindset",
    description: "I think in systems: databases, APIs, authentication, async processing. Frontend is secondary—my focus is on what powers the product."
  },
  {
    title: "Real Systems, Not Tutorials",
    description: "My projects handle payments, real-time chat, background jobs, and user management. They're designed for production, not just portfolio display."
  },
  {
    title: "Clean Architecture",
    description: "I write code that other developers can read and maintain. Modular apps, clear separation of concerns, and documented APIs."
  },
  {
    title: "Ready to Contribute",
    description: "Looking for junior or intern backend roles where I can learn from experienced engineers while adding value from day one."
  }
];

const WhyHireMe = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="why-hire-me" className="section-spacing border-t border-border" ref={ref}>
      <div className={`section-container transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
          Why Hire Me
        </h2>
        <p className="text-2xl md:text-3xl font-semibold text-foreground mb-12 max-w-2xl">
          What I bring to your team
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
