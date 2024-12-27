import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import ShoppingCart from './components/ShoppingCart';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
      <Router>
        <div>
          <nav style={{listStyle: 'none', display: 'flex', backgroundColor: 'black', alignItems: 'end', }}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cart">Your Cart</Link></li>
            </ul>
          </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/1" element={<ProductDetail id="1" />} />
              <Route path="/product/2" element={<ProductDetail id="2" />} />
              <Route path="/product/3" element={<ProductDetail id="3" />} />
              <Route path="/user/:userId" element={<User />}/>
              <Route path='/cart' element={<ShoppingCart/>}/>
          </Routes>
        </div>
      </Router>

  );
}

export default App;