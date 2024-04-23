import React from 'react'
import './App.css'
// import Tooth from './components/3D/Tooth'
import { SidebarDesktop } from './components/WelcomeSection/SidebarDesktop';
import { Sidebar } from './components/WelcomeSection/Sidebar';
import { WrapperContainer } from './components/WelcomeSection/WrapperContainer';
import { DentalInsurance } from './components/InsuranceSection/DentalInsurance';
import { ActiveSlider } from './components/testimonialsSection/ActiveSlider';
import { AboutUs } from './components/AboutUsSection/AboutUs';
import { AccordionContainer } from './components/FaqsSection/AccordionContainer';
import { Pricing } from './components/PricingSection/Pricing';
import { WrapperFooter } from './components/FinalSection/WrapperFooter';
import { Bg } from './components/WelcomeSection/Bg'
import { WelcomeNeal } from './components/WelcomeSection/WelcomeNeal';



function App() {


  return (
    <>
      {/* <Bg /> */}

      {/* <Tooth /> */}
      {/* <SidebarDesktop />
      <Sidebar />
      <WrapperContainer />
      <DentalInsurance />
      <Pricing />
      <ActiveSlider />
      <AboutUs />
      <AccordionContainer />
      <WrapperFooter /> */}
      <WelcomeNeal />

    </>

  )


}

export default App
