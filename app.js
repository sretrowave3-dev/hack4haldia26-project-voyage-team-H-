/**
 * CanteenPulse • Shahi Dhaba & Royal KDS
 * Accurate food item mapping & high-definition photography
 */

const INDIAN_MENU = [
  // --- 24/7 All-Day Beverages ---
  {
    id: 'b1',
    name: 'Kadak Masala Chai',
    price: 25,
    shift: 'all_day',
    type: 'beverage',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
    desc: 'Simmered in brass handi with crushed fresh ginger, green cardamom and rich buffalo milk.'
  },
  {
    id: 'b2',
    name: 'South Indian Filter Coffee',
    price: 35,
    shift: 'all_day',
    type: 'beverage',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
    desc: 'Traditional slow-dripped chicory brew frothed in a brass davarah and tumbler.'
  },
  {
    id: 'b3',
    name: 'Kesar Pista Mango Lassi',
    price: 60,
    shift: 'all_day',
    type: 'beverage',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600&auto=format&fit=crop&q=80',
    desc: 'Velvety chilled yogurt churned with pure Alphonso pulp, Kashmiri saffron and pistachios.'
  },
  {
    id: 'b4',
    name: 'Shahi Shikanji Soda',
    price: 40,
    shift: 'all_day',
    type: 'beverage',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80',
    desc: 'Chilled effervescent soda muddled with freshly pressed nimbu, rock salt and fresh mint.'
  },
  {
    id: 'b5',
    name: 'Thums Up / Coca-Cola Bottle',
    price: 40,
    shift: 'all_day',
    type: 'beverage',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=80',
    desc: 'Chilled glass bottle soft drink served icy cold.'
  },

  // --- Subah Nashta (Breakfast 7:00 AM - 11:30 AM) ---
  {
    id: 'bf1',
    name: 'Crispy Butter Masala Dosa',
    price: 95,
    shift: 'breakfast',
    type: 'meal',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=80',
    desc: 'Golden roasted crepe stuffed with spiced potato mash, served with coconut dip and sambar.'
  },
  {
    id: 'bf2',
    name: 'Indori Shahi Poha & Sev',
    price: 45,
    shift: 'breakfast',
    type: 'meal',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80',
    desc: 'Steamed flattened rice tempered with mustard, roasted peanuts, pomegranate and spicy ratlami sev.'
  },
  {
    id: 'bf3',
    name: 'Amritsari Chole Bhature',
    price: 120,
    shift: 'breakfast',
    type: 'meal',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=80',
    desc: 'Two fluffy golden bhaturas paired with dark spiced chickpeas, pickled green chilies and onions.'
  },
  {
    id: 'bf4',
    name: 'Steamed Idli & Medu Vada Combo',
    price: 75,
    shift: 'breakfast',
    type: 'meal',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
    desc: 'Two pillow-soft steamed idlis and one crunchy medu vada with hot lentil vegetable stew.'
  },
  {
    id: 'bf5',
    name: 'Dilli Wali Samosa Chaat',
    price: 55,
    shift: 'breakfast',
    type: 'meal',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80',
    desc: 'Crushed flaky potato samosas layered with spiced chole, sweet tamarind chutney, whipped curd and sev.'
  },

  // --- Dopahar Dawat (Lunch 11:30 AM - 4:00 PM) ---
  {
    id: 'ln1',
    name: 'Shahi Dal Makhani Thali',
    price: 180,
    shift: 'lunch',
    type: 'meal',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80',
    desc: 'Slow-simmered black urad dal with white makhan, jeera rice, 2 tandoori rotis, salad and papad.'
  },
  {
    id: 'ln2',
    name: 'Paneer Butter Masala + Naan',
    price: 190,
    shift: 'lunch',
    type: 'meal',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80',
    desc: 'Tender cottage cheese cubes submerged in silky tomato cashew gravy, served with 2 glazed butter naans.'
  },
  {
    id: 'ln3',
    name: 'Hyderabadi Veg Dum Biryani',
    price: 155,
    shift: 'lunch',
    type: 'meal',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
    desc: 'Long grain basmati sealed in earthen pot with spiced garden vegetables, mint, salan and creamy raita.'
  },
  {
    id: 'ln4',
    name: 'Mumbai Special Pav Bhaji',
    price: 105,
    shift: 'lunch',
    type: 'meal',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop&q=80',
    desc: 'Spiced tomato-vegetable mash topped with melting Amul butter slab, served with 2 toasted butter pavs.'
  },
  {
    id: 'ln5',
    name: 'Dhaba Rajma Chawal Bowl',
    price: 110,
    shift: 'lunch',
    type: 'meal',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
    desc: 'Slow-cooked Punjabi red kidney beans in thick spiced gravy, served over steaming basmati rice.'
  },

  // --- Shahi Dawat (Dinner 7:00 PM - 11:00 PM) ---
  {
    id: 'dn1',
    name: 'Amritsari Paneer Bhurji & Paratha',
    price: 165,
    shift: 'dinner',
    type: 'meal',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80',
    desc: 'Scrambled paneer wok-tossed with ginger, onions, tomatoes and kasuri methi, paired with 2 parathas.'
  },
  {
    id: 'dn2',
    name: 'Dhaba Egg Curry with Jeera Rice',
    price: 145,
    shift: 'dinner',
    type: 'meal',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop&q=80',
    desc: 'Two pan-seared boiled eggs in spiced rustic onion-tomato gravy, served over hot cumin basmati.'
  },
  {
    id: 'dn3',
    name: 'Yellow Dal Tadka & Jeera Rice',
    price: 120,
    shift: 'dinner',
    type: 'meal',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80',
    desc: 'Yellow lentils tempered with fried garlic, hing, cumin and whole red chillies, with cumin rice.'
  },
  {
    id: 'dn4',
    name: 'Tandoori Aloo Paratha Thali',
    price: 90,
    shift: 'dinner',
    type: 'meal',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=80',
    desc: 'Two charred clay-oven potato stuffed parathas served with white churned butter and sweet mango pickle.'
  }
];

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

