import "./Skills.css";

function Skills() {

  const skills = [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Git & GitHub"
  ];


  return (
    <section id="skills" className="skills">

      <h2>
        My Skills
      </h2>


      <div className="skills-container">

        {
          skills.map((skill, index) => (
            
            <div 
              className="skill-card"
              key={index}
            >

              {skill}

            </div>

          ))
        }

      </div>

    </section>
  );
}

export default Skills;