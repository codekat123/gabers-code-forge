import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce API",
    description: "Full-featured e-commerce backend API built with Django REST Framework. Includes product management, user authentication, cart functionality, and order processing.",
    tech: ["Django", "REST Framework", "PostgreSQL", "JWT"],
    github: "https://github.com/codekat123",
  },
  {
    title: "Instagram Clone",
    description: "Social media application clone with Django. Features include user profiles, post creation, likes, comments, and follow/unfollow functionality.",
    tech: ["Django", "Python", "MySQL", "Authentication"],
    github: "https://github.com/codekat123",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all group"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
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
              
              <Button
                asChild
                variant="outline"
                className="w-full border-border hover:bg-card hover:border-primary group/btn transition-all"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                  <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
