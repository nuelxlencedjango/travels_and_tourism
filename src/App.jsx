
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';



import Navs from "./Components/Navs";

import {Home,Contact,Flight,Services,Abroad,Tours,About,VisaDetailPage} from "./Components/Pages";



const App = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
}, []);

  return (
    <BrowserRouter>
    
      <Navs />
      
     
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/flight_deal" element={<Flight />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tours" element={<Tours />}></Route>
        <Route path="/contact_us" element={<Contact />}></Route>
        <Route path="/study_abroad" element={<Abroad />}></Route>

        <Route path="/visa-assistance" element={<VisaDetailPage />}></Route>

        
       
      </Routes>
  
    </BrowserRouter>
  );
};

export default App;
