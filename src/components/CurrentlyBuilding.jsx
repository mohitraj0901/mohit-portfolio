import { FaCode, FaBrain, FaRocket } from "react-icons/fa";

const items = [
  {
    icon: <FaCode />,
    title: "Full Stack Development",
    desc: "Building scalable MERN stack applications with REST APIs and authentication."
  },
  {
    icon: <FaBrain />,
    title: "Data Structures & Algorithms",
    desc: "Practicing LeetCode regularly and improving contest rating."
  },
  {
    icon: <FaRocket />,
    title: "Internship Preparation",
    desc: "Preparing for Software Engineering internships for Summer 2026."
  }
];

const CurrentlyBuilding = () => {
  return (
    <section className="py-20 bg-gray-950 text-white text-center">

      <h2 className="text-3xl font-bold text-cyan-400 mb-12">
        Currently Building
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-700 p-6 rounded-xl hover:scale-105 transition"
          >

            <div className="text-cyan-400 text-3xl mb-4 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default CurrentlyBuilding;