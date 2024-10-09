import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};

export default config;
