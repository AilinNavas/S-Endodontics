import './App.css'
import { WrapperContainer } from './components/WelcomeSection/WrapperContainer'
import DentalInsurance from './components/InsuranceSection/DentalInsurance'
import AboutUs from './components/AboutUsSection/AboutUs'
import ActiveSlider from './components/Testimonials/ActiveSlider'
import { AccordionContainer } from './components/FaqsSection/AccordionContainer'

function App() {
 
  return(
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
