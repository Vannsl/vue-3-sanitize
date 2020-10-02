import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "index.js",
  output: {
    file: "dist/vue-3-sanitize.js",
    name: "vue-3-sanitize",
    format: "umd",
    sourcemap: true
  },
  plugins: [babel(), nodeResolve({ jsnext: true, main: true })]
};
