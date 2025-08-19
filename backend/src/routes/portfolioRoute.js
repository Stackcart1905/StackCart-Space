import express from "express" ; 
import { getAllPortfolios, createPortfolio, updatePortfolio, deletePortfolio } from "../controllers/portfolio.controllers.js";
import protectRoute from "../middleware/authMiddleware.js" ;

const router = express.Router() ; 


router.get("/" , getAllPortfolios) ; 
router.post("/" , protectRoute, createPortfolio) ; 
router.put("/:id" , protectRoute, updatePortfolio) ; 
router.delete("/:id" , protectRoute, deletePortfolio) ; 

export default router;

