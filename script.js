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

// 50 spotlight placeholders: sua tung item de gan cau noi + anh/video cu the.
const SPOTLIGHT_ITEMS = [
  { id: "01", type: "loi-chuc", text: "Ảnh này đẹp thôi anh không biết ý nghĩa", mediaType: "image", mediaSrc: "./assets/media/31.jpg" },
  { id: "02", type: "doc-thoai", text: "Rân chơi pắn thuốc lào :)", mediaType: "image", mediaSrc: "./assets/media/1.jpg" },
  { id: "03", type: "loi-chuc", text: "Áp lực quá thì vào đây ngắm ảnh nhé, không thì nói anh cũng được!", mediaType: "image", mediaSrc: "./assets/media/32.jpg" },
  { id: "04", type: "doc-thoai", text: "Chỉ là 1 cuộc nói chuyện vô tri", mediaType: "video", mediaSrc: "./assets/media/2-4.MP4" },
  { id: "05", type: "loi-chuc", text: "++++++++ thật nhiều niềm vui", mediaType: "image", mediaSrc: "./assets/media/33.jpg" },
  { id: "06", type: "doc-thoai", text: "Lam Oanh và cơ bắp cuồn cuộn của cô ấy", mediaType: "image", mediaSrc: "./assets/media/2.jpg" },
  { id: "07", type: "loi-chuc", text: "Ngắm biển cho nó trầm lại tí nếu cần nhé", mediaType: "image", mediaSrc: "./assets/media/34.jpg" },
  { id: "08", type: "doc-thoai", text: "+1 thông tin Lam Oanh từng học Y", mediaType: "image", mediaSrc: "./assets/media/3.jpg" },
  { id: "09", type: "doc-thoai", text: "Không rõ là Lam Oanh thích được gọi là 🐰 có đúng k", mediaType: "image", mediaSrc: "./assets/media/24.jpg" },
  { id: "10", type: "doc-thoai", text: "Lam Oanh thích uống trà đá TN", mediaType: "image", mediaSrc: "./assets/media/4.jpg" },
  { id: "11", type: "loi-chuc", text: "Mong em đến được nhiều nơi khám phá được nhiều thứ em thích", mediaType: "image", mediaSrc: "./assets/media/35.jpg" },
  { id: "12", type: "doc-thoai", text: "Lam Oanh thích chế ảnh (cũng chưa chắc lắm)", mediaType: "image", mediaSrc: "./assets/media/5.jpg" },
  { id: "13", type: "loi-chuc", text: "Mỗi bước chân đều có người đồng hành nè", mediaType: "image", mediaSrc: "./assets/media/8.jpg" },
  { id: "14", type: "doc-thoai", text: "Lam Oanh thích những điều dễ thương", mediaType: "image", mediaSrc: "./assets/media/6.jpg" },
  { id: "15", type: "loi-chuc", text: "Cứ iu đời vậy là tốt rui!!!!", mediaType: "image", mediaSrc: "./assets/media/36.jpg" },
  { id: "16", type: "doc-thoai", text: "Lam Oanh giúp đỡ mọi người", mediaType: "image", mediaSrc: "./assets/media/7.jpg" },
  { id: "17", type: "loi-chuc", text: "Iu bản thân, iu đời, iu vạn vật", mediaType: "image", mediaSrc: "./assets/media/39.jpg" },
  { id: "18", type: "doc-thoai", text: "Trông vậy mà ở ngoài rõ hiền lành", mediaType: "image", mediaSrc: "./assets/media/9.jpg" },
  { id: "19", type: "loi-chuc", text: "Ngắm cảnh đi để cho thư giãn đầu óc (nếu cần nhá)", mediaType: "image", mediaSrc: "./assets/media/38.jpg" },
  { id: "20", type: "doc-thoai", text: "Lam Oanh lập đàn cầu nắng 🤣🤣", mediaType: "video", mediaSrc: "./assets/media/3-2.mp4" },
  { id: "21", type: "loi-chuc", text: "Thành công trong mọi thứ nè", mediaType: "image", mediaSrc: "./assets/media/40.jpg" },
  { id: "22", type: "doc-thoai", text: "Anh biết Lam Oanh có 2 hình xăm", mediaType: "image", mediaSrc: "./assets/media/10.jpg" },
  { id: "23", type: "loi-chuc", text: "Nếu bực điều gì thì: nhịn 1 giờ sóng yên gió lặng, lui 1 bước biển rộng trời cao", mediaType: "image", mediaSrc: "./assets/media/41.jpg" },
  { id: "24", type: "doc-thoai", text: "Lam Oanh và anh Say (anh k nhớ rõ tên)", mediaType: "video", mediaSrc: "./assets/media/3-1.MP4" },
  { id: "25", type: "loi-chuc", text: "Con này trông buồn cười nên hi vọng đủ làm em cười", mediaType: "image", mediaSrc: "./assets/media/42.jpg" },
  { id: "26", type: "doc-thoai", text: "Lam Oanh và cốc matcha à?", mediaType: "image", mediaSrc: "./assets/media/11.jpg" },
  { id: "27", type: "loi-chuc", text: "Ăn tất cả món ngon mà mình thích!", mediaType: "image", mediaSrc: "./assets/media/43.jpg" },
  { id: "28", type: "doc-thoai", text: "Xinh rồi không có gì để bàn cả!", mediaType: "image", mediaSrc: "./assets/media/12.jpg" },
  { id: "29", type: "loi-chuc", text: "Chân cứng đá mềm trên mọi hành trình ha", mediaType: "image", mediaSrc: "./assets/media/50.jpg" },
  { id: "30", type: "doc-thoai", text: "Cổ vui mà cười tít mắt 😁", mediaType: "image", mediaSrc: "./assets/media/13.jpg" },
  { id: "31", type: "loi-chuc", text: "Luôn có tấm lòng lương thiện giúp đỡ mọi người nữa nè", mediaType: "image", mediaSrc: "./assets/media/49.jpg" },
  { id: "32", type: "doc-thoai", text: "Lam Oanh đi làm chụp vội 1 tấm à 😅", mediaType: "image", mediaSrc: "./assets/media/14.jpg" },
  { id: "33", type: "loi-chuc", text: "Một em chó bé thôi không có gì nhiều", mediaType: "image", mediaSrc: "./assets/media/51.jpg" },
  { id: "34", type: "doc-thoai", text: "Bao giờ ra HN nháy số: +84986555000 nhé", mediaType: "image", mediaSrc: "./assets/media/15.jpg" },
  { id: "35", type: "loi-chuc", text: "Có những người bạn siêu tốt bụng, siêu đáng yêu", mediaType: "image", mediaSrc: "./assets/media/47.jpg" },
  { id: "36", type: "doc-thoai", text: "Đeo hẳn ngón áp út không biết có chồng chưa, thôi kệ", mediaType: "image", mediaSrc: "./assets/media/16.jpg" },
  { id: "37", type: "loi-chuc", text: "Xin phép cho tí người làm vào khung hình nhé ^^", mediaType: "image", mediaSrc: "./assets/media/50.jpg" },
  { id: "38", type: "doc-thoai", text: "Ôm mèo thì có thích mèo khum z", mediaType: "image", mediaSrc: "./assets/media/17.jpg" },
  { id: "39", type: "loi-chuc", text: "Vững tin vào chính mình!", mediaType: "image", mediaSrc: "./assets/media/45.jpg" },
  { id: "40", type: "doc-thoai", text: "Anh cũng biết chơi bi-a đấy 😊", mediaType: "image", mediaSrc: "./assets/media/18.jpg" },
  { id: "41", type: "loi-chuc", text: "Tích cực và yêu đời ha!", mediaType: "image", mediaSrc: "./assets/media/30.jpg" },
  { id: "42", type: "doc-thoai", text: "Trông ảnh này hơi buồn nhá", mediaType: "image", mediaSrc: "./assets/media/19.jpg" },
  { id: "43", type: "loi-chuc", text: "Luôn vui vẻ và hạnh phúc nè", mediaType: "image", mediaSrc: "./assets/media/29.jpg" },
  { id: "44", type: "doc-thoai", text: "Chịu chả biết Lam Oanh ăn gì", mediaType: "image", mediaSrc: "./assets/media/20.jpg" },
  { id: "45", type: "loi-chuc", text: "Buổi tối thì ngủ thật ngoan nhé! 🥱🥱", mediaType: "image", mediaSrc: "./assets/media/27.jpg" },
  { id: "46", type: "doc-thoai", text: "Sống 26 năm giờ mới chứng kiến nhan sắc gái TN", mediaType: "image", mediaSrc: "./assets/media/21.jpg" },
  { id: "47", type: "loi-chuc", text: "Chúc em luôn bình yên", mediaType: "image", mediaSrc: "./assets/media/28.jpg" },
  { id: "48", type: "doc-thoai", text: "Vẫn là cốc Matcha (chắc là thích Matcha)", mediaType: "image", mediaSrc: "./assets/media/22.jpg" },
  { id: "49", type: "loi-chuc", text: "Chào buổi sáng em! Chúc Lam Oanh buổi sáng zui zẻ", mediaType: "image", mediaSrc: "./assets/media/26.jpg" },
  { id: "50", type: "doc-thoai", text: "Lam Oanh thích ăn cơm", mediaType: "image", mediaSrc: "./assets/media/23.jpg" }
];

