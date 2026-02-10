'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { CountUp } from '@/components/ui/count-up';

export function MissionImpact() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="grid lg:grid-cols-12 gap-0 items-stretch">

                    {/* Left Content (Orange/Red Card Style) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-[#D84315] text-white p-8 md:p-16 relative overflow-hidden flex flex-col justify-center"
                    >
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                        <div className="relative z-10">
                            <span className="text-sm font-bold tracking-widest uppercase mb-6 block opacity-80">
                                FROM THE BATTLEFIELD TO A FAIR FIELD.
                            </span>

                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                                Breaking the <span className="relative inline-block">
                                    Cycle of Poverty
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[var(--color-secondary)]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                                    </svg>
                                </span>
                            </h2>

                            <p className="text-lg md:text-xl opacity-90 mb-12 leading-relaxed max-w-2xl font-light">
                                We break the cycle of poverty by addressing Mental Health, Domestic Violence, and Economic Independence simultaneously.
                                The Army secured the borders; Fairfield secures the home. We fight domestic violence with nutrition and instability with strategy.
                            </p>

                            <div className="flex flex-wrap gap-12 items-center">
                                <div className="flex items-center gap-6 group">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-24 h-24 rounded-full border-4 border-[var(--color-secondary)] flex items-center justify-center text-3xl font-bold text-white transition-colors"
                                    >
                                        <CountUp to={500} />+
                                    </motion.div>
                                    <div className="text-sm font-bold uppercase tracking-wide opacity-90 max-w-[140px] leading-snug">
                                        Pad Machines Deployed
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-24 h-24 rounded-full border-4 border-[var(--color-secondary)] flex items-center justify-center text-3xl font-bold text-white transition-colors"
                                    >
                                        <CountUp to={23} />
                                    </motion.div>
                                    <div className="text-sm font-bold uppercase tracking-wide opacity-90 max-w-[140px] leading-snug">
                                        Queens Mentored
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content (Founder Image) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative min-h-[600px] lg:min-h-full"
                    >
                        <div className="relative h-full w-full overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            <div className="absolute bottom-12 left-12 right-12 text-white">
                                <p className="text-2xl font-serif italic mb-8 leading-relaxed font-medium">
                                    "We believe in empowering and equipping local leaders. We help people who are helping people."
                                </p>
                                <div>
                                    <div className="font-handwriting text-5xl mb-2 text-white/90">Elle Trivia</div>
                                    <div className="font-bold text-lg tracking-wide">Elle Trivia Muhoza</div>
                                    <div className="text-sm text-[var(--color-secondary)] uppercase tracking-wider font-bold">Founder & Miss Uganda</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
