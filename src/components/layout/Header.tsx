"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/content/nav";
import { Icon } from "@/components/ui/Icon";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cx } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-sand-50/90 backdrop-blur-md dark:border-sand-100/10 dark:bg-forest-950/85">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="relative flex h-11 w-[170px] shrink-0 items-center" aria-label="Epic Trading home">
          <Image
            src="/brand/epic-trading-logo-dark.png"
            alt="Epic Trading"
            fill
            sizes="170px"
            className="object-contain object-left dark:hidden"
            priority
          />
          <Image
            src="/brand/epic-trading-logo-light.png"
            alt="Epic Trading"
            fill
            sizes="170px"
            className="hidden object-contain object-left dark:block"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const href: string = link.href;
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cx(
                  "text-[14.5px] font-medium transition-colors",
                  active ? "text-gold-600 dark:text-gold-400" : "text-ink-700 hover:text-ink-900 dark:text-sand-200 dark:hover:text-sand-50"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-700 transition-colors hover:border-gold-500 hover:text-gold-600 dark:border-sand-100/15 dark:text-sand-200 dark:hover:text-gold-400 sm:flex" />
          <Link
            href="/enquiry"
            className="hidden rounded-full bg-forest-900 px-6 py-3 text-[14px] font-medium text-sand-50 transition-colors hover:bg-forest-800 dark:bg-gold-500 dark:text-forest-950 dark:hover:bg-gold-400 sm:inline-flex"
          >
            Request a Trade Consultation
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 dark:border-sand-100/15 dark:text-sand-100 lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-900/10 bg-sand-50 px-5 py-6 dark:border-sand-100/10 dark:bg-forest-950 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink-800 hover:bg-ink-900/5 dark:text-sand-100 dark:hover:bg-sand-100/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/enquiry"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-forest-900 px-5 py-3 text-center text-[15px] font-medium text-sand-50 dark:bg-gold-500 dark:text-forest-950"
            >
              Request a Trade Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
