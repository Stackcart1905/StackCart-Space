import dotenv from 'dotenv' ;
   dotenv.config()  ; 
   
import express from 'express' ; 
import cors from 'cors' ;
import { connectDB } from './lib/db.js';
import authRoutes from "./routes/authRoute.js"
import blogRoutes from './routes/blogRoute.js';
import contactRoute from './routes/contactRoute.js';
import portfolioRoute from './routes/portfolioRoute.js';
import testimonialRoute from './routes/testimonialRoutes.js';
import serviceRoute from './routes/serviceRoute.js';





const app  = express () ; 
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// cors origin allow from everyehere
app.use(cors());


app.use("/api/auth" , authRoutes)
app.use("/api/blog" , blogRoutes)
app.use("/api/contact" , contactRoute)
app.use("/api/portfolio" , portfolioRoute)
app.use("/api/testimonial" , testimonialRoute)
app.use("/api/service" , serviceRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});