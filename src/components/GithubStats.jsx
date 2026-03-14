import { GitHubCalendar } from "react-github-calendar";

const GithubStats = () => {
  return (
    <section className="py-20 bg-gray-950 text-center text-white">

      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        GitHub Activity
      </h2>

      <div className="flex justify-center">
        <GitHubCalendar username="mohitraj0901" />
      </div>

    </section>
  );
};

export default GithubStats;