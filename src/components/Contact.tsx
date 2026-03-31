"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        details: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*New Booking Request*%0A%0A` +
            `*Name:* ${formData.fullName || 'Not provided'}%0A` +
            `*Phone:* +971 ${formData.phone || 'Not provided'}%0A` +
            `*Email:* ${formData.email || 'Not provided'}%0A` +
            `*Service:* ${formData.service || 'Not provided'}%0A` +
            `*Preferred Date:* ${formData.date || 'Not provided'}%0A` +
            `*Details:* ${formData.details || 'Not provided'}`;

        const whatsappNumber = "971551619241";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="book" className="py-24 px-4 md:px-8 bg-white text-[#0a0a0a] relative z-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-brand-dark-green)] mb-4">Book a Service</h2>
                    <p className="text-[#666] max-w-xl mx-auto font-light">
                        Ready to elevate your exterior space? Schedule a consultation with our experts in Dubai or Abu Dhabi.
                    </p>
                </div>

                <div className="bg-[#f9f9f9] p-8 md:p-12 rounded-2xl border border-gray-100 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-[#555] font-semibold mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className="w-full bg-white border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-[var(--color-brand-lime)] focus:ring-1 focus:ring-[var(--color-brand-lime)] transition-all"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-[#555] font-semibold mb-2">Phone Number</label>
                                <div className="flex">
                                    <span className="bg-gray-100 border border-r-0 border-gray-200 px-4 py-3 rounded-l text-[#555] font-mono select-none">
                                        +971
                                    </span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="50 123 4567"
                                        required
                                        className="w-full bg-white border border-gray-200 px-4 py-3 rounded-r focus:outline-none focus:border-[var(--color-brand-lime)] focus:ring-1 focus:ring-[var(--color-brand-lime)] transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Email */}
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-[#555] font-semibold mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="johndoe@example.com"
                                    required
                                    className="w-full bg-white border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-[var(--color-brand-lime)] focus:ring-1 focus:ring-[var(--color-brand-lime)] transition-all"
                                />
                            </div>

                            {/* Service Dropdown */}
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-[#555] font-semibold mb-2">Select a Service</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-[var(--color-brand-lime)] focus:ring-1 focus:ring-[var(--color-brand-lime)] transition-all text-[#333] appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Choose an option...</option>
                                    <option value="Landscape Design & Execution">Landscape Design & Execution</option>
                                    <option value="Premium Plant Sales">Premium Plant Sales</option>
                                    <option value="Event Greenery & Rentals">Event Greenery & Rentals</option>
                                    <option value="Garden Maintenance">Garden Maintenance</option>
                                </select>
                            </div>
                        </div>

                        {/* Preferred Date */}
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-[#555] font-semibold mb-2">Preferred Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="w-full bg-white border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-[var(--color-brand-lime)] focus:ring-1 focus:ring-[var(--color-brand-lime)] transition-all text-[#333]"
                            />
                        </div>

                        {/* Additional Details */}
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-[#555] font-semibold mb-2">Additional Details</label>
                            <textarea
                                rows={4}
                                name="details"
                                value={formData.details}
                                onChange={handleChange}
                                placeholder="Tell us more about your project requirements..."
                                className="w-full bg-white border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-[var(--color-brand-lime)] focus:ring-1 focus:ring-[var(--color-brand-lime)] transition-all resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4 text-center">
                            <button
                                type="submit"
                                className="w-full md:w-auto px-12 py-4 bg-[var(--color-brand-dark-green)] text-white font-semibold uppercase tracking-widest hover:bg-[var(--color-brand-lime)] hover:text-[#0a0a0a] transition-colors rounded-sm shadow-xl hover:shadow-[var(--color-brand-lime)]/20"
                            >
                                Request Booking
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
