# 🌍 Zero-Waste Marketplace

A full-stack, comprehensive web platform aimed at fighting food waste by connecting **Donors** (restaurants, individuals, businesses with surplus food) directly with **Collectors / NGOs** who can distribute it to those in need.

## 🚀 What We've Built

This project serves as a complete ecosystem for managing food donations. Key features include:

*   **Role-based Access Control:** Distinct experiences and dashboards for Donors and NGOs.
*   **Authentication:** Secure registration and login using NextAuth and bcrypt.
*   **Donation Listings:** Donors can quickly list surplus food with details (quantity, type, pickup time, etc.).
*   **Interactive Maps:** NGOs can discover available donations near them using a live interactive map.
*   **Transaction Management:** Seamless claiming process to connect Donors and Collectors.
*   **Gamification & Trust:** Users earn **FeedPoints** for their contributions, climb a **Leaderboard**, maintain streaks, and can review/rate transactions to build a Trust Score.
*   **Prize Pools & Subscriptions:** Advanced features including monthly prize draws and premium subscription tiers to keep users engaged.

## 💻 Tech Stack

Our platform is built using modern, production-ready technologies:

### **Frontend**
*   **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
*   **UI Library:** [React 18](https://react.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Maps:** [React-Leaflet](https://react-leaflet.js.org/) & Leaflet
*   **Icons & Components:** clsx, tailwind-merge
*   **Language:** TypeScript

### **Backend & Database**
*   **API Routes:** Next.js Serverless Route Handlers
*   **Database ORM:** [Prisma](https://www.prisma.io/)
*   **Database:** PostgreSQL (Standard & Unpooled connections)
*   **Authentication:** [NextAuth.js](https://next-auth.js.org/)
*   **Data Validation:** [Zod](https://zod.dev/)
*   **Security:** bcryptjs (password hashing)

---

## 👥 Team Division (4 Members)

To complete or expand upon a project of this scale efficiently, it can be easily divided into 4 core functional domains. Here is a recommended workload distribution for a team of 4 people:

### **Member 1: Authentication & User Profiles 🔐**
*   **Focus:** Security, Identity, and Personalization
*   **Responsibilities:**
    *   Set up and maintain NextAuth.js configurations.
    *   Build Login and Registration forms (with Zod validation).
    *   Create profile management pages (updating details, password changes).
    *   Manage role-based UI rendering (showing different components to Donors vs. NGOs).

### **Member 2: Listings & Transactions 📋**
*   **Focus:** The Core Business Logic
*   **Responsibilities:**
    *   Develop the database schema (Prisma) for Listings and Transactions.
    *   Build APIs for creating, reading, updating, and deleting (CRUD) food listings.
    *   Implement the "Claiming Workflow" (when an NGO clicks "Claim").
    *   Build the Dashboards where users can see their active, pending, and completed donations/claims.

### **Member 3: Maps Integration & Discovery 🗺️**
*   **Focus:** Spatial Data and UI/UX Discovery
*   **Responsibilities:**
    *   Integrate React-Leaflet into the application.
    *   Convert addresses to latitude/longitude coordinates (Geocoding).
    *   Build the interactive map where NGOs can view active listings via map pins.
    *   Implement filtering and search functionalities (e.g., search by city, food type).

### **Member 4: Gamification & Rewards 🏆**
*   **Focus:** User Engagement and Retention
*   **Responsibilities:**
    *   Build the points system (FeedPoints logging based on actions).
    *   Create the Leaderboard page to rank users by points or meals donated.
    *   Implement the Rating and Review system for completed transactions to calculate Trust Scores.
    *   Manage the "Prize Pool" logic and UI (monthly draws, calculating pool amounts).

---

## 🛠️ Getting Started Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Setup Environment Variables:**
   Duplicate `.env.example` as `.env` and fill in your Database URLs and NextAuth secrets.
3. **Database Migration:**
   ```bash
   npm run db:push
   ```
4. **Seed Mock Data:**
   ```bash
   npm run db:seed
   ```
5. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   *The application will be available at http://localhost:3000.*
