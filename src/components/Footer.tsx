"use client";
import { siteConfig } from "@/config/content";

export default function Footer() {
    return (
        <footer className="bg-[#050505] text-white pt-20 border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">

                    {/* Brand & Logo */}
                    <div className="lg:col-span-1">
                        <div className="h-16 w-48 flex items-center mb-8">
                            <img
                                src={siteConfig.brand.logo.footer}
                                alt={siteConfig.brand.name}
                                className="h-full w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <p className="text-gray-400 font-light leading-relaxed text-sm pr-4">
                            Premium landscaping, bespoke garden design, and luxury event greenery spanning across the UAE. We turn nature into an experience.
                        </p>
                    </div>

                    {/* Abu Dhabi Office */}
                    <div className="lg:col-span-1">
                        <h4 className="font-sans text-xs tracking-[0.2em] font-semibold text-[var(--color-brand-lime)] uppercase mb-6">
                            {siteConfig.contact.abuDhabi.title}
                        </h4>
                        <address className="not-italic text-gray-400 font-light text-sm space-y-4">
                            <p>
                                <span className="block text-white mb-1">Branch Hub</span>
                                {siteConfig.contact.abuDhabi.address1}
                                {siteConfig.contact.abuDhabi.address2 && <><br />{siteConfig.contact.abuDhabi.address2}</>}
                            </p>
                            <p>
                                <span className="block text-white mb-1">Contact</span>
                                <a href={`tel:${siteConfig.contact.abuDhabi.phone.replace(/\s+/g, '')}`} className="hover:text-[var(--color-brand-lime)] transition-colors block">
                                    {siteConfig.contact.abuDhabi.phone}
                                </a>
                                <a href={`mailto:${siteConfig.contact.abuDhabi.email}`} className="hover:text-[var(--color-brand-lime)] transition-colors block">
                                    {siteConfig.contact.abuDhabi.email}
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* Working Hours */}
                    <div className="lg:col-span-1">
                        <h4 className="font-sans text-xs tracking-[0.2em] font-semibold text-[var(--color-brand-lime)] uppercase mb-6">Working Hours</h4>
                        <ul className="text-gray-400 font-light text-sm space-y-3">
                            {siteConfig.contact.hours.map((hour, idx) => (
                                <li key={idx} className={`flex justify-between pb-2 ${idx !== siteConfig.contact.hours.length - 1 ? 'border-b border-white/5' : ''}`}>
                                    <span>{hour.day}</span>
                                    <span className={hour.time.toLowerCase() === 'closed' ? "text-[var(--color-brand-lime)]" : "text-white"}>
                                        {hour.time}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Embedded Google Map Placeholder */}
                {/* <div className="w-full h-64 bg-gray-900 rounded-xl overflow-hidden relative mb-12 border border-white/5 flex items-center justify-center">
                    <span className="text-gray-600 font-mono tracking-widest text-sm z-10">GOOGLE MAP EMBED PLACEHOLDER (UAE)</span>
                    <div className="absolute inset-0 bg-[#0a0a0a]/50" />
                </div> */}

                {/* Copyright */}
                <div className="border-t border-white/10 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500 tracking-wider">
                        &copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-500 tracking-wider">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
