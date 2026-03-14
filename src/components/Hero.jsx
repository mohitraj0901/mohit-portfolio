import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white text-center">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-cyan-400">Mohit Raj</span>
        </h1>

        <p className="mt-4 text-xl text-gray-400">
          Full Stack Developer | MERN Stack
        </p>

      </motion.div>

    </section>
  );
};

export default Hero;