import React from "react";
import { Link } from "react-router-dom";

function Home(){
  return (
    <div className="container">
      <h1>Welcome to Buy-siness</h1>
      <h2>Products:</h2>
      <ul>
        <li><Link to="/product/1">Product</Link></li>
      </ul>
      <h2>Visit your profile:</h2>
      <ul>
        <li><Link to="/user/anas-sid">Muhammad Anas Siddiqui</Link></li>
      </ul>
    </div>
  );
};

export default Home;
