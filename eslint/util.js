/** @type {(config: import('eslint').Linter.FlatConfig[], suffix: string) => import('eslint').Linter.FlatConfig[]}  */
export function prefixFiles(configs, prefix) {
  return configs.map((config) => ({
    ...config,
    files: (config.files ?? ['**/*']).map((glob) =>
      prefix.endsWith('/') ? `${prefix}${glob}` : `${prefix}/${glob}`,
    ),
  }));
}
