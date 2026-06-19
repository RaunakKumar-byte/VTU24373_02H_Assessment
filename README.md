# VTU24373_02H_Assessment


# Project Name

Full Stack Task Management Application

## Project Structure

```plaintext
project-root/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   └── AddTask.jsx
│   │   │
│   │   ├── services/
│   │   │   └── taskService.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── App.css
│   │
│   └── package.json
│
└── backend/
    ├── config/
    │   └── db.js
    │
    ├── models/
    │   │── Task.js
    │
    ├── controllers/
    │   └── taskController.js
    │
    ├── routes/
    │   └── taskRoutes.js
    │
    ├── server.js
    └── package.json
```

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone <repository-url>
```

Move into project directory:

```bash
cd project-root
```

---

# Install Dependencies

## Frontend

Move to frontend:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Start frontend server:

```bash
npm run dev
```

OR (if configured)

```bash
npm start
```

Frontend will run on:

```plaintext
http://localhost:5173
```

---

## Backend

Open another terminal.

Move to backend:

```bash
cd project-root
cd backend
```

Install packages:

```bash
npm install
```

Start backend server:

Using Node:

```bash
node server.js
```

OR using Nodemon:

```bash
nodemon server.js
```

Backend will run on:

```plaintext
http://localhost:5000
```

---

# Environment Variables (Optional)

Create `.env` inside backend:

```env
PORT=5000
MONGO_URI=your_database_connection
```

---

# API Testing

Use:

* Postman
* Thunder Client
* Browser

Example:

```plaintext
GET http://localhost:5000/api/tasks
```

---

# Assumptions

* Node.js is installed.
* npm is installed.
* MongoDB database is running.
* Frontend and backend run in separate terminals.
* Backend API port is `5000`.
* Frontend default Vite port is `5173`.
* API base URL is configured in `taskService.js`.

---

# Useful Commands

```bash
# Install dependencies
npm install

# Start frontend
cd frontend
npm run dev

# Start backend
cd backend
nodemon server.js
```

---

# Author

Raunak Kumar
Software Engineering Student
