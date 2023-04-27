const Product = require('./models/product');

const product = new Product({
  name: 'Sample product',
  description: 'This is a sample product',
  price: 9.99,
  image: 'https://example.com/sample-product.jpg',
});

product.save()
  .then(() => {
    console.log('Product saved successfully');
  })
  .catch((error) => {
    console.log('Failed to save product', error);
  });
