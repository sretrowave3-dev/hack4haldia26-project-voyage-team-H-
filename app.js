/**
 * CanteenPulse • Shahi Dhaba & Royal KDS
 * Complete culinary system featuring:
 * - Title-accurate high-resolution food thumbnails
 * - Star rating system with pseudo pre-ratings & user rating persistence
 * - Advanced sorting: Most Ordered, Most Rated, Top Rating, Price High-to-Low, Price Low-to-High
 * - Out of Stock thumbnail overlays and live kitchen stock toggle
 * - Finite State Machine order lifecycle & executive management intelligence
 */

// ==========================================
// 1. DATA MODELS & MENU (TITLE-REFERENCED)
// ==========================================
const INDIAN_MENU = [
  // --- LUNCH / TRADITIONAL MAINS (Referenced from Indian Kitchen Staples) ---
  {
    id: 'ln1',
    name: 'Crispy Paper-Thin Rava Dosa',
    price: 110,
    shift: 'lunch',
    category: 'meal',
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=80',
    desc: 'Crispy semolina & rice batter dosa served with fresh coconut chutney & hot sambar.',
    rating: 4.8,
    ratingCount: 184,
    orderCount: 142,
    inStock: true
  },
  {
    id: 'ln2',
    name: 'Steamed Oats Idly & Peanut Dip',
    price: 85,
    shift: 'lunch',
    category: 'meal',
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
    desc: 'Nutrient-rich soft oats idlis paired with spiced peanut chutney and lentil stew.',
    rating: 4.6,
    ratingCount: 96,
    orderCount: 68,
    inStock: true
  },
  {
    id: 'ln3',
    name: 'Homestyle Matar Poha',
    price: 60,
    shift: 'lunch',
    category: 'meal',
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80',
    desc: 'Rinsed flattened rice tempered with green peas, onions, roasted peanuts and lemon.',
    rating: 4.5,
    ratingCount: 112,
    orderCount: 85,
    inStock: true
  },
  {
    id: 'ln4',
    name: 'Western Sabudana Khichdi',
    price: 80,
    shift: 'lunch',
    category: 'meal',
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80',
    desc: 'Soaked tapioca pearls sautéed with cumin, green chilies, diced potatoes and crushed peanuts.',
    rating: 4.4,
    ratingCount: 74,
    orderCount: 48,
    inStock: false // Out of stock initially to demonstrate the out of stock sign
  },
  {
    id: 'ln5',
    name: 'Desi Ghee Aloo Paratha Thali',
    price: 95,
    shift: 'lunch',
    category: 'meal',
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=80',
    desc: 'Golden charred flatbread stuffed with spiced potato mash, served with white butter & curd.',
    rating: 4.9,
    ratingCount: 260,
    orderCount: 198,
    inStock: true
  },
  {
    id: 'ln6',
    name: 'Shahi Dal Makhani & Jeera Rice',
    price: 150,
    shift: 'lunch',
    category: 'meal',
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80',
    desc: 'Slow-simmered black lentils with butter and cream, served with basmati rice.',
    rating: 4.7,
    ratingCount: 215,
    orderCount: 156,
    inStock: true
  },

  // --- SNACKS & QUICK BITES ---
  {
    id: 'sn1',
    name: 'Crispy Chicken Fried Bites',
    price: 160,
    shift: 'snacks',
    category: 'meal',
    diet: 'nonveg',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80',
    desc: 'Golden seasoned deep-fried chicken tenders coated in crispy herb crust with garlic dip.',
    rating: 4.8,
    ratingCount: 235,
    orderCount: 182,
    inStock: true
  },
  {
    id: 'sn2',
    name: 'Loaded Double Cheese Burger',
    price: 130,
    shift: 'snacks',
    category: 'meal',
    diet: 'nonveg',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
    desc: 'Juicy spiced grilled patty with cheddar cheese slice, caramelized onions and spicy mayo.',
    rating: 4.7,
    ratingCount: 204,
    orderCount: 165,
    inStock: true
  },
  {
    id: 'sn3',
    name: 'Spiced Tomato Penne Pasta',
    price: 110,
    shift: 'snacks',
    category: 'meal',
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?w=600&auto=format&fit=crop&q=80',
    desc: 'Penne pasta tossed in roasted arrabbiata tomato sauce, garlic, basil and herbs.',
    rating: 4.5,
    ratingCount: 128,
    orderCount: 92,
    inStock: true
  },
  {
    id: 'sn4',
    name: 'Glazed Spiced Meatball Bites',
    price: 140,
    shift: 'snacks',
    category: 'meal',
    diet: 'nonveg',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&auto=format&fit=crop&q=80',
    desc: 'Tender minced chicken meatballs tossed in sweet and smoky paprika glaze.',
    rating: 4.6,
    ratingCount: 95,
    orderCount: 64,
    inStock: false // Out of stock initially to demonstrate snacks shift out-of-stock sign
  },
  {
    id: 'sn5',
    name: 'Canteen Fresh Garden Salad',
    price: 70,
    shift: 'snacks',
    category: 'meal',
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80',
    desc: 'Crisp lettuce, cucumbers, cherry tomatoes, olives and lemon vinaigrette dressing.',
    rating: 4.3,
    ratingCount: 78,
    orderCount: 50,
    inStock: true
  },
  {
    id: 'sn6',
    name: 'Street Crispy Tacos (2 Pcs)',
    price: 100,
    shift: 'snacks',
    category: 'meal',
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&auto=format&fit=crop&q=80',
    desc: 'Crunchy taco shells filled with spiced beans, corn salsa, shredded cheese and sour cream.',
    rating: 4.5,
    ratingCount: 118,
    orderCount: 88,
    inStock: true
  },
  {
    id: 'sn7',
    name: 'Wood-Fired Margherita Pizza Slice',
    price: 120,
    shift: 'snacks',
    category: 'meal',
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop&q=80',
    desc: 'Fresh mozzarella, san marzano tomato paste, basil leaves and olive oil drizzle.',
    rating: 4.8,
    ratingCount: 290,
    orderCount: 210,
    inStock: true
  },

  // --- 24/7 CHAI, COFFEE & BEVERAGES ---
  {
    id: 'b1',
    name: 'Kadak Masala Chai',
    price: 25,
    shift: 'all_day',
    category: 'beverage',
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
    desc: 'Brewed with fresh ginger, cardamom pods and rich buffalo milk.',
    rating: 4.9,
    ratingCount: 420,
    orderCount: 340,
    inStock: true
  },
  {
    id: 'b2',
    name: 'South Indian Filter Coffee',
    price: 35,
    shift: 'all_day',
    category: 'beverage',
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
    desc: 'Slow-dripped chicory blend frothed in traditional brass davarah.',
    rating: 4.8,
    ratingCount: 310,
    orderCount: 245,
    inStock: true
  },
  {
    id: 'b3',
    name: 'Kesar Pista Mango Lassi',
    price: 60,
    shift: 'all_day',
    category: 'beverage',
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600&auto=format&fit=crop&q=80',
    desc: 'Thick yogurt smoothie blended with Alphonso pulp and saffron strands.',
    rating: 4.7,
    ratingCount: 195,
    orderCount: 130,
    inStock: true
  },
  {
    id: 'b4',
    name: 'Chilled Thums Up / Coke Bottle',
    price: 40,
    shift: 'all_day',
    category: 'beverage',
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=80',
    desc: 'Crisp, chilled carbonated soft drink served ice-cold.',
    rating: 4.4,
    ratingCount: 140,
    orderCount: 95,
    inStock: true
  }
];

