const Tabs = ({images, onSelect}) => {
    const gap = 10;
    const circle = 7;
    const defaults = { transformOrigin: 'center center' };
    const width = 400;
    const height = 400;
  
    const getPosX = (i) => (width / 2) - ((images.length * ((circle * 2) + gap) - gap) / 2) + (i * ((circle * 2) + gap));
    const getPosY = (i) => height - 30;
  
    return (
      <svg className="absolute hidden -top-8 left-0 w-[100%] h-[100%] z-40" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice">
        {images.map((image, i) => (
          <circle key={i} onClick={() => onSelect(i)} className="border fill-[white] stroke-[white] stroke-2 cursor-pointer" cx={getPosX(i)} cy={getPosY(i)} r={circle}></circle>
        ))}
      </svg>
    //   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice">
		//   	{ (!images ? [] : images).map((image, i) => <circle onClick={() => onSelect(i)} className="border" cx={getPosX(i)} cy={getPosY(i)} r={circle + 2}></circle> )}
		// </svg>
    );
  };

export default Tabs