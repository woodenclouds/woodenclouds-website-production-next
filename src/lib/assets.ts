/** Resolve a public asset path. Pass absolute http(s) URLs through unchanged. */
export const asset = (path: string) =>
  path.startsWith("http") ? path : `/${path.replace(/^\//, "")}`;
