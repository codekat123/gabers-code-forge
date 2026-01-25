import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    title: "E-commerce REST API",
    description: "Complete backend for an online marketplace with products, cart, orders, coupons, and merchant analytics.",
    tech: ["Django 5", "DRF", "PostgreSQL", "Redis", "Celery", "JWT"],
    built: [
      "RESTful APIs for products, categories, cart, orders, and coupons",
      "JWT authentication with OTP signup and email verification",
      "Redis-backed cart with caching and rate limiting",
      "Celery for background jobs (emails, order processing)",
      "Merchant dashboard with sales analytics",
      "AI-powered product recommendations"
    ],
    matters: "Production-ready architecture handling real e-commerce flows: user auth, inventory, payments, and async processing.",
    github: "https://github.com/codekat123/E-commerce",
  },
  {
    title: "CareMate - Healthcare Platform",
    description: "Healthcare system with appointments, patient/doctor dashboards, and real-time communication.",
    tech: ["Django 5", "DRF", "Channels", "Celery", "Redis", "AI API"],
    built: [
      "Patient profiles and doctor dashboards",
      "Appointment scheduling with availability management",
      "Real-time chat between patients and doctors",
      "AI assistant via Google Generative AI",
      "Email verification and JWT authentication",
      "Swagger/Redoc API documentation"
    ],
    matters: "Demonstrates handling of sensitive data, scheduling systems, and real-time features in a healthcare context.",
    github: "https://github.com/codekat123/care-mate",
  },
  {
    title: "Real-Time Chat Application",
    description: "WhatsApp-style messaging with private chats, groups, and read receipts.",
    tech: ["Django", "DRF", "Channels", "WebSockets", "PostgreSQL", "Docker"],
    built: [
      "Real-time messaging with Django Channels and WebSockets",
      "Private chats and group conversations",
      "Read receipts and typing indicators",
      "OTP signup with JWT authentication",
      "Admin features for group management",
      "Dockerized for deployment"
    ],
    matters: "WebSocket implementation at scale—handling persistent connections, message delivery, and presence features.",
    github: "https://github.com/codekat123/WhatsApp-clone",
  },
  {
    title: "Freelance Marketplace Backend",
    description: "Khamsat-style platform with services, orders, wallet system, and live chat.",
    tech: ["Django 5.2", "DRF", "Channels", "Celery", "Redis", "PostgreSQL"],
    built: [
      "Service listings with categories and search",
      "Full order lifecycle with status tracking",
      "Wallet system with signals for transactions",
      "Ratings and reviews for completed orders",
      "Real-time chat between buyers and sellers",
      "Scheduled tasks with Celery Beat"
    ],
    matters: "Complex business logic: multi-party transactions, escrow-style payments, and automated workflows.",
    github: "https://github.com/codekat123/clone-khamsat",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="section-spacing border-t border-border" ref={ref}>
      <div className={`section-container transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
          Projects
        </h2>
        <p className="text-2xl md:text-3xl font-semibold text-foreground mb-12 max-w-2xl">
          Backend systems built for real-world use cases
        </p>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <article
              key={index}
              className="border-l-2 border-border pl-6 md:pl-8 hover:border-primary transition-colors duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                  What I Built
                </h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.built.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground text-sm flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                  Why It Matters
                </h4>
                <p className="text-muted-foreground text-sm">
                  {project.matters}
                </p>
              </div>
              
              <Button
                asChild
                variant="outline"
                className="border-border text-foreground hover:bg-secondary hover:border-primary"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
