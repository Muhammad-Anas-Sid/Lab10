import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Profile from './components/Profile';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cart">Your Cart</Link></li>
              <li><Link to="/user/:userId">Profile</Link></li>
            </ul>
          </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:userId" element={<Profile username={"m.anas"} />}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path="/product/1" element={<ProductDetail id="1" />} />
              <Route path="/product/2" element={<ProductDetail id="2" />} />
              <Route path="/product/3" element={<ProductDetail id="3" />} />
          </Routes>
        </div>
      </Router>

  );
}

export default App;