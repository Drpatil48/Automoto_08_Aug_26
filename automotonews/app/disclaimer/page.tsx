import { createStaticPage } from "@/lib/static-page";

const page = createStaticPage({
  routeSlug: "disclaimer",
  path: "/disclaimer",
  fallbackTitle: "Disclaimer",
});

export const generateMetadata = page.generateMetadata;
export default page.Page;
