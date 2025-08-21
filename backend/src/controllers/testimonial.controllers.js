import Testimonial from "../models/testimonial.model.js";
import { cloudinaryUpload, deleteFromCloudinary } from "../lib/cloudinary.js";



// get all testmonial



const getAllTestimonials = async (req, res) => {

  try {

    const testimonials = await Testimonial.find();

    res.status(200).json({ success: true, data: testimonials });

  } catch (error) {

    res.status(500).json({ success: false, error: 'Server Error' });

  }

}

// create testimonial 
const createTestimonial = async (req, res) => {
  try {
    const { clientName, reviewText, company } = req.body;

    if (!clientName || !reviewText) {
      return res.status(400).json({ success: false, error: 'Client name and review text are required.' });
    }

    let uploadedPhoto = null;
    if (req.file) { // Check if a photo was provided
      uploadedPhoto = await cloudinaryUpload(req.file);
      if (!uploadedPhoto) {
        return res.status(500).json({ success: false, error: 'Image upload failed.' });
      }
    }

    const newTestimonial = new Testimonial({
      clientName,
      reviewText,
      company,
      clientPhoto: uploadedPhoto ? uploadedPhoto.secure_url : null,
      clientPhotoPublicId: uploadedPhoto ? uploadedPhoto.public_id : null,
    });

    await newTestimonial.save();
    res.status(201).json({ success: true, data: newTestimonial });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Bad Request' });
  }
};

// update testimonial
const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const existingTestimonial = await Testimonial.findById(id);
    if (!existingTestimonial) {
      return res.status(404).json({ success: false, error: 'Testimonial not found' });
    }

    const updateFields = { ...req.body };

    if (req.file) { // Check if a new photo was provided
      if (existingTestimonial.clientPhotoPublicId) {
        await deleteFromCloudinary(existingTestimonial.clientPhotoPublicId);
      }
      const uploadedPhoto = await cloudinaryUpload(req.file);
      if (!uploadedPhoto) {
        return res.status(500).json({ success: false, error: 'New photo upload failed.' });
      }
      updateFields.clientPhoto = uploadedPhoto.secure_url;
      updateFields.clientPhotoPublicId = uploadedPhoto.public_id;
    }

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: updatedTestimonial });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Bad Request' });
  }
};

// deleteTestimonial
const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = await Testimonial.findById(id);
    if (!testimonial) {
      return res.status(404).json({ success: false, error: 'Testimonial not found' });
    }

    // Delete the photo from Cloudinary if it exists
    if (testimonial.clientPhotoPublicId) {
      await deleteFromCloudinary(testimonial.clientPhotoPublicId);
    }

    // Delete the document from the database
    await Testimonial.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: 'Testimonial deleted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

export { getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial };