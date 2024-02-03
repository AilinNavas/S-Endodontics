import React from 'react';
// import { useRef } from 'react';
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { Card } from './Card';
 

export const AboutUs = () => {

const cards= [
    {  
        title: "Dr. Horn",
        img: "",
        description: "e Dr. Neal Horn and his dedicated team are committed to providing exceptional endodontic care in a warm and welcoming environment. Dr. Horn, a Texas native with a passion for oral health, brings a wealth of experience to our practice. His journey from molecular biology at Brigham Young University to a Master's in Endodontics reflects his dedication to excellence. With fluency in Spanish and a background in missionary work, Dr. Horn values effective communication and strives to make every patient feel at ease.",
        bgCardColor: "bg-[#2c7de8]",
        bgColor: "#adddff",
        textColor:"text-white"
    },
    {   
        title: "Team",
        img: "",
        description: ". Leslie Horn, our Office Manager, holds a BA in English and is deeply committed to ensuring a seamless and positive experience for our patients. As a former lifestyle blogger and educator, Leslie's attention to detail and genuine care shine through, making your visit to our office a pleasant one. Our team works collaboratively to provide advanced treatment methods, prompt emergency care, and a range of services designed to maintain your natural teeth.",
        bgCardColor: "bg-[#f2f0d8]",
        bgColor: "#638af7",
        textColor:"text-white"
    },
    {
        title: "Office",
        img: "",
        description: "Whether you require same-day treatment or are seeking a relaxing dental sedation option, we prioritize your comfort and convenience. Southside Endodontics is not just a dental practice; it's a place where your oral health journey is personalized, and you're treated like family. ",
        bgCardColor: "bg-[#cccecf]",
        bgColor: "#63c6f7",
        textColor:"text-white"
    },
]

  return (
    <div className='h-screen flex items-center justify-center'>

        {cards.map((card , index) => {
            return(
              <div className='h-96 cursor-pointer'>
                <Card card={card} key={index}/>
              </div>  
            )
        })

        }

    </div>
  )
}
