import type { NextConfig } from "next";

// GITHUB_PAGES is set by the deploy workflow; the site lives at
// kelsman.github.io/my-portfolio, so assets need the repo prefix there.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/my-portfolio" : undefined,
};

export default nextConfig;
