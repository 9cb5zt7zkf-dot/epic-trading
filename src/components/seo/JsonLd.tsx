// Renders a <script type="application/ld+json"> tag. Server component — no
// client JS needed, just serializes whatever schema.org object is passed in.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
