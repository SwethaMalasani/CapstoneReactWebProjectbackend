import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import employeeRoutes from './routes/employeeRoutes.js'
import cors from 'cors';


// Setups
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3000;

// DB Connection
connectDB();

// Middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Routes
app.use('/api/employeesystem', employeeRoutes);

// Listen
app.listen(PORT, () => {
  console.log(`Server is now running on port: ${PORT}`);
});
