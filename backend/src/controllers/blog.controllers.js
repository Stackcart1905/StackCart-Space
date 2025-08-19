import Blog from "../models/blogMongoose.model.js" ; 

// get blog
const getAllBlog = async (req , res) => {
    try {
    const posts = await Blog.find();
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}

// get blogby id 
 const getBlogById = async (req ,res) => {
     try {
    const post = await Blog.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
 }


 // create blog 

 const createBlogPost = async (req , res ) => {
     try {
    const newPost = await Blog.create(req.body);
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Bad Request' });
  }
 }

 //  update blog

 const updateBlogPost = async (req , res) => {
    try {
    const post = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!post) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Bad Request' });
  }
 }

 //   delete blog 

 const deleteBlogPost = async (req , res) => {
     try {
    const post = await Blog.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
 }

 export {
    getAllBlog,
    getBlogById,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost
} ; 