import mongoose from 'mongoose'; 

const portfolioSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  beforeImage: {
    type: String, // URL to the hosted 'before' image
    required: true,
  },
  beforeImagePublicId: { // Add this field for cloudinary deletion image
    type: String,
    required: true,
  },
  afterImage: {
    type: String, // URL to the hosted 'after' image
    required: true,
  },
  afterImagePublicId: { // Add this field for cloudinary deletion image
    type: String,
    required: true,
  },
  tags: [String],
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;