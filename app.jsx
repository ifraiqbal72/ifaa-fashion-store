// IFAA Fashion House - Core React Application
const { useState, useEffect, useMemo, useRef } = React;

// --- LUXURY ICONS (SVG) ---
const BagIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const HeartIcon = ({ className = "w-5 h-5", filled = false }) => (
  <svg className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CloseIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MenuIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const SlidersIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);

const StarIcon = ({ className = "w-4 h-4", filled = true }) => (
  <svg className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const PlusIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
  </svg>
);

const MinusIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4" />
  </svg>
);

const TrashIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const EyeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const TruckIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h10zm0 0h4m0 0a2 2 0 012 2v-4a2 2 0 00-2-2h-4v4z" />
  </svg>
);

const ShieldIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const RefreshIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const SparklesIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" />
  </svg>
);

// --- MAIN APPLICATION COMPONENT ---
function App() {
  const products = window.IFAA_PRODUCTS || [];
  const categories = window.IFAA_CATEGORIES || [];
  const discountCodes = window.IFAA_DISCOUNT_CODES || {};

  // --- STATE WITH LOCAL STORAGE ---
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("ifaa_cart");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("ifaa_wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [promoCode, setPromoCode] = useState(() => {
    try {
      const saved = localStorage.getItem("ifaa_promo");
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  // UI States
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [priceFilter, setPriceFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [orderComplete, setOrderComplete] = useState(null);
  const [toasts, setToasts] = useState([]);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem("ifaa_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("ifaa_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (promoCode) {
      localStorage.setItem("ifaa_promo", JSON.stringify(promoCode));
    } else {
      localStorage.removeItem("ifaa_promo");
    }
  }, [promoCode]);

  // Toast Helper
  const showToast = (title, message = "", type = "success") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  // --- CART OPERATIONS ---
  const addToCart = (product, size = null, color = null, quantity = 1) => {
    const chosenSize = size || product.sizes[0];
    const chosenColor = color || product.colors[0];
    const itemKey = `${product.id}-${chosenSize}-${chosenColor.name}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.itemKey === itemKey);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            itemKey,
            productId: product.id,
            product,
            size: chosenSize,
            color: chosenColor,
            quantity
          }
        ];
      }
    });

    showToast(
      "Added to Shopping Bag",
      `${product.name} (${chosenSize}, ${chosenColor.name})`,
      "bag"
    );
  };

  const removeFromCart = (itemKey) => {
    const item = cart.find((i) => i.itemKey === itemKey);
    setCart((prev) => prev.filter((i) => i.itemKey !== itemKey));
    if (item) {
      showToast("Removed from Bag", item.product.name, "info");
    }
  };

  const updateQuantity = (itemKey, delta) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.itemKey === itemKey) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const applyPromo = (code) => {
    const clean = code.trim().toUpperCase();
    if (discountCodes[clean]) {
      setPromoCode({ code: clean, ...discountCodes[clean] });
      showToast("Promo Code Applied!", discountCodes[clean].label, "success");
      return true;
    } else {
      showToast("Invalid Code", "Please try IFAA10 or FIRST20", "error");
      return false;
    }
  };

  const removePromo = () => {
    setPromoCode(null);
    showToast("Promo Code Removed", "", "info");
  };

  // --- WISHLIST OPERATIONS ---
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast("Removed from Wishlist", product.name, "info");
        return prev.filter((id) => id !== product.id);
      } else {
        showToast("Saved to Wishlist", product.name, "heart");
        return [...prev, product.id];
      }
    });
  };

  // Move from wishlist to cart
  const moveWishlistToCart = (product) => {
    addToCart(product);
    setWishlist((prev) => prev.filter((id) => id !== product.id));
    showToast("Moved to Bag", product.name, "bag");
  };

  // --- CALCULATIONS ---
  const cartItemCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const subtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cart]);

  const discountAmount = useMemo(() => {
    if (!promoCode) return 0;
    if (promoCode.discountPercent) {
      return Math.round((subtotal * promoCode.discountPercent) / 100);
    }
    if (promoCode.discountAmount) {
      return Math.min(subtotal, promoCode.discountAmount);
    }
    return 0;
  }, [subtotal, promoCode]);

  const freeShippingThreshold = 150;
  const shippingCost = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 25;
  const estimatedTax = Math.round((subtotal - discountAmount) * 0.08);
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost + (subtotal > 0 ? estimatedTax : 0));

  // --- FILTER & SORT PRODUCTS ---
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category
        if (activeCategory !== "all" && p.category !== activeCategory) {
          return false;
        }
        // Search
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchSub = p.subtitle.toLowerCase().includes(q);
          const matchCat = p.category.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          if (!matchName && !matchSub && !matchCat && !matchDesc) return false;
        }
        // Price Filter
        if (priceFilter === "under250" && p.price >= 250) return false;
        if (priceFilter === "250to500" && (p.price < 250 || p.price > 500)) return false;
        if (priceFilter === "over500" && p.price <= 500) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "newest") return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, activeCategory, searchQuery, priceFilter, sortBy]);

  // Scroll to section helper
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141414] font-sans antialiased selection:bg-[#EBE3D5] selection:text-black">
      {/* 1. ANNOUNCEMENT BAR */}
      <div className="bg-[#121212] text-[#E8E4DC] text-xs py-2 px-4 text-center tracking-widest uppercase font-medium flex items-center justify-center gap-2 border-b border-[#2A2A2A]">
        <SparklesIcon className="w-3.5 h-3.5 text-[#C29F62]" />
        <span>Complimentary Express Shipping on Orders Over $150 · Use Code <strong className="text-[#E7C88E] underline underline-offset-2">IFAA10</strong> for 10% Off</span>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE5DC] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Mobile menu trigger */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-stone-800 hover:text-black transition"
              aria-label="Open Navigation Menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              className="p-2 text-stone-800 hover:text-black transition"
              aria-label="Search"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-stone-700">
            <button onClick={() => scrollTo("hero")} className="hover:text-black transition py-1 border-b border-transparent hover:border-black">
              Home
            </button>
            <button onClick={() => { setActiveCategory("all"); scrollTo("shop"); }} className="hover:text-black transition py-1 border-b border-transparent hover:border-black">
              Shop Collection
            </button>
            <button onClick={() => scrollTo("categories")} className="hover:text-black transition py-1 border-b border-transparent hover:border-black">
              Categories
            </button>
            <button onClick={() => scrollTo("editorial")} className="hover:text-black transition py-1 border-b border-transparent hover:border-black">
              Editorial
            </button>
            <button onClick={() => scrollTo("craft")} className="hover:text-black transition py-1 border-b border-transparent hover:border-black">
              Atelier
            </button>
          </nav>

          {/* Luxury Brand Logo */}
          <div className="text-center cursor-pointer" onClick={() => scrollTo("hero")}>
            <h1 className="font-serif text-3xl sm:text-4xl tracking-[0.25em] font-normal uppercase text-[#111111]">
              ifaa
            </h1>
            <p className="text-[9px] uppercase tracking-[0.4em] text-stone-500 font-sans -mt-0.5">
              Paris · Milan
            </p>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Desktop Search Toggle */}
            <div className="relative hidden lg:block">
              <div className="flex items-center border border-[#DFD9CD] rounded-full px-3 py-1.5 bg-[#F5F1E8]/70 focus-within:bg-white focus-within:border-black transition">
                <SearchIcon className="w-4 h-4 text-stone-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search pieces..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (e.target.value) scrollTo("shop");
                  }}
                  className="bg-transparent text-xs tracking-wider outline-none w-36 focus:w-52 transition-all placeholder:text-stone-400"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="text-stone-400 hover:text-black ml-1">
                    <CloseIcon className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 text-stone-800 hover:text-black transition"
              aria-label="Wishlist"
            >
              <HeartIcon className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-[#121212] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-stone-800 hover:text-black flex items-center gap-2 group transition"
              aria-label="Shopping Bag"
            >
              <BagIcon className="w-5 h-5 group-hover:scale-105 transition" />
              <span className="hidden sm:inline text-xs uppercase tracking-widest font-semibold">
                Bag
              </span>
              {cartItemCount > 0 && (
                <span className="bg-[#121212] text-[#FAF8F5] text-[10px] min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center font-semibold">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Expansion */}
        {isSearchExpanded && (
          <div className="lg:hidden px-4 pb-3 border-t border-[#EAE5DC] pt-3 bg-[#FAF8F5]">
            <div className="flex items-center border border-[#DFD9CD] rounded-full px-4 py-2 bg-white">
              <SearchIcon className="w-4 h-4 text-stone-500 mr-2" />
              <input
                type="text"
                placeholder="Search coats, cashmere, silk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-xs outline-none w-full"
                autoFocus
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-stone-400">
                  <CloseIcon className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO EDITORIAL SECTION */}
      <section id="hero" className="relative bg-[#F4EFE6] overflow-hidden border-b border-[#E6E0D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 lg:pr-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D2] border border-[#DDD3BF] text-[11px] uppercase tracking-[0.2em] font-medium text-stone-800">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A88147]"></span>
                Autumn / Winter 2026 Collection
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#121212] leading-[1.12] tracking-tight font-light">
                The Art of <span className="italic font-normal">Subtle</span> Luxury.
              </h2>

              <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Timeless wardrobe architecture cut from double-faced Mongolian cashmere,
                pure Mulberry silk, and Italian wool. Created for those who value quiet distinction over loud trends.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => scrollTo("shop")}
                  className="w-full sm:w-auto px-8 py-4 bg-[#121212] text-white hover:bg-black text-xs uppercase tracking-[0.25em] font-medium transition shadow-md hover:shadow-lg flex items-center justify-center gap-3 group"
                >
                  <span>Explore Catalog</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>

                <button
                  onClick={() => scrollTo("editorial")}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#121212] text-[#121212] hover:bg-black hover:text-white text-xs uppercase tracking-[0.25em] font-medium transition"
                >
                  View Lookbook
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-[#E5DDD0] grid grid-cols-3 gap-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
                <div>
                  <p className="font-serif text-lg font-medium text-[#111111]">100%</p>
                  <p className="text-[10px] uppercase tracking-wider text-stone-500">Ethical Fibers</p>
                </div>
                <div>
                  <p className="font-serif text-lg font-medium text-[#111111]">Atelier</p>
                  <p className="text-[10px] uppercase tracking-wider text-stone-500">Italian Craft</p>
                </div>
                <div>
                  <p className="font-serif text-lg font-medium text-[#111111]">Free</p>
                  <p className="text-[10px] uppercase tracking-wider text-stone-500">Shipping over $150</p>
                </div>
              </div>
            </div>

            {/* Right Editorial Hero Image Grid */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Photo */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl bg-stone-200 border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80"
                    alt="ifaa Cashmere Coat"
                    className="w-full h-full object-cover object-top hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-[#E9DFD3] font-medium">Spotlight Piece</span>
                    <h3 className="font-serif text-xl sm:text-2xl font-light">The Cashmere Cocoon Coat</h3>
                    <p className="text-xs text-stone-200 mt-0.5">$480 · Mongolian Double-Faced Cashmere</p>
                  </div>
                </div>

                {/* Floating Micro Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-sm shadow-xl border border-stone-200 hidden sm:block max-w-[210px]">
                  <p className="text-[10px] uppercase tracking-widest text-[#9E7B4F] font-semibold">Limited Run</p>
                  <p className="text-xs font-serif text-stone-900 mt-1">"The coat of the season — effortlessly sculpted and warm."</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CURATED CATEGORY SPOTLIGHT */}
      <section id="categories" className="py-16 bg-[#FAF8F5] border-b border-[#EAE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9E7B4F] font-medium">Curated Disciplines</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#121212] font-normal mt-1">Shop by Category</h2>
            <div className="w-12 h-0.5 bg-[#121212] mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
            {categories.filter(c => c.id !== "all").map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  scrollTo("shop");
                }}
                className={`group cursor-pointer relative overflow-hidden bg-white border transition-all duration-300 ${
                  activeCategory === cat.id ? "border-black shadow-md ring-1 ring-black" : "border-[#E7E1D6] hover:border-black"
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                </div>
                <div className="p-3 sm:p-4 text-center bg-white">
                  <h3 className="font-serif text-sm sm:text-base font-medium text-stone-900 group-hover:text-black">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-stone-500 mt-0.5">
                    {cat.count} Pieces
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP CATALOG & FILTERS */}
      <section id="shop" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Stats */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6E0D5]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9E7B4F] font-medium">Ready-To-Wear & Objects</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#121212] font-normal mt-1">The Collection</h2>
            <p className="text-xs text-stone-500 tracking-wider mt-1">
              Showing <span className="font-semibold text-black">{filteredProducts.length}</span> pieces
              {activeCategory !== "all" && <span> in <strong className="text-black">{activeCategory}</strong></span>}
              {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
            </p>
          </div>

          {/* Quick Sort Dropdown */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-medium">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-[#DFD7CA] text-xs uppercase tracking-wider py-2 px-3 text-stone-800 rounded-none focus:outline-none focus:border-black cursor-pointer"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">New Arrivals</option>
            </select>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#ECE6DC] mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-widest transition border ${
                  activeCategory === cat.id
                    ? "bg-[#121212] text-white border-black font-semibold"
                    : "bg-[#F7F4ED] text-stone-700 border-transparent hover:border-[#D5CDBD] hover:text-black"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Price Range Filter Pills */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-stone-400 text-[11px] uppercase tracking-wider mr-1">Price:</span>
            <button
              onClick={() => setPriceFilter("all")}
              className={`px-3 py-1.5 uppercase tracking-wider transition ${priceFilter === "all" ? "bg-stone-900 text-white font-medium" : "bg-stone-200/60 text-stone-700 hover:bg-stone-200"}`}
            >
              All
            </button>
            <button
              onClick={() => setPriceFilter("under250")}
              className={`px-3 py-1.5 uppercase tracking-wider transition ${priceFilter === "under250" ? "bg-stone-900 text-white font-medium" : "bg-stone-200/60 text-stone-700 hover:bg-stone-200"}`}
            >
              &lt; $250
            </button>
            <button
              onClick={() => setPriceFilter("250to500")}
              className={`px-3 py-1.5 uppercase tracking-wider transition ${priceFilter === "250to500" ? "bg-stone-900 text-white font-medium" : "bg-stone-200/60 text-stone-700 hover:bg-stone-200"}`}
            >
              $250 - $500
            </button>
            <button
              onClick={() => setPriceFilter("over500")}
              className={`px-3 py-1.5 uppercase tracking-wider transition ${priceFilter === "over500" ? "bg-stone-900 text-white font-medium" : "bg-stone-200/60 text-stone-700 hover:bg-stone-200"}`}
            >
              $500+
            </button>
          </div>
        </div>

        {/* Active Filters Bar if any */}
        {(activeCategory !== "all" || searchQuery || priceFilter !== "all") && (
          <div className="flex items-center gap-2 mb-8 flex-wrap text-xs">
            <span className="text-stone-500 uppercase tracking-widest text-[10px]">Active Filters:</span>
            {activeCategory !== "all" && (
              <span className="bg-[#EAE4D8] px-3 py-1 flex items-center gap-2 text-stone-900">
                Category: {activeCategory}
                <button onClick={() => setActiveCategory("all")}><CloseIcon className="w-3 h-3" /></button>
              </span>
            )}
            {searchQuery && (
              <span className="bg-[#EAE4D8] px-3 py-1 flex items-center gap-2 text-stone-900">
                Search: "{searchQuery}"
                <button onClick={() => setSearchQuery("")}><CloseIcon className="w-3 h-3" /></button>
              </span>
            )}
            {priceFilter !== "all" && (
              <span className="bg-[#EAE4D8] px-3 py-1 flex items-center gap-2 text-stone-900">
                Price: {priceFilter}
                <button onClick={() => setPriceFilter("all")}><CloseIcon className="w-3 h-3" /></button>
              </span>
            )}
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
                setPriceFilter("all");
              }}
              className="text-[#9E7B4F] underline uppercase tracking-wider text-[11px] ml-2"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white border border-[#E9E3D6] p-8">
            <p className="font-serif text-2xl text-stone-800">No pieces found matching your criteria</p>
            <p className="text-xs text-stone-500 tracking-wider mt-2">Try adjusting your filters or search keywords.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
                setPriceFilter("all");
              }}
              className="mt-6 px-6 py-3 bg-[#121212] text-white text-xs uppercase tracking-widest"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={() => toggleWishlist(product)}
                onQuickView={() => setSelectedProduct(product)}
                onAddToCart={(size, color) => addToCart(product, size, color, 1)}
              />
            ))}
          </div>
        )}
      </section>

      {/* 6. EDITORIAL LOOKBOOK SECTION */}
      <section id="editorial" className="py-20 bg-[#161616] text-[#EBE6DC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Spread */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
                    alt="Editorial look 1"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-[#202020] border border-[#2D2D2D]">
                  <p className="text-[10px] uppercase tracking-widest text-[#C29F62]">Plate No. 04</p>
                  <p className="font-serif text-sm mt-1 text-stone-200">The Neutral Architecture of Quiet Form</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
                    alt="Editorial look 2"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-[#202020] border border-[#2D2D2D]">
                  <p className="text-[10px] uppercase tracking-widest text-[#C29F62]">Raw Texture</p>
                  <p className="font-serif text-sm mt-1 text-stone-200">Fluid Pure Mulberry Silk</p>
                </div>
              </div>
            </div>

            {/* Editorial Text */}
            <div className="lg:col-span-5 space-y-6 lg:pl-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C29F62] font-semibold">
                The IFAA Manifesto
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                Sculpting Garments That Outlive Trends.
              </h2>
              <blockquote className="border-l-2 border-[#C29F62] pl-4 text-stone-300 font-serif italic text-base leading-relaxed">
                "We do not design for the season; we curate for a lifetime. Every stitch, every fiber of Mongolian cashmere, and every horn button is considered."
              </blockquote>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                Founded between Paris and Milan, IFAA distills modern minimalism into pure emotional tactility.
                Our collections are produced in deliberate, limited batches alongside multi-generational family ateliers in northern Italy.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setActiveCategory("Outerwear");
                    scrollTo("shop");
                  }}
                  className="px-8 py-3.5 bg-white text-black hover:bg-[#EBE3D5] text-xs uppercase tracking-[0.25em] font-medium transition"
                >
                  Shop The Editorial
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CRAFTSMANSHIP & ATELIER VALUES */}
      <section id="craft" className="py-16 bg-[#F4EFE6] border-y border-[#E2DBD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="p-6 bg-white/70 backdrop-blur-sm border border-[#E7E0D2] rounded-sm space-y-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#121212] text-white flex items-center justify-center">
                <TruckIcon className="w-5 h-5 text-[#C29F62]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-stone-900">Complimentary Courier</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Delivered globally in signature FSC-certified embossed packaging. Free express dispatch on orders over $150.
              </p>
            </div>

            <div className="p-6 bg-white/70 backdrop-blur-sm border border-[#E7E0D2] rounded-sm space-y-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#121212] text-white flex items-center justify-center">
                <RefreshIcon className="w-5 h-5 text-[#C29F62]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-stone-900">30-Day Private Returns</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Take time to try pieces in the comfort of your sanctuary. Complimentary courier pickup included.
              </p>
            </div>

            <div className="p-6 bg-white/70 backdrop-blur-sm border border-[#E7E0D2] rounded-sm space-y-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#121212] text-white flex items-center justify-center">
                <ShieldIcon className="w-5 h-5 text-[#C29F62]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-stone-900">Certified Provenance</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                OEKO-TEX pure silk and Responsible Wool Standard certified fibers with traceable supply pathways.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER SIGNUP */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E7E1D6]">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#9E7B4F] font-semibold">Join Private Client List</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#121212] font-normal">Receive 10% Off Your First Order</h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
            Gain preview access to limited seasonal runs, private salon invitations, and curated editorial dispatches.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              applyPromo("IFAA10");
              showToast("Welcome to IFAA", "Your code IFAA10 (10% off) has been automatically applied to your bag!", "success");
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto pt-2"
          >
            <input
              type="email"
              placeholder="Enter your email address..."
              required
              className="w-full px-4 py-3.5 bg-white border border-[#DFD8CC] text-xs outline-none focus:border-black transition"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#121212] text-white hover:bg-black text-xs uppercase tracking-[0.2em] font-medium transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-stone-400 uppercase tracking-widest">Instant Code: IFAA10</p>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#121212] text-[#E0DCD3] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2A2A2A]">
            
            {/* Brand Intro */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="font-serif text-3xl tracking-[0.25em] uppercase text-white font-light">ifaa</h2>
              <p className="text-xs text-stone-400 leading-relaxed max-w-sm font-light">
                Contemporary high fashion house dedicated to timeless materiality, nuanced neutrals, and subtle luxury.
              </p>
              <div className="pt-2 text-xs text-stone-400">
                <p>Salons: Paris (Place Vendôme) · Milan (Via Montenapoleone)</p>
                <p className="mt-1">Client Concierge: concierge@ifaa-studio.com</p>
              </div>
            </div>

            {/* Navigation 1 */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#C29F62] font-semibold">Collections</p>
              <ul className="space-y-2 text-xs text-stone-400">
                <li><button onClick={() => { setActiveCategory("Outerwear"); scrollTo("shop"); }} className="hover:text-white transition">Outerwear & Coats</button></li>
                <li><button onClick={() => { setActiveCategory("Knitwear"); scrollTo("shop"); }} className="hover:text-white transition">Cashmere Knits</button></li>
                <li><button onClick={() => { setActiveCategory("Tailoring"); scrollTo("shop"); }} className="hover:text-white transition">Tailored Suiting</button></li>
                <li><button onClick={() => { setActiveCategory("Dresses"); scrollTo("shop"); }} className="hover:text-white transition">Mulberry Silk Slip</button></li>
                <li><button onClick={() => { setActiveCategory("Accessories"); scrollTo("shop"); }} className="hover:text-white transition">Italian Calfskin</button></li>
              </ul>
            </div>

            {/* Navigation 2 */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#C29F62] font-semibold">Client Care</p>
              <ul className="space-y-2 text-xs text-stone-400">
                <li><a href="#hero" className="hover:text-white transition">Complimentary Shipping</a></li>
                <li><a href="#hero" className="hover:text-white transition">Returns & Exchanges</a></li>
                <li><a href="#hero" className="hover:text-white transition">Garment Care Manual</a></li>
                <li><a href="#hero" className="hover:text-white transition">Atelier Sizing Guide</a></li>
                <li><a href="#hero" className="hover:text-white transition">Track Consignment</a></li>
              </ul>
            </div>

            {/* Legal & Codes */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#C29F62] font-semibold">Promotions</p>
              <div className="bg-[#1C1C1C] p-3 border border-[#333333] space-y-1.5 text-xs">
                <p className="text-white font-mono text-[11px]">IFAA10 — 10% Off</p>
                <p className="text-stone-400 font-mono text-[11px]">FIRST20 — $20 Off</p>
                <p className="text-stone-400 font-mono text-[11px]">VIP15 — 15% VIP</p>
              </div>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-2">Tested for Browser LocalStorage</p>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <p>© 2026 IFAA Fashion House S.A. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-stone-300 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-stone-300 cursor-pointer">Terms of Atelier</span>
              <span className="hover:text-stone-300 cursor-pointer">Accessibility</span>
            </div>
          </div>
        </div>
      </footer>

      {/* --- MODAL: PRODUCT DETAILS QUICK VIEW --- */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(size, color, qty) => addToCart(selectedProduct, size, color, qty)}
          isWishlisted={wishlist.includes(selectedProduct.id)}
          onToggleWishlist={() => toggleWishlist(selectedProduct)}
        />
      )}

      {/* --- DRAWER: SHOPPING CART SLIDE-OVER --- */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        subtotal={subtotal}
        discountAmount={discountAmount}
        shippingCost={shippingCost}
        estimatedTax={estimatedTax}
        grandTotal={grandTotal}
        promoCode={promoCode}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onApplyPromo={applyPromo}
        onRemovePromo={removePromo}
        freeShippingThreshold={freeShippingThreshold}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* --- DRAWER: WISHLIST SLIDE-OVER --- */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProductIds={wishlist}
        allProducts={products}
        onRemoveWishlist={toggleWishlist}
        onMoveToBag={moveWishlistToCart}
      />

      {/* --- MODAL: CHECKOUT & ORDER CONFIRMATION --- */}
      {isCheckoutOpen && (
        <CheckoutModal
          cart={cart}
          subtotal={subtotal}
          discountAmount={discountAmount}
          shippingCost={shippingCost}
          estimatedTax={estimatedTax}
          grandTotal={grandTotal}
          promoCode={promoCode}
          onClose={() => setIsCheckoutOpen(false)}
          onOrderSuccess={(orderData) => {
            setOrderComplete(orderData);
            setCart([]);
            setIsCheckoutOpen(false);
            if (window.confetti) {
              window.confetti({
                particleCount: 120,
                spread: 70,
                origin: { y: 0.6 },
                colors: ["#C29F62", "#111111", "#ECE5D8"]
              });
            }
          }}
        />
      )}

      {/* --- MODAL: ORDER COMPLETE RECEIPT --- */}
      {orderComplete && (
        <OrderSuccessModal
          order={orderComplete}
          onClose={() => setOrderComplete(null)}
        />
      )}

      {/* --- MOBILE NAVIGATION DRAWER --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative w-4/5 max-w-sm bg-[#FAF8F5] h-full shadow-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E2D6]">
                <span className="font-serif text-2xl uppercase tracking-[0.2em] font-normal">ifaa</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-stone-600">
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-4 text-xs uppercase tracking-widest font-medium">
                <button
                  onClick={() => { scrollTo("hero"); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 hover:text-black border-b border-stone-200"
                >
                  Home
                </button>
                <button
                  onClick={() => { setActiveCategory("all"); scrollTo("shop"); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 hover:text-black border-b border-stone-200"
                >
                  Shop All Pieces ({products.length})
                </button>
                <button
                  onClick={() => { scrollTo("categories"); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 hover:text-black border-b border-stone-200"
                >
                  Categories
                </button>
                <button
                  onClick={() => { scrollTo("editorial"); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 hover:text-black border-b border-stone-200"
                >
                  Lookbook & Manifesto
                </button>
                <button
                  onClick={() => { scrollTo("craft"); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 hover:text-black border-b border-stone-200"
                >
                  Atelier Craft
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E2D6] space-y-3">
              <button
                onClick={() => { setIsWishlistOpen(true); setIsMobileMenuOpen(false); }}
                className="w-full py-3 bg-[#EAE3D4] text-stone-900 text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <HeartIcon className="w-4 h-4" />
                <span>Wishlist ({wishlist.length})</span>
              </button>
              <button
                onClick={() => { setIsCartOpen(true); setIsMobileMenuOpen(false); }}
                className="w-full py-3 bg-[#121212] text-white text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <BagIcon className="w-4 h-4" />
                <span>Shopping Bag ({cartItemCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- FLOATING TOAST NOTIFICATIONS --- */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto bg-[#181818] text-[#F4EFE6] border border-[#333333] shadow-2xl p-4 rounded-sm flex items-start gap-3 transform translate-y-0 transition-all duration-300"
          >
            <div className="mt-0.5">
              {toast.type === "bag" && <BagIcon className="w-5 h-5 text-[#C29F62]" />}
              {toast.type === "heart" && <HeartIcon className="w-5 h-5 text-[#E07A5F]" filled={true} />}
              {toast.type === "success" && <CheckIcon className="w-5 h-5 text-[#81B29A]" />}
              {toast.type === "error" && <CloseIcon className="w-5 h-5 text-[#E07A5F]" />}
              {toast.type === "info" && <SparklesIcon className="w-5 h-5 text-[#C29F62]" />}
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider font-semibold text-white">{toast.title}</p>
              {toast.message && <p className="text-xs text-stone-300 mt-0.5">{toast.message}</p>}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

// --- PRODUCT CARD COMPONENT ---
function ProductCard({ product, isWishlisted, onToggleWishlist, onQuickView, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="group flex flex-col bg-white border border-[#ECE6DB] hover:border-[#222222] transition-all duration-300 relative">
      
      {/* Image Area */}
      <div 
        className="relative aspect-[3/4] overflow-hidden bg-stone-100 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onQuickView}
      >
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-top transition duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-sm text-[#FAF7EE] text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 font-medium">
            {product.badge}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist();
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition shadow-sm ${
            isWishlisted
              ? "bg-[#111111] text-white"
              : "bg-white/90 text-stone-700 hover:text-black hover:bg-white"
          }`}
          aria-label="Toggle Wishlist"
        >
          <HeartIcon className="w-4 h-4" filled={isWishlisted} />
        </button>

        {/* Quick View Pill */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition duration-300 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView();
            }}
            className="flex-1 py-2.5 bg-white/95 backdrop-blur-sm hover:bg-white text-[#111111] text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 shadow-md transition"
          >
            <EyeIcon className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product.sizes[0], selectedColor);
            }}
            className="px-3 py-2.5 bg-[#121212] hover:bg-black text-white text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center shadow-md transition"
            title="Add to Bag"
          >
            <BagIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Info Area */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-[11px] text-stone-500 uppercase tracking-widest mb-1.5">
            <span>{product.category}</span>
            <div className="flex items-center gap-1 text-[#9E7B4F]">
              <StarIcon className="w-3.5 h-3.5" />
              <span className="text-stone-700 font-medium">{product.rating}</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={onQuickView}
            className="font-serif text-base sm:text-lg text-stone-900 group-hover:text-black transition cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-stone-500 line-clamp-1 mt-0.5 font-light">
            {product.subtitle}
          </p>
        </div>

        {/* Swatches & Pricing */}
        <div className="pt-4 mt-3 border-t border-[#F2ECE1] flex items-center justify-between">
          {/* Color Dots */}
          <div className="flex items-center gap-1.5">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c)}
                className={`w-3.5 h-3.5 rounded-full border transition ${
                  selectedColor.name === c.name ? "ring-1 ring-black ring-offset-1 border-stone-500 scale-110" : "border-stone-300"
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>

          {/* Price */}
          <div className="text-right">
            {product.originalPrice && (
              <span className="text-xs text-stone-400 line-through mr-1.5 font-light">
                ${product.originalPrice}
              </span>
            )}
            <span className="font-serif text-base sm:text-lg font-medium text-stone-900">
              ${product.price}
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}

// --- PRODUCT DETAILS MODAL ---
function ProductDetailModal({ product, onClose, onAddToCart, isWishlisted, onToggleWishlist }) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("materials");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-[#FAF8F5] max-w-4xl w-full rounded-sm shadow-2xl border border-[#EAE3D6] overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#ECE5D8] bg-white">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E7B4F] font-semibold">IFAA Atelier</span>
            <span className="text-stone-300">·</span>
            <span className="text-xs text-stone-500 uppercase tracking-widest">{product.category}</span>
          </div>
          <button onClick={onClose} className="p-1.5 text-stone-600 hover:text-black">
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Left: Gallery */}
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden bg-stone-100 rounded-sm border border-[#EAE5DC]">
                <img
                  src={product.images[activeImage] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`w-16 h-20 rounded-sm overflow-hidden border transition ${
                        activeImage === idx ? "border-black ring-1 ring-black" : "border-stone-300 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Specs & Actions */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                    {product.name}
                  </h2>
                  <button
                    onClick={onToggleWishlist}
                    className="p-2 text-stone-700 hover:text-black"
                    title="Wishlist"
                  >
                    <HeartIcon className="w-5 h-5" filled={isWishlisted} />
                  </button>
                </div>

                <p className="text-xs text-stone-500 mt-1 font-light tracking-wide">
                  {product.subtitle}
                </p>

                <div className="flex items-baseline gap-3 mt-3">
                  <span className="font-serif text-2xl font-medium text-stone-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-stone-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  <span className="text-[11px] uppercase tracking-wider text-[#81B29A] font-semibold bg-[#81B29A]/10 px-2 py-0.5">
                    In Stock
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Color Selector */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-widest text-stone-500">Color:</span>
                  <span className="font-medium text-stone-900">{selectedColor.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      className={`flex items-center gap-2 px-3 py-1.5 border text-xs transition ${
                        selectedColor.name === c.name
                          ? "border-black bg-white ring-1 ring-black font-medium"
                          : "border-stone-300 hover:border-black bg-white"
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-widest text-stone-500">Select Size:</span>
                  <span className="text-[#9E7B4F] underline cursor-pointer">Size Guide</span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`py-2.5 text-xs uppercase tracking-wider font-medium border text-center transition ${
                        selectedSize === s
                          ? "bg-[#121212] text-white border-black"
                          : "bg-white text-stone-800 border-stone-300 hover:border-black"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper & Add to Cart */}
              <div className="pt-2 flex items-center gap-4">
                <div className="flex items-center border border-stone-300 bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-stone-600 hover:text-black"
                  >
                    <MinusIcon className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-stone-600 hover:text-black"
                  >
                    <PlusIcon className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(selectedSize, selectedColor, quantity);
                    onClose();
                  }}
                  className="flex-1 py-3.5 bg-[#121212] hover:bg-black text-white text-xs uppercase tracking-[0.2em] font-medium transition flex items-center justify-center gap-2 shadow-md"
                >
                  <BagIcon className="w-4 h-4" />
                  <span>Add to Bag · ${product.price * quantity}</span>
                </button>
              </div>

              {/* Accordions */}
              <div className="border-t border-[#E8E1D5] pt-4 space-y-3 text-xs">
                <div>
                  <button
                    onClick={() => setActiveTab(activeTab === "materials" ? "" : "materials")}
                    className="flex items-center justify-between w-full py-2 text-left font-medium uppercase tracking-wider text-stone-800"
                  >
                    <span>Composition & Craftsmanship</span>
                    <span>{activeTab === "materials" ? "−" : "+"}</span>
                  </button>
                  {activeTab === "materials" && (
                    <div className="pb-3 text-stone-600 font-light space-y-1">
                      <p><strong>Fabric:</strong> {product.composition}</p>
                      <p><strong>Care:</strong> {product.care}</p>
                    </div>
                  )}
                </div>

                <div className="border-t border-[#EAE3D6] pt-2">
                  <button
                    onClick={() => setActiveTab(activeTab === "shipping" ? "" : "shipping")}
                    className="flex items-center justify-between w-full py-2 text-left font-medium uppercase tracking-wider text-stone-800"
                  >
                    <span>Complimentary Shipping & Returns</span>
                    <span>{activeTab === "shipping" ? "−" : "+"}</span>
                  </button>
                  {activeTab === "shipping" && (
                    <div className="pb-3 text-stone-600 font-light space-y-1">
                      <p>Free standard courier delivery on all orders over $150.</p>
                      <p>Complimentary 30-day home collection returns.</p>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

// --- CART DRAWER COMPONENT ---
function CartDrawer({
  isOpen,
  onClose,
  cart,
  subtotal,
  discountAmount,
  shippingCost,
  estimatedTax,
  grandTotal,
  promoCode,
  onUpdateQuantity,
  onRemoveItem,
  onApplyPromo,
  onRemovePromo,
  freeShippingThreshold,
  onProceedToCheckout
}) {
  const [promoInput, setPromoInput] = useState("");

  if (!isOpen) return null;

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFree = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col z-10 border-l border-[#E2DBD0]">
        
        {/* Header */}
        <div className="p-5 border-b border-[#EAE4D8] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <BagIcon className="w-5 h-5 text-stone-900" />
            <h2 className="font-serif text-lg tracking-wider font-normal text-stone-900">
              Shopping Bag ({cart.reduce((t, i) => t + i.quantity, 0)})
            </h2>
          </div>
          <button onClick={onClose} className="p-2 text-stone-500 hover:text-black">
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="bg-[#F3EDE2] p-3.5 border-b border-[#E8E1D5] text-xs">
          <div className="flex items-center justify-between mb-1.5 text-stone-700">
            {remainingForFree === 0 ? (
              <span className="font-semibold text-[#386641] flex items-center gap-1">
                <CheckIcon className="w-3.5 h-3.5" /> You've unlocked Complimentary Express Shipping!
              </span>
            ) : (
              <span>Add <strong className="text-black">${remainingForFree}</strong> more to unlock Free Express Shipping</span>
            )}
            <span className="font-mono text-[10px]">{progressPercent}%</span>
          </div>
          <div className="w-full bg-[#E5DCCF] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#121212] h-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EAE3D5] flex items-center justify-center mx-auto text-stone-600">
                <BagIcon className="w-7 h-7" />
              </div>
              <p className="font-serif text-xl text-stone-800">Your bag is empty</p>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Discover our curated cashmere coats, pure silk slips, and Italian tailoring.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-3 bg-[#121212] text-white text-xs uppercase tracking-widest font-medium"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.itemKey}
                className="flex gap-4 p-3 bg-white border border-[#EAE3D6] rounded-sm relative group"
              >
                {/* Thumbnail */}
                <div className="w-20 h-24 bg-stone-100 overflow-hidden flex-shrink-0">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between pr-6">
                      <h4 className="font-serif text-sm font-medium text-stone-900 line-clamp-1">
                        {item.product.name}
                      </h4>
                    </div>

                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Size: <span className="font-medium text-stone-800">{item.size}</span> · Color: <span className="font-medium text-stone-800">{item.color.name}</span>
                    </p>
                    <p className="text-xs font-serif font-medium text-stone-900 mt-1">
                      ${item.product.price}
                    </p>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#F4EFE6] mt-2">
                    <div className="flex items-center border border-stone-300">
                      <button
                        onClick={() => onUpdateQuantity(item.itemKey, -1)}
                        className="px-2 py-1 text-stone-600 hover:text-black"
                      >
                        <MinusIcon className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.itemKey, 1)}
                        className="px-2 py-1 text-stone-600 hover:text-black"
                      >
                        <PlusIcon className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-serif text-sm font-medium">
                      ${item.product.price * item.quantity}
                    </span>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => onRemoveItem(item.itemKey)}
                  className="absolute top-2 right-2 text-stone-400 hover:text-red-600 p-1 transition"
                  title="Remove item"
                >
                  <TrashIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#EAE3D6] bg-white space-y-4">
            
            {/* Promo Code Input */}
            <div>
              {promoCode ? (
                <div className="flex items-center justify-between bg-[#F0EDE4] px-3 py-2 text-xs border border-[#DFD8C9]">
                  <span className="font-medium text-stone-800">
                    Promo: <strong className="font-mono">{promoCode.code}</strong> ({promoCode.label})
                  </span>
                  <button onClick={onRemovePromo} className="text-stone-500 hover:text-red-600 font-bold ml-2">
                    <CloseIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center border border-stone-300">
                  <input
                    type="text"
                    placeholder="Promo code (e.g. IFAA10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs uppercase outline-none"
                  />
                  <button
                    onClick={() => {
                      if (onApplyPromo(promoInput)) setPromoInput("");
                    }}
                    className="px-4 py-2 bg-stone-900 text-white text-xs uppercase tracking-wider font-medium hover:bg-black"
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-stone-600 pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-stone-900">${subtotal}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-[#81B29A]">
                  <span>Discount ({promoCode.code})</span>
                  <span>-${discountAmount}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-medium text-stone-900">
                  {shippingCost === 0 ? "Complimentary" : `$${shippingCost}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Estimated Taxes (8%)</span>
                <span className="font-medium text-stone-900">${estimatedTax}</span>
              </div>

              <div className="flex justify-between text-base font-serif font-medium text-stone-900 pt-2 border-t border-[#EFE9DF]">
                <span>Total</span>
                <span>${grandTotal}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onProceedToCheckout}
              className="w-full py-4 bg-[#121212] hover:bg-black text-white text-xs uppercase tracking-[0.25em] font-medium transition shadow-md flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

// --- WISHLIST DRAWER COMPONENT ---
function WishlistDrawer({ isOpen, onClose, wishlistProductIds, allProducts, onRemoveWishlist, onMoveToBag }) {
  if (!isOpen) return null;

  const wishlistedProducts = allProducts.filter((p) => wishlistProductIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col z-10 border-l border-[#E2DBD0]">
        <div className="p-5 border-b border-[#EAE4D8] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <HeartIcon className="w-5 h-5 text-stone-900" filled={true} />
            <h2 className="font-serif text-lg tracking-wider font-normal text-stone-900">
              Saved Pieces ({wishlistedProducts.length})
            </h2>
          </div>
          <button onClick={onClose} className="p-2 text-stone-500 hover:text-black">
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EAE3D5] flex items-center justify-center mx-auto text-stone-600">
                <HeartIcon className="w-7 h-7" />
              </div>
              <p className="font-serif text-xl text-stone-800">Your wishlist is empty</p>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Save pieces you love by tapping the heart icon on any product card.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-3 bg-[#121212] text-white text-xs uppercase tracking-widest font-medium"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            wishlistedProducts.map((p) => (
              <div key={p.id} className="flex gap-4 p-3 bg-white border border-[#EAE3D6] rounded-sm relative">
                <div className="w-20 h-24 bg-stone-100 overflow-hidden flex-shrink-0">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-medium text-stone-900 line-clamp-1">{p.name}</h4>
                    <p className="text-xs text-stone-500">{p.category}</p>
                    <p className="font-serif text-sm font-medium text-stone-900 mt-1">${p.price}</p>
                  </div>
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onMoveToBag(p)}
                      className="px-3 py-1.5 bg-[#121212] text-white text-[11px] uppercase tracking-wider font-medium hover:bg-black flex items-center gap-1.5"
                    >
                      <BagIcon className="w-3.5 h-3.5" />
                      <span>Move to Bag</span>
                    </button>
                    <button
                      onClick={() => onRemoveWishlist(p)}
                      className="p-1.5 text-stone-400 hover:text-red-600"
                      title="Remove"
                    >
                      <TrashIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// --- CHECKOUT MODAL COMPONENT ---
function CheckoutModal({ cart, subtotal, discountAmount, shippingCost, estimatedTax, grandTotal, promoCode, onClose, onOrderSuccess }) {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment
  const [formData, setFormData] = useState({
    firstName: "Claire",
    lastName: "Laurent",
    email: "claire.laurent@paris.com",
    address: "14 Rue du Faubourg Saint-Honoré",
    city: "Paris",
    postalCode: "75008",
    country: "France",
    shippingMethod: "express",
    paymentMethod: "card",
    cardNumber: "4242 •••• •••• 9821",
    cardExp: "11/28",
    cardCvc: "842"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      const orderId = "IFAA-" + Math.floor(100000 + Math.random() * 900000);
      onOrderSuccess({
        orderId,
        items: [...cart],
        customer: formData,
        subtotal,
        discountAmount,
        shippingCost,
        estimatedTax,
        grandTotal,
        date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-[#FAF8F5] max-w-2xl w-full rounded-sm shadow-2xl border border-[#EAE3D6] overflow-hidden z-10 my-auto">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#ECE5D8] bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="font-serif text-xl text-stone-900 tracking-wider">IFAA Atelier Checkout</h3>
            <span className="text-xs text-stone-400">Step {step} of 2</span>
          </div>
          <button onClick={onClose} className="text-stone-500 hover:text-black">
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {step === 1 ? (
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#9E7B4F] font-semibold">1. Delivery Destination</h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-stone-300 text-xs outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-stone-300 text-xs outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-stone-300 text-xs outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1">Delivery Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-stone-300 text-xs outline-none focus:border-black"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-stone-300 text-xs outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-stone-300 text-xs outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1">Country</label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-stone-300 text-xs outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Order total preview */}
              <div className="p-3 bg-[#F4EFE6] border border-[#E7DFD1] text-xs flex justify-between items-center">
                <span>Total Due:</span>
                <span className="font-serif text-base font-semibold">${grandTotal}</span>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#121212] hover:bg-black text-white text-xs uppercase tracking-[0.2em] font-medium"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#9E7B4F] font-semibold">2. Payment Atelier</h4>

              {/* Demo card graphic */}
              <div className="bg-[#181818] text-[#F3EFE6] p-5 rounded-sm border border-[#333333] space-y-4 shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="font-serif tracking-widest text-lg font-light">IFAA BLACK CLIENT</span>
                  <span className="text-[10px] uppercase tracking-widest bg-stone-800 px-2 py-0.5 rounded text-[#C29F62]">Encrypted</span>
                </div>
                <div className="font-mono text-base tracking-widest py-2">
                  4242 •••• •••• 9821
                </div>
                <div className="flex justify-between text-xs font-mono text-stone-400">
                  <span>{formData.firstName} {formData.lastName}</span>
                  <span>EXP: 11/28</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-stone-300 text-xs font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1">Exp Date</label>
                    <input
                      type="text"
                      name="cardExp"
                      value={formData.cardExp}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-stone-300 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1">CVC</label>
                    <input
                      type="text"
                      name="cardCvc"
                      value={formData.cardCvc}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-stone-300 text-xs font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs uppercase tracking-wider text-stone-600 hover:text-black underline"
                >
                  ← Back to Destination
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#121212] hover:bg-black text-white text-xs uppercase tracking-[0.2em] font-medium"
                >
                  Authorize Payment · ${grandTotal}
                </button>
              </div>
            </div>
          )}
        </form>

      </div>
    </div>
  );
}

// --- ORDER SUCCESS MODAL ---
function OrderSuccessModal({ order, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      
      <div className="relative bg-[#FAF8F5] max-w-lg w-full rounded-sm shadow-2xl border border-[#EAE3D6] overflow-hidden z-10 p-6 sm:p-8 text-center space-y-6 my-auto">
        <div className="w-16 h-16 rounded-full bg-[#121212] text-[#C29F62] flex items-center justify-center mx-auto shadow-md">
          <CheckIcon className="w-8 h-8" />
        </div>

        <div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#9E7B4F] font-semibold">Consignment Confirmed</span>
          <h2 className="font-serif text-3xl text-stone-900 mt-1">Thank You For Your Order</h2>
          <p className="text-xs text-stone-500 mt-1 font-mono tracking-wider">
            Order Reference: <strong className="text-black">{order.orderId}</strong>
          </p>
        </div>

        {/* Receipt Box */}
        <div className="bg-white p-4 border border-[#ECE5D8] rounded-sm text-left space-y-3 text-xs">
          <div className="flex justify-between border-b border-stone-100 pb-2">
            <span className="text-stone-500">Consigned To:</span>
            <span className="font-medium text-stone-800">{order.customer.firstName} {order.customer.lastName}</span>
          </div>
          <div className="flex justify-between border-b border-stone-100 pb-2">
            <span className="text-stone-500">Destination:</span>
            <span className="font-medium text-stone-800">{order.customer.address}, {order.customer.city}</span>
          </div>
          <div className="flex justify-between border-b border-stone-100 pb-2">
            <span className="text-stone-500">Date:</span>
            <span className="font-medium text-stone-800">{order.date}</span>
          </div>
          <div className="flex justify-between font-serif text-sm font-semibold text-stone-900 pt-1">
            <span>Total Settled:</span>
            <span>${order.grandTotal}</span>
          </div>
        </div>

        <p className="text-xs text-stone-500 leading-relaxed font-light">
          A receipt and tracking confirmation have been dispatched to <strong>{order.customer.email}</strong>.
          Our Paris atelier will prepare your pieces in bespoke embossed dust covers.
        </p>

        <button
          onClick={onClose}
          className="w-full py-4 bg-[#121212] hover:bg-black text-white text-xs uppercase tracking-[0.25em] font-medium transition"
        >
          Return to Atelier
        </button>
      </div>
    </div>
  );
}

// Render React App
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
