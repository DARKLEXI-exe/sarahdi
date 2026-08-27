/**
 * ============================================================================
 * SARAH DI — RAKSHA BANDHAN DIGITAL GIFT
 * Centralized Personal Content Configuration & Interactive Engine (No Audio)
 * ============================================================================
 * REAL UPLOADED PHOTOS, CERTIFICATE KEEPSAKE, GOLDEN THREAD JOURNEY
 */

const personalContent = {
  sisterName: "Sarah Di",
  brotherName: "Vighnesh",

  opening: {
    eyebrow: "A little something for someone very special",
    heading: "SARAH DI",
    subtitle: "Happy Raksha Bandhan 🤍",
    buttonText: "OPEN YOUR SURPRISE →"
  },

  intro: {
    quoteLine1: "Some people are given to us by life",
    quoteLine2: "and some become family by heart"
  },

  memories: [
    {
      id: "mem1",
      number: "01",
      tag: "THEN",
      year: "The Beginning",
      title: "Where It All Began",
      caption: "Small steps & innocent antics from where we started laid our foundation.",
      note: "remember this? ♡",
      metadata: "ARCHIVE / 01",
      image: "assets/photos/WhatsApp Image 2026-08-27 at 9.09.11 PM.jpeg"
    },
    {
      id: "mem2",
      number: "02",
      tag: "LAUGHTER",
      year: "Shared Secrets",
      title: "Late Night Conversations",
      caption: "Endless talks, shared secrets, and laughter that made everything better.",
      note: "that day 😂",
      metadata: "MEMORY 02 • SHARED SECRETS",
      image: "assets/photos/WhatsApp Image 2026-08-27 at 9.09.11 PM (1).jpeg"
    },
    {
      id: "mem3",
      number: "03",
      tag: "GROWING UP",
      year: "Through The Years",
      title: "Growing Up Together",
      caption: "Through every season of life, you became my truest companion.",
      note: "one of my favourites",
      metadata: "MEMORY 03 • AUGUST 2026",
      image: "assets/photos/WhatsApp Image 2026-08-27 at 9.09.11 PM (2).jpeg"
    },
    {
      id: "mem4",
      number: "04",
      tag: "SUPPORT",
      year: "Always There",
      title: "My Constant Pillar",
      caption: "Giving the best advice and standing in my corner no matter what.",
      note: "never deleting this one",
      metadata: "MEMORY 04 • ALWAYS THERE",
      image: "assets/photos/WhatsApp Image 2026-08-27 at 9.09.11 PM (3).jpeg"
    },
    {
      id: "mem5",
      number: "05",
      tag: "NOW & FOREVER",
      year: "Today",
      title: "Always & Forever",
      caption: "Today and every day, having you as my sister is my greatest comfort.",
      note: "core memory",
      metadata: "MEMORY 05 • NOW & FOREVER",
      image: "assets/photos/WhatsApp Image 2026-08-27 at 9.09.40 PM.jpeg"
    }
  ],

  appreciation: [
    { number: "01", text: "The way you care without condition", icon: "assets/illustrations/botanical-1.svg" },
    { number: "02", text: "Your endless patience & listening ear", icon: "assets/illustrations/ornament.svg" },
    { number: "03", text: "Your absolute madness & sense of humor 😂", handwritten: true },
    { number: "04", text: "The way you make heavy things feel lighter", icon: "assets/illustrations/ribbon.svg" },
    { number: "05", text: "Just being you, authentically & always", icon: "assets/illustrations/botanical-2.svg" }
  ],

  rakhi: {
    line1: "A thread is small",
    line2: "but what it represents isn't"
  },

  letter: {
    eyebrow: "A LETTER FOR SARAH DI",
    buttonText: "Open letter ✉️",
    title: "Dearest Sarah Di,",
    body: [
      "I was reflecting on how fortunate I am to have you as my sister. Life moves fast and days slip by in a blur, but moments like Raksha Bandhan remind me of the deep, quiet bond we share.",
      "Thank you for being my constant support, for listening when I needed to vent, for giving the best advice, and for forgiving my endless antics over all these years.",
      "This digital gift is a small token of my love and gratitude for everything you do and everything you are. I hope today brings a warm smile to your face.",
      "I am always here for you, no matter what."
    ],
    closing: "With all my love & gratitude,",
    signature: "Your Brother, Vighnesh"
  },

  photos: {
    center: "assets/photos/WhatsApp Image 2026-08-27 at 9.09.11 PM (3).jpeg",
    moment1: "assets/photos/WhatsApp Image 2026-08-27 at 9.09.11 PM.jpeg",
    moment2: "assets/photos/WhatsApp Image 2026-08-27 at 9.09.11 PM (1).jpeg"
  },

  games: {
    rakhi: {
      successTitle: "Tied with love 🤍",
      btnNext: "Continue →"
    },
    hidden: {
      items: [
        { id: "1", label: "Found a Heart 🤍 — You always care first." },
        { id: "2", label: "Found a Star ✦ — You bring light to everything." },
        { id: "3", label: "Found a Flower ❀ — Soft & patient, always." },
        { id: "4", label: "Found a Thread 〰 — Unbreakable bond." },
        { id: "5", label: "Found a Secret Note 📜 — You somehow always know when something is wrong." }
      ],
      successTitle: "You found them all! 🤍",
      successSub: "Just like all the little things that make Sarah... Sarah."
    },
    memoryMatch: [
      { id: "pair1", symbol: "🌸", label: "Laughter" },
      { id: "pair2", symbol: "💎", label: "Trust" },
      { id: "pair3", symbol: "🥂", label: "Memories" }
    ],
    unlock: {
      sequence: ["♡", "✦", "∞"],
      successTitle: "You unlocked it! 🔓✨",
      successSub: "Okay... you really deserve the surprise."
    }
  },

  surprise: {
    eyebrow: "Wait… there's one more thing",
    buttonText: "I knew you would click this 👀",
    title: "The Official Sibling Oath 📜",
    text: "By clicking this button, you hereby officially promise: 1. Always give me the bigger slice of cake. 2. Never bring up my embarrassing childhood stories in front of guests. 3. Continue being the undisputed best sister in the world!",
    image: "assets/photos/certificate.png"
  },

  secretPhoto: {
    heading: "Some memories don't need a caption.",
    subtitle: "Just wanted to keep this one here. 🤍",
    image: "assets/photos/WhatsApp Image 2026-08-27 at 9.09.40 PM.jpeg"
  },

  final: {
    heading: "Happy Raksha Bandhan, Sarah Di 🤍",
    subheading: "No matter how much we grow up,\nI'll always be your annoying little brother.",
    signature: "Made with love, memories & a little too much effort — Vighnesh"
  }
};

