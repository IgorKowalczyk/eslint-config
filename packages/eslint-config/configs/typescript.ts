import type { Linter } from "eslint";
import { composer, mergeConfigs } from "eslint-flat-config-utils";
import tseslint from "typescript-eslint";

const mergedTypescriptConfig = mergeConfigs(...(tseslint.config(...tseslint.configs.recommended) as unknown as Linter.Config[]));

export default (await composer(mergedTypescriptConfig)
 .renamePlugins({
  "@typescript-eslint": "typescript",
 })
 .override("typescript-eslint/recommended", {
  name: "@igorkowalczyk/eslint-config/typescript",
 })) as Linter.Config[];
