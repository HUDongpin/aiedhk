import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 24px 70px rgba(15, 23, 42, 0.09)",
        card: "0 16px 48px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        aied: {
          ink: "#0f172a",
          muted: "#64748b",
          line: "#dbe4ee",
          blue: "#0f5ea8",
          cyan: "#48d5e8",
          soft: "#f4fbff",
        },
      },
      backgroundImage: {
        "hub-gradient": "radial-gradient(circle at top left, rgba(72,213,232,0.24), transparent 32%), radial-gradient(circle at 80% 10%, rgba(15,94,168,0.16), transparent 28%), linear-gradient(135deg, #ffffff 0%, #f7fbff 55%, #eff8ff 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
