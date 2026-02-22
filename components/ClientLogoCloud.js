import React from "react";

const LogoItem = ({ name, url }) => (
    <div className="flex items-center justify-center p-6 border border-neutral-200 bg-white hover:border-brand-blue-deep/50 hover:shadow-sm transition-all h-36">
        <img
            src={url}
            alt={name}
            className="max-h-24 w-auto object-contain transition-all"
            onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${name}&background=ffffff&color=0345B2&bold=true`;
            }}
        />
    </div>
);

const ClientLogoCloud = () => {
    const clients = [
        { name: "KPMG", url: "/images/Logos/kpmg.png" },
        { name: "World Bank", url: "/images/Logos/world_bank.png" },
        { name: "Unilever", url: "/images/Logos/uniliver.png" },
        { name: "Kantar", url: "/images/Logos/kantar.png" },
        { name: "Assetline", url: "/images/Logos/Assetline.png" },
        { name: "IOC", url: "/images/Logos/IOC.png" },
        { name: "Power Gen", url: "/images/Logos/Power Gen.png" },
        { name: "ASMP", url: "/images/Logos/asmp.png" },
        { name: "CSIAP", url: "/images/Logos/csiap.png" },
        { name: "Damro", url: "/images/Logos/damro.png" },
        { name: "LECO", url: "/images/Logos/leco.png" },
        { name: "Ministry of Plantation", url: "/images/Logos/ministry_of_plantation.png" },
        { name: "Ministry of Youth & Sports", url: "/images/Logos/ministry_of_youth_&_sports.png" },
        { name: "NSB", url: "/images/Logos/nsb.png" },
        { name: "NWSDB", url: "/images/Logos/nwsdb.png" },
        { name: "SLS Bank", url: "/images/Logos/sls_bank.png" },
        { name: "SFA", url: "/images/Logos/sfa.png" }
    ];

    const partners = [
        { name: "KPMG", url: "/images/Logos/kpmg.png" },
        { name: "Kantar", url: "/images/Logos/kantar.png" },
        { name: "World Bank", url: "/images/Logos/world_bank.png" },
        { name: "Finetech", url: "/images/Logos/finetech.png" },
        { name: "SLTMobitel", url: "/images/Logos/slt_mobitel.png" },
        { name: "LOLC", url: "/images/Logos/lolc.png" }
    ];

    return (
        <section className="py-24 bg-[#F8F9FB]">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                {/* Clients Section */}
                <div className="mb-24">
                    <div className="mb-12 text-center lg:text-left">
                        <h2 className="text-2xl font-bold text-brand-black mb-4">
                            Trusted by global leaders
                        </h2>
                        <div className="h-1 w-16 bg-brand-blue-deep mx-auto lg:mx-0"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {clients.map((client, i) => (
                            <LogoItem key={i} {...client} />
                        ))}
                    </div>
                </div>

                {/* Partners Section */}
                <div className="border-t border-neutral-200 pt-16">
                    <div className="mb-12 text-center lg:text-left">
                        <h2 className="text-2xl font-bold text-brand-black mb-4">
                            Our Partners
                        </h2>
                        <div className="h-1 w-16 bg-brand-blue-deep mx-auto lg:mx-0"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {partners.map((partner, i) => (
                            <LogoItem key={i} {...partner} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ClientLogoCloud;
