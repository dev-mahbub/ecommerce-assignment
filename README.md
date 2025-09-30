# 🛍️ FED25 – Mini eCommerce Web App

Ecommerce Assignment built with **Next.js 15 (App Router)** and **Tailwind CSS** as part of the FED25 assignment.  
It includes a **pixel-perfect landing page**, **authentication system**, and a **dashboard** powered by custom APIs.

---

## 🚀 Features

### 1. Landing Page
- Pixel-perfect responsive UI from the provided **Figma design**.  
- Styled fully with **Tailwind CSS utility classes**.  

### 2. Authentication
- Email/password login with credentials:
admin@example.com / admin123

markdown

- Built with a **custom API route (`/api/auth/login`)**.  
- Redirects:
- ✅ Successful login → `/dashboard`  
- 🚪 Logout → back to landing page  

### 3. Dashboard (Protected Route)
- Accessible only after login.  
- Custom mock APIs:
- `/api/products` → product list  
- `/api/orders` → orders list  
- `/api/stats` → summary stats  
- Displays:
- 📊 Summary cards (Orders, Revenue, Customers, etc.)  
- 📦 Products table (ID, Name, Price, Stock, Category)  
- 🧾 Orders table (ID, Customer, Amount, Status)  
- Includes **loading** and **error** states.  

### 4. Tech Stack
- ⚡ **Next.js 15 (App Router)**  
- 🎨 **Tailwind CSS**  
- 🪝 **React hooks** (state management)  
- 🔐 Custom **API routes** for auth & mock data  
- 🌙 Optional **dark mode** support (bonus)  

---

## 📂 Project Structure

src/
├─ app/
│ ├─ api/
│ │ ├─ auth/
│ │ │ └─ login/route.ts # Login API
│ │ ├─ products/route.ts # Products API
│ │ ├─ orders/route.ts # Orders API
│ │ └─ stats/route.ts # Stats API
│ ├─ dashboard/ # Dashboard pages
│ ├─ auth/ # Login/Register pages
│ └─ page.tsx # Landing page
├─ components/ # Reusable components
└─ hooks/ # Custom hooks


## 🔑 Credentials

Use the following login to access the dashboard:

Email: admin@example.com
Password: admin123


## 🛠️ Getting Started

### 1. Clone repo

git clone https://github.com/dev-mahbub/ecommerce-assingment.git

2. Install dependencies

npm install
3. Run development server


npm run dev
App will be available at http://localhost:3000.
