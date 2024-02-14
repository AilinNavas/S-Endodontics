import React, { useEffect } from 'react'
import { TextDetail } from './TextDetail'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const AboutUs2 = () => {

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set('.photo:not(:first-child)', {
                opacity: 0, scale: 0.5
            })
        })

        const animation = gsap.to('.photo:not(:first-child)',
        
            { opacity: 1, scale: 1, duration:1 , stagger: 2 })

        ScrollTrigger.create({
            trigger: '.gallery',
            start: 'top top',
            end: 'bottom bottom',
            pin: '.righblock',
            animation: animation,
            scrub: true,
            markers: true
        })
        return () => ctx.revert();
    }, [])





    return (
        <div>
            <div className='gallery flex'>
                <div className='left w-[50%] ml-auto'>
                    <TextDetail title={'Dr. Horn'} detail={"Dr. Neal Horn and his dedicated team are committed to providing exceptional endodontic care in a warm and welcoming environment. Dr. Horn, a Texas native with a passion for oral health, brings a wealth of experience to our practice. His journey from molecular biology at Brigham Young University to a Master's in Endodontics reflects his dedication to excellence."} />
                    <TextDetail title={'Our Team'} detail={"Leslie Horn, our Office Manager, holds a BA in English and is deeply committed to ensuring a seamless and positive experience for our patients. As a former lifestyle blogger and educator, Leslie's attention to detail and genuine care shine through, making your visit to our office a pleasant one. His journey from molecular biology at Brigham Young Univers"} />
                    <TextDetail title={'Our Office'} detail={"Southside Endodontics is not just a dental practice; it's a place where your oral health journey is personalized, and you're treated like family.His journey from molecular biology at Brigham Young University to a Master's in Endodontics reflects his dedication to excellence. "} />
                </div>
                <div className='righblock w-[50%] h-[100vh] flex flex-col justify-center'>
                    <div className='sx w-[40vw] h-[40vw] relative '>
                        <div className='photo absolute w-[100%] h-[100%] '>
                            <img className='h-[100%] w-[100%] rounded-lg' src="/src/assets/aboutUs/DrHorn.png" alt="" />
                        </div>
                        <div className='photo absolute w-[100%] h-[100%] '>
                            <img className='h-[100%] w-[100%] rounded-lg' src="/src/assets/aboutUs/team.png" alt="" />
                        </div>
                       
                        <div className='photo absolute w-[100%] h-[100%]'>
                            <img className='h-[100%] w-[100%] rounded-lg' src="/src/assets/aboutUs/office.png" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}


