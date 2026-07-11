# Jia Luo — Genshin-Themed Academic Homepage

Genshin Impact themed GitHub Pages academic homepage featuring **Furina**, **Sandrone**, and the **Moon Goddess**.

## ✨ Features

- 🌙 **Hero Section** — Furina splash art background with animated starfield canvas
- 🖼️ **Character Gallery** — Flip cards for Furina, Sandrone (CSS art), and Moon Goddess (Layla)
- 🖼️ **Wallpaper Strip** — Horizontal showcase of character images
- 🎵 **Music Player** — Genshin Impact relaxing OST (YouTube embed)
- 📄 **Auto-fetch arXiv** — Automatically pulls papers from arXiv API + manual fallback
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
- `ARXIV_AUTHOR` — Change arxiv search query

Edit `index.html`:
- YouTube video ID for music (search for `nGDk6JqfQu0`)
- Email address

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | Main page (all sections) |
| `styles.css` | Complete styling (Genshin palette) |
| `script.js` | Starfield, arxiv fetch, music player, interactions |
| `images/` | Furina splash, icon, Layla, Lisa character art |
| `profile-README.md` | GitHub profile README (put in `gacn2890356890-rgb` repo) |
