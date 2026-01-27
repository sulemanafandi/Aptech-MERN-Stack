import React from 'react'
import Products from '../assets/products.json';

function ProductTable() {
    console.log('Products',Products)
  return (
    <>
    <table border={1}>
        <thead>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
        </thead>
        <tbody>
            {
                Products.products.map((item)=>(
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </>
  )
}

export default ProductTable