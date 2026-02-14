/* * MAHARANI ICE CREAM PARLOUR & FOOD PLAZA
 * Application Logic & Configuration
 */

// --- 1. Tailwind Configuration ---
// Defined here to keep HTML clean.
tailwind.config = {
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          orange: "#FF6D00",
          green: "#00C853",
          red: "#EF4444",
          dark: "#0A0A0A",
          card: "#171717",
        },
      },
      animation: {
        "bounce-short": "bounce-short 0.2s ease-in-out 1",
      },
      keyframes: {
        "bounce-short": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.96)" },
        },
      },
    },
  },
};

// --- 2. Menu Data Source ---
const menuData = [
  {
    category: "Indian Dishes",
    icon: "ph-bowl-food",
    items: [
      { id: 101, name: "Kadai Paneer", price: 399, type: "veg" },
      { id: 102, name: "Paneer Butter Masala", price: 389, type: "veg" },
      { id: 103, name: "Soya Chaap Masala", price: 340, type: "veg" },
      { id: 104, name: "Matar Paneer", price: 210, type: "veg" },
      { id: 105, name: "Mushroom Butter Masala", price: 330, type: "veg" },
      { id: 106, name: "Dal Tadka", price: 120, type: "veg" },
      { id: 107, name: "Paneer Do Pyaza", price: 389, type: "veg" },
      { id: 108, name: "Shahi Paneer", price: 399, type: "veg" },
      { id: 109, name: "Mushroom Kadai", price: 340, type: "veg" },
      { id: 110, name: "Mix-Veg", price: 199, type: "veg" },
    ],
  },
  {
    category: "Chinese",
    icon: "ph-chopsticks",
    items: [
      { id: 201, name: "Paneer Chilli", price: 330, type: "veg" },
      { id: 202, name: "Manchurian", price: 310, type: "veg" },
      { id: 203, name: "Honey Chilli Potato", price: 220, type: "veg" },
      { id: 204, name: "Baby Corn Chilli", price: 310, type: "veg" },
      { id: 205, name: "Crispy Sweet Corn", price: 285, type: "veg" },
      { id: 206, name: "Mushroom Chilli Dry", price: 299, type: "veg" },
    ],
  },
  {
    category: "Rolls",
    icon: "ph-scroll",
    items: [
      { id: 301, name: "Paneer Roll", price: 130, type: "veg" },
      { id: 302, name: "Tikka Paneer Roll", price: 199, type: "veg" },
      { id: 303, name: "Paneer Laccha Roll", price: 140, type: "veg" },
      { id: 304, name: "Veg Lachha Roll", price: 99, type: "veg" },
      { id: 305, name: "Veg Roll", price: 99, type: "veg" },
    ],
  },
  {
    category: "Iced Coffee",
    icon: "ph-coffee",
    items: [
      { id: 401, name: "Iced Mocha", price: 149, type: "veg" },
      { id: 402, name: "Cold Coffee", price: 169, type: "veg" },
      { id: 403, name: "Affogato", price: 119, type: "veg" },
      { id: 404, name: "Iced Americano", price: 89, type: "veg" },
      { id: 405, name: "Iced Latte", price: 149, type: "veg" },
    ],
  },
  {
    category: "Shakes",
    icon: "ph-brandy",
    items: [
      { id: 501, name: "Lassi", price: 60, type: "veg" },
      { id: 502, name: "Mango Milk", price: 119, type: "veg" },
      { id: 503, name: "Pineapple Punch", price: 119, type: "veg" },
      { id: 504, name: "Strawberry Crunch", price: 119, type: "veg" },
      { id: 505, name: "Orange Rush", price: 119, type: "veg" },
      { id: 506, name: "Kitkat Shake", price: 199, type: "veg" },
      { id: 507, name: "Oreo Shake", price: 199, type: "veg" },
      { id: 508, name: "Crackling Caramel", price: 199, type: "veg" },
    ],
  },
  {
    category: "Noodles",
    icon: "ph-bowl-steam",
    items: [
      { id: 601, name: "Paneer Noodles", price: 250, type: "veg" },
      { id: 602, name: "Schezwan Noodles", price: 230, type: "veg" },
      { id: 603, name: "Veg Noodles", price: 170, type: "veg" },
      { id: 604, name: "Garlic Noodles", price: 220, type: "veg" },
    ],
  },
  {
    category: "Hot Coffee",
    icon: "ph-coffee-bean",
    items: [
      { id: 701, name: "Hot Chocolate", price: 140, type: "veg" },
      { id: 702, name: "Espresso Single", price: 59, type: "veg" },
      { id: 703, name: "Espresso Double", price: 89, type: "veg" },
      { id: 704, name: "Americano", price: 95, type: "veg" },
      { id: 705, name: "Cappuccino", price: 99, type: "veg" },
      { id: 706, name: "Cafe Latte", price: 109, type: "veg" },
    ],
  },
  {
    category: "Roti/Paratha",
    icon: "ph-cookie",
    items: [
      { id: 801, name: "Paneer Ka Paratha", price: 80, type: "veg" },
      { id: 802, name: "Sattu Ka Paratha", price: 65, type: "veg" },
      { id: 803, name: "Tawa Roti", price: 15, type: "veg" },
      { id: 804, name: "Lachha Paratha", price: 60, type: "veg" },
    ],
  },
  {
    category: "Burgers",
    icon: "ph-hamburger",
    items: [
      { id: 901, name: "Aloo Tikki Burger", price: 85, type: "veg" },
      { id: 902, name: "Veg Aloo Tikki Burger", price: 89, type: "veg" },
      { id: 903, name: "Paneer Tikki Burger", price: 105, type: "veg" },
    ],
  },
  {
    category: "Quick Bites",
    icon: "ph-pizza",
    items: [
      { id: 1001, name: "Steam Sweet Corn", price: 99, type: "veg" },
      { id: 1002, name: "French Fry", price: 99, type: "veg" },
    ],
  },
  {
    category: "Rice",
    icon: "ph-grains",
    items: [
      { id: 1101, name: "Jeera Rice", price: 159, type: "veg" },
      { id: 1102, name: "Kashmiri Rice", price: 199, type: "veg" },
    ],
  },
  {
    category: "Tikka",
    icon: "ph-fire",
    items: [
      { id: 1201, name: "Mushroom Tikka", price: 250, type: "veg" },
      { id: 1202, name: "Soya Chaap Tikka", price: 249, type: "veg" },
      { id: 1203, name: "Paneer Tikka", price: 330, type: "veg" },
    ],
  },
];