/* ============================================================================
   INTERACTIVE ENGINE
   ============================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initLoadingScreen();
  initContentBinding();
  initScrollObserver();
  initAmbientCanvas();
  initTiltEffects();
  initEnvelopeInteraction();
  initSurpriseInteraction();
  initCustomCursor();
  initSmoothScroll();
  initProgressBar();
  initEasterEgg();
  initPhotoLightbox();
  initSecretPhotoModal();
  initFinalEasterEgg();
  initGlobalClickSystem();
  
  // Initialize 4 Mini-Games
  initGameRakhi();
  initGameHidden();
  initGameMemoryMatch();
  initGameUnlock();
});

/**
 * Loading Experience Controller
 */
function initLoadingScreen() {
  const loader = document.getElementById("loading-screen");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("loaded");
    }, 150);
  }
}

/**
 * GLOBAL SCREEN-CLICK INTERACTION SYSTEM
 */
function initGlobalClickSystem() {
  let clickCount = 0;
  const maxActiveParticles = 35;

  window.addEventListener("pointerdown", (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    clickCount++;
    const x = e.clientX;
    const y = e.clientY;

    const activeElements = document.querySelectorAll(".click-ripple, .click-sparkle, .rare-heart");
    if (activeElements.length > maxActiveParticles) {
      activeElements[0].remove();
    }

    createRipple(x, y);

    let particleCount = 5;
    const target = e.target;

    if (target.closest(".polaroid-card, .photo-frame")) {
      particleCount = 8;
    } else if (target.closest("#rakhi, .draggable-rakhi-item")) {
      particleCount = 9;
    } else if (target.closest(".physical-envelope")) {
      particleCount = 7;
    } else if (target.closest(".hidden-item, .btn-symbol, .match-tile")) {
      particleCount = 7;
    }

    for (let i = 0; i < particleCount; i++) {
      createSparkle(x, y, i, particleCount);
    }

    if (clickCount % 12 === 0) {
      createRareMagic(x, y);
    }
  }, { passive: true });

  function createRipple(x, y) {
    const ripple = document.createElement("div");
    ripple.className = "click-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 850);
  }

  function createSparkle(x, y, idx, total) {
    const sparkle = document.createElement("div");
    sparkle.className = "click-sparkle";
    sparkle.textContent = idx % 2 === 0 ? "✦" : "•";

    const angle = (idx / total) * (Math.PI * 2) + (Math.random() - 0.5) * 0.5;
    const dist = Math.random() * 45 + 20;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;
    const rot = (Math.random() - 0.5) * 180;

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.setProperty("--dx", `${dx}px`);
    sparkle.style.setProperty("--dy", `${dy}px`);
    sparkle.style.setProperty("--rot", `${rot}deg`);

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 900);
  }

  function createRareMagic(x, y) {
    const magic = document.createElement("div");
    magic.className = "rare-heart";
    magic.textContent = Math.random() > 0.5 ? "♡" : "✨";
    magic.style.left = `${x}px`;
    magic.style.top = `${y}px`;
    document.body.appendChild(magic);

    setTimeout(() => magic.remove(), 1200);
  }
}

