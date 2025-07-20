import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";


import connectDB from './config/mongodb.js';
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT || 4000;

if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI is not defined in environment variables");
  process.exit(1);
}


connectDB().catch(err => {
  console.error("Database connection failed", err);
  process.exit(1);
});

const allowedOrigins = ['http://localhost:5173'];

// Middlewares


app.use(express.urlencoded({extended:true}))

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// API Endpoints
app.get('/', (req, res) => res.send("Server is running"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => console.log(`Server started on port: ${port}`));