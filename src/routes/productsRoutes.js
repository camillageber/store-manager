const express = require('express');
const productsController = require('../controllers/productsController');
const productsValidations = require('../middlewares/schemas/productsValidations');

const router = express.Router();

router.get('/', productsController.findProducts);
router.get('/:id', productsController.findProductsById);
router.post('/', productsValidations.productValidation, productsController.createProduct);
router.put('/:id', productsValidations.productValidation, productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;