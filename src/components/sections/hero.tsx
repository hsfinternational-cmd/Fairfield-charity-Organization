'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    const [raindrops, setRaindrops] = useState<{ id: number; height: string; left: string; duration: number; delay: number }[]>([]);

    useEffect(() => {
        setRaindrops(
            Array.from({ length: 20 }).map((_, i) => ({
                id: i,
                height: Math.random() * 20 + 10 + "%",
                left: Math.random() * 100 + "%",
                duration: Math.random() * 1 + 1,
                delay: Math.random() * 2,
            }))
        );
    }, []);

    return (
        <section className="relative h-[90vh] flex flex-col justify-center overflow-hidden">
            {/* Background Image & Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/90 via-[var(--color-primary)]/80 to-[var(--color-accent)]/80 z-10 mix-blend-multiply" />
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center grayscale"
                    style={{ backgroundPosition: 'center 20%' }}
                />
            </div>

            {/* Rain Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {raindrops.map((drop) => (
                    <motion.div
                        key={drop.id}
                        className="absolute w-[1px] bg-white/20"
                        style={{
                            height: drop.height,
                            left: drop.left,
                            top: "-20%",
                        }}
                        animate={{
                            top: "120%",
                        }}
                        transition={{
                            duration: drop.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: drop.delay,
                        }}
                    />
                ))}
            </div>

            {/* Decorative Animated Umbrella Logo (Holding the Rain) */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none flex items-center justify-center opacity-10">
                <motion.svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[90vh] h-[90vh] mt-[-10vh]" // Moved up slightly
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1, 1.02, 1]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Umbrella Top */}
                    <path d="M50 20 C 25 20 5 45 5 55 L 95 55 C 95 45 75 20 50 20 Z" fill="var(--color-primary)" />
                    {/* Umbrella Handle */}
                    <path d="M50 55 L 50 80 C 50 85 55 85 55 80" stroke="var(--color-primary)" strokeWidth="4" fill="none" />
                    {/* People */}
                    <circle cx="35" cy="65" r="5" fill="var(--color-primary)" />
                    <circle cx="50" cy="65" r="5" fill="var(--color-primary)" />
                    <circle cx="65" cy="65" r="5" fill="var(--color-primary)" />

                    {/* Bottom Shapes */}
                    <path d="M 5 65 Q 25 85 50 85 L 50 55 Z" fill="var(--color-secondary)" />
                    <path d="M 95 65 Q 75 85 50 85 L 50 55 Z" fill="var(--color-accent)" />
                </motion.svg>
            </div>

            {/* Hero Content */}
            <div className="container relative z-20 text-white pt-40 pb-48">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3
                            }
                        }
                    }}
                    className="max-w-4xl"
                >
                    <motion.div
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 leading-tight tracking-tight drop-shadow-lg">
                            RESTORING HOPE, <br />
                            <span className="text-[var(--color-secondary)]">
                                SECURING THE FUTURE
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        className="text-xl md:text-2xl mb-10 font-light tracking-wide max-w-2xl text-gray-100 leading-relaxed"
                    >
                        The Official "Elle Cares" Initiative led by Miss Uganda, <span className="font-serif italic text-[var(--color-secondary)]">Elle Trivia Muhoza</span>.
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="group relative overflow-hidden rounded-full border-2 border-[var(--color-secondary)] text-white hover:text-[var(--color-primary)] px-10 py-7 text-lg tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,159,28,0.6)] bg-transparent hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)]"
                        >
                            <span className="relative z-10 transition-colors duration-300">Join the Mission</span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Features Bar (Hugging the Titles) */}
            <div className="absolute bottom-0 left-0 right-0 z-20 backdrop-blur-xl bg-gradient-to-t from-[var(--color-primary)]/40 to-white/5 border-t border-white/10 pt-16 pb-12 rounded-t-[3rem]">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {[
                            { num: '01', title: 'The Empowerment Nexus', subtitle: 'Health & Healing' },
                            { num: '02', title: 'Musomesa Academy', subtitle: 'Digital Education' },
                            { num: '03', title: 'Economic Resilience', subtitle: 'Wealth Creation' }
                        ].map((item, idx) => (
                            <div key={idx} className="px-6 py-2 flex items-center gap-4 text-white group cursor-pointer hover:bg-white/5 transition-colors rounded-lg">
                                <span className={`text-5xl font-bold font-serif opacity-40 group-hover:opacity-100 transition-all ${idx === 0 ? 'text-[var(--color-highlight)]' : idx === 1 ? 'text-[var(--color-secondary)]' : 'text-[var(--color-accent)]'}`}>
                                    {item.num}
                                </span>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                                    <p className="text-xs opacity-70 uppercase tracking-widest">{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
