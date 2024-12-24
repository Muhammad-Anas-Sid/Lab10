import React from 'react';

function SpecialityMenu({items})
{
    
    return(
        <h2 className='our-spec-menu'>Our Speciality Menu</h2>,
        <div className='item-card'>
            <img className='menu-img' src={items.image}/>
            <p className='name'>{items.name}</p>
            <p className='description'>{items.description}</p>
            <p className='price'>{items.price}</p>
            <button className='cart'>Add to cart</button>
        </div>
    );
}

export default SpecialityMenu;