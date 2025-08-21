import express from "express";
import {
  getAllTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonial.controllers.js";
import protectRoute from "../middleware/authmiddleware.js";
import uploadMiddleware from "../middleware/multerMiddleware.js"; // Import your multer setup

const router = express.Router();

router.get("/", getAllTestimonials);
router.post(
  "/",
  protectRoute,
  uploadMiddleware.single("clientPhoto"),
  createTestimonial
);
router.patch(
  "/:id",
  protectRoute,
  uploadMiddleware.single("clientPhoto"),
  updateTestimonial
);
router.delete("/:id", protectRoute, deleteTestimonial);

export default router;
