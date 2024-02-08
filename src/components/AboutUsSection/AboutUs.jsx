import {React , useState, useRef} from 'react';

import { Card } from './Card';


export const AboutUs = () => {
  const [selected, setSelected] = useState(0);
  
  const cards = [
    {
      title: "Dr. Horn",
      img: "/src/assets/aboutUs/DrHorn.png",
      description: "Dr. Neal Horn and his dedicated team are committed to providing exceptional endodontic care in a warm and welcoming environment. Dr. Horn, a Texas native with a passion for oral health, brings a wealth of experience to our practice. His journey from molecular biology at Brigham Young University to a Master's in Endodontics reflects his dedication to excellence.",
      bgCardColor: "bg-[#2c7de8]",
      bgColor: "#adddff",
      textColor: "text-white"
    },
    {
      title: "Team",
      img: "/src/assets/aboutUs/team.png",
      description: "Leslie Horn, our Office Manager, holds a BA in English and is deeply committed to ensuring a seamless and positive experience for our patients. As a former lifestyle blogger and educator, Leslie's attention to detail and genuine care shine through, making your visit to our office a pleasant one. His journey from molecular biology at Brigham Young University to a Master's in Endodontics reflects his dedication to excellence.",
      bgCardColor: "bg-[#f2f0d8]",
      bgColor: "#638af7",
      textColor: "text-white"
    },
    {
      title: "Office",
      img: "/src/assets/aboutUs/office.png",
      description: "Whether you require same-day treatment or are seeking a relaxing dental sedation option, we prioritize your comfort and convenience. Southside Endodontics is not just a dental practice; it's a place where your oral health journey is personalized, and you're treated like family.His journey from molecular biology at Brigham Young University to a Master's in Endodontics reflects his dedication to excellence. ",
      bgCardColor: "bg-[#cccecf]",
      bgColor: "#63c6f7",
      textColor: "text-white"
    },
  ]

  const handleClick = (key) => {
    setSelected(key)
  }


  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center relative'>

      {cards.map((card, key) => {
        return (
          <div
        
            key={key}
             className={` card-${key} ${key === selected ? 'max-h-[75vh]' : 'h-20'} w-96 md:w-[80vw] cursor-pointer transition-max-h ease-in-out duration-[3000ms] `}
            onClick={() => handleClick(key)}>
            <Card card={card} selected= {selected} index= {key} />
          </div>
        )
      })

      }

    </div>
  )
}
