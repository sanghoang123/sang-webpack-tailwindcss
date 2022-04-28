module.exports = {
  content: [],
  theme: {
    extend: {
      height: {
        custom: '620px',
        image: '500px',
      },
      spacing: {
        '40-c': '40rem',
      },
    },
  },
  plugins: [],
};

// npx tailwindcss-cli build src/css/tailwind.css -o dist/main.css
