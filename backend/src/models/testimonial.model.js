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
    required: false,
  },
  clientPhotoPublicId: { //  this field only help in delte image from cloudinaru 
    type: String,
    required: false, // Optional, since the photo is also false
  },
  company: {
    type: String,
    required: false,
    trim: true,
  },
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);
export default Testimonial;