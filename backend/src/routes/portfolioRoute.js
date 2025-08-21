import express from "express";
import {
  getAllPortfolios,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} from "../controllers/portfolio.controllers.js";
import protectRoute from "../middleware/authmiddleware.js";
import uploadMiddleware from "../middleware/multerMiddleware.js"; // Assume this is your multer instance

const router = express.Router();

router.get("/", getAllPortfolios);

router.post(
  "/",
  protectRoute,
  uploadMiddleware.fields([
    // Use .fields for multiple data of req.file
    { name: "beforeImage", maxCount: 1 },
    { name: "afterImage", maxCount: 1 },
  ]),
  createPortfolio
);

router.patch(
  "/:id",
  protectRoute,
  uploadMiddleware.fields([
    //  Use .fields for updates multi data req.file
    { name: "beforeImage", maxCount: 1 },
    { name: "afterImage", maxCount: 1 },
  ]),
  updatePortfolio
);

router.delete("/:id", protectRoute, deletePortfolio);

export default router;
