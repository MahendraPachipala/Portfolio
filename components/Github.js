"use client";
import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubStats = () => {
  const GITHUB_USERNAME = "MahendraPachipala"; // Change this

  // State for GitHub stats
  const [repositories, setRepositories] = useState(0);
  const [linesOfCode, setLinesOfCode] = useState(0);
  const [contributions, setContributions] = useState(0);
  
  useEffect(() => {
    const fetchGitHubStats = async () => {
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Use environment variable
      const query = `
        {
          user(login: "${GITHUB_USERNAME}") {
            repositories(first: 100, isFork: false) {
              totalCount
            }
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
          }
        }
      `;

      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query }),
      });

      const { data } = await response.json();
      if (data?.user) {
        setRepositories(data.user.repositories.totalCount);
        setLinesOfCode(data.user.contributionsCollection.contributionCalendar.totalContributions * 50); // Approximation
      }
    };

    fetchGitHubStats();
  }, []);

  return (
    <section className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-zinc-700 via-zinc-300 to-zinc-700">GitHub Stats</h2>

      {/* GitHub Contribution Graph */}
      <div className="mx-auto flex justify-center">
        <h3 className="text-xl font-semibold mb-2" style={{ color: "#A9A9A9" }}>🔥 GitHub Activity</h3>
      </div>
      <div className="flex justify-center">
        <GitHubCalendar username={GITHUB_USERNAME} colorScheme="light" />
      </div>

      {/* Custom Counters */}
      <div className="flex justify-center gap-6 text-xl font-semibold mt-4">
        <div className="border border-gray-600 p-4 rounded-lg shadow-md" style={{ color: "#696969", borderColor: "#C0C0C0" }}>
          📂 Repositories: <span style={{ color: "#D3D3D3" }}>{repositories}</span>
        </div>
        <div className="border border-gray-600 p-4 rounded-lg shadow-md" style={{ color: "#696969", borderColor: "#C0C0C0" }}>
          💻 Lines of Code: <span style={{ color: "#D3D3D3" }}>{linesOfCode.toLocaleString()}</span>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
