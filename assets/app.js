const DR_PRINTICUS_THEME_KEY = "drPrinticusColorTheme";
const DEFAULT_COLOR_THEME = "dark";
const COLOR_THEMES = new Set(["dark", "light"]);
const MIN_ORDER_AMOUNT = 250;
const MIN_DELIVERY_PRICE = 350;

const products = {
  champion: {
    id: "champion",
    title: "Anvil Wardens: The Champion",
    price: 900,
    category: "model",
    productKind: "model",
    universe: "warhammer",
    faction: "salamanders",
    unitType: "infantry",
    partType: "",
    baseSize: "32mm",
    terrainType: "",
    tags: ["heroes", "warhammer", "grimdark", "bases-32", "hits"],
    image: "./assets/merchant/card-champion.jpg",
    gallery: ["./assets/merchant/card-champion.jpg", "./assets/merchant/card-ancient-armor.jpg", "./assets/merchant/card-shoulderpads.jpg"],
    meta: "32 мм · смола · 3–7 дней",
    description: "Геройская миниатюра для grimdark-отряда и витрины.",
    scale: "32 мм",
    material: "фотополимерная смола",
    time: "3–7 рабочих дней",
    status: "под заказ",
    pack: "Миниатюра героя, декоративные элементы, база 32 мм.",
    characteristics: "Тип: герой. Система: Warhammer / proxy. Стиль: grimdark, gothic, sci-fi.",
  },
  hunter: {
    id: "hunter",
    title: "Anvil Wardens: The Hunter",
    price: 650,
    category: "model",
    productKind: "model",
    universe: "warhammer",
    faction: "salamanders",
    unitType: "infantry",
    partType: "",
    baseSize: "32mm",
    terrainType: "",
    tags: ["heroes", "warhammer", "grimdark", "new", "bases-32"],
    image: "./assets/merchant/card-hunter.jpg",
    gallery: ["./assets/merchant/card-hunter.jpg", "./assets/merchant/card-ancient-armor.jpg", "./assets/merchant/card-primal-hounds.jpg"],
    meta: "32 мм · смола · 3–7 дней",
    description: "Миниатюра охотника с крупным силуэтом и тонкими деталями.",
    scale: "32 мм",
    material: "фотополимерная смола",
    time: "3–7 рабочих дней",
    status: "под заказ",
    pack: "Миниатюра охотника, оружие, декоративная база.",
    characteristics: "Тип: герой. Система: Warhammer / proxy. Стиль: grimdark.",
  },
  heads: {
    id: "heads",
    title: "Головы в респираторах, 5 шт.",
    price: 70,
    category: "bits",
    productKind: "bits",
    universe: "warhammer",
    faction: "salamanders",
    unitType: "infantry",
    partType: "heads",
    baseSize: "",
    terrainType: "",
    tags: ["bits", "heads", "small-item", "conversion-kits"],
    image: "./assets/merchant/card-heads.jpg",
    gallery: ["./assets/merchant/card-heads.jpg", "./assets/merchant/card-shoulderpads.jpg", "./assets/merchant/card-banner.jpg"],
    meta: "детали · смола · 3–7 дней",
    description: "Конверсионные детали для отрядов и героев.",
    scale: "под 28–32 мм",
    material: "фотополимерная смола",
    time: "3–7 рабочих дней",
    status: "под заказ",
    pack: "5 голов в респираторах для конверсий.",
    characteristics: "Тип: детали. Система: универсальные конверсии. Мин. заказ 250 ₽.",
    requiresMin: true,
  },
  hounds: {
    id: "hounds",
    title: "Primal Hounds Expansion",
    price: 2900,
    category: "bundle",
    productKind: "bundle",
    universe: "warhammer",
    faction: "space-wolves",
    unitType: "infantry",
    partType: "",
    baseSize: "",
    terrainType: "",
    tags: ["terrain", "full-packs", "bundles", "value", "warhammer"],
    image: "./assets/merchant/card-primal-hounds.jpg",
    gallery: [
      "./assets/merchant/card-primal-hounds.jpg",
      "./assets/merchant/hero-primal-banner.png",
      "./assets/merchant/card-cursed-company.jpg",
      "./assets/merchant/hero-cursed-skulls.png",
      "./assets/merchant/card-banner.jpg",
      "./assets/merchant/hero-hunter.png",
      "./assets/merchant/card-hunter.jpg",
      "./assets/merchant/hero-champion.png",
      "./assets/merchant/card-champion.jpg",
      "./assets/merchant/hero-crimson-armor.png",
      "./assets/merchant/card-ancient-armor.jpg",
      "./assets/merchant/hero-single-shield.png",
      "./assets/merchant/card-shoulderpads.jpg",
      "./assets/merchant/hero-single-head.png",
    ],
    meta: "набор · смола · 3–7 дней",
    description: "Фулл-пак деталей и террейна дешевле, чем по частям.",
    scale: "32 мм / terrain scale",
    material: "фотополимерная смола",
    time: "3–7 рабочих дней",
    status: "под заказ",
    pack: "Фулл-пак деталей, баз и декоративных элементов.",
    characteristics: "Тип: набор. Система: Warhammer / proxy. Выгоднее отдельных частей.",
  },
  armor: {
    id: "armor",
    title: "Crimson Lords: Ancient Armor",
    price: 1200,
    category: "bits",
    productKind: "bits",
    universe: "warhammer",
    faction: "blood-angels",
    unitType: "dreadnought",
    partType: "dreadnought-upgrades",
    baseSize: "",
    terrainType: "",
    tags: ["heroes", "warhammer", "new", "display-models"],
    image: "./assets/merchant/card-ancient-armor.jpg",
    gallery: ["./assets/merchant/card-ancient-armor.jpg", "./assets/merchant/card-champion.jpg", "./assets/merchant/card-banner.jpg"],
    meta: "32 мм · смола · 3–7 дней",
    description: "Броня, щит и декоративные элементы для героя.",
    scale: "32 мм",
    material: "фотополимерная смола",
    time: "3–7 рабочих дней",
    status: "под заказ",
    pack: "Набор брони, щит, наплечники и декоративные элементы.",
    characteristics: "Тип: герой / апгрейд. Система: Warhammer / proxy.",
  },
  cursed: {
    id: "cursed",
    title: "Cursed Company",
    price: 1850,
    category: "bundle",
    productKind: "bundle",
    universe: "warhammer",
    faction: "legion-of-doom",
    unitType: "infantry",
    partType: "",
    baseSize: "",
    terrainType: "",
    tags: ["squads", "warhammer", "grimdark", "full-packs"],
    image: "./assets/merchant/card-cursed-company.jpg",
    gallery: ["./assets/merchant/card-cursed-company.jpg", "./assets/merchant/card-heads.jpg", "./assets/merchant/card-shoulderpads.jpg"],
    meta: "отряд · смола · 3–7 дней",
    description: "Отрядные прокси с головами, оружием и базами.",
    scale: "32 мм",
    material: "фотополимерная смола",
    time: "3–7 рабочих дней",
    status: "под заказ",
    pack: "Отрядные детали, головы, оружие и базы.",
    characteristics: "Тип: отряд. Система: Warhammer / proxy. Стиль: grimdark.",
  },
  shoulders: {
    id: "shoulders",
    title: "Наплечники Anvil Wardens, 5 шт.",
    price: 120,
    category: "bits",
    productKind: "bits",
    universe: "warhammer",
    faction: "salamanders",
    unitType: "infantry",
    partType: "shoulders",
    baseSize: "32mm",
    terrainType: "",
    tags: ["bits", "small-item", "conversion-kits", "bases-32"],
    image: "./assets/merchant/card-shoulderpads.jpg",
    gallery: ["./assets/merchant/card-shoulderpads.jpg", "./assets/merchant/card-heads.jpg", "./assets/merchant/card-banner.jpg"],
    meta: "детали · смола · 3–7 дней",
    description: "Апгрейды для пехоты, командиров и конверсий.",
    scale: "под 28–32 мм",
    material: "фотополимерная смола",
    time: "3–7 рабочих дней",
    status: "под заказ",
    pack: "5 наплечников Anvil Wardens.",
    characteristics: "Тип: детали. Система: универсальные конверсии. Мин. заказ 250 ₽.",
    requiresMin: true,
  },
  banner: {
    id: "banner",
    title: "Crimson Lords: Banner 01",
    price: 260,
    category: "bits",
    productKind: "bits",
    universe: "warhammer",
    faction: "blood-angels",
    unitType: "command",
    partType: "banners",
    baseSize: "",
    terrainType: "",
    tags: ["bits", "conversion-kits", "warhammer", "grimdark"],
    image: "./assets/merchant/card-banner.jpg",
    gallery: ["./assets/merchant/card-banner.jpg", "./assets/merchant/card-ancient-armor.jpg", "./assets/merchant/card-heads.jpg"],
    meta: "детали · смола · 3–7 дней",
    description: "Знамя, икона и детали для командного отряда.",
    scale: "под 28–32 мм",
    material: "фотополимерная смола",
    time: "3–7 рабочих дней",
    status: "под заказ",
    pack: "Знамя, икона и крепёжные детали.",
    characteristics: "Тип: детали. Система: Warhammer / proxy. Стиль: grimdark.",
  },
  artifacts: {
    id: "artifacts",
    title: "Кладовая артефактов",
    price: 780,
    category: "terrain",
    productKind: "terrain",
    universe: "dnd",
    faction: "",
    unitType: "",
    partType: "",
    baseSize: "",
    terrainType: "props",
    tags: ["rpg", "dnd", "props", "terrain"],
    image: "./assets/merchant/card-hunter.jpg",
    gallery: ["./assets/merchant/card-hunter.jpg", "./assets/merchant/card-primal-hounds.jpg", "./assets/merchant/card-champion.jpg"],
    meta: "RPG · смола · 3–7 дней",
    description: "Набор пропсов для RPG-сцены и витринной базы.",
    scale: "terrain scale",
    material: "фотополимерная смола",
    time: "3–7 рабочих дней",
    status: "под заказ",
    pack: "Сундуки, артефакты, мелкий scatter-декор.",
    characteristics: "Тип: RPG-пропсы. Система: D&D / НРИ.",
  },
  mechanics: {
    id: "mechanics",
    title: "Отряд полевых механиков",
    price: 1450,
    category: "model",
    productKind: "model",
    universe: "nri",
    faction: "",
    unitType: "npc-squad",
    partType: "",
    baseSize: "32mm",
    terrainType: "",
    tags: ["rpg", "scifi-rpg", "squads"],
    image: "./assets/merchant/card-champion.jpg",
    gallery: ["./assets/merchant/card-champion.jpg", "./assets/merchant/card-cursed-company.jpg", "./assets/merchant/card-hunter.jpg"],
    meta: "отряд · смола · 3–7 дней",
    description: "Команда NPC для sci-fi RPG, skirmish и диорам.",
    scale: "32 мм",
    material: "фотополимерная смола",
    time: "3–7 рабочих дней",
    status: "под заказ",
    pack: "Команда механиков, инструменты и базы.",
    characteristics: "Тип: NPC-отряд. Система: sci-fi RPG / skirmish.",
  },
};

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const filterLabels = {
  productKind: {
    all: "Все товары",
    bundle: "Наборы",
    base: "Базы",
    terrain: "Террейн",
    model: "Модели",
    bits: "Детали",
  },
  universe: {
    warhammer: "Warhammer",
    dnd: "D&D",
    nri: "НРИ",
  },
  faction: {
    salamanders: "Salamanders",
    "blood-angels": "Blood Angels",
    "space-wolves": "Space Wolves",
    "legion-of-doom": "Legion of Doom",
  },
  unitType: {
    infantry: "Infantry",
    command: "Command",
    dreadnought: "Dreadnought",
    "npc-squad": "NPC squad",
  },
  partType: {
    heads: "Головы",
    shoulders: "Наплечники",
    weapons: "Оружие",
    arms: "Руки",
    legs: "Ноги",
    armor: "Торсы / броня",
    banners: "Баннеры",
    cloaks: "Плащи",
    "dreadnought-upgrades": "Дредноут-апгрейды",
    accessories: "Аксессуары",
    other: "Другое",
  },
  baseSize: {
    "28mm": "28 мм",
    "32mm": "32 мм",
    "40mm": "40 мм",
  },
};

