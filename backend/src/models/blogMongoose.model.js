
import mongoose from 'mongoose' ; 

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  tags: [String], // Categories for the blog post
});

const Blog  = mongoose.model('Blog', blogSchema);

export default Blog;
