import './App.css'
 import { WrapperContainer } from './components/WelcomeSection/WrapperContainer'
 import DentalInsurance from './components/InsuranceSection/DentalInsurance'
 import AboutUs from './components/AboutUsSection/AboutUs'
 import ActiveSlider from './components/Testimonials/ActiveSlider'
 import { AccordionContainer } from './components/FaqsSection/AccordionContainer'
import Footer from './components/footer/Footer'


function App() {
 
  return(
    <>
    
      
      <WrapperContainer />
      <DentalInsurance />
      <ActiveSlider />
      <AboutUs />
      <AccordionContainer /> 
      <Footer />


    </>
  )



}

export default App
