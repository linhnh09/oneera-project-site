function normalizeBase(base: string): string {
  if (!base || base === "/") return "/";
  return base.endsWith("/") ? base : `${base}/`;
}

export function withBase(path: string): string {
  const base = normalizeBase(import.meta.env.BASE_URL ?? "/");
  return `${base}${path.replace(/^\/+/, "")}`;
}

export function canonicalPath(pathname: string): string {
  const base = normalizeBase(import.meta.env.BASE_URL ?? "/");
  const bare = base === "/" ? "/" : base.slice(0, -1);
  if (pathname === base || pathname === bare) return base;
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}
