// BackgroundImageRow.jsx
import React from 'react';

import backgroundImage from '../../assets/airplane1.jpg'; // Import your background image
import contentImage2 from '../../assets/airplane3.jpg'; // Import your content image 2
import contentImage1 from '../../assets/airplane4.jpg'; // Import your content image 1

function BackgroundImageRow() {
  return (
    <div>
      <div className="background-image-row" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="content">
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </div>
          <div className="image">
            <img src={contentImage1} alt="Content 1" />
          </div>
        </div>
      </div>

      <div className="background-image-row" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="content">
          <div className="text">
            Sed ut perspiciatis unde omnissit voluptatem accusantium doloremque laudantium.
          </div>
          <div className="image">
            <img src={contentImage2} alt="Content 2" />
          </div>
        </div>
      </div>
      {/* Add more BackgroundImageRow components as needed */}
    </div>
  );
}

export default BackgroundImageRow;
