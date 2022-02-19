const Seller = require('../models/Seller');

const getAllSellers = async (req, res) => {
  try {
    const allSellers = await Seller.find();
    return res.status(200).send(allSellers);
  } catch (error) {
    return res.status(500).send('Server Error Occured!');
  }
};

const getProducts = async (req, res) => {
  try {
    const { id } = req.params;

    const products = await Seller.findById(id).populate('products');
    return res.status(200).json({
      message: 'Successfull!',
      products,
    });
  } catch (error) {}
};

module.exports = {
  getAllSellers,
  getProducts,
};
