import React from 'react'

function Table() {
    let products = ['apple','orange','watermilon'];

    let ProObj =[{
        name: 'apple',
        price: 100,
        color: 'red'
    },
    {
        name: 'orange',
        price: 80,  
        color: 'orange'
    },
    {
        name: 'watermelon',
        price: 120,
        color: 'green'
    }
  ]
  return (
    <>
    {products.map((pro) => (
        <li>{pro}</li>
    ))}

    <table border={1}>
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Color</th>
            </tr>
        </thead>
        <tbody>
            {ProObj.map((fruit)=>{
                <tr>
                    <td>{fruit.name}</td>
                    <td>{fruit.price}</td>
                    <td>{fruit.color}</td>
                </tr>
            })}
        </tbody>
    </table>
    
    </>
  )
}

export default Table