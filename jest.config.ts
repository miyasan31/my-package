import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  testEnvironment: "node",
  collectCoverage: true,
};

export default config;
