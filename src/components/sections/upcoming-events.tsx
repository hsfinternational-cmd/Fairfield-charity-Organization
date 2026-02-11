'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WeatherEffects } from '../layout/weather-effects';

import { Logo } from '@/components/ui/logo';

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
        <section className="py-24 bg-[#0F0418] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            {/* Weather Effects (Deep Purple Glass Theme) */}
            <WeatherEffects className="rounded-none mix-blend-lighten opacity-80" />

            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm mb-4 block">
                            Get Involved
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-white">
                            Upcoming Events
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Join us at our upcoming galas, fundraisers, and community meetups.
                            Together, we celebrate our progress and fuel our future.
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        className="rounded-full border-white text-white hover:bg-white hover:text-[var(--color-primary)] transition-all px-8 py-6 text-lg hidden md:flex bg-transparent"
                    >
                        View All Events <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>

                <div className="w-full relative overflow-hidden">
                    {/* Gradient Masks for smooth fade out */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-primary)] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-primary)] to-transparent z-10 pointer-events-none" />

                    {/* Marquee Track */}
                    <div className="flex gap-8 w-max animate-scroll hover:cursor-pointer">
                        {[...events, ...events, ...events].map((event, index) => (
                            <Link
                                key={index}
                                href="/projects"
                                className="block w-[380px] shrink-0 transform transition-transform hover:scale-[1.02]"
                            >
                                <div className="bg-white rounded-2xl p-0 overflow-hidden hover:shadow-2xl transition-all duration-300 group relative border border-white/10 h-full flex flex-col">
                                    {/* Image */}
                                    <div className="w-full h-56 shrink-0 bg-gray-200 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Floating Date Badge */}
                                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 text-center shadow-lg">
                                            <div className="text-xl font-bold text-[#D84315] leading-none">{event.day}</div>
                                            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{event.month}</div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6 flex flex-col">
                                        <h3 className="text-xl font-bold font-serif text-[#1B3B36] mb-3 leading-tight group-hover:text-[var(--color-secondary)] transition-colors">
                                            {event.title}
                                        </h3>
                                        <div className="text-[#FF7043] text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <Clock className="w-3 h-3" />
                                            {event.dateStr.split('|')[0]}
                                        </div>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                            {event.description}
                                        </p>

                                        {/* Bottom Action */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                            <span className="flex items-center gap-2 text-xs font-bold text-[#1B3B36] uppercase tracking-wider group-hover:text-[var(--color-secondary)] transition-colors">
                                                Read More <ArrowRight className="w-3 h-3" />
                                            </span>
                                            <span className="text-[10px] bg-[#1B3B36] text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                                                View Project
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div >

            {/* Newsletter Section - Spaced & Floating */}
            <div className="mt-32 relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="bg-[#0D9488] rounded-[3rem] p-12 md:p-16 relative overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl shadow-black/20">
                        {/* Organic Shape Overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-10">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-white">
                                <path d="M0 0 L100 0 L100 100 L0 100 Z" />
                            </svg>
                        </div>

                        <div className="relative z-10 flex-1 min-w-0 text-white flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="mb-6">
                                <Logo variant="full" dark />
                            </div>
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
