"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GeoBizz from "@/components/GeoBizz";
import VideoGallery from "@/components/VideoGallery";
import SFA from "@/components/SFA";
import ClientLogoCloud from "@/components/ClientLogoCloud";
import Footer from "@/components/Footer";

const FeatureCard = ({ title, desc, icon }) => (
  <div className="p-8 rounded bg-white shadow-sm border border-neutral-100 transition-all hover:shadow-md">
    <div className="mb-6 text-brand-blue-deep">
      {icon}
    </div>
    <h3 className="mb-3 text-xl font-bold text-brand-black">{title}</h3>
    <p className="text-neutral-600 leading-relaxed text-sm">{desc}</p>
    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-blue-deep hover:text-brand-blue-light transition-colors cursor-pointer">
      Explore Services &rarr;
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* Core Expertise - Professional Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red-light mb-3">Our Expertise</h2>
              <h3 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
                Enterprise Digital Solutions
              </h3>
              <div className="mt-6 h-1 w-16 bg-brand-blue-deep"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Geographical Intelligence"
                desc="Proprietary GIS platforms designed for large-scale data visualization and spatial analytics."
                icon={<svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.483V8.517a2 2 0 011.553-1.943L9 4m6 16l5.447-2.724A2 2 0 0021 15.483V8.517a2 2 0 00-1.553-1.943L15 4m-6 16V4m6 16V4" /></svg>}
              />
              <FeatureCard
                title="AI & Data Science"
                desc="Deep-learning integration for automated statistical analysis and predictive modeling across sectors."
                icon={<svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              />
              <FeatureCard
                title="Mobility & SFA"
                desc="Smart mobile solutions for synchronized field-force management, tracking, and operational efficiency."
                icon={<svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
              />
            </div>
          </div>
        </section>

        <GeoBizz />
        <VideoGallery />
        <SFA />
        <ClientLogoCloud />

        {/* Professional CTA */}
        <section className="bg-brand-blue-deep py-24 px-6 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Ready to position your business globally?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Join the network of industry leaders who rely on Celata's enterprise technology to navigate the future.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-brand-blue-deep px-8 py-3 rounded font-medium hover:bg-brand-red-light hover:text-white transition-colors shadow-sm">
                Contact Us Today
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
