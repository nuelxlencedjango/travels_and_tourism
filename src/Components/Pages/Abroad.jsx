import React from 'react';
import './P.css';
import img from '../../assets/airport1.jpg';
import uni from '../../assets/student1.jpg';
import student from '../../assets/student.jpg';
import { Link } from "react-router-dom";
import america from '../../assets/america.jpg';







const ParallaxPage = () => {

  const services = [
    {
      id: 1,
      text: `Discover diverse academic opportunities and cultural experiences in vibrant US cities 
                Our university partners cater to various fields, ensuring a perfect match for your professional 
                                    aspirations. Enjoy world-class education, professional opportunities, 
                                    multicultural interactions, and access to stunning natural and cultural 
                                    landmarks for a holistic, enriching journey.`,

                                   
      country: "USA",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
        <clipPath id="t">
          <path d="M0 0v30h60V0z"/>
        </clipPath>
        <clipPath id="s">
          <path d="M30 15h30v15zv-15zm0-15h30v15zV0zm0 15H0v15zm0-15H0v15z"/>
        </clipPath>
        <g clipPath="url(#t)">
          <path d="M0 0v30h60V0z" fill="#012169"/>
          <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
          <path d="M0 0l60 30m0-30L0 30" clipPath="url(#s)" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
          <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
      </svg>
      
      )
    },
    {
      id: 2,
      text: `Explore a world of academic excellence and cultural diversity in the welcoming cities of Canada. Our programs span a wide
       range of fields, ensuring the perfect match for your academic and professional 
       goals. Benefit from world-class education at prestigious universities,
        access to innovative research opportunities, and robust professional
         development through internships and professional jobs.
         Engage in a dynamic learning environment that fosters innovation and global perspectives that will enhance your personal
          and professional growth .`,
      country: "Canada",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      )
    },
    {
      id: 3,
      text: `Embark on a unique academic adventure in the heart of South America. Our partner 
      universities in Brazil offer diverse fields of study, aligning with your career 
      goals. Experience world-class education, professional growth, rich multicultural 
      interactions, and explore Brazil's breathtaking natural wonders and vibrant 
      cultural heritage for a truly enriching journey.
     
      `,
      country: "Brazil",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
      )
    },
    {
      id: 4,
      text:  `

       The United Kingdom offers diverse fields of study that align with your career goals. 
       Experience world-class education and professional growth, while engaging in rich
        multicultural interactions. Explore the UK's historic landmarks, stunning 
        countryside, and vibrant cities for a truly enriching journey. From the iconic 
        streets of London to the picturesque landscapes of the Scottish Highlands,
         embark on an educational journey that extends far beyond the classroom.
       `,
      country: "United Kingdom",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      )
    },
    {
      id: 5,
      text: `Experience academic excellence and cultural diversity in the heart of 
      Europe with our study abroad programs in Germany. Explore a wide range of 
      disciplines tailored to your academic and professional goals. Experience 
      world-class education at renowned German universities known for their research 
      excellence and practical learning opportunities. Engage in innovative research
       projects and gain valuable industry insights through internships and 
       collaborations with leading German companies.`,
      country: "Germany",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      )
    },
    {
      id: 6,
      text: `Sweden offers diverse fields of study that align with your career goals.
       Experience high-quality education and opportunities for professional growth, 
       while immersing yourself in a progressive and innovative academic environment.
        Explore Sweden's pristine natural landscapes, vibrant cities, and rich 
        cultural heritage for a truly enriching journey. From the serene beauty of 
        Swedish lakes to the dynamic streets of Stockholm, embark on an educational
         adventure that goes beyond traditional learning boundaries
      `
      
      
      ,
      country: "Sweden",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      )
    },
    {
      id: 6,
      text: `
     
     
      Experience Portugal’s academic diversity with affordable fees, high-quality education, professional development opportunities, and vibrant cultural interactions. Immerse yourself in its rich history and stunning natural landscapes. Discover why Portugal is a compelling choice for your studies.
      `,
      country: "Portgual",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      )
    }
    
    // Add more services as needed...
  ];
  

  return (

    <div className="parallax-container">
       <div className="background-container"></div>
      <div className="parallax-section">
          <div className="content inter">
               <h3>Explore, Learn, Excel: Your Gateway to Global Education</h3>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                   <div className="education-text">
                     <div className="international">
                        <p>Embark on a journey of discovery and education with <span className='reach'>Reachgold Travels & Tours</span>. We specialize in facilitating 
                         students' admission to prestigious foreign universities. Our tailored services 
                         blend seamless travel experiences with expert guidance, ensuring a smooth 
                         transition into the world of international academia.
                        </p>

                             <h5>Why Choose Us For Your School Admission?</h5>
                         <div className="international_reason">
                          <ul>
                            <li>
                              <h6>Expert Guidance</h6>
                              <p>Our team of seasoned professionals boasts extensive knowledge of 
                              the intricacies involved in securing admissions to foreign universities. 
                              We provide personalized assistance at every step of the process, from university 
                              selection to application submission.</p>
                              </li>

                            <li>
                              <h6>Selection</h6> 
                               <p>Gain access to our extensive network of partner universities, 
                               renowned for their academic excellence and global reputation.</p>
                               </li>  
                            <li>
                              <h6>Diverse Destinations</h6>
                              <p>From bustling metropolises to quaint college towns, we offer 
                               access to a wide array of destinations worldwide. Whether you dream of studying 
                               in the heart of Europe, the vibrant cities of North America, or the cultural hubs 
                               of Asia, we have you covered.</p>
                               </li>  

                              <li>
                                <h6>Customized Itineraries</h6>
                                  <p>No two educational journeys are alike. We understand that each student has 
                                  unique aspirations and requirements. That's why we work closely with you to 
                                  create bespoke travel itineraries that align with your academic goals, 
                                  preferences, and budget.</p>
                                  </li>  
                                <li>
                                  <h6>Comprehensive Support</h6> 
                                  <p>Beyond assisting with admissions, we provide comprehensive 
                                    support to ensure a seamless transition to your new academic environment. 
                                     From visa procurement to accommodation arrangements, we handle all the logistical 
                                      details, allowing you to focus on your studies.</p>
                                      </li>  
                                <li>
                                  <h6>Application Assistance</h6> 
                                  <p>Receive expert guidance on the application process, including 
                                    document preparation, essay writing, and interview preparation.</p>
                                    </li>  
                                <li>
                                  <h6>Visa Support</h6>
                                   <p>Navigate the visa application process with ease, as our experienced team 
                                    assists you in compiling the necessary documentation and scheduling embassy 
                                     appointments.</p>
                                     </li>  
                                 <li>
                                  <h6>Travel Arrangements</h6>
                                     <p>Sit back and relax as we take care of all your travel 
                                      arrangements, from flights and accommodation to airport transfers and local 
                                      transportation.</p>
                                      </li>  
<                                  li> 
                                     <h6>Pre-departure Orientation</h6>
                                      <p>Prepare for your overseas adventure with our 
                                      comprehensive pre-departure orientation sessions, covering topics such as 
                                      cultural adjustment, academic expectations, and safety guidelines.</p>
                                      </li>  
                                </ul>
                            </div>
                    </div>
                 </div>
                </div>
                <div className="col-sm-6">
                    <div className="inter-img">
                       <div className="international-img">
                          <img src={uni} alt="" />
                        </div>
                    </div>

                 </div>
                 
          </div>
        </div>

      </div>
    </div>


    <div className="background-container"></div>
      <div className="parallax-section">
          <div className="content inter">
               <h3>Our Destinations</h3>
                  <div className="container">
              
                   <div className="education-text">
                     <div className="international">
                       <p>Engage in cutting-edge research projects at renowned institutions worldwide. Work alongside experts in your field, contribute to meaningful research, and enhance your academic profile</p>


                       

                        

                         {services.map(service => (
                          
                          <div className="location-container">
                          
                          <div className="row">

                            <div className="col-md-2">
                            <div className="location-box">
                              <button className='nation'>{service.country}  {service.icon}</button>
                          </div>
                            </div>

                            <div className="col-md-8">
                            <div className="con">
                        
                                 <p>{service.text}</p>
                            </div>
                            </div>
                            <div className="col-md-2 nation-btn">
                           <Link to="/contact_us" className='btn btn-danger'>Contact us Now!</Link>

                            </div>
                          </div>
                         </div>
                        ))}


                      </div>

                 </div>
             
                 
          </div>
        </div>

      </div>
  



    <div className="background-container"></div>
      <div className="parallax-section">
          <div className="content inter">
               <h3>Our Destinations</h3>
                <p>Immerse yourself in a new culture, learn from esteemed faculty, and earn credits 
                towards your degree while pursuing academic excellence overseas. Whether you are 
                aiming for an undergraduate degree, a master's program, a PhD, or any other form 
                of postgraduate study, we are here to ensure your transition is smooth, 
                enjoyable, and successful.</p>

            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                   <div className="education-text">
                     <div className="international">
                      <h3>Americas</h3>
                    
                        <p>Whether you are aiming for an undergraduate degree, a master's program, a PhD, or any other form of postgraduate study, we are here to ensure your transition is smooth, enjoyable, and successful.</p>

                             <h5>USA</h5>
                         <div className="international_reason">
                          <ul>
                            <li>
                              <h6>Starting your higher education journey abroad opens a world of opportunities. 
                                With our services, you can:</h6>

                                <p>Find the Best Fit: We'll help you choose the right university and program that align with your interests and career goals.</p>
                              <p>Explore a wide range of academic opportunities and cultural experiences in some of the most vibrant cities in the United States. Our programs are designed to cater to a variety of fields of study, ensuring that you find the perfect match for your academic 
                                and professional aspirations.</p>
                              </li>

                            <li>
                              <h6>Selection</h6> 
                               <p>Gain access to our extensive network of partner universities, 
                               renowned for their academic excellence and global reputation.</p>
                               </li>  
                            <li>
                              <h6>Diverse Destinations</h6>
                              <p>From bustling metropolises to quaint college towns, we offer 
                               access to a wide array of destinations worldwide. Whether you dream of studying 
                               in the heart of Europe, the vibrant cities of North America, or the cultural hubs 
                               of Asia, we have you covered.</p>
                               </li>  

                              <li>
                                <h6>Customized Itineraries</h6>
                                  <p>No two educational journeys are alike. We understand that each student has 
                                  unique aspirations and requirements. That's why we work closely with you to 
                                  create bespoke travel itineraries that align with your academic goals, 
                                  preferences, and budget.</p>
                                  </li>  
                                <li>
                                  <h6>Comprehensive Support</h6> 
                                  <p>Beyond assisting with admissions, we provide comprehensive 
                                    support to ensure a seamless transition to your new academic environment. 
                                     From visa procurement to accommodation arrangements, we handle all the logistical 
                                      details, allowing you to focus on your studies.</p>
                                      </li>  
                                <li>
                                  <h6>Application Assistance</h6> 
                                  <p>Receive expert guidance on the application process, including 
                                    document preparation, essay writing, and interview preparation.</p>
                                    </li>  
                                <li>
                                  <h6>Visa Support</h6>
                                   <p>Navigate the visa application process with ease, as our experienced team 
                                    assists you in compiling the necessary documentation and scheduling embassy 
                                     appointments.</p>
                                     </li>  
                                 <li>
                                  <h6>Travel Arrangements</h6>
                                     <p>Sit back and relax as we take care of all your travel 
                                      arrangements, from flights and accommodation to airport transfers and local 
                                      transportation.</p>
                                      </li>  
<                                  li> 
                                     <h6>Pre-departure Orientation</h6>
                                      <p>Prepare for your overseas adventure with our 
                                      comprehensive pre-departure orientation sessions, covering topics such as 
                                      cultural adjustment, academic expectations, and safety guidelines.</p>
                                      </li>  
                                </ul>
                            </div>
                    </div>
                 </div>
                </div>
                <div className="col-sm-6">
                    <div className="inter-img">
                       <div className="international-img">
                          <img src={uni} alt="" />
                        </div>
                    </div>

                 </div>
                 
          </div>
        </div>

      </div>
    </div>

   {/* First Section */}
      <div className="parallax-section background-container"></div>

      <div className="parallax-section background-container">
        <div className="content inter">
        <h3>Programs Offered</h3>
          <div className="i_students">
           
            <div className="inter-img">
              <div className="international-img">
                <img src={student} alt="" />
              </div>
            </div>

            <div className="international">
          
              <div className="international_reason">
            <ul>

              <li>Expert Guidance: Our team of seasoned professionals boasts extensive knowledge of 
                the intricacies involved in securing admissions to foreign universities. 
                We provide personalized assistance at every step of the process, from university 
                selection to application submission.</li>
              <li>University Selection: Gain access to our extensive network of partner universities, 
                renowned for their academic excellence and global reputation.</li>  
              <li>Diverse Destinations: From bustling metropolises to quaint college towns, we offer 
                access to a wide array of destinations worldwide. Whether you dream of studying 
                in the heart of Europe, the vibrant cities of North America, or the cultural hubs 
                of Asia, we have you covered.</li>  
              <li>Customized Itineraries: No two educational journeys are alike. We understand that each student has 
                unique aspirations and requirements. That's why we work closely with you to 
                create bespoke travel itineraries that align with your academic goals, 
                preferences, and budget.</li>  
              <li>Comprehensive Support: Beyond assisting with admissions, we provide comprehensive 
                support to ensure a seamless transition to your new academic environment. 
                From visa procurement to accommodation arrangements, we handle all the logistical 
                details, allowing you to focus on your studies.</li>  
              <li>Application Assistance: Receive expert guidance on the application process, including 
                document preparation, essay writing, and interview preparation.</li>  
              <li>Visa Support: Navigate the visa application process with ease, as our experienced team 
                assists you in compiling the necessary documentation and scheduling embassy 
                appointments.</li>  
              <li>Travel Arrangements: Sit back and relax as we take care of all your travel 
                arrangements, from flights and accommodation to airport transfers and local 
                transportation.</li>  
              <li>Pre-departure Orientation: Prepare for your overseas adventure with our 
                comprehensive pre-departure orientation sessions, covering topics such as 
                cultural adjustment, academic expectations, and safety guidelines.</li>  
            </ul>
           </div>
          </div>
          </div>
        </div>
      </div>



      <div className="parallax-section background-container"></div>
      <div className="parallax-section background-container">
        <div className="content inter">
          <div className="i_students">
           
            <div className="international">
          
              <div className="international_reason">
            <ul>

              <li>Expert Guidance: Our team of seasoned professionals boasts extensive knowledge of 
                the intricacies involved in securing admissions to foreign universities. 
                We provide personalized assistance at every step of the process, from university 
                selection to application submission.</li>
              <li>University Selection: Gain access to our extensive network of partner universities, 
                renowned for their academic excellence and global reputation.</li>  
              <li>Diverse Destinations: From bustling metropolises to quaint college towns, we offer 
                access to a wide array of destinations worldwide. Whether you dream of studying 
                in the heart of Europe, the vibrant cities of North America, or the cultural hubs 
                of Asia, we have you covered.</li>  
              <li>Customized Itineraries: No two educational journeys are alike. We understand that each student has 
                unique aspirations and requirements. That's why we work closely with you to 
                create bespoke travel itineraries that align with your academic goals, 
                preferences, and budget.</li>  
              <li>Comprehensive Support: Beyond assisting with admissions, we provide comprehensive 
                support to ensure a seamless transition to your new academic environment. 
                From visa procurement to accommodation arrangements, we handle all the logistical 
                details, allowing you to focus on your studies.</li>  
              <li>Application Assistance: Receive expert guidance on the application process, including 
                document preparation, essay writing, and interview preparation.</li>  
              <li>Visa Support: Navigate the visa application process with ease, as our experienced team 
                assists you in compiling the necessary documentation and scheduling embassy 
                appointments.</li>  
              <li>Travel Arrangements: Sit back and relax as we take care of all your travel 
                arrangements, from flights and accommodation to airport transfers and local 
                transportation.</li>  
              <li>Pre-departure Orientation: Prepare for your overseas adventure with our 
                comprehensive pre-departure orientation sessions, covering topics such as 
                cultural adjustment, academic expectations, and safety guidelines.</li>  
            </ul>
           </div>
          </div>

          <div className="inter-img">
              <div className="international-img">
                <img src={img} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="parallax-section background-container"></div>
       {/* Fourth Section */}
       <div className="parallax-section background-container">
        <div className="content fees">
          <h3>Fees</h3>
          <div className="cost">
            <p>Why Wait? Start Your Journey Today! (including fall and spring semesters)</p>
            <p>Don't let geographical boundaries limit your educational aspirations. With 
              [Travel and Tour Company Name], the world becomes your classroom. Contact us 
              today to embark on a transformative educational journey that will broaden your 
              horizons and shape your future. Explore. Learn. Excel.</p>
          </div>
        </div>
      </div>
      <div className="parallax-section background-container"></div>
      {/* First Section */}
      <div className="parallax-section background-container">
        <div className="content appli">
          <h2>How to apply to Pendleton Chapel seminary school</h2>
          <form action="" method="get" className="search-form">
            <div className="input-container">
              <input type="text" name="search" placeholder="Search for a program, intake or certificate awarded" className="input-search" />
              <button type="submit" className="btn btn-primary search-button">Search</button>
            </div>
          </form>
          <div className="row">
            <div className="col-md-6 apply-info">
              <div className="apply">
                <p>Find your program and apply to Pendleton Chapel seminary school today! Your application process will vary depending on the program you’re applying to and your particular pathway into Pendleton Chapel seminary school.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="apply-directions">
                <div className="process">
                  <div className="search-course course-path">
                    <a href="">
                      <i className="fa-solid fa-circle-check"></i>
                      <p>Select A Program</p>
                    </a>
                  </div>
                  <div className="meet-course course-path">
                    <a href="">
                      <i className="fa-solid fa-handshake"></i>
                      <p>Meet The Requirements</p>
                    </a>
                  </div>
                  <div className="meet-course course-path">
                    <a href="">
                      <i className="fa-solid fa-file-pdf"></i>
                      <p>Submit In Time</p>
                    </a>
                  </div>
                </div>
                <div className="roadmap">
                  <div className="meet-course course-path">
                    <a href="">
                      <i className="fa-solid fa-money-bill-transfer"></i>
                      <p>Track your Status</p>
                    </a>
                  </div>
                  <div className="meet-course course-path">
                    <a href="">
                      <i className="fa-solid fa-comment-dollar"></i>
                      <p>Pay Your Deposit</p>
                    </a>
                  </div>
                  <div className="meet-course course-path">
                    <a href="">
                      <i className="fa-solid fa-arrow-trend-up"></i>
                      <p>Contact Us</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parallax-section background-container"></div>
      {/* Second Section */}
      <div className="parallax-section background-container">
        <div className="content u_admission">
          <div className="undergraduate-programs">
            <div className="undergraduate"> 
              <h3>Explore!</h3>
              <img src={img} alt="" />
              <p>Explore our range of full-time programs, which includes a variety of options such as certificates, diplomas, graduate certificates, and degrees, all available at Pendleton Chapel seminary school.</p>
              <p>Pendleton Chapel seminary school offers different application procedures and deadlines that depend on your academic status and progress. Discover the application that suits your needs and make sure to complete and submit it on time to be considered for enrollment.</p>
              <div className="button">
                <a href="" className="btn btn-primary">Apply</a>
              </div>
            </div>
            <div className="undergraduate"> 
              <div className="s_programs">
                <h3>Having difficulty choosing a program?</h3>
                <img src={img} alt="" />
                <p>Selecting the correct career path or educational program is a major decision, and it's not always straightforward to determine which one aligns best with your goals and aspirations. Whether you're a recent graduate exploring your options, contemplating a career change, or simply seeking guidance on your educational journey, accessing career success services can be a valuable step in making well-informed decisions.</p>
                <p>Feel free to reach out to our educational, career experts who can provide guidance and support on your path to success.</p>
                <div className="button">
                  <a href="" className="btn btn-primary">Apply</a>
                </div>
              </div>
            </div>
            <div className="undergraduate"> 
              <div className="s_programs">
                <h3>Specialized Career</h3>
                <img src={img} alt="" />
                <p>Are You Seeking a Career in a Specialized Field? We Have You in Mind. In today's rapidly evolving job market, many individuals are pursuing careers in highly specialized fields to capitalize on their unique skills, passions, and interests. At [Your College Name], we understand the importance of fostering and supporting the aspirations of those who are committed to becoming experts in their chosen domains.</p>
                <div className="button">
                  <a href="" className="btn btn-primary">Apply</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="parallax-section">
          <div className="content inter">
               <h3>Explore, Learn, Excel: Your Gateway to Global Education</h3>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                   <div className="education-text">
                     <div className="international">
                        <p>Embark on a journey of discovery and education with <span className='reach'>Reachgold Travels & Tours</span>. We specialize in facilitating 
                         students' admission to prestigious foreign universities. Our tailored services 
                         blend seamless travel experiences with expert guidance, ensuring a smooth 
                         transition into the world of international academia.
                        </p>

                             <h5>Why Choose Us For Your School Admission?</h5>
                         <div className="international_reason">
                          <ul>
                            <li>
                              <h6>Expert Guidance</h6>
                              <p>Our team of seasoned professionals boasts extensive knowledge of 
                              the intricacies involved in securing admissions to foreign universities. 
                              We provide personalized assistance at every step of the process, from university 
                              selection to application submission.</p>
                              </li>

                            <li>
                              <h6>Selection</h6> 
                               <p>Gain access to our extensive network of partner universities, 
                               renowned for their academic excellence and global reputation.</p>
                               </li>  
                            <li>
                              <h6>Diverse Destinations</h6>
                              <p>From bustling metropolises to quaint college towns, we offer 
                               access to a wide array of destinations worldwide. Whether you dream of studying 
                               in the heart of Europe, the vibrant cities of North America, or the cultural hubs 
                               of Asia, we have you covered.</p>
                               </li>  

                              <li>
                                <h6>Customized Itineraries</h6>
                                  <p>No two educational journeys are alike. We understand that each student has 
                                  unique aspirations and requirements. That's why we work closely with you to 
                                  create bespoke travel itineraries that align with your academic goals, 
                                  preferences, and budget.</p>
                                  </li>  
                                <li>
                                  <h6>Comprehensive Support</h6> 
                                  <p>Beyond assisting with admissions, we provide comprehensive 
                                    support to ensure a seamless transition to your new academic environment. 
                                     From visa procurement to accommodation arrangements, we handle all the logistical 
                                      details, allowing you to focus on your studies.</p>
                                      </li>  
                                <li>
                                  <h6>Application Assistance</h6> 
                                  <p>Receive expert guidance on the application process, including 
                                    document preparation, essay writing, and interview preparation.</p>
                                    </li>  
                                <li>
                                  <h6>Visa Support</h6>
                                   <p>Navigate the visa application process with ease, as our experienced team 
                                    assists you in compiling the necessary documentation and scheduling embassy 
                                     appointments.</p>
                                     </li>  
                                 <li>
                                  <h6>Travel Arrangements</h6>
                                     <p>Sit back and relax as we take care of all your travel 
                                      arrangements, from flights and accommodation to airport transfers and local 
                                      transportation.</p>
                                      </li>  
<                                  li> 
                                     <h6>Pre-departure Orientation</h6>
                                      <p>Prepare for your overseas adventure with our 
                                      comprehensive pre-departure orientation sessions, covering topics such as 
                                      cultural adjustment, academic expectations, and safety guidelines.</p>
                                      </li>  
                                </ul>
                            </div>
                    </div>
                 </div>
                </div>
                <div className="col-sm-6">
                    <div className="inter-img">
                       <div className="international-img">
                          <img src={uni} alt="" />
                        </div>
                    </div>

                 </div>
                 
          </div>
        </div>

      </div>
    </div>


    <div className="background-container"></div>
      <div className="parallax-section">
          <div className="content inter">
               <h3>Explore, Learn, Excel: Your Gateway to Global Education</h3>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                   <div className="education-text">
                     <div className="international">
                        <p>Embark on a journey of discovery and education with <span className='reach'>Reachgold Travels & Tours</span>. We specialize in facilitating 
                         students' admission to prestigious foreign universities. Our tailored services 
                         blend seamless travel experiences with expert guidance, ensuring a smooth 
                         transition into the world of international academia.
                        </p>
                        <p>Whether you are aiming for an undergraduate degree, a master's program, a PhD, or any other form of postgraduate study, we are here to ensure your transition is smooth, enjoyable, and successful.</p>

                             <h5>Why Choose Us For Your School Admission?</h5>
                         <div className="international_reason">
                          <ul>
                            <li>
                              <h6>Expert Guidance</h6>
                              <p>Our team of seasoned professionals boasts extensive knowledge of 
                              the intricacies involved in securing admissions to foreign universities. 
                              We provide personalized assistance at every step of the process, from university 
                              selection to application submission.</p>
                              </li>

                            <li>
                              <h6>Selection</h6> 
                               <p>Gain access to our extensive network of partner universities, 
                               renowned for their academic excellence and global reputation.</p>
                               </li>  
                            <li>
                              <h6>Diverse Destinations</h6>
                              <p>From bustling metropolises to quaint college towns, we offer 
                               access to a wide array of destinations worldwide. Whether you dream of studying 
                               in the heart of Europe, the vibrant cities of North America, or the cultural hubs 
                               of Asia, we have you covered.</p>
                               </li>  

                              <li>
                                <h6>Customized Itineraries</h6>
                                  <p>No two educational journeys are alike. We understand that each student has 
                                  unique aspirations and requirements. That's why we work closely with you to 
                                  create bespoke travel itineraries that align with your academic goals, 
                                  preferences, and budget.</p>
                                  </li>  
                                <li>
                                  <h6>Comprehensive Support</h6> 
                                  <p>Beyond assisting with admissions, we provide comprehensive 
                                    support to ensure a seamless transition to your new academic environment. 
                                     From visa procurement to accommodation arrangements, we handle all the logistical 
                                      details, allowing you to focus on your studies.</p>
                                      </li>  
                                <li>
                                  <h6>Application Assistance</h6> 
                                  <p>Receive expert guidance on the application process, including 
                                    document preparation, essay writing, and interview preparation.</p>
                                    </li>  
                                <li>
                                  <h6>Visa Support</h6>
                                   <p>Navigate the visa application process with ease, as our experienced team 
                                    assists you in compiling the necessary documentation and scheduling embassy 
                                     appointments.</p>
                                     </li>  
                                 <li>
                                  <h6>Travel Arrangements</h6>
                                     <p>Sit back and relax as we take care of all your travel 
                                      arrangements, from flights and accommodation to airport transfers and local 
                                      transportation.</p>
                                      </li>  
<                                  li> 
                                     <h6>Pre-departure Orientation</h6>
                                      <p>Prepare for your overseas adventure with our 
                                      comprehensive pre-departure orientation sessions, covering topics such as 
                                      cultural adjustment, academic expectations, and safety guidelines.</p>
                                      </li>  
                                </ul>
                            </div>
                    </div>
                 </div>
                </div>
                <div className="col-sm-6">
                    <div className="inter-img">
                       <div className="international-img">
                          <img src={uni} alt="" />
                        </div>
                    </div>

                 </div>
                 
          </div>
        </div>

      </div>
    </div>

   {/* First Section */}
      <div className="parallax-section background-container"></div>

      <div className="parallax-section background-container">
        <div className="content inter">
        <h3>Programs Offered</h3>
          <div className="i_students">
           
            <div className="inter-img">
              <div className="international-img">
                <img src={student} alt="" />
              </div>
            </div>

            <div className="international">
          
              <div className="international_reason">
            <ul>

              <li>Expert Guidance: Our team of seasoned professionals boasts extensive knowledge of 
                the intricacies involved in securing admissions to foreign universities. 
                We provide personalized assistance at every step of the process, from university 
                selection to application submission.</li>
              <li>University Selection: Gain access to our extensive network of partner universities, 
                renowned for their academic excellence and global reputation.</li>  
              <li>Diverse Destinations: From bustling metropolises to quaint college towns, we offer 
                access to a wide array of destinations worldwide. Whether you dream of studying 
                in the heart of Europe, the vibrant cities of North America, or the cultural hubs 
                of Asia, we have you covered.</li>  
              <li>Customized Itineraries: No two educational journeys are alike. We understand that each student has 
                unique aspirations and requirements. That's why we work closely with you to 
                create bespoke travel itineraries that align with your academic goals, 
                preferences, and budget.</li>  
              <li>Comprehensive Support: Beyond assisting with admissions, we provide comprehensive 
                support to ensure a seamless transition to your new academic environment. 
                From visa procurement to accommodation arrangements, we handle all the logistical 
                details, allowing you to focus on your studies.</li>  
              <li>Application Assistance: Receive expert guidance on the application process, including 
                document preparation, essay writing, and interview preparation.</li>  
              <li>Visa Support: Navigate the visa application process with ease, as our experienced team 
                assists you in compiling the necessary documentation and scheduling embassy 
                appointments.</li>  
              <li>Travel Arrangements: Sit back and relax as we take care of all your travel 
                arrangements, from flights and accommodation to airport transfers and local 
                transportation.</li>  
              <li>Pre-departure Orientation: Prepare for your overseas adventure with our 
                comprehensive pre-departure orientation sessions, covering topics such as 
                cultural adjustment, academic expectations, and safety guidelines.</li>  
            </ul>
           </div>
          </div>
          </div>
        </div>
      </div>



      <div className="parallax-section background-container"></div>
      <div className="parallax-section background-container">
        <div className="content inter">
          <div className="i_students">
           
            <div className="international">
          
              <div className="international_reason">
            <ul>

              <li>Expert Guidance: Our team of seasoned professionals boasts extensive knowledge of 
                the intricacies involved in securing admissions to foreign universities. 
                We provide personalized assistance at every step of the process, from university 
                selection to application submission.</li>
              <li>University Selection: Gain access to our extensive network of partner universities, 
                renowned for their academic excellence and global reputation.</li>  
              <li>Diverse Destinations: From bustling metropolises to quaint college towns, we offer 
                access to a wide array of destinations worldwide. Whether you dream of studying 
                in the heart of Europe, the vibrant cities of North America, or the cultural hubs 
                of Asia, we have you covered.</li>  
              <li>Customized Itineraries: No two educational journeys are alike. We understand that each student has 
                unique aspirations and requirements. That's why we work closely with you to 
                create bespoke travel itineraries that align with your academic goals, 
                preferences, and budget.</li>  
              <li>Comprehensive Support: Beyond assisting with admissions, we provide comprehensive 
                support to ensure a seamless transition to your new academic environment. 
                From visa procurement to accommodation arrangements, we handle all the logistical 
                details, allowing you to focus on your studies.</li>  
              <li>Application Assistance: Receive expert guidance on the application process, including 
                document preparation, essay writing, and interview preparation.</li>  
              <li>Visa Support: Navigate the visa application process with ease, as our experienced team 
                assists you in compiling the necessary documentation and scheduling embassy 
                appointments.</li>  
              <li>Travel Arrangements: Sit back and relax as we take care of all your travel 
                arrangements, from flights and accommodation to airport transfers and local 
                transportation.</li>  
              <li>Pre-departure Orientation: Prepare for your overseas adventure with our 
                comprehensive pre-departure orientation sessions, covering topics such as 
                cultural adjustment, academic expectations, and safety guidelines.</li>  
            </ul>
           </div>
          </div>

          <div className="inter-img">
              <div className="international-img">
                <img src={img} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="parallax-section background-container"></div>
       {/* Fourth Section */}
       <div className="parallax-section background-container">
        <div className="content fees">
          <h3>Fees</h3>
          <div className="cost">
            <p>Why Wait? Start Your Journey Today! (including fall and spring semesters)</p>
            <p>Don't let geographical boundaries limit your educational aspirations. With 
              [Travel and Tour Company Name], the world becomes your classroom. Contact us 
              today to embark on a transformative educational journey that will broaden your 
              horizons and shape your future. Explore. Learn. Excel.</p>
          </div>
        </div>
      </div>
      <div className="parallax-section background-container"></div>
      {/* First Section */}
      <div className="parallax-section background-container">
        <div className="content appli">
          <h2>How to apply to Pendleton Chapel seminary school</h2>
          <form action="" method="get" className="search-form">
            <div className="input-container">
              <input type="text" name="search" placeholder="Search for a program, intake or certificate awarded" className="input-search" />
              <button type="submit" className="btn btn-primary search-button">Search</button>
            </div>
          </form>
          <div className="row">
            <div className="col-md-6 apply-info">
              <div className="apply">
                <p>Find your program and apply to Pendleton Chapel seminary school today! Your application process will vary depending on the program you’re applying to and your particular pathway into Pendleton Chapel seminary school.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="apply-directions">
                <div className="process">
                  <div className="search-course course-path">
                    <a href="">
                      <i className="fa-solid fa-circle-check"></i>
                      <p>Select A Program</p>
                    </a>
                  </div>
                  <div className="meet-course course-path">
                    <a href="">
                      <i className="fa-solid fa-handshake"></i>
                      <p>Meet The Requirements</p>
                    </a>
                  </div>
                  <div className="meet-course course-path">
                    <a href="">
                      <i className="fa-solid fa-file-pdf"></i>
                      <p>Submit In Time</p>
                    </a>
                  </div>
                </div>
                <div className="roadmap">
                  <div className="meet-course course-path">
                    <a href="">
                      <i className="fa-solid fa-money-bill-transfer"></i>
                      <p>Track your Status</p>
                    </a>
                  </div>
                  <div className="meet-course course-path">
                    <a href="">
                      <i className="fa-solid fa-comment-dollar"></i>
                      <p>Pay Your Deposit</p>
                    </a>
                  </div>
                  <div className="meet-course course-path">
                    <a href="">
                      <i className="fa-solid fa-arrow-trend-up"></i>
                      <p>Contact Us</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parallax-section background-container"></div>
      {/* Second Section */}
      <div className="parallax-section background-container">
        <div className="content u_admission">
          <div className="undergraduate-programs">
            <div className="undergraduate"> 
              <h3>Explore!</h3>
              <img src={img} alt="" />
              <p>Explore our range of full-time programs, which includes a variety of options such as certificates, diplomas, graduate certificates, and degrees, all available at Pendleton Chapel seminary school.</p>
              <p>Pendleton Chapel seminary school offers different application procedures and deadlines that depend on your academic status and progress. Discover the application that suits your needs and make sure to complete and submit it on time to be considered for enrollment.</p>
              <div className="button">
                <a href="" className="btn btn-primary">Apply</a>
              </div>
            </div>
            <div className="undergraduate"> 
              <div className="s_programs">
                <h3>Having difficulty choosing a program?</h3>
                <img src={img} alt="" />
                <p>Selecting the correct career path or educational program is a major decision, and it's not always straightforward to determine which one aligns best with your goals and aspirations. Whether you're a recent graduate exploring your options, contemplating a career change, or simply seeking guidance on your educational journey, accessing career success services can be a valuable step in making well-informed decisions.</p>
                <p>Feel free to reach out to our educational, career experts who can provide guidance and support on your path to success.</p>
                <div className="button">
                  <a href="" className="btn btn-primary">Apply</a>
                </div>
              </div>
            </div>
            <div className="undergraduate"> 
              <div className="s_programs">
                <h3>Specialized Career</h3>
                <img src={img} alt="" />
                <p>Are You Seeking a Career in a Specialized Field? We Have You in Mind. In today's rapidly evolving job market, many individuals are pursuing careers in highly specialized fields to capitalize on their unique skills, passions, and interests. At [Your College Name], we understand the importance of fostering and supporting the aspirations of those who are committed to becoming experts in their chosen domains.</p>
                <div className="button">
                  <a href="" className="btn btn-primary">Apply</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="parallax-section background-container"></div>

      {/* Third Section */}
      <div className="parallax-section">
        <div className="content inter">
          <h3>Explore, Learn, Excel: Your Gateway to Global Education</h3>
          <div className="i_students">
            <div className="international">
              <p>Embark on a journey of discovery and education with Reachgold Travels & Tours. We specialize in facilitating 
                students' admission to prestigious foreign universities. Our tailored services 
                blend seamless travel experiences with expert guidance, ensuring a smooth 
                transition into the world of international academia.</p>

                <h5>Why Choose Us For Your School Admission?</h5>

                <div className="international_reason">
              <ul>

                <li>
                  <h5>Expert Guidance </h5>
                  <p>Our team of seasoned professionals boasts extensive knowledge of 
                  the intricacies involved in securing admissions to foreign universities. 
                  We provide personalized assistance at every step of the process, from university 
                  selection to application submission.</p>
                  </li>
                <li>University Selection: Gain access to our extensive network of partner universities, 
                  renowned for their academic excellence and global reputation.</li>  
                <li>Diverse Destinations: From bustling metropolises to quaint college towns, we offer 
                  access to a wide array of destinations worldwide. Whether you dream of studying 
                  in the heart of Europe, the vibrant cities of North America, or the cultural hubs 
                  of Asia, we have you covered.</li>  
                
              </ul>
             </div>
            </div>
             
            <div className="inter-img">
              <div className="international-img">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
         
        </div>
      </div>

      


      <div className="parallax-section background-container">
        <div className="content inter">
          <div className="i_students">
           
            <div className="inter-img">
              <div className="international-img">
                <img src={img} alt="" />
              </div>
            </div>

            <div className="international">
          
              <div className="international_reason">
            <ul>

              <li>Expert Guidance: Our team of seasoned professionals boasts extensive knowledge of 
                the intricacies involved in securing admissions to foreign universities. 
                We provide personalized assistance at every step of the process, from university 
                selection to application submission.</li>
              <li>University Selection: Gain access to our extensive network of partner universities, 
                renowned for their academic excellence and global reputation.</li>  
              <li>Diverse Destinations: From bustling metropolises to quaint college towns, we offer 
                access to a wide array of destinations worldwide. Whether you dream of studying 
                in the heart of Europe, the vibrant cities of North America, or the cultural hubs 
                of Asia, we have you covered.</li>  
              <li>Customized Itineraries: No two educational journeys are alike. We understand that each student has 
                unique aspirations and requirements. That's why we work closely with you to 
                create bespoke travel itineraries that align with your academic goals, 
                preferences, and budget.</li>  
              <li>Comprehensive Support: Beyond assisting with admissions, we provide comprehensive 
                support to ensure a seamless transition to your new academic environment. 
                From visa procurement to accommodation arrangements, we handle all the logistical 
                details, allowing you to focus on your studies.</li>  
              <li>Application Assistance: Receive expert guidance on the application process, including 
                document preparation, essay writing, and interview preparation.</li>  
              <li>Visa Support: Navigate the visa application process with ease, as our experienced team 
                assists you in compiling the necessary documentation and scheduling embassy 
                appointments.</li>  
              <li>Travel Arrangements: Sit back and relax as we take care of all your travel 
                arrangements, from flights and accommodation to airport transfers and local 
                transportation.</li>  
              <li>Pre-departure Orientation: Prepare for your overseas adventure with our 
                comprehensive pre-departure orientation sessions, covering topics such as 
                cultural adjustment, academic expectations, and safety guidelines.</li>  
            </ul>
           </div>
          </div>
          </div>
        </div>
      </div>


      {/* Fourth Section */}
      <div className="parallax-section background-container">
        <div className="content fees">
          <h3>Fees</h3>
          <div className="cost">
            <p>Why Wait? Start Your Journey Today! (including fall and spring semesters)</p>
            <p>Don't let geographical boundaries With 
              [Travel and Tour Company Name],  us 
              .</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxPage;

