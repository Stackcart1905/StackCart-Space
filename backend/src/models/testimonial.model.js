import mongoose from 'mongoose'; 

const testimonialSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
    trim: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  clientPhoto: {
    type: String, // URL to the client's photo
    required: false, // Optional
  },
  company: {
    type: String,
    required: false,
    trim: true,
  },
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);
export default Testimonial;
