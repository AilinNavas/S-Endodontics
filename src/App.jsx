
import './App.css'
import DentalInsurance from './components/DentalInsurance'
import Hero2 from './components/Hero2'
import { BottonNav } from './components/BottonNav'
import { Sidebar } from './components/Sidebar'
import AboutUs from './components/AboutUs'







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
      <div className='flex flex-col'>
        <Sidebar />
        <Hero2 />
      </div>
      <BottonNav />
      <DentalInsurance />
      <AboutUs />


 

    </>
  )
}

export default App
