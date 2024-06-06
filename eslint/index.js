import { baseConfig } from './base.js';
import { reactConfig } from './react.js';
import { solidReact } from './solid-react.js';
import { solidConfig } from './solid.js';

export const configs = {
  base: baseConfig,
  solid: solidConfig(),
  react: reactConfig(),
  solidReact,
};
