import type { Article, Author, Category, VehicleSpec } from "@/lib/types";
import { buildCategoryMeta } from "@/lib/category-style";

const author: Author = {
  name: "AutomotoNews Desk",
  bio: "Editorial desk covering EVs, cars, and bikes for Maharashtra readers.",
  avatarUrl: null,
  socialLinks: [],
};

function article(
  partial: Omit<
    Article,
    "author" | "body" | "updatedDate" | "tags" | "categoryName" | "coverImageAlt"
  > &
    Partial<
      Pick<
        Article,
        "author" | "body" | "updatedDate" | "tags" | "categoryName" | "coverImageAlt"
      >
    >,
): Article {
  return {
    author,
    body: partial.body ?? partial.excerpt,
    updatedDate: partial.updatedDate ?? partial.publishDate,
    tags: partial.tags ?? [],
    categoryName: partial.categoryName ?? partial.category,
    coverImageAlt: partial.coverImageAlt ?? partial.title,
    ...partial,
  };
}

/** Category metadata for homepage rails and badges (Phase 2 mock). */
export const CATEGORIES: Category[] = [
  buildCategoryMeta("electric-vehicles-evs", {
    name: "EV Spotlight",
    description: "Charging, battery health, range, and the latest EV launches.",
  }),
  buildCategoryMeta("sportsbikes", {
    name: "Bikes & Performance",
    description: "Sports bikes, mileage champions, and new two-wheeler launches.",
  }),
  buildCategoryMeta("car-news", {
    name: "Car News",
    description: "Launches, facelifts, and market updates for Indian cars.",
  }),
  buildCategoryMeta("buying-guide", {
    name: "Latest Guides",
    description: "Actionable recommendations by budget and use case.",
  }),
  buildCategoryMeta("daily-update", {
    name: "Daily Update",
    description: "Quick daily roundups for busy readers.",
  }),
];

