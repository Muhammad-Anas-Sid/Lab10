import React, {useState} from 'react';

function Login()
{
    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const Name=(e)=>
    {
        setName(e.target.value)
    };
    const Age=(e)=>
    {
        setAge(e.target.value)
    };
    const Email=(e)=>
    {
        setEmail(e.target.value)
    };
    const Password=(e)=>
    {
        setPassword(e.target.value)
    };
    const Reset=()=>
    {
        setName(''),setAge(''),setEmail(''),setPassword('')
    }
    return(
        <div>
            <div className='form'>
                <label>Name</label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
                <label>Age</label>
                <input type='text' value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Age'/>
                <label>Email Address</label>
                <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
                <label>Password</label>
                <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
                <button type='reset' onClick={Reset}>Clear</button>
            </div>
            <div className='data'>
                <p>Your Name:  {name}</p>
                <p>Your Age:  {age}</p>
                <p>Your Email address:  {email}</p>
                <p>Password:  {password}</p>
            </div>
        </div>
    );
}
export default Login;