/**
 * Content Binding with Real Photos, Annotations & Certificate Image
 */
function initContentBinding() {
  setElText("hero-eyebrow", personalContent.opening.eyebrow);
  setElText("hero-heading", personalContent.opening.heading);
  setElText("hero-subtitle", personalContent.opening.subtitle);
  setElText("hero-btn-text", personalContent.opening.buttonText);

  setElText("intro-line1", personalContent.intro.quoteLine1);
  setElText("intro-line2", personalContent.intro.quoteLine2);

  const memoryTimeline = document.getElementById("memory-timeline");
  if (memoryTimeline && personalContent.memories) {
    memoryTimeline.innerHTML = personalContent.memories.map(mem => `
      <article class="polaroid-card glass-card" data-title="${escapeHtml(mem.title)}" data-caption="${escapeHtml(mem.caption)}" data-img="${escapeHtml(mem.image)}">
        <span class="polaroid-metadata">${escapeHtml(mem.metadata || '')}</span>
        <div class="polaroid-img-wrapper">
          <img src="${escapeHtml(mem.image)}" alt="${escapeHtml(mem.title)}" loading="lazy">
        </div>
        <div class="polaroid-caption-box">
          <h3 class="polaroid-caption-title">${escapeHtml(mem.title)}</h3>
          <p class="polaroid-caption-text">${escapeHtml(mem.caption)}</p>
        </div>
        ${mem.note ? `<div class="polaroid-handwritten-note">${escapeHtml(mem.note)}</div>` : ''}
      </article>
    `).join("");
  }

  const appGrid = document.getElementById("appreciation-grid");
  if (appGrid && personalContent.appreciation) {
    appGrid.innerHTML = personalContent.appreciation.map(app => `
      <div class="appreciation-card glass-card">
        <span class="appreciation-num">${escapeHtml(app.number)}</span>
        <div class="appreciation-content">
          <p class="appreciation-text ${app.handwritten ? 'handwritten-script' : ''}">${escapeHtml(app.text)}</p>
          ${app.icon ? `<img src="${escapeHtml(app.icon)}" class="appreciation-accent-icon" alt="" aria-hidden="true">` : ''}
        </div>
      </div>
    `).join("");
  }

  setElText("rakhi-line1", personalContent.rakhi.line1);
  setElText("rakhi-line2", personalContent.rakhi.line2);

  setElText("letter-eyebrow", personalContent.letter.eyebrow);
  setElText("letter-btn-text", personalContent.letter.buttonText);
  setElText("modal-letter-title", personalContent.letter.title);
  setElText("letter-closing-text", personalContent.letter.closing);
  setElText("letter-signature-text", personalContent.letter.signature);

  const letterBodyContainer = document.getElementById("letter-body-paragraphs");
  if (letterBodyContainer && personalContent.letter.body) {
    letterBodyContainer.innerHTML = personalContent.letter.body
      .map(paragraph => `<p>${escapeHtml(paragraph)}</p>`)
      .join("");
  }

  const heroCenter = document.getElementById("photo-hero-center");
  if (heroCenter && personalContent.photos?.center) {
    heroCenter.src = personalContent.photos.center;
    heroCenter.setAttribute("data-title", "Sarah Di — Featured Portrait");
    heroCenter.setAttribute("data-caption", "My constant pillar and go-to person.");
  }

  const moment1 = document.getElementById("photo-moment-1");
  if (moment1 && personalContent.photos?.moment1) {
    moment1.src = personalContent.photos.moment1;
    moment1.setAttribute("data-title", "Where It All Began");
    moment1.setAttribute("data-caption", "Cherished moments from the start.");
  }

  const moment2 = document.getElementById("photo-moment-2");
  if (moment2 && personalContent.photos?.moment2) {
    moment2.src = personalContent.photos.moment2;
    moment2.setAttribute("data-title", "Shared Laughter");
    moment2.setAttribute("data-caption", "Late night conversations and secrets.");
  }

  setElText("surprise-eyebrow", personalContent.surprise.eyebrow);
  setElText("surprise-btn-text", personalContent.surprise.buttonText);
  setElText("surprise-title", personalContent.surprise.title);
  setElText("surprise-text", personalContent.surprise.text);
  
  const surpriseImg = document.getElementById("surprise-photo");
  if (surpriseImg && personalContent.surprise.image) {
    surpriseImg.src = personalContent.surprise.image;
    surpriseImg.setAttribute("data-title", "Official Sibling Certificate");
    surpriseImg.setAttribute("data-caption", "Presented with love & gratitude.");
  }

  setElText("final-heading", personalContent.final.heading);
  const finalSub = document.getElementById("final-subheading");
  if (finalSub) {
    finalSub.innerHTML = escapeHtml(personalContent.final.subheading).replace(/\n/g, '<br>');
  }
  setElText("final-signature", personalContent.final.signature);
}

