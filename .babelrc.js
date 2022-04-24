module.exports = {
  presets: [["next/babel", { "preset-react": { runtime: "automatic" } }]],
  plugins: [["babel-plugin-styled-components", { ssr: true }], "macros"],
  env: {
    production: {
      plugins: [["transform-remove-console", { exclude: ["error", "warn"] }]],
    },
  },
};
