type JsonLdProps = {
  data:
    | Record<string, unknown>
    | null
    | Array<Record<string, unknown> | null | undefined>;
};

export function JsonLd({ data }: JsonLdProps) {
  const payload = (Array.isArray(data) ? data : [data]).filter(
    (item): item is Record<string, unknown> => Boolean(item),
  );

  if (payload.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload.length === 1 ? payload[0] : payload),
      }}
    />
  );
}
