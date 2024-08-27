import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../logo/reach.jpeg';
import '../App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Navs = () => {
    const [menuOpen, setMenuOpen] = useState(false);
   

    return (
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0" data-aos="fade-right">
        <nav className='py-4 lg:px-14 px-4'>
            <div className="flex justify-between items-center text-base brand">
                <Link to="/" className="text-2xl font-semibold flex items-center">
                    <img src={logo} alt="" className="logo" />
                    <span className="title">Reach<span>Gold</span></span>
                </Link>
            </div>
            <div className="menu"  onClick={()=>{setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            
            <ul className={menuOpen ? "open": ""}>
                <li><NavLink to="/">Home</NavLink></li>

                <li className="dropdown">
                    <button className="dropbtn">Services</button>
                    <div className="dropdown-content">
                    <NavLink to="/services">Visa Assistance</NavLink>
                    <NavLink to="/service2">Service 2</NavLink>
                    {/* Add more service sub-items as needed */}
                    </div>
                </li>

                <li className="dropdown">
                    <NavLink to="/tours">Tours</NavLink>
                    <div className="dropdown-content">
                        <NavLink to="/tour1">Tour 1</NavLink>
                        <NavLink to="/tour2">Tour 2</NavLink>
                      
                    </div>
                </li>
                
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact_us">Contact Us</NavLink></li>
                <li><NavLink to="/flight_deal">Flight Deal</NavLink></li>
                <li><NavLink to="/study_abroad">Study Abroad</NavLink></li>
            </ul>
        </nav>
    </header>
    

    );
};


export default Navs;



//<ul className={menuOpen ? "open" : ""}></ul>

