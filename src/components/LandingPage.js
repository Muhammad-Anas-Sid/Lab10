import React from 'react';
import '../styles/LandingPage.css'; // Import CSS file
function LandingPage() {
return (
<div className="landing-container">
    <div className="searchbar-container">
    <label className='search'>Search</label>
    <input type='search' placeholder='Lawn, Cotton' className='searchbar'/>
    </div>
<h1 className="landing-title">Welcome to J.</h1>

<p className="landing-subtitle">
Immerse yourself in the world of Niche and Glamour
</p>
<button className="landing-button">
Learn More
</button>
</div>
);
}
export default LandingPage;