# 📝 Ojo – Blogging Platform

Ojo is a modern blogging platform built with a **Next.js frontend**, a **Go backend**, and **PostgreSQL** for data storage.  
The project is **still in progress** – the frontend is functional, while the backend and database integration are under development.
The goal of Ojo is to provide a minimal, fast, and scalable platform for creating and sharing blogs.



## 🚀 Features
- ✨ Clean and responsive **Next.js frontend**
- ⚡ High-performance **Go backend API**
- 🗄️ **PostgreSQL** database for persistent storage
- 🛡️ RESTful architecture with scalability in mind
- 🔐 User authentication and role-based access (planned)
- 📝 Markdown support for blog posts (planned)



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



## 📂 Project Structure
```bash
ojo/
├── frontend/ # Next.js app
├── backend/ # Go backend
└── database/ # SQL migrations / schema
```


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

- Blog post creation, editing, deletion
- Rich text & Markdown support
- Tags and categories
- Deployment with Docker & CI/CD

 ## 🤝 Contributing
Contributions are welcome!
Please open an issue or submit a pull request to suggest improvements

## 📜 License
MIT License © 2025 ManInTheHam