/**
 * Secret Photo Modal Controller
 */
function initSecretPhotoModal() {
  const secretStar = document.getElementById("secret-photo-star");
  const modal = document.getElementById("secret-photo-modal");
  const backdrop = document.getElementById("secret-modal-backdrop");
  const closeBtn = document.getElementById("btn-close-secret");
  const imgEl = document.getElementById("secret-photo-img");

  if (!secretStar || !modal || !imgEl) return;

  secretStar.addEventListener("click", () => {
    imgEl.src = personalContent.secretPhoto.image;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  });

  function closeSecretModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeSecretModal);
  if (backdrop) backdrop.addEventListener("click", closeSecretModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeSecretModal();
    }
  });
}

/**
 * Final Rakhi Symbol 7-Click Secret Easter Egg
 */
function initFinalEasterEgg() {
  const emblem = document.getElementById("final-rakhi-emblem");
  const toast = document.getElementById("easter-egg-toast");
  if (!emblem || !toast) return;

  let clicks = 0;
  emblem.addEventListener("click", () => {
    clicks++;
    if (clicks >= 7) {
      toast.innerHTML = `<p>Okay... that's enough 😂<br><strong>You found EVERYTHING. 🤍</strong></p>`;
      toast.classList.remove("hidden");
      setTimeout(() => toast.classList.add("hidden"), 6000);
      clicks = 0;
    }
  });
}

/**
 * Glassmorphic Photo Lightbox Modal
 */
