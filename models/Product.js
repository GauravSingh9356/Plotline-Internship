const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 3,
    required: [true, 'Product must have a name!'],
  },
  price: {
    type: String,
    required: [true, 'Product must have a price!'],
  },
  productId: {
    type: String,
  },
});

module.exports = mongoose.model('Product', productSchema);
