import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-forest-950 text-sand-50">
      <Container className="text-center">
        <span className="font-display text-[13px] uppercase tracking-[0.2em] text-gold-400">404</span>
        <h1 className="mt-4 font-display text-display-md font-medium">Page not found.</h1>
        <p className="mt-4 mx-auto max-w-md text-[15.5px] text-sand-300">
          The page you&rsquo;re looking for may have moved. Try one of the links below.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/">Return Home</ButtonLink>
          <ButtonLink href="/divisions" variant="ghost">
            Explore Divisions
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
