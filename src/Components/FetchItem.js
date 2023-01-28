import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchItem() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/2")
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Product details</h1>
      <div>
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt="img"></img>
        {product.images?.map((data) => (
          <div>
            <img src={data} alt="img"></img>

          </div>
        ))}
        <p>Description: {product.description}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>In Stock: {product.stock}</p>
      </div>
    </div>
  );
}

export default FetchItem;
