import { GitHubCalendar } from "react-github-calendar";

const GithubStats = () => {
  return (
    <section className="py-20 bg-gray-950 text-center text-white">

      <h2 className="text-3xl font-bold text-cyan-400 mb-4">
        GitHub Activity
      </h2>

      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        Consistently building projects and contributing to repositories.
      </p>

      <div className="flex justify-center">
        <GitHubCalendar
          username="mohitraj0901"
          blockSize={15}
          blockMargin={5}
          colorScheme="dark"
        />
      </div>

    </section>
  );
};

export default GithubStats;