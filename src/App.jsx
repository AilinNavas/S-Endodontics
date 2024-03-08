import { useEffect, useRef, useState } from 'react';
import './App.css'
import { WrapperContainer } from './components/welcomeSection/WrapperContainer'
import ActiveSlider from './components/testimonialsSection/ActiveSlider'
import { AccordionContainer } from './components/faqsSection/AccordionContainer'
import Footer from './components/footerSection/Footer'
import { gsap } from 'gsap/all'
import AnimationContext from './context/animation-context';

import DentalInsurance from './components/insuranceSection/DentalInsurance';
import { Pricing } from './components/pricing/Pricing';

function App() {
  const [currentBg, setCurrentBg] = useState('#fff')
  let appRef = useRef(null);

  useEffect(() => {
    gsap.to(appRef.current, {
      duration: 1,
      background: currentBg,
    })
  }, [currentBg]);

  return (


    <AnimationContext.Provider value={{ setCurrentBg }}>
      <div ref={appRef} className="App">

        <WrapperContainer />
        <DentalInsurance />
        <ActiveSlider />
        <Pricing />
        <AccordionContainer />
        <Footer />

      </div>
    </AnimationContext.Provider>
  )


}

export default App
