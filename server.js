import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user-routes.js';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://admin:pFwbdYkahqMSh5oE@cluster0.ln05gdr.mongodb.net/TaskPlanner?retryWrites=true&w=majority';

app.use('/user', userRouter);

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
