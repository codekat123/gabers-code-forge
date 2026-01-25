import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const practices = [
  {
    title: "Modular Django Apps",
    description: "Organized codebase with separate apps for users, products, orders—each with its own models, views, and serializers."
  },
  {
    title: "Custom User Models",
    description: "Extended user models with roles (Student, Instructor, Merchant) and profile data from day one."
  },
  {
    title: "JWT Authentication",
    description: "Token-based auth with SimpleJWT, OTP verification, email confirmation, and secure session handling."
  },
  {
    title: "Real-Time with WebSockets",
    description: "Django Channels for live chat, notifications, and presence features—not just HTTP polling."
  },
  {
    title: "Async Tasks with Celery",
    description: "Background jobs for emails, order processing, and scheduled tasks. Redis as broker and cache."
  },
  {
    title: "API Documentation",
    description: "Swagger and Redoc via drf-spectacular. Every endpoint documented with request/response schemas."
  },
  {
    title: "Docker & Environment Configs",
    description: "Containerized apps with docker-compose. Environment-based settings for dev, staging, and production."
  },
  {
    title: "Clean Architecture",
    description: "Separation of concerns: serializers for validation, services for business logic, views for HTTP handling."
  }
];

const EngineeringPractices = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="practices" className="section-spacing border-t border-border" ref={ref}>
      <div className={`section-container transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
          Engineering Practices
        </h2>
        <p className="text-2xl md:text-3xl font-semibold text-foreground mb-12 max-w-2xl">
          How I build maintainable backend systems
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {practice.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {practice.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringPractices;