function initPhotoLightbox() {
  const modal = document.getElementById("photo-lightbox-modal");
  const backdrop = document.getElementById("lightbox-backdrop");
  const closeBtn = document.getElementById("btn-close-lightbox");
  const imgEl = document.getElementById("lightbox-image");
  const titleEl = document.getElementById("lightbox-title");
  const captionEl = document.getElementById("lightbox-caption");

  if (!modal || !imgEl) return;

  function openLightbox(src, title, caption) {
    imgEl.src = src;
    if (titleEl) titleEl.textContent = title || "";
    if (captionEl) captionEl.textContent = caption || "";

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".polaroid-card");
    if (card) {
      const src = card.getAttribute("data-img") || card.querySelector("img")?.src;
      const title = card.getAttribute("data-title") || "";
      const caption = card.getAttribute("data-caption") || "";
      if (src) openLightbox(src, title, caption);
      return;
    }

    const frameImg = e.target.closest(".photo-frame img, .surprise-image-wrapper img");
    if (frameImg) {
      const src = frameImg.src;
      const title = frameImg.getAttribute("data-title") || "Sarah Di Memory";
      const caption = frameImg.getAttribute("data-caption") || "";
      if (src) openLightbox(src, title, caption);
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (backdrop) backdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeLightbox();
    }
  });
}

/**
 * Scroll Observer for Reveals & Checkpoints
 */
function initScrollObserver() {
  const reveals = document.querySelectorAll(".reveal-on-scroll");

  if (!("IntersectionObserver" in window)) {
    reveals.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  const nodeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const wrapper = entry.target.closest(".connected-thread-wrapper");
        if (wrapper) {
          const dot = wrapper.querySelector(".node-dot");
          if (dot) dot.classList.add("active");
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".connected-thread-wrapper").forEach(w => nodeObserver.observe(w));
}

/**
 * Floating Progress Indicator
 */
function initProgressBar() {
  const sections = document.querySelectorAll("section[data-step]");
  const textEl = document.getElementById("progress-text");
  const fillEl = document.getElementById("progress-fill");

  if (!sections.length || !textEl || !fillEl) return;

  const totalSteps = sections.length;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stepNum = parseInt(entry.target.getAttribute("data-step") || "1", 10);
        const formatted = stepNum < 10 ? `0${stepNum}` : `${stepNum}`;
        textEl.textContent = `${formatted} / ${totalSteps}`;
        fillEl.style.width = `${(stepNum / totalSteps) * 100}%`;
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => observer.observe(sec));
}

/**
 * MINI-GAME #1: Tie the Rakhi
 */
function initGameRakhi() {
  const draggable = document.getElementById("draggable-rakhi");
  const target = document.getElementById("wrist-target");
  const tapBtn = document.getElementById("btn-tap-tie");
  const successBox = document.getElementById("rakhi-success-box");
  const nextBtn = document.getElementById("btn-next-rakhi");

  if (!draggable || !target) return;

  let isTied = false;

  function completeTieRakhi() {
    if (isTied) return;
    isTied = true;
    draggable.classList.add("tied");

    const targetRect = target.getBoundingClientRect();
    const stageRect = draggable.parentElement.getBoundingClientRect();
    const centerX = (targetRect.left + targetRect.width / 2) - stageRect.left - 55;
    const centerY = (targetRect.top + targetRect.height / 2) - stageRect.top - 55;

    draggable.style.transform = `translate(${centerX}px, ${centerY}px)`;
    if (successBox) successBox.classList.remove("hidden");
  }

  if (tapBtn) tapBtn.addEventListener("click", completeTieRakhi);

  let isDragging = false;
  let startX = 0, startY = 0;
  let currentX = 0, currentY = 0;

  function onPointerDown(e) {
    if (isTied) return;
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startX = clientX - currentX;
    startY = clientY - currentY;
    draggable.style.transition = "none";
  }

  function onPointerMove(e) {
    if (!isDragging || isTied) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    currentX = clientX - startX;
    currentY = clientY - startY;
    draggable.style.transform = `translate(${currentX}px, ${currentY}px)`;

    const rakhiRect = draggable.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const dist = Math.hypot(
      (rakhiRect.left + rakhiRect.width / 2) - (targetRect.left + targetRect.width / 2),
      (rakhiRect.top + rakhiRect.height / 2) - (targetRect.top + targetRect.height / 2)
    );

    if (dist < 70) {
      isDragging = false;
      completeTieRakhi();
    }
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    draggable.style.transition = "transform 0.3s ease";
  }

  draggable.addEventListener("mousedown", onPointerDown);
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseup", onPointerUp);

  draggable.addEventListener("touchstart", onPointerDown, { passive: true });
  window.addEventListener("touchmove", onPointerMove, { passive: true });
  window.addEventListener("touchend", onPointerUp);

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      document.getElementById("appreciation")?.scrollIntoView({ behavior: "smooth" });
    });
  }
}

