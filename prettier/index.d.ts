import type { Config } from 'prettier';
import type { PartialDeep } from 'type-fest';

export const config: Config;

export function customConfig(partialConfig: PartialDeep<Config>): Config;
