

import React, {useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';
import Text_contents from './Text_contents';
import { Link } from "react-router-dom";
import Products from './Products';
import PopularDestinations from './PopularDestinations';

import whatsapp from '../../assets/whatsapp_image.png';


import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";



const Carousel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carouselElement = carouselRef.current;
        //const carouselInstance = new bootstrap.Carousel(carouselElement, {
           // interval: 20000, 
           // pause: 'hover',
            //keyboard: true
        //});

        //return () => {
             // carouselInstance.dispose();
         // };
      
    }, []);

    // Destructure the content object returned from Text_contents component
 const {
    video1,
    city2,
  
   city3,
   
} = Text_contents();
  
    

    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" ref={carouselRef}>
            <div className="carousel-inner">
                <div className="carousel-item active"> {/*style={{ backgroundImage: `url(${city1})`, backgroundSize: 'cover' }}>*/}
                    <div style={{ position: 'relative' }}>
                        <video autoPlay muted loop style={{ width: '100%', height: '90vh', objectFit: 'cover', backgroundPosition: 'center' }}>
                            <source src={video1} type="video/mp4" />
                               {/* Add additional video sources if necessary */}
                        </video>
                         
                          <ul className="carousel-list" style={{ position: 'absolute', top: '5%', left: '10%', zIndex: '1', marginTop: "50px" }}>     
                         
                            <li data-aos="fade-right" data-aos-delay="0">Visa Assistance</li>
                            <li data-aos="fade-up" data-aos-delay="500">Flight Booking & Reservation</li>
                             <li data-aos="fade-left" data-aos-delay="400">Tours</li>
                            <li data-aos="fade-right" data-aos-delay="500">Study Abroad</li>
                            <li data-aos="fade-left" data-aos-delay="100">International Payment</li>
                            <li data-aos="fade-up" data-aos-delay="300">Travel Insurance</li>
                            <li >Hotel Reservation</li>
                            <li data-aos="fade-up" data-aos-delay="200">Top Flight Deals</li>

                        </ul>
                        <div className="contact" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '1' }}>
                            <Link to="/contact_us" className='btn btn-danger contact-btn'>contact us</Link>

                        </div>
                     </div>   
                </div>
                <div className="carousel-item" style={{ backgroundImage: `url(${city2})`, backgroundSize: 'cover' }}>
                   <div className='carousel-div'>
                    <h3 className='carousel-h3'>Experience Best Tour Over</h3>
                    <div className="carousel-inner-div">
                    <ReactTyped
                     strings={[
                     
                        "Embark on a journey of discovery with <strong>ReachGold Travels'</strong> immersive tour experiences. Explore captivating destinations worldwide with expert guides, uncovering hidden gems, sampling local cuisine, and immersing in vibrant cultures. Whether seeking adrenaline-fueled excursions, cultural encounters, or relaxation in breathtaking landscapes, our tours cater to every traveler. From small-group adventures to private excursions, we offer a wide range of options tailored to your preferences. With attention to detail and a commitment to customer satisfaction, trust us to deliver an unforgettable travel experience while you enjoy the journey of a lifetime."
                    ]}
                    typeSpeed={10}
                    loop
                    backSpeed={0}
                    
                    />
                   </div>
                 
                    </div>
                    <div className="contact">
                     <Link to="/contact_us" className='btn btn-danger contact-btn'>Begin your journy today!</Link>

                     </div>
                </div>
                <div className="carousel-item"  style={{ backgroundImage: `url(${city3})`, backgroundSize: 'cover' }}>
                <div className='carousel-div'>
                   <h3 data-aos="fade-up">Travel Essentials</h3>
                   
                   <div className="carousel-inner-div">
                    <p className='carousel-p' data-aos="fade-up">Planning your next trip has never been easier with our comprehensive travel services. 
                        From visa assistance to hotel reservations, we take care of all the details so 
                        you can focus on enjoying your journey. Our team of experts ensures seamless 
                        international payments and provides top-notch travel insurance options for peace 
                        of mind. Whether you're booking flights, arranging tours, or searching for the 
                        best deals, we've got you covered every step of the way. Say goodbye to stress and hello 
                        to unforgettable travel experiences with ReachGold Travels. Let us make your 
                        travel dreams a reality.
                        </p>
                    </div>    

                </div>
                <div className="contact">
                     <Link to="/contact_us" className='btn btn-danger contact-btn'>Begin your journy today!</Link>

                     </div>
                </div>
            </div> 
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
          
          
            <div className="whatsapp-img">
  <div className="int-img">
    <a href="https://wa.me/2347062186199" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
      <img src={whatsapp} alt="WhatsApp" className="whatsapp-icon" />
    </a>
  </div>
</div>


          <Products />
          <PopularDestinations />
        </div>
        
    );
};


export default Carousel;
