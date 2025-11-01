const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "TypeScript"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "Spring MVC", "REST APIs", "Microservices"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "Hibernate", "JPA"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Postman", "Maven", "IntelliJ IDEA"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="glass-card p-8 hover:scale-105 transition-transform animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">
                    {category.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-medium hover:border-primary/50 transition-colors"
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
