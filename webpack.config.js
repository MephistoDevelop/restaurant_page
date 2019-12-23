const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  watch: true
};

const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  //
  watch: true,
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: "localhost",
      port: 3001,
      files: ["./dist/*.html", "./dist/*.js", "./dist/*.css", "./src/*.js"],
      server: { baseDir: ["dist"] }
    })
  ]
};
