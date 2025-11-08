# Stock Trading Simulation Platform - Design Guidelines

## Design Approach

**Selected Approach:** Hybrid - Modern Fintech UI inspired by Robinhood's simplicity combined with TradingView's data density

**Justification:** Trading platforms require information density while maintaining clarity. We'll balance clean, accessible interfaces for casual users with professional-grade data displays for active traders.

**Key Principles:**
- Data clarity over decoration
- Immediate information hierarchy
- Confidence-building through professional polish
- Consistent patterns across all trading workflows

## Typography

**Font Stack:**
- Primary: Inter (via Google Fonts CDN)
- Monospace: JetBrains Mono (for numbers, prices, currency)

**Hierarchy:**
- H1: text-4xl font-bold tracking-tight (Page headers)
- H2: text-2xl font-semibold (Section headers, company names)
- H3: text-xl font-semibold (Card headers, subsections)
- Body: text-base (Standard content)
- Small: text-sm (Secondary information, labels)
- Tiny: text-xs (Timestamps, metadata)
- Numbers/Prices: font-mono font-semibold (All monetary values and percentages)

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 24
- Tight spacing: p-2, gap-2 (within components)
- Standard spacing: p-4, gap-4 (cards, buttons)
- Section spacing: p-6 to p-8 (containers)
- Page margins: p-12 to p-24 (main layouts)

**Grid Systems:**
- Dashboard: 12-column grid (grid-cols-12)
- Market overview: 3-column on desktop, 1-column mobile (grid-cols-1 lg:grid-cols-3)
- Stock cards: 4-column on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)

**Container Strategy:**
- Full-width app shell with sidebar navigation
- Content areas: max-w-7xl with appropriate padding
- Cards and panels: rounded-lg with consistent shadow elevation

## Component Library

### Navigation & Shell

**Sidebar Navigation (Desktop):**
- Width: w-64, fixed position
- Sections: Dashboard, Markets, Portfolio, Watchlist, History, Settings
- Active state: Distinct background treatment
- Icons: Heroicons (solid variants)

**Top Bar:**
- Height: h-16
- Contains: Search bar, portfolio value summary, theme toggle, user menu
- Search: Prominent search input (w-96) with autocomplete dropdown

**Mobile Navigation:**
- Bottom tab bar (fixed, h-16)
- Hamburger menu for secondary options

### Dashboard Components

**Portfolio Summary Card:**
- Large number display for total value (text-4xl font-mono)
- Percentage change with directional indicators
- Compact stats grid: Today's P/L, Total P/L, Cash Balance

**Holdings Table:**
- Columns: Symbol, Company, Shares, Avg Price, Current Price, Total Value, P/L, Actions
- Sortable headers
- Row hover states
- Alternating row treatment for readability

**Recent Transactions Feed:**
- Timeline-style layout with timestamps
- Buy/sell indicators with distinct visual treatment
- Compact card format (h-20 per transaction)

### Market Overview

**Stock Cards:**
- Grid layout: 4 columns desktop, 2 tablet, 1 mobile
- Card structure: Symbol + Company name, Current price (large, font-mono), Percentage change, Mini sparkline chart
- Height: h-32 minimum

**Trending Stocks Section:**
- Horizontal scrollable carousel on mobile
- Grid on desktop
- Categories: Top Gainers, Top Losers, Most Active

**Market Indices Widget:**
- Compact display (h-24)
- Shows 3-4 major indices horizontally
- Real-time percentage changes

### Stock Detail Page

**Hero Section:**
- Large company name (text-3xl)
- Current price display (text-5xl font-mono)
- Percentage change with trend indicator
- Action buttons: Buy, Sell, Add to Watchlist (inline, gap-4)

**Price Chart:**
- Full-width chart area (h-96)
- Time range selector: 1D, 1W, 1M, 3M, 1Y, ALL (button group)
- Chart library integration placeholder

**Trading Panel (Sticky Sidebar):**
- Width: w-80
- Quick trade form: Quantity input, Price display, Buy/Sell buttons stacked
- Estimated total calculation
- Available cash display

**Company Information Tabs:**
- Tab navigation: About, Statistics, Similar Stocks
- Content area: Generous padding (p-8)

### Trading Interface

**Buy/Sell Modal:**
- Centered modal: max-w-md
- Order type selector: Market, Limit (tab interface)
- Quantity input with increment/decrement buttons
- Live price calculation preview
- Confirmation section with all details
- Prominent action button at bottom

**Order Confirmation:**
- Success state with checkmark animation placeholder
- Transaction summary
- Quick actions: View Portfolio, Trade Another Stock

### Transaction History

**Filter Bar:**
- Date range picker
- Stock symbol filter (searchable dropdown)
- Transaction type: All, Buy, Sell

**Transaction Table:**
- Columns: Date/Time, Symbol, Type, Quantity, Price, Total, Status
- Expandable rows for additional details
- Export button (top-right)

### Watchlist

**Stock List:**
- Draggable/reorderable list items
- Each item: Symbol, name, price, change, mini chart, remove button
- Add stock button (prominent at top)

**Quick Actions:**
- Trade button on each watchlist item
- Inline percentage change updates

## Responsive Behavior

**Breakpoints:**
- Mobile: base (< 768px) - Single column, bottom navigation
- Tablet: md (768px - 1024px) - 2-column grids, condensed sidebar
- Desktop: lg (> 1024px) - Full sidebar, multi-column layouts

**Mobile Optimizations:**
- Collapsible sidebar becomes bottom nav
- Tables become card-based vertical lists
- Charts: Full-width, h-64
- Touch-friendly targets: min-h-12 for all interactive elements

## Data Visualization

**Price Change Indicators:**
- Positive: Upward arrow icon + percentage
- Negative: Downward arrow icon + percentage
- Always use font-mono for numbers

**Sparkline Charts:**
- Inline SVG placeholder comments (<!-- SPARKLINE CHART: width: 100px, height: 40px -->)
- Simple line representation of price trend

**Icons:**
- Library: Heroicons via CDN
- Standard size: w-5 h-5 (inline with text)
- Large size: w-8 h-8 (standalone icons)

## Accessibility & Interactions

**Focus States:**
- Visible focus rings on all interactive elements (ring-2 ring-offset-2)
- Keyboard navigation support for tables and forms

**Loading States:**
- Skeleton screens for data tables and charts
- Spinner for button actions
- Pulse animation for real-time updates

**Empty States:**
- Centered message with icon
- Call-to-action button
- Example: "No stocks in watchlist" with "Browse Markets" button

## Theme Toggle

Implement dark/light theme switcher in top bar. Structure all components to work with theme variables (managed by engineer). No animations on theme change.