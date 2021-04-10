import external from "rollup-plugin-peer-deps-external"
import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"

const config = {
  input: "src/index.ts",
  output: { file: "dist/index.js", format: "esm" },
  plugins: [
    babel({ babelHelpers: "bundled" }),
    commonjs(),
    external(),
    resolve({
      customResolveOptions: {
        moduleDirectories: ["node_modules"],
      },
    }),
    typescript(),
  ],
  external: ["react", "react-dom", "styled-components"],
}

export default config
