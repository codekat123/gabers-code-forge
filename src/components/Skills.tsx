import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skillCategories = [
  {
    title: "Backend",
    skills: ["Python", "Django", "Django REST Framework", "Celery", "Redis"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"]
  },
  {
    title: "Real-Time & APIs",
    skills: ["Django Channels", "WebSockets", "REST API Design", "JWT Auth"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "Linux", "Swagger/OpenAPI", "Postman"]
  }
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="section-spacing border-t border-border" ref={ref}>
      <div className={`section-container transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 text-sm bg-secondary text-secondary-foreground rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
