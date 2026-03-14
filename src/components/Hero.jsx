import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-black text-white text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-cyan-400">Mohit Raj</span>
        </h1>

        <p className="text-xl mt-4 text-gray-300">
          Full Stack Developer | MERN Stack
        </p>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          I build scalable web applications using React, Node.js, Express and
          MongoDB.
        </p>

        <div className="mt-6 flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium"
          >
            View Projects
          </a>

          <a
            href="/Resume.pdf"
            download
            className="px-6 py-3 border border-cyan-400 hover:bg-cyan-400 hover:text-black rounded-lg"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;