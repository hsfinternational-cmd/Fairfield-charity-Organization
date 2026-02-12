'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Heart, Shield, Umbrella } from 'lucide-react';

export function VolunteerHero() {
    return (
        <section className="relative bg-white text-[#0F2A2F] pt-32 pb-48 overflow-visible">
            {/* Background Decorations */}
            <div className="absolute top-20 right-20 w-4 h-4 rounded-full border border-[#0F2A2F]/20" />
            <div className="absolute bottom-40 left-10 w-6 h-6 rounded-full border border-[#0F2A2F]/10" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Text Content */}
                    <FadeIn direction="right" className="min-w-[300px] w-full">
                        <span className="text-[#F27B44] font-bold uppercase tracking-widest text-xs mb-4 block">
                            Volunteer
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight text-[#0F2A2F]">
                            Become a <br className="hidden md:block" />
                            volunteer or help <br className="hidden md:block" />
                            out with an event
                        </h1>

                        <Button
                            className="bg-transparent border border-[#F27B44] text-[#F27B44] hover:bg-[#F27B44] hover:text-white rounded-full px-8 py-6 text-sm font-bold tracking-wider uppercase transition-all"
                        >
                            Get In Touch
                        </Button>
                    </FadeIn>

                    {/* Right: Illustration/Image */}
                    <FadeIn direction="left" delay={0.2} className="relative flex justify-center hidden md:flex">
                        {/* Placeholder for the illustration - Using a stylized image for now */}
                        <div className="relative w-full max-w-md aspect-square">
                            {/* Abstract Circle Background */}
                            <div className="absolute inset-0 bg-[#1A3D42] rounded-full scale-90" />

                            <img
                                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop"
                                alt="Volunteer Illustration"
                                className="relative z-10 w-full h-full object-cover rounded-full p-4 grayscale-[20%] contrast-125 hover:scale-105 transition-transform duration-700"
                                style={{
                                    maskImage: 'radial-gradient(circle, white 60%, transparent 100%)',
                                    WebkitMaskImage: 'radial-gradient(circle, white 60%, transparent 100%)'
                                }}
                            />

                            {/* Floating Animated Icons */}
                            {[
                                { type: 'heart', size: 48, delay: 0, x: -60, y: -20, duration: 3 },    // Large Heart
                                { type: 'umbrella', size: 40, delay: 0.5, x: 0, y: -80, duration: 4 }, // Umbrella (Top Center)
                                { type: 'heart', size: 32, delay: 1, x: 50, y: -60, duration: 4 },     // Medium Heart
                                { type: 'heart', size: 24, delay: 2, x: 40, y: 40, duration: 3.5 }     // Small Heart
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute z-20 bg-white p-3 rounded-full shadow-xl border border-gray-100"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                        x: item.x,
                                        y: item.y
                                    }}
                                    animate={{
                                        y: [item.y, item.y - 15, item.y],
                                    }}
                                    transition={{
                                        duration: item.duration,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <motion.div
                                        animate={{
                                            color: ["#9333EA", "#EC4899", "#9333EA"] // Purple -> Pink -> Purple
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: item.delay
                                        }}
                                    >
                                        {item.type === 'umbrella' ? (
                                            <Umbrella
                                                size={item.size / 1.5}
                                                fill="currentColor"
                                                className="transition-colors"
                                            />
                                        ) : (
                                            <Heart
                                                size={item.size / 1.5}
                                                fill="currentColor"
                                                className="transition-colors"
                                            />
                                        )}
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Bottom Cards - Overlapping the section bottom */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">

                        {/* Orange Card: EVENTS */}
                        <FadeIn direction="up" delay={0.4} className="bg-[#EF8354] rounded-[2rem] p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
                            <span className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2 block">Browse Events</span>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Look for an event <br /> near you!</h3>
                            <a href="/#upcoming-events">
                                <Button className="mt-4 bg-transparent border border-white text-white hover:bg-white hover:text-[#EF8354] rounded-full px-6">
                                    View Calendar
                                </Button>
                            </a>
                            <Calendar className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                        </FadeIn>

                        {/* Dark Card: JOIN */}
                        <FadeIn direction="up" delay={0.6} className="bg-[#133E42] rounded-[2rem] p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
                            <span className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2 block text-[#EF8354]">Join</span>
                            <h3 className="text-3xl font-serif font-bold mb-4">Want to become a <br /> regular?</h3>
                            <Button className="mt-4 bg-transparent border border-[#EF8354] text-[#EF8354] hover:bg-[#EF8354] hover:text-white rounded-full px-6">
                                Get In Touch
                            </Button>
                            <Shield className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                        </FadeIn>

                    </div>
                </div>
            </div>
        </section>
    );
}
