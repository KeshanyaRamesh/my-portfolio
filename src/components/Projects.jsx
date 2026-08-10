import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A professional personal portfolio website built to showcase my skills, projects, education, and contact information.",
      technologies: "React.js, JavaScript, CSS",
      github: "https://github.com/KeshanyaRamesh/my-portfolio",
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
        "A weather dashboard where users can search for cities and view current weather information and forecasts with a beautiful responsive interface.",
      technologies: "React.js, JavaScript, Weather API, CSS",
      github: "https://github.com/KeshanyaRamesh/weatherApp",
    },

    {
      title: "Expense Tracker",
      description:
        "A personal finance application for tracking income and expenses, managing categories, viewing balances, and storing transactions locally.",
      technologies: "React.js, JavaScript, Tailwind CSS, Local Storage",
      github: "https://github.com/KeshanyaRamesh/Expense_tracker",
    },

    {
      title: "Movie Search App",
      description:
        "A movie discovery application that allows users to search for movies, view movie information, and explore movies through a responsive interface.",
      technologies: "React.js, JavaScript, TMDB API, CSS",
      github: "https://github.com/KeshanyaRamesh/Movie-Search-App",
    },

    {
      title: "Recipe Finder",
      description:
        "A recipe search application that allows users to discover recipes and explore cooking ideas through a simple and responsive interface.",
      technologies: "React.js, JavaScript, API, CSS",
      github: "https://github.com/KeshanyaRamesh/Recipe_finder",
    },
  ];

  return (
    <section id="projects" className="projects">

      <h2>My Projects</h2>

      <p className="projects-intro">
        Here are some of the projects I have built while learning
        and developing my skills in web development.
      </p>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p>
              {project.description}
            </p>

            <p className="technologies">
              <strong>Technologies:</strong>{" "}
              {project.technologies}
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