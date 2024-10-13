/** @type {(config: import('eslint').Linter.Config[], suffix: string) => import('eslint').Linter.Config[]}  */
export function prefixFiles(configs, prefix) {
  return configs.map((config) => ({
    ...config,
    files: (config.files ?? ['**/*']).map((glob) =>
      prefix.endsWith('/') ? `${prefix}${glob}` : `${prefix}/${glob}`,
    ),
  }));
}
