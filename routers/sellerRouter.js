const express = require('express');
const {
  getAllSellers,
  getProducts,
} = require('../controllers/sellerController');
const router = express.Router();

router.route('/').get(getAllSellers);
router.route('/products/:id').get(getProducts);

module.exports = router;