const STORAGE_KEY = "lam-oanh-media-items";
const LEGACY_STORAGE_KEY = "lam-oanh-gallery-images";

const quoteGrid = document.querySelector("#quote-grid");
const spotlightQuote = document.querySelector("#spotlight-quote");
const spotlightTag = document.querySelector("#spotlight-tag");
const spotlightMedia = document.querySelector("#spotlight-media");
const randomSpotlightBtn = document.querySelector("#random-spotlight");

const mediaGrid = document.querySelector("#media-grid");
const mediaForm = document.querySelector("#media-form");
const mediaTypeSelect = document.querySelector("#media-type");
const mediaPathInput = document.querySelector("#media-path");
const resetMediaBtn = document.querySelector("#reset-media");

const introScreen = document.querySelector("#intro-screen");
const enterSiteBtn = document.querySelector("#enter-site");
const fireworkCanvas = document.querySelector("#firework-canvas");
const bouncingHeart = document.querySelector("#bouncing-heart");

let mediaItems = loadMediaItems();

const fireworks = {
  ctx: fireworkCanvas.getContext("2d"),
  width: window.innerWidth,
  height: window.innerHeight,
  particles: [],
  lastBurst: 0,
  running: false,
  rafId: null
};

const heartMotion = {
  x: Math.max(0, window.innerWidth * 0.48),
  y: Math.max(0, window.innerHeight * 0.22),
  vx: 2.9,
  vy: 2.35,
  running: false,
  rafId: null
};

