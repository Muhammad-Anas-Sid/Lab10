import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ThankYou = () => (
  <div className="container">
    <h1 style={{ color: "black", fontSize: "50px", fontStyle: "bold", textAlign: "center" }}>Thank You for Your Purchase!</h1>
    <p>Your order has been placed successfully.</p>


    <Link to="/" className="btn">Go back to Home</Link>
  </div>
);

export default ThankYou;
