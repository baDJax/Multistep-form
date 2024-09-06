import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "sidebar-image":"url('/image/sidebar.svg')",
      },
      gridTemplateColumns: {
        'form': '320px 1fr',
      },
      colors:{
        "form":"#C3E1FB",
        "personal":"#02295A"
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;
