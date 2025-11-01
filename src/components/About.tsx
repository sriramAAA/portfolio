import { Code2, Database, Sparkles, Server } from "lucide-react";

const About = () => {
  const techStack = [
    { icon: Code2, label: "React.js", color: "text-blue-400" },
    { icon: Server, label: "Spring Boot", color: "text-green-400" },
    { icon: Server, label: "Java", color: "text-red-500" },
    { icon: Database, label: "MySQL", color: "text-blue-500" },
    { icon: Database, label: "Hibernate", color: "text-amber-500" },
    { icon: Sparkles, label: "AI Tools", color: "text-purple-400" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm an <span className="text-primary font-semibold">MCA student</span> at Alagappa University and a passionate full-stack developer currently working at a startup. 
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                I specialize in building <span className="text-secondary font-semibold">intelligent web applications</span> that combine the power of modern frameworks like React and Spring Boot with cutting-edge AI technologies.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                My goal is to advance in Java Full Stack development roles where I can create scalable, efficient enterprise solutions that make a real impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {techStack.map((tech, index) => (
              <div
                key={tech.label}
                className="glass-card p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <tech.icon className={`w-10 h-10 ${tech.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium text-center">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
