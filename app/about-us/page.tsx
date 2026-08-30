import { createStaticPage } from "@/lib/static-page";

const page = createStaticPage({
  routeSlug: "about-us",
  path: "/about-us",
  fallbackTitle: "About Us",
});

export const generateMetadata = page.generateMetadata;
export default page.Page;
