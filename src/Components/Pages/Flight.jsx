import React, { useState, useEffect } from 'react';

import plane1 from '../../assets/plane1.jpg'; // Import image


const Product = () => {
  const [products, setProducts] = useState([]);

  // Fetch product data (you can replace this with your actual data fetching logic)
  useEffect(() => {
    // Mock product data
    const mockProducts = [
      { id: 1, name: 'Product 1', price: '$100', destination: 'Destination 1', imageUrl: plane1 },
      { id: 2, name: 'Product 2', price: '$150', destination: 'Destination 2', imageUrl: plane1 },
      { id: 3, name: 'Product 3', price: '$200', destination: 'Destination 3', imageUrl: plane1 },
      { id: 4, name: 'Product 4', price: '$250', destination: 'Destination 4', imageUrl: plane1 },
      { id: 5, name: 'Product 5', price: '$300', destination: 'Destination 5', imageUrl: plane1 },
      { id: 6, name: 'Product 6', price: '$350', destination: 'Destination 6', imageUrl: plane1 },
      // Add more products as needed
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div className="container flights">
      <h1>Product List</h1>
     <p>global ptoducts</p>
    </div>
  );
};

export default Product;
