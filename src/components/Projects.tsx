import { ExternalLink, Github, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce API",
    description: "Django REST Framework backend with product, order, and payment flows. Background workers for email and invoice generation.",
    tech: ["Django", "REST API", "PostgreSQL", "JWT"],
    github: "https://github.com/codekat123",
    demo: "#",
  },
  {
    title: "Care-Mate",
    description: "A healthcare management platform that connects patients with doctors, allowing appointment scheduling, medical record tracking, and secure communication.",
    tech: ["Django", "Healthcare", "REST API"],
    github: "https://github.com/codekat123",
    demo: "#",
  },
  {
    title: "Social Media App",
    description: "A social networking platform that lets users share posts, follow others, and interact through likes and comments.",
    tech: ["Django", "Python", "Social Media"],
    github: "https://github.com/codekat123",
    demo: "#",
  },
  {
    title: "Library System",
    description: "A book management dashboard for tracking sales, rentals, and profits. Features interactive charts, category filtering, and detailed book analytics.",
    tech: ["Django", "Dashboard", "Analytics"],
    github: "https://github.com/codekat123",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Showcase of my work in backend development and full-stack applications
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all group"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button
                  asChild
                  size="default"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
