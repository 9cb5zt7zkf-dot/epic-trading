import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ENQUIRY_CATEGORIES, getEnquiryCategory } from "@/content/enquiryForms";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return ENQUIRY_CATEGORIES.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = getEnquiryCategory(params.category);
  if (!category) return {};
  return buildMetadata({
    title: category.label,
    description: category.intro,
    path: `/enquiry/${category.slug}`,
  });
}

export default function EnquiryCategoryPage({ params }: { params: { category: string } }) {
  const category = getEnquiryCategory(params.category);
  if (!category) notFound();

  return (
    <section className="bg-sand-50 py-16 dark:bg-forest-950">
      <Container className="max-w-3xl">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Request a Trade Consultation", href: "/enquiry" }, { label: category.label }]}
        />
        <h1 className="mt-6 font-display text-display-md font-medium text-ink-900 dark:text-sand-50">{category.label}</h1>
        <p className="mt-4 text-[15.5px] leading-relaxed text-ink-700 dark:text-sand-300">{category.intro}</p>

        <div className="mt-10">
          <EnquiryForm category={category} />
        </div>
      </Container>
    </section>
  );
}
