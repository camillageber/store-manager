const productsModel = require('../models/productsModel');

const findProducts = async () => {
  const result = await productsModel.findProducts();
  return { type: null, message: result };
};

const findProductsById = async (id) => {
  const result = await productsModel.findProductsById(id);
  if (!result) {
    return ({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' }); 
    }
    return { type: null, message: result };
};

module.exports = {
  findProducts,
  findProductsById,
};
