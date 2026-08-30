# WegwanNews.com — Mobile UX & Feature Audit Report

This report provides a detailed breakdown of **WegwanNews.com** (`https://wegwannews.com/`), analyzing its mobile design patterns, feature set, user experience, and key technical capabilities.

---

## 📱 Executive Summary

**WegwanNews.com** is a prominent Marathi digital news publication covering Maharashtra local news, technology, automotive (Vahan Bazar), solar energy, and trending updates. On mobile devices, the portal prioritizes fast content discoverability, accessible multimedia (audio news reading), and high-contrast category navigation.

---

## 🎨 1. Mobile Header & Navigation Drawer

### Header Layout
- **Left**: Hamburger Menu Icon (`☰`) for instant drawer toggle.
- **Center**: High-visibility Marathi typography (`वेगवान न्यूज`) with brand icon badge.
- **Right**: Quick Search Toggle Icon (`🔍`).

### Full-Screen Mobile Drawer (`bg-gradient-to-b from-blue-700 to-indigo-900`)
- **Top Actions**: Top-centered/right close button (`✕`) for effortless dismissal.
- **Embedded Search Input**:
  - Full-width search bar (`Search ... 🔍`) pinned inside the top section of the mobile menu drawer.
  - Enables immediate query execution without closing the navigation menu.
- **Categorized Menu List**:
  - `Home` (मुख्यपृष्ठ)
  - `Tech` (तंत्रज्ञान)
  - `Vahan Bazar` (वाहनांची बाजारपेठ / Automotive)
  - `Solar` (सौर ऊर्जा)
  - `Maharashtra` (महाराष्ट्र)
  - `Amazon Sales` (ऑफर्स व डील)
  - `Trending News` (ट्रेंडिंग बातम्या)
- **Social Connect Footer**:
  - Pinned social media channel icons: **Facebook**, **X (Twitter)**, **YouTube**, and **Instagram**.

---

## 🔊 2. Article Audio / Text-To-Speech (TTS) Voice Reader ("बातमी ऐका")

### Core Capabilities
- **Listen to Article Button**: Pinned below the main article headline or above the cover image.
- **HTML5 Audio / Web Speech Synthesis**:
  - Converts Marathi article body text into natural audio playback.
  - Ideal for readers on the move, commuters, and visually impaired users.
- **Player Controls**:
  - Play / Pause (`▶` / `⏸`).
  - Interactive playback progress slider.
  - Playback Speed Adjuster (`1x`, `1.25x`, `1.5x`, `2x`).
  - Time elapsed / remaining duration indicator (e.g., `01:15 / 03:40`).

---

## ⚡ 3. Article Reader Utilities & Engagement Tools

1. **Font Resizer Controls (`A-` / `A+`)**:
   - Allows mobile readers to increase or decrease body text font size (14px to 20px) for maximum readability.
2. **Sticky Mobile Share Bar**:
   - Pinned action bar at the bottom of mobile screens with 1-tap sharing to **WhatsApp**, **Telegram**, **Facebook**, and native mobile **Web Share API**.
3. **Estimated Read Time & Timestamp**:
   - Clean metadata showing publication time and estimated read duration (`⏱️ 2 मिनिटे वाचन`).

---

## 📊 4. Comparison Table: Wegwan News vs AutomotoNews.in

| Feature | Wegwan News (`wegwannews.com`) | AutomotoNews.in (Target Standard) |
|---|---|---|
| **Mobile Drawer Style** | Royal Blue Gradient with Embedded Search & Social Icons | Kinetic Dark Glassmorphism with Search & Social Links |
| **Audio / TTS News Reader** | Yes ("बातमी ऐका" Audio Player) | Proposed (Web Speech API / Native Audio Player) |
| **Search Access** | Header Icon + Drawer Input Bar | Header Search + Mobile Drawer Search Bar |
| **Category Structure** | General News + Tech + Vahan Bazar | Dedicated Automotive & EV Focus (Cars, Bikes, EVs) |
| **Font Resizer (`A-`/`A+`)** | Yes | Proposed for Article View |
| **Vehicle Comparison Tool** | No | Yes (Car vs Car / Bike vs Bike Compare Engine) |

---

## 🚀 5. Recommendations for AutomotoNews.in

1. **Implement Audio / Text-To-Speech (TTS) Player**: Add a native client-side Web Speech Synthesis player (`बातमी ऐका / Listen to Article`) on all article pages.
2. **Upgrade Mobile Navigation Drawer**: Redesign the mobile navigation menu with an embedded search input box, vibrant gradient background, clear touch targets, and social channel links.
3. **Add Font Resizer Controls**: Enable readers to toggle font sizes (`Small`, `Medium`, `Large`) on article reading views.
4. **Sticky Mobile Share Bar**: Add WhatsApp-first mobile sticky footer sharing on article detail pages.
