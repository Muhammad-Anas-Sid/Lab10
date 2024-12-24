import React, { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);

const increment = () => {
setCount(count + 1);
};

const decrement = () => {
    setCount(count => (count>0 ? count-1: 0));
};

const reset = () => {
    setCount(0)
};
return (
<div style={{textAlign: "center", margin: "50px"}}>
<h1>Count: {count}</h1>
<button onClick={increment} style={{backgroundColor: "green", borderRadius: "15px", border: "none"}}>Increase</button>
<button onClick={decrement} style={{backgroundColor: "red", borderRadius: "15px", border: "none"}}>Decrease</button>
<button onClick={reset} style={{backgroundColor: "blue", borderRadius: "15px", border: "none"}}>Reset</button>
</div>
);
}
export default Counter;