const productsModel = require('../models/productsModel');

const findProducts = async () => {
  const result = await productsModel.findProducts();
  return { type: null, message: result };
};

const findProductsById = async (id) => {
  const result = await productsModel.findProductsById(id);
  if (result.length === 0) {
    return ({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });
  }
  return { type: null, message: result };
};

const createProduct = async (product) => {
  const id = await productsModel.createProduct(product);

  return { type: null, message: { id, ...product } };
};

module.exports = {
  findProducts,
  findProductsById,
  createProduct,
};