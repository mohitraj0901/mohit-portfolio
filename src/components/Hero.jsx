import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white text-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm uppercase tracking-widest text-cyan-400 mb-3">
          B.Tech CSE (AI & Data Science) @ IIIT Ranchi &apos;27
        </p>

        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I&apos;m <span className="text-cyan-400">Mohit Raj</span>
        </h1>

        <p className="text-xl mt-4 text-gray-300 font-medium">
          AI/ML Researcher | Agentic AI &amp; Reinforcement Learning | Full-Stack Developer
        </p>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Ex-Research Intern at IIT Kharagpur building multi-agent reinforcement learning systems,
          autonomous LLM agents, and scalable full-stack AI applications.
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition"
          >
            View Projects
          </a>

          <a
            href="/Resume.pdf"
            download
            className="px-6 py-3 border border-cyan-400 hover:bg-cyan-400 hover:text-black rounded-lg font-medium transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
