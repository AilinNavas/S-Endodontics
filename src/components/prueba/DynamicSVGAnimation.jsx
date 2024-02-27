import React, { useState, useEffect } from "react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import Tabs from "./Tabs";
import Image from "./Image"

gsap.registerPlugin(MotionPathPlugin);

const DynamicSVGAnimation = ({images}) => {
	const [opened, setOpened] = useState(0);

	const [inPlace, setInPlace] = useState(0);
	const [disabled, setDisabled] = useState(false);


	const onClick = (index) => { if (!disabled) setOpened(index); }
	const onInPlace = (index) => setInPlace(index);

	const next = () => {
		let nextIndex = opened + 1;
		if (nextIndex >= images.length) nextIndex = 0;
		onClick(nextIndex);
	}

	useEffect(() => setDisabled(true), [opened])
	useEffect(() => setDisabled(false), [inPlace])


	return (
		<div>
			{/* <div className="container shadow-md w-[80vw] h-[40vh] md:h-[50vh] lg:w-[40vw] lg:h-[60vh] relative overflow-hidden rounded-md bg-trasparent"> */}
			<div id="container">
				{images.map((image, i) =>
					<div key={image.src} className="image absolute top-0 left-0 w-[100%] h-[100%]" style={{ zIndex: inPlace === i ? i : images.length + 1 }}>
						<Image total={images.length} id={i} url={image.src} title={image.alt} open={opened === i} inPlace={inPlace === i} onInPlace={onInPlace} />
					</div>)}
				<div className="tabs absolute top-0 left-0 w-[100%] h-[100%] z-40 ">
					<Tabs className="tabs absolute top-0 left-0 w-[100%] h-[100%] z-40 " images={images} onSelect={onClick} />
				</div>
			</div>


			<button className="button next bg-white opacity-50 absolute -right-6 top-1/2 lg:-right-[110%] transform translate-x-1/4 -translate-y-1/4 w-10 h-10 rounded-full cursor-pointer outline-none flex justify-center items-center transition-transform duration-200 ease-in-out hover:translate-x-2 hover:-translate-y-2 hover:opacity-90" onClick={next}>
				<svg width="24" height="24" viewBox="0 0 24 24">
				 <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
				  </svg>
			</button>

		</div>
	);
}


export default DynamicSVGAnimation




