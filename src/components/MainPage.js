import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./styles.css";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Minimal Desk Lamp", price: 89.99, image: "https://m.media-amazon.com/images/I/412xqyemN8L._SL500_.jpg" },
  { id: 2, name: "Ceramic Coffee Mug", price: 24.99, image: "https://www.ubuy.com.pk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFEcWVqZjVQcEwuX1NTNDAwXy5qcGc.jpg" },
  { id: 3, name: "Leather Notebook", price: 34.99, image: "https://www.stationerystation.pk/images/productcontent/d023a912-86e0-487d-92ce-c8346d16e587.jpeg" },
  { id: 4, name: "Bamboo Plant Stand", price: 49.99, image: "https://media.diy.com/is/image/KingfisherDigital/costway-9-tier-bamboo-plant-holder-stand-plant-shelf-storage-organizer-display-rack~7984700428346_03c_MP?$MOB_PREV$&$width=600&$height=600" },
  { id: 5, name: "Abstract Wall Art", price: 129.99, image: "https://primedecor.pk/cdn/shop/products/ColorfulBrushStrokePatches_3Panel_AbstractWallArt.jpg?v=1658150042" },
  { id: 6, name: "Geometric Bookends", price: 39.99, image: "https://m.media-amazon.com/images/I/718WmFDJ48L.jpg" },
];

const Home = ({ cart, setCart }) => {
  const addToCart = (product) => {setCart([...cart, product])
    setMessage("Item successfully added to cart!!");
    setTimeout(() => setMessage(""), 2000);};
  const [message, setMessage] = useState("");


  return (
    <div className="container">
        {message && <p className="success-message">{message}</p>}
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
