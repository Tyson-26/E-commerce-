// Import necessary modules
const productService = require('../services/productService');
const orderService = require('../services/orderService');

// Controller functions

async function createProductController(req, res) {
  const { name, description, price, image } = req.body;
  try {
    const result = await productService.createProduct(name, description, price, image);
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateProductController(req, res) {
  const productId = req.params.id;
  const { name, description, price, image } = req.body;
  try {
    const result = await productService.updateProduct(productId, name, description, price, image);
    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteProductController(req, res) {
  const productId = req.params.id;
  try {
    const result = await productService.deleteProduct(productId);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function createOrderController(req, res) {
  const { products } = req.body;
  const userId = req.userId;
  try {
    const result = await orderService.createOrder(userId, products);
    res.status(201).json({ message: 'Order created successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getAllOrdersController(req, res) {
  const userId = req.userId;
  try {
    const result = await orderService.getAllOrders(userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getSingleOrderController(req, res) {
  const orderId = req.params.id;
  const userId = req.userId;
  try {
    const result = await orderService.getSingleOrder(userId, orderId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateOrderStatusController(req, res) {
  const orderId = req.params.id;
  const { status } = req.body;
  try {
    const result = await orderService.updateOrderStatus(orderId, status);
    res.status(200).json({ message: 'Order status updated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  createProductController,
  updateProductController,
  deleteProductController,
  createOrderController,
  getAllOrdersController,
  getSingleOrderController,
  updateOrderStatusController,
};
