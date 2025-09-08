This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





# 📝 Ojo – Blogging Platform

Ojo is a modern blogging platform built with a **Next.js frontend**, a **Go backend**, and **PostgreSQL** for data storage.  
The project is **still in progress** – the frontend is functional, while the backend and database integration are under development.
The goal of Ojo is to provide a minimal, fast, and scalable platform for creating and sharing blogs.

---

## 🚀 Features
- ✨ Clean and responsive **Next.js frontend**
- ⚡ High-performance **Go backend API**
- 🗄️ **PostgreSQL** database for persistent storage
- 🛡️ RESTful architecture with scalability in mind
- 🔐 User authentication and role-based access (planned)
- 📝 Markdown support for blog posts (planned)

---

## 🏗️ Tech Stack
**Frontend**
- [Next.js](https://nextjs.org/) – React framework for SSR/SSG
- Tailwind CSS – Styling

**Backend**
- Go (Golang) – REST API
- Fiber / Gin (TBD) – Web framework

**Database**
- PostgreSQL – Relational database
- GORM / SQLC (TBD) – ORM or query builder

---

## 📂 Project Structure
ojo/
├── frontend/ # Next.js app
├── backend/ # Go backend
└── database/ # SQL migrations / schema

--

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ManInTheHam/ojo.git
cd ojo
```
### 2. Run the frontend
```bash
cd frontend
npm install
npm run dev
```
App runs on: http://localhost:3000

### 3. Run the backend
```bash
cd backend
go run main.go
```
### 4. Setup PostgreSQL
- Install PostgreSQL and create a database ojo.
- Update your backend/config.yaml (or .env) with DB credentials:
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=ojo
DB_PORT=5432

## 📌 Roadmap

- Authentication & Authorization
- Blog post creation, editing, deletion
- Rich text & Markdown support
- Tags and categories
- Comments system
- Deployment with Docker & CI/CD

 ## 🤝 Contributing
Contributions are welcome!
Please open an issue or submit a pull request to suggest improvements

## 📜 License
MIT License © 2025 ManInTheHam
