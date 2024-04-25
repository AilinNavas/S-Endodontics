import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import { WelcomeNeal } from './components/WelcomeSection/WelcomeNeal';
import { Blog } from './components/BlogSection/Blog'
import { ArticleDetail } from './components/BlogSection/ArticleDetail'



function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SidebarDesktop />
                <Sidebar />
                <WrapperContainer />
                <WelcomeNeal />
                <DentalInsurance />
                <Pricing />
                <ActiveSlider />
                <AboutUs />
                <AccordionContainer />
              </>
            }
          />

          <Route path="/blog" element={<Blog />} /> // Ruta para la página principal
          <Route path="/article/:id" element={<ArticleDetail />} /> // Ruta para detalles del artículo
        </Routes>
      </Router>
      <WrapperFooter />

    </>

  )


}

export default App
