"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`font-sans fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex justify-between items-center">
                <div className="flex items-center w-full justify-between lg:w-auto">
                    <img src="/images/logo.png" alt="Celata Logo" className="h-10 w-auto object-contain" />

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-4 lg:hidden">
                        <a href="#" className="bg-brand-blue-deep text-white px-5 py-2.5 rounded text-sm sm:px-8 sm:py-3 sm:text-base font-medium hover:bg-brand-red-light transition-colors shadow-sm">Contact</a>
                        <button
                            className="text-brand-black border border-brand-grey focus:outline-none flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded hover:border-brand-black hover:text-brand-red-light transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    <a href="#" className="text-sm font-semibold text-brand-black hover:text-brand-blue-deep hover:underline hover:decoration-brand-red-light hover:underline-offset-8 hover:decoration-2 transition-all">Home</a>

                    {/* About Us Dropdown */}
                    <div className="relative group py-2">
                        <a href="#" className="text-sm font-semibold text-brand-black group-hover:text-brand-blue-deep transition-all flex items-center gap-1">
                            About Us
                            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                        <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg border-t-2 border-brand-red-light rounded-b opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0">
                            <div className="py-2">
                                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-brand-black hover:bg-brand-red-light hover:text-white transition-colors">Our Story</a>
                                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-brand-black hover:bg-brand-red-light hover:text-white transition-colors">Board of Directors</a>
                            </div>
                        </div>
                    </div>

                    <a href="#" className="text-sm font-semibold text-brand-black hover:text-brand-blue-deep hover:underline hover:decoration-brand-red-light hover:underline-offset-8 hover:decoration-2 transition-all">Careers</a>

                    {/* Our Platforms Dropdown */}
                    <div className="relative group py-2">
                        <a href="#" className="text-sm font-semibold text-brand-black group-hover:text-brand-blue-deep transition-all flex items-center gap-1">
                            Our Platforms
                            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                        <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg border-t-2 border-brand-red-light rounded-b opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0">
                            <div className="py-2">
                                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-brand-black hover:bg-brand-red-light hover:text-white transition-colors">GeoBizz</a>
                            </div>
                        </div>
                    </div>

                    <a href="#" className="text-sm font-semibold text-brand-black hover:text-brand-blue-deep hover:underline hover:decoration-brand-red-light hover:underline-offset-8 hover:decoration-2 transition-all">News &amp; Events</a>
                    <a href="#" className="bg-brand-blue-deep text-white px-8 py-3 rounded text-base font-medium hover:bg-brand-red-light transition-colors shadow-sm">Contact</a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full h-[calc(100vh-80px)] overflow-y-auto bg-white shadow-lg border-t border-gray-100 flex flex-col justify-start items-center space-y-6 pt-12 pb-20 animate-in fade-in slide-in-from-top-2 duration-300">
                    <a href="#" className="text-xl font-semibold text-brand-black hover:text-brand-blue-deep transition-all" onClick={() => setIsMobileMenuOpen(false)}>Home</a>

                    {/* Mobile About Us Accordion */}
                    <div className="flex flex-col items-center w-full">
                        <button onClick={() => setIsAboutOpen(!isAboutOpen)} className={`text-xl font-semibold flex items-center gap-2 transition-all ${isAboutOpen ? 'text-brand-blue-deep' : 'text-brand-black hover:text-brand-blue-deep'}`}>
                            About Us
                            <svg className={`w-5 h-5 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>

                        <div className={`flex flex-col items-center space-y-2 overflow-hidden transition-all duration-300 ${isAboutOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                            <a href="#" className="text-lg text-brand-black px-6 py-2 rounded-full hover:bg-brand-red-light hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Our Story</a>
                            <a href="#" className="text-lg text-brand-black px-6 py-2 rounded-full hover:bg-brand-red-light hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Board of Directors</a>
                        </div>
                    </div>

                    <a href="#" className="text-xl font-semibold text-brand-black hover:text-brand-blue-deep transition-all" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>

                    {/* Mobile Our Platforms Accordion */}
                    <div className="flex flex-col items-center w-full">
                        <button onClick={() => setIsPlatformsOpen(!isPlatformsOpen)} className={`text-xl font-semibold flex items-center gap-2 transition-all ${isPlatformsOpen ? 'text-brand-blue-deep' : 'text-brand-black hover:text-brand-blue-deep'}`}>
                            Our Platforms
                            <svg className={`w-5 h-5 transition-transform duration-300 ${isPlatformsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>

                        <div className={`flex flex-col items-center overflow-hidden transition-all duration-300 ${isPlatformsOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                            <a href="#" className="text-lg text-brand-black px-6 py-2 rounded-full hover:bg-brand-red-light hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>GeoBizz</a>
                        </div>
                    </div>

                    <a href="#" className="text-xl font-semibold text-brand-black hover:text-brand-blue-deep transition-all" onClick={() => setIsMobileMenuOpen(false)}>News &amp; Events</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
