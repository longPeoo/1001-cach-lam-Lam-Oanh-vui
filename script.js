const DEFAULT_MEDIA_ITEMS = [
  { type: "image", src: "https://picsum.photos/seed/lam-oanh-01/1000/700" },
  { type: "image", src: "https://picsum.photos/seed/lam-oanh-02/1000/700" },
  { type: "image", src: "https://picsum.photos/seed/lam-oanh-03/1000/700" },
  {
    type: "video",
    src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    muted: true
  }
];

const QUOTES = [
  { type: "love", text: "Yeu em la viec anh lam deu dan hon ca check mail sang." },
  { type: "love", text: "Anh khong gioi hua nhieu, nhung gioi o ben em that lau." },
  {
    type: "love",
    text: "Em la ly do khien ngay thuong cua anh thanh ngay dac biet."
  },
  { type: "love", text: "Trai tim anh chon em nhanh nhu wifi tu ket noi o nha." },
  { type: "love", text: "Khong can drama, co em la du plot twist hanh phuc roi." },
  { type: "love", text: "Neu moi cai om la mot loi cam on, anh no em ca doi." },
  { type: "love", text: "Anh thich cach em xuat hien va lam moi thu diu lai." },
  { type: "love", text: "Yeu em khong phai trend, ma la phien ban on dinh nhat." },
  { type: "flirt", text: "Em co map khong? Anh lac tu mat em toi tim em luon roi." },
  { type: "flirt", text: "Anh khong ban tra sua, nhung co topping la su chieu em." },
  {
    type: "flirt",
    text: "Cho anh xin mot nu cuoi, anh tra bang combo nho em ca ngay."
  },
  { type: "flirt", text: "Em la notification duy nhat anh muon bat ca ngay." },
  { type: "flirt", text: "Neu tha thinh la mon hoc, anh muon hoc chung lop voi em." },
  { type: "flirt", text: "Em dung im nhe, de anh duoi theo em bang ca su tu te." },
  { type: "flirt", text: "Em khong phai idol, ma sao tim anh cu auto fan cung?" },
  { type: "flirt", text: "Anh choi he nghiem tuc, nhung gap em thi bat mode dang yeu." }
];

const STORAGE_KEY = "lam-oanh-media-items";
const LEGACY_STORAGE_KEY = "lam-oanh-gallery-images";

const quoteGrid = document.querySelector("#quote-grid");
const spotlightQuote = document.querySelector("#spotlight-quote");
const spotlightTag = document.querySelector("#spotlight-tag");
const randomQuoteBtn = document.querySelector("#new-spotlight");

const mediaGrid = document.querySelector("#media-grid");
const mediaForm = document.querySelector("#media-form");
const mediaTypeSelect = document.querySelector("#media-type");
const mediaPathInput = document.querySelector("#media-path");
const resetMediaBtn = document.querySelector("#reset-media");

const introScreen = document.querySelector("#intro-screen");
const enterSiteBtn = document.querySelector("#enter-site");
const toggleFireworksBtn = document.querySelector("#toggle-fireworks");
const fireworkCanvas = document.querySelector("#firework-canvas");

let mediaItems = loadMediaItems();
let fireworksEnabled = true;

const fireworks = {
  ctx: fireworkCanvas.getContext("2d"),
  width: window.innerWidth,
  height: window.innerHeight,
  particles: [],
  lastBurst: 0,
  running: false,
  rafId: null
};

function getTypeLabel(type) {
  return type === "love" ? "#tinhyeu" : "#thathinh";
}

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderQuotes() {
  const sortedQuotes = shuffle(QUOTES);
  quoteGrid.innerHTML = sortedQuotes
    .map(
      (quote) => `
        <article class="quote-card">
          <p>${quote.text}</p>
          <span class="tag ${quote.type === "love" ? "tag-love" : "tag-flirt"}">${getTypeLabel(
        quote.type
      )}</span>
        </article>
      `
    )
    .join("");
}

function pickSpotlightQuote() {
  const randomIndex = Math.floor(Math.random() * QUOTES.length);
  const quote = QUOTES[randomIndex];
  spotlightQuote.textContent = quote.text;
  spotlightTag.textContent = getTypeLabel(quote.type);
}