const STORAGE_KEY = 'canteen_shahi_verified_v4';
const CHANNEL_NAME = 'canteen_shahi_bus_v4';

let currentUser = null;
let activeFilter = 'all';
let cart = {};
let orders = [];

let broadcastChannel = null;
try {
  broadcastChannel = new BroadcastChannel(CHANNEL_NAME);
  broadcastChannel.onmessage = (event) => {
    if (event.data && event.data.type === 'SYNC_ORDERS') {
      orders = event.data.payload;
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
  }
});

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
        { id: 'bf1', name: 'Crispy Butter Masala Dosa', price: 95, qty: 1 },
        { id: 'b1', name: 'Kadak Masala Chai', price: 25, qty: 2 }
      ],
      total: 145,
      status: ORDER_STATES.PREPARING,
      createdAt: now - 9 * 60 * 1000,
      prepStartedAt: now - 6 * 60 * 1000,
      readyAt: null,
      collectedAt: null
    },
    {
      id: 'ORD-102',
      token: 'T-102',
      customerName: 'Meera Rajput',
      items: [
        { id: 'bf3', name: 'Amritsari Chole Bhature', price: 120, qty: 1 },
        { id: 'b3', name: 'Kesar Pista Mango Lassi', price: 60, qty: 1 }
      ],
      total: 180,
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
        { id: 'ln2', name: 'Paneer Butter Masala + Naan', price: 190, qty: 1 }
      ],
      total: 190,
      status: ORDER_STATES.COLLECTED,
      createdAt: now - 50 * 60 * 1000,
      prepStartedAt: now - 44 * 60 * 1000,
      readyAt: now - 30 * 60 * 1000,
      collectedAt: now - 28 * 60 * 1000
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
    console.log('Audio chime waiting for user interaction.');
  }
}

function getActiveMealShift() {
  const selector = document.getElementById('meal-time-selector');
  const override = selector ? selector.value : 'auto';

  if (override !== 'auto') return override;

  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const timeDecimal = hour + minute / 60;

  if (timeDecimal >= 7 && timeDecimal < 11.5) return 'breakfast';
  if (timeDecimal >= 11.5 && timeDecimal < 16) return 'lunch';
  if (timeDecimal >= 19 && timeDecimal <= 23) return 'dinner';
  return 'lunch';
}

