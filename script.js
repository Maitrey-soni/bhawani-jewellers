/* =========================================================
   SVG ILLUSTRATIONS — one gold-gradient graphic per category.
   These are drawn in code, so they never fail to load and
   there's no copyright concern (nothing pulled from the internet).
========================================================= */
const categoryArt = {
    "Necklace": `<svg viewBox="0 0 100 100"><defs><linearGradient id="g${Math.random()}" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stop-color="#F1D68C"/><stop offset="100%" stop-color="#8A6C1E"/></linearGradient></defs><path d="M20 20 Q50 50 80 20" stroke="url(#g)" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M50 45 L60 62 L50 80 L40 62 Z" stroke="url(#g)" stroke-width="3" fill="none" stroke-linejoin="round"/></svg>`,
    "Rings": `<svg viewBox="0 0 100 100"><defs><linearGradient id="g${Math.random()}" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stop-color="#F1D68C"/><stop offset="100%" stop-color="#8A6C1E"/></linearGradient></defs><circle cx="50" cy="60" r="26" stroke="url(#g)" stroke-width="4" fill="none"/><path d="M50 34 L60 20 L50 8 L40 20 Z" stroke="url(#g)" stroke-width="3" fill="none" stroke-linejoin="round"/></svg>`,
    "Bangles": `<svg viewBox="0 0 100 100"><defs><linearGradient id="g${Math.random()}" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stop-color="#F1D68C"/><stop offset="100%" stop-color="#8A6C1E"/></linearGradient></defs><ellipse cx="50" cy="55" rx="36" ry="28" stroke="url(#g)" stroke-width="4" fill="none"/></svg>`,
    "Earrings": `<svg viewBox="0 0 100 100"><defs><linearGradient id="g${Math.random()}" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stop-color="#F1D68C"/><stop offset="100%" stop-color="#8A6C1E"/></linearGradient></defs><circle cx="35" cy="25" r="5" stroke="url(#g)" stroke-width="3" fill="none"/><path d="M35 30 Q35 55 25 70 Q35 76 45 70 Q35 55 35 30 Z" stroke="url(#g)" stroke-width="3" fill="none" stroke-linejoin="round"/><circle cx="70" cy="25" r="5" stroke="url(#g)" stroke-width="3" fill="none"/><path d="M70 30 Q70 55 60 70 Q70 76 80 70 Q70 55 70 30 Z" stroke="url(#g)" stroke-width="3" fill="none" stroke-linejoin="round"/></svg>`,
    "Chains": `<svg viewBox="0 0 100 100"><defs><linearGradient id="g${Math.random()}" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stop-color="#F1D68C"/><stop offset="100%" stop-color="#8A6C1E"/></linearGradient></defs><path d="M25 15 Q50 55 25 95" stroke="url(#g)" stroke-width="3" fill="none" stroke-dasharray="10 4" stroke-linecap="round"/><path d="M75 15 Q50 55 75 95" stroke="url(#g)" stroke-width="3" fill="none" stroke-dasharray="10 4" stroke-linecap="round"/></svg>`,
    "Mangalsutra": `<svg viewBox="0 0 100 100"><defs><linearGradient id="g${Math.random()}" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stop-color="#F1D68C"/><stop offset="100%" stop-color="#8A6C1E"/></linearGradient></defs><path d="M15 25 Q50 55 85 25" stroke="url(#g)" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="50" cy="60" r="9" fill="url(#g)"/></svg>`,
    "Pendants": `<svg viewBox="0 0 100 100"><defs><linearGradient id="g${Math.random()}" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stop-color="#F1D68C"/><stop offset="100%" stop-color="#8A6C1E"/></linearGradient></defs><circle cx="50" cy="25" r="6" stroke="url(#g)" stroke-width="3" fill="none"/><path d="M50 31 L50 50" stroke="url(#g)" stroke-width="3"/><circle cx="50" cy="65" r="18" stroke="url(#g)" stroke-width="3" fill="none"/></svg>`
};

function getArt(category) {
    return categoryArt[category] || categoryArt["Rings"];
}

