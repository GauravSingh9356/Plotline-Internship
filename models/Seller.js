const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  sellerName: {
    type: String,
    trim: true,
    minlength: 3,
    required: [true, 'Please provide Seller name!'],
  },
  products: [
    {
      type: mongoose.Schema.ObjectId,
    },
  ],
  sellerId: {
    type: String,
  },
});

module.exports = mongoose.model('Seller', sellerSchema);
