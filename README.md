# Sarah Di — Raksha Bandhan Digital Gift 🤍

A handcrafted, dark luxury glassmorphic interactive website built as a personal Raksha Bandhan digital gift for **Sarah Di**.

---

## ✦ Key Features

- **Dark Luxury Glassmorphic Aesthetics**: Deep midnight background (`#050507`), subtle violet & deep-blue ambient lighting mesh, champagne-gold highlights, backdrop-blur glass cards, and elegant serif typography (**Cormorant Garamond** & **Inter**).
- **8 Cinematic Story Sections**:
  1. **Cinematic Hero Opening** with eyebrow, title, ambient glowing canvas, and smooth transition.
  2. **Emotional Intro / Transition** with minimal quote layout and generous negative space.
  3. **Memory Timeline** ("Then", "Somewhere Along The Way", "Now") featuring responsive glass cards and gold-accented image containers.
  4. **Things I Appreciate About You** with interactive 3D tilt micro-interactions on hover.
  5. **Rakhi Centerpiece**: Custom handcrafted geometric luxury SVG Rakhi emblem with rotating mandap rings and glowing orb.
  6. **Interactive Glass Envelope & Letter Modal**: Realistic 3D physical envelope opening (lift, 3D flap fold, warm light leak) revealing a readable handwritten-style letter overlay.
  7. **"One More Thing" Surprise Interaction**: Playful secret reveal button with custom sibling oath certificate.
  8. **Final Emotional Screen**: Atmospheric closing climax with personalized brother signature.
- **Floating Audio Player**: Discrete glass button (`♪`/`♫`) in the bottom-right with equalizer wave animation (never autoplays; includes graceful toast notification if audio file is not provided).
- **Desktop Custom Cursor**: Smooth magnetic dot and trailing ring.
- **Mobile-First & Responsive**: Built and tested for mobile, tablet, and desktop viewports.
- **Accessibility & Motion**: `prefers-reduced-motion` support and ARIA semantic tags.

---

## ✦ How to Customize Personal Content

All text, memory descriptions, letter content, photo paths, and audio settings are centralized in a single location at the very top of `script.js` in the `personalContent` object:

```javascript
const personalContent = {
  sisterName: "Sarah Di",
  brotherName: "Vighnesh",
  
  // 1. Opening
  opening: { ... },

  // 2. Memory Timeline (Add or change photos in assets/photos/)
  memories: [
    {
      id: "then",
      number: "01",
      tag: "THEN",
      year: "The Beginning",
      title: "Small Steps & Cherished Memories",
      caption: "...",
      image: "assets/photos/memory_then.svg" // Replace with "assets/photos/my_real_photo_1.jpg"
    },
    ...
  ],

  // 3. Letter Content
  letter: {
    title: "Dearest Sarah Di,",
    body: [
      "Paragraph 1...",
      "Paragraph 2..."
    ],
    closing: "With all my love & gratitude,",
    signature: "Your Brother, Vighnesh"
  },

  // 4. Audio Path
  audio: {
    audioPath: "assets/audio/ambient.mp3"
  }
};
```

---

## ✦ Asset Replacement Guide

- **Replacing Memories/Surprise Photos**:
  Place your real photographs inside `assets/photos/` (e.g. `memory1.jpg`, `memory2.jpg`, `surprise.jpg`) and update the `image` fields in `script.js`.
- **Replacing Ambient Audio**:
  Place your `.mp3` audio track inside `assets/audio/ambient.mp3` or update `audioPath` in `script.js`.

---

## ✦ Running the Website Locally

You can preview the site in any web browser by opening `index.html` directly or running a local HTTP server:

### Using Python:
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

---

*Made with love, memories & a little too much effort — Vighnesh*
