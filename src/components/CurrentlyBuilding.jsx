import { FaRobot, FaFlask, FaLayerGroup } from "react-icons/fa";

const items = [
  {
    icon: <FaRobot />,
    title: "Autonomous AI Agents",
    desc: "Designing code-executing multi-tool agents (smolagents, LangGraph, LiteLLM) evaluated on reasoning benchmarks like GAIA."
  },
  {
    icon: <FaFlask />,
    title: "Reinforcement Learning & LLM Fine-Tuning",
    desc: "Exploring Multi-Agent RL (MATD3) optimization and parameter-efficient fine-tuning (LoRA/QLoRA) for domain tasks."
  },
  {
    icon: <FaLayerGroup />,
    title: "Full-Stack AI Systems",
    desc: "Shipping end-to-end web platforms combining React, Node.js, and MongoDB with structured LLM pipelines."
  }
];

const CurrentlyBuilding = () => {
  return (
    <section className="py-20 bg-gray-950 text-white text-center px-4">
      <h2 className="text-3xl font-bold text-cyan-400 mb-12">
        Research &amp; Engineering Focus
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-800 bg-black/40 p-6 rounded-xl hover:scale-105 hover:border-cyan-400 transition"
          >
            <div className="text-cyan-400 text-3xl mb-4 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
