'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export function MissionSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                            <div className="relative aspect-[4/5] bg-gray-100">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-8 right-8 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full" />
                            <div className="absolute bottom-12 -left-6 w-24 h-24 bg-[var(--color-secondary)] rounded-full mix-blend-multiply opacity-80 animate-pulse" />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-serif leading-tight">
                            We connect Uganda's most vulnerable with the nation's most powerful resources to create sustainable change
                        </h2>

                        <p className="text-[var(--color-text-light)] text-lg leading-relaxed mb-8">
                            Fairfield Charity Organisation does not simply ask for help; we propose solutions. We are the professional conduit connecting single mothers and adolescent girls with the skills, tools, and networks they need to thrive. From grassroots skilling to global advocacy on the Miss World stage, we are building a future defined by dignity and independence.
                        </p>

                        <div className="flex gap-4">
                            <Button variant="dark" className="gap-2">
                                About Us <ArrowUpRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
