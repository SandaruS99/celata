import React from "react";

const FooterIconBox = ({ children }) => (
    <div className="flex h-8 w-8 items-center justify-center rounded border border-white/30 text-white shrink-0">
        {children}
    </div>
);

const Footer = () => {
    return (
        <footer className="relative">

            {/* Top Partner Banner */}
            <div className="absolute left-0 right-0 -top-10 mx-auto w-full max-w-5xl px-6 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between rounded-md bg-brand-red-light px-10 py-8 shadow-xl relative overflow-hidden">
                    {/* Subtle dot pattern background for the red banner */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "16px 16px" }}></div>

                    <h3 className="relative z-10 text-2xl font-semibold text-white mb-6 md:mb-0">
                        Would You Like to Be a Partner ?
                    </h3>
                    <button className="relative z-10 flex items-center gap-2 rounded bg-white px-8 py-3 text-sm font-bold text-brand-red-light hover:bg-brand-blue-deep hover:text-white transition-all duration-300 uppercase tracking-wider group">
                        Join Now
                        <svg className="h-4 w-4 transform transition-transform duration-300 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative bg-brand-blue-deep pt-32 pb-6 px-6 overflow-hidden">
                {/* Architectural Blueprint Background Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-blue-deep/90 pointer-events-none"></div>

                <div className="container relative z-10 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                        {/* Explore (USA) */}
                        <div>
                            <h4 className="text-xl font-semibold text-white mb-2">USA Office</h4>
                            <div className="h-1 w-8 bg-brand-red-light mb-8 flex gap-1">
                                <div className="h-full w-2/3 bg-brand-red-light"></div>
                                <div className="h-full w-1 cubic-bezier bg-brand-red-light"></div>
                                <div className="h-full w-1 cubic-bezier bg-brand-red-light"></div>
                            </div>

                            <ul className="space-y-6 text-sm text-white/90 font-medium">
                                <li className="flex gap-4">
                                    <FooterIconBox>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </FooterIconBox>
                                    <span className="leading-relaxed">Celata Tech Inc. Suit 413A, 1603 Capitol Avenue, 3097 Laramie, Cheyenne, Wyoming, USA 820001.</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FooterIconBox>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </FooterIconBox>
                                    <span>hello@celata.tech</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FooterIconBox>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </FooterIconBox>
                                    <span>+1 (307) 317-0009</span>
                                </li>
                            </ul>


                        </div>

                        {/* Explore (Sri Lanka) */}
                        <div>
                            <h4 className="text-xl font-semibold text-white mb-2">Sri Lanka Office</h4>
                            <div className="h-1 w-8 bg-brand-red-light mb-8 flex gap-1">
                                <div className="h-full w-2/3 bg-brand-red-light"></div>
                                <div className="h-full w-1 cubic-bezier bg-brand-red-light"></div>
                                <div className="h-full w-1 cubic-bezier bg-brand-red-light"></div>
                            </div>

                            <ul className="space-y-6 text-sm text-white/90 font-medium">
                                <li className="flex gap-4">
                                    <FooterIconBox>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                                    </FooterIconBox>
                                    <span className="leading-relaxed">Celata Tech (Pvt) Ltd, No: 16B, Rawatawatta, Moratuwa, Sri Lanka.</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FooterIconBox>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </FooterIconBox>
                                    <span>hello@celata.tech</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FooterIconBox>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                    </FooterIconBox>
                                    <span>+94 706077177</span>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-xl font-semibold text-white mb-2">Quick Links</h4>
                            <div className="h-1 w-8 bg-brand-red-light mb-8 flex gap-1">
                                <div className="h-full w-2/3 bg-brand-red-light"></div>
                                <div className="h-full w-1 cubic-bezier bg-brand-red-light"></div>
                                <div className="h-full w-1 cubic-bezier bg-brand-red-light"></div>
                            </div>

                            <ul className="space-y-4 text-sm text-white/90 font-medium">
                                <li className="flex items-center gap-4">
                                    <FooterIconBox>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                    </FooterIconBox>
                                    <a href="#" className="hover:text-white transition-colors">Home</a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FooterIconBox>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </FooterIconBox>
                                    <a href="#" className="hover:text-white transition-colors">Careers</a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FooterIconBox>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </FooterIconBox>
                                    <a href="#" className="hover:text-white transition-colors">Contact Us</a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FooterIconBox>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" /></svg>
                                    </FooterIconBox>
                                    <a href="#" className="hover:text-white transition-colors">Event & News</a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="text-xl font-semibold text-white mb-2">Legal</h4>
                            <div className="h-1 w-8 bg-brand-red-light mb-8 flex gap-1">
                                <div className="h-full w-2/3 bg-brand-red-light"></div>
                                <div className="h-full w-1 cubic-bezier bg-brand-red-light"></div>
                                <div className="h-full w-1 cubic-bezier bg-brand-red-light"></div>
                            </div>

                            <ul className="space-y-4 text-sm text-white/90 font-medium">
                                <li className="flex items-center gap-4">
                                    <FooterIconBox>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </FooterIconBox>
                                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FooterIconBox>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                                    </FooterIconBox>
                                    <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FooterIconBox>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </FooterIconBox>
                                    <a href="#" className="hover:text-white transition-colors">Cookies settings</a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FooterIconBox>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                    </FooterIconBox>
                                    <a href="#" className="hover:text-white transition-colors">Send Feedback</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Links & Copyright */}
                    <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-sm font-medium text-white/90 order-2 md:order-1">
                            Copyright © 2026 Celata tech (Pvt) Ltd | All Rights Reserved
                        </p>
                        <div className="flex gap-4 order-1 md:order-2">
                            {/* Facebook */}
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded bg-white text-brand-blue-deep hover:bg-brand-red-light hover:text-white transition-all transform hover:scale-110">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded bg-white text-brand-blue-deep hover:bg-brand-red-light hover:text-white transition-all transform hover:scale-110">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            {/* YouTube */}
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded bg-white text-brand-red-light hover:bg-brand-red-light hover:text-white transition-all transform hover:scale-110">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
