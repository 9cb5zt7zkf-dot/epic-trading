import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteUrl } from "@/content/company";
import { Icon } from "@/components/ui/Icon";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: siteUrl(item.href) } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className={tone === "dark" ? "text-ink-500" : "text-sand-300"}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[13px]">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {item.href ? (
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className={tone === "dark" ? "text-ink-700" : "text-sand-100"}>{item.label}</span>
              )}
              {i < items.length - 1 && <Icon name="arrow" className="h-3 w-3 opacity-50" />}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
