import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  //programming languages
  { name: "Java", category: "programming languages" },
  { name: "JavaScript", category: "programming languages" },
  { name: "Python", category: "programming languages" },

  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Reactjs", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },

  // Backend
  { name: "Node.js",  category: "backend" },
  { name: "Express",  category: "backend" },
  { name: "MongoDB",  category: "backend" },

  // Tools
  { name: "Git/GitHub",  category: "tools" },
  { name: "VS Code",  category: "tools" },
  { name: "TRAE",  category: "tools" },

  { name: "ChatGpt", category: "AI Tools" },
  { name: "Perplexity AI", category: "AI Tools" },
  { name: "Lovable AI", category: "AI Tools" },
  { name: "Rocket AI", category: "AI Tools" },
  { name: "Replit AI", category: "AI Tools" },
  { name: "Trae AI", category: "AI Tools" },
  { name: "Notion AI", category: "AI Tools" },
  { name: "AI PPT Maker", category: "AI Tools" },
];

const categories = ["all","programming languages","frontend", "backend", "tools","AI Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-center mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
