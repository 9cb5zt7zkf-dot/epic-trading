// Minimal classnames joiner — deliberately not pulling in clsx/tailwind-merge
// as dependencies; this project's className usage doesn't need conflict
// resolution, just conditional joining.
export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatList(items: string[]): string {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}
