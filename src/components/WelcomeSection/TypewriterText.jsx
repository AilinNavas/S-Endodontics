import React from 'react'
import Typewriter from 'typewriter-effect';

export const TypewriterText = () => {

    return (
        <div>
            <p className='md:text-3xl sm:text-2xl text-xl font-roboto text-transform: capitalize font-medium text-secondary mb-[3vh]'>
                <Typewriter
                    options={{
                        loop: true
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('Advanced Methods')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(200)
                            .deleteAll()
                            .typeString('Prompt Emergency Care ')
                            .pauseFor(200)
                            .deleteAll()
                            .typeString('Flexible Financial Options')
                            .deleteAll()
                            .typeString('Se habla Español ')
                            .pauseFor(1000)

                            .callFunction(() => {
                                console.log('All strings were deleted');
                            })
                            .start();
                    }} />
            </p>

        </div>
    );
};