// ==========================================
// 2. STATE MACHINE & STORAGE CONFIGURATION
// ==========================================
const ORDER_STATES = {
  PLACED: 'placed',
  PREPARING: 'preparing',
  READY: 'ready',
  COLLECTED: 'collected'
};

const ALLOWED_TRANSITIONS = {
  [ORDER_STATES.PLACED]: [ORDER_STATES.PREPARING],
  [ORDER_STATES.PREPARING]: [ORDER_STATES.READY],
  [ORDER_STATES.READY]: [ORDER_STATES.COLLECTED],
  [ORDER_STATES.COLLECTED]: []
};

// Storage & Sync Keys
const STORAGE_KEY = 'canteen_shahi_verified_v6';
const MENU_STORAGE_KEY = 'canteen_menu_data_v6';
const RATINGS_STORAGE_KEY = 'canteen_user_ratings_v6';
const CHANNEL_NAME = 'canteen_shahi_bus_v6';

let currentUser = null;
let activeCategory = 'all'; // 'all', 'meal', 'beverage'
let activeDietary = 'all';   // 'all', 'veg', 'nonveg'
let activeSort = 'default';  // 'default', 'most_ordered', 'most_rated', 'rating_desc', 'price_desc', 'price_asc'
let cart = {};
let orders = [];

// Initialize BroadcastChannel for instant cross-tab live synchronization
let broadcastChannel = null;
try {
  broadcastChannel = new BroadcastChannel(CHANNEL_NAME);
  broadcastChannel.onmessage = (event) => {
    if (!event.data) return;
    if (event.data.type === 'SYNC_ORDERS') {
      orders = event.data.payload;
      refreshCurrentView();
    } else if (event.data.type === 'SYNC_MENU') {
      applySavedMenuData(event.data.payload);
      refreshCurrentView();
    }
  };
} catch (e) {
  console.warn('BroadcastChannel not supported in this environment.');
}

window.addEventListener('storage', (e) => {
  if (e.key === STORAGE_KEY || e.key === STORAGE_KEY + '_ping') {
    loadOrdersFromStorage();
    refreshCurrentView();
  } else if (e.key === MENU_STORAGE_KEY) {
    loadMenuData();
    refreshCurrentView();
  }
});

// Toast Notification Controller
let toastTimer = null;
function showToast(message, icon = 'sparkles') {
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  const toastIconWrap = document.getElementById('toast-icon-wrap');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  if (toastIconWrap) {
    toastIconWrap.innerHTML = `<i data-lucide="${icon}" class="w-4 h-4"></i>`;
    lucide.createIcons();
  }

  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// User Rating Storage
function getUserRatings() {
  try {
    const raw = localStorage.getItem(RATINGS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveUserRatings(ratings) {
  localStorage.setItem(RATINGS_STORAGE_KEY, JSON.stringify(ratings));
}

// Menu Customization Storage (ratings, orderCount, inStock availability)
function saveMenuData(broadcast = true) {
  const customData = INDIAN_MENU.map(i => ({
    id: i.id,
    rating: i.rating,
    ratingCount: i.ratingCount,
    orderCount: i.orderCount,
    inStock: i.inStock
  }));
  localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(customData));
  if (broadcast && broadcastChannel) {
    broadcastChannel.postMessage({ type: 'SYNC_MENU', payload: customData });
  }
}

function applySavedMenuData(customData) {
  if (!Array.isArray(customData)) return;
  customData.forEach(s => {
    const item = INDIAN_MENU.find(m => m.id === s.id);
    if (item) {
      if (s.rating !== undefined) item.rating = s.rating;
      if (s.ratingCount !== undefined) item.ratingCount = s.ratingCount;
      if (s.orderCount !== undefined) item.orderCount = s.orderCount;
      if (s.inStock !== undefined) item.inStock = s.inStock;
    }
  });
}

function loadMenuData() {
  const raw = localStorage.getItem(MENU_STORAGE_KEY);
  if (raw) {
    try {
      applySavedMenuData(JSON.parse(raw));
    } catch (e) {
      console.warn('Failed to parse saved menu data:', e);
    }
  }
}

// Item Sold Count (Real-time orders + pseudo base count)
function getItemSoldCount(itemId) {
  return orders.reduce((sum, o) => {
    const itm = o.items.find(i => i.id === itemId);
    return sum + (itm ? itm.qty : 0);
  }, 0);
}

function getItemTotalOrders(item) {
  return (item.orderCount || 0) + getItemSoldCount(item.id);
}

// ==========================================
// 3. RATING SYSTEM & STOCK CONTROLLER
// ==========================================
function rateDish(itemId, stars, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const item = INDIAN_MENU.find(m => m.id === itemId);
  if (!item) return;

  const userRatings = getUserRatings();
  const previousRating = userRatings[itemId];

  let count = item.ratingCount || 10;
  let sum = (item.rating || 4.5) * count;

  if (previousRating) {
    sum = sum - previousRating + stars;
  } else {
    sum += stars;
    count += 1;
  }

  const updatedRating = Math.round((sum / count) * 10) / 10;
  item.rating = updatedRating;
  item.ratingCount = count;
  userRatings[itemId] = stars;

  saveUserRatings(userRatings);
  saveMenuData(true);

  showToast(`⭐ Rated "${item.name}" ${stars} Star${stars > 1 ? 's' : ''}! Thank you for dining.`);
  renderMenu();
  renderCustomerTracker();

  if (currentUser && currentUser.role === 'manager') {
    renderManagerDashboard();
  }
}

function toggleItemStock(itemId) {
  const item = INDIAN_MENU.find(m => m.id === itemId);
  if (!item) return;

  item.inStock = !item.inStock;
  if (!item.inStock && cart[itemId]) {
    delete cart[itemId];
  }

  saveMenuData(true);
  showToast(item.inStock
    ? `✓ "${item.name}" marked IN STOCK`
    : `✕ "${item.name}" marked OUT OF STOCK`,
    item.inStock ? 'check' : 'ban'
  );

  refreshCurrentView();
}

function saveOrdersToStorage(broadcast = true) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  if (broadcast) {
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'SYNC_ORDERS', payload: orders });
    }
    localStorage.setItem(STORAGE_KEY + '_ping', Date.now().toString());
  }
}

function loadOrdersFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      orders = JSON.parse(raw);
    } catch (e) {
      orders = [];
    }
  } else {
    seedInitialDemoData();
  }
}

function seedInitialDemoData() {
  const now = Date.now();
  orders = [
    {
      id: 'ORD-101',
      token: 'T-101',
      customerName: 'Aarav Sharma',
      items: [
        { id: 'ln1', name: 'Crispy Paper-Thin Rava Dosa', price: 110, qty: 1, diet: 'veg' },
        { id: 'b1', name: 'Kadak Masala Chai', price: 25, qty: 2, diet: 'veg' }
      ],
      total: 160,
      status: ORDER_STATES.PREPARING,
      createdAt: now - 9 * 60 * 1000,
      prepStartedAt: now - 6 * 60 * 1000,
      readyAt: null,
      collectedAt: null
    },
    {
      id: 'ORD-102',
      token: 'T-102',
      customerName: 'Vikram Malhotra',
      items: [
        { id: 'sn1', name: 'Crispy Chicken Fried Bites', price: 160, qty: 1, diet: 'nonveg' },
        { id: 'b4', name: 'Chilled Thums Up / Coke Bottle', price: 40, qty: 1, diet: 'veg' }
      ],
      total: 200,
      status: ORDER_STATES.READY,
      createdAt: now - 16 * 60 * 1000,
      prepStartedAt: now - 12 * 60 * 1000,
      readyAt: now - 3 * 60 * 1000,
      collectedAt: null
    },
    {
      id: 'ORD-103',
      token: 'T-103',
      customerName: 'Priya Iyer',
      items: [
        { id: 'ln5', name: 'Desi Ghee Aloo Paratha Thali', price: 95, qty: 2, diet: 'veg' }
      ],
      total: 190,
      status: ORDER_STATES.COLLECTED,
      createdAt: now - 50 * 60 * 1000,
      prepStartedAt: now - 44 * 60 * 1000,
      readyAt: now - 30 * 60 * 1000,
      collectedAt: now - 28 * 60 * 1000
    },
    {
      id: 'ORD-104',
      token: 'T-104',
      customerName: 'Aarav Sharma',
      items: [
        { id: 'sn2', name: 'Loaded Double Cheese Burger', price: 130, qty: 1, diet: 'nonveg' }
      ],
      total: 130,
      status: ORDER_STATES.COLLECTED,
      createdAt: now - 120 * 60 * 1000,
      prepStartedAt: now - 114 * 60 * 1000,
      readyAt: now - 105 * 60 * 1000,
      collectedAt: now - 101 * 60 * 1000
    }
  ];
  saveOrdersToStorage(true);
}

function playChime() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;
    [523.25, 659.25, 783.99].forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);
      gain.gain.setValueAtTime(0.2, now + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.4);
    });
  } catch (e) {
    console.log('Audio chime deferred until user interaction.');
  }
}

// ==========================================
// 4. MEAL SHIFT & FILTER CONTROLLERS
// ==========================================
function getActiveMealShift() {
  const selector = document.getElementById('meal-time-selector');
  const override = selector ? selector.value : 'auto';

  if (override !== 'auto') return override;

  const hour = new Date().getHours();
  // Lunch between 11:30 AM and 4:30 PM, Snacks in the evening
  if (hour >= 11 && hour < 16) return 'lunch';
  return 'snacks';
}

function setDietaryFilter(diet) {
  activeDietary = diet;
  document.querySelectorAll('.diet-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-diet-${diet}`);
  if (activeBtn) activeBtn.classList.add('active');
  renderMenu();
}

function filterCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  renderMenu();
}

function setSortFilter(sortType) {
  activeSort = sortType;

  // Sync dropdown selector
  const sel = document.getElementById('menu-sort-selector');
  if (sel) sel.value = sortType;

  // Sync quick sort pills
  document.querySelectorAll('.sort-pill').forEach(btn => btn.classList.remove('active'));
  const activePill = document.getElementById(`sort-pill-${sortType}`);
  if (activePill) activePill.classList.add('active');

  renderMenu();
}

// ==========================================
// 5. ROLE LOGIN
// ==========================================
function loginAs(role, name) {
  currentUser = { role, name };
  document.getElementById('header-user-tag').textContent = `Role: ${name} (${role.toUpperCase()})`;
  document.getElementById('btn-logout').classList.remove('hidden');

  document.getElementById('view-login').classList.add('hidden');
  document.getElementById('view-customer').classList.add('hidden');
  document.getElementById('view-staff').classList.add('hidden');
  document.getElementById('view-manager').classList.add('hidden');

  if (role === 'customer') {
    document.getElementById('view-customer').classList.remove('hidden');
    document.getElementById('cust-name-display').textContent = `Welcome, ${name}`;
    renderCustomerView();
  } else if (role === 'staff') {
    document.getElementById('view-staff').classList.remove('hidden');
    renderKDS();
  } else if (role === 'manager') {
    document.getElementById('view-manager').classList.remove('hidden');
    renderManagerDashboard();
  }

  lucide.createIcons();
}

document.getElementById('btn-logout').addEventListener('click', () => {
  currentUser = null;
  document.getElementById('header-user-tag').textContent = 'Session: Guest View';
  document.getElementById('btn-logout').classList.add('hidden');

  document.getElementById('view-customer').classList.add('hidden');
  document.getElementById('view-staff').classList.add('hidden');
  document.getElementById('view-manager').classList.add('hidden');
  document.getElementById('view-login').classList.remove('hidden');
});

