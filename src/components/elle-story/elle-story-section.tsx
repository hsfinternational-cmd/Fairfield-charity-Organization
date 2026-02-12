'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plane, Crown, Sprout, Heart, Map, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ElleCaresBadge } from '@/components/ui/elle-cares-badge';

const sections = [
    {
        id: 'hero',
        title: "The Dream",
        subtitle: "A Girl. A Duty.",
        content: "The journey of Miss Uganda 2025, Elle Trivia Muhoza, is not just a story of beauty. It is a story of grit, gravity, and grace.",
        icon: Map,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", // Model/Portrait
        color: "bg-[#2E0249]"
    },
    {
        id: 'roots',
        title: "The Roots",
        subtitle: "Bukomansimbi",
        content: "It started in the red soil. Before the cameras and the crown, there was the garden. Growing up here taught me that nothing grows without rain.",
        icon: Sprout,
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop", // Garden/Nature
        color: "bg-[#450a0a]"
    },
    {
        id: 'wings',
        title: "The Wings",
        subtitle: "Soroti Flying School",
        content: "I traded the hoe for the yoke. Training as a pilot changed my DNA. Aviation demands perfection, procedure, and nerve.",
        icon: Plane,
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1000&auto=format&fit=crop", // Sky/Clouds
        color: "bg-[#0c4a6e]"
    },
    {
        id: 'crown',
        title: "The Crown",
        subtitle: "Miss Uganda 2025",
        content: "The sash is not a decoration; it is a microphone. Winning was not the finish line—it was the starting gun for national change.",
        icon: Crown,
        image: "https://images.unsplash.com/photo-1569388330292-7a6a841cd335?q=80&w=1000&auto=format&fit=crop", // Fashion/Stage
        color: "bg-[#451a03]"
    },
    {
        id: 'mission',
        title: "The Vision",
        subtitle: "Elle Cares",
        content: "We are building the 'Fair Field' I dreamed of. Bringing education to the youth and wealth to the mothers. I am a servant of the Pearl.",
        icon: (props: any) => <ElleCaresBadge {...props} />,
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop", // Charity/Kids
        color: "bg-[#115e59]"
    }
];

export function ElleStorySection() {
    const [activeId, setActiveId] = useState('hero');

    return (
        <section className="py-24 bg-[#0F0418] text-white overflow-hidden relative" id="elle-story">

            {/* Header Text */}
            <div className="container max-w-7xl mb-12 text-center md:text-left">
                <span className="text-[var(--color-secondary)] font-bold tracking-widest uppercase text-sm mb-2 block">
                    Interactive Journey
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                    From Bukomansimbi to the World
                </h2>
            </div>

            {/* EXPANDING GALLERY CONTAINER */}
            <div className="container max-w-7xl h-[80vh] md:h-[600px] flex flex-col md:flex-row gap-2 md:gap-4 px-2 md:px-4">
                {sections.map((section) => {
                    const isActive = activeId === section.id;

                    return (
                        <motion.div
                            key={section.id}
                            layout
                            onClick={() => setActiveId(section.id)}
                            className={`relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl ${isActive ? 'flex-[10] md:flex-[6]' : 'flex-[1] md:flex-[1] hover:flex-[1.5] md:hover:flex-[1.5]'
                                }`}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        >
                            {/* Background Image (or Video) */}
                            {/* If you add a 'video' property to the section object, it will render here */}
                            {/* Example: video: "/assets/videos/hero.mp4" */}
                            {(section as any).video ? (
                                <video
                                    src={(section as any).video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
                                    style={{ transform: isActive ? 'scale(1.05)' : 'scale(1.15)' }}
                                />
                            ) : (
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                                    style={{
                                        backgroundImage: `url('${section.image}')`,
                                        transform: isActive ? 'scale(1.05)' : 'scale(1.15)'
                                    }}
                                />
                            )}

                            {/* Gradient Overlays */}
                            <div className={`absolute inset-0 bg-black/60 md:bg-black/30 ${isActive ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} />
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} />

                            {/* Active Content (Bottom Aligned) - Fixed Width Pattern for Reveal Effect */}
                            <div className={`absolute bottom-0 left-0 p-6 md:p-10 flex flex-col justify-end h-full transition-all duration-500 w-full md:w-[600px] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>

                                <div className="w-full md:w-[500px] whitespace-normal">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                                            <section.icon className="w-4 h-4 md:w-5 md:h-5" />
                                        </div>
                                        <span className="text-[var(--color-secondary)] font-bold uppercase tracking-widest text-[10px] md:text-xs bg-black/40 px-3 py-1 rounded-full border border-white/10">
                                            {section.subtitle}
                                        </span>
                                    </div>

                                    <motion.h3
                                        layout="position"
                                        className="text-2xl md:text-5xl font-serif font-bold text-white mb-2 md:mb-4 leading-tight"
                                    >
                                        {section.title}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isActive ? 1 : 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-white/80 text-sm md:text-lg leading-relaxed mb-4 md:mb-6 max-w-lg font-light block"
                                    >
                                        {section.content}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isActive ? 1 : 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <Link
                                            href="/blog/elle-story"
                                            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-white hover:text-[var(--color-secondary)] transition-colors group"
                                        >
                                            Explore Chapter <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Inactive Label (Vertical Text) - Hidden on Mobile Active state to avoid clutter */}
                            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                <h3 className="text-sm md:text-2xl font-bold uppercase tracking-[0.2em] text-white/90 -rotate-90 whitespace-nowrap drop-shadow-md">
                                    {section.title}
                                </h3>
                            </div>

                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
