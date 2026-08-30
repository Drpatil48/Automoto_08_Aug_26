import { SITE_CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export type StaticPolicyContent = {
  title: string;
  excerpt: string;
  bodyHtml: string;
};

export const FALLBACK_POLICIES: Record<string, StaticPolicyContent> = {
  "privacy-policy": {
    title: "Privacy Policy",
    excerpt: "This Privacy Policy explains how AutomotoNews.in collects, uses, and protects reader information in compliance with Google AdSense policies and global privacy standards.",
    bodyHtml: `
      <h2>1. Information We Collect</h2>
      <p>AutomotoNews.in ("we", "our", or "us") respects your privacy. We collect non-personally identifiable information automatically when you browse our website, including IP address, browser type, device details, pages visited, and time spent on pages. If you voluntarily subscribe to our newsletter, we store your email address securely with your explicit consent.</p>

      <h2>2. Use of Cookies and Web Beacons</h2>
      <p>AutomotoNews.in uses cookies to enhance reader experience, analyze site traffic, and serve relevant content. A cookie is a small text file placed on your device by web page servers.</p>

      <h2>3. Google AdSense & Third-Party Advertising</h2>
      <p>We use Google AdSense and third-party advertising partners to display advertisements on our website when you visit.</p>
      <ul>
        <li>Google, as a third-party vendor, uses cookies to serve ads on AutomotoNews.in.</li>
        <li>Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites on the Internet.</li>
        <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">AboutAds.info</a>.</li>
      </ul>

      <h2>4. Google Analytics</h2>
      <p>We use Google Analytics to monitor and analyze website traffic. Google Analytics uses cookies to gather anonymous data regarding user behavior. You can learn more about how Google uses data at <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google Partner Policies</a>.</p>

      <h2>5. Data Protection & Security</h2>
      <p>We implement industry-standard security measures to safeguard any data provided to us. We never sell, trade, or rent personal subscriber information to third parties.</p>

      <h2>6. Contact Us</h2>
      <p>If you have any questions regarding this Privacy Policy, please email us at <strong>${SITE_CONTACT_EMAIL}</strong>.</p>
    `,
  },
  disclaimer: {
    title: "Disclaimer",
    excerpt: "Editorial disclaimer regarding vehicle specifications, pricing, imagery, and external links published on AutomotoNews.in.",
    bodyHtml: `
      <h2>1. General Information Purpose</h2>
      <p>All news, reviews, specifications, prices, and vehicle comparison data published on ${SITE_NAME} are intended for general information and educational purposes only. While we strive to ensure accuracy, vehicle prices, features, and launch timelines in India are subject to change by manufacturers without prior notice.</p>

      <h2>2. On-Road & Ex-Showroom Pricing</h2>
      <p>Vehicle prices quoted on ${SITE_NAME} represent approximate ex-showroom or estimated prices in major Indian cities. Final on-road prices vary based on state RTO taxes, insurance, and local dealer charges. Always verify final pricing with authorized dealerships before purchasing.</p>

      <h2>3. Editorial Independence</h2>
      <p>AutomotoNews.in maintains strict editorial independence. Vehicle reviews and comparisons are published objectively based on real-world vehicle testing, technical specifications, and expert analysis.</p>

      <h2>4. External Links</h2>
      <p>Our articles may contain links to external third-party websites. AutomotoNews.in is not responsible for the content, privacy practices, or accuracy of third-party websites.</p>
    `,
  },
  "about-us": {
    title: "About Us",
    excerpt: "AutomotoNews.in is Maharashtra's premier Marathi-first automotive publication dedicated to electric vehicles, cars, bikes, and buying advice.",
    bodyHtml: `
      <h2>Who We Are</h2>
      <p>AutomotoNews.in is an independent, Marathi-first automotive news and vehicle research publication based in Maharashtra, India. Our mission is to deliver fast, accurate, and comprehensive automotive news in Marathi to empower car and bike buyers across India.</p>

      <h2>What We Cover</h2>
      <ul>
        <li><strong>⚡ EV Spotlight:</strong> Latest news, battery tech, charging infrastructure, and electric vehicle launches in India.</li>
        <li><strong>🚗 Car News & Reviews:</strong> In-depth coverage of hatchbacks, sedans, SUVs, and upcoming cars.</li>
        <li><strong>🏍️ Bikes & Performance:</strong> Motorcycles, electric scooters, test rides, and commuter bike reviews.</li>
        <li><strong>📊 Vehicle Comparison Tool:</strong> Independent Car vs Car and Bike vs Bike comparison engine.</li>
      </ul>

      <h2>Editorial Standards</h2>
      <p>Lead Editor <strong>Dhanraj Patil</strong> and our team follow rigorous editorial guidelines ensuring transparency, technical accuracy, and zero fake news.</p>
    `,
  },
  contact: {
    title: "Contact Us",
    excerpt: "Get in touch with the editorial team at AutomotoNews.in for feedback, news tips, press releases, or partnership inquiries.",
    bodyHtml: `
      <h2>Reach Out to Our Editorial Team</h2>
      <p>We welcome feedback, press releases, news tips, and advertising inquiries from readers, manufacturers, and industry partners.</p>

      <h2>Contact Information</h2>
      <ul>
        <li><strong>Editorial Email:</strong> <a href="mailto:${SITE_CONTACT_EMAIL}">${SITE_CONTACT_EMAIL}</a></li>
        <li><strong>Publication:</strong> AutomotoNews.in</li>
        <li><strong>Language:</strong> Marathi & English</li>
        <li><strong>Location:</strong> Maharashtra, India</li>
      </ul>

      <h2>Response Time</h2>
      <p>We aim to respond to all legitimate editorial and business inquiries within 24 to 48 business hours.</p>
    `,
  },
};
