const projects = [
  {
    title: "Project Zero",
    desc: "Full stack social media platform with secure authentication, post creation, likes and REST APIs built using MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://project-zero-beryl.vercel.app/",
    github: "https://github.com/mohitraj0901/Project-Zero.git"
  },
  {
    title: "MealConnect",
    desc: "Food donation platform connecting donors with people in need.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://mealconnectproject.vercel.app",
    github: "https://github.com/InternLay-HG/Code_smaShers.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">

      <h2 className="text-3xl text-center font-bold text-cyan-400 mb-12">
        Projects
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="border border-gray-700 p-6 rounded-xl hover:scale-105 hover:border-cyan-400 transition"
          >

            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.desc}
            </p>

            {/* Tech Stack Badges */}

            <div className="flex gap-2 flex-wrap mt-3 text-sm mb-5">

              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-800 px-2 py-1 rounded hover:bg-cyan-400 hover:text-black transition"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Buttons */}

            <div className="flex gap-3">

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400 text-black px-4 py-2 rounded hover:bg-cyan-500 transition"
              >
                Live
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-black transition"
              >
                GitHub
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;