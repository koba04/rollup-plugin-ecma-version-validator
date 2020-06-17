import { RollupError } from "rollup";

export const format = (
  error: { message: string; loc?: { line: number; column: number } },
  source: string
): string => {
  const loc = error.loc;
  let message = error.message;
  if (loc) {
    message += `\n[${loc.line}:${loc.column}] ${extractSource(source, loc)}`;
  }
  return message;
};

const extractSource = (
  source: string,
  loc: { line: number; column: number }
) => {
  const offset = 40;
  const sourceLine = source.split("\n")[loc.line - 1];
  if (sourceLine.length < 100) {
    return sourceLine;
  }
  return sourceLine.substring(loc.column - offset, loc.column + offset);
};
