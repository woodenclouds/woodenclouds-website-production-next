type JsonLdProps = {
  data:
    | Record<string, unknown>
    | (Record<string, unknown> | null | undefined)[]
    | null
    | undefined;
};

/** Renders JSON-LD structured data for search engines. */
export function JsonLd({ data }: JsonLdProps) {
  if (!data) return null;

  const items = Array.isArray(data)
    ? (data.filter(Boolean) as Record<string, unknown>[])
    : [data];

  if (items.length === 0) return null;

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
