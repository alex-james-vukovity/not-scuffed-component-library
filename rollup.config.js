import external from "rollup-plugin-peer-deps-external"
import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"

const extensions = [".ts", ".tsx"]

const config = {
  input: "src/index.ts",
  output: {
    name: "not-scuffed-component-library",
    file: "dist/index.js",
    format: "umd",
    sourcemap: true,
    globals: {
      // prettier-ignore
      "react": "React",
      "react-dom": "ReactDOM",
      "styled-components/macro": "styled",
      "react/jsx-runtime": "jsxRuntime",
    },
  },
  plugins: [
    babel({ babelHelpers: "bundled" }),
    commonjs(),
    external(),
    resolve({
      extensions,
      customResolveOptions: {
        moduleDirectories: ["node_modules"],
      },
    }),
    typescript(),
  ],
  external: ["react", "react-dom", "styled-components"],
}

export default config
