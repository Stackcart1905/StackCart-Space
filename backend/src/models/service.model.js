import mongoose from 'mongoose' ; 

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  icon: {
    type: String, // Store service icon in url or class name  // use icon library instead of image directly 
    required: true,
  },
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;
