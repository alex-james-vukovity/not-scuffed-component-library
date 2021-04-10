import external from "rollup-plugin-peer-deps-external"
import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"
import del from "rollup-plugin-delete"

const extensions = [".js", ".jsx", ".ts", ".tsx"]
const formats = ["esm", "umd"]

const config = {
  input: "src/index.ts",
  output: formats.map((format) => ({
    file: `dist/browser.${format}.js`,
    format,
    sourcemap: true,
    name: "not-scuffed-component-library",
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
      "styled-components/macro": "styled",
      "react/jsx-runtime": "jsxRuntime",
    },
  })),
  plugins: [
    babel({ extensions, babelHelpers: "bundled", exclude: "node_modules/**" }),
    commonjs(),
    external(),
    resolve({
      extensions,
      customResolveOptions: {
        moduleDirectories: ["node_modules"],
      },
    }),
    typescript(),
    del({ targets: "dist/*" }),
  ],
  external: ["react", "react-dom", "styled-components"],
}

export default config
