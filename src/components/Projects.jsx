const projects = [
  {
    title: "Autonomous Multi-Tool AI Agent (GAIA Benchmark)",
    desc: "Code-executing CodeAgent built with smolagents, LiteLLM, and Gemini featuring custom MediaWiki, web search, file ingestion, and multimodal tools. Scored 35% (7/20) on the Hugging Face Unit 4 GAIA benchmark to earn the Certificate of Excellence.",
    tech: ["Python", "smolagents", "LiteLLM", "Gemini API", "GAIA Benchmark"],
    live: "https://huggingface.co/spaces/mraj0107/Final_Assignment_Template",
    liveLabel: "HF Space",
    github: "https://github.com/mohitraj0901/gaia-autonomous-code-agent"
  },
  {
    title: "Multi-Agent Research & Content Pipeline",
    desc: "Supervisor-routed multi-agent LLM system (Researcher, Creator, Fact Checker, Reviewer) built with LangGraph and Tavily web search to extract claims, verify evidence, and prevent hallucinations.",
    tech: ["Python", "LangGraph", "Gemini API", "Tavily", "Streamlit"],
    live: "https://multi-agent-research-pipeline-gemini-ugs7hf2kek7dghnbypqzjk.streamlit.app/",
    liveLabel: "Live Demo",
    github: "https://github.com/mohitraj0901/multi-agent-research-pipeline-gemini"
  },
  {
    title: "Llama-2 7B Fine-Tuning (LoRA & QLoRA)",
    desc: "Parameter-efficient instruction fine-tuning of Llama-2 7B on the Guanaco dataset using 4-bit quantization (bitsandbytes), Hugging Face PEFT, and TRL SFTTrainer.",
    tech: ["PyTorch", "Hugging Face PEFT", "TRL", "QLoRA", "bitsandbytes"],
    github: "https://github.com/mohitraj0901/Fine-Tuning-LLAMA-2-with-Custom-Dataset-Using-LoRA-and-QLoRA-Techniques"
  },
  {
    title: "AI Journal System",
    desc: "Full-stack MERN journaling application integrated with the Gemini LLM API for automated emotion detection, entry summarization, and personalized mood insights.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
    live: "https://ai-journal-system-blond.vercel.app/",
    liveLabel: "Live Demo",
    github: "https://github.com/mohitraj0901/ai-journal-system"
  },
  {
    title: "MealConnect — Food Redistribution Platform",
    desc: "Full-stack platform connecting restaurants with surplus food to local food banks with JWT role-based dashboards, real-time donation tracking, and Google Maps integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    live: "https://mealconnectproject.vercel.app",
    liveLabel: "Live Demo",
    github: "https://github.com/InternLay-HG/Code_smaShers"
  },
  {
    title: "AgroTech AI — Crop & Irrigation Predictor",
    desc: "Machine learning web platform utilizing Random Forest models and Flask APIs to deliver data-driven crop rotation recommendations and irrigation optimization.",
    tech: ["Python", "scikit-learn", "Random Forest", "Flask"],
    live: "https://ai-project-13.onrender.com/",
    liveLabel: "Live Demo",
    github: "https://github.com/mohitraj0901/AI-Project"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-white px-4">
      <h2 className="text-3xl text-center font-bold text-cyan-400 mb-4">
        Featured Projects
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Selected work across autonomous AI agents, LLM fine-tuning, machine learning, and full-stack engineering
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between border border-gray-800 bg-black/40 p-6 rounded-xl hover:scale-[1.02] hover:border-cyan-400 transition"
          >
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.desc}
              </p>

              <div className="flex gap-2 flex-wrap mt-3 text-xs mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-gray-200 px-2.5 py-1 rounded hover:bg-cyan-400 hover:text-black transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400 text-black font-medium px-4 py-2 rounded hover:bg-cyan-500 transition text-sm"
                >
                  {project.liveLabel || "Live"}
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400 text-cyan-300 px-4 py-2 rounded hover:bg-cyan-400 hover:text-black transition text-sm"
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
