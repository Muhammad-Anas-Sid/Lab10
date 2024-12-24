import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
return (
<nav style={{ padding: '10px', background: 'black', display: 'flex', justifyContent: 'space-evenly'}}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/user/013'>User Profile</Link>
</nav>
);
}
export default Navbar;