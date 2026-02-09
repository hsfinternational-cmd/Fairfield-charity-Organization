'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export function StorySection() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 relative w-full flex justify-center lg:justify-end"
                    >
                        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                            {/* Main Circular Image */}
                            <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-2xl z-20">
                                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1593113598340-068d5b850d9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 hover:scale-110" />
                            </div>

                            {/* Floating bubble 1 */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg z-30 hidden md:block"
                            >
                                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542810634-71277d95dc24?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')] bg-cover bg-center" />
                            </motion.div>

                            {/* Decorative Circle */}
                            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[var(--color-secondary)]/20 rounded-full blur-2xl z-10" />
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm mb-4 block">
                            About Us
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                            Changing Lives with <br />
                            <span className="relative inline-block">
                                Knowledge
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-[var(--color-secondary)]/30 -z-10 rounded-full"></span>
                            </span>
                        </h2>

                        <p className="text-xl font-medium text-[var(--color-text-dark)] mb-6">
                            Our promise that your giving is doing what it's supposed to: changing lives.
                        </p>

                        <p className="text-[var(--color-text-light)] mb-8 leading-relaxed">
                            Today, we win wars to defeat life-saving aid to millions of people living on the edge of survival. Tomorrow, when the crisis subsides, we will work alongside community members to restore job opportunities and build resilience.
                        </p>

                        <div className="flex items-center gap-8">
                            <Button variant="dark">Learn More</Button>
                            <button className="flex items-center gap-3 group">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-5 h-5 ml-1 fill-current" />
                                </div>
                                <span className="font-bold text-sm tracking-wide uppercase group-hover:text-[var(--color-primary)] transition-colors">
                                    Watch Video
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
