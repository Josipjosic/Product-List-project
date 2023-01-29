import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination/Pagination";
import { Link } from "react-router-dom";
import "./FetchList.scss";

function FetchList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);

  // fetching data from API 
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

  //pagination logic
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  //setting current page to display
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
        <h1 className="App-title">Products</h1>
      <div className="container">
        <ul className="container-data">
          {currentItems.map((data) => (
            <li key={data.id} className="container-list">
              <div className="list-img">
                <Link to={`/products/${data.id}`}>
                  <img src={data.thumbnail} alt="Product"></img>
                </Link>
              </div>
              <div className="list-info">
                <Link to={`/products/${data.id}`}>{data.title}</Link>
                <p>{data.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Pagination
          itemsPerPage={itemPerPage}
          totalItems={products.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default FetchList;
