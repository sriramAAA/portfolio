import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const timeline = [
    {
      type: "education",
      title: "Master of Computer Applications (MCA)",
      organization: "Alagappa University",
      period: "Present",
      description: "Pursuing advanced studies in computer science with focus on software engineering and AI technologies.",
      icon: GraduationCap,
    },

    {
      type: "education",
      title: "Bachelor of Computer Applications (BCA)",
      organization: "Thiruvalluvar University",
      period: "complete",
      description: "Pursuing advanced studies in computer science with focus on software engineering and AI technologies.",
      icon: GraduationCap,
    },

    // {
    //   type: "work",
    //   title: "Java Full Stack Developer",
    //   organization: "Tech Startup",
    //   period: "Current",
    //   description: "Developing and maintaining enterprise web applications using Java, Spring Boot, and React. Building scalable solutions for real-world problems.",
    //   icon: Briefcase,
    // },

  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 relative animate-fade-in-up hover:scale-105 transition-transform"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.type === "education"
                      ? "bg-gradient-to-br from-primary to-blue-600"
                      : "bg-gradient-to-br from-secondary to-purple-600"
                    }`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-3">{item.organization}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center glass-card p-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-bold mb-4">Career Goal</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advancing in <span className="text-primary font-semibold">Java Full Stack</span> developer roles,
            building enterprise-level applications with <span className="text-secondary font-semibold">Spring Boot</span>,
            microservices architecture, and cutting-edge technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