const filterQueryKeys = {
  productKind: "kind",
  universe: "universe",
  faction: "faction",
  unitType: "unit",
  partType: "part",
  baseSize: "base",
};

const legacyCategoryMap = {
  all: {},
  miniatures: { productKind: "model" },
  bits: { productKind: "all" },
  terrain: { productKind: "terrain" },
  rpg: { universe: "nri" },
  bundles: { productKind: "bundle" },
};

const defaultCatalogFilters = {
  productKind: "all",
  universe: "",
  faction: "",
  unitType: "",
  partType: "",
  baseSize: "",
};

const filterTriggerIdleLabels = {
  universe: "Выбор вселенной",
  details: "Детали",
  bases: "Базы",
  faction: "Фракция",
  unitType: "Тип отряда",
};

const filterTriggerActiveLabels = {
  universe: "Вселенная:",
  details: "Детали:",
  bases: "База:",
  faction: "Фракция:",
  unitType: "Тип отряда:",
};

const filterTriggerValueGroups = {
  universe: "universe",
  details: "partType",
  bases: "baseSize",
  faction: "faction",
  unitType: "unitType",
};

const screens = Array.from(document.querySelectorAll("[data-screen]"));
const routeButtons = Array.from(document.querySelectorAll("[data-route]"));
const scrollSpyTargets = Array.from(new Set(routeButtons.map((button) => button.dataset.scrollTo).filter(Boolean)))
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const filterControls = Array.from(document.querySelectorAll("[data-filter-group][data-filter-value]"));
const filterGroupToggles = Array.from(document.querySelectorAll("[data-filter-toggle-group]"));
const dependentFilterPanels = Array.from(document.querySelectorAll("[data-dependent-filter]"));
const productCards = Array.from(document.querySelectorAll("[data-product-id]"));
const cartBadge = document.querySelector("[data-cart-count]");
const cartList = document.querySelector("[data-cart-list]");
const cartSubtotal = document.querySelector("[data-cart-subtotal]");
const checkoutSubtotal = document.querySelector("[data-checkout-subtotal]");
const cartTotal = document.querySelector("[data-cart-total]");
const checkoutTotal = document.querySelector("[data-checkout-total]");
const deliveryMin = document.querySelector("[data-delivery-min]");
const minOrderWarning = document.querySelector("[data-min-order-warning]");
const checkoutLink = document.querySelector("[data-checkout-link]");
const cartClearButton = document.querySelector("[data-cart-clear]");
const catalogSearch = document.querySelector("[data-catalog-search]");
const resultCount = document.querySelector("[data-result-count]");
const catalogTitle = document.querySelector("[data-catalog-title]");
const activeFilterChips = document.querySelector("[data-active-filter-chips]");
const filterToggle = document.querySelector("[data-filter-toggle]");
const filterPanel = document.querySelector("[data-filter-panel]");
const filterCloseButtons = Array.from(document.querySelectorAll("[data-filter-close]"));
const filterCloseResultsButton = document.querySelector("[data-filter-close-results]");
const filterResetButton = document.querySelector("[data-filter-reset]");
const featuredRail = document.querySelector("[data-featured-rail]");
const featuredTabs = Array.from(document.querySelectorAll("[data-featured-tab]"));
const featuredRailButtons = Array.from(document.querySelectorAll("[data-featured-scroll]"));
const sortControl = document.querySelector("[data-sort-control]");
const loadMoreButton = document.querySelector("[data-load-more]");
const themeToggles = Array.from(document.querySelectorAll("[data-theme-toggle]"));
const scrollRevealItems = Array.from(document.querySelectorAll(".scroll-reveal"));
const heroSlides = Array.from(document.querySelectorAll("[data-hero-slide]"));
const HERO_CAROUSEL_INTERVAL_MS = 8500;
const HERO_CAROUSEL_FIRST_DELAY_MS = 7500;
const drawer = document.querySelector("[data-mobile-drawer]");
const drawerOpenButton = document.querySelector("[data-drawer-open]");
const drawerCloseButtons = Array.from(document.querySelectorAll("[data-drawer-close]"));
const galleryModal = document.querySelector("[data-gallery-modal]");
const galleryZoomButton = document.querySelector("[data-gallery-zoom]");
const galleryCloseButtons = Array.from(document.querySelectorAll("[data-gallery-close]"));
const galleryThumbs = document.querySelector("[data-gallery-thumbs]");
const checkoutForm = document.querySelector("[data-checkout-form]");
const checkoutSubmit = document.querySelector("[data-checkout-submit]");
const checkoutError = document.querySelector("[data-checkout-error]");
const stlForm = document.querySelector("[data-stl-form]");
const stlSubmit = document.querySelector("[data-stl-submit]");
const stlError = document.querySelector("[data-stl-error]");
const successItems = document.querySelector("[data-success-items]");
const successContact = document.querySelector("[data-success-contact]");
const successNumber = document.querySelector("[data-success-number]");
const blogList = document.querySelector("[data-blog-list]");
const articleView = document.querySelector("[data-article-view]");
const articleKicker = document.querySelector("[data-article-kicker]");
const articleTitle = document.querySelector("[data-article-title]");
const articleBody = document.querySelector("[data-article-body]");
const metaDescription = document.querySelector('meta[name="description"]');
const defaultDocumentTitle = document.title;
const defaultMetaDescription = metaDescription?.content || "";
const detailNodes = {
  breadcrumb: document.querySelector("[data-detail-breadcrumb]"),
  title: document.querySelector("[data-detail-title]"),
  description: document.querySelector("[data-detail-description]"),
  price: document.querySelector("[data-detail-price]"),
  stickyPrice: document.querySelector("[data-detail-sticky-price]"),
  mainImage: document.querySelector("[data-detail-main-image]"),
  scale: document.querySelector("[data-detail-scale]"),
  material: document.querySelector("[data-detail-material]"),
  time: document.querySelector("[data-detail-time]"),
  status: document.querySelector("[data-detail-status]"),
  statusText: document.querySelector("[data-detail-status-text]"),
  pack: document.querySelector("[data-detail-pack]"),
  characteristics: document.querySelector("[data-detail-characteristics]"),
  clarity: document.querySelector("[data-detail-clarity]"),
  license: document.querySelector("[data-detail-license]"),
};
const modalImage = document.querySelector("[data-gallery-modal-image]");

