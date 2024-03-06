import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedButton from "./AnimatedButton";
import { TypewriterText } from "./TypewriterText";


const ShuffleHero = () => {
    return (
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
            <div>
                <span className="block mb-4 text-2xl md:text-3xl text-gray text-roboto font-medium">
                Experience endodontic care
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-primary text-zen mb-[5vh]">
                    ROOT CANAL TREATMENT
                </h1>
                <TypewriterText />
                <div className="hidden lg:flex">
                <AnimatedButton text="Refer Now" color="primary" backgroundColor="primary" />
                <AnimatedButton text="Schedule Appointment" color="secondary" backgroundColor="secondary" />
                </div>
               
            </div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: '/src/assets/neal.jpg',
    },
    {
        id: 2,
        src: '/src/assets/logo2.png',
    },
    {
        id: 3,
        src: '/src/assets/aboutUs/office.jpeg',
    },
    {
        id: 4,
        src: '/src/assets/aboutUs/office2.jpeg',
    },
    {
        id: 5,
        src: '/src/assets/aboutUs/office3.jpeg',
    },
    {
        id: 6,
        src: '/src/assets/aboutUs/team.jpeg',
    },
    {
        id: 7,
        src: '/src/assets/aboutUs/team2.jpeg',
    },
    {
        id: 8,
        src: '/src/assets/aboutUs/DrHorn.jpeg',
    },
    {
        id: 9,
        src: '/src/assets/aboutUs/DrHorn2.jpeg',
    },
   
   
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-3 grid-rows-4 h-[500px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default ShuffleHero;