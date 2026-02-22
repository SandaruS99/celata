import React from "react";
import InteractiveGlobe from "./InteractiveGlobe";

const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#F8F9FB] via-white to-brand-blue-deep/10 pt-36 lg:pt-20 overflow-hidden">
            {/* Architectural Blueprint Background Overlay matching Footer style - using brand blue for light bg */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(3, 69, 178, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(3, 69, 178, 0.2) 1px, transparent 1px)",
                backgroundSize: "60px 60px"
            }}></div>
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:text-left">
                    <div className="max-w-2xl mx-auto lg:mx-0 transform lg:-translate-y-8">
                        <h1 className="mb-6 text-3xl font-bold text-brand-black leading-tight tracking-tight lg:text-4xl">
                            Positioning You <span className="text-brand-blue-deep">Globally.</span>
                        </h1>
                        <div className="mb-8 flex items-center justify-center lg:justify-start gap-2">
                            <div className="h-1.5 w-16 bg-brand-blue-deep"></div>
                            <div className="h-1.5 w-4 bg-brand-red-light"></div>
                        </div>
                        <p className="mb-10 text-lg text-neutral-600 leading-relaxed">
                            <span className="text-brand-blue-deep font-semibold">Celata</span> <span className="text-brand-red-light font-semibold">Tech Inc.</span> is a leading technology powerhouse headquartered in the USA with R&D in Sri Lanka. We deliver proprietary innovations in Geographical Intelligence and AI to forward-thinking enterprises worldwide.
                        </p>
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <button className="bg-brand-blue-deep text-white px-8 py-3 rounded text-base font-medium hover:bg-brand-red-light transition-colors shadow-sm">
                                Explore Solutions
                            </button>
                            <button className="border border-brand-grey text-brand-black px-8 py-3 rounded text-base font-medium hover:bg-brand-red-light hover:text-white hover:border-brand-red-light transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="relative flex justify-center lg:justify-end select-none mt-12 lg:mt-0">
                        <div className="flex h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] lg:h-[650px] lg:w-[650px] items-center justify-center relative lg:translate-x-12 z-10 hover:-translate-y-2 transition-transform duration-500">
                            <InteractiveGlobe />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
