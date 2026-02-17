import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ShowProduct() {
    const [product, setProduct] = useState([])

    const getProduct = async () => {
        const apiUrl = 'http://localhost:5000/get-Product';
        const res = await axios.get(apiUrl);
        setProduct(res.data.products);
    }

    useEffect(()=>{
        getProduct()
    },[]);

    const deleteData = async (id) => {
            const apiUrl = `http://localhost:5000/delete-Product/${id}`;
            await axios.delete(apiUrl);
            alert('Data deleted Successfully');
            getProduct(); // Refresh the product list after deletion
    };
    return (
        <>
            <h1>Show</h1>
            <Link to='/add-Product'>Add Product</Link>
            <table bgcolor='black' border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((pro,index) => (
                            <tr key={index}>
                                <td>{pro._id}</td>
                                <td>{pro.Name}</td>
                                <td>{pro.Price}</td>
                                <td>{pro.Qty}</td>
                                <td><Link to={`/update/${pro._id}`}>Update</Link>
                                <button onClick={() => deleteData(pro._id)}>Delete</button>
                                </td>  
                            </tr>   
                        ))
                    }
                </tbody>

            </table>
        </>
    )
}

export default ShowProduct