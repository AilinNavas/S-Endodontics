import React , {useRef, useState, useEffect} from 'react';
import gsap from 'gsap';



const Image = ({url, title, open, inPlace, id, onInPlace, total}) => 
{
	const [firstLoad, loaded] = useState(true);
	const clip = useRef(null);
	const border = useRef(null);
	
	const gap = 10;
	const circle = 7;
	const defaults = { transformOrigin: 'center center' };
	const duration = 0.4;
	const width = 400;
	const height = 400;
	const scale = 700;
	
	let bigSize = (circle * scale);
	let overlap = 0;
	
	const getPosSmall = () => ({x: (width / 2) - ((total * ((circle * 2) + gap) - gap) / 2) + (id * ((circle * 2) + gap)), y: height - 30, scale: 1})
	const getPosSmallAbove = () => ({x: (width / 2) - ((total * ((circle * 2) + gap) - gap) / 2) + (id * ((circle * 2) + gap)), y: height / 2, scale: 1})
	const getPosSmallBelow = () => ({x: width * 0.5, y: height - 30, scale: 1})
	const getPosCenter = () => ({x: width / 2, y: height / 2, scale: 7})
	const getPosEnd = () => ({x: width / 2 - bigSize + overlap, y: height / 2, scale: scale})
	const getPosStart = () => ({x: width / 2 + bigSize - overlap, y: height / 2, scale: scale})

	const onStateChange = () => {
		loaded(false);
		if(border.current)
		{
			gsap.set(border.current, { ...defaults, ...getPosSmall()});
			console.log(border.current)
		}
		if(clip.current)
		{
			let flipDuration = firstLoad ? 0 : duration;
			let upDuration = firstLoad ? 0 : 0.2;
			let bounceDuration = firstLoad ? 0.01 : 1;
			let delay = firstLoad ? 0 : flipDuration + upDuration;
			
			if(open)
			{
				gsap.timeline()
					.set(clip.current, { ...defaults, ...getPosSmall()})
					.to(clip.current, { ...defaults, ...getPosCenter(), duration: upDuration, ease: 'power3.inOut'})
					.to(clip.current, { ...defaults, ...getPosEnd(), duration: flipDuration, ease: 'power4.in', onComplete: () => onInPlace(id)})
			}
			else
			{
				gsap.timeline()
				
				
				gsap.timeline({overwrite: true})
					 .set(clip.current, { ...defaults, ...getPosStart() })
					 .to(clip.current, { ...defaults, ...getPosCenter(), delay: delay, duration: flipDuration, ease: 'power4.out'})
					 .to(clip.current, { ...defaults, motionPath:[getPosSmallAbove(), getPosSmall()], duration: bounceDuration, ease: 'bounce.out'})
			}
		}
	}
	
	useEffect(onStateChange, [open, clip])
	
	return (
		<svg className='w-[100%] h-[100%]' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  preserveAspectRatio="xMidYMid slice">
			<defs>
				 <clipPath id={id + "_circleClip"}>
					<circle className="clip" cx="200" cy="200" r={circle} ref={clip}></circle>			
				</clipPath> 
				<clipPath id={id + "_squareClip"}>
					<rect className="clip w-[100%] h-[100%]" ></rect>	//rectangulo que contiene la imagen que se ve		
				</clipPath>
		  	</defs>
			<g clipPath={`url(#${id + (inPlace ? '_squareClip' : '_circleClip')})`}>
		  		<image id='cursor-image' className="w-full h-full object-cover" xlinkHref={url} ></image>
			</g>
		</svg>	
	);	
}

export default Image;