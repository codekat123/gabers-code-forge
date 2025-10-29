import { ExternalLink, Github, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce API",
    description: "Django REST Framework backend with product, order, and payment flows. Background workers for email and invoice generation.",
    tech: ["Django", "REST API", "PostgreSQL", "JWT"],
    github: "https://github.com/codekat123/E-commerce-api",
    demo: "https://www.linkedin.com/posts/ahmed-gaber-509b88359_backend-ecommerce-python-activity-7351706784039927808-3WhC",
  },
  {
    title: "Care-Mate",
    description: "A healthcare management platform that connects patients with doctors, allowing appointment scheduling, medical record tracking, and secure communication.",
    tech: ["Django", "Healthcare", "REST API"],
    github: "https://github.com/codekat123/care-mate",
    demo: "https://www.linkedin.com/posts/ahmed-gaber-509b88359_recently-completed-the-development-of-caremate-activity-7379501433680986112-OGfe",
  },
  {
    title: "Social Media App",
    description: "A social networking platform that lets users share posts, follow others, and interact through likes and comments.",
    tech: ["Django", "Python", "Social Media"],
    github: "https://github.com/codekat123/social_media_application",
    demo: "https://www.linkedin.com/posts/ahmed-gaber-509b88359_webdevelopment-python-sideproject-activity-7370822046609465365-SECq",
  },
  {
    title: "Library System",
    description: "A book management dashboard for tracking sales, rentals, and profits. Features interactive charts, category filtering, and detailed book analytics.",
    tech: ["Django", "Dashboard", "Analytics"],
    github: "https://github.com/codekat123/library_system",
    demo: "https://www.linkedin.com/posts/ahmed-gaber-509b88359_hey-everyone-i-just-finished-working-activity-7347612955414323200-u6Hj",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">
            Showcase of my work in backend development and full-stack applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-primary/40 hover:shadow-elevated hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-5 text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-7 leading-relaxed text-base">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-xl border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/20 rounded-xl font-medium"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="flex-1 border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 rounded-xl font-medium"
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Monitor className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
