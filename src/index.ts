import { Plugin } from "rollup";
import { parse, defaultOptions } from "acorn";
import { format } from "./format";

type ECMAVersion = typeof defaultOptions.ecmaVersion;
type Options = {
  ecmaVersion?: ECMAVersion;
};

export const ecmaVersionValidator = (options: Options = {}): Plugin => {
  return {
    name: "EcmaVersionValidator",
    generateBundle(_, bundle /* isWrite */) {
      const ecmaVersion = options?.ecmaVersion ?? 5;
      Object.keys(bundle).forEach((name: string) => {
        const asset = bundle[name];
        const source =
          asset.type === "asset" ? asset.source.toString() : asset.code;
        const fileName = asset.fileName;
        try {
          parse(source, { ecmaVersion });
        } catch (e: any) {
          this.error(format(e, source));
        }
      });
    },
  };
};
