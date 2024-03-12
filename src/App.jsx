import React from 'react'
import './App.css'
import { WrapperContainer } from './components/WelcomeSection/WrapperContainer';
import { DentalInsurance } from './components/InsuranceSection/DentalInsurance';
import { Pricing } from './components/PricingSection/Pricing';
import { ActiveSlider } from './components/TestimonialsSection/ActiveSlider';
import { AboutUs } from './components/AboutUsSection/AboutUs';
import { AccordionContainer } from './components/FaqsSection/AccordionContainer';
// import { Footer } from './components/FooterSection/Footer';




function App() {

  return (
    <>
      <WrapperContainer />
      <DentalInsurance />
      <Pricing />
      <ActiveSlider />
      <AboutUs />
      <AccordionContainer />
      {/* <Footer /> */}
    </>

  )


}

export default App
