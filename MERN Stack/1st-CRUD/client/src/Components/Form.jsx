import axios from 'axios';
import React, { useState } from 'react';

function Form() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [errors, setErrors] = useState({});

  function validate() {
    let errors = {};
    if (!productName) {
      errors.productName = 'Product Name is required';
    }
    if (productPrice <= 0) {
      errors.productPrice = 'Product Price must be greater than 0';
    }
    if (productQuantity <= 0) {
      errors.productQuantity = 'Product Quantity must be greater than 0';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return; // stop if validation fails

    const formData = {
      Name: productName,
      Price: Number(productPrice),
      Qty: Number(productQuantity),
    };

    try {
      const apiUrl = 'http://localhost:5000/create-Product';
      await axios.post(apiUrl, formData);
      alert('Data saved Successfully');

      // Reset form after success
      setProductName('');
      setProductPrice('');
      setProductQuantity('');
      setErrors({});
    } catch (error) {
      alert('Error saving data: ' + error.message);
    }
  };

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="Name"
          placeholder="Enter your Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        {errors.productName && <p style={{ color: 'red' }}>{errors.productName}</p>}
        <br /><br />

        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          id="productPrice"
          name="Price"
          placeholder="Enter your Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(Number(e.target.value))}
        />
        {errors.productPrice && <p style={{ color: 'red' }}>{errors.productPrice}</p>}
        <br /><br />

        <label htmlFor="productQuantity">Product Quantity:</label>
        <input
          type="number"
          id="productQuantity"
          name="Qty"
          placeholder="Enter your Product Quantity"
          value={productQuantity}
          onChange={(e) => setProductQuantity(Number(e.target.value))}
        />
        {errors.productQuantity && <p style={{ color: 'red' }}>{errors.productQuantity}</p>}
        <br /><br />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default Form;
