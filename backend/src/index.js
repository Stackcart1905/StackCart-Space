import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/authRoute.js";
import blogRoutes from "./routes/blogRoute.js";
import contactRoute from "./routes/contactRoute.js";
import portfolioRoute from "./routes/portfolioRoute.js";
import testimonialRoute from "./routes/testimonialRoutes.js";
import serviceRoute from "./routes/serviceRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// cors origin allow from everywhere
import cors from "cors";

app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local frontend (Vite/React)
      "http://localhost:3001", // Another local dev port if needed
      "https://stackcart-space.vercel.app", // Your deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // if you send cookies or auth headers
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/contact", contactRoute);
app.use("/api/portfolio", portfolioRoute);
app.use("/api/testimonial", testimonialRoute);
app.use("/api/service", serviceRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