let activeScreenName = "home";
let catalogFilters = { ...defaultCatalogFilters };
const expandedFilterGroups = new Set();
let activeSearch = "";
let currentFeaturedTab = "hits";
let activeSort = "popular";
let visibleProductLimit = 8;
let activeProductId = "hunter";
let cartItems = [];
let detailCartQuantity = 0;
let currentRouteKey = "#home";
let manualNavigationHash = "";
const scrollPositions = new Map();
let lastFocusedElement = null;
let drawerScrollY = 0;
let filterLastFocusedElement = null;
let filterScrollY = 0;
let isSubmitting = false;
let pendingSubmitTimer = 0;
let checkoutSubmitted = false;
let stlSubmitted = false;
let heroSlideIndex = 0;
let heroSlideTimer = 0;
let heroSlideStartTimer = 0;
let activeScrollTarget = "";
let scrollSpyFrame = 0;
let hasAppliedRoute = false;

const blogArticles = window.drPrinticusBlogArticles || {};

function getStoredTheme() {
  try {
    const storedTheme = window.localStorage?.getItem(DR_PRINTICUS_THEME_KEY);
    return COLOR_THEMES.has(storedTheme) ? storedTheme : "";
  } catch {
    return "";
  }
}

function getCurrentTheme() {
  const theme = document.documentElement.dataset.colorTheme;
  return COLOR_THEMES.has(theme) ? theme : DEFAULT_COLOR_THEME;
}

function syncThemeControls(theme = getCurrentTheme()) {
  const targetTheme = theme === "dark" ? "light" : "dark";
  const label = targetTheme === "light" ? "Включить светлую тему" : "Включить темную тему";

  themeToggles.forEach((button) => {
    button.dataset.themeToggle = targetTheme;
    button.setAttribute("aria-label", label);
    button.setAttribute("aria-pressed", String(theme === "light"));
    button.setAttribute("title", label);
  });
}

function applyTheme(theme, { persist = false } = {}) {
  const nextTheme = COLOR_THEMES.has(theme) ? theme : DEFAULT_COLOR_THEME;
  document.documentElement.dataset.colorTheme = nextTheme;
  syncThemeControls(nextTheme);

  if (persist) {
    try {
      window.localStorage?.setItem(DR_PRINTICUS_THEME_KEY, nextTheme);
    } catch {
      // Theme switching should remain usable even when storage is unavailable.
    }
  }

  return nextTheme;
}

function toggleTheme() {
  return applyTheme(getCurrentTheme() === "dark" ? "light" : "dark", { persist: true });
}

function initTheme() {
  applyTheme(getStoredTheme() || DEFAULT_COLOR_THEME);
}

function money(value) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

function getRouteKey() {
  return window.location.hash || "#home";
}

function getCurrentScrollY() {
  if ((document.body.classList.contains("drawer-open") || document.body.classList.contains("filter-open")) && document.body.style.top) {
    const lockedY = Number.parseFloat(document.body.style.top);
    return Number.isFinite(lockedY) ? Math.abs(lockedY) : window.scrollY;
  }
  return window.scrollY;
}

function rememberScrollPosition(key = currentRouteKey) {
  if (!key) return;
  scrollPositions.set(key, getCurrentScrollY());
}

function getHeaderScrollOffset() {
  const styles = window.getComputedStyle(document.documentElement);
  const routeOffset = Number.parseFloat(styles.getPropertyValue("--route-scroll-offset"));
  if (Number.isFinite(routeOffset) && routeOffset > 0) return routeOffset;
  const headerHeight = document.querySelector(".topbar")?.getBoundingClientRect().height || 0;
  return headerHeight + 24;
}

function scrollToElementWithHeaderOffset(id, smooth = false) {
  const target = document.getElementById(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - getHeaderScrollOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: smooth ? "smooth" : "auto" });
}

function scrollToActiveScreenTop(smooth = false) {
  const activeScreen = document.querySelector(".screen.is-active");
  if (!activeScreen) return;
  const top = activeScreen.getBoundingClientRect().top + window.scrollY - getHeaderScrollOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: smooth ? "smooth" : "auto" });
}

function restoreRouteScroll({ manualNavigation, scrollTarget }) {
  requestAnimationFrame(() => {
    if (scrollTarget) {
      scrollToElementWithHeaderOffset(scrollTarget, manualNavigation);
      return;
    }

    const savedY = scrollPositions.get(getRouteKey());
    if (!manualNavigation && Number.isFinite(savedY)) {
      window.scrollTo({ top: savedY, behavior: "auto" });
      return;
    }

    if (activeScreenName !== "home") {
      scrollToActiveScreenTop(manualNavigation);
      return;
    }

    window.scrollTo({ top: 0, behavior: manualNavigation && activeScreenName !== "home" ? "smooth" : "auto" });
  });
}

