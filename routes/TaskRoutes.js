import express from 'express';
import taskController from '../controllers/TaskController.js';
const router = express.Router();

router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/:taskId', taskController.getTaskById);
router.put('/:taskId', taskController.updateTask);
router.delete('/all', taskController.deleteAllTasks);
router.delete('/completed', taskController.deleteCompletedTasks);
router.delete('/:taskId', taskController.deleteTask);

export default router;