function getTypeLabel(type) {
  if (type === "loi-chuc" || type === "love") {
    return "LỜI CHÚC";
  }

  if (type === "doc-thoai" || type === "flirt") {
    return "ĐỘC THOẠI";
  }

  return "ĐỘC THOẠI";
}

function isLoiChucType(type) {
  return type === "loi-chuc" || type === "love";
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
  if (!quoteGrid) {
    return;
  }

  const sortedQuotes = shuffle(QUOTES);
  quoteGrid.innerHTML = sortedQuotes
    .map(
      (quote) => `
        <article class="quote-card">
          <p>${quote.text}</p>
          <span class="tag ${isLoiChucType(quote.type) ? "tag-love" : "tag-flirt"}">${getTypeLabel(
        quote.type
      )}</span>
        </article>
      `
    )
    .join("");
}

function renderSpotlightMedia(item) {
  if (!spotlightMedia) {
    return;
  }

  spotlightMedia.innerHTML = "";
  if (!item || !item.mediaSrc) {
    return;
  }

  if (item.mediaType === "video") {
    const video = document.createElement("video");
    video.src = item.mediaSrc;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    spotlightMedia.append(video);
    return;
  }

  const img = document.createElement("img");
  img.src = item.mediaSrc;
  img.alt = `Spotlight media ${item.id}`;
  img.loading = "lazy";
  spotlightMedia.append(img);
}

function pickSpotlightQuote() {
  const randomIndex = Math.floor(Math.random() * SPOTLIGHT_ITEMS.length);
  const spotlightItem = SPOTLIGHT_ITEMS[randomIndex];
  spotlightQuote.textContent = spotlightItem.text;
  spotlightTag.textContent = getTypeLabel(spotlightItem.type);
  renderSpotlightMedia(spotlightItem);
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
    img.alt = `áº¢nh báº¥t ngá» ${index + 1}`;
    img.loading = "lazy";
    card.append(img);
  }

  const controls = document.createElement("div");
  controls.className = "media-controls";

  if (item.type === "video") {
    controls.append(
      createMediaControlButton(item.muted ? "Báº­t tiáº¿ng" : "Táº¯t tiáº¿ng", "toggle-audio", index)
    );
  } else {
    controls.append(createMediaControlButton("áº¢nh tÄ©nh", "noop", index, true));
  }

  controls.append(createMediaControlButton("XÃ³a", "remove", index));
  card.append(controls);

  return card;
}

