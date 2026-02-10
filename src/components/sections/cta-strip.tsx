'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function CallToActionStrip() {
    return (
        <section className="bg-[var(--color-secondary)] text-white py-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 tracking-wide">
                        HOW CAN YOU HELP?
                    </h2>
                    <div className="w-16 h-1 bg-white/50 mx-auto mb-6" />
                    <p className="max-w-4xl mx-auto text-lg md:text-xl font-light opacity-90 leading-relaxed mb-10">
                        Your partnership fuels the "Elle Cares" initiative. Whether through sponsorship, volunteering, or donations,
                        you are directly contributing to the healing, education, and economic empowerment of Uganda's next generation.
                    </p>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="w-8 h-8 rotate-45 bg-white animate-pulse" />
            </div>
        </section>
    );
}
