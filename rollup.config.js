import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";

const external = Object.keys(pkg.dependencies).concat(["path", "fs"]);

export default {
  input: "src/index.ts",
  plugins: [typescript()],
  external,
  output: [
    { format: "cjs", file: pkg.main },
    { format: "esm", file: pkg.module },
  ],
};
