import TaskModel from '../model/Task.js';

// Create a new task
export const createTask = async (req, res) => {
    try {
        const task = new TaskModel(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create task' });
    }
};

// Get all tasks
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
};

// Get a single task by ID
export const getTaskById = async (req, res) => {
    const { taskId } = req.params;
    try {
        const task = await TaskModel.findById(taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch task' });
    }
};

// Update a task by ID
export const updateTask = async (req, res) => {
    const { taskId } = req.params;
    try {
        const updatedTask = await TaskModel.findByIdAndUpdate(taskId, req.body, {
            new: true, // Return the updated task
        });
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
};

// Delete a task by ID
export const deleteTask = async (req, res) => {
    const { taskId } = req.params;
    try {
        const deletedTask = await TaskModel.findByIdAndRemove(taskId);
        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(204).json(); // No content (successful deletion)
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
};

// Delete all tasks
export const deleteAllTasks = async (req, res) => {
    console.log("deleteAllTasks or deleteCompletedTasks called");
    try {
        await TaskModel.deleteMany({});
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete all tasks' });
    }
};

// Delete completed tasks
export const deleteCompletedTasks = async (req, res) => {
    try {
        await TaskModel.deleteMany({ completed: true });
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete completed tasks' });
    }
};

export default  {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
    deleteAllTasks,
    deleteCompletedTasks
};