/**
 * MINI-GAME #2: Find the Little Things
 */
function initGameHidden() {
  const hiddenItems = document.querySelectorAll(".hidden-item");
  const countEl = document.getElementById("found-count");
  const tooltip = document.getElementById("hidden-tooltip");
  const successBox = document.getElementById("hidden-success-box");
  const nextBtn = document.getElementById("btn-next-hidden");

  let foundCount = 0;
  const totalItems = hiddenItems.length;

  hiddenItems.forEach(item => {
    item.addEventListener("click", () => {
      if (item.classList.contains("found")) return;
      item.classList.add("found");
      foundCount++;

      if (countEl) countEl.textContent = `${foundCount}`;

      const itemId = item.getAttribute("data-id");
      const match = personalContent.games.hidden.items.find(i => i.id === itemId);
      if (match && tooltip) {
        tooltip.textContent = match.label;
        tooltip.classList.remove("hidden");
        setTimeout(() => tooltip.classList.add("hidden"), 3000);
      }

      if (foundCount >= totalItems && successBox) {
        setTimeout(() => successBox.classList.remove("hidden"), 800);
      }
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      document.getElementById("rakhi")?.scrollIntoView({ behavior: "smooth" });
    });
  }
}

/**
 * MINI-GAME #3: Memory Match
 */
function initGameMemoryMatch() {
  const grid = document.getElementById("memory-cards-grid");
  const successBox = document.getElementById("memory-match-success");
  const nextBtn = document.getElementById("btn-next-match");

  if (!grid || !personalContent.games.memoryMatch) return;

  const pairs = personalContent.games.memoryMatch;
  const deck = [...pairs, ...pairs].sort(() => Math.random() - 0.5);

  grid.innerHTML = deck.map((card, idx) => `
    <div class="match-tile glass-card" data-card-id="${card.id}" data-index="${idx}">
      <div class="tile-inner">
        <div class="tile-front">✦</div>
        <div class="tile-back">${card.symbol}</div>
      </div>
    </div>
  `).join("");

  let flippedCards = [];
  let matchedPairs = 0;

  const tiles = grid.querySelectorAll(".match-tile");
  tiles.forEach(tile => {
    tile.addEventListener("click", () => {
      if (tile.classList.contains("flipped") || flippedCards.length >= 2) return;

      tile.classList.add("flipped");
      flippedCards.push(tile);

      if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        const id1 = card1.getAttribute("data-card-id");
        const id2 = card2.getAttribute("data-card-id");

        if (id1 === id2) {
          matchedPairs++;
          flippedCards = [];
          if (matchedPairs >= pairs.length && successBox) {
            setTimeout(() => successBox.classList.remove("hidden"), 600);
          }
        } else {
          setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            flippedCards = [];
          }, 1000);
        }
      }
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      document.getElementById("letter-section")?.scrollIntoView({ behavior: "smooth" });
    });
  }
}

/**
 * MINI-GAME #4: Unlock Combination Lock
 */
function initGameUnlock() {
  const symBtns = document.querySelectorAll(".btn-symbol");
  const slots = [
    document.getElementById("sym-slot-1"),
    document.getElementById("sym-slot-2"),
    document.getElementById("sym-slot-3")
  ];
  const lockIcon = document.getElementById("lock-icon");
  const successBox = document.getElementById("unlock-success-box");
  const nextBtn = document.getElementById("btn-next-unlock");

  let currentSeq = [];
  const targetSeq = personalContent.games.unlock.sequence;

  symBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentSeq.length >= 3) return;
      const sym = btn.getAttribute("data-sym");
      currentSeq.push(sym);

      const slotIdx = currentSeq.length - 1;
      if (slots[slotIdx]) slots[slotIdx].textContent = sym;

      if (currentSeq.length === 3) {
        if (JSON.stringify(currentSeq) === JSON.stringify(targetSeq)) {
          if (lockIcon) lockIcon.textContent = "🔓";
          if (successBox) setTimeout(() => successBox.classList.remove("hidden"), 400);
        } else {
          setTimeout(() => {
            currentSeq = [];
            slots.forEach(s => { if (s) s.textContent = "?"; });
          }, 800);
        }
      }
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      document.getElementById("surprise")?.scrollIntoView({ behavior: "smooth" });
    });
  }
}

