import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Doctor Appointment Booking",
    description: "I led a team of four in developing a secure appointment booking platform, which included role-based access control and integrated payment processing. As the team lead, I guided the project using Agile methodology with continuous feedback and iterative improvements. My primary responsibility was backend development, collaborating closely with another backend developer to ensure scalable APIs, data security, and smooth system performance. The project also included building an intuitive admin dashboard for doctors, patients, and appointment management.",
    image: "/projects/doctor.png",
    tags: ["ReactJS", "TailwindCSS", "MongoDB"," ExpressJs", "NodeJs" ],
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Chatting Application",
    description:
      "Built a real-time messaging platform with WebSocket integration, enabling dynamic chatrooms and instant communication. Implemented secure authentication to ensure safe and seamless user interactions.",
    image: "/projects/chat.jpg",
     tags: ["ReactJS", "TailwindCSS", "MongoDB"," ExpressJs", "NodeJs" ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "Designed and developed my personal portfolio website to showcase projects, skills, and experience with a clean, responsive, and user-friendly design.",
    image: "/projects/port.png",
    tags: ["ReactJS", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Resume Matcher With AI",
    description: "Built a resume parsing and matching system with the help of ChatGPT which is capable of extracting key information from PDF/DOCX files, identifying relevant skills, and ranking resumes based on job requirements using NLP and text analysis.",
    image: "/projects/job-matching.png",
    tags: ["Python", "Natural Language processing(NLP)", "Steamlit","Chatgpt"],
    githubUrl: "https://github.com/Sree-2003-stack/resume_matcher_app",
    demoUrl: 'https://resumematcherapp-p3xyienbhhxxqvzncdrhfj.streamlit.app/',
  },
  {
    id: 5,
    title: "Stock Forecasting with AI",
    description: "Built a Streamlit web app using Python, yFinance, and Prophet to visualize historical stock data and forecast future prices with interactive Matplotlib/Plotly charts.",
    image: "/projects/stock_fore.jpeg",
    tags: ["Python", "Streamlit", "Facebook Prophet", "yFinance", "pandas", "Matplotlib / Plotly"],
    githubUrl: "https://github.com/Sree-2003-stack/stock_forecasting_app",
    demoUrl:'https://stockforecastingapp-2uwtcu49bijrjx7n7vj5aq.streamlit.app/',
  },
  {
    id: 6,
    title: "Stock Visualiser with AI",
    description: "Created a Python-based Streamlit app that pulls stock data using yFinance and visualizes it through candlestick charts coupled with interactive moving average overlays.",
    image: "/projects/stock_vis.webp",
    tags: ["Python", "Streamlit", "yFinance", "Candlestick charting","Moving Average calculations"],
    githubUrl: "https://github.com/Sree-2003-stack/stock-visualizor",
    demoUrl:'https://stock-visualizor-ags5thsjdguzjbpu8mjdr3.streamlit.app/',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Sree-2003-stack"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
