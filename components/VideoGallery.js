import React from "react";

const VideoCard = ({ title, highlight, image }) => (
    <div className="group border border-neutral-200 bg-white hover:shadow-md transition-shadow cursor-pointer">
        {/* Thumbnail area */}
        <div className="aspect-video relative overflow-hidden bg-neutral-900">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors">
                <div className="h-16 w-16 bg-brand-blue-deep rounded-none group-hover:bg-brand-red-light group-hover:rounded-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-center text-white transform group-hover:scale-110">
                    <svg className="h-6 w-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </div>

        {/* Content area */}
        <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
                <span className="h-4 w-1 bg-brand-red-light"></span>
                <span className="text-brand-black font-semibold text-sm tracking-wide">
                    {highlight}
                </span>
            </div>
            <h4 className="text-lg font-semibold text-brand-black">{title}</h4>
        </div>
    </div>
);

const VideoGallery = () => {
    const items = [
        {
            title: "Exploring GeoBizz Application",
            highlight: "GeoBizz Application",
            image: "https://i.ytimg.com/vi/1GnUL9FCQnk/hqdefault.jpg"
        },
        {
            title: "Exploring GeoBizz Geo-filter",
            highlight: "Geo-filter",
            image: "https://i.ytimg.com/vi/1GnUL9FCQnk/hqdefault.jpg"
        },
        {
            title: "Exploring GeoBizz Proximity",
            highlight: "GeoBizz Proximity",
            image: "https://i.ytimg.com/vi/1GnUL9FCQnk/hqdefault.jpg"
        }
    ];

    return (
        <section className="pt-8 pb-0 md:py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="flex flex-row justify-between items-center md:items-end mb-12 gap-4">
                    <div>
                        <div className="mb-4 inline-block text-sm font-bold tracking-widest uppercase text-brand-red-light">Platform Walkthrough</div>
                        <h3 className="text-2xl font-bold text-brand-black mb-4">Explore GeoBizz</h3>
                        <div className="h-1 w-16 bg-brand-blue-deep"></div>
                    </div>

                    <div className="flex gap-2">
                        <button className="h-12 w-12 border border-brand-grey/50 flex items-center justify-center text-brand-black hover:bg-brand-red-light hover:text-white hover:border-brand-red-light transition-colors">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="h-12 w-12 border border-brand-grey/50 flex items-center justify-center text-brand-black hover:bg-brand-red-light hover:text-white hover:border-brand-red-light transition-colors">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <div key={i} className={i === 2 ? "hidden lg:block" : ""}>
                            <VideoCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoGallery;
