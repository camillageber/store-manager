const productsService = require('../services/productsService');
const mapError = require('../utils/errorMap');

const findProducts = async (_req, res) => {
  const { type, message } = await productsService.findProducts();
  if (type) return res.status(mapError(type)).json({ message });
    
    return res.status(200).json(message);
};

const findProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findProductsById(id);
  
  if (type) return res.status(mapError(type)).json({ message });

  return res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { type, message } = await productsService.createProduct(req.body);

  if (type) return res.status(mapError(type)).json({ message });
  
  return res.status(201).json(message);
};

module.exports = {
  findProductsById,
  findProducts,
  createProduct,
};