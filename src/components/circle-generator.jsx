import React, { useEffect, useState } from 'react';
import '../style/circle-generator.css';
const CircleGenerator = () => {
    const [circles, setCircles] = useState([]);

    const circleSettings = {
        count: 45,
        minSize: 250,
        maxSize: 500,
        color: "linear-gradient(133deg, rgba(47, 129, 174, 0.60) 0%, rgba(92, 62, 188, 0.60) 100%)"
    };

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const generateCircles = (height) => {
        const generatedCircles = [];
        for (let i = 0; i < circleSettings.count; i++) {
            const size = getRandomNumber(circleSettings.minSize, circleSettings.maxSize);

            const circleStyle = {
                width: `${size}px`,
                height: `${size}px`,
                background: circleSettings.color,
                borderRadius: '50%',
                position: 'absolute',
                top: `${getRandomNumber(0, height)}px`,
                left: `${getRandomNumber(0, window.innerWidth)}px`,
                zIndex: -99,
                filter: "blur(50px)",
                opacity: 0.5

            };
            generatedCircles.push(<div key={i} style={circleStyle} className="circle-animation"></div>);
        }

        setCircles(generatedCircles);
    };

    useEffect(() => {
        const body = document.body,
            html = document.documentElement;
        const height = Math.max( body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight );
        generateCircles(height);
    }, []);

    return <div className="circle-generator">{circles}</div>;
};

export default CircleGenerator;