export const MOCK_ARTICLES: Article[] = [
  article({
    title: "टाटा नेक्सॉन EV फेसलिफ्ट: रेंज, किंमत आणि महत्त्वाचे बदल",
    slug: "tata-nexon-ev-facelift-range-price",
    category: "electric-vehicles-evs",
    coverImage: "/placeholders/cover-ev.svg",
    excerpt:
      "नव्या बॅटरी पर्याय, अपडेटेड इंटीरियर आणि शहर वापरासाठी काय फरक पडतो याचा सोपा आढावा.",
    publishDate: "2026-08-08",
    readTimeMinutes: 6,
    tags: ["Tata", "Nexon EV", "Facelift"],
  }),
  article({
    title: "महाराष्ट्रातील टॉप ५ इलेक्ट्रिक स्कूटर — ऑगस्ट २०२६",
    slug: "top-electric-scooters-maharashtra-august-2026",
    category: "electric-vehicles-evs",
    coverImage: "/placeholders/cover-ev.svg",
    excerpt:
      "रेंज, चार्जिंग सुविधा आणि किंमत या तीन निकषांवर शहरासाठी उपयुक्त स्कूटर शॉर्टलिस्ट.",
    publishDate: "2026-08-07",
    readTimeMinutes: 5,
    tags: ["Scooter", "EV"],
  }),
  article({
    title: "माझदा CX-5 डीझेल भारतात कधी? अपेक्षित किंमत आणि स्पेक्स",
    slug: "mazda-cx-5-india-expected-price",
    category: "upcoming-cars",
    coverImage: "/placeholders/cover-car.svg",
    excerpt:
      "SUV खरेदीदारांसाठी महत्त्वाचे इंजिन पर्याय, सेफ्टी फीचर्स आणि लाँच टाइमलाइन.",
    publishDate: "2026-08-06",
    readTimeMinutes: 4,
    tags: ["Mazda", "SUV"],
  }),
  article({
    title: "रॉयल एनफिल्ड हिमालयान: हिल ड्राइव्ह अनुभव आणि मायलेज",
    slug: "royal-enfield-himalayan-hill-drive",
    category: "sportsbikes",
    coverImage: "/placeholders/cover-bike.svg",
    excerpt:
      "लांब ट्रिप आणि घाट रस्त्यांसाठी सस्पेंशन, सीटिंग आणि रिअल-वर्ल्ड मायलेज काय सांगतात.",
    publishDate: "2026-08-05",
    readTimeMinutes: 7,
    tags: ["Royal Enfield", "Adventure"],
  }),
  article({
    title: "आजचे ऑटो अपडेट: ३ मोठ्या बातमी एका नजरेत",
    slug: "daily-auto-update-three-headlines",
    category: "daily-update",
    coverImage: "/placeholders/cover-daily.svg",
    excerpt:
      "EV सबसिडी चर्चा, नवीन बाईक टीझर आणि एक कॉम्पॅक्ट एसयूव्ही लाँच अपडेट.",
    publishDate: "2026-08-10",
    readTimeMinutes: 3,
    tags: ["Daily"],
  }),
  article({
    title: "१५ लाखांखाली बेस्ट फॅमिली कार कशी निवडावी?",
    slug: "best-family-car-under-15-lakh",
    category: "buying-guide",
    coverImage: "/placeholders/cover-guide.svg",
    excerpt:
      "स्पेस, सेफ्टी रेटिंग, सर्व्हिस कॉस्ट आणि रीसेल व्हॅल्यू यावर आधारित खरेदी फ्रेमवर्क.",
    publishDate: "2026-08-04",
    readTimeMinutes: 8,
    tags: ["Buying Guide", "Family Car"],
  }),
  article({
    title: "हुंडई क्रेटा vs किआ सेल्टॉस: कोणती एसयूव्ही तुमच्यासाठी?",
    slug: "creta-vs-seltos-comparison",
    category: "car-news",
    coverImage: "/placeholders/cover-car.svg",
    excerpt:
      "फीचर लिस्ट, इंजिन पर्याय आणि शहर + हायवे ड्राइव्ह यातील फरक स्पष्ट शब्दांत.",
    publishDate: "2026-08-03",
    readTimeMinutes: 6,
    tags: ["Creta", "Seltos", "Compare"],
  }),
  article({
    title: "TVS अपाची RTR 160: परफॉर्मन्स आणि रोजच्या वापराचा बॅलन्स",
    slug: "tvs-apache-rtr-160-review-notes",
    category: "sportsbikes",
    coverImage: "/placeholders/cover-bike.svg",
    excerpt:
      "पॉवर डिलिव्हरी, ब्रेकिंग आणि कम्युटसाठी आराम — नव्या बायर्ससाठी शॉर्ट नोट्स.",
    publishDate: "2026-08-02",
    readTimeMinutes: 5,
    tags: ["TVS", "Apache"],
  }),
  article({
    title: "घरच्या चार्जिंगसाठी वॉलबॉक्स निवडताना या ४ गोष्टी तपासा",
    slug: "home-ev-wallbox-checklist",
    category: "electric-vehicles-evs",
    coverImage: "/placeholders/cover-ev.svg",
    excerpt:
      "लोड क्षमता, सेफ्टी सर्टिफिकेशन, अ‍ॅप मॉनिटरिंग आणि इन्स्टॉलेशन खर्च समजून घ्या.",
    publishDate: "2026-08-01",
    readTimeMinutes: 5,
    tags: ["Charging", "Home EV"],
  }),
  article({
    title: "बेस्ट EV Under 15L — शॉर्टलिस्ट २०२६",
    slug: "best-ev-under-15-lakh-2026",
    category: "buying-guide",
    coverImage: "/placeholders/cover-guide.svg",
    excerpt:
      "बजेट, रेंज अँझायटी आणि सिटी चार्जिंग रियलिटी लक्षात घेऊन व्यावहारिक शॉर्टलिस्ट.",
    publishDate: "2026-07-30",
    readTimeMinutes: 7,
    tags: ["EV", "Budget"],
  }),
  article({
    title: "पहिली बाईक खरेदी: १२५cc vs 160cc — काय योग्य?",
    slug: "first-bike-125-vs-160",
    category: "buying-guide",
    coverImage: "/placeholders/cover-guide.svg",
    excerpt:
      "नवशिक्यांसाठी कंट्रोल, इन्शुरन्स खर्च आणि मायलेज यांची तुलना.",
    publishDate: "2026-07-28",
    readTimeMinutes: 4,
    tags: ["First Bike"],
  }),
  article({
    title: "पेट्रोल कार खरेदी करताना टोल आणि फ्युएल बजेट कसे मोजावे",
    slug: "petrol-car-ownership-budget",
    category: "buying-guide",
    coverImage: "/placeholders/cover-guide.svg",
    excerpt:
      "EMI नंतरही दरमहा किती खर्च येतो हे समजण्यासाठी साधी कॅल्क्युलेशन पद्धत.",
    publishDate: "2026-07-26",
    readTimeMinutes: 5,
    tags: ["Ownership Cost"],
  }),
];

