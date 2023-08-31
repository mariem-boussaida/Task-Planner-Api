import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

mongoose.connect('mongodb://localhost:27017/taskplanner', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
