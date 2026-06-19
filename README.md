# VTU24373_02H_Assessment

# Full Stack Task Management Application

A simple Task Management Portal built using:

- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- Axios

The application allows users to:

- View all tasks
- Create new tasks
- Update task status
- Delete tasks
- Filter tasks by status

---

# Project Structure

```plaintext
VTU24373_02H_Assessment/
│
├── Backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── models/
│   │   └── Task.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── output/
│   ├── post.png
│   ├── get1.png
│   ├── update.png
│   └── delete.png
│
└── README.md
```

---

# Technologies Used

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv

## API Testing

- Postman

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone <repository-url>
cd VTU24373_02H_Assessment
```

---

# Backend Setup

Move to Backend directory:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Example:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/taskdb
```

---

# Run Backend Server

Using Node:

```bash
node server.js
```

Using Nodemon:

```bash
nodemon server.js
```

Backend runs on:

```plaintext
http://localhost:5000
```

---

# Database Schema

## Task Collection

| Field       | Type     |
| ----------- | -------- |
| _id         | ObjectId |
| title       | String   |
| description | String   |
| status      | String   |
| createdAt   | Date     |
| updatedAt   | Date     |

### Allowed Status Values

```plaintext
Pending
In Progress
Completed
```

---

# API Documentation

## 1. Get All Tasks

### Endpoint

```http
GET /tasks
```

### Response

```json
[
  {
    "_id": "123",
    "title": "Build Login Page",
    "description": "Create a responsive login page",
    "status": "Pending",
    "createdAt": "2026-06-20T10:00:00.000Z",
    "updatedAt": "2026-06-20T10:00:00.000Z"
  }
]
```

---

## 2. Create Task

### Endpoint

```http
POST /tasks
```

### Request Body

```json
{
  "title": "Build Login Page",
  "description": "Create a responsive login page for users",
  "status": "Pending"
}
```

### Response

```json
{
  "_id": "123",
  "title": "Build Login Page",
  "description": "Create a responsive login page for users",
  "status": "Pending"
}
```

---

## 3. Update Task Status

### Endpoint

```http
PUT /tasks/:id
```

### Request Body

```json
{
  "status": "Completed"
}
```

### Response

```json
{
  "_id": "123",
  "title": "Build Login Page",
  "description": "Create a responsive login page for users",
  "status": "Completed"
}
```

---

## 4. Delete Task

### Endpoint

```http
DELETE /tasks/:id
```

### Response

```json
{
  "message": "Task deleted successfully"
}
```

---

# API Testing Screenshots

## Create Task (POST /tasks)

Successfully created a new task.

![Create Task](./output/post.png)

---

## Get All Tasks (GET /tasks)

Retrieved all tasks from the database.

![Get Tasks](./output/get1.png)

---

## Update Task Status (PUT /tasks/:id)

Updated task status successfully.

![Update Task](./output/update.png)

---

## Delete Task (DELETE /tasks/:id)

Deleted task successfully.

![Delete Task](./output/delete.png)

---

# Assumptions

- Single-user application.
- Authentication is not required.
- MongoDB is used as the database.
- Backend runs on port 5000.
- API base URL is:

```plaintext
http://localhost:5000/tasks
```

- Task status can only be:

```plaintext
Pending
In Progress
Completed
```

---

# Error Handling

The API handles:

- Missing title
- Missing description
- Invalid task ID
- Task not found
- Database errors

Example:

```json
{
  "message": "Task not found"
}
```

---

# Git Commit Examples

```bash
git commit -m "Initial project setup"
git commit -m "Added API documentation and screenshots"
```

---

# Author

**Raunak Kumar**

Full Stack Application Developer Assessment Submission