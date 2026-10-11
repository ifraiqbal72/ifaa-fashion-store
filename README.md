# IFAA — Haute Minimalist Fashion House

An elegant, contemporary luxury fashion e-commerce storefront crafted in an editorial **cream, white, and black** aesthetic.

![IFAA Brand Preview](https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=80)

---

## ✨ Features

- **Editorial Luxury Brand Identity**:
  - Palette: Cream (`#FAF8F5`), ivory, soft greige, stone, and deep obsidian black (`#121212`) with subtle gold accents (`#C29F62`).
  - Typography: Serif headlines (*Cormorant Garamond*, *Playfair Display*) paired with clean modern sans-serif (*Plus Jakarta Sans*).
- **Interactive Navigation & Announcement Banner**:
  - Rotating perks bar (Complimentary Express shipping over $150, voucher code `IFAA10`).
  - Sticky glassmorphism header with live search, wishlist counter, and cart badge.
  - Responsive mobile drawer navigation.
- **Hero & Curated Categories**:
  - Magazine-style split hero with spotlight feature.
  - Visual category filters: *Coats & Jackets*, *Cashmere & Knitwear*, *Tailored Suiting*, *Silk & Dresses*, *Leather & Accents*.
- **Comprehensive Product Catalog**:
  - Real-time search by keywords, category, or fabric.
  - Multi-criteria sorting (Featured, Price: Low to High, Price: High to Low, Highest Rated, New In).
  - Price range filter buttons (<$250, $250-$500, $500+).
- **Product Cards & Quick View Modal**:
  - High-resolution photography with hover angle preview.
  - Interactive color swatch selector.
  - Wishlist toggle (persisted to browser `localStorage`).
  - Detailed product view modal with thumbnail gallery, size picker, quantity stepper, and craftsmanship accordions.
- **Working Shopping Cart Drawer**:
  - Slide-out side drawer with real-time subtotal, tax calculation, and shipping fee logic.
  - Free Shipping Progress Bar (dynamic calculation toward $150 threshold).
  - Working promo voucher codes (`IFAA10` for 10% off, `FIRST20` for $20 off, `VIP15` for 15% off).
  - Quantity adjusters (+ / -) and item removal.
- **Checkout Flow & Order Confirmation**:
  - 2-step luxury checkout (Delivery destination + Payment method).
  - Order celebration modal with confetti burst, unique order reference ID, and receipt breakdown.
- **Browser Persistence (`localStorage`)**:
  - Cart items, quantities, promo code, and wishlist are saved automatically across page refreshes.

---

## 🚀 How to Run the Website (Simple Steps)

### Method 1: Double-Click (Easiest on Windows)
1. Navigate to the project folder:
   ```
   C:\Users\user\.gemini\antigravity\scratch\ifaa-fashion-store
   ```
2. Double-click the file named **`run.bat`**.
3. Your default web browser will automatically open to **`http://localhost:3000`**!

---

### Method 2: Command Line (PowerShell / Terminal)
1. Open PowerShell or Command Prompt.
2. Run:
   ```powershell
   python C:\Users\user\.gemini\antigravity\scratch\ifaa-fashion-store\server.py
   ```
3. Open **`http://localhost:3000`** in your browser.

---

## 🛍️ Test Promo Codes
Try applying these in the cart drawer:
- **`IFAA10`** — 10% discount on entire cart
- **`FIRST20`** — $20 flat discount
- **`VIP15`** — 15% VIP client discount

---

## 📁 Project Structure

```
ifaa-fashion-store/
├── index.html        # Main HTML shell, Google Fonts, Tailwind config & scripts
├── app.jsx           # Core React 18 application & interactive components
├── products.js       # Curated fashion catalog, sizes, colors, images & prices
├── server.py         # Lightweight Python 3 local development server
├── run.bat           # 1-click Windows runner
└── README.md         # Documentation and guide
```