// --- 3. State Management ---
const cart = {};
let activeCategory = menuData[0].category;
let isStoreOpen = true;

// --- 4. Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderCategories();
  renderMenu();
  checkStoreStatus();

  // Search Listener
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      renderMenu(query);
    });
  }

  const skeleton = document.getElementById("skeleton");
  if (skeleton) skeleton.remove();

  // Init Scroll Listener
  window.addEventListener("scroll", handleScrollSpy);
});

// --- 5. Feature: Operational Hours ---
function checkStoreStatus() {
  const now = new Date();
  const hour = now.getHours();
  // Opens 10 AM, Closes 11 PM (23:00)
  //   isStoreOpen = hour >= 10 && hour < 23;

  const dot = document.getElementById("storeStatusDot");
  const ping = document.getElementById("storeStatusPing");
  const text = document.getElementById("storeStatusText");
  const whatsappBtn = document.getElementById("whatsappBtn");

  if (!isStoreOpen) {
    if (dot && ping && text) {
      dot.classList.remove("bg-brand-green");
      dot.classList.add("bg-brand-red");

      ping.classList.remove("bg-brand-green");
      ping.classList.add("bg-brand-red");

      text.innerText = "Closed • Opens 10 AM";
      text.classList.add("text-brand-red");
    }
    if (whatsappBtn) {
      whatsappBtn.disabled = true;
      whatsappBtn.classList.add("opacity-50", "cursor-not-allowed");
      whatsappBtn.innerText = "Store is currently closed";
    }
  }
}

// --- 6. Feature: Robust Scroll Spy ---
function handleScrollSpy() {
  // Height of Header + Search Bar + Category Pills approx 180px
  const headerOffset = 200;
  const sections = document.querySelectorAll('[id^="cat-"]');

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    // Check if we are currently looking at this section
    if (window.scrollY >= sectionTop - headerOffset) {
      current = section.getAttribute("data-category");
    }
  });

  // Only update if it changed
  if (current && current !== activeCategory) {
    updateActivePill(current);
  }
}

// --- 7. Theme Logic ---
function initTheme() {
  const isDark =
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const themeIcon = document.getElementById("themeIcon");

  if (isDark) {
    document.documentElement.classList.add("dark");
    if (themeIcon) themeIcon.classList.replace("ph-moon", "ph-sun");
  }

  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      const isNowDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isNowDark ? "dark" : "light");

      if (isNowDark) {
        themeIcon.classList.replace("ph-moon", "ph-sun");
      } else {
        themeIcon.classList.replace("ph-sun", "ph-moon");
      }
    });
  }
}

