# 📝 Task Management API

A backend-only RESTful API built with **Node.js**, **Express**, **MySQL (via Sequelize)**, and **JWT** for secure authentication.

---

## 🚀 Features

- ✅ User registration and login
- 🔐 JWT-based authentication for route protection
- 📋 Create, read, update, and delete (CRUD) tasks
- 🧑‍💻 Built following RESTful principles
- 🌐 Deployed and accessible via live URL
- 📮 Postman collection with all endpoints

---

## 🛠 Tech Stack

- **Node.js** + **Express**
- **MySQL** with **Sequelize ORM**
- **JWT** for user authentication
- **dotenv** for environment variable management

---

## 🧩 Project Structure

- config/ # Database configuration
- controllers/ # Logic for routes (auth, tasks)
- middleware/ # JWT verification
- models/ # Sequelize models (User, Task)
- routes/ # Route definitions
- .env.example # Example environment config
- server.js # App entry point

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/task-api.git
cd task-api
```

2. Install dependencies

```
npm install
```

3. Create .env file from example

```
cp .env.example .env
```

4. Fill in .env with your MySQL credentials:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=task_db
JWT_SECRET=your_jwt_secret
```

5. Create the database manually

```
CREATE DATABASE task_db;
```

6. Start the application

```
npm start
```

The app will run at: http://localhost:5000

---

🌍 Deployed API

```
Base URL: https://your-deployment-url.com
(Replace with your actual deployed URL)
```

---

🔐 Authentication Endpoints

➕ Register
POST /api/auth/register

```
{
  "email": "user@example.com",
  "password": "password123"
}
```

🔑 Login

POST /api/auth/login

```
{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:

```
{
  "token": "your_jwt_token"
}
```

📝 Task Endpoints

All routes below require this header:

```
Authorization: Bearer <your_token>
```

📌 Create Task

POST /api/tasks

```
{
  "title": "My Task",
  "description": "Details here",
  "status": "pending"
}
```

📥 Get All Tasks
GET /api/tasks

Headers:

```
Authorization: Bearer <your_token>
```

Response:

```
[
  {
    "id": 1,
    "title": "My Task",
    "description": "Details here",
    "status": "pending"
  }
]
```

🛠 Update Task
PUT /api/tasks/1

```
{
  "title": "Updated Task",
  "description": "New description",
  "status": "in-progress"
}
```

❌ Delete Task

```
DELETE /api/tasks/1
```
