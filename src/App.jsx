function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-cyan-400">Mohit Raj</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-400">
          Frontend Developer | React.js
        </p>
        <p className="mt-4 max-w-xl text-gray-500">
          I build modern, responsive and real-world web applications.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="bg-cyan-400 text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
  href="/Resume.pdf"
  target="_blank"
  className="ml-4 px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition"
>
  Download Resume
</a>
        </div>
      </section>
      

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-zinc-950">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-cyan-400 mb-6">
      About Me
    </h2>

    <p className="text-gray-400 leading-relaxed">
      I'm a Computer Science student at IIIT Ranchi (Batch 2027) 
      passionate about building modern, scalable and user-friendly web applications.
      I specialize in React.js and Tailwind CSS and enjoy turning ideas into
      interactive digital experiences. Currently open to Summer 2026 internships.
    </p>
  </div>
</section>

      {/* PROJECTS */}
<section id="projects" className="py-20 px-6 bg-zinc-900">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-cyan-400 mb-10">
      Projects
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* MealConnect */}
      <div className="bg-black p-6 rounded-xl border border-zinc-800 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
        <h3 className="text-xl font-semibold">MealConnect</h3>
        <p className="mt-3 text-gray-400">
          A platform connecting surplus food providers with people in need.
          Focused on clean UI and real-world usability.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          React | Tailwind | REST API
        </p>
        <p className="mt-2 text-gray-500 text-sm">
  Implemented responsive UI and dynamic form handling to improve user experience.
</p>

        <div className="mt-4 flex gap-4">
  <a
    href="https://mealconnectproject.vercel.app/"
    target="_blank"
    className="px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition"
  >
    Live
  </a>

  <a
    href="https://github.com/mohitraj0901/MealConnectDeployment.git"
    target="_blank"
    className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition"
  >
    GitHub
  </a>
</div>
      </div>

      {/* Project Zero */}
      <div className="bg-black p-6 rounded-xl border border-zinc-800 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
        <h3 className="text-xl font-semibold">Project Zero</h3>
        <p className="mt-3 text-gray-400">
          A modern social interaction web application with responsive design
          and interactive components.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          React | JavaScript | Tailwind
        </p>
        <p className="mt-2 text-gray-500 text-sm">
  Built reusable components and optimized UI for seamless interaction.
</p>

        <div className="mt-4 flex gap-4">
  <a
    href="https://project-zero-beryl.vercel.app/"
    target="_blank"
    className="px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition"
  >
    Live
  </a>

  <a
    href="https://github.com/mohitraj0901/Project-Zero.git"
    target="_blank"
    className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition"
  >
    GitHub
  </a>
</div>
      </div>

    </div>
  </div>
</section>
<section id="contact" className="py-20 px-6 bg-zinc-950">
  <div className="max-w-4xl mx-auto text-center">
    
    <h2 className="text-3xl font-bold text-cyan-400 mb-6">
      Contact
    </h2>

    <p className="text-gray-400 mb-8">
      I'm currently open to Summer 2026 internship opportunities.
      Feel free to reach out — I'd love to connect!
    </p>

    <div className="flex flex-wrap justify-center gap-4">

      {/* Email */}
      <a
        href="mailto:mohitraj0801@gmail.com"
        className="px-6 py-3 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition"
      >
        Email Me
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/mohitraj0901"
        target="_blank"
        className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition"
      >
        GitHub
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/mohitraj0107"
        target="_blank"
        className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition"
      >
        LinkedIn
      </a>

    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-600 text-sm">
        © 2026 Mohit Raj
      </footer>

    </div>
  );
}

export default App;