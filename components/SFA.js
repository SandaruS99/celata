import React from "react";

const SFA = () => {
    return (
        <section className="py-24 overflow-hidden bg-white">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="lg:order-1">
                        <div className="mb-4 inline-block text-sm font-bold tracking-widest uppercase text-brand-red-light">Mobile Solutions</div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-black mb-6">
                            Sales Force Automation Mobile App
                        </h2>
                        <div className="h-1 w-16 bg-brand-blue-deep mb-8"></div>

                        <div className="space-y-6 text-neutral-600 leading-relaxed font-medium">
                            <p>
                                GeoBizz Sales Force Automation Mobile App revolutionizes how businesses manage their on-the-ground sales teams. By offering a centralized platform to plan, monitor, and execute field activities, sales managers gain complete visibility into daily operations.
                            </p>
                            <p>
                                The app eliminates guesswork with live tracking, automated attendance, and digital reporting, ensuring accountability and real-time decision-making.
                            </p>
                            <ul className="list-disc pl-5 font-semibold text-brand-black space-y-2 mt-4">
                                <li>Intelligent route optimization</li>
                                <li>Automated scheduling & attendance</li>
                                <li>Real-time actionable reporting</li>
                            </ul>
                        </div>

                        <button className="mt-8 bg-brand-blue-deep px-8 py-3 rounded text-white font-medium hover:bg-brand-red-light transition-colors shadow-sm">
                            Learn More About SFA
                        </button>
                    </div>

                    <div className="lg:order-2 flex justify-center">
                        <img
                            src="/images/sfa-phones.png"
                            alt="SFA Mobile Application"
                            className="w-full max-w-md h-auto drop-shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SFA;