function isValidMediaPath(path) {
  if (!path || path.includes("<") || path.includes(">")) {
    return false;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    try {
      new URL(path);
      return true;
    } catch (error) {
      return false;
    }
  }

  return /^(\.?\.?\/)?[\w\-./ ]+\.[\w]+$/i.test(path);
}

function normalizeMediaItem(item) {
  if (!item || typeof item !== "object") {
    return null;
  }

  if (typeof item.src !== "string" || !isValidMediaPath(item.src.trim())) {
    return null;
  }

  if (item.type !== "image" && item.type !== "video") {
    return null;
  }

  return {
    type: item.type,
    src: item.src.trim(),
    muted: item.type === "video" ? Boolean(item.muted ?? true) : true
  };
}

function saveMediaItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mediaItems));
}

function migrateLegacyImages() {
  const savedLegacy = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (!savedLegacy) {
    return null;
  }

  try {
    const parsed = JSON.parse(savedLegacy);
    if (Array.isArray(parsed)) {
      const converted = parsed
        .map((src) =>
          normalizeMediaItem({
            type: "image",
            src
          })
        )
        .filter(Boolean);
      if (converted.length > 0) {
        return converted;
      }
    }
  } catch (error) {
    console.warn("Cannot migrate legacy image list:", error);
  }

  return null;
}

function loadMediaItems() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        const normalized = parsed.map(normalizeMediaItem).filter(Boolean);
        if (normalized.length > 0) {
          return normalized;
        }
      }
    } catch (error) {
      console.warn("Cannot parse saved media:", error);
    }
  }

  const migrated = migrateLegacyImages();
  if (migrated) {
    return migrated;
  }

  return DEFAULT_MEDIA_ITEMS.map((item) => ({ ...item }));
}

function createMediaControlButton(label, action, index, disabled = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.action = action;
  button.dataset.index = String(index);
  button.textContent = label;
  button.disabled = disabled;
  return button;
}

function createMediaCard(item, index) {
  const card = document.createElement("article");
  card.className = "media-card";
  card.dataset.index = String(index);

  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.src;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.muted = Boolean(item.muted);
    card.append(video);
  } else {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = `Anh bat ngo ${index + 1}`;
    img.loading = "lazy";
    card.append(img);
  }

  const controls = document.createElement("div");
  controls.className = "media-controls";

  if (item.type === "video") {
    controls.append(
      createMediaControlButton(item.muted ? "Bat tieng" : "Tat tieng", "toggle-audio", index)
    );
  } else {
    controls.append(createMediaControlButton("Anh tinh", "noop", index, true));
  }

  controls.append(createMediaControlButton("Xoa", "remove", index));
  card.append(controls);

  return card;
}

function renderMedia() {
  mediaGrid.innerHTML = "";

  if (mediaItems.length === 0) {
    const note = document.createElement("p");
    note.className = "section-note";
    note.textContent = "Chua co media nao, them duong dan de bat dau.";
    mediaGrid.append(note);
    return;
  }

  mediaItems.forEach((item, index) => {
    mediaGrid.append(createMediaCard(item, index));
  });
}

function addMediaItem(type, src) {
  mediaItems = [
    {
      type,
      src,
      muted: type === "video"
    },
    ...mediaItems
  ];

  saveMediaItems();
  renderMedia();
}

function removeMediaItem(index) {
  mediaItems = mediaItems.filter((_, i) => i !== index);
  saveMediaItems();
  renderMedia();
}

function toggleVideoAudio(index, button) {
  const card = mediaGrid.querySelector(`.media-card[data-index="${index}"]`);
  if (!card) {
    return;
  }

  const video = card.querySelector("video");
  if (!(video instanceof HTMLVideoElement)) {
    return;
  }

  video.muted = !video.muted;
  mediaItems[index].muted = video.muted;
  button.textContent = video.muted ? "Bat tieng" : "Tat tieng";
  saveMediaItems();
}

function closeIntro() {
  introScreen.classList.add("hidden");
  document.body.classList.remove("intro-active");
}

