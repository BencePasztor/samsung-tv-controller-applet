import path from "path"
import webpack from "webpack"

const config: webpack.Configuration = {
  mode: "production",
  entry: {
    index: "./src/main.ts",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, `files/samsung-tv-controller@BencePasztor/`),
    library: "applet",
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: [
      path.join(__dirname, "src"),
      "node_modules",
    ],
  },
  target: "node",
  optimization: {
    minimize: false,
    usedExports: true,
  }
}

export default config