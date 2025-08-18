import ContactFormSubmission from "../models/contactForm.model.js";


// submit contact form 

const submitContactForm = async (req , res) => {
    try {
    const newSubmission = await ContactFormSubmission.create(req.body);
     
    // add logic here to send email to admin directly 
   
    res.status(201).json({ success: true, data: newSubmission });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Bad Request' });
  }
}

export { submitContactForm };