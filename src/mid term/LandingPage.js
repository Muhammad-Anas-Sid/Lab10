import React from 'react';

function LandingPage()
{
    return(
        <section>
            <div className='landing-page'>
                <h1 className='lp-head'>Taste the KababJees Magic</h1>,
                <p className='lp-para'>Crispy, Delicious Chicken that keeps you coming back!</p>,
                <button className='order-now'>Order Now</button>,
            </div>
            <div>
                <img src='https://images.deliveryhero.io/image/fd-pk/LH/qcve-listing.jpg' alt='landingpageimage' className='burgers-img'/>
            </div>
        </section>
    );

}

export default LandingPage;