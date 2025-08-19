import Testimonial from "../models/testimonial.model.js" ; 

// get all testmonial 

const getAllTestimonials = async (req , res) => {
    try {
    const testimonials = await Testimonial.find();
    res.status(200).json({ success: true, data: testimonials });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}

// create testimonial 

const createTestimonial = async (req , res) => {
   try {
    const newTestimonial = await Testimonial.create(req.body);
    res.status(201).json({ success: true, data: newTestimonial });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Bad Request' });
  } 
}

// update testimonial

const updateTestimonial = async (req , res) => {
     try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!testimonial) {
      return res.status(404).json({ success: false, error: 'Testimonial not found' });
    }
    res.status(200).json({ success: true, data: testimonial });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Bad Request' });
  }
}

// deleteTestimonial 

const deleteTestimonial = async (req , res ) => {
     try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ success: false, error: 'Testimonial not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}


export { getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial };