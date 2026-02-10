'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const directors = [
    {
        name: 'Omar Mehri',
        role: 'Chairman',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Layla Samuel',
        role: 'Executive Director',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Draper Timothy',
        role: 'Finance Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Mariam Shah',
        role: 'Operations Lead',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
];

const volunteers = [
    {
        name: 'Sarah Jenkins',
        role: 'Community Outreach',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'David Chen',
        role: 'Event Coordinator',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Amara Okafor',
        role: 'Education Mentor',
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'James Wilson',
        role: 'Logistics',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
];

export function TeamVolunteers() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background: Dark Purple to Navy Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2E0249] to-[var(--color-primary)] z-0" />

            {/* Decorative Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container relative z-10">

                {/* --- Board of Directors --- */}
                <div className="text-center mb-20">
                    <span className="text-[var(--color-secondary)] font-bold uppercase tracking-widest text-sm mb-4 block">
                        Our Leadership
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        Board Of Directors
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Guiding our mission with integrity, vision, and a commitment to lasting change.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {directors.map((member, idx) => (
                        <div key={idx} className="group relative">
                            {/* Card Shape - Red Accent */}
                            <div className="absolute top-4 left-4 right-0 bottom-0 bg-[var(--color-accent)] rounded-tl-[3rem] rounded-br-[1rem] -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />

                            {/* Image Container */}
                            <div className="relative h-80 rounded-tl-[3rem] rounded-br-[1rem] overflow-hidden bg-gray-800 shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />

                                {/* Text Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-[var(--color-secondary)] text-sm font-bold uppercase tracking-wider">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* --- Volunteers --- */}
                <div className="text-center mb-20">
                    <span className="text-[var(--color-highlight)] font-bold uppercase tracking-widest text-sm mb-4 block">
                        The Heart of Our Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        Dedicated Volunteers
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Selfless individuals giving their time and talent to uplift communities.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {volunteers.map((member, idx) => (
                        <div key={idx} className="group relative">
                            {/* Card Shape - Teal Accent for Volunteers */}
                            <div className="absolute top-4 left-4 right-0 bottom-0 bg-[var(--color-highlight)] rounded-tl-[1rem] rounded-br-[3rem] -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />

                            {/* Image Container */}
                            <div className="relative h-80 rounded-tl-[1rem] rounded-br-[3rem] overflow-hidden bg-gray-800 shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />

                                {/* Text Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-[var(--color-secondary)] text-sm font-bold uppercase tracking-wider">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
