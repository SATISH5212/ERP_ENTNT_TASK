

import React, { useState } from 'react';

const ProductsManagement = () => {
  
  const initialProducts = [
    { id: 1, name: 'Product 1', category: 'Category A', price: 10.99, stock: 20 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 15.99, stock: 15 },
    
  ];

  const [products, setProducts] = useState(initialProducts);
  
  const handleAddProduct = () => {
    
    const userInput = prompt('Enter product details in the format: Name, Category, Price, Stock');

   
    if (userInput === null) {
      alert('Product creation canceled.');
      return;
    }

    
    const inputArray = userInput.split(',').map(item => item.trim());

    
    if (inputArray.length !== 4) {
      alert('Invalid input format. Please provide all details in the correct format.');
      return;
    }

    
    const [productName, productCategory, productPrice, productStock] = inputArray;

    
    const newProduct = {
      id: products.length + 1,
      name: productName,
      category: productCategory,
      price: parseFloat(productPrice),
      stock: parseInt(productStock),
    };

    
    setProducts([...products, newProduct]);

    alert('New product added successfully!');
  };

  const handleEditProduct = (productId, updatedProduct) => {
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="PM">
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Products Management</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <div className="actions">
              <button onClick={() => handleEditProduct(product.id, { name: 'Updated Product' })}>Edit</button>
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleAddProduct} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', alignSelf: 'center' }}>Add Product</button>
    </div>
  );
};

export default ProductsManagement;




