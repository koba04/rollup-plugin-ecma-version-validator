import { format } from "../format";

describe("format", () => {
  it("should return a formatted message", () => {
    const source = "var a = true;\nconst foo = () => {}";
    const error = {
      message: "const is a reserved word",
      loc: {
        line: 2,
        column: 0,
      },
    };
    expect(format(error, source)).toMatchSnapshot();
  });
  it("should return a formatted message if loc is not defined", () => {
    const source = "var a = true;\nconst foo = () => {}";
    const error = {
      message: "const is a reserved word",
    };
    expect(format(error, source)).toMatchSnapshot();
  });
  it("should omit a source code if the error line is over 100 characters", () => {
    const source = `var ${"a".repeat(100)} = () => {}; // ${"b".repeat(200)}`;
    const error = {
      message: "const is a reserved word",
      loc: {
        line: 1,
        column: 110,
      },
    };
    expect(format(error, source)).toMatchSnapshot();
  });
});
