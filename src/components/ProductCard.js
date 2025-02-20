import React from "react";
import "./styles.css";

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} width="100%" />
    <h3 style={{textAlign: "left", fontSize: "18px", color: "black"}}>{product.name}</h3>
    <p style={{textAlign: "left", fontSize: "15px", color: "grey"}}>${product.price}</p>
    <button onClick={() => addToCart(product)} className="btn" style={{display: "block", margin: "10px 0 0 0 "}}>Add to Cart</button>
  </div>
);

export default ProductCard;
