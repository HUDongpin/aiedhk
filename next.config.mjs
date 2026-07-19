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
        source: "/academy",
        destination: "/en/academy",
        permanent: false,
      },
      {
        source: "/academy/:slug*",
        destination: "/en/academy/:slug*",
        permanent: false,
      },
      {
        source: "/research-news",
        destination: "/en/news",
        permanent: true,
      },
      {
        source: "/research-news/:slug*",
        destination: "/en/news/:slug*",
        permanent: true,
      },
      {
        source: "/research",
        destination: "/en/news",
        permanent: false,
      },
      {
        source: "/research/:slug*",
        destination: "/en/news/:slug*",
        permanent: false,
      },
      {
        source: "/news",
        destination: "/en/news",
        permanent: false,
      },
      {
        source: "/news/:slug*",
        destination: "/en/news/:slug*",
        permanent: false,
      },
      {
        source: `/:locale(${localePattern})/research`,
        destination: "/:locale/news",
        permanent: false,
      },
      {
        source: `/:locale(${localePattern})/research/:slug*`,
        destination: "/:locale/news/:slug*",
        permanent: false,
      },
      {
        source: `/:locale(${localePattern})/research-news`,
        destination: "/:locale/news",
        permanent: true,
      },
      {
        source: `/:locale(${localePattern})/research-news/:slug*`,
        destination: "/:locale/news/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
