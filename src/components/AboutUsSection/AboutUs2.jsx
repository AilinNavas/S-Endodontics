import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ZoomImage from "./ZoomImage";
import AnimatedText from "./AnimatedText";

import drHorn from '/src/assets/aboutUs/DrHorn.jpeg';
import drHorn2 from '/src/assets/aboutUs/DrHorn2.jpeg';
import team from '/src/assets/aboutUs/team.jpeg';
import team2 from '/src/assets/aboutUs/team2.jpeg';
import office from '/src/assets/aboutUs/office.jpeg';
import office2 from '/src/assets/aboutUs/office2.jpeg';
import office3 from '/src/assets/aboutUs/office3.jpeg';

gsap.registerPlugin(ScrollTrigger);

export const AboutUs2 = () => {
  return (
    <div>AboutUs2</div>
  )
}
