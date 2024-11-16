// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the database connection function
const authRoutes = require('./routes/authRoutes'); // Authentication routes
const taskRoutes = require('./routes/taskRoutes'); // Task management routes

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Middleware to parse JSON requests

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/auth', authRoutes); // Mount authentication routes at /api/auth
app.use('/api/tasks', taskRoutes); // Mount task routes at /api/tasks

// Root route for testing server availability
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
