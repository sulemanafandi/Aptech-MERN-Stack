import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchData() {
  const [products, setProducts] = useState([]);

  const url =
    "https://fakestoreapiserver.reactbd.org/api/products?page=1&perPage=10";

  const fetchData = async () => {
    const response = await axios.get(url);
    console.log("API Response :", response.data.data);
    setProducts(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      {products.map((product) => (
              <div className="card"  key={product._id}  style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.brand}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
      ))}
    </>
  );
}

export default FetchData;
