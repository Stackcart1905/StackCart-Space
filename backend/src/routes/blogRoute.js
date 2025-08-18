import express from "express" ; 
import {  getAllBlog,getBlogById,createBlogPost,updateBlogPost,deleteBlogPost } from "../controllers/blog.controllers.js" ; 
import protectRoute from "../middleware/authMiddleware.js" ;



const router = express.Router() ;

router.get("/", getAllBlog);
router.get("/:id", protectRoute ,  getBlogById);
router.post("/", protectRoute ,  createBlogPost);
router.put("/:id", protectRoute ,  updateBlogPost);
router.delete("/:id", protectRoute , deleteBlogPost);


export default router;