function getCartQuantity() {
  return cartItems.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartSubtotal() {
  return cartItems.reduce((sum, item) => sum + products[item.id].price * item.quantity, 0);
}

function getCartItem(id) {
  return cartItems.find((item) => item.id === id);
}

function isCheckoutBlocked() {
  const subtotal = getCartSubtotal();
  return cartItems.length === 0 || (subtotal > 0 && subtotal < MIN_ORDER_AMOUNT);
}

function getProductList() {
  const list = Object.values(products);
  if (activeSort === "price-asc") {
    return [...list].sort((a, b) => a.price - b.price);
  }
  if (activeSort === "price-desc") {
    return [...list].sort((a, b) => b.price - a.price);
  }
  return list;
}

function setCartQuantity(id, quantity) {
  const nextQuantity = Math.max(0, quantity);
  const existing = getCartItem(id);

  if (existing && nextQuantity === 0) {
    cartItems = cartItems.filter((item) => item.id !== id);
  } else if (existing) {
    existing.quantity = nextQuantity;
  } else if (nextQuantity > 0) {
    cartItems.push({ id, quantity: nextQuantity });
  }

  if (id === activeProductId) {
    detailCartQuantity = getCartItem(activeProductId)?.quantity || 0;
  }

  renderCart();
  updateCardQuantities();
  if (activeScreenName === "cart" && cartItems.length === 0) {
    goToScreen("cart-empty");
  }
}

function addToCart(id) {
  const current = getCartItem(id)?.quantity || 0;
  setCartQuantity(id, current + 1);
}

function removeFromCart(id) {
  const current = getCartItem(id)?.quantity || 0;
  setCartQuantity(id, current - 1);
}

function clearCart() {
  cartItems = [];
  renderCart();
  updateCardQuantities();
  if (activeScreenName === "cart") {
    goToScreen("cart-empty");
  }
}

function updateCardQuantities() {
  Object.keys(products).forEach((id) => {
    const quantity = getCartItem(id)?.quantity || 0;
    document.querySelectorAll(`[data-cart-action="${id}"]`).forEach((action) => {
      action.hidden = quantity > 0;
    });
    document.querySelectorAll(`[data-card-qty="${id}"]`).forEach((control) => {
      control.hidden = quantity === 0;
    });
    document.querySelectorAll(`[data-card-count="${id}"]`).forEach((count) => {
      count.textContent = quantity ? String(quantity) : "";
    });
  });

  const detailCounts = Array.from(document.querySelectorAll("[data-detail-cart-count]"));
  const detailControls = Array.from(document.querySelectorAll("[data-detail-qty]"));
  const detailAdds = Array.from(document.querySelectorAll("[data-detail-cart-add]"));
  detailCartQuantity = getCartItem(activeProductId)?.quantity || 0;
  detailCounts.forEach((count) => {
    count.textContent = detailCartQuantity ? String(detailCartQuantity) : "";
  });
  detailControls.forEach((control) => {
    control.hidden = detailCartQuantity === 0;
  });
  detailAdds.forEach((action) => {
    action.hidden = detailCartQuantity > 0;
  });
}

function renderCart() {
  const subtotal = getCartSubtotal();
  const total = subtotal + (subtotal > 0 ? MIN_DELIVERY_PRICE : 0);
  const quantity = getCartQuantity();
  const blocked = isCheckoutBlocked();

  if (cartBadge) {
    cartBadge.textContent = quantity ? String(quantity) : "";
  }

  if (cartClearButton) {
    cartClearButton.hidden = cartItems.length === 0;
  }

  if (cartList) {
    if (cartItems.length === 0) {
      cartList.innerHTML = `
        <div class="empty-state">
          <h2>Корзина пока пустая</h2>
          <p>Добавьте миниатюру, пак террейна или детали, чтобы собрать заявку.</p>
          <a class="primary" href="#catalog" data-route="catalog">В каталог</a>
        </div>
      `;
    } else {
      cartList.innerHTML = cartItems
        .map((item) => {
          const product = products[item.id];
          return `
            <article class="cart-row" data-cart-row="${item.id}">
              <img src="${product.image}" alt="${product.title}" loading="lazy" decoding="async" fetchpriority="low" />
              <div>
                <h2>${product.title}</h2>
                <p>${product.meta}</p>
              </div>
              <div class="quantity-control">
                <button type="button" data-cart-minus="${item.id}" aria-label="Уменьшить количество">−</button>
                <span>${item.quantity}</span>
                <button type="button" data-cart-plus="${item.id}" aria-label="Увеличить количество">+</button>
              </div>
              <strong class="price">${money(product.price * item.quantity)}</strong>
              <button class="remove-button" type="button" data-cart-remove="${item.id}">Удалить</button>
            </article>
          `;
        })
        .join("");
    }
  }

  if (cartSubtotal) cartSubtotal.textContent = money(subtotal);
  if (checkoutSubtotal) checkoutSubtotal.textContent = money(subtotal);
  if (deliveryMin) deliveryMin.textContent = subtotal > 0 ? `от ${money(MIN_DELIVERY_PRICE)}` : "0 ₽";
  if (cartTotal) cartTotal.textContent = money(total);
  if (checkoutTotal) checkoutTotal.textContent = money(total);

  if (minOrderWarning) {
    if (cartItems.length > 0 && blocked) {
      const missing = MIN_ORDER_AMOUNT - subtotal;
      minOrderWarning.hidden = false;
      minOrderWarning.innerHTML = `<strong>Минимальная сумма заказа — 250 ₽.</strong><p>Добавьте товаров ещё на ${money(missing)}. Доставка не учитывается при проверке минимальной суммы.</p>`;
    } else {
      minOrderWarning.hidden = true;
      minOrderWarning.textContent = "";
    }
  }

  if (checkoutLink) {
    const disabled = blocked;
    checkoutLink.setAttribute("aria-disabled", String(disabled));
  }
}

function routeToHash(screen, params = {}) {
  const search = new URLSearchParams(params);
  const query = search.toString();
  return `#${screen}${query ? `?${query}` : ""}`;
}

function parseHash() {
  const raw = window.location.hash.replace(/^#/, "") || "home";
  const [screenName, query = ""] = raw.split("?");
  return {
    screenName: screenName || "home",
    params: new URLSearchParams(query),
  };
}

function updateActiveNavigation() {
  routeButtons.forEach((button) => {
    const isCategoryRoute = Boolean(button.dataset.categoryRoute);
    const isScrollRoute = Boolean(button.dataset.scrollTo);
    const isCurrentScreen = button.dataset.route === activeScreenName && !isCategoryRoute && !isScrollRoute;
    const isCurrentScroll = button.dataset.route === activeScreenName && button.dataset.scrollTo === activeScrollTarget;
    button.classList.toggle("is-current", isCurrentScreen || isCurrentScroll);
  });
}

function updateActiveScrollTarget() {
  if (activeScreenName !== "home" || scrollSpyTargets.length === 0) {
    if (activeScrollTarget) {
      activeScrollTarget = "";
      updateActiveNavigation();
    }
    return;
  }

  const headerHeight = document.querySelector(".topbar")?.getBoundingClientRect().height || 0;
  let nextTarget = "";
  let bestRatio = 0;

  scrollSpyTargets.forEach((target) => {
    const rect = target.getBoundingClientRect();
    const viewportHeight = Math.max(1, window.innerHeight - headerHeight);
    const visibleTop = Math.max(rect.top, headerHeight);
    const visibleBottom = Math.min(rect.bottom, window.innerHeight);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    const ratio = visibleHeight / Math.min(Math.max(rect.height, 1), viewportHeight);
    if (ratio > bestRatio && ratio >= 0.28) {
      bestRatio = ratio;
      nextTarget = target.id;
    }
  });

  if (nextTarget !== activeScrollTarget) {
    activeScrollTarget = nextTarget;
    updateActiveNavigation();
  }
}

function scheduleActiveScrollUpdate() {
  if (scrollSpyFrame) return;
  scrollSpyFrame = window.requestAnimationFrame(() => {
    scrollSpyFrame = 0;
    updateActiveScrollTarget();
  });
}

function setActiveScreen(screenName) {
  const next = screens.find((screen) => screen.dataset.screen === screenName) || screens.find((screen) => screen.dataset.screen === "home");
  activeScreenName = next.dataset.screen;
  screens.forEach((screen) => screen.classList.toggle("is-active", screen === next));
  updateActiveScrollTarget();
  updateActiveNavigation();
}

function goToScreen(screenName, params = {}) {
  rememberScrollPosition();
  if (screenName !== activeScreenName && pendingSubmitTimer) {
    window.clearTimeout(pendingSubmitTimer);
    pendingSubmitTimer = 0;
    isSubmitting = false;
    if (checkoutSubmit) {
      checkoutSubmit.disabled = false;
      checkoutSubmit.textContent = "Отправить заявку";
    }
    if (stlSubmit) {
      stlSubmit.disabled = false;
      stlSubmit.textContent = "Получить расчёт";
    }
  }
  if (screenName === "checkout" && isCheckoutBlocked()) {
    screenName = cartItems.length === 0 ? "cart-empty" : "cart-blocked";
    params = {};
  }
  if (screenName === "cart" && cartItems.length === 0) {
    screenName = "cart-empty";
    params = {};
  }
  const hash = routeToHash(screenName, params);
  manualNavigationHash = hash;
  if (window.location.hash !== hash) {
    window.location.hash = hash;
    return;
  }
  applyRoute();
}

function applyRoute() {
  if (hasAppliedRoute) {
    rememberScrollPosition();
  }
  const { screenName, params } = parseHash();
  const nextHash = getRouteKey();
  const manualNavigation = manualNavigationHash === nextHash;
  manualNavigationHash = "";

  if (screenName === "checkout" && isCheckoutBlocked()) {
    goToScreen(cartItems.length === 0 ? "cart-empty" : "cart-blocked");
    return;
  }
  if (screenName === "cart" && cartItems.length === 0) {
    goToScreen("cart-empty");
    return;
  }
  if (screenName === "success" && !checkoutSubmitted) {
    goToScreen(cartItems.length === 0 ? "cart-empty" : isCheckoutBlocked() ? "cart-blocked" : "checkout");
    return;
  }
  if (screenName === "stl-success" && !stlSubmitted) {
    goToScreen("stl");
    return;
  }

  setActiveScreen(screenName);

  if (screenName === "catalog") {
    applyCatalogRoute(params);
  }

  if (screenName === "product") {
    renderProductDetail(params.get("product") || activeProductId);
  }

  if (screenName === "blog") {
    renderBlogArticle(params.get("article"));
  } else {
    document.title = defaultDocumentTitle;
    if (metaDescription) metaDescription.setAttribute("content", defaultMetaDescription);
  }

  const scrollTarget = params.get("scroll");
  currentRouteKey = nextHash;
  restoreRouteScroll({ manualNavigation, scrollTarget });
  hasAppliedRoute = true;
  scheduleActiveScrollUpdate();

  closeDrawer({ restoreScroll: false });
  closeFilterPanel({ restoreScroll: false });
}

function resetCatalogFilters() {
  catalogFilters = { ...defaultCatalogFilters };
}

function isKnownFilterValue(group, value) {
  if (group === "productKind" && value === "all") return true;
  return Boolean(filterLabels[group]?.[value]);
}

function normalizeCatalogFilters(filters) {
  const next = { ...defaultCatalogFilters };
  Object.entries(filterQueryKeys).forEach(([group]) => {
    const value = filters[group] || "";
    if (value && isKnownFilterValue(group, value)) next[group] = value;
  });
  if (next.partType) next.productKind = "all";
  if (next.baseSize) next.productKind = "all";
  if (next.faction || next.unitType) next.universe = "warhammer";
  if (next.universe !== "warhammer") {
    next.faction = "";
    next.unitType = "";
  }
  return next;
}

function getCatalogRouteParams() {
  const params = {};
  Object.entries(filterQueryKeys).forEach(([group, key]) => {
    const value = catalogFilters[group];
    if (group === "productKind" && value === "all") return;
    if (value) params[key] = value;
  });
  return params;
}

function replaceCatalogRouteWithoutNavigation() {
  const hash = routeToHash("catalog", getCatalogRouteParams());
  window.history.replaceState(null, "", hash);
  currentRouteKey = getRouteKey();
  updateActiveNavigation();
}

function getFilterLabel(group, value) {
  return filterLabels[group]?.[value] || value;
}

function getFilterTriggerSelection(group) {
  if (group === "bases" && catalogFilters.productKind === "base" && !catalogFilters.baseSize) {
    return ["productKind", "base"];
  }
  const valueGroup = filterTriggerValueGroups[group];
  const value = valueGroup ? catalogFilters[valueGroup] : "";
  return value ? [valueGroup, value] : null;
}

function getFilterTriggerLabel(group) {
  const selection = getFilterTriggerSelection(group);
  if (!selection) return filterTriggerIdleLabels[group] || group;
  const [valueGroup, value] = selection;
  if (group === "bases" && valueGroup === "productKind") return "Базы: все";
  const label = filterTriggerActiveLabels[group] || filterTriggerIdleLabels[group] || group;
  return `${label} ${getFilterLabel(valueGroup, value)}`;
}

function closeOtherFilterGroups(activeGroup) {
  Array.from(expandedFilterGroups).forEach((group) => {
    if (group !== activeGroup) expandedFilterGroups.delete(group);
  });
}

function collapseFilterGroup(group) {
  if (group) expandedFilterGroups.delete(group);
}

function toggleFilterGroup(group) {
  if (expandedFilterGroups.has(group)) {
    collapseFilterGroup(group);
    return;
  }
  closeOtherFilterGroups(group);
  expandedFilterGroups.add(group);
}

function updateFilterTriggerLabels() {
  filterGroupToggles.forEach((toggle) => {
    const group = toggle.dataset.filterToggleGroup;
    const selected = Boolean(getFilterTriggerSelection(group));
    toggle.textContent = getFilterTriggerLabel(group);
    toggle.classList.toggle("is-active", selected);
  });
}

function getSelectedFilterEntries() {
  const entries = [];
  if (catalogFilters.productKind !== "all") entries.push(["productKind", catalogFilters.productKind]);
  if (catalogFilters.universe) entries.push(["universe", catalogFilters.universe]);
  if (catalogFilters.faction) entries.push(["faction", catalogFilters.faction]);
  if (catalogFilters.unitType) entries.push(["unitType", catalogFilters.unitType]);
  if (catalogFilters.partType) entries.push(["partType", catalogFilters.partType]);
  if (catalogFilters.baseSize) entries.push(["baseSize", catalogFilters.baseSize]);
  return entries;
}

function getCatalogTitle() {
  if (catalogFilters.partType) return `Детали: ${getFilterLabel("partType", catalogFilters.partType)}`;
  if (catalogFilters.baseSize) return `Базы: ${getFilterLabel("baseSize", catalogFilters.baseSize)}`;
  if (catalogFilters.unitType) return getFilterLabel("unitType", catalogFilters.unitType);
  if (catalogFilters.faction) return getFilterLabel("faction", catalogFilters.faction);
  if (catalogFilters.universe) return getFilterLabel("universe", catalogFilters.universe);
  if (catalogFilters.productKind !== "all") return getFilterLabel("productKind", catalogFilters.productKind);
  return "Все товары";
}

function productMatchesCatalogFilters(product) {
  if (!product) return false;
  if (catalogFilters.productKind !== "all" && product.productKind !== catalogFilters.productKind) return false;
  if (catalogFilters.universe && product.universe !== catalogFilters.universe) return false;
  if (catalogFilters.faction && product.faction !== catalogFilters.faction) return false;
  if (catalogFilters.unitType && product.unitType !== catalogFilters.unitType) return false;
  if (catalogFilters.partType) {
    if (product.productKind !== "bits" || product.partType !== catalogFilters.partType) return false;
  }
  if (catalogFilters.baseSize && product.baseSize !== catalogFilters.baseSize) return false;
  return true;
}

function getProductSearchText(product) {
  return [
    product.title,
    product.description,
    product.category,
    product.productKind,
    product.universe,
    product.faction,
    product.unitType,
    product.partType,
    product.baseSize,
    product.terrainType,
    ...(product.tags || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function applyCatalogRoute(params = new URLSearchParams()) {
  const routeParams = typeof params === "string" ? new URLSearchParams({ category: params }) : params;
  const next = { ...defaultCatalogFilters };
  const legacyCategory = routeParams.get("category");
  if (legacyCategory && legacyCategoryMap[legacyCategory]) {
    Object.assign(next, legacyCategoryMap[legacyCategory]);
  }
  Object.entries(filterQueryKeys).forEach(([group, key]) => {
    const value = routeParams.get(key);
    if (value) next[group] = value;
  });
  catalogFilters = normalizeCatalogFilters(next);
  expandedFilterGroups.clear();
  filterCatalog();
}

function getAvailableFilterOptions(group) {
  const seen = new Set();
  getProductList().forEach((product) => {
    if (group === "faction" && product.universe !== "warhammer") return;
    if (group === "unitType") {
      if (catalogFilters.faction && product.faction !== catalogFilters.faction) return;
      if (!catalogFilters.faction && catalogFilters.universe && product.universe !== catalogFilters.universe) return;
    }
    const value = product[group];
    if (value && filterLabels[group]?.[value]) seen.add(value);
  });
  return Array.from(seen).sort((a, b) => getFilterLabel(group, a).localeCompare(getFilterLabel(group, b), "ru"));
}

function createFilterControl(group, value) {
  const button = document.createElement("button");
  button.className = "chip";
  button.type = "button";
  button.dataset.filterGroup = group;
  button.dataset.filterValue = value;
  button.textContent = getFilterLabel(group, value);
  return button;
}

function renderGeneratedFilterPanel(panel, group) {
  const options = getAvailableFilterOptions(group);
  panel.replaceChildren();
  if (!options.length) {
    panel.hidden = true;
    return;
  }
  options.forEach((value) => panel.appendChild(createFilterControl(group, value)));
}

function shouldShowDependentFilter(name) {
  return expandedFilterGroups.has(name);
}

function shouldShowGeneratedFilterGroup(name, hasOptions) {
  if (name === "faction") return hasOptions && (catalogFilters.universe === "warhammer" || Boolean(catalogFilters.faction));
  if (name === "unitType") return hasOptions && Boolean(catalogFilters.faction || catalogFilters.unitType);
  return true;
}

function renderDependentFilters() {
  dependentFilterPanels.forEach((panel) => {
    const name = panel.dataset.dependentFilter;
    if (name === "faction") {
      renderGeneratedFilterPanel(panel, "faction");
    }
    if (name === "unitType") {
      renderGeneratedFilterPanel(panel, "unitType");
    }
    const generatedGroup = panel.closest("[data-generated-filter-group]");
    const hasOptions = panel.children.length > 0;
    const groupVisible = shouldShowGeneratedFilterGroup(name, hasOptions);

    if (generatedGroup) {
      generatedGroup.hidden = !groupVisible;
      generatedGroup.classList.toggle("is-visible", groupVisible);
    }
    if (!groupVisible) collapseFilterGroup(name);

    const panelVisible = groupVisible && shouldShowDependentFilter(name) && hasOptions;
    panel.hidden = !panelVisible;
    panel.classList.toggle("is-visible", panelVisible);
  });

  filterGroupToggles.forEach((toggle) => {
    const group = toggle.dataset.filterToggleGroup;
    toggle.setAttribute("aria-expanded", String(shouldShowDependentFilter(group)));
  });
  updateFilterTriggerLabels();
}

function isAllProductsControlActive() {
  return catalogFilters.productKind === "all" && getSelectedFilterEntries().length === 0;
}

function syncFilterControls() {
  document.querySelectorAll("[data-filter-group][data-filter-value]").forEach((button) => {
    const group = button.dataset.filterGroup;
    const value = button.dataset.filterValue;
    const pressed = group === "productKind" && value === "all" ? isAllProductsControlActive() : catalogFilters[group] === value;
    button.classList.toggle("is-active", pressed);
    button.setAttribute("aria-pressed", String(pressed));
  });
}

function setCatalogFilter(group, value) {
  if (!isKnownFilterValue(group, value)) return;

  if (group === "productKind") {
    if (value === "all") {
      resetCatalogFilters();
      expandedFilterGroups.clear();
      return;
    }
    if (catalogFilters.productKind === value) {
      catalogFilters.productKind = "all";
      if (value === "base") catalogFilters.baseSize = "";
      return;
    }
    catalogFilters.productKind = value;
    catalogFilters.partType = "";
    catalogFilters.baseSize = "";
    return;
  }

  if (group === "universe") {
    if (catalogFilters.universe === value) {
      catalogFilters.universe = "";
      catalogFilters.faction = "";
      catalogFilters.unitType = "";
      return;
    }
    const changed = catalogFilters.universe !== value;
    catalogFilters.universe = value;
    if (changed) {
      catalogFilters.faction = "";
      catalogFilters.unitType = "";
    }
    return;
  }

  if (group === "faction") {
    catalogFilters.universe = "warhammer";
    catalogFilters.faction = catalogFilters.faction === value ? "" : value;
    catalogFilters.unitType = "";
    return;
  }

  if (group === "unitType") {
    catalogFilters.unitType = catalogFilters.unitType === value ? "" : value;
    return;
  }

  if (group === "partType") {
    catalogFilters.productKind = "all";
    catalogFilters.partType = catalogFilters.partType === value ? "" : value;
    return;
  }

  if (group === "baseSize") {
    catalogFilters.productKind = "all";
    catalogFilters.baseSize = catalogFilters.baseSize === value ? "" : value;
  }
}

function filterCatalog() {
  const query = (catalogSearch?.value || "").trim().toLowerCase();
  activeSearch = query;
  let visibleCount = 0;
  let renderedCount = 0;
  const orderedIds = getProductList().map((product) => product.id);
  const productGrid = document.querySelector("[data-product-grid]");
  const orderedCards = orderedIds
    .map((id) => document.querySelector(`[data-product-id="${id}"]`))
    .filter(Boolean);

  if (productGrid) {
    orderedCards.forEach((card) => productGrid.appendChild(card));
  }

  orderedCards.forEach((card) => {
    const product = products[card.dataset.productId];
    const haystack = getProductSearchText(product);
    const matchesFilter = productMatchesCatalogFilters(product);
    const matchesSearch = !query || haystack.includes(query);
    const matches = matchesFilter && matchesSearch;
    const visible = matches && renderedCount < visibleProductLimit;
    card.classList.toggle("is-hidden", !visible);
    if (matches) {
      visibleCount += 1;
      renderedCount += 1;
    }
  });

  renderDependentFilters();
  syncFilterControls();

  if (catalogTitle) catalogTitle.textContent = getCatalogTitle();
  if (resultCount) resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? "позиция" : visibleCount > 1 && visibleCount < 5 ? "позиции" : "позиций"}`;
  const emptyState = document.querySelector("[data-catalog-empty]");
  if (emptyState) emptyState.hidden = visibleCount > 0;
  if (loadMoreButton) {
    loadMoreButton.hidden = visibleCount <= visibleProductLimit;
  }
  if (filterCloseResultsButton) {
    filterCloseResultsButton.textContent = `Показать ${visibleCount} ${visibleCount === 1 ? "товар" : visibleCount > 1 && visibleCount < 5 ? "товара" : "товаров"}`;
  }

  renderActiveFilterChips();
}

function renderActiveFilterChips() {
  if (!activeFilterChips) return;
  activeFilterChips.replaceChildren();
  const chips = getSelectedFilterEntries().map(([group, value]) => {
    if (group === "partType") return `Детали: ${getFilterLabel(group, value)}`;
    if (group === "baseSize") return `Базы: ${getFilterLabel(group, value)}`;
    return getFilterLabel(group, value);
  });
  if (activeSearch) chips.push(`Поиск: ${activeSearch}`);
  chips.forEach((chip) => {
    const chipNode = document.createElement("span");
    chipNode.textContent = chip;
    activeFilterChips.appendChild(chipNode);
  });
  if (chips.length) {
    const reset = document.createElement("button");
    reset.className = "secondary";
    reset.type = "button";
    reset.dataset.filterReset = "";
    reset.textContent = "Сбросить фильтры";
    activeFilterChips.appendChild(reset);
  }
}

function renderBlogArticle(articleId) {
  const article = articleId ? blogArticles[articleId] : null;
  if (blogList) blogList.hidden = Boolean(article);
  if (articleView) articleView.hidden = !article;
  if (!article) {
    document.title = defaultDocumentTitle;
    if (metaDescription) metaDescription.setAttribute("content", defaultMetaDescription);
    return;
  }

  document.title = article.seoTitle ? `${article.seoTitle} | Dr. Printicus` : defaultDocumentTitle;
  if (metaDescription && article.metaDescription) metaDescription.setAttribute("content", article.metaDescription);

  if (articleKicker) articleKicker.textContent = article.kicker;
  if (articleTitle) articleTitle.textContent = article.title;
  if (articleBody) {
    articleBody.replaceChildren();
    const lead = document.createElement("div");
    lead.className = "article-lead";
    const leadText = document.createElement("p");
    leadText.textContent = article.teaser;
    lead.appendChild(leadText);
    articleBody.appendChild(lead);

    renderArticleMarkdown(article.body || "").forEach((node) => articleBody.appendChild(node));

    const cta = document.createElement("aside");
    cta.className = "article-cta";
    const ctaTitle = document.createElement("strong");
    ctaTitle.textContent = "Следующий шаг";
    const ctaText = document.createElement("p");
    ctaText.textContent = article.cta;
    cta.append(ctaTitle, ctaText);

    if (article.links?.length) {
      const actions = document.createElement("div");
      actions.className = "article-actions";
      article.links.forEach((link, index) => {
        const action = document.createElement("a");
        action.className = index === 0 ? "primary" : "secondary";
        action.href = link.href;
        action.dataset.route = link.route;
        action.textContent = link.label;
        actions.appendChild(action);
      });
      cta.appendChild(actions);
    }

    articleBody.appendChild(cta);
  }
}

function renderArticleMarkdown(markdown) {
  const nodes = [];
  let paragraphLines = [];
  let listItems = [];

  const flushParagraph = () => {
    if (!paragraphLines.length) return;
    const p = document.createElement("p");
    p.textContent = paragraphLines.join(" ");
    nodes.push(p);
    paragraphLines = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    const ul = document.createElement("ul");
    listItems.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    nodes.push(ul);
    listItems = [];
  };

  markdown.trim().split("\n").forEach((line) => {
    const text = line.trim();
    if (!text) {
      flushParagraph();
      flushList();
      return;
    }
    if (text.startsWith("## ")) {
      flushParagraph();
      flushList();
      const heading = document.createElement("h2");
      heading.textContent = text.slice(3);
      nodes.push(heading);
      return;
    }
    if (text.startsWith("- ")) {
      flushParagraph();
      listItems.push(text.slice(2));
      return;
    }
    flushList();
    paragraphLines.push(text);
  });

  flushParagraph();
  flushList();
  return nodes;
}

function renderFeaturedProducts() {
  if (!featuredRail) return;
  const idsByTab = {
    hits: ["champion", "hounds", "cursed", "hunter", "armor", "banner", "heads", "shoulders", "artifacts", "mechanics"],
    new: ["hunter", "armor", "banner", "mechanics", "artifacts", "champion", "heads", "shoulders", "cursed", "hounds"],
    value: ["hounds", "cursed", "mechanics", "artifacts", "banner", "armor", "champion", "hunter", "shoulders", "heads"],
  };
  featuredRail.innerHTML = idsByTab[currentFeaturedTab]
    .map((id) => {
      const product = products[id];
      const badges = [
        product.tags.includes("new") ? "новинка" : "",
        product.tags.includes("hits") ? "хит" : "",
        product.requiresMin ? "мин. заказ 250 ₽" : "",
      ].filter(Boolean);
      return `
        <article class="product-card">
          <button class="product-card-main" type="button" data-open-product="${id}">
            <span class="product-media"><img src="${product.image}" alt="${product.title}" loading="lazy" decoding="async" fetchpriority="low" /></span>
            ${badges.length ? `<span class="product-badges">${badges.slice(0, 2).map((badge) => `<span>${badge}</span>`).join("")}</span>` : ""}
            <strong>${product.title}</strong>
            <small>${product.description}</small>
            <span class="spec-row">${product.meta}</span>
          </button>
          <div class="card-bottom"><span class="price">${money(product.price)}</span><button class="primary" type="button" data-cart-action="${id}">В корзину</button><div class="quantity-control" data-card-qty="${id}" hidden><button type="button" data-cart-minus="${id}">−</button><span data-card-count="${id}"></span><button type="button" data-cart-plus="${id}">+</button></div></div>
        </article>
      `;
    })
    .join("");
  featuredRail.scrollLeft = 0;
  updateCardQuantities();
  requestAnimationFrame(updateFeaturedRailControls);
}

function getFeaturedCardStep() {
  if (!featuredRail) return 0;
  const firstCard = featuredRail.querySelector(".product-card");
  if (!firstCard) return featuredRail.clientWidth;
  const styles = window.getComputedStyle(featuredRail);
  const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
  return firstCard.getBoundingClientRect().width + gap;
}

function scrollFeaturedRail(direction) {
  if (!featuredRail) return;
  const scrollAmount = getFeaturedCardStep() * 3;
  featuredRail.classList.add("is-switching");
  featuredRail.scrollBy({
    left: direction === "next" ? scrollAmount : -scrollAmount,
    behavior: "smooth",
  });
  window.setTimeout(() => featuredRail.classList.remove("is-switching"), 260);
  window.setTimeout(updateFeaturedRailControls, 320);
}

function updateFeaturedRailControls() {
  if (!featuredRail || featuredRailButtons.length === 0) return;
  const maxScroll = featuredRail.scrollWidth - featuredRail.clientWidth;
  const atStart = featuredRail.scrollLeft <= 4;
  const atEnd = featuredRail.scrollLeft >= maxScroll - 4;
  featuredRailButtons.forEach((button) => {
    button.hidden = maxScroll <= 4 || (button.dataset.featuredScroll === "prev" ? atStart : atEnd);
  });
}

function showHeroSlide(index) {
  if (heroSlides.length === 0) return;
  heroSlideIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === heroSlideIndex;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });
}

function stopHeroCarousel() {
  window.clearTimeout(heroSlideStartTimer);
  heroSlideStartTimer = 0;
  window.clearInterval(heroSlideTimer);
  heroSlideTimer = 0;
}

function startHeroCarousel(delayMs = HERO_CAROUSEL_INTERVAL_MS) {
  if (heroSlides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const startDelay = Number.isFinite(delayMs) ? delayMs : HERO_CAROUSEL_INTERVAL_MS;
  stopHeroCarousel();
  const begin = () => {
    showHeroSlide(heroSlideIndex + 1);
    heroSlideTimer = window.setInterval(() => showHeroSlide(heroSlideIndex + 1), HERO_CAROUSEL_INTERVAL_MS);
  };
  if (startDelay > 0) {
    heroSlideStartTimer = window.setTimeout(begin, startDelay);
    return;
  }
  begin();
}

function setupScrollReveal() {
  if (scrollRevealItems.length === 0) return;
  scrollRevealItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min((index % 4) * 60, 180)}ms`);
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    scrollRevealItems.forEach((item) => item.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.14,
    },
  );

  scrollRevealItems.forEach((item) => observer.observe(item));
}

function getProductGallery(product) {
  return product.gallery?.length ? product.gallery : [product.image].filter(Boolean);
}

function isDesktopGalleryRail() {
  return window.matchMedia("(min-width: 1600px)").matches;
}

function updateGalleryControls() {
  if (!galleryThumbs) return;
  const isVertical = isDesktopGalleryRail();
  const scrollButtons = document.querySelectorAll("[data-gallery-scroll]");
  if (!isVertical) {
    scrollButtons.forEach((button) => {
      button.hidden = true;
    });
    return;
  }
  const maxScroll = isVertical
    ? galleryThumbs.scrollHeight - galleryThumbs.clientHeight
    : galleryThumbs.scrollWidth - galleryThumbs.clientWidth;
  const currentScroll = isVertical ? galleryThumbs.scrollTop : galleryThumbs.scrollLeft;

  scrollButtons.forEach((button) => {
    const direction = button.dataset.galleryScroll;
    const isBack = direction === "up" || direction === "left";
    button.hidden = maxScroll <= 1 || (isBack ? currentScroll <= 1 : currentScroll >= maxScroll - 1);
  });
}

function scrollGalleryRail(direction) {
  if (!galleryThumbs) return;
  const isVertical = isDesktopGalleryRail();
  const step = Math.max(96, Math.round((isVertical ? galleryThumbs.clientHeight : galleryThumbs.clientWidth) * 0.78));
  galleryThumbs.scrollBy({
    top: isVertical ? (direction === "up" ? -step : step) : 0,
    left: isVertical ? 0 : (direction === "up" ? -step : step),
    behavior: "smooth",
  });
  window.setTimeout(updateGalleryControls, 220);
}

function renderProductDetail(id = "hunter") {
  const product = products[id] || products.hunter;
  const gallery = getProductGallery(product);
  activeProductId = product.id;
  if (detailNodes.breadcrumb) detailNodes.breadcrumb.textContent = product.title;
  if (detailNodes.title) detailNodes.title.textContent = product.title;
  if (detailNodes.description) detailNodes.description.textContent = product.description;
  if (detailNodes.price) detailNodes.price.textContent = money(product.price);
  if (detailNodes.stickyPrice) detailNodes.stickyPrice.textContent = money(product.price);
  if (detailNodes.mainImage) {
    detailNodes.mainImage.src = gallery[0] || product.image;
    detailNodes.mainImage.alt = product.title;
  }
  if (modalImage) {
    modalImage.src = gallery[0] || product.image;
    modalImage.alt = product.title;
  }
  if (detailNodes.scale) detailNodes.scale.textContent = product.scale || "32 мм";
  if (detailNodes.material) detailNodes.material.textContent = product.material || "фотополимерная смола";
  if (detailNodes.time) detailNodes.time.textContent = product.time || "3–7 рабочих дней";
  if (detailNodes.status) detailNodes.status.textContent = product.status === "готово" ? "Готово к отправке" : "Под заказ";
  if (detailNodes.statusText) detailNodes.statusText.textContent = product.status || "под заказ";
  if (detailNodes.pack) detailNodes.pack.textContent = product.pack || product.description;
  if (detailNodes.characteristics) detailNodes.characteristics.textContent = product.characteristics || product.meta;
  if (detailNodes.license) {
    detailNodes.license.textContent = "Печать и продажа возможны только при подтверждённой коммерческой лицензии или праве владельца модели на печать. Прокси-миниатюры не аффилированы с правообладателями игровых систем.";
  }
  if (detailNodes.clarity) {
    detailNodes.clarity.replaceChildren();
    ["Физическая смоляная печать", "STL-файл не входит", "Без покраски", product.productKind === "bits" ? "Комплект мелких деталей" : "Состав указан ниже"].forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      detailNodes.clarity.appendChild(li);
    });
  }

  document.querySelectorAll("[data-gallery-thumb]").forEach((button, index) => {
    const src = product.gallery?.[index] || product.image;
    button.dataset.galleryThumb = src;
    const img = button.querySelector("img");
    if (img) {
      img.src = src;
      img.loading = "lazy";
      img.decoding = "async";
      img.fetchPriority = "low";
      img.alt = `${product.title}, ракурс ${index + 1}`;
    }
    button.classList.toggle("is-active", index === 0);
  });

  if (galleryThumbs) {
    galleryThumbs.replaceChildren();
    gallery.forEach((src, index) => {
      const button = document.createElement("button");
      const img = document.createElement("img");
      button.type = "button";
      button.dataset.galleryThumb = src;
      button.setAttribute("aria-label", `${product.title}, image ${index + 1}`);
      button.classList.toggle("is-active", index === 0);
      img.src = src;
      img.alt = `${product.title}, image ${index + 1}`;
      img.loading = "lazy";
      img.decoding = "async";
      img.fetchPriority = "low";
      button.appendChild(img);
      galleryThumbs.appendChild(button);
    });
    galleryThumbs.scrollTo({ top: 0, left: 0 });
    requestAnimationFrame(updateGalleryControls);
    window.setTimeout(updateGalleryControls, 180);
  }

  updateCardQuantities();
}

