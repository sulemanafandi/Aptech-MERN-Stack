import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UpdateProduct() {

  const {id} = useParams();
  const [product, setProduct] = useState({});

  const getData = async () => {
    const apiUrl = `http://localhost:5000/get-single-Product/${id}`;
    const res = await axios.get(apiUrl);
    setProductName(res.data.product.Name);
    setProductPrice(res.data.product.Price);
    setProductQuantity(res.data.product.Qty);
  }

  useEffect(() => {
    getData();
  },[]);

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = {
      Name: productName,
      Price: Number(productPrice),
      Qty: Number(productQuantity),
    };

    try {
      const apiUrl = `http://localhost:5000/update-Product/${id}`;
      await axios.put(apiUrl, formData);
      alert('Data updated Successfully');

    } catch (error) {
      alert('Error updating data: ' + error.message);
    }
  };

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          name="Name"
          placeholder="Enter your Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <br /><br />

        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          name="Price"
          placeholder="Enter your Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(Number(e.target.value))}
        />
        <br /><br />

        <label htmlFor="productQuantity">Product Quantity:</label>
        <input
          type="number"
          name="Qty"
          placeholder="Enter your Product Quantity"
          value={productQuantity}
          onChange={(e) => setProductQuantity(Number(e.target.value))}
        />
        <br /><br />

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