function resizeFireworkCanvas() {
  fireworks.width = window.innerWidth;
  fireworks.height = window.innerHeight;
  fireworkCanvas.width = fireworks.width;
  fireworkCanvas.height = fireworks.height;
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function spawnBurst() {
  const x = randomBetween(fireworks.width * 0.15, fireworks.width * 0.85);
  const y = randomBetween(fireworks.height * 0.1, fireworks.height * 0.55);
  const colors = ["#ff3aa7", "#ff9ad9", "#ffd4ef", "#ff74c5", "#ffd9ef"];
  const count = 65;

  for (let i = 0; i < count; i += 1) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const speed = randomBetween(1.4, 4.6);
    const vx = Math.sin(phi) * Math.cos(theta) * speed;
    const vy = Math.cos(phi) * speed;
    const vz = Math.sin(phi) * Math.sin(theta) * speed;

    fireworks.particles.push({
      x,
      y,
      z: randomBetween(-80, 120),
      vx,
      vy,
      vz,
      life: randomBetween(45, 75),
      maxLife: randomBetween(45, 75),
      size: randomBetween(1.6, 3.8),
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
}

function drawParticle(particle) {
  const perspective = 420 / (420 + particle.z);
  if (perspective <= 0) {
    return;
  }

  const screenX = (particle.x - fireworks.width / 2) * perspective + fireworks.width / 2;
  const screenY = (particle.y - fireworks.height / 2) * perspective + fireworks.height / 2;
  const radius = particle.size * perspective;
  const alpha = Math.max(0, particle.life / particle.maxLife);

  fireworks.ctx.beginPath();
  fireworks.ctx.fillStyle = hexToRgba(particle.color, alpha);
  fireworks.ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
  fireworks.ctx.fill();
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const bigint = parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function updateParticles() {
  fireworks.particles = fireworks.particles.filter((particle) => particle.life > 0);

  fireworks.particles.forEach((particle) => {
    particle.life -= 1;
    particle.vy += 0.04;
    particle.vx *= 0.99;
    particle.vz *= 0.99;
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.z += particle.vz;
    drawParticle(particle);
  });
}

function animateFireworks(time) {
  if (!fireworks.running) {
    return;
  }

  fireworks.ctx.clearRect(0, 0, fireworks.width, fireworks.height);

  if (fireworksEnabled && time - fireworks.lastBurst > 420) {
    spawnBurst();
    fireworks.lastBurst = time;
  }

  updateParticles();
  fireworks.rafId = window.requestAnimationFrame(animateFireworks);
}

function startFireworks() {
  if (fireworks.running) {
    return;
  }
  fireworks.running = true;
  fireworks.rafId = window.requestAnimationFrame(animateFireworks);
}

function stopFireworks() {
  fireworks.running = false;
  if (fireworks.rafId) {
    window.cancelAnimationFrame(fireworks.rafId);
  }
  fireworks.ctx.clearRect(0, 0, fireworks.width, fireworks.height);
}

function updateFireworkButton() {
  toggleFireworksBtn.textContent = fireworksEnabled ? "Tat phao hoa 3D" : "Bat phao hoa 3D";
}

mediaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const type = mediaTypeSelect.value;
  const src = mediaPathInput.value.trim();

  if (!isValidMediaPath(src)) {
    mediaPathInput.setCustomValidity("Duong dan chua hop le. Thu URL day du hoac ./assets/media/ten-file");
    mediaPathInput.reportValidity();
    return;
  }

  mediaPathInput.setCustomValidity("");
  addMediaItem(type, src);
  mediaForm.reset();
  mediaTypeSelect.value = "image";
});

mediaGrid.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  const action = target.dataset.action;
  const index = Number(target.dataset.index);
  if (Number.isNaN(index)) {
    return;
  }

  if (action === "remove") {
    removeMediaItem(index);
  } else if (action === "toggle-audio") {
    toggleVideoAudio(index, target);
  }
});

resetMediaBtn.addEventListener("click", () => {
  mediaItems = DEFAULT_MEDIA_ITEMS.map((item) => ({ ...item }));
  saveMediaItems();
  renderMedia();
});

randomQuoteBtn.addEventListener("click", pickSpotlightQuote);

enterSiteBtn.addEventListener("click", closeIntro);

toggleFireworksBtn.addEventListener("click", () => {
  fireworksEnabled = !fireworksEnabled;
  updateFireworkButton();

  if (fireworksEnabled) {
    startFireworks();
  } else {
    stopFireworks();
  }
});

window.addEventListener("resize", resizeFireworkCanvas);

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  fireworksEnabled = false;
}

document.body.classList.add("intro-active");
resizeFireworkCanvas();
updateFireworkButton();

renderQuotes();
pickSpotlightQuote();
renderMedia();

if (fireworksEnabled) {
  startFireworks();
}
