'use client';

import { motion } from 'framer-motion';
import { Play, Crown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FairfieldAmbassador() {
    return (
        <section className="py-24 bg-[#0F2A2F] text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Overlapping Images */}
                    <div className="relative h-[600px] w-full hidden lg:block">
                        {/* Main Large Image (Elle) */}
                        <motion.div
                            className="absolute top-0 left-0 w-[70%] h-[85%] rounded-lg overflow-hidden shadow-2xl z-10 border-4 border-white/10 group cursor-pointer"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1000&auto=format&fit=crop"
                                alt="Elle Trivia Muhoza - Miss Uganda"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay Gradient on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Floating Crowns */}
                            {[
                                { delay: 0, x: -20, y: -20, duration: 3, size: 32 },
                                { delay: 1, x: 80, y: -40, duration: 4, size: 24 },
                                { delay: 0.5, x: 20, y: 60, duration: 3.5, size: 28 }
                            ].map((crown, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute z-30 text-[#FFD700] drop-shadow-md"
                                    style={{
                                        right: '10%',
                                        top: '20%',
                                        x: crown.x,
                                        y: crown.y
                                    }}
                                    animate={{
                                        y: [crown.y, crown.y - 15, crown.y],
                                        rotate: [-10, 10, -10]
                                    }}
                                    transition={{
                                        duration: crown.duration,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: crown.delay
                                    }}
                                >
                                    <Crown size={crown.size} fill="currentColor" />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Overlapping Small Image */}
                        <motion.div
                            className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-lg overflow-hidden shadow-2xl z-20 border-8 border-[#0F2A2F]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Community Impact"
                                className="w-full h-full object-cover"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors cursor-pointer group">
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Play className="w-6 h-6 text-[#0F2A2F] ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Circle */}
                        <div className="absolute top-[40%] right-[10%] w-64 h-64 rounded-full bg-[#EF8354]/20 -z-0 blur-3xl animate-pulse" />
                    </div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="pl-0 lg:pl-8"
                    >
                        <span className="text-[#EF8354] text-sm font-bold tracking-widest uppercase mb-4 block">
                            Global Impact
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight">
                            THE FAIRFIELD AMBASSADOR
                        </h2>

                        <Link href="/miss-world" className="inline-block group">
                            <h3 className="text-2xl font-serif text-[#EF8354] mb-8 group-hover:text-[#F27B44] transition-colors flex items-center gap-2">
                                Elle Trivia Muhoza - Miss Uganda
                                <Crown className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#FFD700]" fill="currentColor" />
                            </h3>
                        </Link>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
                            <p>
                                At Fairfield Charity Organization, we are honored to have Elle Trivia Muhoza as our Global Ambassador. Her dedication to empowering communities aligns perfectly with our mission to restore dignity and rekindle hope.
                            </p>
                            <p>
                                As Miss Uganda, Elle champions the "House of Help" initiative, advocating for comprehensive support systems that uplift entire families through nutritional rehabilitation, education, and vocational training.
                            </p>
                        </div>

                        {/* Signature Block & CTA */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-white/10">
                            <div>
                                <Link href="/miss-world">
                                    <h4 className="font-bold text-white text-lg hover:text-[#EF8354] transition-colors">Elle Trivia Muhoza</h4>
                                </Link>
                                <span className="text-sm text-[#EF8354] font-medium uppercase tracking-wider">FOUNDER & MISS UGANDA</span>
                            </div>

                            <div className="sm:ml-auto">
                                <Link href="/miss-world">
                                    <Button className="bg-[#EF8354] hover:bg-[#d96a3d] text-white rounded-full px-8">
                                        Read Her Story
                                    </Button>
                                </Link>
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
