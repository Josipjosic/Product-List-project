import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchList() {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState('');

  console.log(id)




  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(products)

  return (
    <div>
      <ul>
        {products.map((data) => (
          <li key={data.id}>
            <div>
              <img src={data.thumbnail} alt="Product" onClick={() => {setId(data.id)}}></img>
            </div>
            <div>
              <a href="/" onClick={() => {setId(data.id)}}>{data.title}</a>
              <p>{data.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchList;
