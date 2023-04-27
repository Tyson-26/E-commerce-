const express = require('express');
const router = express.Router();

// Public routes

// POST user registration
router.post('/register', registerController);

// POST user login
router.post('/login', loginController);

// GET all products
router.get('/products', getAllProductsController);

// GET single product by ID
router.get('/products/:id', getSingleProductController);

// Private routes

// GET user profile
router.get('/profile', authMiddleware, profileController);

// PUT update user profile
router.put('/profile', authMiddleware, updateProfileController);

// POST create new product
router.post('/products', authMiddleware, createProductController);

// PUT update product by ID
router.put('/products/:id', authMiddleware, updateProductController);

// DELETE product by ID
router.delete('/products/:id', authMiddleware, deleteProductController);

// POST create new order
router.post('/orders', authMiddleware, createOrderController);

// GET all orders
router.get('/orders', authMiddleware, getAllOrdersController);

// GET single order by ID
router.get('/orders/:id', authMiddleware, getSingleOrderController);

// PUT update order status by ID
router.put('/orders/:id', authMiddleware, updateOrderStatusController);
