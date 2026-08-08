# Google AdSense — Apply Checklist for AutoMotoNews.in

**Live audit (reproduced):** Theme `3.0.1`, 2× canonical, 2× description, **no cookie banner**  
**Fix:** Deploy theme **v3.0.8** + Privacy Policy update + Rank Math settings

---

## Step 1 — Deploy theme (required)

1. WordPress → **Appearance → Themes → Add New → Upload Theme**
2. Upload: `Automoto_5_May_Final-folder-v3.0.8-seo.zip`
3. **Activate** (or replace existing theme folder via Hostinger File Manager)
4. Hostinger → **LiteSpeed Cache → Purge All**
5. Hard refresh homepage (Cmd+Shift+R)

**Verify in View Source:**
- `main.css?ver=3.0.8`
- **One** `rel="canonical"`
- **One** `name="description"`
- `id="amnf-cookie-consent"` present in HTML

---

## Step 2 — Privacy Policy (required)

1. Edit page: `/privacy-policy/`
2. Paste content from `PRIVACY_POLICY_ADSENSE_ADDON.md`
3. Update “Last updated” date
4. Publish

---

## Step 3 — Rank Math (required)

1. **Rank Math → General Settings**
2. Website Name: `AutoMotoNews.in` (not preview-domain.com)
3. Save changes

---

## Step 4 — WordPress Settings

1. **Settings → General**
2. Site Title: `AutoMotoNews.in` or `AutoMotoNews`
3. Tagline: clear automotive news description (English or Marathi — be consistent)

---

## Step 5 — Remove broken elements

1. **Appearance → Elements** (GeneratePress)
2. Disable/delete floating social bar with `YOUR_PACE_HERE` links

---

## Step 6 — ads.txt (already OK)

Live: `google.com, pub-2585492241467499, DIRECT, f08c47fec0942fa0`

No change needed if this line is present at https://automotonews.in/ads.txt

---

## Step 7 — Apply

1. Go to https://adsense.google.com
2. Add site: `https://automotonews.in`
3. Wait for review (days to weeks)
4. After approval, add ad code via **Ad Inserter** plugin targeting `.amnf-ad-slot` or Rank Math / theme hooks

---

## If rejected

- Read the exact reason in AdSense email
- Fix content quality, add more original posts (800+ words)
- Ensure Privacy Policy mentions AdSense
- Reapply after 2–4 weeks of improvements
