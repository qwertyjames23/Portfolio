/**
 * Get the correct asset path including the base path
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  if (path.startsWith('/')) {
    return base.endsWith('/') ? base + path.slice(1) : base + path;
  }
  return base.endsWith('/') ? base + path : base + '/' + path;
}
    