function renderMedia() {
  if (!mediaGrid) {
    return;
  }

  mediaGrid.innerHTML = "";

  if (mediaItems.length === 0) {
    const note = document.createElement("p");
    note.className = "section-note";
    note.textContent = "ChÆ°a cÃ³ media nÃ o, thÃªm Ä‘Æ°á»ng dáº«n Ä‘á»ƒ báº¯t Ä‘áº§u.";
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
  if (!mediaGrid) {
    return;
  }

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
  button.textContent = video.muted ? "Báº­t tiáº¿ng" : "Táº¯t tiáº¿ng";
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

function getHeartMaxX() {
  return Math.max(0, window.innerWidth - bouncingHeart.offsetWidth);
}

function getHeartMaxY() {
  return Math.max(0, window.innerHeight - bouncingHeart.offsetHeight);
}

function placeHeart() {
  bouncingHeart.style.transform = `translate3d(${heartMotion.x}px, ${heartMotion.y}px, 0)`;
}

function clampHeartInsideScreen() {
  heartMotion.x = Math.min(Math.max(heartMotion.x, 0), getHeartMaxX());
  heartMotion.y = Math.min(Math.max(heartMotion.y, 0), getHeartMaxY());
  placeHeart();
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function spawnBurst() {
  const x = randomBetween(fireworks.width * 0.15, fireworks.width * 0.85);
  const y = randomBetween(fireworks.height * 0.08, fireworks.height * 0.55);
  const colors = ["#ff3aa7", "#ff9ad9", "#ffd4ef", "#ff74c5", "#ffd9ef"];
  const count = 120;

  for (let i = 0; i < count; i += 1) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const speed = randomBetween(2.6, 7.4);
    const life = randomBetween(62, 102);
    const vx = Math.sin(phi) * Math.cos(theta) * speed;
    const vy = Math.cos(phi) * speed;
    const vz = Math.sin(phi) * Math.sin(theta) * speed;

    fireworks.particles.push({
      x,
      y,
      z: randomBetween(-140, 180),
      vx,
      vy,
      vz,
      life,
      maxLife: life,
      size: randomBetween(3.2, 7.8),
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
}

function drawParticle(particle) {
  const perspective = 520 / (520 + particle.z);
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
    particle.vy += 0.055;
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

  if (time - fireworks.lastBurst > 280) {
    spawnBurst();
    if (Math.random() > 0.55) {
      spawnBurst();
    }
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

function animateHeart() {
  if (!heartMotion.running) {
    return;
  }

  heartMotion.x += heartMotion.vx;
  heartMotion.y += heartMotion.vy;

  const maxX = getHeartMaxX();
  const maxY = getHeartMaxY();

  if (heartMotion.x <= 0) {
    heartMotion.x = 0;
    heartMotion.vx = Math.abs(heartMotion.vx);
  } else if (heartMotion.x >= maxX) {
    heartMotion.x = maxX;
    heartMotion.vx = -Math.abs(heartMotion.vx);
  }

  if (heartMotion.y <= 0) {
    heartMotion.y = 0;
    heartMotion.vy = Math.abs(heartMotion.vy);
  } else if (heartMotion.y >= maxY) {
    heartMotion.y = maxY;
    heartMotion.vy = -Math.abs(heartMotion.vy);
  }

  placeHeart();
  heartMotion.rafId = window.requestAnimationFrame(animateHeart);
}

function startHeartMotion() {
  if (heartMotion.running) {
    return;
  }

  heartMotion.running = true;
  placeHeart();
  heartMotion.rafId = window.requestAnimationFrame(animateHeart);
}

if (mediaForm && mediaTypeSelect && mediaPathInput) {
  mediaForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const type = mediaTypeSelect.value;
    const src = mediaPathInput.value.trim();

    if (!isValidMediaPath(src)) {
      mediaPathInput.setCustomValidity(
        "ÄÆ°á»ng dáº«n chÆ°a há»£p lá»‡. Thá»­ URL Ä‘áº§y Ä‘á»§ hoáº·c ./assets/media/ten-file"
      );
      mediaPathInput.reportValidity();
      return;
    }

    mediaPathInput.setCustomValidity("");
    addMediaItem(type, src);
    mediaForm.reset();
    mediaTypeSelect.value = "image";
  });
}

if (mediaGrid) {
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
}

if (resetMediaBtn) {
  resetMediaBtn.addEventListener("click", () => {
    mediaItems = DEFAULT_MEDIA_ITEMS.map((item) => ({ ...item }));
    saveMediaItems();
    renderMedia();
  });
}

if (randomSpotlightBtn) {
  randomSpotlightBtn.addEventListener("click", pickSpotlightQuote);
}

enterSiteBtn.addEventListener("click", closeIntro);

window.addEventListener("resize", () => {
  resizeFireworkCanvas();
  clampHeartInsideScreen();
});

document.body.classList.add("intro-active");
resizeFireworkCanvas();
clampHeartInsideScreen();

renderQuotes();
pickSpotlightQuote();
renderMedia();

startFireworks();
startHeartMotion();





