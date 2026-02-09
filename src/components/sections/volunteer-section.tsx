'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function VolunteerSection() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden relative">
            <div className="container text-center max-w-4xl mx-auto mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Volunteer Positions Available</h2>
                <p className="text-[var(--color-text-light)] text-lg mb-8">
                    Join our global network of changemakers. Whether you have specific skills or just a heart to serve, there's a place for you here.
                </p>
                <Button variant="primary" size="lg">
                    Become a Volunteer
                </Button>
            </div>

            {/* Map visual */}
            <div className="container relative h-[400px] md:h-[500px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20"
                    style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')" }}
                />

                {/* Animated Dots/Markers */}
                {[
                    { top: '30%', left: '25%', delay: 0 },
                    { top: '45%', left: '50%', delay: 0.2 },
                    { top: '60%', left: '75%', delay: 0.4 },
                    { top: '35%', left: '80%', delay: 0.6 },
                    { top: '70%', left: '30%', delay: 0.8 },
                ].map((pos, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: pos.delay, duration: 0.5 }}
                        className="absolute w-4 h-4 bg-[var(--color-primary)] rounded-full border-2 border-white shadow-lg"
                        style={{ top: pos.top, left: pos.left }}
                    >
                        <div className="absolute inset-0 bg-[var(--color-primary)] rounded-full animate-ping opacity-75"></div>
                    </motion.div>
                ))}

                {/* Floating Stats */}
                <div className="absolute inset-x-0 bottom-0 md:bottom-12 flex justify-center gap-4 md:gap-12 flex-wrap px-4">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white px-8 py-6 rounded-2xl shadow-xl flex items-center gap-4 border-l-4 border-[var(--color-secondary)]"
                    >
                        <div>
                            <div className="text-3xl md:text-4xl font-bold font-serif">4.89M</div>
                            <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">Lives Impacted</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white px-8 py-6 rounded-2xl shadow-xl flex items-center gap-4 border-l-4 border-[var(--color-primary)]"
                    >
                        <div>
                            <div className="text-3xl md:text-4xl font-bold font-serif">68K</div>
                            <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">Volunteers</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
