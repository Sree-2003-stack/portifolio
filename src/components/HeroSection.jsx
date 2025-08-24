import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center z-10">
        {/* Photo on the left */}
        <div className="mb-8 md:mb-0 md:mr-12 flex-shrink-0">
          <img
            src="/profile.jpg"   // <-- use direct path from public folder
            alt="Chaitanya Kumar"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary"
          />
        </div>

        {/* Text content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Chaitanya
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Kumar
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
            Hi, I’m a results-oriented software engineer with strong expertise in{" "}
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Python, Java, JavaScript, React.js, Node.js,
            </span>{" "}
            and REST APIs. I have a solid foundation in data structures, algorithms, OOP, and database management systems, backed by hands-on experience building scalable web applications, real-time solutions, and data visualization tools.
            <br />
            I thrive in agile environments, where I enjoy collaborating with teams to deliver clean, efficient, and impactful software. With a passion for solving complex problems and a commitment to continuous learning, I’m always eager to adapt to emerging technologies and transform ideas into practical, high-quality solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
