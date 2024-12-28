import React from 'react';

function Profile({username}){
    return(
        <div className='container'>
            <h1>Welcome, {username} </h1>
            <p>Email: {username}@gmail.com</p>
            <p>Status: Active</p>
        </div>
    );
};
export default Profile;