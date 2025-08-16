import mongoose from 'mongoose' ; 

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
  afterImage: {
    type: String, // URL to the hosted 'after' image
    required: true,
  },

//   tags: {
//   type: [String],   
//   required: false, 
//   default: []       
// }

  tags: [String], // An array of strings for filtering
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;
