import Portfolio from "../models/portfolio.model.js";

// get All portfolio
const getAllPortfolios = async (req, res) => {
    try {
        const portfolios = await Portfolio.find();
        res.status(200).json({ success: true, data: portfolios });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
}

//create portfoios

const createPortfolio = async (req , res) => {
    try {
    const newPortfolio = await Portfolio.create(req.body);
    res.status(201).json({ success: true, data: newPortfolio });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Bad Request' });
  }
}

// update Portfolio 

const updatePortfolio = async (req , res) => {
     try {
    const portfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!portfolio) {
      return res.status(404).json({ success: false, error: 'Portfolio not found' });
    }
    res.status(200).json({ success: true, data: portfolio });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Bad Request' });
  }
}

//deletePortfolio

const deletePortfolio = async (req , res) => {
    try {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ success: false, error: 'Portfolio not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}

export { getAllPortfolios, createPortfolio, updatePortfolio, deletePortfolio }  ; 