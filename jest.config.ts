import type { Config } from "jest";

export default async (): Promise<Config> => {
    return {
        verbose: true,
        extensionsToTreatAsEsm: [".ts"],
        preset: "ts-jest",
        testEnvironment: "node",
    }
}