export const MOCK_VEHICLES: VehicleSpec[] = [
  {
    id: "nexon-ev",
    brand: "Tata",
    model: "Nexon EV",
    variant: "Fearless+",
    priceRangeINR: "₹14.5–17.5 Lakh",
    rangeKm: 465,
    engineOrBattery: "45 kWh battery",
    seatingCapacity: 5,
    images: ["/placeholders/cover-ev.svg"],
    fuelType: "electric",
  },
  {
    id: "creta",
    brand: "Hyundai",
    model: "Creta",
    variant: "SX (O)",
    priceRangeINR: "₹14–20 Lakh",
    mileageKmpl: 17.4,
    engineOrBattery: "1.5L petrol",
    seatingCapacity: 5,
    images: ["/placeholders/cover-car.svg"],
    fuelType: "petrol",
  },
  {
    id: "seltos",
    brand: "Kia",
    model: "Seltos",
    variant: "HTX",
    priceRangeINR: "₹13–20 Lakh",
    mileageKmpl: 17.0,
    engineOrBattery: "1.5L petrol",
    seatingCapacity: 5,
    images: ["/placeholders/cover-car.svg"],
    fuelType: "petrol",
  },
  {
    id: "apache-rtr-160",
    brand: "TVS",
    model: "Apache RTR 160",
    variant: "4V",
    priceRangeINR: "₹1.2–1.4 Lakh",
    mileageKmpl: 45,
    engineOrBattery: "160cc petrol",
    seatingCapacity: 2,
    images: ["/placeholders/cover-bike.svg"],
    fuelType: "petrol",
  },
  {
    id: "tiago-ev",
    brand: "Tata",
    model: "Tiago EV",
    variant: "XT LR",
    priceRangeINR: "₹8–12 Lakh",
    rangeKm: 315,
    engineOrBattery: "24 kWh battery",
    seatingCapacity: 5,
    images: ["/placeholders/cover-ev.svg"],
    fuelType: "electric",
  },
];

export function getFeaturedArticle(): Article {
  return MOCK_ARTICLES[0];
}

export function getTopStories(limit = 4): Article[] {
  return MOCK_ARTICLES.slice(1, 1 + limit);
}

export function getArticlesByCategory(
  category: Article["category"],
  limit = 4,
): Article[] {
  return MOCK_ARTICLES.filter((item) => item.category === category).slice(
    0,
    limit,
  );
}

export function getGuideArticles(limit = 4): Article[] {
  return getArticlesByCategory("buying-guide", limit);
}

export function getCategoryMeta(slug: string): Category {
  return CATEGORIES.find((item) => item.slug === slug) ?? buildCategoryMeta(slug);
}
