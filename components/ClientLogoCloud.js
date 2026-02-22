import React from "react";

const LogoItem = ({ name, url }) => (
    <div className="flex items-center justify-center p-6 border border-neutral-200 bg-white hover:border-brand-blue-deep/50 hover:shadow-sm transition-all">
        <img
            src={url}
            alt={name}
            className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${name}&background=ffffff&color=0345B2&bold=true`;
            }}
        />
    </div>
);

const ClientLogoCloud = () => {
    const clients = [
        { name: "KPMG", url: "https://logo.clearbit.com/kpmg.com" },
        { name: "World Bank", url: "https://logo.clearbit.com/worldbank.org" },
        { name: "Unilever", url: "https://logo.clearbit.com/unilever.com" },
        { name: "Hayleys", url: "https://logo.clearbit.com/hayleys.com" },
        { name: "Kantar", url: "https://logo.clearbit.com/kantar.com" },
        { name: "Standard Chartered", url: "https://logo.clearbit.com/sc.com" },
        { name: "Dialog", url: "https://logo.clearbit.com/dialog.lk" },
        { name: "SLT", url: "https://logo.clearbit.com/slt.lk" },
        { name: "LOLC", url: "https://logo.clearbit.com/lolc.com" },
        { name: "Central Bank", url: "https://logo.clearbit.com/cbsl.gov.lk" },
        { name: "Hemas", url: "https://logo.clearbit.com/hemas.com" },
        { name: "Cargills", url: "https://logo.clearbit.com/cargillsceylon.com" }
    ];

    const partners = [
        { name: "Google Cloud", url: "https://logo.clearbit.com/cloud.google.com" },
        { name: "Microsoft", url: "https://logo.clearbit.com/microsoft.com" },
        { name: "AWS", url: "https://logo.clearbit.com/aws.amazon.com" },
        { name: "Esri", url: "https://logo.clearbit.com/esri.com" },
        { name: "Oracle", url: "https://logo.clearbit.com/oracle.com" },
        { name: "SAP", url: "https://logo.clearbit.com/sap.com" }
    ];

    return (
        <section className="py-24 bg-[#F8F9FB]">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                {/* Clients Section */}
                <div className="mb-24">
                    <div className="mb-12 text-center lg:text-left">
                        <h2 className="text-3xl font-extrabold text-brand-black mb-4">
                            Trusted by global leaders
                        </h2>
                        <div className="h-1 w-16 bg-brand-blue-deep mx-auto lg:mx-0"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {clients.map((client, i) => (
                            <LogoItem key={i} {...client} />
                        ))}
                    </div>
                </div>

                {/* Partners Section */}
                <div className="border-t border-neutral-200 pt-16">
                    <div className="mb-10 text-center">
                        <h3 className="text-xl font-bold text-brand-black">Our Technology Partners</h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 items-center opacity-70">
                        {partners.map((partner, i) => (
                            <div key={i} className="hover:opacity-100 transition-opacity">
                                <img
                                    src={partner.url}
                                    alt={partner.name}
                                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ClientLogoCloud;
