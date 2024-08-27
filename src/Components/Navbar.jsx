import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    
    //set toggle menu
    const toggleMenu =() =>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() =>{
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll',handleScroll);
        return () =>{
            window.addEventListener('scroll', handleScroll);
        }

    });

  
    // navbar links
    const navItems =[
        {link: "Home", path:"/"},
        {link: "Products", path:"/products"},
        {link: "Services", 
            subItems: [
                {link: "Service 1", path: "/service1"},
                {link: "Service 2", path: "/service2"},
               
            ]
        },
        {link: "About", path:"/about"},
        {link: "Career", path:"/careers"},
        {link: "Contact", path:"/contact_us"},
    ]

    return(
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0" data-aos="fade-right">
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" :""}`}>
                <div className="flex justify-between items-center text-base gap-8">
                    <Link to="/" className="text-2xl font-semibold flex items-center space-x-3">
                       
                        <span className="text-[#263238]">Reachgold Travels</span>
                    </Link>

                    {/* nav items for large screens */}
                    <ul className="md:flex space-x-12 hidden">
                        {navItems.map(({link, path, subItems}) => (
                            <li key={path}>
                                {subItems ? (
                                    <div className="relative">
                                        <Link to={path} className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">{link}</Link>
                                        <ul className="absolute top-full left-0 bg-white border border-gray-200 py-2 px-4 rounded shadow-md">
                                            {subItems.map(({link, path}) => (
                                                <li key={path}><Link to={path}>{link}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <Link to={path} className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">{link}</Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* btn for large devices */}
                    <div className="space-x-12 hidden lg:flex items-center">
                        <button className="bg-[red] text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">Contact Us</button>
                    </div>
                    {/* menu btn for mobile devices */}
                    <div className="md:hidden">
                        <button 
                        onClick={toggleMenu}
                        className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                            {
                                isMenuOpen ? (<FaTimes className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)
                            }
                        </button>
                    </div>
                </div>

                
                {/* nav items for mobile devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({link, path, subItems}) => (
                        <div key={path}>
                            {subItems ? (
                                <div className="relative">
                                    <Link to={path} className="block text-base hover:text-brandPrimary first:font-medium">{link}</Link>
                                    <ul className="mt-2">
                                        {subItems.map(({link, path}) => (
                                            <li key={path}><Link to={path} className="block text-base hover:text-brandPrimary">{link}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <Link to={path} className="block text-base hover:text-brandPrimary first:font-medium">{link}</Link>
                            )}
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
