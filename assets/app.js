const DR_PRINTICUS_THEME_KEY = "drPrinticusColorTheme";
const DEFAULT_COLOR_THEME = "dark";
const COLOR_THEMES = new Set(["dark", "light"]);
const MIN_ORDER_AMOUNT = 250;
const MIN_DELIVERY_PRICE = 350;
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

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
  miniatures: { productKind: ["model"] },
  bits: { productKind: ["bits"] },
  terrain: { productKind: ["terrain"] },
  rpg: { universe: ["nri"] },
  bundles: { productKind: ["bundle"] },
};

const defaultCatalogFilters = {
  productKind: [],
  universe: [],
  faction: [],
  unitType: [],
  partType: [],
  baseSize: [],
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
const filterToggle = document.querySelector("[data-filter-toggle]");
const filterPanel = document.querySelector("[data-filter-panel]");
const filterCloseButtons = Array.from(document.querySelectorAll("[data-filter-close]"));
const filterApplyButton = document.querySelector("[data-filter-apply]");
const filterResetButton = document.querySelector("[data-filter-reset]");
const filterResetMenu = document.querySelector("[data-filter-reset-menu]");
const filterResetDropdown = document.querySelector("[data-filter-reset-dropdown]");
const filterResetAllButton = document.querySelector("[data-filter-reset-all]");
const filterDraftSummary = document.querySelector("[data-filter-draft-summary]");
const featuredRail = document.querySelector("[data-featured-rail]");
const showcaseScene = document.querySelector(".showcase-scene");
const featuredTabs = Array.from(document.querySelectorAll("[data-featured-tab]"));
const featuredRailButtons = Array.from(document.querySelectorAll("[data-featured-scroll]"));
const orderSteps = Array.from(document.querySelectorAll("[data-order-step]"));
const orderStages = Array.from(document.querySelectorAll("[data-order-primary-stage]"));
const orderInspectorTitle = document.querySelector("[data-order-inspector-title]");
const orderInspectorCopy = document.querySelector("[data-order-inspector-copy]");
const sortRoot = document.querySelector("[data-sort-root]");
const sortButton = document.querySelector("[data-sort-button]");
const sortCurrent = document.querySelector("[data-sort-current]");
const sortMenu = document.querySelector("[data-sort-menu]");
const sortOptions = Array.from(document.querySelectorAll("[data-sort-option]"));
const loadMoreButton = document.querySelector("[data-load-more]");
const themeToggles = Array.from(document.querySelectorAll("[data-theme-toggle]"));
const scrollRevealItems = Array.from(document.querySelectorAll(".scroll-reveal"));
const heroSlides = Array.from(document.querySelectorAll("[data-hero-slide]"));
const HERO_CAROUSEL_INTERVAL_MS = 8500;
const HERO_CAROUSEL_FIRST_DELAY_MS = 7500;
const SHOWCASE_ORBIT_CENTER_DELAY_MS = 80;
const SHOWCASE_ORBIT_SPREAD_DELAY_MS = 320;
const SHOWCASE_ORBIT_CTA_READY_DELAY_MS = 1240;
const SHOWCASE_ORBIT_CLEANUP_DELAY_MS = 1840;
const FEATURED_ORBIT_SWIPE_THRESHOLD_PX = 42;
const FEATURED_ORBIT_WHEEL_THRESHOLD_PX = 52;
const FEATURED_ORBIT_WHEEL_COOLDOWN_MS = 420;
const SCROLL_REVEAL_ENTER_RATIO = 0.42;
const SCROLL_REVEAL_EXIT_RATIO = 0.12;
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
const customModelForm = document.querySelector("[data-custom-model-form]");
const customModelSubmit = document.querySelector("[data-custom-model-submit]");
const customModelError = document.querySelector("[data-custom-model-error]");
const successItems = document.querySelector("[data-success-items]");
const successContact = document.querySelector("[data-success-contact]");
const successNumber = document.querySelector("[data-success-number]");
const blogList = document.querySelector("[data-blog-list]");
const articleView = document.querySelector("[data-article-view]");
const articleKicker = document.querySelector("[data-article-kicker]");
const articleTitle = document.querySelector("[data-article-title]");
const articleBreadcrumb = document.querySelector("[data-article-breadcrumb]");
const articleBody = document.querySelector("[data-article-body]");
const journalFeature = document.querySelector("[data-journal-feature]");
const journalFeatureTitle = document.querySelector("[data-journal-feature-title]");
const journalFeatureCopy = document.querySelector("[data-journal-feature-copy]");
const journalNotes = Array.from(document.querySelectorAll("[data-journal-note]"));
const journalPageFeature = document.querySelector("[data-journal-page-feature]");
const journalPageFeatureTitle = document.querySelector("[data-journal-page-feature-title]");
const journalPageFeatureCopy = document.querySelector("[data-journal-page-feature-copy]");
const journalPageNotes = Array.from(document.querySelectorAll("[data-journal-page-note]"));
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
let catalogFilters = cloneCatalogFilters(defaultCatalogFilters);
let draftCatalogFilters = cloneCatalogFilters(catalogFilters);
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
let custom3dPrintSubmitted = false;
let heroSlideIndex = 0;
let heroSlideTimer = 0;
let heroSlideStartTimer = 0;
let activeScrollTarget = "";
let scrollSpyFrame = 0;
let hasAppliedRoute = false;
let featuredOrbitIndex = 1;
let currentFeaturedIds = [];
let featuredOrbitStageTimers = [];
let featuredOrbitPointerState = null;
let featuredOrbitSuppressClickUntil = 0;
let featuredOrbitWheelDeltaX = 0;
let featuredOrbitWheelCooldownUntil = 0;
let journalPreviewSwitchTimer = 0;
let journalPagePreviewSwitchTimer = 0;

const blogArticles = window.drPrinticusBlogArticles || {};

function isDesktopJournalPreview() {
  return window.matchMedia("(min-width: 900px)").matches;
}

function normalizeJournalPreviewBlock(block) {
  return block
    .replace(/^#+\s+/gm, "")
    .replace(/^\s*-\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getJournalPreviewBlocks(article, { targetLength = 660, minCut = 520 } = {}) {
  const source = article?.body || article?.teaser || "";
  const rawBlocks = source
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter((block) => block && !/^##\s+/.test(block));
  const blocks = [];
  let totalLength = 0;
  let truncated = false;

  for (const rawBlock of rawBlocks) {
    const block = normalizeJournalPreviewBlock(rawBlock);
    if (!block) continue;

    const separatorLength = blocks.length > 0 ? 2 : 0;
    const nextLength = totalLength + separatorLength + block.length;
    if (nextLength <= targetLength) {
      blocks.push(block);
      totalLength = nextLength;
      continue;
    }

    const remainingLength = targetLength - totalLength - separatorLength;
    const cutTarget = Math.max(remainingLength, blocks.length === 0 ? minCut : 0);
    const softCut = block.lastIndexOf(" ", cutTarget);
    const cutAt = softCut > Math.min(minCut, cutTarget) ? softCut : cutTarget;
    const cutBlock = block.slice(0, Math.max(0, cutAt)).trim();
    if (cutBlock) blocks.push(cutBlock);
    truncated = true;
    break;
  }

  if (blocks.length === 0 && article?.teaser) {
    blocks.push(normalizeJournalPreviewBlock(article.teaser));
  }

  if (truncated && blocks.length > 0) {
    blocks[blocks.length - 1] = `${blocks[blocks.length - 1].replace(/\.+$/, "")}...`;
  }

  return blocks;
}

function getJournalPreviewExcerpt(article, { targetLength = 660, minCut = 520 } = {}) {
  return getJournalPreviewBlocks(article, { targetLength, minCut }).join("\n\n");
}

function setJournalPreviewArticle(articleId, { animate = true } = {}) {
  if (!journalFeature || !journalFeatureTitle || !journalFeatureCopy || !articleId) return;
  const article = blogArticles[articleId];
  const activeNote = journalNotes.find((note) => note.dataset.journalNote === articleId);
  const title = activeNote?.dataset.journalTitle || article?.title || activeNote?.querySelector("h3")?.textContent || "";
  const excerpt = getJournalPreviewExcerpt(article);

  const applyArticle = () => {
    journalFeature.href = `#blog?article=${articleId}`;
    journalFeature.dataset.articleRoute = articleId;
    journalFeature.setAttribute("aria-label", title);
    journalFeatureTitle.textContent = title;
    journalFeatureCopy.textContent = excerpt;

    journalNotes.forEach((note) => {
      const isActive = note.dataset.journalNote === articleId;
      note.classList.toggle("is-active", isActive);
      if (isActive) {
        note.setAttribute("aria-current", "true");
      } else {
        note.removeAttribute("aria-current");
      }
    });
  };

  window.clearTimeout(journalPreviewSwitchTimer);
  if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    journalFeature.classList.add("is-switching");
    journalPreviewSwitchTimer = window.setTimeout(() => {
      applyArticle();
      window.requestAnimationFrame(() => journalFeature.classList.remove("is-switching"));
    }, 140);
    return;
  }

  applyArticle();
  journalFeature.classList.remove("is-switching");
}

function setupJournalPreview() {
  if (!journalFeature || journalNotes.length === 0) return;
  const initialArticleId = journalNotes.find((note) => note.classList.contains("is-active"))?.dataset.journalNote || journalNotes[0].dataset.journalNote;
  setJournalPreviewArticle(initialArticleId, { animate: false });

  journalNotes.forEach((note) => {
    note.addEventListener("click", (event) => {
      if (!isDesktopJournalPreview()) return;
      event.preventDefault();
      event.stopPropagation();
      setJournalPreviewArticle(note.dataset.journalNote);
    });
  });
}

function setJournalPageArticle(articleId, { animate = true } = {}) {
  if (!journalPageFeature || !journalPageFeatureTitle || !journalPageFeatureCopy || !articleId) return;
  const article = blogArticles[articleId];
  const activeNote = journalPageNotes.find((note) => note.dataset.journalPageNote === articleId);
  const title = activeNote?.dataset.journalTitle || journalPageFeature.dataset.journalTitle || article?.title || activeNote?.querySelector("h2")?.textContent || "";
  const excerpt = getJournalPreviewExcerpt(article, { targetLength: 1160, minCut: 900 });

  const applyArticle = () => {
    journalPageFeature.href = `#blog?article=${articleId}`;
    journalPageFeature.dataset.articleRoute = articleId;
    journalPageFeature.setAttribute("aria-label", title);
    journalPageFeatureTitle.textContent = title;
    journalPageFeatureCopy.textContent = excerpt;

    journalPageNotes.forEach((note) => {
      const isActive = note.dataset.journalPageNote === articleId;
      note.classList.toggle("is-active", isActive);
      if (isActive) {
        note.setAttribute("aria-current", "true");
      } else {
        note.removeAttribute("aria-current");
      }
    });
  };

  window.clearTimeout(journalPagePreviewSwitchTimer);
  if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    journalPageFeature.classList.add("is-switching");
    journalPagePreviewSwitchTimer = window.setTimeout(() => {
      applyArticle();
      window.requestAnimationFrame(() => journalPageFeature.classList.remove("is-switching"));
    }, 140);
    return;
  }

  applyArticle();
  journalPageFeature.classList.remove("is-switching");
}

function setupJournalPagePreview() {
  if (!journalPageFeature || journalPageNotes.length === 0) return;
  setJournalPageArticle(journalPageFeature.dataset.articleRoute, { animate: false });

  journalPageNotes.forEach((note) => {
    note.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setJournalPageArticle(note.dataset.journalPageNote);
    });
  });
}

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

function getHashScrollTarget(hash = getRouteKey()) {
  const raw = String(hash || "#home").replace(/^#/, "") || "home";
  const [, query = ""] = raw.split("?");
  return new URLSearchParams(query).get("scroll") || "";
}

function hasExplicitScrollTarget(hash = getRouteKey()) {
  return Boolean(getHashScrollTarget(hash));
}

function isMobileHomeSceneReveal() {
  return window.matchMedia("(max-width: 899px)").matches;
}

function getScrollRevealTargetForId(id) {
  const target = document.getElementById(id);
  if (!target) return null;
  return target.classList.contains("scroll-reveal") ? target : target.closest(".scroll-reveal");
}

function revealScrollTargetNow(id) {
  const target = getScrollRevealTargetForId(id);
  if (target) {
    revealScrollItem(target);
  }
}

function getCurrentScrollY() {
  if ((document.body.classList.contains("drawer-open") || document.body.classList.contains("filter-open")) && document.body.style.top) {
    const lockedY = Number.parseFloat(document.body.style.top);
    return Number.isFinite(lockedY) ? Math.abs(lockedY) : window.scrollY;
  }
  return window.scrollY;
}

function scrollWindowToY(top, smooth = false) {
  const targetTop = Math.max(0, top);
  if (smooth) {
    window.scrollTo({ top: targetTop, behavior: "smooth" });
    return;
  }

  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo({ top: targetTop, behavior: "auto" });
  root.style.scrollBehavior = previousScrollBehavior;
}

function rememberScrollPosition(key = currentRouteKey) {
  if (!key || hasExplicitScrollTarget(key)) return;
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
  scrollWindowToY(top, smooth);
}

function alignScrollTargetAfterRouteSettles(id, smooth = false) {
  scrollToElementWithHeaderOffset(id, smooth);
  requestAnimationFrame(() => scrollToElementWithHeaderOffset(id, false));
  window.setTimeout(() => scrollToElementWithHeaderOffset(id, false), 180);
}

function scrollToActiveScreenTop(smooth = false) {
  const activeScreen = document.querySelector(".screen.is-active");
  if (!activeScreen) return;
  const top = activeScreen.getBoundingClientRect().top + window.scrollY - getHeaderScrollOffset();
  scrollWindowToY(top, smooth);
}

function restoreRouteScroll({ manualNavigation, scrollTarget }) {
  requestAnimationFrame(() => {
    if (scrollTarget) {
      revealScrollTargetNow(scrollTarget);
      alignScrollTargetAfterRouteSettles(scrollTarget, manualNavigation);
      return;
    }

    const savedY = scrollPositions.get(getRouteKey());
    if (!manualNavigation && Number.isFinite(savedY)) {
      scrollWindowToY(savedY);
      return;
    }

    if (activeScreenName !== "home") {
      scrollToActiveScreenTop(manualNavigation);
      return;
    }

    scrollWindowToY(0, manualNavigation && activeScreenName !== "home");
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
  if (activeSort === "new") {
    return [...list].sort((a, b) => {
      const aNew = (a.tags || []).includes("new") ? 1 : 0;
      const bNew = (b.tags || []).includes("new") ? 1 : 0;
      return bNew - aNew;
    });
  }
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
    if (customModelSubmit) {
      customModelSubmit.disabled = false;
      customModelSubmit.textContent = "Получить расчёт";
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
  const { screenName, params } = parseHash();
  const nextHash = getRouteKey();
  const scrollTarget = params.get("scroll");
  if (hasAppliedRoute && !hasExplicitScrollTarget(nextHash)) {
    rememberScrollPosition();
  }
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
  if (screenName === "custom-3d-print-success" && !custom3dPrintSubmitted) {
    goToScreen("custom-3d-print");
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

  currentRouteKey = nextHash;
  restoreRouteScroll({ manualNavigation, scrollTarget });
  hasAppliedRoute = true;
  scheduleActiveScrollUpdate();

  setSortMenuOpen(false, { closeCompeting: false });
  closeDrawer({ restoreScroll: false });
  closeFilterPanel({ restoreScroll: false });
}

function resetCatalogFilters() {
  catalogFilters = cloneCatalogFilters(defaultCatalogFilters);
  draftCatalogFilters = cloneCatalogFilters(catalogFilters);
}

function isKnownFilterValue(group, value) {
  if (group === "productKind" && value === "all") return true;
  return Boolean(filterLabels[group]?.[value]);
}

function getFilterValues(filters, group) {
  const value = filters?.[group];
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === "string") return value.split(",").map((item) => item.trim()).filter(Boolean);
  return [];
}

function hasFilterValue(filters, group, value) {
  return getFilterValues(filters, group).includes(value);
}

function addFilterValue(filters, group, value) {
  if (hasFilterValue(filters, group, value)) return;
  filters[group] = [...getFilterValues(filters, group), value];
}

function removeFilterValue(filters, group, value) {
  filters[group] = getFilterValues(filters, group).filter((item) => item !== value);
}

function cloneCatalogFilters(filters = defaultCatalogFilters) {
  const next = {};
  Object.keys(filterQueryKeys).forEach((group) => {
    next[group] = [...getFilterValues(filters, group)];
  });
  return next;
}

function normalizeCatalogFilters(filters) {
  const next = cloneCatalogFilters(defaultCatalogFilters);
  Object.entries(filterQueryKeys).forEach(([group]) => {
    next[group] = Array.from(new Set(getFilterValues(filters, group).filter((value) => value !== "all" && isKnownFilterValue(group, value))));
  });
  if ((next.faction.length || next.unitType.length) && !next.universe.includes("warhammer")) {
    next.universe.push("warhammer");
  }
  if (next.universe.length && !next.universe.includes("warhammer")) {
    next.faction = [];
    next.unitType = [];
  }
  return next;
}

function getCatalogRouteParams(filters = catalogFilters) {
  const params = {};
  Object.entries(filterQueryKeys).forEach(([group, key]) => {
    const values = getFilterValues(filters, group);
    if (values.length) params[key] = values.join(",");
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

function getFilterTriggerSelection(group, filters = draftCatalogFilters) {
  if (group === "bases" && (hasFilterValue(filters, "productKind", "base") || getFilterValues(filters, "baseSize").length)) return ["bases"];
  const valueGroup = filterTriggerValueGroups[group];
  return valueGroup && getFilterValues(filters, valueGroup).length ? [valueGroup] : null;
}

function getFilterTriggerSelectionCount(group, filters = draftCatalogFilters) {
  if (group === "bases") {
    return (hasFilterValue(filters, "productKind", "base") ? 1 : 0) + getFilterValues(filters, "baseSize").length;
  }
  const valueGroup = filterTriggerValueGroups[group];
  return valueGroup ? getFilterValues(filters, valueGroup).length : 0;
}

function getFilterTriggerLabel(group, filters = draftCatalogFilters) {
  return filterTriggerIdleLabels[group] || group;
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
    const selectedCount = getFilterTriggerSelectionCount(group, draftCatalogFilters);
    const label = document.createElement("span");
    label.className = "filter-toggle-label";
    label.textContent = getFilterTriggerLabel(group, draftCatalogFilters);
    const count = document.createElement("span");
    count.className = "filter-toggle-count";
    count.setAttribute("aria-hidden", "true");
    count.textContent = selectedCount > 0 ? String(selectedCount) : "";
    toggle.replaceChildren(label, count);
    toggle.classList.toggle("is-active", selectedCount > 0);
  });
}

function getSelectedFilterEntries(filters = draftCatalogFilters) {
  const entries = [];
  Object.keys(filterQueryKeys).forEach((group) => {
    getFilterValues(filters, group).forEach((value) => entries.push([group, value]));
  });
  return entries;
}

function productMatchesCatalogFilters(product, filters = catalogFilters) {
  if (!product) return false;
  const productKinds = getFilterValues(filters, "productKind");
  if (productKinds.length && !productKinds.includes(product.productKind)) return false;
  const universes = getFilterValues(filters, "universe");
  if (universes.length && !universes.includes(product.universe)) return false;
  const factions = getFilterValues(filters, "faction");
  if (factions.length && !factions.includes(product.faction)) return false;
  const unitTypes = getFilterValues(filters, "unitType");
  if (unitTypes.length && !unitTypes.includes(product.unitType)) return false;
  const partTypes = getFilterValues(filters, "partType");
  if (partTypes.length) {
    if (product.productKind !== "bits" || !partTypes.includes(product.partType)) return false;
  }
  const baseSizes = getFilterValues(filters, "baseSize");
  if (baseSizes.length && !baseSizes.includes(product.baseSize)) return false;
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
  const next = cloneCatalogFilters(defaultCatalogFilters);
  const legacyCategory = routeParams.get("category");
  if (legacyCategory && legacyCategoryMap[legacyCategory]) {
    Object.assign(next, legacyCategoryMap[legacyCategory]);
  }
  Object.entries(filterQueryKeys).forEach(([group, key]) => {
    const value = routeParams.get(key);
    if (value) next[group] = value.split(",");
  });
  catalogFilters = normalizeCatalogFilters(next);
  draftCatalogFilters = cloneCatalogFilters(catalogFilters);
  expandedFilterGroups.clear();
  filterCatalog();
}

function getAvailableFilterOptions(group, filters = draftCatalogFilters) {
  const seen = new Set();
  const selectedFactions = getFilterValues(filters, "faction");
  const selectedUniverses = getFilterValues(filters, "universe");
  getProductList().forEach((product) => {
    if (group === "faction" && product.universe !== "warhammer") return;
    if (group === "unitType") {
      if (selectedFactions.length && !selectedFactions.includes(product.faction)) return;
      if (!selectedFactions.length && selectedUniverses.length && !selectedUniverses.includes(product.universe)) return;
    }
    const value = product[group];
    if (value && filterLabels[group]?.[value]) seen.add(value);
  });
  return Array.from(seen).sort((a, b) => getFilterLabel(group, a).localeCompare(getFilterLabel(group, b), "ru"));
}

function createFilterControl(group, value) {
  const button = document.createElement("button");
  button.className = "chip filter-chip";
  button.type = "button";
  button.dataset.filterGroup = group;
  button.dataset.filterValue = value;
  button.textContent = getFilterLabel(group, value);
  return button;
}

function renderGeneratedFilterPanel(panel, group) {
  const options = getAvailableFilterOptions(group, draftCatalogFilters);
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
  if (name === "faction") return hasOptions && (hasFilterValue(draftCatalogFilters, "universe", "warhammer") || Boolean(getFilterValues(draftCatalogFilters, "faction").length));
  if (name === "unitType") return hasOptions && Boolean(getFilterValues(draftCatalogFilters, "faction").length || getFilterValues(draftCatalogFilters, "unitType").length);
  return true;
}

function getFilterToggleForGroup(group) {
  return document.querySelector(`[data-filter-toggle-group="${group}"]`);
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

function isAllProductsControlActive(filters = draftCatalogFilters) {
  return getSelectedFilterEntries(filters).length === 0;
}

function syncFilterControls() {
  document.querySelectorAll("[data-filter-group][data-filter-value]").forEach((button) => {
    const group = button.dataset.filterGroup;
    const value = button.dataset.filterValue;
    const pressed = group === "productKind" && value === "all" ? isAllProductsControlActive(draftCatalogFilters) : hasFilterValue(draftCatalogFilters, group, value);
    button.classList.toggle("is-active", pressed);
    button.classList.toggle("selected-chip", pressed);
    button.setAttribute("aria-pressed", String(pressed));
  });
}

function setDraftCatalogFilter(group, value) {
  if (!isKnownFilterValue(group, value)) return;
  if (group === "productKind" && value === "all") {
    draftCatalogFilters = cloneCatalogFilters(defaultCatalogFilters);
    expandedFilterGroups.clear();
    return;
  }
  const next = cloneCatalogFilters(draftCatalogFilters);
  if (hasFilterValue(next, group, value)) {
    removeFilterValue(next, group, value);
    if (group === "universe" && value === "warhammer") {
      next.faction = [];
      next.unitType = [];
    }
    draftCatalogFilters = normalizeCatalogFilters(next);
    return;
  }

  if (group === "productKind") {
    addFilterValue(next, "productKind", value);
    draftCatalogFilters = normalizeCatalogFilters(next);
    return;
  }

  if (group === "universe") {
    addFilterValue(next, "universe", value);
    draftCatalogFilters = normalizeCatalogFilters(next);
    return;
  }

  if (group === "faction") {
    addFilterValue(next, "universe", "warhammer");
    addFilterValue(next, "faction", value);
    draftCatalogFilters = normalizeCatalogFilters(next);
    return;
  }

  if (group === "unitType") {
    addFilterValue(next, "unitType", value);
    draftCatalogFilters = normalizeCatalogFilters(next);
    return;
  }

  if (group === "partType") {
    addFilterValue(next, "partType", value);
    draftCatalogFilters = normalizeCatalogFilters(next);
    return;
  }

  if (group === "baseSize") {
    addFilterValue(next, "baseSize", value);
    draftCatalogFilters = normalizeCatalogFilters(next);
  }
}

function getFilterGroupLabel(group) {
  return {
    productKind: "Категории",
    universe: "Вселенная",
    faction: "Фракция",
    unitType: "Тип отряда",
    partType: "Детали",
    baseSize: "База",
  }[group] || group;
}

function getProductWord(count) {
  return count === 1 ? "товар" : count > 1 && count < 5 ? "товара" : "товаров";
}

function getFilterWord(count) {
  const mod10 = Math.abs(count) % 10;
  const mod100 = Math.abs(count) % 100;
  if (mod10 === 1 && mod100 !== 11) return "фильтр";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "фильтра";
  return "фильтров";
}

function getCatalogMatchCount(filters = catalogFilters) {
  const query = (catalogSearch?.value || "").trim().toLowerCase();
  return getProductList().reduce((count, product) => {
    const haystack = getProductSearchText(product);
    const matchesFilter = productMatchesCatalogFilters(product, filters);
    const matchesSearch = !query || haystack.includes(query);
    return matchesFilter && matchesSearch ? count + 1 : count;
  }, 0);
}

function updateFilterApplyButton() {
  if (!filterApplyButton) return;
  const count = getCatalogMatchCount(draftCatalogFilters);
  filterApplyButton.textContent = `Показать ${count} ${getProductWord(count)}`;
}

function setFilterResetMenuOpen(open) {
  if (!filterResetMenu || !filterResetButton || !filterResetDropdown) return;
  if (open && filterResetButton.disabled) open = false;
  filterResetMenu.classList.toggle("is-open", open);
  filterResetButton.setAttribute("aria-expanded", String(open));
  filterResetDropdown.hidden = !open;
}

function toggleFilterResetMenu() {
  if (getSelectedFilterEntries(draftCatalogFilters).length === 0) {
    setFilterResetMenuOpen(false);
    return;
  }
  const open = !filterResetMenu?.classList.contains("is-open");
  if (open) {
    expandedFilterGroups.clear();
    renderDependentFilters();
  }
  setFilterResetMenuOpen(open);
}

function renderFilterDraftSummary() {
  if (!filterDraftSummary) return;
  filterDraftSummary.replaceChildren();
  getSelectedFilterEntries(draftCatalogFilters).forEach(([group, value]) => {
    const row = document.createElement("div");
    row.className = "filter-draft-row";
    const label = document.createElement("span");
    label.textContent = `${getFilterGroupLabel(group)}: ${getFilterLabel(group, value)}`;
    const clear = document.createElement("button");
    clear.className = "filter-draft-clear";
    clear.type = "button";
    clear.setAttribute("data-filter-clear-group", group);
    clear.setAttribute("data-filter-clear-value", value);
    clear.setAttribute("aria-label", `Сбросить ${getFilterGroupLabel(group).toLowerCase()}`);
    clear.textContent = "×";
    row.append(label, clear);
    filterDraftSummary.appendChild(row);
  });
}

function syncFilterResetMenu() {
  if (!filterResetButton) return;
  const selectedCount = getSelectedFilterEntries(draftCatalogFilters).length;
  filterResetButton.textContent = `Сбросить ${selectedCount} ${getFilterWord(selectedCount)}`;
  filterResetButton.disabled = selectedCount === 0;
  if (selectedCount === 0) {
    setFilterResetMenuOpen(false);
  }
  if (filterResetAllButton) filterResetAllButton.hidden = selectedCount === 0;
}

function refreshDraftFilterUi() {
  renderFilterDraftSummary();
  syncFilterResetMenu();
  renderDependentFilters();
  syncFilterControls();
  updateFilterApplyButton();
}

function clearDraftFilterGroup(group, value = "") {
  const next = cloneCatalogFilters(draftCatalogFilters);
  if (value) {
    removeFilterValue(next, group, value);
  } else if (Object.hasOwn(next, group)) {
    next[group] = [];
  }
  draftCatalogFilters = normalizeCatalogFilters(next);
  refreshDraftFilterUi();
}

function applyDraftCatalogFilters() {
  catalogFilters = normalizeCatalogFilters(draftCatalogFilters);
  visibleProductLimit = 8;
  replaceCatalogRouteWithoutNavigation();
  filterCatalog();
  setFilterResetMenuOpen(false);
  closeFilterPanel({ restoreScroll: false });
}

function applyAllProductsFilter() {
  draftCatalogFilters = cloneCatalogFilters(defaultCatalogFilters);
  catalogFilters = cloneCatalogFilters(defaultCatalogFilters);
  expandedFilterGroups.clear();
  visibleProductLimit = 8;
  replaceCatalogRouteWithoutNavigation();
  filterCatalog();
  refreshDraftFilterUi();
  setFilterResetMenuOpen(false);
  closeFilterPanel({ restoreScroll: false });
}

function resetAllCatalogFilters({ clearSearch = false, navigate = true } = {}) {
  resetCatalogFilters();
  expandedFilterGroups.clear();
  visibleProductLimit = 8;
  if (clearSearch && catalogSearch) catalogSearch.value = "";
  if (navigate) {
    goToScreen("catalog");
  } else {
    replaceCatalogRouteWithoutNavigation();
    filterCatalog();
  }
  refreshDraftFilterUi();
}

function setSortMenuOpen(open, { closeCompeting = true } = {}) {
  if (!sortRoot || !sortButton || !sortMenu) return;
  if (open && closeCompeting) closeCompetingPopups("sort");
  sortRoot.classList.toggle("is-open", open);
  sortButton.setAttribute("aria-expanded", String(open));
  sortMenu.hidden = !open;
}

function syncSortControl() {
  sortOptions.forEach((option) => {
    const selected = option.dataset.sortOption === activeSort;
    option.classList.toggle("is-active", selected);
    option.setAttribute("aria-selected", String(selected));
    if (selected && sortCurrent) sortCurrent.textContent = option.textContent.trim();
  });
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
  renderFilterDraftSummary();
  syncFilterResetMenu();
  updateFilterApplyButton();

  const emptyState = document.querySelector("[data-catalog-empty]");
  if (emptyState) emptyState.hidden = visibleCount > 0;
  if (loadMoreButton) {
    loadMoreButton.hidden = visibleCount <= visibleProductLimit;
  }
}

function renderBlogArticle(articleId) {
  const article = articleId ? blogArticles[articleId] : null;
  if (blogList) blogList.hidden = Boolean(article);
  if (articleView) articleView.hidden = !article;
  if (!article) {
    if (articleBreadcrumb) articleBreadcrumb.textContent = "Материал";
    document.title = defaultDocumentTitle;
    if (metaDescription) metaDescription.setAttribute("content", defaultMetaDescription);
    return;
  }

  document.title = article.seoTitle ? `${article.seoTitle} | Dr. Printicus` : defaultDocumentTitle;
  if (metaDescription && article.metaDescription) metaDescription.setAttribute("content", article.metaDescription);

  if (articleKicker) articleKicker.textContent = article.kicker;
  if (articleTitle) articleTitle.textContent = article.title;
  if (articleBreadcrumb) articleBreadcrumb.textContent = article.title;
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

function updateOrderInspector(step) {
  if (!step || !orderInspectorTitle || !orderInspectorCopy) return;

  const fallbackTitle = step.querySelector("strong")?.textContent?.trim() || "";
  const title = step.dataset.orderStepTitle || fallbackTitle;
  const copy = step.dataset.orderStepCopy || "";

  orderInspectorTitle.textContent = title;
  orderInspectorCopy.textContent = copy;
}

function setOrderStageOpen(stage, isOpen) {
  if (!stage) return;

  stage.classList.toggle("is-open", isOpen);
  const trigger = stage.querySelector(".order-stage-trigger");
  const branch = stage.querySelector(".order-branch");
  trigger?.setAttribute("aria-expanded", String(isOpen));
  branch?.toggleAttribute("inert", !isOpen);
  branch?.setAttribute("aria-hidden", String(!isOpen));
}

function setActiveOrderStep(step) {
  if (!step) return;

  const activeStage = step.closest(".order-stage");
  orderStages.forEach((stage) => {
    setOrderStageOpen(stage, stage === activeStage);
  });

  orderSteps.forEach((item) => {
    const isActive = item === step;
    const isStageTriggerInActiveStage = item.classList.contains("order-stage-trigger") && item.closest(".order-stage") === activeStage;
    item.classList.toggle("is-active", isActive);
    if (item.classList.contains("order-stage-trigger")) {
      item.classList.toggle("is-active", isStageTriggerInActiveStage);
    }
    if (isActive) {
      item.setAttribute("aria-current", "step");
    } else {
      item.removeAttribute("aria-current");
    }
  });

  updateOrderInspector(step);
}

function clearActiveOrderStep(stage) {
  if (stage) {
    setOrderStageOpen(stage, false);
  } else {
    orderStages.forEach((item) => setOrderStageOpen(item, false));
  }

  const scopedSteps = stage ? Array.from(stage.querySelectorAll("[data-order-step]")) : orderSteps;
  scopedSteps.forEach((item) => {
    item.classList.remove("is-active");
    item.removeAttribute("aria-current");
  });
}

function setupOrderInspector() {
  if (orderSteps.length === 0) return;

  const initialStep = orderSteps.find((step) => step.classList.contains("is-active")) || orderSteps[0];
  orderStages.forEach((stage) => setOrderStageOpen(stage, false));
  updateOrderInspector(initialStep);

  orderSteps.forEach((step) => {
    step.addEventListener("pointerenter", () => setActiveOrderStep(step));
    step.addEventListener("focus", () => setActiveOrderStep(step));
    step.addEventListener("click", () => setActiveOrderStep(step));
    step.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      setActiveOrderStep(step);
    });
  });

  orderStages.forEach((stage) => {
    stage.addEventListener("pointerleave", () => {
      if (stage.matches(":focus-within")) return;
      clearActiveOrderStep(stage);
    });
    stage.addEventListener("focusout", () => {
      window.setTimeout(() => {
        if (stage.matches(":focus-within")) return;
        clearActiveOrderStep(stage);
      }, 0);
    });
  });
}

function shouldAnimateFeaturedOrbitStage() {
  return Boolean(
    showcaseScene &&
      featuredRail &&
      isFeaturedOrbitDesktop() &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
}

function clearFeaturedOrbitStageTimers() {
  featuredOrbitStageTimers.forEach((timer) => window.clearTimeout(timer));
  featuredOrbitStageTimers = [];
}

function finishFeaturedOrbitStage({ markIntroComplete = false } = {}) {
  if (!showcaseScene) return;
  showcaseScene.classList.remove(
    "is-showcase-orbit-staging",
    "is-showcase-orbit-center",
    "is-showcase-orbit-spread",
    "is-showcase-orbit-cta-ready",
    "is-showcase-intro-staging",
  );
  if (markIntroComplete) {
    showcaseScene.classList.add("has-showcase-intro-complete");
  }
  featuredOrbitStageTimers = [];
}

function primeFeaturedOrbitStage({ includeTabs = false } = {}) {
  if (!shouldAnimateFeaturedOrbitStage()) return false;
  clearFeaturedOrbitStageTimers();
  showcaseScene.classList.add("is-showcase-orbit-staging");
  showcaseScene.classList.remove("is-showcase-orbit-center", "is-showcase-orbit-spread", "is-showcase-orbit-cta-ready");
  showcaseScene.classList.toggle("is-showcase-intro-staging", includeTabs);
  return true;
}

function startFeaturedOrbitStage({ markIntroComplete = false } = {}) {
  if (!showcaseScene?.classList.contains("is-showcase-orbit-staging")) {
    if (markIntroComplete) showcaseScene?.classList.add("has-showcase-intro-complete");
    return;
  }

  const queue = (delay, callback) => {
    const timer = window.setTimeout(() => {
      if (!showcaseScene?.classList.contains("is-showcase-orbit-staging")) return;
      callback();
    }, delay);
    featuredOrbitStageTimers.push(timer);
  };

  window.requestAnimationFrame(() => {
    queue(SHOWCASE_ORBIT_CENTER_DELAY_MS, () => {
      showcaseScene.classList.add("is-showcase-orbit-center");
    });
    queue(SHOWCASE_ORBIT_SPREAD_DELAY_MS, () => {
      showcaseScene.classList.add("is-showcase-orbit-spread");
    });
    queue(SHOWCASE_ORBIT_CTA_READY_DELAY_MS, () => {
      showcaseScene.classList.add("is-showcase-orbit-cta-ready");
    });
    queue(SHOWCASE_ORBIT_CLEANUP_DELAY_MS, () => {
      finishFeaturedOrbitStage({ markIntroComplete });
    });
  });
}

function resetFeaturedOrbitIntro() {
  if (!showcaseScene) return;
  clearFeaturedOrbitStageTimers();
  showcaseScene.classList.remove(
    "is-showcase-orbit-staging",
    "is-showcase-orbit-center",
    "is-showcase-orbit-spread",
    "is-showcase-orbit-cta-ready",
    "is-showcase-intro-staging",
    "has-showcase-intro-complete",
  );
  primeFeaturedOrbitStage({ includeTabs: true });
}

function renderFeaturedProducts({ stageOrbit = false } = {}) {
  if (!featuredRail) return;
  const shouldStageOrbit = stageOrbit && primeFeaturedOrbitStage();
  const idsByTab = {
    hits: ["champion", "hounds", "cursed", "hunter", "armor", "banner", "heads", "shoulders", "artifacts", "mechanics"],
    new: ["hunter", "armor", "banner", "mechanics", "artifacts", "champion", "heads", "shoulders", "cursed", "hounds"],
    value: ["hounds", "cursed", "mechanics", "artifacts", "banner", "armor", "champion", "hunter", "shoulders", "heads"],
    promo: ["banner", "hounds", "heads", "cursed", "mechanics", "shoulders", "hunter", "armor", "artifacts", "champion"],
  };
  currentFeaturedIds = idsByTab[currentFeaturedTab] || idsByTab.hits;
  featuredOrbitIndex = isFeaturedOrbitMobile() ? 0 : Math.min(1, Math.max(0, currentFeaturedIds.length - 1));
  featuredRail.innerHTML = currentFeaturedIds
    .map((id) => {
      const product = products[id];
      const featuredMeta = product.requiresMin ? `мин. заказ 250 ₽ · ${product.meta}` : product.meta;
      const index = currentFeaturedIds.indexOf(id);
      return `
        <article class="product-card" data-featured-card-index="${index}" data-open-product-card="${id}">
          <button class="product-card-main" type="button" data-open-product="${id}">
            <span class="product-media"><img src="${product.image}" alt="${product.title}" loading="lazy" decoding="async" fetchpriority="low" /></span>
            <strong>${product.title}</strong>
            <small>${product.description}</small>
            <span class="spec-row">${featuredMeta}</span>
          </button>
          <div class="card-bottom"><span class="price">${money(product.price)}</span><button class="primary" type="button" data-cart-action="${id}">В корзину</button><div class="quantity-control" data-card-qty="${id}" hidden><button type="button" data-cart-minus="${id}">−</button><span data-card-count="${id}"></span><button type="button" data-cart-plus="${id}">+</button></div></div>
        </article>
      `;
    })
    .join("");
  featuredRail.scrollLeft = 0;
  updateCardQuantities();
  syncFeaturedOrbit();
  if (shouldStageOrbit) {
    startFeaturedOrbitStage();
  }
  requestAnimationFrame(updateFeaturedRailControls);
}

function isFeaturedOrbitDesktop() {
  return window.matchMedia("(min-width: 900px)").matches;
}

function isFeaturedOrbitMobile() {
  return window.matchMedia("(max-width: 899px)").matches;
}

function isFeaturedOrbitMode() {
  return isFeaturedOrbitDesktop() || isFeaturedOrbitMobile();
}

function wrapFeaturedOrbitIndex(index, length = currentFeaturedIds.length) {
  if (!length) return 0;
  return ((index % length) + length) % length;
}

function getFeaturedOrbitRelativePosition(index) {
  const length = currentFeaturedIds.length;
  if (!length) return 0;
  let relative = index - featuredOrbitIndex;
  const half = Math.floor(length / 2);
  if (relative > half) relative -= length;
  if (relative < -half) relative += length;
  return relative;
}

function getFeaturedOrbitPositionName(relative) {
  if (relative < -3) return "hidden";
  if (relative === -3) return "far-left";
  if (relative === -2) return "orbit-left";
  if (relative === -1) return "center-left";
  if (relative === 0) return "center";
  if (relative === 1) return "center-right";
  if (relative === 2) return "orbit-right";
  if (relative === 3) return "far-right";
  return "hidden";
}

function setFeaturedCardInteractive(card, interactive) {
  card.classList.toggle("is-orbit-active", interactive);
  card.setAttribute("aria-hidden", String(!interactive && isFeaturedOrbitMode()));
  card.querySelectorAll(".product-card-main, .primary, .quantity-control button").forEach((control) => {
    if (interactive || !isFeaturedOrbitMode()) {
      control.removeAttribute("tabindex");
      control.removeAttribute("aria-hidden");
    } else {
      control.setAttribute("tabindex", "-1");
      control.setAttribute("aria-hidden", "true");
    }
  });
}

function syncFeaturedOrbit() {
  if (!featuredRail) return;
  const cards = Array.from(featuredRail.querySelectorAll(".product-card"));
  cards.forEach((card) => {
    const index = Number.parseInt(card.dataset.featuredCardIndex || "0", 10);
    const relative = getFeaturedOrbitRelativePosition(index);
    const position = getFeaturedOrbitPositionName(relative);
    const visibleRelative = Math.max(-3, Math.min(3, relative));
    const active = isFeaturedOrbitMobile() ? relative === 0 : Math.abs(relative) <= 1;
    card.dataset.orbitPosition = position;
    card.style.setProperty("--orbit-offset", String(visibleRelative));
    card.style.setProperty("--orbit-abs", String(Math.abs(visibleRelative)));
    card.style.setProperty("--orbit-depth", String(Math.max(0, Math.abs(visibleRelative) - 1)));
    setFeaturedCardInteractive(card, active);
  });
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
  if (isFeaturedOrbitMode()) {
    featuredOrbitIndex = wrapFeaturedOrbitIndex(featuredOrbitIndex + (direction === "next" ? 1 : -1));
    featuredRail.classList.add("is-switching");
    syncFeaturedOrbit();
    window.setTimeout(() => featuredRail.classList.remove("is-switching"), 360);
    updateFeaturedRailControls();
    return;
  }

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
  if (isFeaturedOrbitMobile()) {
    featuredRailButtons.forEach((button) => {
      button.hidden = true;
    });
    return;
  }
  if (isFeaturedOrbitMode()) {
    featuredRailButtons.forEach((button) => {
      button.hidden = currentFeaturedIds.length <= 3;
    });
    return;
  }
  const maxScroll = featuredRail.scrollWidth - featuredRail.clientWidth;
  const atStart = featuredRail.scrollLeft <= 4;
  const atEnd = featuredRail.scrollLeft >= maxScroll - 4;
  featuredRailButtons.forEach((button) => {
    button.hidden = maxScroll <= 4 || (button.dataset.featuredScroll === "prev" ? atStart : atEnd);
  });
}

function resetFeaturedOrbitTouchScroll() {
  featuredOrbitPointerState = null;
  featuredRail?.classList.remove("is-touch-scrolling");
}

function setupFeaturedOrbitTouchScroll() {
  if (!featuredRail || !window.PointerEvent) return;

  featuredRail.addEventListener("pointerdown", (event) => {
    if (!isFeaturedOrbitMode() || currentFeaturedIds.length <= 1 || !event.isPrimary) return;
    if (event.pointerType === "mouse") return;

    featuredOrbitPointerState = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      dragging: false,
    };
    featuredRail.setPointerCapture?.(event.pointerId);
  });

  featuredRail.addEventListener("pointermove", (event) => {
    if (!featuredOrbitPointerState || featuredOrbitPointerState.id !== event.pointerId) return;

    const deltaX = event.clientX - featuredOrbitPointerState.startX;
    const deltaY = event.clientY - featuredOrbitPointerState.startY;
    if (!featuredOrbitPointerState.dragging && Math.abs(deltaX) > 14 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15) {
      featuredOrbitPointerState.dragging = true;
      featuredRail.classList.add("is-touch-scrolling");
    }

    if (featuredOrbitPointerState.dragging) {
      event.preventDefault();
    }
  });

  featuredRail.addEventListener("pointerup", (event) => {
    if (!featuredOrbitPointerState || featuredOrbitPointerState.id !== event.pointerId) return;

    const deltaX = event.clientX - featuredOrbitPointerState.startX;
    const wasDragging = featuredOrbitPointerState.dragging;
    resetFeaturedOrbitTouchScroll();

    if (wasDragging) {
      featuredOrbitSuppressClickUntil = Date.now() + 450;
      if (Math.abs(deltaX) >= FEATURED_ORBIT_SWIPE_THRESHOLD_PX) {
        scrollFeaturedRail(deltaX < 0 ? "next" : "prev");
      }
    }
  });

  featuredRail.addEventListener("pointercancel", resetFeaturedOrbitTouchScroll);
}

function setupFeaturedOrbitWheelScroll() {
  if (!featuredRail) return;

  featuredRail.addEventListener(
    "wheel",
    (event) => {
      if (!isFeaturedOrbitMode() || currentFeaturedIds.length <= 1) return;

      const absX = Math.abs(event.deltaX);
      const absY = Math.abs(event.deltaY);
      if (absX < 2 || absX <= absY * 1.25) return;

      event.preventDefault();
      featuredOrbitWheelDeltaX += event.deltaX;

      const now = Date.now();
      if (now < featuredOrbitWheelCooldownUntil) return;

      if (Math.abs(featuredOrbitWheelDeltaX) >= FEATURED_ORBIT_WHEEL_THRESHOLD_PX) {
        scrollFeaturedRail(featuredOrbitWheelDeltaX > 0 ? "next" : "prev");
        featuredOrbitWheelDeltaX = 0;
        featuredOrbitWheelCooldownUntil = now + FEATURED_ORBIT_WHEEL_COOLDOWN_MS;
        featuredOrbitSuppressClickUntil = now + 450;
      }
    },
    { passive: false },
  );
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

function revealScrollItem(item) {
  if (item.classList.contains("is-revealed")) return;
  const isShowcaseScene = item === showcaseScene;
  const shouldStageShowcaseIntro = isShowcaseScene && primeFeaturedOrbitStage({ includeTabs: true });

  item.classList.add("is-revealed");

  if (!isShowcaseScene) return;
  if (shouldStageShowcaseIntro) {
    startFeaturedOrbitStage({ markIntroComplete: true });
  } else {
    showcaseScene?.classList.add("has-showcase-intro-complete");
  }
}

function resetScrollItem(item) {
  item.classList.remove("is-revealed");
  if (item === showcaseScene) {
    resetFeaturedOrbitIntro();
  }
}

function isReplayableScrollRevealItem(item) {
  return item.classList.contains("home-scene") && !isMobileHomeSceneReveal();
}

function setupScrollReveal() {
  if (scrollRevealItems.length === 0) return;
  scrollRevealItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min((index % 3) * 45, 90)}ms`);
  });

  if (showcaseScene) {
    primeFeaturedOrbitStage({ includeTabs: true });
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    scrollRevealItems.forEach((item) => revealScrollItem(item));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const item = entry.target;
        if (isMobileHomeSceneReveal() && item.classList.contains("home-scene")) {
          if (entry.isIntersecting) {
            revealScrollItem(item);
            observer.unobserve(item);
          }
          return;
        }

        if (isReplayableScrollRevealItem(item)) {
          if (entry.intersectionRatio >= SCROLL_REVEAL_ENTER_RATIO) {
            revealScrollItem(item);
          } else if (entry.intersectionRatio <= SCROLL_REVEAL_EXIT_RATIO) {
            resetScrollItem(item);
          }
          return;
        }

        if (entry.isIntersecting) {
          revealScrollItem(item);
        }
      });
    },
    {
      rootMargin: "0px",
      threshold: [0, SCROLL_REVEAL_EXIT_RATIO, SCROLL_REVEAL_ENTER_RATIO, 1],
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
  closeCompetingPopups("drawer");
  drawerScrollY = window.scrollY;
  lastFocusedElement = document.activeElement;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  drawerOpenButton.setAttribute("aria-expanded", "true");
  document.body.classList.add("drawer-open");
  document.body.style.top = `-${drawerScrollY}px`;
  requestAnimationFrame(() => drawer.querySelector(".drawer-panel a, .drawer-panel button")?.focus());
}

function closeDrawer({ restoreScroll = true, restoreFocus = true } = {}) {
  if (!drawer || !drawerOpenButton || !drawer.classList.contains("is-open")) return;
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  drawerOpenButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("drawer-open");
  document.body.style.top = "";
  if (restoreScroll) {
    window.scrollTo({ top: drawerScrollY, behavior: "auto" });
  }
  if (restoreFocus && lastFocusedElement && document.contains(lastFocusedElement)) {
    lastFocusedElement.focus();
  }
}

function closeCompetingPopups(activeSurface) {
  if (activeSurface !== "sort") setSortMenuOpen(false, { closeCompeting: false });
  if (activeSurface !== "drawer") closeDrawer({ restoreScroll: false, restoreFocus: false });
  if (activeSurface !== "filter") closeFilterPanel({ restoreScroll: false, restoreFocus: false });
  if (activeSurface !== "gallery") closeGallery({ restoreFocus: false });
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
  filterPanel.setAttribute("aria-modal", String(isMobile && isOpen));
  document.body.classList.toggle("filter-open", isMobile && isOpen);
}

function openFilterPanel() {
  if (!filterPanel) return;
  closeCompetingPopups("filter");
  filterLastFocusedElement = document.activeElement;
  if (isMobileFilterPanel()) {
    filterScrollY = window.scrollY;
    document.body.style.top = `-${filterScrollY}px`;
  }
  filterPanel.classList.add("is-open");
  filterToggle?.setAttribute("aria-expanded", "true");
  syncFilterPanelAccessibility();
  requestAnimationFrame(() => filterPanel.querySelector(".filter-panel-head button, [data-filter-apply]")?.focus());
}

function closeFilterPanel({ restoreScroll = true, restoreFocus = true } = {}) {
  if (!filterPanel) return;
  const wasOpen = filterPanel.classList.contains("is-open");
  filterPanel.classList.remove("is-open");
  setFilterResetMenuOpen(false);
  filterToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("filter-open");
  if (wasOpen && isMobileFilterPanel()) {
    document.body.style.top = "";
    if (restoreScroll) {
      window.scrollTo({ top: filterScrollY, behavior: "auto" });
    }
  }
  syncFilterPanelAccessibility();
  if (restoreFocus && wasOpen && filterLastFocusedElement && document.contains(filterLastFocusedElement)) {
    filterLastFocusedElement.focus();
  }
}

function openGallery() {
  if (!galleryModal) return;
  closeCompetingPopups("gallery");
  lastFocusedElement = document.activeElement;
  galleryModal.hidden = false;
  requestAnimationFrame(() => galleryModal.querySelector(".gallery-modal-panel button")?.focus());
}

function closeGallery({ restoreFocus = true } = {}) {
  if (!galleryModal || galleryModal.hidden) return;
  galleryModal.hidden = true;
  if (restoreFocus && lastFocusedElement && document.contains(lastFocusedElement)) {
    lastFocusedElement.focus();
  }
}

function getFocusableElements(container) {
  if (!container) return [];
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter((element) => {
    if (element.disabled || element.hidden) return false;
    if (element.closest("[hidden], [aria-hidden=\"true\"]")) return false;
    return true;
  });
}

function trapFocusWithin(container, event) {
  if (event.key !== "Tab" || !container) return;
  const focusable = getFocusableElements(container);
  if (focusable.length === 0) {
    event.preventDefault();
    container.focus?.();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement;

  if (event.shiftKey && (active === first || !container.contains(active))) {
    event.preventDefault();
    last.focus();
    return;
  }

  if (!event.shiftKey && active === last) {
    event.preventDefault();
    first.focus();
  }
}

function getFormStateFields(form) {
  return Array.from(form.querySelectorAll("input, select, textarea"));
}

function setFieldDescribedBy(field, descriptionId, enabled) {
  if (!field || !descriptionId) return;
  const values = new Set((field.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean));
  if (enabled) {
    values.add(descriptionId);
  } else {
    values.delete(descriptionId);
  }

  if (values.size) {
    field.setAttribute("aria-describedby", Array.from(values).join(" "));
  } else {
    field.removeAttribute("aria-describedby");
  }
}

function setFormInvalidState(form) {
  const descriptionId = form.getAttribute("aria-describedby");
  getFormStateFields(form).forEach((field) => {
    if (field.validity.valid) {
      field.removeAttribute("aria-invalid");
      setFieldDescribedBy(field, descriptionId, false);
    } else {
      field.setAttribute("aria-invalid", "true");
      setFieldDescribedBy(field, descriptionId, true);
    }
  });
}

function clearFormInvalidState(form) {
  const descriptionId = form.getAttribute("aria-describedby");
  getFormStateFields(form).forEach((field) => {
    field.removeAttribute("aria-invalid");
    setFieldDescribedBy(field, descriptionId, false);
  });
}

function clearFieldInvalidState(field) {
  if (field?.validity.valid) {
    field.removeAttribute("aria-invalid");
    setFieldDescribedBy(field, field.closest("form")?.getAttribute("aria-describedby"), false);
  }
}

function getInvalidFields(form) {
  return getFormStateFields(form).filter((field) => !field.validity.valid);
}

function getFieldLabel(field) {
  const label = field.closest("label");
  if (!label) return field.name || "поле";
  const labelText = Array.from(label.childNodes)
    .filter((node) => node.nodeType === Node.TEXT_NODE)
    .map((node) => node.textContent.trim())
    .join(" ")
    .trim();
  return labelText || label.querySelector("span")?.textContent?.trim() || field.name || "поле";
}

function getFieldErrorMessage(field) {
  if (field.dataset.errorMessage) return field.dataset.errorMessage;
  if (field.validity.valueMissing) return `Заполните поле «${getFieldLabel(field)}».`;
  if (field.validity.typeMismatch && field.type === "email") return "Проверьте email: нужен формат name@example.ru.";
  if (field.validity.rangeUnderflow && field.min) return `Укажите «${getFieldLabel(field)}» не меньше ${field.min}.`;
  return `Проверьте поле «${getFieldLabel(field)}».`;
}

function renderFormErrorSummary(form, errorNode, invalidFields) {
  if (!errorNode) return;
  const messages = invalidFields.map(getFieldErrorMessage);
  errorNode.textContent = messages.length === 1
    ? messages[0]
    : `Проверьте поля: ${messages.slice(0, 3).join(" ")}`;
  errorNode.hidden = false;
  const descriptionId = errorNode.id || form.getAttribute("aria-describedby");
  invalidFields.forEach((field) => setFieldDescribedBy(field, descriptionId, true));
}

function focusFirstInvalidField(invalidFields) {
  invalidFields[0]?.scrollIntoView({ block: "center", behavior: "smooth" });
  invalidFields[0]?.focus({ preventScroll: true });
}

function bindFormInvalidState(form, errorNode) {
  if (!form) return;

  form.addEventListener("invalid", (event) => {
    const field = event.target.closest("input, select, textarea");
    if (!field) return;
    field.setAttribute("aria-invalid", "true");
    setFieldDescribedBy(field, errorNode?.id || form.getAttribute("aria-describedby"), true);
    if (errorNode) {
      renderFormErrorSummary(form, errorNode, getInvalidFields(form));
    }
  }, true);

  ["input", "change"].forEach((eventName) => {
    form.addEventListener(eventName, (event) => {
      clearFieldInvalidState(event.target.closest("input, select, textarea"));
    });
  });
}

function validateForm(form, errorNode) {
  const invalidFields = getInvalidFields(form);
  if (invalidFields.length) {
    setFormInvalidState(form);
    renderFormErrorSummary(form, errorNode, invalidFields);
    focusFirstInvalidField(invalidFields);
    return false;
  }
  clearFormInvalidState(form);
  if (errorNode) {
    errorNode.hidden = true;
  }
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
  const loadingLabel = button.dataset.loadingLabel || (targetScreen === "success" ? "Заявка отправляется" : "Расчёт отправляется");
  button.textContent = loadingLabel;
  pendingSubmitTimer = window.setTimeout(() => {
    pendingSubmitTimer = 0;
    isSubmitting = false;
    button.disabled = false;
    button.textContent = button.dataset.submitLabel || "Отправить";
    if (targetScreen === "success") {
      renderSuccessReceipt();
      checkoutSubmitted = true;
    }
    if (targetScreen === "custom-3d-print-success") {
      custom3dPrintSubmitted = true;
    }
    goToScreen(targetScreen);
  }, 420);
}

document.addEventListener("click", (event) => {
  if (sortRoot && !sortRoot.contains(event.target)) {
    setSortMenuOpen(false);
  }

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

  if (Date.now() < featuredOrbitSuppressClickUntil && event.target.closest(".showcase-scene .featured-rail")) {
    event.preventDefault();
    event.stopPropagation();
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

  const featuredCardProduct = event.target.closest(".showcase-scene .product-card.is-orbit-active[data-open-product-card]");
  if (
    featuredCardProduct &&
    isFeaturedOrbitMode() &&
    !event.target.closest("[data-cart-action], [data-cart-plus], [data-cart-minus], [data-card-qty]")
  ) {
    goToScreen("product", { product: featuredCardProduct.dataset.openProductCard || activeProductId });
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

  if (filterResetMenu && !event.target.closest("[data-filter-reset-menu]")) {
    setFilterResetMenuOpen(false);
  }
});

filterPanel?.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-filter-toggle-group]");
  const control = event.target.closest("[data-filter-group][data-filter-value]");
  const resetAll = event.target.closest("[data-filter-reset-all]");
  const clearGroup = event.target.closest("[data-filter-clear-group]");

  if (resetAll) {
    event.stopPropagation();
    resetAllCatalogFilters({ navigate: false });
    setFilterResetMenuOpen(false);
    return;
  }

  if (clearGroup) {
    clearDraftFilterGroup(clearGroup.getAttribute("data-filter-clear-group"), clearGroup.getAttribute("data-filter-clear-value"));
    return;
  }

  if (toggle && !control) {
    setFilterResetMenuOpen(false);
    const group = toggle.dataset.filterToggleGroup;
    toggleFilterGroup(group);
    renderDependentFilters();
    return;
  }

  if (!control) return;
  if (control.dataset.filterGroup === "productKind" && control.dataset.filterValue === "all") {
    applyAllProductsFilter();
    return;
  }
  const parentFilterPanel = control.closest("[data-dependent-filter]");
  const parentFilterGroup = parentFilterPanel?.dataset.dependentFilter;
  setFilterResetMenuOpen(false);
  setDraftCatalogFilter(control.dataset.filterGroup, control.dataset.filterValue);
  if (!parentFilterGroup) {
    expandedFilterGroups.clear();
  }
  refreshDraftFilterUi();
});

catalogSearch?.addEventListener("input", () => {
  visibleProductLimit = 8;
  filterCatalog();
});
loadMoreButton?.addEventListener("click", () => {
  visibleProductLimit += 6;
  filterCatalog();
});
filterToggle?.addEventListener("click", openFilterPanel);
filterCloseButtons.forEach((button) => button.addEventListener("click", () => closeFilterPanel()));
filterApplyButton?.addEventListener("click", applyDraftCatalogFilters);
filterResetButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  if (filterResetButton.disabled) {
    setFilterResetMenuOpen(false);
    return;
  }
  toggleFilterResetMenu();
});

sortButton?.addEventListener("click", () => {
  setSortMenuOpen(Boolean(sortMenu?.hidden));
});

sortOptions.forEach((option) => {
  option.addEventListener("click", () => {
    activeSort = option.dataset.sortOption || "popular";
    visibleProductLimit = 8;
    syncSortControl();
    setSortMenuOpen(false);
    filterCatalog();
  });
});

sortRoot?.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  setSortMenuOpen(false);
  sortButton?.focus();
});

featuredTabs.forEach((button) => {
  button.addEventListener("click", () => {
    currentFeaturedTab = button.dataset.featuredTab || "hits";
    featuredTabs.forEach((tab) => tab.classList.toggle("is-active", tab === button));
    renderFeaturedProducts({ stageOrbit: true });
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

customModelForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit(customModelForm, customModelSubmit, customModelError, "custom-3d-print-success");
});

bindFormInvalidState(checkoutForm, checkoutError);
bindFormInvalidState(customModelForm, customModelError);

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    if (galleryModal && !galleryModal.hidden) {
      trapFocusWithin(galleryModal, event);
      return;
    }
    if (filterPanel?.classList.contains("is-open") && isMobileFilterPanel()) {
      trapFocusWithin(filterPanel, event);
      return;
    }
    if (drawer?.classList.contains("is-open")) {
      trapFocusWithin(drawer, event);
    }
    return;
  }

  if (event.key !== "Escape") return;
  setSortMenuOpen(false, { closeCompeting: false });
  closeDrawer({ restoreScroll: false });
  closeFilterPanel({ restoreScroll: false });
  closeGallery();
});

window.addEventListener("hashchange", applyRoute);
window.addEventListener("scroll", scheduleActiveScrollUpdate, { passive: true });
window.addEventListener("resize", syncFilterPanelAccessibility);
window.addEventListener("resize", () => {
  syncFeaturedOrbit();
  updateFeaturedRailControls();
});
window.addEventListener("resize", updateGalleryControls);
window.addEventListener("resize", scheduleActiveScrollUpdate);
window.addEventListener("beforeunload", () => rememberScrollPosition());

initTheme();
renderFeaturedProducts();
setupFeaturedOrbitTouchScroll();
setupFeaturedOrbitWheelScroll();
renderCart();
updateCardQuantities();
syncFilterPanelAccessibility();
setupOrderInspector();
setupJournalPreview();
setupJournalPagePreview();
setupScrollReveal();
showHeroSlide(0);
startHeroCarousel(HERO_CAROUSEL_FIRST_DELAY_MS);
syncSortControl();
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
