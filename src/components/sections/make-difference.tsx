'use client';

import { motion } from 'framer-motion';
import { Handshake, TrendingUp, HeartHandshake, Box } from 'lucide-react';

const benefits = [
    {
        title: 'Free Access',
        icon: Box,
        description: 'A group of donors cover our operating costs so 100% of your money can fund water projects.',
    },
    {
        title: 'Locals for Locals',
        icon: Handshake,
        description: 'A group of donors cover our operating costs so 100% of your money can fund water projects.',
    },
    {
        title: 'Real Impact',
        icon: TrendingUp,
        description: 'A group of donors cover our operating costs so 100% of your money can fund water projects.',
    },
    {
        title: 'Safety Net',
        icon: HeartHandshake,
        description: 'A group of donors cover our operating costs so 100% of your money can fund water projects.',
    },
];

export function MakeDifference() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background World Map Vector (Abstract) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                <div className="w-[120%] h-[120%] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-no-repeat bg-contain" />
            </div>

            <div className="container relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm mb-4 block">
                        What We Do
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference</h2>
                    <p className="text-[var(--color-text-light)] text-lg leading-relaxed">
                        It's through initiatives that you actually can grow and act out everything that is not essential to mankind to get lost.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-[var(--color-primary)]/20 hover:shadow-lg transition-all duration-300 group text-center"
                        >
                            <div className="w-20 h-20 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                                <benefit.icon className="w-8 h-8 text-[var(--color-secondary)] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                            <p className="text-[var(--color-text-light)] text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
