// ParallaxSection.js

import React from 'react';
import './ParallaxSection.css'; // Import CSS for styling

const ParallaxSection = () => {
  return (
    <div className="parallax">
      <div className="parallax-text">
        <h2>Discover Our Amazing Products</h2>
        <p>Explore our wide range of high-quality products ned to meet your needs.</p>
        <a href="#" className="btn">Shop Now</a>
      </div>
      <div className="parallax-image"></div>
    </div>
  );
}

export default ParallaxSection;
