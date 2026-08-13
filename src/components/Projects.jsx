import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A professional personal portfolio website developed to showcase my skills, projects, education, certifications, and contact information.",
      technologies: "React.js, JavaScript, HTML, CSS",
      github: "https://github.com/KeshanyaRamesh/my-portfolio",
    },

    {
      title: "Internship Project",
      description:
        "A full-stack application developed as an internship project, featuring frontend and backend components and practical software development concepts.",
      technologies: "Frontend, Backend, Database",
      github: "https://github.com/KeshanyaRamesh/internshipProject",
    },

    {
      title: "Hospital Management System",
      description:
        "A hospital management application developed to manage hospital-related information and support the organization of healthcare services.",
      technologies: "Web Development, Database",
      github: "https://github.com/KeshanyaRamesh/Hospital_management",
    },

    {
      title: "Todo App",
      description:
        "A responsive task management application that allows users to add, edit, delete, and manage their daily tasks.",
      technologies: "React.js, JavaScript, Tailwind CSS",
      github: "https://github.com/KeshanyaRamesh/todo-app",
    },

    {
      title: "Weather App",
      description:
        "A weather application that allows users to search for cities and view current weather information using real-time API data.",
      technologies: "React.js, JavaScript, Weather API, CSS",
      github: "https://github.com/KeshanyaRamesh/weatherApp",
    },

    {
      title: "Expense Tracker",
      description:
        "A personal finance application for tracking income and expenses, managing transactions, calculating balances, and storing data locally.",
      technologies: "React.js, JavaScript, Tailwind CSS, Local Storage",
      github: "https://github.com/KeshanyaRamesh/Expense_tracker",
    },

    {
      title: "Movie Search App",
      description:
        "A movie discovery application that allows users to search for movies and explore movie information through a responsive interface.",
      technologies: "React.js, JavaScript, TMDB API, CSS",
      github: "https://github.com/KeshanyaRamesh/Movie-Search-App",
    },

    {
      title: "Recipe Finder",
      description:
        "A recipe search application that allows users to discover recipes and explore cooking ideas through a responsive interface.",
      technologies: "React.js, JavaScript, Recipe API, CSS",
      github: "https://github.com/KeshanyaRamesh/Recipe_finder",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <p className="projects-intro">
        Here are some of the projects I have developed as part of my
        academic learning, personal development, and practical experience.
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p className="technologies">
              <strong>Technologies:</strong> {project.technologies}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;