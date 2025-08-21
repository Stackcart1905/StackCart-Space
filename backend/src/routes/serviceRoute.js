import express from "express";
import {
  getAllServices,
  createService,
  updateService,
  deleteService,
} from "../controllers/service.controllers.js";
import protectRoute from "../middleware/authmiddleware.js";

const router = express.Router();

router.get("/", getAllServices);
router.post("/", protectRoute, createService);
router.put("/:id", protectRoute, updateService);
router.delete("/:id", protectRoute, deleteService);

export default router;
