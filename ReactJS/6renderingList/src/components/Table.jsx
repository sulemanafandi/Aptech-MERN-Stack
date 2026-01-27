import React from "react";

function Table() {
  let list = ["Salman", "usman", "ayan"];

  let products = [
    { name: "laptop", price: "$200", qty: 55 },
    { name: "pc", price: "$100", qty: 50 },
    { name: "mouse", price: "$100", qty: 50 },
  ];

  return (
    <>
      {list.map((names) => (
        <li>{names}</li>
      ))}
      <table border={1}>
      <thead>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
      </thead>
      <tbody>
      {products.map((pro) => (
        <tr>
          <td>{pro.name}</td>
          <td>{pro.price}</td>
          <td>{pro.qty}</td>
        </tr>
      ))}
      </tbody>
      </table>
    </>
  );
}

export default Table;
