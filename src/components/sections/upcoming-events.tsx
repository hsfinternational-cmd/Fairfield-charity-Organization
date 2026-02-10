'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const events = [
    {
        day: '03',
        month: 'MARCH',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Women in Leadership Gala',
        dateStr: 'THURSDAY, MARCH 3RD, 2026 | 6:00PM - 10:00PM',
        description: 'Celebrate the achievements of women leaders in our community with Miss Uganda Elle Trivia.',
        location: 'Kampala Serena Hotel'
    },
    {
        day: '19',
        month: 'MARCH',
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Community Clean-Up Drive',
        dateStr: 'SATURDAY, MARCH 19TH, 2026 | 8:00AM - 12:00PM',
        description: 'Join over 500 volunteers as we clean up the streets and promote environmental hygiene.',
        location: 'Downtown Kampala'
    },
    {
        day: '02',
        month: 'APRIL',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Scholarship Fundraiser',
        dateStr: 'SATURDAY, APRIL 2ND, 2026 | 10:00AM - 4:00PM',
        description: 'A charity auction and lunch to raise funds for the Musomesa Academy scholarship program.',
        location: 'Fairfield HQ Gardens'
    }
];

export function UpcomingEvents() {
    return (
        <section className="bg-[#F9F7F2]">
            {/* Header Section */}
            <div className="bg-[#1B3B36] text-white py-16 relative overflow-hidden">
                <div className="container relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 min-w-0 text-center md:text-left">
                        <span className="text-[var(--color-secondary)] font-bold tracking-widest text-xs uppercase mb-4 block">
                            EVENTS
                        </span>
                        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-none">
                            Upcoming <br /> Events!
                        </h2>
                        <p className="text-white text-base leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0">
                            Join us in our mission to empower communities. Every event is a step towards a brighter, more equitable future for all.
                        </p>
                        <Button
                            variant="outline"
                            className="border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white rounded-full px-8 py-6 uppercase tracking-widest text-[10px] font-bold bg-transparent transition-all"
                        >
                            Subscribe for Updates
                        </Button>
                    </div>

                    {/* Illustration - Abstract representation of 'Man with Box' */}
                    <div className="flex-1 w-full md:w-auto flex justify-center md:justify-end relative">
                        <div className="relative w-80 h-80">
                            <div className="absolute inset-0 bg-[#2C5F55] rounded-full opacity-20" />
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                {/* Placeholder for the illustration - using a composed graphic */}
                                <div className="text-center">
                                    <div className="w-48 h-48 bg-[#E0F2F1] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/10 shadow-2xl">
                                        <span className="text-6xl">🎁</span>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute top-10 right-0 w-8 h-8 bg-[#FF7043] rounded-full animate-bounce" />
                            <div className="absolute bottom-10 left-10 w-4 h-4 bg-[var(--color-secondary)] rounded-full animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Events List */}
            <div className="container py-16">
                <div className="max-w-5xl mx-auto space-y-8">
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, scale: 1.01 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col md:flex-row gap-8 items-start p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-100"
                        >
                            {/* Date Block */}
                            <div className="w-32 shrink-0">
                                <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] p-6 text-center h-32 flex flex-col justify-center items-center border border-gray-100">
                                    <div className="text-4xl font-bold font-serif text-[#1B3B36] mb-1 leading-none">{event.day}</div>
                                    <div className="text-[10px] font-bold text-[#FF7043] uppercase tracking-widest">{event.month}</div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="w-full md:w-64 h-40 shrink-0 rounded-xl overflow-hidden bg-gray-200 shadow-sm">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0 pt-2">
                                <h3 className="text-2xl font-bold font-serif text-[#1B3B36] mb-3 leading-tight group-hover:text-[var(--color-secondary)]">
                                    {event.title}
                                </h3>
                                <div className="text-[#FF7043] text-[10px] font-bold uppercase tracking-widest mb-4">
                                    {event.dateStr}
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {event.description}
                                </p>
                                <button className="text-[10px] font-bold uppercase tracking-widest text-[#1B3B36] border border-gray-300 rounded-full px-6 py-3 hover:bg-[#1B3B36] hover:text-white transition-all bg-transparent">
                                    Add to Calendar
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-white pb-16 relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="bg-[#0D9488] rounded-[3rem] p-12 md:p-16 relative overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Organic Shape Overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-10">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-white">
                                <path d="M0 0 L100 0 L100 100 L0 100 Z" />
                            </svg>
                        </div>

                        <div className="relative z-10 flex-1 min-w-0 text-white">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
                                Subscribe for Event Updates
                            </h2>
                            <p className="text-white/90 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Stay informed about our latest initiatives and community gatherings. Join our mailing list to receive updates directly to your inbox.
                            </p>
                        </div>

                        <div className="relative z-10 w-full max-w-md lg:w-auto shrink-0 bg-white p-2 rounded-3xl space-y-2 lg:space-y-0 lg:flex gap-2 shadow-2xl">
                            <div className="flex-1 grid gap-2 p-2">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-gray-50 px-4 py-3 rounded-xl text-sm outline-none focus:bg-gray-100 text-gray-900 border border-transparent focus:border-gray-200 transition-all"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-gray-50 px-4 py-3 rounded-xl text-sm outline-none focus:bg-gray-100 text-gray-900 border border-transparent focus:border-gray-200 transition-all"
                                />
                            </div>
                            <Button className="w-full lg:w-auto h-auto rounded-xl bg-[#FF7043] hover:bg-[#F4511E] text-white px-8 font-bold uppercase text-xs tracking-widest py-4 lg:py-0 shadow-lg">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
