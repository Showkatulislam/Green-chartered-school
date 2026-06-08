import React, { useState } from "react";
import logo from "../assets/GCS_logo.svg"
const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-purple-500 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                 <div className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="School Logo"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                    <h1 className="text-xl font-bold">Green Chartered School and Collage</h1>
                </div>


                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-gray-200">Home</a>
                    <a href="#" className="hover:text-gray-200">Students</a>
                    <a href="#" className="hover:text-gray-200">Results</a>
                    <a href="#" className="hover:text-gray-200">Teachers</a>
                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-purple-400 px-4 pb-4 space-y-2">
                    <a href="#" className="block hover:text-gray-300">Home</a>
                    <a href="#" className="block hover:text-gray-300">Students</a>
                    <a href="#" className="block hover:text-gray-300">Results</a>
                    <a href="#" className="block hover:text-gray-300">Teachers</a>
                </div>
            )}
        </header>
    );
};

export default Header;