import express from 'express';
import TaskController from '../controllers/TaskController.js';
const router = express.Router();

// Create a new task
router.post('/', TaskController.createTask);

// Get all tasks
router.get('/', TaskController.getAllTasks);

// Get a task by ID
router.get('/:taskId', TaskController.getTaskById);

// Update a task by ID
router.put('/:taskId', TaskController.updateTask);

// Delete a task by ID
router.delete('/:taskId', TaskController.deleteTask);

export default router;
