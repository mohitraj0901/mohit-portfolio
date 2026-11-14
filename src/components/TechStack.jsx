import { FaPython, FaReact, FaNodeJs, FaJava, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiPytorch, SiHuggingface, SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: <FaPython />, name: "Python" },
  { icon: <SiPytorch />, name: "PyTorch" },
  { icon: <SiHuggingface />, name: "Hugging Face" },
  { icon: <FaJava />, name: "Java (DSA)" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaGitAlt />, name: "Git & GitHub" }
];

const TechStack = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white text-center px-4">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">
        Tech Stack
      </h2>
      <p className="text-gray-400 mb-10">
        Core technologies I use across AI/ML research, agentic workflows, and full-stack engineering
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-gray-800 bg-gray-950 p-6 rounded-xl hover:scale-105 hover:border-cyan-400 transition"
          >
            <div className="text-4xl text-cyan-400">
              {skill.icon}
            </div>

            <p className="mt-3 text-gray-300 font-medium">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
