import external from "rollup-plugin-peer-deps-external"
import packageJson from "./package.json"
import typescript from "rollup-plugin-typescript2"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"

const config = {
  input: packageJson.source,
  output: [
    { file: packageJson.main, format: "cjs" },
    { file: packageJson.module, format: "esm" },
  ],
  plugins: [external(), resolve(), commonjs(), typescript()],
  external: Object.keys(packageJson.peerDependencies || {}),
}

export default config
