import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const removeFromCart = (index) =>
    setCart(cart.filter((_, i) => i !== index));

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  // New checkout handler: clears the cart then navigates to the Thank You page
  const handleCheckout = () => {
    clearCart();
    navigate("/thank-you");
  };

  return (
    <div className="container">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p style={{ color: "grey", fontSize: "20px", fontStyle: "italic" }}>
          Your cart is empty
        </p>
      ) : (
        <>
          <h2>Total: ${totalPrice}</h2>
          <div className="cart-items">
            {cart.map((product, index) => (
              <div key={index} className="cart-item">
                <img src={product.image} alt={product.name} width="50px" />
                <div>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="btn danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleCheckout} className="btn-proceed">
            Proceed to Checkout
          </button>
          <button onClick={clearCart} className="btn danger">
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
