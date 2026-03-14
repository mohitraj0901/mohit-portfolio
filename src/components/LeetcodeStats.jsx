const stats = [
  { value: "160+", label: "Problems Solved" },
  { value: "1494", label: "LeetCode Rating" },
  { value: "Top 46%", label: "Global Rank" },
];

const LeetcodeStats = () => {
  return (
    <section className="py-20 bg-black text-white text-center">

      <h2 className="text-3xl font-bold text-cyan-400 mb-10">
        Problem Solving
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="border border-gray-700 p-6 rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              {stat.value}
            </h3>

            <p className="text-gray-400 mt-2">
              {stat.label}
            </p>
          </div>
        ))}

      </div>

      {/* LeetCode Card */}
      <div className="flex justify-center mb-6">
        <img
          src="https://leetcard.jacoblin.cool/mohitraj0401"
          alt="LeetCode Stats"
        />
      </div>

      {/* View Profile Button */}
      <a
        href="https://leetcode.com/u/mohitraj0401/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cyan-400 text-black px-6 py-2 rounded-lg font-medium hover:scale-105 transition"
      >
        View LeetCode Profile
      </a>

    </section>
  );
};

export default LeetcodeStats;