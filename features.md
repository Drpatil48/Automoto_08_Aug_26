# Features & Specification Roadmap — AutomotoNews.in

Based on the mobile UX audit of **WegwanNews.com** (`wegwannews.md`), this document outlines the key features, architecture, and implementation blueprint for **AutomotoNews.in**.

---

## 🎯 Proposed Core Features

### 1. 📱 Enhanced Mobile Navigation Drawer with Embedded Search
- **Gradient Backdrop**: Sleek dark-mode gradient (`from-zinc-950 via-indigo-950 to-zinc-900`) with glassmorphism blur.
- **Embedded Search Field**: Pinned input box at top of mobile drawer so readers can search instantly (`शोध घ्या... 🔍`).
- **Category Links**:
  - `मुख्यपृष्ठ` (Home)
  - `EV Spotlight` (इलेक्ट्रिक वाहने)
  - `Car News` (कार न्यूज)
  - `Bikes & Performance` (बाईक्स बातम्या)
  - `Upcoming Cars` (येणाऱ्या गाड्या)
  - `Guides & Tech` (ऑटो तंत्रज्ञान)
  - `Compare Tool` (वाहनांची तुलना)
- **Social Connect**: Pinned social channel icons (Facebook, X/Twitter, YouTube, Instagram) at drawer bottom.

---

### 2. 🔊 Audio / Text-To-Speech (TTS) News Player ("बातमी ऐका")
- **Component**: `<ArticleAudioPlayer text={article.body} title={article.title} />`
- **Location**: Rendered above the main article body on article detail pages.
- **Engine**: Browser-native `window.speechSynthesis` (Web Speech API) supporting Marathi (`mr-IN`) and English (`en-IN`) speech synthesis.
- **Controls**:
  - Play / Pause button (`▶` / `⏸`).
  - Progress bar showing current playback position.
  - Speed Multiplier (`1x`, `1.25x`, `1.5x`, `2x`).
  - Mute / Volume toggle.

---

### 3. 🔤 Article Font Resizer (`A-` / `A+`)
- **Controls**: Small `A-` and `A+` buttons next to the author bio / metadata.
- **State**: Toggles body text font size between `text-sm` (14px), `text-base` (16px), `text-lg` (18px), and `text-xl` (20px).
- **Persistence**: Remembers user preference in `localStorage`.

---

### 4. 📲 Sticky Mobile Article Action Bar
- Pinned bottom bar on mobile screens featuring:
  - **WhatsApp Share** (`whatsapp://send?text=...`)
  - **Native Web Share API** (`navigator.share`)
  - **Listen to News Trigger** (Scrolls to or starts Audio player)
  - **Compare Tool Shortcut**

---

## 🛠️ Implementation Plan

1. **Create Audio Reader Component**: [`components/article/ArticleAudioPlayer.tsx`](file:///Users/dhanrajpatil/AI%20-%20LLM/Cursor_Workspace/automotonews/components/article/ArticleAudioPlayer.tsx).
2. **Update Mobile Navigation Component**: [`components/layout/MobileNav.tsx`](file:///Users/dhanrajpatil/AI%20-%20LLM/Cursor_Workspace/automotonews/components/layout/MobileNav.tsx).
3. **Update Article View**: Connect Audio player and Font resizer in [`app/(category)/[category]/[slug]/page.tsx`](file:///Users/dhanrajpatil/AI%20-%20LLM/Cursor_Workspace/automotonews/app/%28category%29/%5Bcategory%5D/%5Bslug%5D/page.tsx).
4. **Verify & Build**: Execute `npm run build` and test mobile layout.
