import React from 'react';

function Navbar()
{
    return(
        <nav className='navbar'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuCqF-y46CtWSswTYuDXGKCFVED-CCpbhlg&s' alt='KFClogo' className='logo'/>
            <h2 className='head'>KababJees Fried Chicken</h2>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li><button type='button' className='order-button'>Order</button></li>
            </ul>

        </nav>
    );
}

export default Navbar;