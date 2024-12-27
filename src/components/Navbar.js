import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
return (
<nav style={{ padding: '10px', background: 'black', display: 'flex', justifyContent: 'space-evenly'}}>
        <ul style={{listStyle: 'none', alignItems: 'left'}}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/user/013'>User Profile</Link></li>
        <li><Link to='/cart'><button type='button'>Your cart</button></Link></li>
        </ul>
</nav>
);
}
export default Navbar;