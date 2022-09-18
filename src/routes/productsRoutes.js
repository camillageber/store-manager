const express = require('express');
const productsController = require('../controllers/productsController');
const productsValidations = require('../middlewares/schemas/productsValidations');

const router = express.Router();

router.get('/', productsController.findProducts);
router.get('/:id', productsController.findProductsById);
router.post('/', productsValidations.productValidation, productsController.createProduct);

module.exports = router;