function renderSuccessReceipt() {
  const items = cartItems.map((item) => `${products[item.id].title} × ${item.quantity}`);
  if (successItems) {
    successItems.textContent = items.length ? items.join(" + ") : "Заявка без товаров не отправлялась";
  }
  if (successContact && checkoutForm) {
    const contact = checkoutForm.querySelector("select")?.value || "указан в форме";
    successContact.textContent = `Способ связи: ${contact}`;
  }
  if (successNumber) {
    successNumber.textContent = `DRP-${String(Date.now()).slice(-4)}`;
  }
}

function openDrawer() {
  if (!drawer || !drawerOpenButton) return;
  drawerScrollY = window.scrollY;
  lastFocusedElement = document.activeElement;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  drawerOpenButton.setAttribute("aria-expanded", "true");
  document.body.classList.add("drawer-open");
  document.body.style.top = `-${drawerScrollY}px`;
  requestAnimationFrame(() => drawer.querySelector(".drawer-panel a, .drawer-panel button")?.focus());
}

function closeDrawer({ restoreScroll = true } = {}) {
  if (!drawer || !drawerOpenButton || !drawer.classList.contains("is-open")) return;
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  drawerOpenButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("drawer-open");
  document.body.style.top = "";
  if (restoreScroll) {
    window.scrollTo({ top: drawerScrollY, behavior: "auto" });
  }
  if (lastFocusedElement && document.contains(lastFocusedElement)) {
    lastFocusedElement.focus();
  }
}

