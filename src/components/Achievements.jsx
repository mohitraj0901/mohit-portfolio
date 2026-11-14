const achievements = [
  {
    title: "GATE 2026 Qualified (Dual Papers)",
    desc: "Qualified in Data Science & Artificial Intelligence (DA) with AIR 3024 (Score: 486) and Computer Science & IT (CS) (Score: 404)."
  },
  {
    title: "Research Internship — IIT Kharagpur",
    desc: "Completed Reinforcement Learning research at G.S. Sanyal School of Telecommunications, achieving a 30% cluster sum-rate gain with MATD3."
  },
  {
    title: "Hugging Face Agents Course — Certificate of Excellence",
    desc: "Cleared the Unit 4 GAIA autonomous agent evaluation benchmark (Nov 2026) with a custom code-executing agent."
  },
  {
    title: "Amazon ML Summer School 2026",
    desc: "Qualified Round 1 of the competitive Amazon Machine Learning Summer School selection."
  },
  {
    title: "450+ DSA Problems & IOQM Merit",
    desc: "Solved 450+ algorithmic problems across LeetCode, Codeforces, and CodeChef; awarded Certificate of Merit in IOQM."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-black text-white px-4">
      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-10">
        Achievements &amp; Credentials
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-800 bg-gray-950 p-5 rounded-xl hover:border-cyan-400 transition"
          >
            <h3 className="text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
