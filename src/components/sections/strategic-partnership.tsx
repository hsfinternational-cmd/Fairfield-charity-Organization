'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export function StrategicPartnership() {
    return (
        <section className="py-24 bg-[#3E2723] text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldCheck className="w-6 h-6 text-[var(--color-secondary)]" />
                            <span className="text-[var(--color-secondary)] font-bold tracking-widest text-sm uppercase">
                                Strategic Alliance
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                            Civil-Military Cooperation for Development
                        </h2>

                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            We are proud to partner with <strong className="text-white">Operation Wealth Creation (OWC)</strong> and <strong className="text-white">General Salim Saleh</strong>.
                            Together, we are securing Uganda’s future through disciplined agricultural reform, infrastructure development, and community stabilization.
                            This partnership represents a unique fusion of civil society reach and military logistical capability to deliver impact where it matters most.
                        </p>

                        <Button variant="primary" className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[#3E2723] border-none">
                            Read More About Our OWC Partnership <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>

                    {/* Use placeholder for handshake/field image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden border-4 border-[var(--color-secondary)]/30 shadow-2xl"
                    >
                        <div className="aspect-video bg-gray-800 relative bg-[url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center">
                            <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-500" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                                    <p className="text-sm font-medium text-white">Driving national development through strategic cooperation.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