function isMobileFilterPanel() {
  return window.matchMedia("(max-width: 899px)").matches;
}

function syncFilterPanelAccessibility() {
  if (!filterPanel) return;
  const isMobile = isMobileFilterPanel();
  const isOpen = filterPanel.classList.contains("is-open");
  filterPanel.toggleAttribute("inert", isMobile && !isOpen);
  filterPanel.setAttribute("aria-hidden", String(isMobile && !isOpen));
  document.body.classList.toggle("filter-open", isMobile && isOpen);
}

function openFilterPanel() {
  if (!filterPanel) return;
  filterLastFocusedElement = document.activeElement;
  if (isMobileFilterPanel()) {
    filterScrollY = window.scrollY;
    document.body.style.top = `-${filterScrollY}px`;
  }
  filterPanel.classList.add("is-open");
  filterToggle?.setAttribute("aria-expanded", "true");
  syncFilterPanelAccessibility();
  requestAnimationFrame(() => filterPanel.focus());
}

function closeFilterPanel({ restoreScroll = true } = {}) {
  if (!filterPanel) return;
  const wasOpen = filterPanel.classList.contains("is-open");
  filterPanel.classList.remove("is-open");
  filterToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("filter-open");
  if (wasOpen && isMobileFilterPanel()) {
    document.body.style.top = "";
    if (restoreScroll) {
      window.scrollTo({ top: filterScrollY, behavior: "auto" });
    }
  }
  syncFilterPanelAccessibility();
  if (wasOpen && filterLastFocusedElement && document.contains(filterLastFocusedElement)) {
    filterLastFocusedElement.focus();
  }
}

