/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // السطر ده بيخليه يدور جوه كل الملفات في src
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ممكن تضيف ألوانك الخاصة هنا يا موسكو
        'moscow-yellow': '#FFCC00',
        'moscow-black': '#0a0a0a',
      },
    },
  },
  plugins: [],
}