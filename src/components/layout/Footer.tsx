import Link from "next/link";
import Image from "next/image";
import { COMPANY, copyrightLine } from "@/content/company";
import { FOOTER_DIVISION_LINKS } from "@/content/nav";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const hasDirectContact = Boolean(COMPANY.email || COMPANY.phone);

  return (
    <footer className="border-t border-sand-100/10 bg-forest-950 text-sand-200">
      <Container className="py-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="relative h-11 w-[170px]">
              <Image src="/brand/epic-trading-logo-light.png" alt="Epic Trading" fill sizes="170px" className="object-contain object-left" />
            </div>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-sand-300">
              Epic Trading PLC provides international sourcing, procurement, import, export and commercial trade
              solutions connecting Ethiopian producers with global buyers.
            </p>
            <p className="mt-6 flex items-start gap-2.5 text-[14px] text-sand-300">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{COMPANY.headOffice.line1}, {COMPANY.headOffice.city}, {COMPANY.headOffice.country}</span>
            </p>
          </div>

          <div>
            <h4 className="font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-gold-400">Divisions</h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_DIVISION_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[14.5px] text-sand-300 transition-colors hover:text-sand-50">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/divisions" className="text-[14.5px] font-medium text-gold-400 hover:text-gold-300">
                  All divisions →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-gold-400">Company</h4>
            <ul className="mt-5 space-y-3">
              <li><Link href="/about" className="text-[14.5px] text-sand-300 hover:text-sand-50">About</Link></li>
              <li><Link href="/services" className="text-[14.5px] text-sand-300 hover:text-sand-50">Services</Link></li>
              <li><Link href="/process" className="text-[14.5px] text-sand-300 hover:text-sand-50">Trade Process</Link></li>
              <li><Link href="/global-reach" className="text-[14.5px] text-sand-300 hover:text-sand-50">Global Reach</Link></li>
              <li><Link href="/contact" className="text-[14.5px] text-sand-300 hover:text-sand-50">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-gold-400">Contact</h4>
            <ul className="mt-5 space-y-3">
              {COMPANY.email && (
                <li><a href={`mailto:${COMPANY.email}`} className="text-[14.5px] text-sand-300 hover:text-sand-50">{COMPANY.email}</a></li>
              )}
              {COMPANY.phone && (
                <li><a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-[14.5px] text-sand-300 hover:text-sand-50">{COMPANY.phone}</a></li>
              )}
              {COMPANY.phoneSecondary && (
                <li><a href={`tel:${COMPANY.phoneSecondary.replace(/\s/g, "")}`} className="text-[14.5px] text-sand-300 hover:text-sand-50">{COMPANY.phoneSecondary}</a></li>
              )}
              {!hasDirectContact && (
                <li className="text-[14.5px] text-sand-300">
                  Direct contact details are being published shortly. Please use the enquiry form.
                </li>
              )}
              <li>
                <Link href="/enquiry" className="text-[14.5px] font-medium text-gold-400 hover:text-gold-300">
                  Submit an enquiry →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-sand-100/10 pt-8 text-[13px] text-sand-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{copyrightLine()}</p>
          <p>Piazza, Addis Ababa · International Trade Gateway for Ethiopia</p>
        </div>
      </Container>
    </footer>
  );
}