/* =========================================================
   1. DATA — every product lives here as a JS object.
      Want to add a new product? Add one line here.
      No HTML editing needed anywhere else.
      "image" field points to files inside the /images folder.
========================================================= */
const products = [
    // ---- WOMEN ----
    { id: 1, name: "Polki Necklace Set", price: 182000, category: "Necklace", gender: "Women", purity: "22K Gold", weight: "42 grams", description: "A traditional polki necklace set with uncut diamonds, handcrafted for bridal and festive wear.", image: "images/polki-necklace.webp" },
    { id: 2, name: "Temple Necklace", price: 265000, category: "Necklace", gender: "Women", purity: "22K Gold", weight: "58 grams", description: "Temple-style necklace featuring deity motifs, inspired by South Indian craftsmanship.", image: "images/temple-necklace.jpg" },
    { id: 3, name: "Silver Oxidised Earrings", price: 5000, category: "Earrings", gender: "Women", purity: "925 Silver", weight: "57 grams", description: "Lightweight oxidised silver earrings, perfect for everyday and ethnic wear.", image: "images/silver-earrings.webp" },
    { id: 4, name: "Gold Jhumka Earrings", price: 1249990, category: "Earrings", gender: "Women", purity: "22K Gold", weight: "36 grams", description: "Classic jhumka earrings with fine filigree work and a gold polish finish.", image: "images/gold-jhumka.avif" },
    { id: 5, name: "Women's Gold Kada", price: 38000, category: "Bangles", gender: "Women", purity: "22K Gold", weight: "22 grams", description: "Delicate gold kada with floral engraving, designed for daily and festive wear." },
    { id: 6, name: "Diamond Cocktail Ring", price: 32000, category: "Rings", gender: "Women", purity: "18K Gold", weight: "6 grams", description: "Statement cocktail ring set with certified diamonds on an 18K gold band." },
    { id: 7, name: "Gold Mangalsutra", price: 56000, category: "Mangalsutra", gender: "Women", purity: "22K Gold", weight: "18 grams", description: "Traditional black-bead mangalsutra with a gold pendant, made to order." },
    { id: 8, name: "Gold Pendant Set", price: 21000, category: "Pendants", gender: "Women", purity: "22K Gold", weight: "9 grams", description: "Elegant pendant with matching chain, suitable for both casual and festive wear." },

    // ---- MEN ----
    { id: 9, name: "Men's Gold Kada", price: 45000, category: "Bangles", gender: "Men", purity: "22K Gold", weight: "32 grams", description: "Heavy, plain-finish gold kada designed for daily wear with a bold, masculine look.", image: "images/mens-gold-kada.webp" },
    { id: 10, name: "Gold Chain", price: 115000, category: "Chains", gender: "Men", purity: "22K Gold", weight: "28.15 grams", description: "Classic thick gold chain with a high-polish finish, a wardrobe staple.", image: "images/mens-gold-chain.webp" },
    { id: 11, name: "Silver Bracelet", price: 8500, category: "Bangles", gender: "Men", purity: "925 Silver", weight: "16 grams", description: "Sturdy silver bracelet with a matte finish, suited for casual daily wear.", image: "images/mens-silver-bracelet.jpg" },
    { id: 12, name: "Gold Lion Ring", price: 179000, category: "Rings", gender: "Men", purity: "22K Gold", weight: "11.118 grams", description: "Simple, sturdy gold band ring — a timeless everyday choice.", image: "images/gold-lion-ring.jpg" }
];

// Keeps track of which gender and category are currently selected.
let currentGender = "All";
let currentCategory = "All";

