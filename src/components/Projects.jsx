const projects = [
  {
    title: "Project Zero",
    desc: "Full stack social media application with authentication, CRUD posts and REST APIs.",
  },
  {
    title: "MealConnect",
    desc: "Food donation platform connecting donors with people in need.",
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
            className="border border-gray-700 p-6 rounded-xl hover:scale-105 transition"
          >

            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.desc}
            </p>

            <div className="flex gap-3">
              <button className="bg-cyan-400 text-black px-4 py-2 rounded">
                Live
              </button>

              <button className="border border-cyan-400 px-4 py-2 rounded">
                GitHub
              </button>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;