// --- 8. Render Functions ---
function renderCategories() {
  const container = document.getElementById("categoryList");
  if (!container) return;

  container.innerHTML = menuData
    .map((cat) => {
      const pillId = `pill-${cat.category.replace(/\s+/g, "-")}`;
      return `
        <button 
            id="${pillId}"
            onclick="scrollToCategory('${cat.category}')"
            class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
            ${
              activeCategory === cat.category
                ? "bg-brand-orange text-white shadow-lg shadow-orange-500/20"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700"
            }"
        >
            <i class="ph ${cat.icon} text-lg"></i>
            ${cat.category}
        </button>
    `;
    })
    .join("");
}

function updateActivePill(catName) {
  activeCategory = catName;

  // Reset all buttons
  document.querySelectorAll("#categoryList button").forEach((btn) => {
    btn.className =
      "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700";
  });

  // Activate current button
  const activeBtn = document.getElementById(
    `pill-${catName.replace(/\s+/g, "-")}`,
  );
  if (activeBtn) {
    activeBtn.className =
      "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 bg-brand-orange text-white shadow-lg shadow-orange-500/20";
    activeBtn.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
}

// Exposed to global scope for HTML onclick attributes
window.scrollToCategory = function (catName) {
  const element = document.getElementById(
    `cat-${catName.replace(/\s+/g, "-")}`,
  );
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - 160;
    window.scrollTo({ top: y, behavior: "smooth" });
    updateActivePill(catName);
  }
};

function renderMenu(searchQuery = "") {
  const container = document.getElementById("menuContainer");
  if (!container) return;

  if (searchQuery) {
    const matches = [];
    menuData.forEach((cat) => {
      const items = cat.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery),
      );
      if (items.length) matches.push({ ...cat, items });
    });

    if (matches.length === 0) {
      container.innerHTML = `
                <div class="text-center py-20 opacity-50">
                    <i class="ph ph-magnifying-glass text-4xl mb-2"></i>
                    <p>No dishes found</p>
                </div>`;
      return;
    }

    container.innerHTML = matches
      .map((cat) => generateCategoryHTML(cat, true, searchQuery))
      .join("");
  } else {
    container.innerHTML = menuData
      .map((cat) => generateCategoryHTML(cat, false))
      .join("");
  }
}

// --- FIX: Premium Card Design ---
function generateCategoryHTML(cat, isSearch, searchQuery = "") {
  const catId = `cat-${cat.category.replace(/\s+/g, "-")}`;

  return `
        <div id="${catId}" data-category="${cat.category}" class="mb-10 scroll-mt-[200px]">
            ${
              !isSearch
                ? `<div class="flex items-center gap-3 mb-5 pl-1">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-white tracking-tight">
                        ${cat.category}
                    </h3>
                    <div class="h-px flex-1 bg-gray-100 dark:bg-gray-800"></div>
                   </div>`
                : ""
            }
            
            <div class="grid grid-cols-1 gap-4">
                ${cat.items
                  .map((item) => {
                    const qty = cart[item.id] || 0;

                    // Highlight Logic
                    let displayName = item.name;
                    if (isSearch && searchQuery) {
                      const regex = new RegExp(`(${searchQuery})`, "gi");
                      displayName = item.name.replace(
                        regex,
                        '<span class="highlight-text">$1</span>',
                      );
                    }

                    return `
                    <div class="menu-card group relative bg-white dark:bg-brand-card p-4 rounded-[1.25rem] shadow-sm border border-gray-100 dark:border-gray-800 flex justify-between items-start gap-3 overflow-hidden">
                        
                        <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-orange/0 via-brand-orange/50 to-brand-orange/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div class="flex-1 py-1">
                            <div class="flex items-start gap-2.5">
                                <i class="ph-fill ph-circle-stop ${item.type === "veg" ? "text-green-500" : "text-red-500"} text-xs mt-1.5 shadow-sm"></i>
                                <div class="flex flex-col gap-1">
                                    <h4 class="font-bold text-gray-900 dark:text-gray-50 text-[16px] leading-snug">${displayName}</h4>
                                    <p class="font-medium text-gray-500 dark:text-gray-400 text-sm">₹${item.price}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex flex-col items-center justify-center self-center pl-2" id="btn-container-${item.id}">
                            ${getButtonHTML(item.id, qty)}
                        </div>
                    </div>
                    `;
                  })
                  .join("")}
            </div>
        </div>
    `;
}

