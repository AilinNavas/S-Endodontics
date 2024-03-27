import React from 'react'
import './App.css'
import { SidebarDesktop } from './components/WelcomeSection/SidebarDesktop';
import { Sidebar } from './components/WelcomeSection/Sidebar';
import { WrapperContainer } from './components/WelcomeSection/WrapperContainer';
import { DentalInsurance } from './components/InsuranceSection/DentalInsurance';
import { ActiveSlider } from './components/testimonialsSection/ActiveSlider';
import { AboutUs } from './components/AboutUsSection/AboutUs';
import { AccordionContainer } from './components/FaqsSection/AccordionContainer';
import { Pricing } from './components/PricingSection/Pricing';
import { WrapperFooter } from './components/FinalSection/WrapperFooter';





function App() {


  return (
    <>
      <SidebarDesktop />
      <Sidebar />
      <WrapperContainer />
      <DentalInsurance />
      <Pricing />
      <ActiveSlider />
      <AboutUs />
      <AccordionContainer />
      <WrapperFooter />

    </>

  )


}

export default App
