const productsModel = require('../models/productsModel');

const findProducts = async () => {
  const result = await productsModel.findProducts();
  return { type: null, message: result };
};

const findProductsById = async (id) => {
  const result = await productsModel.findProductsById(id);
  if (!result.length) {
    return ({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });
  }
  return { type: null, message: result };
};

const createProduct = async (product) => {
  const id = await productsModel.createProduct(product);

  return { type: null, message: { id, ...product } };
};

const updateProduct = async (id, upName) => {
  const product = await productsModel.findProductsById(id);
  if (!product.length) {
    return ({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });
  }
  const result = await productsModel.updateProduct(id, upName);
  return { type: null, message: result };
};

module.exports = {
  findProducts,
  findProductsById,
  createProduct,
  updateProduct,
};