// ==========================================
// 6. CUSTOMER VIEW RENDERER
// ==========================================
function renderMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  const currentShift = getActiveMealShift();
  document.getElementById('active-shift-badge').textContent = currentShift === 'lunch' ? 'Lunch / Meals' : 'Snacks & Bites';
  document.getElementById('menu-shift-subtext').textContent = currentShift === 'lunch'
    ? 'Traditional hearty meals (Reference: Rava Dosa, Oats Idly, Poha, Parathas)'
    : 'Evening bites & fast foods (Reference: Crispy Chicken, Burgers, Pasta, Pizza)';

  // 1. Filter dishes by Shift, Dietary and Category
  const availableItems = INDIAN_MENU.filter(item => {
    const isBeverage = item.category === 'beverage';
    const matchesShift = item.shift === currentShift || item.shift === 'all_day';

    if (!matchesShift && !isBeverage) return false;

    // Dietary filter
    if (activeDietary === 'veg' && item.diet !== 'veg') return false;
    if (activeDietary === 'nonveg' && item.diet !== 'nonveg') return false;

    // Category filter
    if (activeCategory === 'meal' && isBeverage) return false;
    if (activeCategory === 'beverage' && !isBeverage) return false;

    return true;
  });

  // 2. Sort dishes according to activeSort option
  if (activeSort === 'most_ordered') {
    availableItems.sort((a, b) => getItemTotalOrders(b) - getItemTotalOrders(a));
  } else if (activeSort === 'most_rated') {
    availableItems.sort((a, b) => (b.ratingCount || 0) - (a.ratingCount || 0));
  } else if (activeSort === 'rating_desc') {
    availableItems.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (activeSort === 'price_desc') {
    availableItems.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'price_asc') {
    availableItems.sort((a, b) => a.price - b.price);
  }

  if (availableItems.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-amber-200/50 font-cinzel">
        <i data-lucide="filter" class="w-8 h-8 mx-auto mb-2 text-amber-400/50"></i>
        No dishes available for the selected shift and filters.
      </div>
    `;
    lucide.createIcons();
    return;
  }

  const userRatings = getUserRatings();

  grid.innerHTML = availableItems.map(item => {
    const totalSold = getItemTotalOrders(item);
    const userRated = userRatings[item.id];

    return `
      <div class="menu-card rounded-2xl overflow-hidden flex flex-col justify-between group">
        
        <!-- Enhanced Food Item Thumbnail Container -->
        <div class="thumb-container relative">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            class="thumb-image ${!item.inStock ? 'out-of-stock-img' : ''}"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80';"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10"></div>
          
          <!-- Top Left Badges: FSSAI Dietary & Meal Shift -->
          <div class="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
            <span class="fssai-badge ${item.diet === 'veg' ? 'fssai-badge-veg' : 'fssai-badge-nonveg'}" title="${item.diet === 'veg' ? 'Pure Vegetarian' : 'Non-Vegetarian'}">
              <span class="dot"></span>
            </span>
            <span class="bg-black/80 backdrop-blur-md text-amber-300 text-[10px] uppercase font-cinzel font-bold tracking-wider px-2 py-0.5 rounded-md border border-amber-500/30">
              ${item.category === 'beverage' ? '24/7 Chai' : item.shift}
            </span>
          </div>

          <!-- Top Right: Rating Pill on Thumbnail -->
          <div class="absolute top-2.5 right-2.5 z-10">
            <div class="thumb-rating-pill flex items-center gap-1 px-2 py-0.5 rounded-lg text-amber-300">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>
              <span class="font-bold text-xs font-mono">${item.rating.toFixed(1)}</span>
              <span class="text-[10px] text-amber-200/60 font-mono">(${item.ratingCount})</span>
            </div>
          </div>

          <!-- Bottom Left: Most Ordered / Order Frequency Tag -->
          <div class="absolute bottom-2.5 left-2.5 z-10">
            <span class="bg-black/80 backdrop-blur-md text-amber-200/80 text-[10px] font-mono px-2 py-0.5 rounded border border-amber-500/25 flex items-center gap-1">
              <i data-lucide="flame" class="w-3 h-3 text-amber-400"></i>
              <span>${totalSold} ordered</span>
            </span>
          </div>

          <!-- Bottom Right: Price Tag -->
          <span class="absolute bottom-2.5 right-2.5 z-10 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-950 font-black text-sm px-3 py-0.5 rounded-lg shadow-lg font-mono">
            ₹${item.price}
          </span>

          <!-- OUT OF STOCK SIGN ON THUMBNAIL (When item is unavailable) -->
          ${!item.inStock ? `
            <div class="out-of-stock-overlay">
              <div class="out-of-stock-sign">
                <i data-lucide="ban" class="w-4 h-4"></i>
                OUT OF STOCK
              </div>
              <span class="text-[10px] text-rose-200 font-cinzel font-semibold tracking-wider mt-1.5 uppercase drop-shadow">
                Kitchen Unavailable
              </span>
            </div>
          ` : ''}
        </div>

        <!-- Food Item Details & Rating Interaction -->
        <div class="p-4 flex flex-col flex-1 justify-between">
          <div>
            <div class="flex items-start justify-between gap-1">
              <h4 class="font-cinzel font-bold text-sm text-amber-100 tracking-wide line-clamp-1" title="${item.name}">${item.name}</h4>
            </div>
            <p class="text-xs text-amber-200/60 mt-1 line-clamp-2 font-light leading-relaxed">${item.desc}</p>
            
            <!-- 5-Star Interactive Rating System Row -->
            <div class="flex items-center justify-between mt-3 pt-2 border-t border-amber-500/10">
              <div class="flex items-center gap-1">
                <div class="flex items-center text-amber-400">
                  ${[1, 2, 3, 4, 5].map(star => `
                    <button 
                      onclick="rateDish('${item.id}', ${star}, event)" 
                      title="Rate ${star} star${star > 1 ? 's' : ''}" 
                      class="star-btn p-0.5"
                    >
                      <i data-lucide="star" class="w-3.5 h-3.5 ${star <= Math.round(item.rating) ? 'fill-amber-400 text-amber-400' : 'text-stone-600'}"></i>
                    </button>
                  `).join('')}
                </div>
                <span class="text-[11px] font-bold text-amber-300 font-mono ml-1">${item.rating.toFixed(1)}</span>
                <span class="text-[10px] text-amber-200/50 font-mono">(${item.ratingCount} reviews)</span>
              </div>
              <div class="text-[10px] text-amber-300/80 font-cinzel">
                ${userRated ? `
                  <span class="text-emerald-400 font-semibold flex items-center gap-1">
                    <i data-lucide="check" class="w-3 h-3"></i> You: ★${userRated}
                  </span>
                ` : `
                  <span class="text-amber-200/50">Tap to rate</span>
                `}
              </div>
            </div>
          </div>

          <!-- Bottom Action Row: Diet Badge and Add to Cart Button -->
          <div class="flex items-center justify-between mt-4 pt-3 border-t border-amber-500/15">
            <span class="text-[10px] font-cinzel uppercase ${item.diet === 'veg' ? 'text-emerald-400' : 'text-rose-400'} flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full ${item.diet === 'veg' ? 'bg-emerald-400' : 'bg-rose-400'}"></span>
              ${item.diet === 'veg' ? 'Pure Veg' : 'Non-Veg'}
            </span>

            <div class="flex items-center gap-2">
              ${!item.inStock ? `
                <button disabled class="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-stone-900/90 text-rose-300/70 border border-rose-500/30 cursor-not-allowed flex items-center gap-1 shadow-inner">
                  <i data-lucide="ban" class="w-3.5 h-3.5 text-rose-400"></i> Sold Out
                </button>
              ` : cart[item.id] ? `
                <button onclick="updateCart('${item.id}', -1)" class="w-6 h-6 flex items-center justify-center rounded-lg bg-stone-800 text-amber-300 font-bold hover:bg-stone-700 transition">-</button>
                <span class="text-xs font-bold text-amber-200 px-1 font-mono">${cart[item.id]}</span>
                <button onclick="updateCart('${item.id}', 1)" class="w-6 h-6 flex items-center justify-center rounded-lg bg-stone-800 text-amber-300 font-bold hover:bg-stone-700 transition">+</button>
              ` : `
                <button onclick="updateCart('${item.id}', 1)" class="px-3 py-1.5 text-xs font-bold rounded-xl royal-btn-gold flex items-center gap-1 shadow-md transition">
                  <i data-lucide="plus" class="w-3.5 h-3.5"></i> Add
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function updateCart(itemId, delta) {
  const item = INDIAN_MENU.find(m => m.id === itemId);
  if (!item || !item.inStock) {
    if (cart[itemId]) delete cart[itemId];
    renderCartUI();
    return;
  }

  cart[itemId] = (cart[itemId] || 0) + delta;
  if (cart[itemId] <= 0) delete cart[itemId];
  renderCartUI();
}

function clearCart() {
  cart = {};
  renderCartUI();
}

function renderCartUI() {
  const totalQty = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = Object.keys(cart).reduce((acc, id) => {
    const item = INDIAN_MENU.find(m => m.id === id);
    return acc + (item ? (item.price * cart[id]) : 0);
  }, 0);

  document.getElementById('cart-pill').textContent = `Cart: ${totalQty} items`;
  document.getElementById('cart-total-price').textContent = `₹${totalPrice}`;
  document.getElementById('btn-place-order').disabled = totalQty === 0;

  renderMenu();
}

function placeNewOrder() {
  const itemKeys = Object.keys(cart);
  if (itemKeys.length === 0) return;

  const orderItems = itemKeys.map(id => {
    const item = INDIAN_MENU.find(m => m.id === id);
    return { id: item.id, name: item.name, price: item.price, qty: cart[id], diet: item.diet };
  });

  const total = orderItems.reduce((acc, i) => acc + (i.price * i.qty), 0);
  const tokenNum = 100 + orders.length + 1;
  const newOrder = {
    id: 'ORD-' + tokenNum,
    token: 'T-' + tokenNum,
    customerName: currentUser.name || 'Aarav Sharma',
    items: orderItems,
    total: total,
    status: ORDER_STATES.PLACED,
    createdAt: Date.now(),
    prepStartedAt: null,
    readyAt: null,
    collectedAt: null
  };

  orders.unshift(newOrder);
  saveOrdersToStorage(true);
  clearCart();
  showToast(`Token ${newOrder.token} placed successfully! Shahi Kitchen is notified.`, 'check');
  renderCustomerTracker();
}

function renderCustomerTracker() {
  const container = document.getElementById('customer-tracker-container');
  if (!container || !currentUser) return;

  const myOrders = orders.filter(o => o.customerName === currentUser.name).slice(0, 3);

  if (myOrders.length === 0) {
    container.innerHTML = `
      <div class="p-4 royal-glass-card rounded-2xl text-xs flex items-center gap-3">
        <i data-lucide="sparkles" class="w-5 h-5 text-amber-400 flex-shrink-0"></i>
        <div>
          <span class="font-cinzel font-bold text-amber-200">No active culinary tokens for ${currentUser.name}.</span>
          <p class="text-amber-200/60 mt-0.5">Select your items above and place an order to see live kitchen preparation.</p>
        </div>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  const userRatings = getUserRatings();

  container.innerHTML = myOrders.map(order => {
    const isPlaced = order.status === ORDER_STATES.PLACED;
    const isPrep = order.status === ORDER_STATES.PREPARING;
    const isReady = order.status === ORDER_STATES.READY;
    const isCompleted = order.status === ORDER_STATES.COLLECTED;

    return `
      <div class="p-5 royal-glass-card rounded-2xl ${isReady ? 'ring-2 ring-emerald-500/50 shadow-emerald-500/10' : isCompleted ? 'border-purple-500/40' : ''} transition-all">
        <div class="flex items-center justify-between pb-3.5 border-b border-amber-500/15">
          <div>
            <span class="text-[10px] font-cinzel uppercase tracking-widest text-amber-300/60">Dawaat Token</span>
            <div class="text-2xl font-black text-amber-300 font-mono">${order.token}</div>
          </div>
          <div class="text-right">
            ${isCompleted ? `
              <span class="px-3.5 py-1 bg-purple-950/80 text-purple-300 border border-purple-500/40 text-xs font-bold rounded-full inline-flex items-center gap-1.5 shadow-sm">
                <i data-lucide="party-popper" class="w-3.5 h-3.5 text-purple-400"></i> Dawat Completed & Received
              </span>
            ` : isReady ? `
              <span class="px-3.5 py-1 bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-xs font-bold rounded-full animate-bounce inline-block shadow-sm">
                Ready at Counter for Pickup!
              </span>
            ` : `
              <span class="px-3 py-1 bg-amber-950/80 text-amber-300 border border-amber-500/40 text-xs font-semibold rounded-full uppercase font-cinzel">
                ${order.status}
              </span>
            `}
            <div class="text-[11px] text-amber-200/60 font-mono mt-1">₹${order.total} • ${order.items.length} delicacy(ies)</div>
          </div>
        </div>

        <div class="mt-4 pt-1">
          <div class="flex items-center justify-between text-[11px] font-cinzel font-bold text-amber-200/80 mb-2">
            <span class="${isPlaced || isPrep || isReady || isCompleted ? 'text-amber-400' : ''}">1. Order Placed</span>
            <span class="${isPrep || isReady || isCompleted ? 'text-blue-400' : ''}">2. Bawarchikhana</span>
            <span class="${isReady || isCompleted ? 'text-emerald-400' : ''}">3. Dish Ready</span>
            <span class="${isCompleted ? 'text-purple-400 font-bold' : ''}">4. Completed</span>
          </div>
          <div class="w-full bg-black/50 rounded-full h-2 flex overflow-hidden border border-amber-500/20">
            <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-500 ${isPlaced || isPrep || isReady || isCompleted ? 'w-1/4' : 'w-0'} transition-all duration-300"></div>
            <div class="h-full bg-blue-500 ${isPrep || isReady || isCompleted ? 'w-1/4' : 'w-0'} transition-all duration-300"></div>
            <div class="h-full bg-emerald-500 ${isReady || isCompleted ? 'w-1/4' : 'w-0'} transition-all duration-300"></div>
            <div class="h-full bg-purple-500 ${isCompleted ? 'w-1/4' : 'w-0'} transition-all duration-300"></div>
          </div>
        </div>

        <!-- Dishes List and Rating Prompts -->
        <div class="mt-3.5 bg-black/40 p-3 rounded-xl border border-amber-500/10 space-y-2">
          <div class="flex flex-wrap items-center justify-between text-xs text-amber-100/80">
            <div><strong class="text-amber-300 font-cinzel">Dishes:</strong> ${order.items.map(i => `${i.name} (x${i.qty})`).join(', ')}</div>
            ${isCompleted ? `
              <div class="text-amber-300 text-[11px] font-cinzel flex items-center gap-1.5 mt-1 sm:mt-0">
                <i data-lucide="crown" class="w-3.5 h-3.5 text-amber-400"></i> Served with Royal Courtesy!
              </div>
            ` : ''}
          </div>

          ${isCompleted ? `
            <div class="pt-2 border-t border-amber-500/10 flex flex-wrap items-center gap-3 text-xs">
              <span class="text-amber-200/70 font-cinzel text-[11px]">Rate your served dishes:</span>
              <div class="flex flex-wrap gap-2">
                ${order.items.map(i => {
                  const dish = INDIAN_MENU.find(m => m.id === i.id);
                  const currentRate = dish ? dish.rating : 4.5;
                  const personal = userRatings[i.id];
                  return `
                    <div class="flex items-center gap-1 bg-black/60 px-2 py-1 rounded-lg border border-amber-500/20">
                      <span class="text-[11px] text-amber-200 font-medium">${i.name}:</span>
                      <div class="flex items-center text-amber-400">
                        ${[1, 2, 3, 4, 5].map(star => `
                          <button onclick="rateDish('${i.id}', ${star}, event)" class="star-btn p-0.5">
                            <i data-lucide="star" class="w-3 h-3 ${star <= (personal || Math.round(currentRate)) ? 'fill-amber-400 text-amber-400' : 'text-stone-600'}"></i>
                          </button>
                        `).join('')}
                      </div>
                      ${personal ? `<span class="text-[9px] text-emerald-400 font-mono">★${personal}</span>` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function renderCustomerView() {
  renderCartUI();
  renderCustomerTracker();
}

// ==========================================
// 7. KITCHEN DISPLAY SYSTEM (KDS) & STOCK
// ==========================================
function transitionOrderStatus(orderId, targetStatus) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  const validNext = ALLOWED_TRANSITIONS[order.status] || [];
  if (!validNext.includes(targetStatus)) {
    alert(`Invalid transition: Cannot advance order from ${order.status} to ${targetStatus}`);
    return;
  }

  const now = Date.now();
  order.status = targetStatus;

  if (targetStatus === ORDER_STATES.PREPARING) {
    order.prepStartedAt = now;
  } else if (targetStatus === ORDER_STATES.READY) {
    order.readyAt = now;
    playChime();
    showToast(`Order ${order.token} marked READY at Counter!`, 'bell');
  } else if (targetStatus === ORDER_STATES.COLLECTED) {
    order.collectedAt = now;
    showToast(`Order ${order.token} delivered to ${order.customerName}.`, 'check');
  }

  saveOrdersToStorage(true);
  refreshCurrentView();
}

function renderStaffStockControls() {
  const container = document.getElementById('staff-stock-toggle-list');
  if (!container) return;

  container.innerHTML = INDIAN_MENU.map(item => `
    <button 
      onclick="toggleItemStock('${item.id}')"
      class="px-2.5 py-1 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition ${item.inStock ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60' : 'bg-rose-950/70 border-rose-500/50 text-rose-300 hover:bg-rose-900/70 shadow-sm'}"
      title="Click to toggle availability"
    >
      <span class="w-2 h-2 rounded-full ${item.inStock ? 'bg-emerald-400' : 'bg-rose-500 animate-pulse'}"></span>
      <span class="font-cinzel">${item.name}</span>
      <span class="font-mono text-[10px] font-bold ${item.inStock ? 'text-emerald-400' : 'text-rose-400'}">
        (${item.inStock ? 'IN STOCK' : 'OUT OF STOCK'})
      </span>
    </button>
  `).join('');
}

function renderKDS() {
  const colPlaced = document.getElementById('col-placed');
  const colPrep = document.getElementById('col-preparing');
  const colReady = document.getElementById('col-ready');
  const colCompleted = document.getElementById('col-completed');
  if (!colPlaced) return;

  renderStaffStockControls();

  const placed = orders.filter(o => o.status === ORDER_STATES.PLACED);
  const prep = orders.filter(o => o.status === ORDER_STATES.PREPARING);
  const ready = orders.filter(o => o.status === ORDER_STATES.READY);
  const completed = orders.filter(o => o.status === ORDER_STATES.COLLECTED);

  document.getElementById('col-count-placed').textContent = placed.length;
  document.getElementById('col-count-preparing').textContent = prep.length;
  document.getElementById('col-count-ready-kds').textContent = ready.length;
  document.getElementById('col-count-completed').textContent = completed.length;

  document.getElementById('kds-count-pending').textContent = placed.length;
  document.getElementById('kds-count-active').textContent = prep.length;
  document.getElementById('kds-count-ready').textContent = ready.length;

  const createCard = (order, actionBtn) => {
    const elapsedMinutes = Math.floor((Date.now() - order.createdAt) / 60000);
    return `
      <div class="ticket-card p-3.5 rounded-xl shadow-lg flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between pb-2 border-b border-amber-500/15">
            <div>
              <span class="font-black text-sm text-amber-300 font-mono">${order.token}</span>
              <span class="text-[11px] text-amber-200/60 block font-cinzel">${order.customerName}</span>
            </div>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded border ${elapsedMinutes > 10 ? 'bg-rose-950/80 text-rose-300 border-rose-500/40' : 'bg-black/40 text-amber-300/80 border-amber-500/20'}">
              ⏱ ${elapsedMinutes}m
            </span>
          </div>
          <div class="py-2.5 space-y-1">
            ${order.items.map(i => `
              <div class="text-xs text-amber-100 flex justify-between font-light items-center">
                <span class="flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full ${i.diet === 'veg' ? 'bg-emerald-400' : 'bg-rose-400'}"></span>
                  ${i.name}
                </span>
                <span class="font-bold text-amber-400 font-mono">x${i.qty}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="pt-2 border-t border-amber-500/15 mt-2">
          ${actionBtn}
        </div>
      </div>
    `;
  };

  colPlaced.innerHTML = placed.length === 0 ? `<div class="text-center text-xs text-amber-200/40 py-8 font-cinzel">No new tickets</div>` :
    placed.map(o => createCard(o, `
      <button onclick="transitionOrderStatus('${o.id}', '${ORDER_STATES.PREPARING}')" class="w-full py-1.5 px-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition flex items-center justify-center gap-1 shadow">
        <span>Start Kitchen Prep</span> &rarr;
      </button>
    `)).join('');

  colPrep.innerHTML = prep.length === 0 ? `<div class="text-center text-xs text-amber-200/40 py-8 font-cinzel">Bawarchikhana Idle</div>` :
    prep.map(o => createCard(o, `
      <button onclick="transitionOrderStatus('${o.id}', '${ORDER_STATES.READY}')" class="w-full py-1.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition flex items-center justify-center gap-1 shadow">
        <span>Mark Dish Ready</span> &check;
      </button>
    `)).join('');

  colReady.innerHTML = ready.length === 0 ? `<div class="text-center text-xs text-amber-200/40 py-8 font-cinzel">No dishes awaiting pickup</div>` :
    ready.map(o => createCard(o, `
      <button onclick="transitionOrderStatus('${o.id}', '${ORDER_STATES.COLLECTED}')" class="w-full py-1.5 px-3 bg-purple-700 hover:bg-purple-600 text-white font-bold text-xs rounded-lg transition flex items-center justify-center gap-1.5 shadow">
        <span>Hand Over to Patron</span> &check;&check;
      </button>
    `)).join('');

  colCompleted.innerHTML = completed.length === 0 ? `<div class="text-center text-xs text-amber-200/40 py-8 font-cinzel">No completed orders</div>` :
    completed.slice(0, 10).map(o => `
      <div class="bg-black/40 border border-purple-500/20 rounded-xl p-2.5 text-xs">
        <div class="flex justify-between font-bold text-amber-200">
          <span>${o.token} • ${o.customerName}</span>
          <span class="text-amber-400 font-mono">₹${o.total}</span>
        </div>
        <div class="text-[10px] text-purple-300/70 mt-1 font-cinzel">Delivered & Closed</div>
      </div>
    `).join('');

  lucide.createIcons();
}

// ==========================================
// 8. PRECISE MANAGER DASHBOARD & ANALYTICS
// ==========================================
function renderManagerDashboard() {
  const totalSales = orders.reduce((acc, o) => acc + o.total, 0);
  const collectedSales = orders.filter(o => o.status === ORDER_STATES.COLLECTED).reduce((acc, o) => acc + o.total, 0);
  const pendingSales = totalSales - collectedSales;
  const totalOrdersCount = orders.length;

  document.getElementById('mgr-total-sales').textContent = `₹${totalSales}`;
  document.getElementById('mgr-collected-sales').textContent = `₹${collectedSales}`;
  document.getElementById('mgr-pending-sales').textContent = `₹${pendingSales}`;
  document.getElementById('mgr-total-orders').textContent = totalOrdersCount;

  // Completion Rate
  const completedOrders = orders.filter(o => o.status === ORDER_STATES.COLLECTED);
  const compRate = totalOrdersCount > 0 ? Math.round((completedOrders.length / totalOrdersCount) * 100) : 100;
  document.getElementById('mgr-completion-rate').textContent = `${compRate}%`;

  // In prep count
  const inPrepCount = orders.filter(o => o.status === ORDER_STATES.PREPARING).length;
  document.getElementById('mgr-in-prep-count').textContent = inPrepCount;

  // Prep turnaround speed
  const ordersWithPrep = orders.filter(o => o.prepStartedAt && o.readyAt);
  if (ordersWithPrep.length > 0) {
    const totalMinutes = ordersWithPrep.reduce((acc, o) => acc + ((o.readyAt - o.prepStartedAt) / 60000), 0);
    const avgMinutes = Math.round(totalMinutes / ordersWithPrep.length);
    document.getElementById('mgr-avg-preptime').textContent = `${avgMinutes}m`;
  } else {
    document.getElementById('mgr-avg-preptime').textContent = 'N/A';
  }

  // Overdue count (> 10 mins)
  const overdueCount = orders.filter(o => {
    const isPending = o.status === ORDER_STATES.PLACED || o.status === ORDER_STATES.PREPARING;
    const mins = (Date.now() - o.createdAt) / 60000;
    return isPending && mins > 10;
  }).length;
  document.getElementById('mgr-overdue-count').textContent = overdueCount;

  // Dietary Split (Veg vs Non-Veg Items ordered)
  let vegItemsCount = 0;
  let nonvegItemsCount = 0;
  const itemCounts = {};

  orders.forEach(o => {
    o.items.forEach(i => {
      const itemDiet = i.diet || 'veg';
      if (itemDiet === 'veg') vegItemsCount += i.qty;
      else nonvegItemsCount += i.qty;

      itemCounts[i.name] = (itemCounts[i.name] || 0) + i.qty;
    });
  });

  const totalDietItems = vegItemsCount + nonvegItemsCount;
  const vegPct = totalDietItems > 0 ? Math.round((vegItemsCount / totalDietItems) * 100) : 0;
  const nonvegPct = totalDietItems > 0 ? Math.round((nonvegItemsCount / totalDietItems) * 100) : 0;
  document.getElementById('mgr-veg-percent').textContent = `${vegPct}%`;
  document.getElementById('mgr-nonveg-percent').textContent = `${nonvegPct}%`;

  // Top dish
  let topItemName = 'None';
  let maxCount = 0;
  for (const [name, count] of Object.entries(itemCounts)) {
    if (count > maxCount) {
      maxCount = count;
      topItemName = `${name} (${count})`;
    }
  }
  document.getElementById('mgr-top-item').textContent = topItemName;

  renderManagerUserBreakdown();
  renderDishMatrix();
  renderManagerPrepLogs();
}

function renderManagerUserBreakdown() {
  const tableBody = document.getElementById('mgr-customer-table');
  const search = (document.getElementById('mgr-user-search')?.value || '').toLowerCase();
  if (!tableBody) return;

  const userMap = {};
  orders.forEach(o => {
    const name = o.customerName || 'Guest Patron';
    if (!userMap[name]) {
      userMap[name] = {
        name: name,
        orderCount: 0,
        totalSpent: 0,
        itemsMap: {},
        lastOrder: o.createdAt
      };
    }
    userMap[name].orderCount += 1;
    userMap[name].totalSpent += o.total;
    if (o.createdAt > userMap[name].lastOrder) userMap[name].lastOrder = o.createdAt;

    o.items.forEach(i => {
      userMap[name].itemsMap[i.name] = (userMap[name].itemsMap[i.name] || 0) + i.qty;
    });
  });

  const userList = Object.values(userMap).filter(u => u.name.toLowerCase().includes(search));

  tableBody.innerHTML = userList.length === 0 ? `<tr><td colspan="6" class="p-4 text-center text-amber-200/40 font-cinzel">No patron logs match criteria.</td></tr>` :
    userList.map(u => {
      const avgValue = Math.round(u.totalSpent / u.orderCount);
      const itemsPurchasedList = Object.entries(u.itemsMap).map(([name, qty]) => `${name} (${qty})`).join(', ');
      const dateStr = new Date(u.lastOrder).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      return `
        <tr class="hover:bg-amber-500/5 transition">
          <td class="p-3.5 font-bold text-amber-200 font-cinzel">${u.name}</td>
          <td class="p-3.5 text-amber-100">${u.orderCount} token(s)</td>
          <td class="p-3.5 font-extrabold text-amber-400">₹${u.totalSpent}</td>
          <td class="p-3.5 text-amber-200/70">₹${avgValue}</td>
          <td class="p-3.5 text-amber-100/70 max-w-xs truncate" title="${itemsPurchasedList}">${itemsPurchasedList}</td>
          <td class="p-3.5 text-amber-300/50">${dateStr}</td>
        </tr>
      `;
    }).join('');
}

function renderDishMatrix() {
  const table = document.getElementById('mgr-dish-matrix-table');
  if (!table) return;

  // Render all dishes with their sales, rating, and stock toggle
  const dishSales = {};
  INDIAN_MENU.forEach(item => {
    dishSales[item.id] = {
      id: item.id,
      name: item.name,
      diet: item.diet,
      price: item.price,
      rating: item.rating,
      ratingCount: item.ratingCount,
      inStock: item.inStock,
      qtySold: 0,
      revenue: 0
    };
  });

  orders.forEach(o => {
    o.items.forEach(i => {
      if (dishSales[i.id]) {
        dishSales[i.id].qtySold += i.qty;
        dishSales[i.id].revenue += (i.price * i.qty);
      }
    });
  });

  const sortedDishes = Object.values(dishSales).sort((a, b) => b.qtySold - a.qtySold);

  table.innerHTML = sortedDishes.map(d => `
    <tr class="hover:bg-amber-500/5 transition">
      <td class="p-3 font-semibold text-amber-100 truncate max-w-[150px]" title="${d.name}">${d.name}</td>
      <td class="p-3">
        <span class="inline-flex items-center gap-1 text-[10px] font-bold ${d.diet === 'veg' ? 'text-emerald-400' : 'text-rose-400'}">
          <span class="w-1.5 h-1.5 rounded-full ${d.diet === 'veg' ? 'bg-emerald-400' : 'bg-rose-400'}"></span>
          ${d.diet === 'veg' ? 'Veg' : 'Non-Veg'}
        </span>
      </td>
      <td class="p-3 text-amber-200/70">₹${d.price}</td>
      <td class="p-3 text-amber-300 font-mono">
        <span class="inline-flex items-center gap-1">
          <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
          <span>${d.rating.toFixed(1)}</span>
          <span class="text-[10px] text-amber-200/50">(${d.ratingCount})</span>
        </span>
      </td>
      <td class="p-3 font-bold text-amber-300">${d.qtySold}</td>
      <td class="p-3 font-extrabold text-amber-400">₹${d.revenue}</td>
      <td class="p-3 text-center">
        <button 
          onclick="toggleItemStock('${d.id}')" 
          class="px-2.5 py-1 text-[10px] font-bold rounded-lg border transition ${d.inStock ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300 hover:bg-emerald-900' : 'bg-rose-950/80 border-rose-500/40 text-rose-300 hover:bg-rose-900'}"
        >
          ${d.inStock ? '✓ In Stock' : '✕ Out of Stock'}
        </button>
      </td>
    </tr>
  `).join('');

  lucide.createIcons();
}

function renderManagerPrepLogs() {
  const logTable = document.getElementById('mgr-log-table');
  if (!logTable) return;

  logTable.innerHTML = orders.map(o => {
    const prepTime = (o.prepStartedAt && o.readyAt)
      ? `${Math.round((o.readyAt - o.prepStartedAt) / 60000)} mins`
      : o.prepStartedAt ? 'In Kitchen...' : 'Queued';

    const handoverTime = (o.createdAt && o.collectedAt)
      ? `${Math.round((o.collectedAt - o.createdAt) / 60000)} mins`
      : o.status === ORDER_STATES.READY ? 'Awaiting pickup' : 'Pending';

    return `
      <tr class="hover:bg-amber-500/5 transition">
        <td class="p-3 font-bold text-amber-400">${o.token}</td>
        <td class="p-3 text-amber-100 font-cinzel">${o.customerName}</td>
        <td class="p-3 text-blue-400 font-medium">${prepTime}</td>
        <td class="p-3 text-purple-400 font-medium">${handoverTime}</td>
        <td class="p-3 uppercase font-bold text-[10px] text-amber-400 font-cinzel">${o.status}</td>
      </tr>
    `;
  }).join('');
}

// ==========================================
// 9. VIEW CONTROLLER & AUTO-REFRESH
// ==========================================
function refreshCurrentView() {
  if (!currentUser) return;
  if (currentUser.role === 'customer') {
    renderCustomerView();
  } else if (currentUser.role === 'staff') {
    renderKDS();
  } else if (currentUser.role === 'manager') {
    renderManagerDashboard();
  }
}

document.getElementById('meal-time-selector')?.addEventListener('change', () => {
  if (currentUser && currentUser.role === 'customer') {
    renderMenu();
  }
});

setInterval(() => {
  if (currentUser?.role === 'staff') renderKDS();
}, 20000);

document.addEventListener('DOMContentLoaded', () => {
  loadOrdersFromStorage();
  loadMenuData();
  lucide.createIcons();
});
