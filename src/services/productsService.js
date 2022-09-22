const productsModel = require('../models/productsModel');

const PRODUCT_NOT_FOUND = 'Product not found';

const findProducts = async () => {
  const result = await productsModel.findProducts();
  if (!result.length) {
    return ({ type: 404, message: PRODUCT_NOT_FOUND });
  }
  return { type: null, message: result };
};

const findProductsById = async (id) => {
  const result = await productsModel.findProductsById(id);
  if (!result.length) {
    return ({ type: 404, message: PRODUCT_NOT_FOUND });
  }
  return { type: null, message: result };
};

const createProduct = async (product) => {
  const id = await productsModel.createProduct(product);

  if (!id) {
    return ({ type: 404, message: PRODUCT_NOT_FOUND });
  }

  return { type: null, message: { id, ...product } };
};

const updateProduct = async (id, upName) => {
  const product = await productsModel.findProductsById(id);
  if (!product.length) {
    return ({ type: 404, message: PRODUCT_NOT_FOUND });
  }
  const result = await productsModel.updateProduct(id, upName);
  return { type: null, message: result };
};

const deleteProduct = async (id) => {
  const product = await productsModel.findProductsById(id);
  if (!product.length) {
    return ({ type: 404, message: PRODUCT_NOT_FOUND });
  }
  
  await productsModel.deleteProduct(id);

  return { type: null, message: '' };
};

module.exports = {
  findProducts,
  findProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};