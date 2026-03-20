# 🌍 Zero-Waste Management

A comprehensive web platform aimed at fighting food waste by connecting **Donors** (restaurants, individuals, businesses with surplus food) directly with **Collectors / NGOs** who can distribute it to those in need.

## 🚀 Key Features

*   **Role-based Dashboards:** Dedicated experiences for both Donors and NGOs.
*   **Secure Authentication:** User registration and login powered by NextAuth and bcrypt.
*   **Easy Food Listings:** Donors can quickly list surplus food with essential details (quantity, dietary tags, pickup time).
*   **Interactive Discovery Map:** NGOs can easily find available food donations near them using a live interactive map.
*   **Seamless Transactions:** A straight-forward claiming process connecting Donors directly with Collectors.
*   **Gamification & Trust System:** 
    *   **FeedPoints:** Earn points for every successful donation or collection.
    *   **Trust Score:** Rate and review transactions to build community trust.
    *   **Leaderboard:** See top contributors on the platform.

## 💻 Tech Stack

*   **Frontend:** [Next.js 14](https://nextjs.org/) (App Router), React 18, [Tailwind CSS](https://tailwindcss.com/)
*   **Maps:** [React-Leaflet](https://react-leaflet.js.org/) & Leaflet
*   **Backend:** Next.js Serverless Route Handlers
*   **Database ORM:** [Prisma](https://www.prisma.io/)
*   **Database:** PostgreSQL
*   **Authentication:** [NextAuth.js](https://next-auth.js.org/)
*   **Validation:** [Zod](https://zod.dev/)

---

## 🛠️ Getting Started Locally

### Prerequisites
Make sure you have Node.js and npm installed on your machine. You will also need a PostgreSQL database.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Osheenjain646/Zero-Waste-Management.git
   cd Zero-Waste-Management
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Setup Environment Variables:**
   Duplicate the `.env.example` file and rename it to `.env`:
   ```bash
   cp .env.example .env
   ```
   *Fill in your Database URLs (`DATABASE_URL` and `DATABASE_URL_UNPOOLED`) and NextAuth secrets in the `.env` file.*

4. **Database Migration:**
   Generate the Prisma client and push the schema to your database:
   ```bash
   npm run db:push
   ```

5. **Seed Mock Data (Optional):**
   Populate the database with sample users and listings:
   ```bash
   npm run db:seed
   ```

6. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   
Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📄 License
This project is licensed under the MIT License.
