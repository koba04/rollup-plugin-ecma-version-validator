import path from "path";
import { rollup } from "rollup";
import { ecmaVersionValidator } from "../index";

describe("index", () => {
  it("should not emit any error if an input file is valid", async () => {
    const inputOptions = {
      input: path.resolve(__dirname, "fixtures", "es5.js"),
      plugins: [ecmaVersionValidator()],
    };
    const outputOptions = {};
    const bundle = await rollup(inputOptions);
    await expect(bundle.generate(outputOptions)).resolves.not.toThrow();
  });
  it("should emit an error if an input file is not valid", async () => {
    const inputOptions = {
      input: path.resolve(__dirname, "fixtures", "es2015.js"),
      plugins: [ecmaVersionValidator()],
    };
    const outputOptions = {};
    const bundle = await rollup(inputOptions);

    await expect(bundle.generate(outputOptions)).rejects.toThrow(
      "The keyword 'const' is reserved (1:0)\n[1:0] const foo = (a, b) => {"
    );
  });
  it("should be able to change the target ECMAScript version", async () => {
    const inputOptions = {
      input: path.resolve(__dirname, "fixtures", "es2015.js"),
      plugins: [ecmaVersionValidator({ ecmaVersion: 2015 })],
    };
    const outputOptions = {};
    const bundle = await rollup(inputOptions);
    await expect(bundle.generate(outputOptions)).resolves.not.toThrow();
  });
});
