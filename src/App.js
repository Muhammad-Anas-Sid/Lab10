import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./components/MainPage";
import Cart from "./components/CartPage";
import ThankYou from "./components/ThankYouPage";
import "./components/styles.css";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>

      <nav style={{ background: "rgb(231, 231, 231)", color: "black", padding: "15px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h2 style={{margin: "10px", fontSize: "20px"}}>GuTech Exam Store</h2>
          <div>
            <Link to="/" style={{color:"black",textDecoration: "none",margin: "0 10px"}}>Home</Link>
            <Link to="/cart" style={{color:"black",textDecoration: "none",margin: "0 10px"}}>
              Cart
              <span style={{background: "red",borderRadius: "50%", padding: "2px 6px", marginLeft: "5px", fontSize: "12px"}}>{cart.length}</span>
              </Link>
          </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;
