import React, { useEffect, useState } from "react";
import "./FetchItem.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Modal from "./Modal/Modal";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

function FetchItem() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const [selImg, setSelImg] = useState();
  const [show, setShow] = useState(false);

  console.log(selImg);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
        setSelImg(res.data.thumbnail);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  return (
    <div className="container-item">
      <h1 className="container-title">Product details</h1>
      <h2 className="container-name">{product.title}</h2>
      <div className="container-detail">
        <div className="container-img">
          <img src={selImg} className="detal-img" alt="img"></img>
          <ZoomOutMapIcon
            onClick={() => setShow(true)}
            className="detail-zoom"
          />
        </div>
        <div className="container-slider">
          {product.images?.map((data) => (
            <div>
              <div className="slide-image">
                <img
                  src={data}
                  alt="img"
                  className="product-img"
                  onClick={() => {
                    setSelImg(data);
                  }}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-info">
        <p>Description:<span> {product.description} </span></p>
        <p>Brand:<span> {product.brand} </span></p>
        <p>Category:<span> {product.category} </span></p>
        <p>Price: <span> ${product.price} </span></p>
        <p>Rating:<span> {product.rating}/5</span></p>
        <p>In Stock:<span> {product.stock} </span></p>
        <Link to="/">
          <button className="container-button">
            <ArrowBackIcon />
          </button>
        </Link>
      </div>
      <Modal image={selImg} onClose={() => setShow(false)} show={show} />
    </div>
  );
}

export default FetchItem;
