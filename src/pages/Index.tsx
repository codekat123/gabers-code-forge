import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import EngineeringPractices from "@/components/EngineeringPractices";
import Skills from "@/components/Skills";
import WhyHireMe from "@/components/WhyHireMe";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Projects />
      <EngineeringPractices />
      <Skills />
      <WhyHireMe />
      <Contact />
      
      <footer className="py-8 px-6 border-t border-border">
        <div className="section-container text-center text-muted-foreground text-sm">
          <p>© 2025 Ahmed Gaber</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
