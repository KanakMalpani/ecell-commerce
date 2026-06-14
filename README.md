# E-Cell Store - E-Commerce Platform

A full-stack e-commerce platform built for **E-Cell Tech Domain Task 2**. Includes a customer-facing storefront with landing page, product catalog, shopping cart, checkout flow, and a comprehensive admin dashboard.

## Features

### Customer Application
- Modern landing page with hero, featured products, testimonials, and trust indicators
- Product listing with search, category filter, price range, and sorting
- Product detail pages with add-to-cart
- Shopping cart with quantity management
- Secure checkout with address management, coupon codes, and simulated payment
- Order history and order tracking

### Admin Dashboard
- Analytics: revenue, orders, conversion rate, top products, low stock alerts
- Product management: add, edit, delete, stock tracking, featured products
- Order management: view orders, update status
- Coupon management: percentage and fixed discounts with expiry
- Banner management: promotional campaigns with scheduling

### Backend
- JWT authentication with HTTP-only cookies
- Role-based access control (Admin / User)
- REST API with Next.js API routes
- SQLite database via Prisma ORM

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS 4 |
| Backend | Next.js API Routes (Node.js) |
| Database | SQLite + Prisma |
| Auth | JWT + bcrypt |

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
cd ecell-commerce
npm install
npm run db:setup:local   # first-time local setup
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@ecell.com | admin123 |
| User | user@ecell.com | user123 |

### Demo Coupon Codes
- `WELCOME10` - 10% off (min order ₹500)
- `FLAT200` - ₹200 off (min order ₹1500)
- `ECCELL25` - 25% off (min order ₹2000)

## Project Structure

```
ecell-commerce/
├── prisma/
│   ├── schema.prisma    # Database models
│   └── seed.ts          # Sample data
├── src/
│   ├── app/
│   │   ├── (store)/     # Customer pages
│   │   ├── admin/       # Admin dashboard
│   │   └── api/         # REST API endpoints
│   ├── components/      # Reusable UI components
│   ├── context/         # Auth & Cart state
│   ├── lib/             # Utilities, auth, prisma
│   └── types/           # TypeScript types
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth` | Register |
| PUT | `/api/auth` | Login |
| DELETE | `/api/auth` | Logout |
| GET | `/api/auth/me` | Current user |
| GET | `/api/products` | List products (with filters) |
| GET | `/api/products/[slug]` | Product detail |
| GET | `/api/orders` | List orders |
| POST | `/api/orders` | Create order (checkout) |
| POST | `/api/coupons/validate` | Validate coupon |
| GET | `/api/analytics` | Admin analytics |

## Deployment

### Option 1: Render (recommended for SQLite)

1. Push this repo to GitHub
2. Create a new **Web Service** on [Render](https://render.com)
3. Connect the repo — Render reads `render.yaml` automatically
4. Set `JWT_SECRET` in environment variables
5. Deploy — SQLite persists on Render's disk

### Option 2: Vercel

For Vercel, use a hosted database (Turso/Neon) instead of SQLite. See `.env.example`.

```bash
npm run build
npm start
```

## Live Demo

**https://ecell-commerce.vercel.app**

GitHub: **https://github.com/KanakMalpani/ecell-commerce**

## AI Prompts

See [AI_PROMPTS.md](./AI_PROMPTS.md) for the AI prompts used during development.

## License

Built for E-Cell Tech Domain evaluation.
