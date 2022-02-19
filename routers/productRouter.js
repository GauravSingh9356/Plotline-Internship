const express = require('express');
const {
  createProduct,
  getProduct,
} = require('../controllers/productController');
const router = express.Router();

router.route('/createProduct').post(createProduct);
router.route('/:id').get(getProduct);

module.exports = router;
