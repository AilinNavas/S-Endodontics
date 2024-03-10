import React from 'react'
import './App.css'
// import { WrapperContainer } from './components/welcomeSection/WrapperContainer'
import { ActiveSlider } from './components/testimonialsSection/ActiveSlider'
import { AccordionContainer } from './components/faqsSection/AccordionContainer'
import { Footer } from './components/footerSection/Footer'
import { AboutUs } from './components/aboutUsSection/AboutUs'
import { DentalInsurance } from './components/insuranceSection/DentalInsurance';
import { Pricing } from './components/pricing/Pricing';

function App() {

  return (
    <>
      {/* <WrapperContainer /> */}
      <DentalInsurance />
      <Pricing />
      <ActiveSlider />
      <AboutUs />
      <AccordionContainer />
      <Footer />
    </>

  )


}

export default App
