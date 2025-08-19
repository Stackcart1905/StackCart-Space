import express from "express";

import { getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from "../controllers/testimonial.controllers.js";
import protectRoute from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/" , getAllTestimonials) ; 
router.post("/" , protectRoute ,  createTestimonial) ; 
router.put("/:id" , protectRoute ,  updateTestimonial) ; 
router.delete("/:id" , protectRoute ,  deleteTestimonial) ; 

export default router;