function filterMenu(type) {
  activeFilter = type;
  document.querySelectorAll('.cat-pill').forEach(pill => pill.classList.remove('active'));
  event.target.classList.add('active');
  renderMenu();
}

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

function renderMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  const currentShift = getActiveMealShift();
  document.getElementById('active-shift-badge').textContent = currentShift;
  document.getElementById('menu-shift-subtext').textContent = `Royal ${currentShift.toUpperCase()} Service • Authentic Canteen Flavors`;

  const availableItems = INDIAN_MENU.filter(item => {
    const isBeverage = item.type === 'beverage';
    const matchesShift = item.shift === currentShift || item.shift === 'all_day';
    if (!matchesShift && !isBeverage) return false;
    if (activeFilter === 'beverages') return isBeverage;
    if (activeFilter === 'meal') return !isBeverage;
    return true;
  });

  grid.innerHTML = availableItems.map(item => `
    <div class="menu-card rounded-2xl overflow-hidden flex flex-col justify-between">
      <div class="relative w-full h-44 bg-stone-900 overflow-hidden">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80';"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <span class="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md text-amber-300 text-[10px] uppercase font-cinzel font-bold tracking-widest px-2.5 py-1 rounded-md border border-amber-500/30">
          ${item.type === 'beverage' ? '24/7 Chai' : item.shift}
        </span>
        <span class="absolute bottom-2.5 right-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-950 font-black text-sm px-3 py-0.5 rounded-lg shadow-lg font-mono">
          ₹${item.price}
        </span>
      </div>

      <div class="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h4 class="font-cinzel font-bold text-sm text-amber-100 tracking-wide line-clamp-1">${item.name}</h4>
          <p class="text-xs text-amber-200/60 mt-1.5 line-clamp-2 font-light leading-relaxed">${item.desc}</p>
        </div>

        <div class="flex items-center justify-between mt-4 pt-3 border-t border-amber-500/15">
          <span class="text-[10px] font-cinzel uppercase text-amber-300/50">${item.type}</span>
          <div class="flex items-center gap-2">
            ${cart[item.id] ? `
              <button onclick="updateCart('${item.id}', -1)" class="w-6 h-6 flex items-center justify-center rounded-lg bg-stone-800 text-amber-300 font-bold hover:bg-stone-700 transition">-</button>
              <span class="text-xs font-bold text-amber-200 px-1 font-mono">${cart[item.id]}</span>
            ` : ''}
            <button onclick="updateCart('${item.id}', 1)" class="px-3 py-1.5 text-xs font-bold rounded-xl royal-btn-gold flex items-center gap-1 shadow-md transition">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function updateCart(itemId, delta) {
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
    return acc + (item.price * cart[id]);
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
    return { id: item.id, name: item.name, price: item.price, qty: cart[id] };
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
          <span class="font-cinzel font-bold text-amber-200">No active tokens for ${currentUser.name}.</span>
          <p class="text-amber-200/60 mt-0.5">Select your items from the active meal shift below and place an order.</p>
        </div>
      </div>
    `;
    lucide.createIcons();
    return;
  }

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

        <div class="mt-3.5 flex flex-wrap items-center justify-between text-xs text-amber-100/80 bg-black/40 p-3 rounded-xl border border-amber-500/10">
          <div><strong class="text-amber-300 font-cinzel">Dishes:</strong> ${order.items.map(i => `${i.name} (x${i.qty})`).join(', ')}</div>
          ${isCompleted ? `
            <div class="text-amber-300 text-[11px] font-cinzel flex items-center gap-1.5 mt-1 sm:mt-0">
              <i data-lucide="crown" class="w-3.5 h-3.5 text-amber-400"></i> Served with Royal Courtesy!
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
  } else if (targetStatus === ORDER_STATES.COLLECTED) {
    order.collectedAt = now;
  }

  saveOrdersToStorage(true);
  refreshCurrentView();
}

function renderKDS() {
  const colPlaced = document.getElementById('col-placed');
  const colPrep = document.getElementById('col-preparing');
  const colReady = document.getElementById('col-ready');
  const colCompleted = document.getElementById('col-completed');
  if (!colPlaced) return;

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
              <div class="text-xs text-amber-100 flex justify-between font-light">
                <span>${i.name}</span>
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
        <span>Start Tandoor Prep</span> &rarr;
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

function renderManagerDashboard() {
  const totalSales = orders.reduce((acc, o) => acc + o.total, 0);
  const totalOrdersCount = orders.length;

  document.getElementById('mgr-total-sales').textContent = `₹${totalSales}`;
  document.getElementById('mgr-total-orders').textContent = totalOrdersCount;

  const ordersWithPrep = orders.filter(o => o.prepStartedAt && o.readyAt);
  if (ordersWithPrep.length > 0) {
    const totalMinutes = ordersWithPrep.reduce((acc, o) => acc + ((o.readyAt - o.prepStartedAt) / 60000), 0);
    const avgMinutes = Math.round(totalMinutes / ordersWithPrep.length);
    document.getElementById('mgr-avg-preptime').textContent = `${avgMinutes} mins`;
  } else {
    document.getElementById('mgr-avg-preptime').textContent = 'N/A';
  }

  const itemCounts = {};
  orders.forEach(o => {
    o.items.forEach(i => {
      itemCounts[i.name] = (itemCounts[i.name] || 0) + i.qty;
    });
  });

  let topItemName = 'None';
  let maxCount = 0;
  for (const [name, count] of Object.entries(itemCounts)) {
    if (count > maxCount) {
      maxCount = count;
      topItemName = `${name} (${count} portions)`;
    }
  }
  document.getElementById('mgr-top-item').textContent = topItemName;

  renderManagerUserBreakdown();
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
          <td class="p-3.5 text-amber-100 font-mono">${u.orderCount} order(s)</td>
          <td class="p-3.5 font-extrabold text-amber-400 font-mono">₹${u.totalSpent}</td>
          <td class="p-3.5 text-amber-200/70 font-mono">₹${avgValue}</td>
          <td class="p-3.5 text-amber-100/70 max-w-xs truncate" title="${itemsPurchasedList}">${itemsPurchasedList}</td>
          <td class="p-3.5 text-amber-300/50 font-mono">${dateStr}</td>
        </tr>
      `;
    }).join('');
}

