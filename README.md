# Express MySQL CRUD API

A simple RESTful API built using **Node.js**, **Express.js**, and **MySQL** following the **MVC (Model-View-Controller)** architecture. This project demonstrates how to perform basic CRUD (Create, Read, Update, Delete) operations on a `users` table in a MySQL database.

---

## 🚀 Features

- List all users
- Get user by ID
- Create new user
- Update existing user
- Delete user
- Organized using MVC structure for clean code separation

---

## 🏗️ Project Structure

```
project/
│
├── app.js                 # Main server entry point
├── controllers/
│   └── userController.js  # Request handlers
├── models/
│   └── userModel.js       # MySQL queries
└── routes/
    └── userRoutes.js      # API endpoints
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/express-mysql-crud-api.git
cd express-mysql-crud-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your MySQL database

```sql
CREATE DATABASE crud_example;

USE crud_example;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);
```

### 4. Update DB connection (if needed)

In `app.js`, change your database connection credentials if necessary:

```js
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_example',
});
```

### 5. Start the server

```bash
node app.js
```

---

## 📡 API Endpoints

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| GET    | `/user`        | Get all users        |
| GET    | `/user/:id`    | Get user by ID       |
| POST   | `/user`        | Create new user      |
| PUT    | `/user/:id`    | Update user by ID    |
| DELETE | `/user/:id`    | Delete user by ID    |

> Make sure to use `Content-Type: application/json` for POST and PUT requests.

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MySQL
- JavaScript (ES6 modules)

---

## 📄 License

This project is licensed under the MIT License.

