import React from 'react'
import videoSource from '../assets/video/dental.mp4'

function AboutUs() {
    return (
        <div className=' h-screen overflow-hidden m-auto'>
            <div className='flex flex-col absolute m-auto py-32 lg:flex-row lg:mx-44'>
                <div className='p-8'>
                    <video className='h-full w-full' controls>
                        <source src={videoSource} type="video/mp4" />
                        Tu navegador no soporta el tag de video.
                    </video>
                </div>

                <div className='p-8 lg:max-w-md'>
                    <h3 className='text-5xl pt-10 mx-2'>Neal Horn, DDS, MS Endodontist</h3>
                    <h4 className='text-3xl mx-4 '>Root Canal Specialist</h4>
                    <p className='text-3xl py-10 mx-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nisi amet nulla vero voluptate.</p>
                </div>

            </div>

        </div>
    )
}

export default AboutUs