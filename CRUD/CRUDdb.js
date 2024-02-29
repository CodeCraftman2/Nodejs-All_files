const mongoose = require('mongoose');

// Define product schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
});

// Create a Product model
const Product = mongoose.model('Product', productSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Function to create a product
async function createProduct(name, price, quantity) {
    const product = new Product({
        name,
        price,
        quantity
    });
    return await product.save();
}

// Function to retrieve all products
async function getAllProducts() {
    return await Product.find();
}

// Function to update a product by ID
async function updateProduct(id, updates) {
    return await Product.findByIdAndUpdate(id, updates, { new: true });
}

// Function to delete a product by ID
async function deleteProduct(id) {
    return await Product.findByIdAndDelete(id);
}

// Example usage
async function main() {
    // Create a product
    const createdProduct = await createProduct('Product 1', 10, 100);
    console.log('Created Product:', createdProduct);

    // Retrieve all products
    const allProducts = await getAllProducts();
    console.log('All Products:', allProducts);

    // Update a product
    const updatedProduct = await updateProduct(createdProduct._id, { price: 15 });
    console.log('Updated Product:', updatedProduct);

    // Delete a product
    const deletedProduct = await deleteProduct(createdProduct._id);
    console.log('Deleted Product:', deletedProduct);
}

main();