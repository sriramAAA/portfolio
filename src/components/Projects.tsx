import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ecomm from "./image/e-commerce.png";
import bmi_calculate from "./image/bmi-calculate.png";
import wallet_loan from "./image/wallet-loan.png";



const Projects = () => {
  const projects = [
    {
      title: "Laptop E-Commerce Site",
      description:
        "A responsive laptop e-commerce website built using React, Bootstrap, HTML, and CSS. It includes product listings, search and filter options, and an interactive cart interface.",
      tech: ["React", "Bootstrap", "HTML", "CSS"],
      github: "#",
      demo: "https://laptop-e-coms.netlify.app/",
      image: ecomm, // ✅ actual image
    },
    {
      title: "BMI Calculator App",
      description:
        "A simple and responsive BMI Calculator built with React. It allows users to calculate their Body Mass Index with instant feedback on their health status using clean UI and smooth interactions.",
      tech: ["React", "HTML", "CSS"],
      github: "#",
      demo: "https://bmi-calculate-react.netlify.app/",
      image: bmi_calculate, // ✅ make sure you imported this image at the top
    },

    {
      title: "AI-Integrated App",
      description:
        "Intelligent web application leveraging AI for natural language processing, sentiment analysis, and predictive features.",
      tech: ["Java", "Spring Boot", "React", "AI/ML"],
      github: "#",
      demo: "https://wallet-loan.netlify.app/",
      // fallback to ecomm image — replace with a specific image file if you add one to src/components/image
      image: wallet_loan,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development and AI integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={project.title}
              className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in-up border-2"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* ✅ IMAGE FIXED */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-50" />
              </div>

              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-secondary" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