// --- FIX: Better Button Design ---
function getButtonHTML(id, qty) {
  if (qty === 0) {
    return `
            <button onclick="updateCart(${id}, 1)" 
                class="relative overflow-hidden w-24 h-9 bg-white dark:bg-gray-800 text-brand-orange border border-brand-orange/30 dark:border-gray-600 rounded-lg font-bold text-sm shadow-sm active:scale-95 transition-all hover:bg-brand-orange hover:text-white group">
                <span class="relative z-10">ADD</span>
            </button>
        `;
  } else {
    return `
            <div class="flex items-center bg-brand-dark dark:bg-white text-white dark:text-black rounded-lg h-9 shadow-md overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
                <button onclick="updateCart(${id}, -1)" class="w-8 h-full flex items-center justify-center hover:bg-white/10 active:bg-white/20 transition-colors">
                    <i class="ph-bold ph-minus text-xs"></i>
                </button>
                <span class="w-7 text-center font-bold text-sm">${qty}</span>
                <button onclick="updateCart(${id}, 1)" class="w-8 h-full flex items-center justify-center hover:bg-white/10 active:bg-white/20 transition-colors">
                    <i class="ph-bold ph-plus text-xs"></i>
                </button>
            </div>
        `;
  }
}

function getButtonHTML(id, qty) {
  if (qty === 0) {
    return `
            <button onclick="updateCart(${id}, 1)" class="w-20 h-9 bg-white dark:bg-gray-800 text-brand-orange border border-gray-200 dark:border-gray-700 rounded-lg font-bold text-sm shadow-sm active:scale-95 transition-transform">
                ADD
            </button>
        `;
  } else {
    return `
            <div class="flex items-center bg-brand-orange text-white rounded-lg h-9 shadow-lg shadow-orange-500/30 overflow-hidden">
                <button onclick="updateCart(${id}, -1)" class="w-8 h-full flex items-center justify-center hover:bg-white/20 active:bg-white/30">
                    <i class="ph ph-minus text-xs"></i>
                </button>
                <span class="w-6 text-center font-bold text-sm">${qty}</span>
                <button onclick="updateCart(${id}, 1)" class="w-8 h-full flex items-center justify-center hover:bg-white/20 active:bg-white/30">
                    <i class="ph ph-plus text-xs"></i>
                </button>
            </div>
        `;
  }
}

// --- 9. Cart Logic ---
// Exposed to global scope for HTML onclick attributes
window.updateCart = function (itemId, change) {
  if (navigator.vibrate) navigator.vibrate(50);

  if (!cart[itemId]) cart[itemId] = 0;
  cart[itemId] += change;

  if (cart[itemId] <= 0) delete cart[itemId];

  const btnContainer = document.getElementById(`btn-container-${itemId}`);
  if (btnContainer) {
    btnContainer.innerHTML = getButtonHTML(itemId, cart[itemId] || 0);
  }

  const modalItem = document.getElementById(`modal-item-${itemId}`);
  if (modalItem) {
    if (cart[itemId]) {
      modalItem.querySelector(".qty-display").innerText = cart[itemId];
      modalItem.querySelector(".subtotal-display").innerText =
        `₹${getItemPrice(itemId) * cart[itemId]}`;
    } else {
      modalItem.remove();
      if (Object.keys(cart).length === 0) window.closeCheckout();
    }
  }

  updateCartSummary();
};

// --- FIX 3: Connect Cart Logic to New UI ---
function updateCartSummary() {
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  let totalPrice = 0;

  for (const [id, qty] of Object.entries(cart)) {
    totalPrice += getItemPrice(id) * qty;
  }

  const pill = document.getElementById("cartPill");
  if (!pill) return;

  if (totalItems > 0) {
    // 1. Remove 'hidden' so it renders
    // 2. Remove 'translate-y-28' so it slides UP into view
    pill.classList.remove("hidden", "translate-y-28");

    document.getElementById("cartCount").innerText =
      `${totalItems} ITEM${totalItems > 1 ? "S" : ""}`;
    document.getElementById("cartTotal").innerText = `₹${totalPrice}`;

    const modalTotal = document.getElementById("modalTotal");
    if (modalTotal) modalTotal.innerText = `₹${totalPrice}`;
  } else {
    // Hide it by sliding DOWN
    pill.classList.add("translate-y-28");

    // Wait for animation to finish, then display: none
    setTimeout(() => pill.classList.add("hidden"), 300);

    if (typeof window.closeCheckout === "function") window.closeCheckout();
  }
}
// --- FIX: Match New Cart Design Text ---
// function updateCartSummary() {
//   const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
//   let totalPrice = 0;

