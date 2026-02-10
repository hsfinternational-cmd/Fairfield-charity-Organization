'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function StatsGoalsBar() {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3">
                {/* 1. Green Section - Results */}
                <div className="bg-[#2EC4B6] p-12 text-white flex flex-col justify-center items-center text-center relative overflow-hidden group">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">National Impact</h3>
                        <p className="text-sm opacity-90 mb-6 font-light">SECURING THE FUTURE</p>

                        <div className="flex justify-center gap-12 mt-4">
                            <div>
                                <span className="block text-5xl font-bold font-serif mb-1">Active</span>
                                <span className="text-xs uppercase tracking-widest opacity-80">Civil-Military Coop</span>
                            </div>
                            <div>
                                <span className="block text-5xl font-bold font-serif mb-1">Nationwide</span>
                                <span className="text-xs uppercase tracking-widest opacity-80">Coverage</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 2. Yellow Section - Next Goals */}
                <div className="bg-[#FF9F1C] p-12 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full max-w-sm"
                    >
                        <h3 className="text-3xl font-bold mb-10 uppercase tracking-wide font-serif">Strategic Targets</h3>

                        <div className="space-y-4 text-left w-full">
                            <div className="grid grid-cols-[1fr_auto] gap-4 items-center border-b border-white/20 pb-3">
                                <span className="font-bold text-lg leading-none">Pad Machines</span>
                                <div className="text-right">
                                    <span className="block text-2xl font-bold leading-none">500+</span>
                                    <span className="text-xs uppercase opacity-80">Deployed</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-[1fr_auto] gap-4 items-center border-b border-white/20 pb-3">
                                <span className="font-bold text-lg leading-none">Queens Mentored</span>
                                <div className="text-right">
                                    <span className="block text-2xl font-bold leading-none">23</span>
                                    <span className="text-xs uppercase opacity-80">Leaders</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-[1fr_auto] gap-4 items-center pb-2">
                                <span className="font-bold text-lg leading-none">Barracks Reached</span>
                                <span className="text-xs font-bold bg-white text-[#FF9F1C] px-2 py-1 rounded uppercase tracking-wider">Pilot Phase</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 3. Red Section - Help Us */}
                <div className="bg-[#E71D36] p-12 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
                    {/* Background Image Overlay */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <p className="text-sm uppercase tracking-widest mb-2 opacity-90">Join The Ranks</p>
                        <h3 className="text-4xl font-bold mb-8 uppercase font-serif">Partner With Us</h3>

                        <Button
                            variant="primary"
                            className="bg-[#1B3B5F] text-white hover:bg-[#102A44] hover:scale-105 transition-all px-8 py-6 rounded-full text-sm font-bold tracking-widest uppercase"
                        >
                            Get Involved
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
