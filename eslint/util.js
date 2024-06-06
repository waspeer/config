/** @type {(string: string, suffix: string) => string}  */
export function filesPrefix(glob, prefix) {
  if (!prefix) {
    return glob;
  }

  return prefix.endsWith('/') ? `${prefix}${glob}` : `${prefix}/${glob}`;
}
