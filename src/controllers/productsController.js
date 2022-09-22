const productsService = require('../services/productsService');

const findProducts = async (_req, res) => {
  const { type, message } = await productsService.findProducts();
  if (type) return res.status(type).json({ message });
    
    return res.status(200).json(message);
};

const findProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findProductsById(id);
  
  if (type) return res.status(type).json({ message });

  return res.status(200).json(message[0]);
};

const createProduct = async (req, res) => {
  const { type, message } = await productsService.createProduct(req.body);

  if (type) return res.status(type).json({ message });
  
  return res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const upName = req.body;
  const { type, message } = await productsService.updateProduct(id, upName);
  if (type) return res.status(type).json({ message });
  
  return res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.deleteProduct(id);
  if (type) return res.status(type).json({ message });
  res.status(204).end();
};

module.exports = {
  findProductsById,
  findProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};