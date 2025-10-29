import { Code2, Database, Wrench } from "lucide-react";

const techCategories = [
  {
    icon: Code2,
    title: "Backend",
    items: ["Python (Django)", "RESTful APIs", "JWT Authentication", "Celery"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["PostgreSQL", "MySQL", "SQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "Linux", "Postman", "VS Code"],
  },
];

const TechStack = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Tech Stack
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Technologies and tools I work with to build modern web applications
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {category.title}
                </h3>
                
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground text-sm flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
