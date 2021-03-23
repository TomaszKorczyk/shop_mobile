const tailwindcss = require("tailwindcss");

module.exports = {
  style: {
    postcss: {
      plugins: [
        require("autoprefixer"),
        tailwindcss("./tailwind.config.js"),
        process.env.NODE_ENV === "production"
          ? require("@fullhuman/postcss-purgecss")({
              content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
              defaultExtractor: (content) =>
                content.match(/[A-Za-z0-9-_:/]+/g) || [],
            })
          : "",
      ],
    },
  },
};
