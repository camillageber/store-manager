const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.findProducts);
router.get('/:id', productsController.findProductsById);

module.exports = router;
