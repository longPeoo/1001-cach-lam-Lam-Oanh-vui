// Thay URL ảnh trực tiếp trong mảng này nếu bạn muốn chỉnh nhanh bằng code.
const DEFAULT_IMAGE_URLS = [
  "https://picsum.photos/seed/lam-oanh-01/800/600",
  "https://picsum.photos/seed/lam-oanh-02/800/600",
  "https://picsum.photos/seed/lam-oanh-03/800/600",
  "https://picsum.photos/seed/lam-oanh-04/800/600",
  "https://picsum.photos/seed/lam-oanh-05/800/600",
  "https://picsum.photos/seed/lam-oanh-06/800/600"
];

const QUOTES = [
  { type: "love", text: "Yêu em là việc anh làm đều đặn hơn cả check mail sáng." },
  { type: "love", text: "Anh không giỏi hứa nhiều, nhưng giỏi ở bên em thật lâu." },
  { type: "love", text: "Em là lý do khiến ngày thường của anh thành ngày đặc biệt." },
  { type: "love", text: "Trái tim anh chọn em nhanh như wifi tự kết nối ở nhà." },
  { type: "love", text: "Không cần drama, có em là đủ plot twist hạnh phúc rồi." },
  { type: "love", text: "Nếu mỗi cái ôm là một lời cảm ơn, anh nợ em cả đời." },
  { type: "love", text: "Anh thích cách em xuất hiện và làm mọi thứ dịu lại." },
  { type: "love", text: "Yêu em không phải trend, mà là phiên bản ổn định nhất." },
  { type: "flirt", text: "Em có map không? Anh lạc từ mắt em tới tim em luôn rồi." },
  { type: "flirt", text: "Anh không bán trà sữa, nhưng có topping là sự chiều em." },
  { type: "flirt", text: "Cho anh xin một nụ cười, anh trả bằng combo nhớ em cả ngày." },
  { type: "flirt", text: "Em là notification duy nhất anh muốn bật cả ngày." },
  { type: "flirt", text: "Nếu thả thính là môn học, anh muốn học chung lớp với em." },
  { type: "flirt", text: "Em đứng im nhé, để anh đuổi theo em bằng cả sự tử tế." },
  { type: "flirt", text: "Em không phải idol, mà sao tim anh cứ auto fan cứng?" },
  { type: "flirt", text: "Anh chơi hệ nghiêm túc, nhưng gặp em thì bật mode đáng yêu." }
];

const STORAGE_KEY = "lam-oanh-gallery-images";
const quoteGrid = document.querySelector("#quote-grid");
const spotlightQuote = document.querySelector("#spotlight-quote");
const spotlightTag = document.querySelector("#spotlight-tag");
const galleryGrid = document.querySelector("#gallery-grid");
const imageForm = document.querySelector("#image-form");
const imageUrlInput = document.querySelector("#image-url");
const resetImagesBtn = document.querySelector("#reset-images");
const randomQuoteBtn = document.querySelector("#new-spotlight");

let images = loadImages();

function getTypeLabel(type) {
  return type === "love" ? "#tìnhyêu" : "#thảthính";
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

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

function saveImages() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
}

function loadImages() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return [...DEFAULT_IMAGE_URLS];
  }

  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed) && parsed.every((url) => typeof url === "string")) {
      return parsed;
    }
  } catch (error) {
    console.warn("Cannot parse saved images:", error);
  }

  return [...DEFAULT_IMAGE_URLS];
}

function renderGallery() {
  if (images.length === 0) {
    galleryGrid.innerHTML = `<p class="section-note">Chưa có ảnh nào, thêm một URL để bắt đầu.</p>`;
    return;
  }

  galleryGrid.innerHTML = images
    .map(
      (url, index) => `
        <article class="photo-card">
          <img src="${url}" alt="Ảnh bất ngờ ${index + 1}" loading="lazy" />
          <button type="button" data-index="${index}">Xóa ảnh</button>
        </article>
      `
    )
    .join("");
}

function addImage(url) {
  images = [url, ...images];
  saveImages();
  renderGallery();
}

function removeImage(index) {
  images = images.filter((_, i) => i !== index);
  saveImages();
  renderGallery();
}

imageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = imageUrlInput.value.trim();

  if (!isValidUrl(url)) {
    imageUrlInput.setCustomValidity("URL chưa hợp lệ. Hãy dán link ảnh đầy đủ.");
    imageUrlInput.reportValidity();
    return;
  }

  imageUrlInput.setCustomValidity("");
  addImage(url);
  imageForm.reset();
});

galleryGrid.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  const index = Number(target.dataset.index);
  if (!Number.isNaN(index)) {
    removeImage(index);
  }
});

resetImagesBtn.addEventListener("click", () => {
  images = [...DEFAULT_IMAGE_URLS];
  saveImages();
  renderGallery();
});

randomQuoteBtn.addEventListener("click", pickSpotlightQuote);

renderQuotes();
pickSpotlightQuote();
renderGallery();
