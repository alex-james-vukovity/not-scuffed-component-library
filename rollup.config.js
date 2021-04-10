import babel from "@rollup/plugin-babel"
import external from "rollup-plugin-peer-deps-external"
import del from "rollup-plugin-delete"
import packageJson from "./package.json"
import typescript from "rollup-plugin-typescript2"

const config = {
  input: packageJson.source,
  output: [
    { file: packageJson.main, format: "cjs" },
    { file: packageJson.module, format: "esm" },
  ],
  plugins: [
    external(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    del({ targets: ["dist/*"] }),
    typescript(),
  ],
  external: Object.keys(packageJson.peerDependencies || {}),
}

export default config
