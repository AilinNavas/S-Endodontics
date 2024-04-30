 import React , {useState, useEffect} from 'react'
 import './App.css'
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import { Loader } from './components/Loader/Loader';
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
 import { BlogCarrousel } from './components/BlogSection/BlogCarrousel';



 function App() {

   const [isLoading, setIsLoading] = useState(true);

   //Let create async method to fetch fake data
   useEffect(() => {
     const fakeDataFetch = () => {
       setTimeout(() => {
         setIsLoading(false);
       }, 3000);
     };

     fakeDataFetch();
   }, []);

   return  isLoading ? (
     <Loader /> ) : (
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
                 <BlogCarrousel />
               </>
             }
           />

           <Route path="/blog" element={<Blog />} />  Ruta para la página principal
           <Route path="/article/:id" element={<ArticleDetail />} />  Ruta para detalles del artículo
         </Routes>
       </Router>
       <WrapperFooter />

     </>
    

   )


 }

 export default App

