// controllers/taskController.js
const Task = require('../models/Task');

// Get all tasks for the authenticated user
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }); // Fetch tasks for the logged-in user
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

// Create a new task
const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = new Task({
      user: req.user.id,
      title,
      description,
    });
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task' });
  }
};

// Update an existing task
const updateTask = async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // Ensure that only the owner can update the task
    if (task.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'User not authorized' });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed ?? task.completed;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task' });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // Ensure that only the owner can delete the task
    if (task.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'User not authorized' });
    }

    await task.remove();
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task' });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
 