function openGallery() {
  if (!galleryModal) return;
  lastFocusedElement = document.activeElement;
  galleryModal.hidden = false;
  requestAnimationFrame(() => galleryModal.querySelector("button")?.focus());
}

function closeGallery() {
  if (!galleryModal || galleryModal.hidden) return;
  galleryModal.hidden = true;
  if (lastFocusedElement && document.contains(lastFocusedElement)) {
    lastFocusedElement.focus();
  }
}

function validateForm(form, errorNode) {
  if (!form.checkValidity()) {
    errorNode.hidden = false;
    form.reportValidity();
    return false;
  }
  errorNode.hidden = true;
  return true;
}

function handleSubmit(form, button, errorNode, targetScreen) {
  if (isSubmitting || !validateForm(form, errorNode)) return;
  if (targetScreen === "success" && isCheckoutBlocked()) {
    if (errorNode) {
      errorNode.hidden = false;
      errorNode.textContent = "Добавьте товары минимум на 250 ₽, чтобы оформить заявку.";
    }
    goToScreen(cartItems.length === 0 ? "cart-empty" : "cart-blocked");
    return;
  }
  isSubmitting = true;
  button.disabled = true;
  button.textContent = "Отправляем...";
  pendingSubmitTimer = window.setTimeout(() => {
    pendingSubmitTimer = 0;
    isSubmitting = false;
    button.disabled = false;
    button.textContent = targetScreen === "success" ? "Отправить заявку" : "Получить расчёт";
    if (targetScreen === "success") {
      renderSuccessReceipt();
      checkoutSubmitted = true;
    }
    if (targetScreen === "stl-success") {
      stlSubmitted = true;
    }
    goToScreen(targetScreen);
  }, 420);
}

