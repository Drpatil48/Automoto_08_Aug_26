import { createStaticPage } from "@/lib/static-page";

const page = createStaticPage({
  routeSlug: "privacy-policy",
  path: "/privacy-policy",
  fallbackTitle: "Privacy Policy",
});

export const generateMetadata = page.generateMetadata;
export default page.Page;
