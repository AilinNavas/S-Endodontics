import React, { useRef } from "react";
import logo from '/src/assets/logo-Neal.jpeg';
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

const Loader = () => {

    const padre = useRef()

    useGSAP(() => {

        let tn = gsap.timeline();

        gsap.set("#img-logo", {
            transformPerspective: 100
        });
        tn.fromTo("#img-logo", {
            opacity: 0, scale: 0.5
        }, {
            scale: 1,
            // boxShadow: "0px 0px 3px 5px rgb(223, 230, 230)",
            duration: 4,
            rotationY: 360,
            ease: "circ.out",
            x: 10,
            y: 0,
            autoAlpha: 1,
        });
        tn.to('#loader',
            {
            // translateX: -3000,
            scale:0,
            translateY:'-50%',
            opacity: 0,
            duration: 1,
            ease: 'power1.out'
            },
        )
    }, { scope: padre }) //final de animaciónes


    return (
        <div ref={padre} className="bg-white h-screen overflow-hidden">
            <div id='loader' className="flex flex-col items-center mt-[30vh] h-[100vh] ">
                <img id='img-logo' className="w-[80vw]" src={logo} alt="" />
            </div>
        </div>
    );
};

export default Loader;