import { useEffect, useState } from "react";
import './App.css'

import Loader from "./components/loader/Loader";
import { WrapperContainer } from './components/WelcomeSection/WrapperContainer'
import DentalInsurance from './components/InsuranceSection/DentalInsurance'
import AboutUs from './components/AboutUsSection/AboutUs'
import ActiveSlider from './components/Testimonials/ActiveSlider'
import { AccordionContainer } from './components/FaqsSection/AccordionContainer'

function App() {
 
 //loader state
 const [isLoading, setIsLoading] = useState(true);

 //Let create async method to fetch fake data
 useEffect(() => {
   const fakeDataFetch = () => {
     setTimeout(() => {
       setIsLoading(false);
     }, 6000);
   };

   fakeDataFetch();
 }, []);

 return isLoading ? (
   <Loader />
 ) : (
   <>
     <WrapperContainer />
     <DentalInsurance />
     <ActiveSlider />
     <AboutUs />
     <AccordionContainer />

   </>
 )


}

export default App
