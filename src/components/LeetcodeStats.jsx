import { useEffect, useState } from "react";

const LeetcodeStats = () => {
  const [data, setData] = useState({
    totalSolved: "285+",
    acceptanceRate: "64.2%",
    ranking: "#561,567",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://leetcode-stats-api.herokuapp.com/mohitraj0401", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((json) => {
        if (json && json.status === "success") {
          setData({
            totalSolved: `${json.totalSolved}+`,
            acceptanceRate: `${json.acceptanceRate}%`,
            ranking: `#${Number(json.ranking).toLocaleString()}`,
          });
        }
      })
      .catch(() => {
        // Fallback values remain intact if API is rate-limited or offline
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const cards = [
    { value: loading ? "..." : data.totalSolved, label: "LeetCode Problems Solved" },
    { value: loading ? "..." : data.acceptanceRate, label: "Acceptance Rate" },
    { value: loading ? "..." : data.ranking, label: "Global Ranking" },
  ];

  return (
    <section className="py-20 bg-black text-white text-center px-4">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">
        Problem Solving &amp; DSA
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-10">
        450+ algorithmic problems solved across LeetCode, Codeforces, and CodeChef — live metrics synced automatically
      </p>

      {/* Live API Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
        {cards.map((stat, index) => (
          <div
            key={index}
            className="border border-gray-800 bg-gray-950 p-6 rounded-xl hover:scale-105 hover:border-cyan-400 transition"
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

      {/* Live Auto-Updating LeetCode Breakdown Card */}
      <div className="flex justify-center mb-8">
        <img
          src="https://leetcard.jacoblin.cool/mohitraj0401?theme=dark&font=Inter"
          alt="Live LeetCode Stats"
          className="rounded-xl border border-gray-800"
        />
      </div>

      {/* View Profile Button */}
      <a
        href="https://leetcode.com/u/mohitraj0401/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-cyan-400 text-black px-6 py-2.5 rounded-lg font-medium hover:bg-cyan-500 transition"
      >
        View LeetCode Profile
      </a>
    </section>
  );
};

export default LeetcodeStats;
