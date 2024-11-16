# Personal Task Manager Using MERN

## Project Overview

The Personal Task Manager is a web-based application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to manage their daily tasks, track progress, and boost productivity. Key features include task creation, updating, deletion, and real-time status updates.

---

## Features

- User Authentication: Secure login and registration system.
- Task Management: Add, edit, delete, and update tasks.
- Real-Time Updates: Reflects changes instantly across the application.
- Responsive Design: Accessible on both desktop and mobile devices.
- Persistent Data: Stores tasks securely in a MongoDB database.

---

## Technologies Used

- Frontend: React, HTML, CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Styling: Bootstrap, Material-UI

---

## Project Structure

- config/: Contains configuration files (e.g., database connection).
- controllers/: Contains the logic for handling API requests.
- middleware/: Contains middleware for request handling, such as authentication.
- models/: Defines database schemas for tasks and users.
- routes/: Defines API endpoints for tasks and authentication.
- task-manager-frontend/: Contains React code for the frontend.
- package.json & package-lock.json: Define backend dependencies.
- server.js: Entry point for the backend server.

---

## Setup and Installation

### Navigate to the Project Directory
cd Personal-Task-Manager

### Install Backend Dependencies
npm install

### Create Environment Variables
Create a `.env` file in the root directory with:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

### Run the Backend Server
npm start

### Navigate to the Frontend Directory
cd task-manager-mern/task-manager-frontend

### Install Frontend Dependencies
npm install

### Run the Frontend Server
npm start

### Access the Application
Open your browser and go to http://localhost:3000

---

## Usage Instructions

- Register/Login: Create an account or log in to access your task manager.
- Add Task: Add a new task with a title and description.
- Edit Task: Modify task details as needed.
- Delete Task: Remove tasks you no longer need.
- Mark as Complete: Update the status of tasks to "Complete" once finished.
