/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: 'transparent',
      backg: "#1B2732",
      copli: "#369E95",
      maintxt: "#F6F6F5",
      iconsheaders: "#CB6A4E",
      txtother:"#ffffff",
      hoverbtt:"#87412D",
      bgnews:"#313C46",
     
    },
    extend: {
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
        kanit: ["Caprasimo family", "kanitespace"],
      },
    },
  },
  plugins: [],
};
