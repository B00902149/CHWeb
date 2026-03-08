# Coaching Hub — Landing Page

> **One App. Every Goal.**
> The official landing & waitlist website for the Coaching Hub fitness platform.

![Coaching Hub](assets/mainlogo.png)

---

## 📌 About

This is the marketing and early-access website for **Coaching Hub** — a cross-platform fitness app that unifies workout tracking, nutrition logging, health metrics, and community into a single experience.

The site is built as a lightweight static site (HTML, CSS, JS — no frameworks) and is designed to:
- Introduce the app and its core features
- Showcase real app screenshots
- Embed a live demo video
- Collect early tester signups via Formspree

---

## 🗂 Project Structure

```
COACHINGHUBWEB/
├── assets/
│   ├── logo.png           # CH icon mark
│   ├── mainlogo.png       # Full CHCoaching Hub wordmark
│   ├── Dashboard.png
│   ├── MyHealth.png
│   ├── Exercise.png
│   ├── ExerciseDemo.png
│   ├── Search.png
│   ├── Nutrition.png
│   ├── Macros.png
│   ├── Community.png
│   ├── AddPost.png
│   ├── Profile.png
│   └── Signup.png
├── cs/
│   └── styles.css         # All site styles
├── js/
│   └── app.js             # Interactions, form handling
├── index.html             # Main page
└── README.md
```

---

## ✨ Sections

| Section | Description |
|---|---|
| **Hero** | Logo, tagline, CTA, 3-phone mockup with real screenshots |
| **Problem** | Pain points the app solves |
| **Features** | 6 core feature cards |
| **Demo Video** | Embedded YouTube walkthrough |
| **App Screens** | Interactive screenshot showcase (11 screens) |
| **How It Works** | 3-step onboarding flow |
| **Waitlist** | Formspree-powered signup form |
| **Footer** | Logo + credits |

---

## 🚀 Getting Started

No build tools or dependencies required. Just open `index.html` in a browser.

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/COACHINGHUBWEB.git

# Open locally
cd COACHINGHUBWEB
open index.html
```

---

## 📬 Waitlist Form Setup (Formspree)

The waitlist form uses [Formspree](https://formspree.io) to collect signups and email them to you.

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form — you'll receive an endpoint like `https://formspree.io/f/mwvrpylz`
3. Open `js/app.js` and replace line 3:

```js
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';
```

Free tier: **50 submissions/month**. All entries are also visible in your Formspree dashboard.

---

## 🌐 Deployment

### GitHub Pages
1. Push this folder to a GitHub repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://b00902149.github.io/CHWeb/`

### Netlify (drag & drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag the `COACHINGHUBWEB` folder onto the deploy area
3. Live in ~30 seconds with a shareable URL

---

## 🎨 Design

| Token | Value |
|---|---|
| Background | `#0a1628` |
| Card | `#0d1f3c` |
| Accent Blue | `#4A9EFF` |
| Text Primary | `#FFFFFF` |
| Text Secondary | `#94A3B8` |
| Heading Font | Bebas Neue |
| Body Font | DM Sans |

Colours match the Coaching Hub mobile app (`colors.js`).

---

## 👤 Author

**Adrian Dallas** — Ulster University  
Built as part of the Coaching Hub app project.

---

## 📄 Licence

This project is private and not open for redistribution.