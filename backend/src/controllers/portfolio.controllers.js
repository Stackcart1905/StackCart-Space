import Portfolio from "../models/portfolio.model.js";
import { cloudinaryUpload, deleteFromCloudinary } from "../lib/cloudinary.js";

// get All portfolio

const getAllPortfolios = async (req, res) => {
    try {
        const portfolios = await Portfolio.find();
        res.status(200).json({ success: true, data: portfolios });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
}

// create portfoios
const createPortfolio = async (req, res) => {

    try {
        const { projectName, description, tags } = req.body;

        // Ensure both required images are present
        if (!req.files || !req.files.beforeImage || !req.files.afterImage) {
            return res.status(400).json({ success: false, error: 'Both before and after images are required.' });
        }
        
        // Upload both images to Cloudinary
        const uploadedBeforeImage = await cloudinaryUpload(req.files.beforeImage[0]); // 0 index contain buffer data
        const uploadedAfterImage = await cloudinaryUpload(req.files.afterImage[0]);

        if (!uploadedBeforeImage || !uploadedAfterImage) {
            return res.status(500).json({ success: false, error: 'Image upload failed.' });
        }

        const newPortfolio = new Portfolio({
            projectName,
            description,
            beforeImage: uploadedBeforeImage.secure_url,
            beforeImagePublicId: uploadedBeforeImage.public_id,
            afterImage: uploadedAfterImage.secure_url,
            afterImagePublicId: uploadedAfterImage.public_id,
            tags: tags ? tags.split(',') : [],
        });
        
        await newPortfolio.save();
        res.status(201).json({ success: true, data: newPortfolio });
    } catch (error) {
        res.status(400).json({ success: false, error: 'Bad Request' });
    }
}

// update Portfolio 
const updatePortfolio = async (req, res) => {
    try {
        const { id } = req.params;
        const existingPortfolio = await Portfolio.findById(id);
        if (!existingPortfolio) {
            return res.status(404).json({ success: false, error: 'Portfolio not found' });
        }

        const updateFields = { ...req.body };

        // Handle 'beforeImage' update
        if (req.files && req.files.beforeImage) {
            if (existingPortfolio.beforeImagePublicId) {
                await deleteFromCloudinary(existingPortfolio.beforeImagePublicId);
            }
            const uploadedImage = await cloudinaryUpload(req.files.beforeImage[0]);
            if (uploadedImage) {
                updateFields.beforeImage = uploadedImage.secure_url;
                updateFields.beforeImagePublicId = uploadedImage.public_id;
            }
        }

        // Handle 'afterImage' update
        if (req.files && req.files.afterImage) {
            if (existingPortfolio.afterImagePublicId) {
                await deleteFromCloudinary(existingPortfolio.afterImagePublicId);
            }
            const uploadedImage = await cloudinaryUpload(req.files.afterImage[0]);
            if (uploadedImage) {
                updateFields.afterImage = uploadedImage.secure_url;
                updateFields.afterImagePublicId = uploadedImage.public_id;
            }
        }
        
        const updatedPortfolio = await Portfolio.findByIdAndUpdate(id, updateFields, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({ success: true, data: updatedPortfolio });
    } catch (error) {
        res.status(400).json({ success: false, error: 'Bad Request' });
    }
}

// deletePortfolio
const deletePortfolio = async (req, res) => {
    try {
        const { id } = req.params;
        const portfolio = await Portfolio.findById(id);

        if (!portfolio) {
            return res.status(404).json({ success: false, error: 'Portfolio not found' });
        }

        // Delete both images from Cloudinary
        await deleteFromCloudinary(portfolio.beforeImagePublicId);
        await deleteFromCloudinary(portfolio.afterImagePublicId);

        // Delete the document from the database
        await Portfolio.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: 'Portfolio deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
}

export { getAllPortfolios, createPortfolio, updatePortfolio, deletePortfolio };