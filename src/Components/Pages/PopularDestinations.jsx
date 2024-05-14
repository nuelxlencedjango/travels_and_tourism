import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import egypt from '../../assets/egypt.jpg';
import kenya from '../../assets/kenya.jpg';
import sa1 from '../../assets/sa1.jpg';
import morocco from '../../assets/morocco1.jpg';
import tanzania from '../../assets/tanzania2.jpg';
import ethopia from '../../assets/ethopia6.jpg';
import dubia from '../../assets/city2.jpg';
import singapore from '../../assets/singapore1.jpg';
import japan from '../../assets/japan2.jpg';
import china from '../../assets/china4.jpg';

const PopularDestination = () => {
  const destinations = [
    { id:1, title:"Cairo, Egypt", img: egypt, text: 'The capital and largest city of Egypt, Cairo is known for its rich history, ancient monuments such as the Pyramids of Giza, and bustling city life.' },
    { id:2, title: "Nairobi, Kenya", img: kenya, text: 'Nairobi is the capital and largest city of Kenya, known for its urban safari experiences, vibrant nightlife, and as a regional hub for business and technology.' },
    { id:3, title:  "Johannesburg, South Africa", img: sa1, text: "Johannesburg is the largest city in South Africa and serves as the economic powerhouse of the country, with a thriving business district, cultural attractions, and nearby wildlife reserves." },
    { id:4, title: "Casablanca, Morocco", img: morocco, text: "Casablanca is the largest city in Morocco and serves as the country's economic and industrial center, with a mix of modern architecture, historic sites, and cultural attractions." },
    { id:5, title: "Dar es Salaam, Tanzania", img: tanzania, text: "Dar es Salaam is the largest city in Tanzania and serves as a major port city on the Indian Ocean, with a growing economy, diverse culture, and nearby wildlife reserves." },
    { id:6, title: "Addis Ababa, Ethiopia", img: ethopia, text: 'Addis Ababa is the capital and largest city of Ethiopia, known for its rich history, diverse culture, and as the diplomatic capital of Africa, hosting the headquarters of the African Union.' },
    { id:7, title: "Dubai, United Arab Emirates", img: dubia, text: "Dubai is a city known for its extravagant architecture, luxury shopping, vibrant nightlife, and artificial islands, including the iconic Burj Khalifa, the world's tallest building." },
    { id:8, title: "Singapore", img: singapore, text: "Singapore is a city-state and global financial center known for its modern skyline, multicultural population, lush gardens and parks, and world-class shopping and dining." },
    { id:9, title: "Tokyo, Japan", img: japan, text: "Tokyo is the capital and largest city of Japan, known for its bustling urban life, vibrant neighborhoods like Shibuya and Shinjuku, historic temples, and technological innovation." },
    { id:10, title: "Beijing, China", img: china, text: "Beijing is the capital city of China and one of the world's oldest cities, renowned for its rich history, iconic landmarks such as the Great Wall and Forbidden City, and modern skyscrapers." }
  ];


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
  

  return (
    <div>
      <div className="destination">
        <h3 className="destination-heading">Most Popular Destinations</h3>
        <p>Our popular destinations include United Kingdom, France, Republic of Togo, Benin Republic, South Africa, United States, Ghana, Kenya, Egypt, Singapore, China, Dubai, Abu Dhabi, Australia, Switzerland, Spain, Italy (and other Schengen States), Brazil and Canada. We can also package other destination of choice to meet your specific needs.</p>
   
      </div>
      <div className="slider-wrapper">
      <Slider {...settings}>
        {destinations.map((destination) => (
          <div className='destination-container'>
          <div key={destination.id} className="destination-slide">
            <img src={destination.img} alt={destination.title} className="destination-image" />
            <div className="destination-details">
              <h4 className="destination-title">{destination.title}</h4>
              <p className="destination-text">{destination.text}</p>
               </div>
          </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
  
};

export default PopularDestination;
