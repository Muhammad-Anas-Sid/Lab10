import React from "react";

const ProductDetail = ({ id }) => {
  return (
    <div>
      <h1>Product Details</h1>
      <p>This is the detail page for Product {id}.</p>
      <p>Name: {id === "1" ? "Product A" : id === "2" ? "Product B" : "Product C"}</p>
      <p>Price: ${id === "1" ? "10" : id === "2" ? "20" : "30"}</p>
    </div>
  );
};

export default ProductDetail;
