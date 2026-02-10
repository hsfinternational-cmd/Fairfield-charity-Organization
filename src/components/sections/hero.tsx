'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#0F172A] text-white">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#0F172A]/90 z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
            </div>

            <div className="container relative z-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1 mb-6 border border-[var(--color-secondary)] rounded-full bg-[var(--color-secondary)]/10 backdrop-blur-sm">
                            <span className="text-[var(--color-secondary)] font-bold tracking-wider text-sm uppercase">
                                The Official "Elle Cares" Initiative
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
                            Restoring Hope: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-white">
                                A New Era for Uganda’s Women & Youth
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                            The Official "Elle Cares" Initiative led by Miss Uganda, <strong>Elle Trivia Muhoza</strong>.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary" size="lg" className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[#3E2723]">
                                Support Our Mission
                            </Button>
                            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-[#3E2723]">
                                View Our Strategic Partners <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block h-[600px]"
                    >
                        {/* Main Image */}
                        <div className="absolute right-0 top-0 w-4/5 h-full rounded-2xl overflow-hidden border-4 border-[var(--color-secondary)]/30">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1618585477437-c1d4715f368c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
                        </div>

                        {/* Floating Info Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-12 left-0 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 max-w-xs"
                        >
                            <div className="text-[var(--color-secondary)] font-bold text-lg mb-1">Top 5 Contender</div>
                            <div className="text-sm text-gray-200">
                                Elle Muhoza is a "Beauty with a Purpose" Champion and a Top 5 Pick for the 73rd Miss World Festival.
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
