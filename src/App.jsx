
import './App.css'
import { WrapperContainer } from './components/WelcomeSection/WrapperContainer'
import DentalInsurance from './components/InsuranceSection/DentalInsurance'
// import { BottonNav } from './components/WelcomeSection/BottonNav'
import {AboutUs} from './components/AboutUsSection/AboutUs'
import ActiveSlider from './components/Testimonials/ActiveSlider'

function App() {

  // gsap.registerPlugin(ScrollTrigger)

  // useEffect(() => {
  // const t1 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.box',
  //     start: "top top",
  //     scrub: 1,
  //     pin: true,

  //   }
  // })
  // t1.to(".box-1", { xPercent: 101}, 0)
  // t1.to(".box-2", { xPercent: -101}, 0)
  //  t1.to(".box-1", { xPercent: -100, duration: 1 })
  //  t1.to(".box-2",{ yPercent: -100, duration: 1 })

  // return () => t1.revert()
  // }, [])

  return (
    <>
     <WrapperContainer />
      {/* <BottonNav /> */}
      <DentalInsurance />
      <AboutUs />
      <ActiveSlider />
  
    </>
  )
}

export default App
