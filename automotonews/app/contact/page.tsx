import { createStaticPage } from "@/lib/static-page";

const page = createStaticPage({
  routeSlug: "contact",
  path: "/contact",
  fallbackTitle: "Contact",
  showContactEmail: true,
});

export const generateMetadata = page.generateMetadata;
export default page.Page;
