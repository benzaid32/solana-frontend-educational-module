import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          soft: "#1A2234",
          muted: "#4B5568",
        },
        paper: {
          DEFAULT: "#FAFAF5",
          warm: "#F4F1E8",
          line: "#E6E3DB",
        },
        azure: {
          DEFAULT: "#0057B7",
          soft: "#1E6DC8",
          tint: "#E6EEF9",
        },
        wheat: {
          DEFAULT: "#FFD500",
          deep: "#E6B800",
          tint: "#FFF4CC",
        },
        signal: {
          red: "#C0392B",
          emerald: "#067A52",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      fontSize: {
        eyebrow: ["11px", { lineHeight: "1.2", letterSpacing: "0.18em" }],
      },
      boxShadow: {
        card: "0 1px 0 rgba(11, 18, 32, 0.04), 0 8px 24px -12px rgba(11, 18, 32, 0.08)",
      },
      maxWidth: {
        editorial: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
