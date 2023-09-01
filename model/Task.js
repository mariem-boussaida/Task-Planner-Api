// models/TaskModel.js
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    completed: Boolean,
});

const TaskModel = mongoose.model('Task', taskSchema);

export default TaskModel;