//   for (const [id, qty] of Object.entries(cart)) {
//     totalPrice += getItemPrice(id) * qty;
//   }

//   const pill = document.getElementById("cartPill");
//   if (!pill) return;

//   if (totalItems > 0) {
//     // Show the cart
//     pill.classList.remove("hidden", "translate-y-28");

//     // Update Text to match the design (Uppercase ITEMS)
//     document.getElementById("cartCount").innerText =
//       `${totalItems} ITEM${totalItems > 1 ? "S" : ""}`;

//     document.getElementById("cartTotal").innerText = `₹${totalPrice}`;

//     // Also update the modal header if it exists
//     const modalTotal = document.getElementById("modalTotal");
//     if (modalTotal) modalTotal.innerText = `₹${totalPrice}`;
//   } else {
//     // Hide the cart
//     pill.classList.add("translate-y-28");
//     setTimeout(() => pill.classList.add("hidden"), 300);

//     if (typeof window.closeCheckout === "function") window.closeCheckout();
//   }
// }

function getItemPrice(id) {
  for (const cat of menuData) {
    const item = cat.items.find((i) => i.id == id);
    if (item) return item.price;
  }
  return 0;
}

function getItemName(id) {
  for (const cat of menuData) {
    const item = cat.items.find((i) => i.id == id);
    if (item) return item.name;
  }
  return "";
}

// --- 10. Checkout Modal ---
window.openCheckout = function () {
  checkStoreStatus();

  const modal = document.getElementById("checkoutModal");
  const backdrop = document.getElementById("modalBackdrop");
  const content = document.getElementById("modalContent");
  const container = document.getElementById("cartItemsContainer");

  container.innerHTML = Object.entries(cart)
    .map(([id, qty]) => {
      const name = getItemName(id);
      const price = getItemPrice(id);
      return `
            <div id="modal-item-${id}" class="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-3 last:border-0">
                <div class="flex-1">
                    <div class="flex items-center gap-2">
                        <i class="ph ph-circle-stop text-brand-green text-[10px]"></i>
                        <h4 class="font-medium text-sm dark:text-gray-200">${name}</h4>
                    </div>
                    <p class="text-xs text-brand-orange mt-1 subtotal-display">₹${price * qty}</p>
                </div>
                <div class="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg h-8">
                    <button onclick="updateCart(${id}, -1)" class="w-8 h-full text-gray-500 hover:text-brand-orange"><i class="ph ph-minus text-xs"></i></button>
                    <span class="w-6 text-center text-sm font-semibold qty-display dark:text-gray-200">${qty}</span>
                    <button onclick="updateCart(${id}, 1)" class="w-8 h-full text-gray-500 hover:text-brand-orange"><i class="ph ph-plus text-xs"></i></button>
                </div>
            </div>
        `;
    })
    .join("");

  modal.classList.remove("invisible");
  setTimeout(() => {
    backdrop.classList.remove("opacity-0");
    content.classList.remove("translate-y-full");
  }, 10);
};

window.closeCheckout = function () {
  const modal = document.getElementById("checkoutModal");
  const backdrop = document.getElementById("modalBackdrop");
  const content = document.getElementById("modalContent");

  backdrop.classList.add("opacity-0");
  content.classList.add("translate-y-full");

  setTimeout(() => {
    modal.classList.add("invisible");
  }, 300);
};

// --- 11. WhatsApp Integration ---
window.sendToWhatsApp = function () {
  if (!isStoreOpen) {
    alert("Sorry, the store is currently closed.");
    return;
  }

  const notesInput = document.getElementById("orderNotes");
  const notes = notesInput ? notesInput.value.trim() : "";
  let message = `*NEW ORDER - MAHARANI*\n-----------------------\n`;

  let total = 0;
  for (const [id, qty] of Object.entries(cart)) {
    const name = getItemName(id);
    const price = getItemPrice(id);
    const lineTotal = price * qty;
    total += lineTotal;
    message += `${qty} x ${name} (₹${lineTotal})\n`;
  }

  message += `-----------------------\n`;
  if (notes) message += `📝 Note: ${notes}\n`;
  message += `💰 *Total Bill: ₹${total}*`;

  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
