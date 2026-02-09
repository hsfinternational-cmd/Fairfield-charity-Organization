'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function AmbassadorSection() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="space-y-4 pt-12">
                            <div className="h-64 rounded-2xl overflow-hidden shadow-lg bg-[url('https://images.unsplash.com/photo-1593113598340-068d5b850d9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center" />
                            <div className="h-48 rounded-2xl overflow-hidden shadow-lg bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center" />
                        </div>
                        <div className="space-y-4">
                            <div className="h-48 rounded-2xl overflow-hidden shadow-lg bg-[url('https://images.unsplash.com/photo-1542810634-71277d95dc24?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center" />
                            <div className="h-64 rounded-2xl overflow-hidden shadow-lg bg-[url('https://images.unsplash.com/photo-1596700812952-b9b5f9037803?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center" />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="inline-block px-4 py-1 mb-6 border border-[var(--color-primary)]/10 rounded-full bg-white">
                            <span className="text-[var(--color-primary)] font-bold tracking-wider text-xs uppercase">
                                Local Action Global Impact
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold font-serif mb-8 text-[var(--color-primary)]">
                            Meet Elle Trivia Muhoza
                        </h2>

                        <div className="space-y-6 text-[var(--color-text-light)]">
                            <p>
                                <strong className="text-[var(--color-primary)]">She represents Resilience:</strong> From a village in Bukomansimbi to the aviation top flight, and now the world stage.
                            </p>
                            <p>
                                <strong className="text-[var(--color-primary)]">She represents Innovation:</strong> Championing a tech-based educational platform that solves a real-world crisis.
                            </p>
                            <p>
                                <strong className="text-[var(--color-primary)]">She represents Heart:</strong> Her hands-on work in the slums of Kawempe shows she is a queen who serves.
                            </p>
                        </div>

                        <div className="mt-12 p-8 bg-white rounded-2xl border-l-4 border-[var(--color-secondary)] shadow-sm relative">
                            <Quote className="absolute top-4 right-4 text-[var(--color-secondary)]/20 w-12 h-12" />
                            <p className="text-xl font-serif italic text-[var(--color-primary)] mb-4">
                                "I want to be a voice for the voiceless. When you empower a mother, you save a family. When you educate a child, you save a nation."
                            </p>
                            <div className="font-bold text-sm uppercase tracking-wide text-[var(--color-secondary)]">
                                — Elle Muhoza
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
