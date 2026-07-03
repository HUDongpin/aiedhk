/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  turbopack: {
    root: new URL(".", import.meta.url).pathname,
  },
  async redirects() {
    const localePattern = "en|zh-hant|zh-hans|es|fr|pt|de|ar|ko|ja|hi|ru|id|bn";

    return [
      {
        source: "/research-news",
        destination: "/en/research-news",
        permanent: false,
      },
      {
        source: "/research-news/:slug*",
        destination: "/en/research-news/:slug*",
        permanent: false,
      },
      {
        source: "/research",
        destination: "/en/research-news",
        permanent: false,
      },
      {
        source: "/research/:slug*",
        destination: "/en/research-news/:slug*",
        permanent: false,
      },
      {
        source: "/news",
        destination: "/en/research-news",
        permanent: false,
      },
      {
        source: "/news/:slug*",
        destination: "/en/research-news/:slug*",
        permanent: false,
      },
      {
        source: `/:locale(${localePattern})/research`,
        destination: "/:locale/research-news",
        permanent: false,
      },
      {
        source: `/:locale(${localePattern})/research/:slug*`,
        destination: "/:locale/research-news/:slug*",
        permanent: false,
      },
      {
        source: `/:locale(${localePattern})/news`,
        destination: "/:locale/research-news",
        permanent: false,
      },
      {
        source: `/:locale(${localePattern})/news/:slug*`,
        destination: "/:locale/research-news/:slug*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