document.addEventListener("click", (event) => {
  const route = event.target.closest("[data-route]");
  if (route) {
    if (route.getAttribute("aria-disabled") === "true") {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    const screen = route.dataset.route;
    const params = {};
    if (route.dataset.categoryRoute) params.category = route.dataset.categoryRoute;
    if (route.dataset.kindRoute) params.kind = route.dataset.kindRoute;
    if (route.dataset.universeRoute) params.universe = route.dataset.universeRoute;
    if (route.dataset.factionRoute) params.faction = route.dataset.factionRoute;
    if (route.dataset.unitRoute) params.unit = route.dataset.unitRoute;
    if (route.dataset.partRoute) params.part = route.dataset.partRoute;
    if (route.dataset.baseRoute) params.base = route.dataset.baseRoute;
    if (route.dataset.scrollTo) params.scroll = route.dataset.scrollTo;
    if (route.dataset.articleRoute) params.article = route.dataset.articleRoute;
    goToScreen(screen, params);
    return;
  }

  const cartAction = event.target.closest("[data-cart-action]");
  if (cartAction) {
    addToCart(cartAction.dataset.cartAction);
    return;
  }

  const cartPlus = event.target.closest("[data-cart-plus]");
  if (cartPlus) {
    addToCart(cartPlus.dataset.cartPlus);
    return;
  }

  const cartMinus = event.target.closest("[data-cart-minus]");
  if (cartMinus) {
    removeFromCart(cartMinus.dataset.cartMinus);
    return;
  }

  const cartRemove = event.target.closest("[data-cart-remove]");
  if (cartRemove) {
    setCartQuantity(cartRemove.dataset.cartRemove, 0);
    return;
  }

  const cartClear = event.target.closest("[data-cart-clear]");
  if (cartClear) {
    clearCart();
    return;
  }

  const openProduct = event.target.closest("[data-open-product]");
  if (openProduct) {
    goToScreen("product", { product: openProduct.dataset.openProduct || activeProductId });
    return;
  }

  const galleryScroll = event.target.closest("[data-gallery-scroll]");
  if (galleryScroll) {
    scrollGalleryRail(galleryScroll.dataset.galleryScroll);
    return;
  }

  const galleryThumb = event.target.closest("[data-gallery-thumb]");
  if (galleryThumb) {
    const src = galleryThumb.dataset.galleryThumb;
    const img = galleryThumb.querySelector("img");
    if (src && detailNodes.mainImage) {
      detailNodes.mainImage.src = src;
      detailNodes.mainImage.alt = img?.alt || products[activeProductId]?.title || "";
    }
    if (src && modalImage) {
      modalImage.src = src;
      modalImage.alt = img?.alt || products[activeProductId]?.title || "";
    }
    document.querySelectorAll("[data-gallery-thumb]").forEach((button) => button.classList.toggle("is-active", button === galleryThumb));
    return;
  }

  const quickOrder = event.target.closest("[data-quick-order]");
  if (quickOrder) {
    event.preventDefault();
    addToCart(activeProductId);
    goToScreen("checkout");
    return;
  }

  const reset = event.target.closest("[data-filter-reset]");
  if (reset) {
    resetCatalogFilters();
    expandedFilterGroups.clear();
    visibleProductLimit = 8;
    if (catalogSearch) catalogSearch.value = "";
    goToScreen("catalog");
  }
});

filterPanel?.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-filter-toggle-group]");
  const control = event.target.closest("[data-filter-group][data-filter-value]");

  if (toggle && !control) {
    const group = toggle.dataset.filterToggleGroup;
    toggleFilterGroup(group);
    renderDependentFilters();
    return;
  }

  if (!control) return;
  const parentFilterPanel = control.closest("[data-dependent-filter]");
  const parentFilterGroup = parentFilterPanel?.dataset.dependentFilter;
  setCatalogFilter(control.dataset.filterGroup, control.dataset.filterValue);
  catalogFilters = normalizeCatalogFilters(catalogFilters);
  if (parentFilterGroup) {
    collapseFilterGroup(parentFilterGroup);
  } else {
    expandedFilterGroups.clear();
  }
  visibleProductLimit = 8;
  if (filterPanel.classList.contains("is-open") && isMobileFilterPanel()) {
    replaceCatalogRouteWithoutNavigation();
    filterCatalog();
    return;
  }
  goToScreen("catalog", getCatalogRouteParams());
});

catalogSearch?.addEventListener("input", () => {
  visibleProductLimit = 8;
  filterCatalog();
});
sortControl?.addEventListener("change", () => {
  activeSort = sortControl.value || "popular";
  visibleProductLimit = 8;
  filterCatalog();
});
loadMoreButton?.addEventListener("click", () => {
  visibleProductLimit += 6;
  filterCatalog();
});
filterToggle?.addEventListener("click", openFilterPanel);
filterCloseButtons.forEach((button) => button.addEventListener("click", () => closeFilterPanel()));
filterCloseResultsButton?.addEventListener("click", () => closeFilterPanel({ restoreScroll: false }));
filterResetButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  resetCatalogFilters();
  expandedFilterGroups.clear();
  visibleProductLimit = 8;
  if (catalogSearch) catalogSearch.value = "";
  goToScreen("catalog");
});

featuredTabs.forEach((button) => {
  button.addEventListener("click", () => {
    currentFeaturedTab = button.dataset.featuredTab || "hits";
    featuredTabs.forEach((tab) => tab.classList.toggle("is-active", tab === button));
    renderFeaturedProducts();
  });
});

featuredRailButtons.forEach((button) => {
  button.addEventListener("click", () => scrollFeaturedRail(button.dataset.featuredScroll));
});

themeToggles.forEach((button) => {
  button.addEventListener("click", toggleTheme);
});

featuredRail?.addEventListener("scroll", updateFeaturedRailControls, { passive: true });
galleryThumbs?.addEventListener("scroll", updateGalleryControls, { passive: true });

drawerOpenButton?.addEventListener("click", openDrawer);
drawerCloseButtons.forEach((button) => button.addEventListener("click", closeDrawer));
galleryZoomButton?.addEventListener("click", openGallery);
galleryCloseButtons.forEach((button) => button.addEventListener("click", closeGallery));

document.querySelectorAll("[data-detail-cart-add]").forEach((button) => {
  button.addEventListener("click", () => addToCart(activeProductId));
});
document.querySelectorAll("[data-detail-cart-plus]").forEach((button) => {
  button.addEventListener("click", () => addToCart(activeProductId));
});
document.querySelectorAll("[data-detail-cart-minus]").forEach((button) => {
  button.addEventListener("click", () => removeFromCart(activeProductId));
});

checkoutForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit(checkoutForm, checkoutSubmit, checkoutError, "success");
});

stlForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit(stlForm, stlSubmit, stlError, "stl-success");
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeDrawer({ restoreScroll: false });
  closeFilterPanel({ restoreScroll: false });
  closeGallery();
});

window.addEventListener("hashchange", applyRoute);
window.addEventListener("scroll", scheduleActiveScrollUpdate, { passive: true });
window.addEventListener("resize", syncFilterPanelAccessibility);
window.addEventListener("resize", updateFeaturedRailControls);
window.addEventListener("resize", updateGalleryControls);
window.addEventListener("resize", scheduleActiveScrollUpdate);
window.addEventListener("beforeunload", () => rememberScrollPosition());

initTheme();
renderFeaturedProducts();
renderCart();
updateCardQuantities();
syncFilterPanelAccessibility();
setupScrollReveal();
showHeroSlide(0);
startHeroCarousel(HERO_CAROUSEL_FIRST_DELAY_MS);
applyRoute();
filterCatalog();
document.documentElement.dataset.appScript = "loaded";
document.documentElement.dataset.appReady = "true";

window.drPrinticusPrototypeAudit = {
  version: "theme-system-01",
  screens: screens.map((screen) => screen.dataset.screen),
  products: Object.keys(products),
  theme: getCurrentTheme,
  applyTheme,
  getCartQuantity,
  getCartSubtotal,
  renderCart,
  applyCatalogRoute,
  renderBlogArticle,
  scrollPositions,
  MIN_ORDER_AMOUNT,
  MIN_DELIVERY_PRICE,
};
