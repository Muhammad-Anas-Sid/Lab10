import React, {useState} from 'react'

function Calculator()
{
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(null);

    const Num1=(e)=>{
        setNum1(e.target.value);
    };
    const Num2=(e)=>{
        setNum2(e.target.value);
    };
const addition=()=> {
    setResult(Number(num1) + Number(num2));
};
const subtraction=()=> {
    setResult(Number(num1) - Number(num2));
};
const multiply=()=> {
    setResult(Number(num1) * Number(num2));
};
const division=()=> {
    setResult(Number(num1) / Number(num2));
};
return(
    <div className='calc'>
    <h1>Calculator</h1>,
    <div className='input'>
        <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)}  placeholder="Enter first number"/>
        <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)}  placeholder="Enter second number"/>
    </div>,
    <button onClick={addition}>+</button>
    <button onClick={subtraction}>-</button>
    <button onClick={multiply}>x</button>
    <button onClick={division}>/</button>
    <div>
    <p className='result'>Calculated result: {result}</p>
    </div>
    </div>
);
}

export default Calculator;