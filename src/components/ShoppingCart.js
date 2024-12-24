import React, {useState} from 'react';

function ShoppingCart(){
    const [cart, setCart] = useState([]); 
    const [total, setTotal] = useState(0); 

    const addItem = () => {
        setCart([cart, { name: 'Item', price: 50 }]);
        setTotal(total + 50);
    };
    
    const removeItem = () => {
        if (cart.length > 0) {
            const lastItem = cart[cart.length - 1];
            setCart(cart.slice(0, -1));
            setTotal(total - lastItem.price);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Shopping Cart</h1>
            <button onClick={addItem} style={styles.button}>Add Item (of only $50)</button>
            <button onClick={removeItem} style={styles.button}>Remove Last Item</button>
            <h3>Items in Cart: {cart.length}</h3>
            <h3>Total: ${total}</h3>
        </div>
    );
}

const styles = {
    button: {
        padding: '10px 20px',
        margin: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
    },
};

export default ShoppingCart;
