import "./Projects.css";

function Projects() {

  const projects = [
    {
  title: "Smart Career and Internship Matcher",

  description:
    "An AI-based platform that helps university students find suitable internships and career opportunities.",

  technologies:
    "React, Node.js, MySQL, JWT",

  link:
    "https://github.com/group_project/smart-career-matcher"
},

    {
      title: "E-Commerce Website",
      description:
        "An online shopping platform where users can browse products and manage orders.",
      technologies:
        "React, MongoDB, Spring Boot",
        link:
        "https://github.com/FathimaAz-ha/FoodieDrop"
    },

    {
      title: "Personal Portfolio Website",
      description:
        "A responsive portfolio website to showcase my skills, projects, and experience.",
      technologies:
        "React, JavaScript, CSS",
         link:
        ""
    }
  ];


  return (
   <section id="projects" className="projects">

      <h2>
        My Projects
      </h2>


      <div className="project-container">

        {
          projects.map((project, index) => (

            <div 
              className="project-card"
              key={index}
            >

              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>


              <span>
                {project.technologies}
              </span>


            <a 
 href={project.link}
 target="_blank"
>

<button>
 View Project
</button>

</a>
            </div>

          ))
        }

      </div>

    </section>
  );
}


export default Projects;