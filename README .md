# hack4haldia26-project-voyage-team-H-


# Team H: Live Canteen Order Tracker

> Orders update live for kitchen and customer

**Hack4Haldia'26** - 3-hour build solution by **Team H**.

## Live Deployment & Submission
- **Live URL**: Deployable on [Render](https://render.com) using the included `render.yaml` or Web Service configuration.
- **API Tester**: Available at `/tester.html` (preserves starter API tester).
- **Main App**: Available at `/` (Customer ordering + Live tracker + Kitchen Kanban + Sales Analytics).

---

## The Problem
Canteen queues are slow and unclear. We built an end-to-end real-time canteen order system with live SSE synchronization fanned out using PostgreSQL `LISTEN/NOTIFY`, background job queue ETA calculation via `pg-boss`, idempotent checkout, role-based JWT auth, audio-visual pickup notifications, and a kitchen sales analytics dashboard.

## Feature Checklist

### Core Features (Phase 1)
- [x] **Place an order with items**: validated server-side against DB menu items with calculated totals.
- [x] **Pure, unit-tested Order State Machine**: `placed -> preparing -> ready -> collected`. Invalid jumps or backward transitions rejected with 409 conflict and clear diagnostic payload.
- [x] **Concurrency protection**: `SELECT ... FOR UPDATE` row locks inside PostgreSQL transactions to eliminate race conditions.
- [x] **Audit Log**: Every transition logged to `order_events` table (`order_id, from_status, to_status, at`).
- [x] **Role-based Auth**: Kitchen actions protected with `KITCHEN_PIN` from `.env` and JWT authentication.
- [x] **Live Updates via SSE**: `GET /api/orders/stream` with initial snapshot, real-time event push, 25-second heartbeat comments, Last-Event-ID support, and `?orderId=` filtering.
- [x] **PostgreSQL LISTEN/NOTIFY fanout**: Multi-instance broadcast for real-time scale.
- [x] **Customer View**: Mobile-first menu with categories, cart drawer, live token tracker with animated stepper, and localStorage resume.
- [x] **Kitchen View**: Live Kanban board (`Placed` | `Preparing` | `Ready`), one-tap advance buttons, newest first, and sound/flash on new orders.

### Bonus Features (Phase 2 & Customer Accounts)
- [x] **Idempotent Order Creation**: Client generates a UUID per checkout attempt sent via `Idempotency-Key` header; server returns existing order (HTTP 200) without duplicating. Checkout button disables immediately on tap.
- [x] **Background Job Queue (pg-boss)**: Orders trigger an `estimate-eta` job in pg-boss to calculate preparation time based on item cooking duration and queue backlog. Advancing orders dynamically re-estimates queue ETAs.
- [x] **Customer Credential Authentication**: Sign up & log in with campus email, password (scrypt hashed with salt), and student roll. 1-click demo login included (`student@haldi.edu` / `password123`).
- [x] **MongoDB-like Document Structure & Expenditure Dashboard**:
  - `JSONB` document fields in `users` and `orders` for flexible user metadata, dietary preferences, and custom notes.
  - Live calculation of **Total Lifetime Expenditure** and **Monthly Spending Breakdown** (with budget limit progress bar and customizable target).
  - Complete historical order receipts with 1-click token view.
  - Favorite / most-ordered canteen dishes frequency analyzer.
- [x] **Multi-channel Pickup Notifications**:
  - Web Notifications API for desktop/system alerts
  - Web Audio API synthesizer for pleasant multi-tone chimes (no external audio assets required)
  - Browser tab title flashing (`🔔 ORDER READY! #123`) when window is blurred
- [x] **Kitchen Sales Analytics Dashboard (`/analytics`)**:
  - Today's revenue verified from database
  - Total order volume
  - Average kitchen preparation time (`placed -> ready` measured from audit events)
  - Active orders distribution across pipeline stages

---

## Tech Stack
- **Runtime & Server**: Node.js, Express
- **Database**: PostgreSQL (`pg` pool, auto-migrations on startup, transactional locks, `JSONB` document storage)
- **Job Queue**: `pg-boss` (PostgreSQL-backed background workers, zero Redis dependency)
- **Real-Time Layer**: Server-Sent Events (SSE) + Postgres `LISTEN/NOTIFY`
- **Security & Auth**: Role-based JWT + HTTP cookies, scrypt password hashing, sanitized inputs
- **Frontend**: Single-page vanilla JavaScript & modern CSS (mobile-first, zero build step)
- **Testing**: Built-in `node:test` and `node:assert/strict` test suite

---

## API Reference

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `GET` | `/health` | Health check & system status | None |
| `GET` | `/api/menu` | List available menu items | None |
| `POST` | `/api/orders` | Place order (supports `Idempotency-Key` header & linked user) | None / Customer |
| `GET` | `/api/orders/:id` | Fetch single order with items | None |
| `PATCH` | `/api/orders/:id` | Advance order status to next allowed state | **Kitchen** (`Bearer <token>`) |
| `GET` | `/api/orders/stream` | Live SSE stream (`?orderId=` filter optional) | None |
| `POST` | `/api/auth/register` | Customer registration with flexible profile doc | None |
| `POST` | `/api/auth/login` | Customer credential login (`{ email, password }`) | None |
| `POST` | `/api/auth/logout` | Clear session cookie | None |
| `GET` | `/api/user/profile` | Get current user profile and document data | **Customer** |
| `PATCH` | `/api/user/profile` | Update user document (budget target, preferences) | **Customer** |
| `GET` | `/api/user/expenditure` | Lifetime spend, monthly breakdown, favorite dishes & history | **Customer** |
| `POST` | `/api/auth/kitchen` | Kitchen PIN authentication (`{ pin: "1234" }`) | None |
| `GET` | `/api/analytics` | Today's revenue, order count, and avg prep time | **Kitchen** |

---

## Running Locally

1. **Clone and install dependencies**:
   ```bash
   git checkout team-h-solution
   npm install
   ```

2. **Environment Configuration**:
   ```bash
   cp .env.example .env
   # Update DATABASE_URL with your local PostgreSQL or Render Postgres connection string
   ```
   *(Note: If no PostgreSQL server is running locally, the app gracefully runs with an internal in-memory transactional mock engine so you can test all features offline!)*

3. **Run Unit & Integration Tests**:
   ```bash
   npm test
   ```

4. **Start the Application**:
   ```bash
   npm start
   # Server running at http://localhost:3000
   # API tester at http://localhost:3000/tester.html
   ```

---

## Render Deployment Guide

1. Push your branch `team-h-solution` to GitHub.
2. In [Render Dashboard](https://dashboard.render.com):
   - Click **New +** -> **Blueprint**, or create a **Web Service**.
   - Build Command: `npm install`
   - Start Command: `npm start`
3. Environment variables in Render:
   - `DATABASE_URL`: Connection string from your Render PostgreSQL instance.
   - `JWT_SECRET`: Random secret string.
   - `KITCHEN_PIN`: e.g. `1234`
4. The database auto-migrates and seeds initial menu items on first boot.
