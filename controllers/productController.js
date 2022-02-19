const Product = require('../models/Product');

const createProduct = async (req, res) => {
  try {
    const { name, price, productId } = req.body;
    if (!name || !price || !productId) {
      return res
        .status(500)
        .send('Either name or price or productId is missing!');
    }

    const product = await Product.create({
      namne: name,
      productId: productId,
      price: price,
    });

    return res.status(200).json({
      message: 'Product is created!',
      product,
    });
  } catch (error) {
    return res.status(500).send('Server Error');
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) return res.status(404).send('Product not found!');
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send('Server Error found!');
  }
};

module.exports = {
  createProduct,
  getProduct,
};
