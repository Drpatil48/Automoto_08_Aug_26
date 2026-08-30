# AutoMotoNews content issues (editorial — do not auto-edit)

These are not code bugs. Do not change WordPress facts from the Next.js repo without owner approval.

## Compare dataset is sample data

- Location: `lib/vehicles.ts`
- The compare page already tells readers figures are provisional sample data.
- Action: Replace with confirmed OEM specs before treating prices/range as publication facts.

## Social profiles unpublished

- `SOCIAL_LINKS` is empty by design until real URLs exist.
- WordPress theme historically had placeholder social strings (see launch checklist). Clean those in WP admin if they still appear on the CMS host.

## Newsletter not connected

- Homepage form correctly reports that delivery is not configured.
- Requires a real provider (Brevo/Mailchimp) and server credentials — not a silent code fake-success.
