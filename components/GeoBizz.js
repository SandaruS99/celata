import React from "react";

const GeoBizz = () => {
    return (
        <section className="py-24 bg-[#F8F9FB]">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Section */}
                    <div className="relative">
                        <div className="bg-white p-4 shadow-sm border border-neutral-100 rounded-lg">
                            <img
                                src="/images/geobizz.png"
                                alt="GeoBizz Intelligence"
                                className="w-full h-auto rounded"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div>
                        <div className="mb-4 inline-block text-sm font-bold tracking-widest uppercase text-brand-red-light">Flagship Product</div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-6">
                            GeoBizz Platform
                        </h2>

                        <div className="h-1 w-16 bg-brand-blue-deep mb-8"></div>

                        <h3 className="text-xl font-bold text-brand-blue-deep mb-6">
                            Geographical Intelligence Redefined for Business Success.
                        </h3>

                        <div className="space-y-6 text-neutral-600 leading-relaxed font-medium">
                            <p>
                                GeoBizz is a cloud-based location intelligence and mobile engagement platform developed by Celata Tech. The data collected via GeoBizz APIs is synced with Google Maps on top of the GeoBizz platform to provide geospatial statistical analysis.
                            </p>
                            <p>
                                Businesses can evaluate geographical patterns and trends to make more informed decisions. With Celata's GeoBizz platform, ensure the right information reaches the right person at the right time.
                            </p>
                        </div>

                        <button className="mt-8 bg-brand-blue-deep px-8 py-3 rounded text-white font-medium hover:bg-brand-red-light transition-colors shadow-sm">
                            Discover GeoBizz
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GeoBizz;