function renderManagerPrepLogs() {
  const logTable = document.getElementById('mgr-log-table');
  if (!logTable) return;

  logTable.innerHTML = orders.map(o => {
    const prepTime = (o.prepStartedAt && o.readyAt)
      ? `${Math.round((o.readyAt - o.prepStartedAt) / 60000)} mins`
      : o.prepStartedAt ? 'In Tandoor...' : 'Queued';

    const handoverTime = (o.createdAt && o.collectedAt)
      ? `${Math.round((o.collectedAt - o.createdAt) / 60000)} mins`
      : o.status === ORDER_STATES.READY ? 'Awaiting pickup' : 'Pending';

    return `
      <tr class="hover:bg-amber-500/5 transition">
        <td class="p-3.5 font-bold text-amber-400">${o.token}</td>
        <td class="p-3.5 text-amber-100 font-cinzel">${o.customerName}</td>
        <td class="p-3.5 text-amber-200/70 truncate max-w-xs">${o.items.map(i => `${i.name} (${i.qty})`).join(', ')}</td>
        <td class="p-3.5 font-bold text-amber-300 font-mono">₹${o.total}</td>
        <td class="p-3.5 text-blue-400 font-mono font-medium">${prepTime}</td>
        <td class="p-3.5 text-purple-400 font-mono font-medium">${handoverTime}</td>
        <td class="p-3.5 uppercase font-bold text-[10px] text-amber-400 font-cinzel">${o.status}</td>
      </tr>
    `;
  }).join('');
}

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
  lucide.createIcons();
});