
import React, {useEffect, useRef } from 'react';

import visa3 from '../../assets/visa3.jpg';
import plane2 from '../../assets/airplane_m.jpg';
import room from '../../assets/room.jpg';
import conference from '../../assets/conference1.jpg';
import insurance from '../../assets/insurance1.jpeg';
import univeristy from '../../assets/university1.jpg';

import city2 from '../../assets/city2.jpg';
import city3 from '../../assets/beach1.jpg';


import tour from '../../assets/city3.jpg';
import rentals from '../../assets/rentals1.jpg';
import int_passport from '../../assets/passport.webp';


import video1 from '../../assets/Videos/vacation1.mp4';
import luggage from '../../assets/luggage.jpg';

const Text_contents = () => {
    const visaTitle = "Visa Counseling & Assistance";
    const visaText = "At ReachGold Travels & Tours, we understand that obtaining a visa can often be a complex and daunting process, filled with uncertainties and challenges. That's why we offer comprehensive Visa Counseling & Assistance services to ensure that your journey towards acquiring the necessary travel documentation is smooth, hassle-free, and successful.";
    const visaLimitedText = visaText.split(" ").slice(0, 30).join(" ") + "...";
    const visaParagraph1= "Our team of experienced visa consultants is dedicated to providing personalized guidance and support tailored to your specific needs and requirements. Whether you're planning a leisure trip, embarking on a business venture, or pursuing educational opportunities abroad, we are here to simplify the visa application process for you.";
    const visaParagraph2="Here's how our Visa Counseling & Assistance services can benefit you:";
    const visaParagraph3= "Expert Guidance: Our knowledgeable consultants stay updated with the latest visa regulations and requirements across various countries and visa types. They will provide you with expert advice on the necessary documentation, eligibility criteria, and procedures involved in the visa application process."
    const visaParagraph4= "Customized Solutions: We understand that every traveler is unique, with different travel plans and objectives. That's why we offer personalized solutions tailored to your specific circumstances. Whether you need assistance with tourist visas, business visas, student visas, or any other visa category, we've got you covered."
    const visaParagraph5="Documentation Assistance: Gathering the required documents for a visa application can be overwhelming. Our team will meticulously review your documents, ensuring that everything is in order and meets the respective embassy or consulate's standards. We will also provide guidance on any additional documents that may be required to strengthen your application."
    const visaParagraph6="Application Support: Navigating through the visa application forms and processes can be confusing. We will assist you in filling out the necessary forms accurately and efficiently, minimizing the chances of errors or omissions that could delay the processing of your visa."
    const visaParagraph7= "Timely Updates: We understand the importance of staying informed about the status of your visa application. Our team will keep you updated throughout the entire process, providing timely notifications on any developments or requirements from the relevant authorities."
    const visaParagraph8="Peace of Mind: With our Visa Counseling & Assistance services, you can embark on your travel journey with confidence and peace of mind, knowing that you have a dedicated team supporting you every step of the way. Say goodbye to the stress and uncertainties associated with visa applications, and focus on what truly matters – enjoying your travel experience to the fullest."
    const visaParagraph9="Whether you're planning a solo adventure, a family vacation, or a corporate trip, let ReachGold Travels & Tours be your trusted partner in navigating the intricacies of visa requirements. Contact us today to learn more about our Visa Counseling & Assistance services and embark on your next travel adventure with ease."
   

    const flightTitle ="Flight Booking & Reservation";
    const flightText ="Welcome to ReachGold Travels & Tours, your premier destination for seamless flight booking and reservations. We understand the importance of hassle-free travel arrangements, which is why we are dedicated to providing you with top-notch services tailored to your needs.";
    const flightLimitedText = flightText.split(" ").slice(0, 30).join(" ") + "...";
    const flightParagraph2 = "Whether you're embarking on a business trip or planning your dream vacation, our team of experienced travel experts is here to assist you every step of the way. With access to a wide range of airlines and destinations worldwide, we ensure that you have plenty of options to choose from.";
    const flightParagraph3 = "At ReachGold Travels & Tours, we prioritize your comfort and convenience. From finding the best flight deals to securing preferred seating and arranging special requests, we go above and beyond to make your journey as smooth as possible.";
    const flightParagraph4 ="Why choose us for your flight booking and reservation needs?";
    const flightUL1 = "Personalized Service: We take the time to understand your preferences and tailor our services to suit your individual requirements.";
    const flightUL2 = "Competitive Pricing: Our partnerships with airlines allow us to offer competitive prices and exclusive deals, ensuring that you get the best value for your money.";
    const flightUL3 ="24/7 Support: Whether you have questions about your itinerary or need assistance during your travels, our dedicated support team is available round-the-clock to provide you with prompt assistance.";
    const flightUL4 ="Flexibility: We understand that plans can change, which is why we offer flexible booking options to accommodate your evolving needs.";
    const flightUL5 ="Expert Advice: Our team of travel professionals is well-versed in the intricacies of travel planning and is always ready to provide you with expert advice and recommendations.";
    const flightUL6 = "Experience the difference with ReachGold Travels & Tours. Book your flights with us today and embark on a journey filled with comfort, convenience, and unforgettable memories.";
    
    
    const hotelTitle = "Hotel Reservation";
    const hotelText = "Welcome to ReachGold Travels & Tours, your trusted partner for seamless hotel reservations around the globe. We understand that finding the perfect accommodation is essential for a memorable travel experience, which is why we are committed to providing you with personalized service and access to a wide range of hotels to suit every budget and preference.";
    const hotelLimitedText = hotelText.split(" ").slice(0, 20).join(" ") + "...";
    const hotelParagrap2 = "Whether you're planning a romantic getaway, a family vacation, or a business trip, our dedicated team of travel experts is here to assist you in finding the ideal accommodation that meets your needs and exceeds your expectations.";
    const hotelParagrap3="Why choose ReachGold Travels & Tours for your hotel reservations?";
    const hotelUL1="Extensive Selection: With access to an extensive network of hotels worldwide, we offer a diverse range of options to cater to every traveler's preferences, from luxurious resorts to budget-friendly accommodations.";
    const hotelUL2="Best Price Guarantee: We strive to offer you the best possible rates for your chosen accommodations, ensuring that you get the most value for your money.";
    const hotelUL3="Personalized Service: Our experienced travel advisors take the time to understand your specific requirements and preferences, providing personalized recommendations tailored to your needs.";
    const hotelUL4="Convenience: Booking your hotel through ReachGold Travels & Tours is quick, easy, and hassle-free. Simply let us know your desired dates, location, and preferences, and we'll take care of the rest.";
    const hotelUL5="24/7 Support: Whether you need assistance with booking changes, special requests, or any other inquiries, our dedicated support team is available around the clock to ensure that your travel experience is smooth and stress-free.";
    const hotelUL6="Experience the convenience and peace of mind that comes with booking your hotel reservations through ReachGold Travels & Tours. Let us help you find the perfect accommodation for your next journey. Book with us today and make your travel dreams a reality.";
    
    const conferenceTitle ="Conference & Fairs";
    const conferenceText ="Welcome to ReachGold Travels & Tours, your premier partner for organizing conferences and attending fairs worldwide. We understand the significance of these events for networking, professional growth, and business expansion, which is why we are committed to providing comprehensive services tailored to your needs."
    const conferenceLimitedText = conferenceText.split(" ").slice(0, 20).join(" ") + "...";
    const conferenceParagraph1 = "Welcome to ReachGold Travels & Tours, your premier partner for organizing conferences and attending fairs worldwide. We understand the significance of these events for networking, professional growth, and business expansion, which is why we are committed to providing comprehensive services tailored to your needs.";
    const conferenceParagraph2 = "Whether you're planning to host a conference, attend a trade fair, or participate in an industry event, our experienced team is here to handle all aspects of your trip, from logistics to accommodations, leaving you free to focus on making the most of your experience.";
    const conferenceParagraph3 ="Why choose ReachGold Travels & Tours for your conference and fair needs?";
    const conferenceUL1="Event Coordination: Our dedicated event planning team will work closely with you to understand your objectives and preferences, ensuring that every aspect of your conference or fair attendance is meticulously organized and executed.";
    const conferenceUL2="Venue Selection: With our extensive network of venues and partners worldwide, we'll help you find the perfect location for your event or identify the most suitable fairs and conferences to attend based on your industry and goals.";
    const conferenceUL3="Travel Logistics: From arranging flights and transportation to coordinating accommodations and on-site support, we take care of all your travel logistics, allowing you to focus on your event without worrying about the details.";
    const conferenceUL4="Customized Packages: We offer customizable packages tailored to your specific requirements, whether you need full-service event management or assistance with individual aspects of your trip.";
    const conferenceUL5="Expert Guidance: Our team of experienced travel professionals is well-versed in the intricacies of conference planning and fair attendance, providing you with expert guidance and support every step of the way.";
    const conferenceUL6="Experience the convenience and peace of mind that comes with partnering with ReachGold Travels & Tours for your conference and fair needs. Let us help you make your next event a success. Contact us today to discuss your requirements and start planning your trip.";
    
    
    const tourTitle = "Tour Packages";
    const tourText = "Welcome to ReachGold Travels & Tours, where unforgettable adventures await with our exclusive tour packages. Whether you're dreaming of exploring exotic destinations, immersing yourself in vibrant cultures, or embarking on thrilling adventures, we have the perfect tour package to suit your interests and preferences.";
    const tourLimitedText = tourText.split(" ").slice(0, 20).join(" ") + "...";
    const tourParagraph1 = "Why choose ReachGold Travels & Tours for your next getaway?"
    const tourUL1 = "Tailored Experiences: Our tour packages are carefully crafted to offer you unique and unforgettable experiences tailored to your interests, whether you're a nature lover, history enthusiast, or adrenaline junkie.";
    const tourUL2 = "Expertly Designed Itineraries: Leave the planning to us! Our expert travel planners have meticulously designed each itinerary to ensure that you make the most of your time in each destination, with carefully curated activities and sightseeing opportunities.";
    const tourUL3 = "Local Expertise: With our extensive network of local guides and partners, you'll have the opportunity to discover each destination from an insider's perspective, gaining insights into the culture, history, and traditions of the places you visit.";
    const tourUL4 = "Comfort and Convenience: Sit back, relax, and let us take care of all the details. From transportation and accommodations to meals and activities, we handle every aspect of your trip, ensuring a seamless and stress-free experience.";
    const tourUL5 = "Flexibility: Whether you prefer small group tours, private excursions, or custom itineraries, we offer flexibility to accommodate your preferences and travel style, allowing you to tailor your trip to suit your needs.";
    const tourUL6 = "Discover the world with ReachGold Travels & Tours and create memories that will last a lifetime. Browse our selection of tour packages today and start planning your next adventure with us. Let the journey begin!";
    
    const studyTitle = "Study Abroad";
    const studyText = "Welcome to ReachGold Travels & Tours, your gateway to unforgettable study abroad experiences. Embarking on a journey to study in a foreign country is an exciting opportunity for personal growth, academic enrichment, and cultural immersion, and we're here to support you every step of the way.";
    const studyLimitedText = studyText.split(" ").slice(0, 20).join(" ") + "...";
    const studyParagraph1 = "Why choose ReachGold Travels & Tours for your study abroad adventure?";
    const studyUL1 = "Expert Guidance: Our experienced team understands the intricacies of studying abroad and will provide you with expert guidance and support throughout the entire process, from choosing the right destination and program to navigating visa requirements and cultural adjustments.";
    const studyUL2 = "Comprehensive Services: We offer a wide range of services to ensure a smooth and hassle-free study abroad experience, including assistance with university applications, accommodation arrangements, airport transfers, travel insurance, and more.";
    const studyUL3 = "Personalized Approach: We understand that every student is unique, which is why we take a personalized approach to each study abroad journey. Whether you're seeking an academic program, language immersion experience, internship opportunity, or cultural exchange program, we'll tailor our services to meet your individual needs and aspirations.";
    const studyUL4 = "Safety and Support: Your safety and well-being are our top priorities. We provide comprehensive support services to help you feel safe and supported throughout your time abroad, including 24/7 emergency assistance and access to local resources and contacts.";
    const studyUL5 = "Cultural Immersion: Studying abroad isn't just about academics—it's also about immersing yourself in a new culture, language, and way of life. We'll help you make the most of your experience by connecting you with local communities, organizing cultural activities and excursions, and providing opportunities for meaningful cross-cultural exchanges.";
    const studyUL6 = "Embark on the adventure of a lifetime with ReachGold Travels & Tours and unlock the doors to endless opportunities for learning, growth, and discovery. Contact us today to start planning your study abroad journey and take the first step toward a brighter future.";
    
   
   
    const insuranceTitle = "Travel Insurrance";
    const insuranceText = "Welcome to ReachGold Travels & Tours, where we prioritize your peace of mind and safety with our comprehensive travel insurance solutions. We understand that unexpected events can occur during your travels, and having the right insurance coverage is essential for ensuring that you're protected against unforeseen circumstances.";
    const insuranceLimitedText = insuranceText.split(" ").slice(0, 20).join(" ") + "...";
    const insuranceParagraph1 = "Why choose ReachGold Travels & Tours for your travel insurance needs?";
    const insuranceUL1 = "Tailored Coverage: Our travel insurance plans are designed to meet the unique needs of every traveler. Whether you're embarking on a short vacation, a long-term adventure, or a business trip, we offer flexible coverage options to suit your specific requirements.";
    const insuranceUL2 = "Comprehensive Protection: Our travel insurance plans provide coverage for a wide range of scenarios, including trip cancellations, medical emergencies, lost baggage, flight delays, and more. With ReachGold Travels & Tours, you can travel with confidence knowing that you're protected against unforeseen expenses and disruptions.";
    const insuranceyU3 ="Global Assistance: Traveling abroad can be daunting, especially in unfamiliar environments. Our travel insurance plans include 24/7 global assistance services, ensuring that help is just a phone call away no matter where you are in the world. Whether you need medical assistance, travel advice, or emergency evacuation, our dedicated support team is here to assist you every step of the way.";
    const insuranceUL4 = "Convenience: Purchasing travel insurance through ReachGold Travels & Tours is quick, easy, and hassle-free. Our online booking platform allows you to compare different insurance plans, customize your coverage options, and secure your policy with just a few clicks, giving you peace of mind before you even embark on your journey.";
    const insuranceUL5 = "Affordable Rates: We believe that travel insurance should be accessible to all travelers, which is why we offer competitive rates and value-packed plans to suit every budget. With ReachGold Travels & Tours, you can enjoy the benefits of comprehensive coverage without breaking the bank.";
    const insuranceUL6 = "Don't leave your travel plans to chance—protect yourself and your loved ones with travel insurance from ReachGold Travels & Tours. Contact us today to learn more about our insurance options and ensure that your next adventure is worry-free from start to finish.";
    

    const holidayTitle = "Holiday Packages";
    const holidayText = "Welcome to ReachGold Travels & Tours, where we specialize in crafting unforgettable holiday experiences with our exclusive holiday packages. Whether you're dreaming of a tropical beach getaway, an adventurous mountain expedition, or a cultural immersion in a vibrant city, we have the perfect holiday package to turn your dreams into reality.";
    const holidayLimitedText = holidayText.split(" ").slice(0, 20).join(" ") + "...";
    const holidayParagraph1 = "Why choose ReachGold Travels & Tours for your holiday adventure?";
    const holidayUL1 =  "Tailored Experiences: Our holiday packages are carefully curated to cater to a variety of interests and preferences, ensuring that there's something for everyone. Whether you're seeking relaxation, adventure, romance, or cultural exploration, we'll tailor your holiday experience to exceed your expectations.";
    const holidayUL2 = "Expert Destination Knowledge: With our extensive experience and local expertise, we'll guide you to the best destinations, hidden gems, and must-see attractions, allowing you to make the most of your holiday experience.";
    const holidayUL3 = "Seamless Planning: Planning a holiday can be overwhelming, but with ReachGold Travels & Tours, it's a breeze. From flights and accommodations to activities and excursions, we handle all the details, so you can relax and enjoy a stress-free holiday experience from start to finish.";
    const holidayUL4 = "Flexibility: We understand that every traveler is unique, which is why we offer flexible holiday packages that can be tailored to your specific preferences and requirements. Whether you prefer a guided tour or a self-guided adventure, we'll customize your holiday experience to suit your needs.";
    const holidayUL5 = "Unparalleled Service: At ReachGold Travels & Tours, we're committed to providing you with exceptional service every step of the way. From the moment you inquire about a holiday package to the time you return home, our dedicated team will go above and beyond to ensure that your holiday exceeds your expectations.";
    const holidayUL6 = "Experience the magic of travel with ReachGold Travels & Tours. Browse our selection of holiday packages today and start planning your next adventure with us. Let us help you create memories that will last a lifetime.";
    
    
    const carTitle ="Car Hire & Airport Pick Up";
    const carText = "Welcome to ReachGold Travels & Tours, where we make your travel experience seamless and stress-free with our premium car hire and airport pick-up services. Whether you're arriving at a new destination or need reliable transportation during your stay, we've got you covered with our fleet of comfortable vehicles and professional drivers.";
    const carLimitedText = carText.split(" ").slice(0, 20).join(" ") + "...";
    const carParagraph1 = "Why choose ReachGold Travels & Tours for your car hire and airport pick-up needs?";
    const carUL1 ="Wide Selection of Vehicles: From compact cars to spacious SUVs, our diverse fleet offers a wide selection of vehicles to suit your needs and preferences. Whether you're traveling solo, with family, or in a group, we have the perfect vehicle to accommodate your requirements.";
    const carUL2 ="Professional Drivers: Our team of experienced and courteous drivers are committed to providing you with a safe and comfortable journey. With extensive knowledge of local routes and attractions, our drivers will ensure that you reach your destination efficiently and on time.";
    const carUL3 ="Convenient Airport Pick-Up: Arriving at a new destination can be overwhelming, but with our airport pick-up service, we'll be there to greet you upon arrival and whisk you away to your destination with ease. Say goodbye to long queues and unreliable taxis—we'll take care of everything so you can start your trip stress-free.";
    const carUL4 ="Flexible Booking Options: Whether you need a car for a few hours, a day, or an entire week, we offer flexible booking options to suit your schedule and budget. Simply let us know your requirements, and we'll tailor our services to meet your needs.";
    const carUL5 ="24/7 Customer Support: Our dedicated customer support team is available round-the-clock to assist you with any questions or concerns you may have. Whether you need to make changes to your reservation or require assistance during your journey, we're here to help.";
    const carUL6="Experience the convenience and comfort of traveling with ReachGold Travels & Tours. Book your car hire and airport pick-up services with us today and enjoy a hassle-free travel experience from the moment you arrive at your destination.";
    

    const passportTitle ="Int' Passport Assitance";
    const passportText ="Welcome to ReachGold Travels & Tours, your trusted partner for international passport assistance services. Whether you're applying for a new passport, renewing an existing one, or in need of expedited processing, we're here to simplify the passport application process and ensure that you're ready for your international travels.";
    const passportLimitedText = passportText.split(" ").slice(0, 20).join(" ") + "...";
    const passportParagraph1 = "Why choose ReachGold Travels & Tours for your international passport assistance needs?";
    const passportUL1 ="Expert Guidance: Navigating the passport application process can be complex, but with our experienced team by your side, you can rest assured that you're in good hands. We'll guide you through each step of the process, from gathering the required documents to submitting your application.";
    const passportUL2 ="Efficient Processing: We understand that time is of the essence when it comes to obtaining your passport, which is why we offer expedited processing services to ensure that you receive your passport in a timely manner. Whether you have an upcoming trip or need your passport urgently, we'll work quickly to meet your deadlines.";
    const passportUL3 ="const carUL1 =Personalized Service: At ReachGold Travels & Tours, we understand that every traveler has unique needs and preferences. That's why we offer personalized assistance tailored to your specific requirements, ensuring a smooth and hassle-free passport application experience.";
    const passportUL4 ="Comprehensive Support: Our services go beyond just passport application assistance. We also provide support with passport renewals, name changes, lost or stolen passports, and other passport-related issues, ensuring that you have everything you need for your international travels.";
    const passportUL5 ="Peace of Mind: With ReachGold Travels & Tours handling your passport application, you can enjoy peace of mind knowing that your application is being processed efficiently and accurately. We'll keep you informed every step of the way and address any concerns you may have along the journey.";
    const passportUL6 ="Don't let passport issues delay your travel plans. Trust ReachGold Travels & Tours to handle all your international passport assistance needs with professionalism, efficiency, and care. Contact us today to get started and embark on your next international adventure with confidence.";


    const luggageTitle ="Luggage Shipping";
    const luggageText ="ReachGold Travels and Tours simplifies your travel experience by offering reliable luggage shipping services. Say goodbye to the hassle of carrying heavy bags through airports and train stations. With our convenient luggage shipping service, you can enjoy a stress-free journey while we ensure your belongings reach your destination safely and on time.";
    const luggageLimitedText = luggageText.split(" ").slice(0, 20).join(" ") + "...";
    const luggageParagraph1 = "Whether you're traveling for business or pleasure, our team handles the logistics, allowing you to travel light and focus on enjoying your trip. We provide seamless door-to-door delivery, offering peace of mind and flexibility throughout your journey.";
    const luggageUL3 ="At ReachGold Travels and Tours, we prioritize efficiency and customer satisfaction, making us your trusted partner for all your luggage shipping needs. Experience the convenience of our services and embark on your travels with confidence.";
    return (
        
      
          {
            visaTitle, visaLimitedText,visa3,
            flightTitle,flightLimitedText,plane2,
            hotelTitle,hotelLimitedText, room,
            //conferenceText, conferenceLimitedText, conference,
            conferenceTitle,conferenceLimitedText,conference,
            tourTitle, tourLimitedText,tour,
            studyTitle, studyLimitedText,univeristy,
            insuranceTitle, insuranceLimitedText,insurance,
            luggageTitle, luggageLimitedText,luggage,
            holidayTitle,holidayLimitedText,city2,city3,
            carTitle, carLimitedText,rentals,
            passportTitle, passportLimitedText,int_passport,
            video1,
            
          }
            
    );
};

export default Text_contents