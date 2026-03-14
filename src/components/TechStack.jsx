import { FaReact, FaNodeJs, FaJava, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiMysql } from "react-icons/si";

const skills = [
  { icon: <FaJava />, name: "Java" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaGithub />, name: "GitHub" }
];

const TechStack = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white text-center">

      <h2 className="text-3xl font-bold text-cyan-400 mb-10">
        Tech Stack
      </h2>
      <p className="text-gray-400 mb-10">
  Technologies I use to build scalable web applications
</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-gray-700 p-6 rounded-xl hover:scale-105 transition"
          >
            <div className="text-4xl text-cyan-400">
              {skill.icon}
            </div>

            <p className="mt-2 text-gray-300">
              {skill.name}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default TechStack;