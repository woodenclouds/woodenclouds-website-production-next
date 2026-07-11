export const asset = (path: string) =>
  path.startsWith("http") ? path : `/assets/user/${path.replace(/^\/?assets\/user\//, "")}`;
