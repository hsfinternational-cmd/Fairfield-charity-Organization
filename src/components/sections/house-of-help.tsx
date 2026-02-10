'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import Image from 'next/image';

export function HouseOfHelp() {
    return (
        <section className="py-24 bg-[var(--color-primary)] text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Overlapping Images */}
                    <div className="relative h-[600px] w-full hidden lg:block">
                        {/* Main Large Image (Vertical) */}
                        <motion.div
                            className="absolute top-0 left-0 w-[70%] h-[85%] rounded-lg overflow-hidden shadow-2xl z-10 border-4 border-white/10"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1518197790380-45920b72f099?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Child smiling"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Overlapping Small Image */}
                        <motion.div
                            className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-lg overflow-hidden shadow-2xl z-20 border-8 border-[var(--color-primary)]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Hands"
                                className="w-full h-full object-cover"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors cursor-pointer group">
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Play className="w-6 h-6 text-[var(--color-primary)] ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Circle */}
                        <div className="absolute top-[40%] right-[10%] w-64 h-64 rounded-full bg-[var(--color-secondary)]/20 -z-0 blur-3xl animate-pulse" />
                    </div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="pl-0 lg:pl-8"
                    >
                        <span className="text-[var(--color-secondary)] text-sm font-bold tracking-widest uppercase mb-4 block">
                            Hospitality
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                            THE HOUSE OF HELP
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
                            <p>
                                At Fairfield Charity Organization, we believe that true hospitality extends beyond providing shelter—it means creating a sanctuary where dignity is restored and hope is rekindled.
                            </p>
                            <p>
                                Our "House of Help" initiative provides comprehensive support including nutritional rehabilitation, educational sponsorship, and vocational training for mothers, ensuring that when we help a child, we uplift an entire family.
                            </p>
                        </div>

                        {/* Signature Block */}
                        <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                            <div className="flex-shrink-0">
                                <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="Founder"
                                    className="w-16 h-16 rounded-full object-cover border-2 border-[var(--color-secondary)]"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Elle Trivia Muhoza</h4>
                                <span className="text-sm text-[var(--color-highlight)] font-medium uppercase tracking-wider">FOUNDER & MISS UGANDA</span>
                            </div>
                            <div className="ml-auto opacity-80 hidden sm:block">
                                {/* Signature SVG Placeholder (White Stroke) */}
                                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 30 C 20 20, 30 10, 40 25 S 60 35, 70 20 S 90 10, 110 30" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h5 className="font-serif italic text-xl text-white/90">
                                "Building a future where every life is defined by opportunity."
                            </h5>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
