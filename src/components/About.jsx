const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 text-center text-white px-4">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">
        About Me
      </h2>

      <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed mb-4">
        I&apos;m a pre-final year B.Tech Computer Science &amp; Engineering (AI &amp; Data Science) student at
        <span className="text-white font-medium"> IIIT Ranchi</span> with hands-on research experience at the
        <span className="text-cyan-400 font-medium"> G.S. Sanyal School of Telecommunications, IIT Kharagpur</span>,
        where I engineered Multi-Agent TD3 (MATD3) reinforcement learning frameworks validated via large-scale Monte Carlo simulations.
      </p>

      <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
        Beyond research, I build autonomous code-executing LLM agents (<span className="text-gray-200">smolagents, LangGraph, Gemini API</span>),
        fine-tune open-weights models (<span className="text-gray-200">LoRA / QLoRA</span>), and ship full-stack MERN applications backed by
        450+ solved DSA problems.
      </p>
    </section>
  );
};

export default About;
