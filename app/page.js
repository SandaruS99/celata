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
    <div className="mb-6 h-14 w-14 flex items-center justify-center rounded-xl bg-brand-blue-deep/5 text-brand-blue-deep">
      {icon}
    </div>
    <h3 className="mb-3 text-xl font-bold text-brand-black">{title}</h3>
    <p className="text-neutral-600 leading-relaxed text-sm">{desc}</p>
    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-blue-deep hover:text-brand-red-light transition-colors cursor-pointer">
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
              <h3 className="text-2xl font-bold text-brand-black sm:text-3xl">
                Enterprise Digital Solutions
              </h3>
              <div className="mt-6 h-1 w-16 bg-brand-blue-deep"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Geographical Intelligence"
                desc="Proprietary GIS platforms designed for large-scale data visualization and spatial analytics."
                icon={<svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}
              />
              <FeatureCard
                title="AI & Data Science"
                desc="Deep-learning integration for automated statistical analysis and predictive modeling across sectors."
                icon={<svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
              />
              <FeatureCard
                title="Mobility & SFA"
                desc="Smart mobile solutions for synchronized field-force management, tracking, and operational efficiency."
                icon={<svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
              />
            </div>
          </div>
        </section>

        <GeoBizz />
        <VideoGallery />
        <SFA />
        <ClientLogoCloud />


      </main>

      <Footer />
    </div>
  );
}
