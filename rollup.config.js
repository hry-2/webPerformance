import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
export default {
  input: "src/index.js",
  output: {
    file: "dist/js/webPerformance.min.js",
    format: "umd",
    name: 'webPerformance'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    uglify()
  ]
};