/**
 * Secret Easter Egg
 */
function initEasterEgg() {
  const star = document.getElementById("secret-easter-egg");
  const toast = document.getElementById("easter-egg-toast");
  if (!star || !toast) return;

  let clickCount = 0;
  star.addEventListener("click", () => {
    clickCount++;
    if (clickCount >= 7) {
      toast.classList.remove("hidden");
      setTimeout(() => toast.classList.add("hidden"), 5000);
      clickCount = 0;
    }
  });
}

/**
 * Canvas Particles
 */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    canvas.style.display = "none";
    return;
  }

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = width < 768 ? 20 : 40;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.8,
      alpha: Math.random() * 0.4 + 0.1,
      speedY: -(Math.random() * 0.3 + 0.1),
      speedX: (Math.random() - 0.5) * 0.2,
      pulse: Math.random() * 0.02 + 0.005
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.alpha += Math.sin(Date.now() * p.pulse) * 0.005;

      if (p.y < 0) p.y = height;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(184, 153, 104, ${Math.max(0.05, Math.min(0.5, p.alpha))})`;
      ctx.shadowBlur = 6;
      ctx.shadowColor = "rgba(216, 192, 154, 0.4)";
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/**
 * 3D Tilt Micro-Interactions
 */
function initTiltEffects() {
  if (window.matchMedia("(max-width: 768px)").matches) return;

  const cards = document.querySelectorAll(".appreciation-card, .polaroid-card, .btn-symbol");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

/**
 * Envelope Interaction
 */
function initEnvelopeInteraction() {
  const envelope = document.getElementById("interactive-envelope");
  const openBtn = document.getElementById("btn-open-letter");
  const modal = document.getElementById("letter-modal");
  const closeBtn = document.getElementById("btn-close-letter");
  const backdrop = document.getElementById("letter-modal-backdrop");

  function openLetterSequence() {
    if (envelope) envelope.classList.add("open");
    setTimeout(() => {
      if (modal) {
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
      }
    }, 450);
  }

  function closeLetterModal() {
    if (modal) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    }
    if (envelope) envelope.classList.remove("open");
  }

  if (envelope) envelope.addEventListener("click", openLetterSequence);
  if (openBtn) openBtn.addEventListener("click", openLetterSequence);
  if (closeBtn) closeBtn.addEventListener("click", closeLetterModal);
  if (backdrop) backdrop.addEventListener("click", closeLetterModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeLetterModal();
    }
  });
}

/**
 * Surprise Interaction
 */
function initSurpriseInteraction() {
  const surpriseBtn = document.getElementById("btn-trigger-surprise");
  const surpriseCard = document.getElementById("surprise-reveal-card");

  if (surpriseBtn && surpriseCard) {
    surpriseBtn.addEventListener("click", () => {
      surpriseCard.classList.remove("hidden");
      setTimeout(() => {
        surpriseCard.style.opacity = "1";
        surpriseCard.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    });
  }
}

/**
 * Custom Cursor
 */
function initCustomCursor() {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");

  if (!dot || !ring || window.matchMedia("(max-width: 768px)").matches) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.opacity = "1";
    ring.style.opacity = "1";
    dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
  });

  function loop() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate(${ringX - 19}px, ${ringY - 19}px)`;
    requestAnimationFrame(loop);
  }
  loop();

  const hoverTargets = document.querySelectorAll("button, a, .glass-card, .physical-envelope, .hidden-item");
  hoverTargets.forEach(target => {
    target.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    target.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
  const heroBtn = document.getElementById("btn-hero-open");
  if (heroBtn) {
    heroBtn.addEventListener("click", () => {
      document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
    });
  }
}

function setElText(id, text) {
  const el = document.getElementById(id);
  if (el && text) el.textContent = text;
}

function escapeHtml(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
