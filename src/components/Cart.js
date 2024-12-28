import React, {useState} from 'react';

function Cart({items}){
    const [cart, setCart] = useState([]);

    const addTocart = (name, quantity, price) => {
        const newCartContent = [...cart];
    newCartContent.push(
      <div className='cart-item'>
        {name} - Quantity: {quantity} - Price: {price} PKR
      </div>
    );
    setCart(newCartContent);
  };
    return(
        <div className='container'>
            <h1>Your cart</h1>
            <p>Items:</p>
            <div>{cart.length > 0 ? cart : <p>Your cart is empty.</p>}</div>
            <h2>Add Items to Cart:</h2>
              <button onClick={() => addTocart("Product 1", 1, 10)}> + </button>
              <br></br>
              <button onClick={() => addTocart("Product 2", 2, 20)}> + </button>
              <br></br>
              <button onClick={() => addTocart("Product 3", 3, 30)}> + </button>
              <br></br>

      <h3>Total Items: {cart.length}</h3>

        </div>
    );
};
export default Cart;