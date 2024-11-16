// routes/taskRoutes.js
const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, getTasks)    // Get all tasks for the authenticated user
  .post(protect, createTask); // Create a new task

router.route('/:id')
  .put(protect, updateTask)   // Update a specific task
  .delete(protect, deleteTask); // Delete a specific task

module.exports = router;
 
