# Jia Luo — Genshin-Themed Academic Homepage

Genshin Impact themed GitHub Pages academic homepage featuring **Furina**, **Sandrone**, and the **Moon Goddess**.

## ✨ Features

- 🌙 **Hero Section** — Furina splash art background with animated starfield canvas
- 🖼️ **Character Gallery** — Flip cards for Furina, Sandrone (CSS art), and Moon Goddess (Layla)
- 🖼️ **Wallpaper Strip** — Horizontal showcase of character images
- 🎵 **Music Player** — Genshin Impact relaxing OST (YouTube embed)
- 📄 **ORCID publication records** — Five publications compiled from public ORCID metadata and IEEE Xplore; two existing research projects listed separately
- ⚙️ **Sandrone CSS Art** — Mechanical puppet with animated gears (no external image needed)
- 📱 **Fully Responsive** — Works on desktop, tablet, and mobile
- 🌐 **All English** — International-friendly presentation

## 🚀 Deploy

1. Create repo: **`gacn2890356890-rgb.github.io`** (Public)
2. Push all files to the `main` branch
3. Settings → Pages → Source: `main` → `/ (root)` → Save
4. Visit: `https://gacn2890356890-rgb.github.io`

```bash
git init && git add . && git commit -m "Initial" && git branch -M main
git remote add origin https://github.com/gacn2890356890-rgb/gacn2890356890-rgb.github.io.git
git push -u origin main
```

## 🎨 Design

| Element | Character | Theme |
|---------|-----------|-------|
| Hero background | Furina | Hydro blue, water elegance |
| Gallery flip card 1 | Furina | "Every paper a performance" |
| Gallery flip card 2 | Sandrone | Mechanical gears, puppet, precision |
| Gallery flip card 3 | Moon Goddess (Layla) | Celestial, starry night |
| Wallpaper strip | All characters | Horizontal showcase |
| Publications | Sandrone | Bronze gear, mechanical filter |

## ⚙️ Configuration

Edit `script.js`:
- `MANUAL_PAPERS[]` — Add/update your papers
- Publication fields: `date`, `doi`, authors, venue, and `isProject`; `id` is reserved for an arXiv ID
- Records are curated locally instead of fetched by author name; changes require a commit
- Education and publication metadata last checked against [ORCID](https://orcid.org/0009-0007-3191-1375) on September 19, 2026
- Existing research projects, BISP affiliation, research interests, and service are retained from the prior homepage; they are not additions from ORCID

Edit `index.html`:
- YouTube video ID for music (search for `nGDk6JqfQu0`)
- Email address

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | Main page (all sections) |
| `styles.css` | Complete styling (Genshin palette) |
| `script.js` | Starfield, publication records, music player, interactions |
| `images/` | Furina splash, icon, Layla, Lisa character art |
| `profile-README.md` | GitHub profile README (put in `gacn2890356890-rgb` repo) |

The additional IEEE Signal Processing Letters article is verified against [IEEE Xplore](https://ieeexplore.ieee.org/abstract/document/11663390): Jia Luo, “ReflectiChain: Grounding Long-Horizon LLM Planning against Semantic-Execution Drift,” Early Access, pp. 1–5, August 24, 2026, DOI: 10.1109/LSP.2026.3726840.
