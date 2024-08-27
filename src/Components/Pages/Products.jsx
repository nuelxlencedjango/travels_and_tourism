
import React from 'react';
import Text_contents from './Text_contents';
import { Link } from "react-router-dom";




const Products = () => {


  // Destructure the content object returned from Text_contents component
  const {
   
    visaTitle, visaLimitedText,visa3,
    flightTitle, flightLimitedText,plane2,
    hotelTitle, hotelLimitedText,room,
    conferenceTitle, conferenceLimitedText,conference,
    tourTitle, tourLimitedText,city2,tour,
    studyTitle,studyLimitedText,univeristy,
    insuranceTitle,insuranceLimitedText,insurance,
    holidayTitle, holidayLimitedText,
    carTitle, carLimitedText,rentals,
    passportTitle, passportLimitedText,int_passport,
    luggageTitle,luggageLimitedText,luggage
} = Text_contents();
    return(
        
        <div className="our-services">
        <div className="row">
            <div className="col-md-4" data-aos="fade-up">
                 <div className="card" style={{width: '100%',cursor:"pointer"}}>
                    <img src={visa3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{visaTitle}</h5>
                        <p className="card-text">{visaLimitedText} </p>
                        <div style={{ textAlign: 'center' }}>
                            <Link to="/visa-assistance" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>
                </div>
           </div>
           <div className="col-md-4" data-aos="fade-up">
                 <div className="card" style={{width: '100%'}}>
                    <img src={plane2} className="card-img-top" alt="nothing" />
                    <div className="card-body">
                        <h5 className="card-title">{flightTitle}</h5>
                        <p className="card-text">{flightLimitedText}</p>
                        <div style={{ textAlign: 'center' }}>
                            <Link to="/visa-assistance" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>
                </div>
           </div>
           <div className="col-md-4" data-aos="fade-right">
                 <div className="card" style={{width: '100%'}}>
                    <img src={room} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{hotelTitle}</h5>
                        <p className="card-text">{hotelLimitedText}</p>
                        <div style={{ textAlign: 'center' }}>
                            <Link to="/visa-assistance" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>
                </div>
           </div>
           <div className="col-md-4" data-aos="fade-up">
                 <div className="card" style={{width: '100%'}}>
                    <img src={conference} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{conferenceTitle}</h5>
                        <p className="card-text">{conferenceLimitedText}</p>
                        <div style={{ textAlign: 'center' }}>
                            <Link to="/visa-assistance" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>
                </div>
           </div>
           
           <div className="col-md-4" data-aos="fade-up">
                 <div className="card" style={{width: '100%'}}>
                    <img src={city2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{tourTitle}</h5>
                        <p className="card-text">{tourLimitedText}</p>
                        <div style={{ textAlign: 'center' }}>
                            <Link to="/visa-assistance" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>
                </div>
           </div>
           <div className="col-md-4" data-aos="fade-up">
                 <div className="card" style={{width: '100%'}}>
                    <img src={univeristy} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{studyTitle}</h5>
                        <p className="card-text">{studyLimitedText}</p>
                        <div style={{ textAlign: 'center' }}>
                            <Link to="/visa-assistance" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>
                </div>
           </div>
           <div className="col-md-4" data-aos="fade-up">
                 <div className="card" style={{width: '100%'}}>
                    <img src={insurance} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{insuranceTitle}</h5>
                        <p className="card-text">{insuranceLimitedText}</p>
                        <div style={{ textAlign: 'center' }}>
                            <Link to="/visa-assistance" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>
                </div>
           </div>
           <div className="col-md-4" data-aos="fade-up">
                 <div className="card" style={{width: '100%'}}>
                    <img src={tour} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{holidayTitle}</h5>
                        <p className="card-text">{holidayLimitedText}</p>
                        <div style={{ textAlign: 'center' }}>
                            <Link to="/visa-assistance" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>
                </div>
           </div>
        
           <div className="col-md-4" data-aos="fade-up">
                 <div className="card" style={{width: '100%'}}>
                    <img src={rentals} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{carTitle}</h5>
                        <p className="card-text">{carLimitedText}</p>
                        <div style={{ textAlign: 'center' }}>
                            <Link to="/visa-assistance" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>
                </div>
           </div>
           <div className="col-md-4" data-aos="fade-up">
                 <div className="card" style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={int_passport} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{passportTitle}</h5>
                        <p className="card-text">{passportLimitedText}</p>
                        <div style={{ textAlign: 'center' }}>
                            <Link to="/visa-assistance" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>
                </div>
           </div>
           <div className="col-md-4" data-aos="fade-up">
                 <div className="card" style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={luggage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{luggageTitle}</h5>
                        <p className="card-text">{luggageLimitedText}</p>
                        <div style={{ textAlign: 'center' }}>
                            <Link to="/visa-assistance" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>

);
    }

export default Products;


