import React, { useEffect, useState } from "react";
import banner1 from '../assets/image.png'
const slides = [
    {
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?utm_source=chatgpt.com",
        title: "Welcome to School Management System",
        desc: "Manage students, results, and teachers easily in one place.",
    },
    {
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
        title: "Smart Learning Environment",
        desc: "Digital system for modern education and tracking progress.",
    },
    {
        image: banner1,
        title: "Track Student Performance",
        desc: "Generate results and reports instantly.",
    },
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    // Auto slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[80vh] overflow-hidden">

            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={slide.image}
                        alt="slide"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            {slide.title}
                        </h1>
                        <p className="text-lg md:text-xl mb-6 max-w-2xl">
                            {slide.desc}
                        </p>

                        <div className="space-x-4">
                            <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700">
                                Get Started
                            </button>
                            <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-5 w-full flex justify-center space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === current ? "bg-white" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;