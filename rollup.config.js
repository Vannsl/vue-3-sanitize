import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";

export default {
  output: {
    file: "dist/vue-3-sanitize.js",
    format: "umd"
  },
  plugins: [babel(), nodeResolve({ jsnext: true, main: true })]
};