/* =========================================================
   2. RENDER FUNCTION — takes a list of products and
      builds the HTML for them, then injects it into the page.
      This ONE function replaces all the hand-written cards.
========================================================= */
function renderProducts(list) {
    const grid = document.getElementById("productGrid");

    // If filtering leaves nothing to show, tell the user instead of a blank grid
    if (list.length === 0) {
        grid.innerHTML = `<p class="no-results">No products found in this category yet.</p>`;
        return;
    }

    // .map() turns each product object into a card of HTML text,
    // then .join("") glues all those cards into one big string
    grid.innerHTML = list.map(function (product) {
        const message = `Hi, I'd like to enquire about ${product.name}`;
        return `
            <div class="product-card">
                <div class="product-image">
                    ${product.image ? `<img src="${product.image}" alt="${product.name}" onclick="openLightbox('${product.image}', '${product.name.replace(/'/g, "\\'")}')">` : getArt(product.category)}
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">₹ ${product.price.toLocaleString('en-IN')}</p>
                    <div class="product-buttons">
                        <a href="#" class="btn-details" onclick="openModal(${product.id}); return false;">
                            <i class="ti ti-info-circle"></i> Details
                        </a>
                    </div>
                    <div class="product-buttons">
                        <a href="https://wa.me/919512523007?text=${encodeURIComponent(message)}" class="btn-chat" target="_blank">
                            <i class="ti ti-brand-whatsapp"></i> Chat
                        </a>
                        <a href="tel:+919512523007" class="btn-call">
                            <i class="ti ti-phone"></i> Call
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

/* =========================================================
   3. FILTER FUNCTION — applies BOTH filters together.
      Starts with the full list, narrows by gender first,
      then narrows further by category.
========================================================= */
function applyFilters() {
    let result = products;

    if (currentGender !== "All") {
        result = result.filter(function (product) {
            return product.gender === currentGender;
        });
    }

    if (currentCategory !== "All") {
        result = result.filter(function (product) {
            return product.category === currentCategory;
        });
    }

    renderProducts(result);
}

/* =========================================================
   MODAL FUNCTIONS — find the clicked product by its id,
   fill the modal with its full details, and show it.
========================================================= */
function openModal(productId) {
    // .find() looks through the array and returns the ONE product
    // whose id matches — like Ctrl+F for arrays
    const product = products.find(function (p) { return p.id === productId; });
    if (!product) return;

    const message = `Hi, I'd like to enquire about ${product.name}`;

    document.getElementById("modalContent").innerHTML = `
        <h3>${product.name}</h3>
        <div class="modal-row"><span>Category</span><span>${product.category}</span></div>
        <div class="modal-row"><span>Gender</span><span>${product.gender}</span></div>
        <div class="modal-row"><span>Purity</span><span>${product.purity}</span></div>
        <div class="modal-row"><span>Weight</span><span>${product.weight}</span></div>
        <div class="modal-row"><span>Price</span><span>₹ ${product.price.toLocaleString('en-IN')}</span></div>
        <p class="modal-description">${product.description}</p>
        <div class="modal-buttons">
            <a href="https://wa.me/919512523007?text=${encodeURIComponent(message)}" class="btn-chat" target="_blank">
                <i class="ti ti-brand-whatsapp"></i> Chat
            </a>
            <a href="tel:+919512523007" class="btn-call">
                <i class="ti ti-phone"></i> Call
            </a>
        </div>
    `;

    document.getElementById("modalOverlay").classList.add("open");
}

function closeModal() {
    document.getElementById("modalOverlay").classList.remove("open");
}

/* =========================================================
   LIGHTBOX FUNCTIONS — tap any product image to view it
   full-screen; tap anywhere (or the X) to close it.
========================================================= */
function openLightbox(src, alt) {
    const lightboxImg = document.getElementById("lightboxImage");
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    document.getElementById("lightboxOverlay").classList.add("open");
}

function closeLightbox() {
    document.getElementById("lightboxOverlay").classList.remove("open");
}

// Allow closing the lightbox (and modal) with the Escape key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeLightbox();
        closeModal();
    }
});

/* =========================================================
   4. EVENT LISTENERS — make both tab rows clickable.
========================================================= */
const genderTabs = document.querySelectorAll("#genderTabs .tab");
const categoryTabs = document.querySelectorAll("#categoryTabs .tab");

genderTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        genderTabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        currentGender = tab.dataset.gender;
        applyFilters();
    });
});

categoryTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        categoryTabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        currentCategory = tab.dataset.category;
        applyFilters();
    });
});

/* =========================================================
   5. INITIAL LOAD — show all products, both tab rows on "All"
========================================================= */
genderTabs[0].classList.add("active");
categoryTabs[0].classList.add("active");
renderProducts(products);

/* =========================================================
   GOLD PARTICLES — unchanged from before
========================================================= */
const field = document.getElementById('particleField');
const count = window.innerWidth < 700 ? 20 : 36;
for (let i = 0; i < count; i++) {
    const d = document.createElement('div');
    d.className = 'dust';
    const size = Math.random() * 3 + 1.5;
    d.style.width = size + 'px';
    d.style.height = size + 'px';
    d.style.left = Math.random() * 100 + '%';
    d.style.setProperty('--drift-x', (Math.random() * 60 - 30) + 'px');
    const duration = Math.random() * 10 + 12;
    d.style.animationDuration = duration + 's';
    d.style.animationDelay = (Math.random() * duration) + 's';
    field.appendChild(d);
}