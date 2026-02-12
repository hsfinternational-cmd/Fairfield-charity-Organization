'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { InteractiveMap } from '@/components/elle-story/interactive-map';
import { ArrowRight, Plane, Crown, Sprout, Heart, Map } from 'lucide-react';

const sections = [
    {
        id: 'hero',
        title: "A Girl. A Dream. A Duty.",
        content: "The journey of Miss Uganda 2025, Elle Trivia Muhoza, is not just a story of beauty. It is a story of grit, gravity, and grace. Click the map locations to explore her path.",
        icon: Map,
        color: "from-[#2E0249] to-[#0F0418]" // Deep Purple
    },
    {
        id: 'roots',
        title: "The Roots: Red Earth",
        subtitle: "Bukomansimbi District",
        content: "It started in the red soil of Bukomansimbi. Before the cameras and the crown, there was the garden. Growing up here taught me that nothing grows without rain, and no dream survives without work. I didn't just learn to farm; I learned resilience. My grandmother taught me that a Queen is not someone who rules, but someone who serves.",
        icon: Sprout,
        color: "from-[#450a0a] to-[#7f1d1d]" // Red Earth
    },
    {
        id: 'wings',
        title: "The Wings: Blue Sky",
        subtitle: "Soroti Flying School",
        content: "I traded the hoe for the yoke. Training as a pilot changed my DNA. Aviation demands perfection, procedure, and nerve. You cannot panic at 10,000 feet. This discipline became the backbone of 'Elle Cares.' Charity is not just about kindness; it is about logistics, precision, and landing the aid exactly where it is needed.",
        icon: Plane,
        color: "from-[#0c4a6e] to-[#0284c7]" // Sky Blue / Aviation
    },
    {
        id: 'crown',
        title: "The Crown: Golden Duty",
        subtitle: "Kampala, Serena Hotel",
        content: "The sash is not a decoration; it is a microphone. Winning Miss Uganda 2025 was not the finish line—it was the starting gun. I accepted this crown to amplify the voices of the girls back in the village who have the same dreams I did, but lack the same road.",
        icon: Crown,
        color: "from-[#451a03] to-[#b45309]" // Gold / Bronze
    },
    {
        id: 'mission',
        title: "The Mission: The Return",
        subtitle: "Fairfield Charity Organization",
        content: "Now, the journey loops back. Through Fairfield Charity Organization, I am returning to Bukomansimbi, to Lwengo, to Gulu. We are building the 'Fair Field' I dreamed of. We are bringing the 'Musomesa' education to the youth and the 'Emmwanyi' coffee wealth to the mothers. I am no longer just Elle; I am a servant of the Pearl.",
        icon: Heart,
        color: "from-[#115e59] to-[#0d9488]" // Teal / Brand
    }
];

export default function ElleStoryPage() {
    const [activeSection, setActiveSection] = useState('hero');

    // Get active background gradient
    const activeGradient = sections.find(s => s.id === activeSection)?.color || sections[0].color;
    const activeData = sections.find(s => s.id === activeSection) || sections[0];

    return (
        <main className={`min-h-screen transition-colors duration-1000 bg-gradient-to-br ${activeGradient} flex flex-col`}>
            <Header />

            <div className="flex-1 container pt-32 pb-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

                {/* LEFT COLUMN: Interactive Map */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh] relative z-10">
                    <InteractiveMap
                        currentSection={activeSection}
                        onSectionSelect={setActiveSection}
                    />

                    {/* Instructions Overlay (fades out once interacted) */}
                    {activeSection === 'hero' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute -bottom-8 left-0 right-0 text-center lg:hidden"
                        >
                            <span className="text-white/60 text-sm animate-pulse">Tap map points to explore</span>
                        </motion.div>
                    )}
                </div>

                {/* RIGHT COLUMN: Interactive Content Panel */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center h-full min-h-[40vh]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSection}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/10 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden"
                        >
                            {/* Decorative Background Icon */}
                            {activeData.icon && (
                                <activeData.icon className="absolute -right-8 -bottom-8 w-64 h-64 text-white/5 rotate-[-15deg]" />
                            )}

                            <div className="mb-6 flex items-center gap-4 relative z-10">
                                {activeData.icon && (
                                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white shadow-inner">
                                        <activeData.icon className="w-7 h-7" />
                                    </div>
                                )}
                                {activeData.subtitle && (
                                    <span className="text-[var(--color-secondary)] font-bold uppercase tracking-widest text-sm bg-black/20 px-3 py-1 rounded-full">
                                        {activeData.subtitle}
                                    </span>
                                )}
                            </div>

                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight relative z-10">
                                {activeData.title}
                            </h2>

                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light mb-8 relative z-10">
                                {activeData.content}
                            </p>

                            {/* Section Navigation / CTA */}
                            <div className="flex flex-wrap gap-4 relative z-10">
                                {activeSection === 'mission' ? (
                                    <button className="bg-[var(--color-secondary)] hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
                                        Join our Vision <ArrowRight className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <div className="flex gap-2">
                                        {/* Quick Nav Chips */}
                                        {sections.map(s => (
                                            <button
                                                key={s.id}
                                                onClick={() => setActiveSection(s.id)}
                                                className={`w-3 h-3 rounded-full transition-all ${activeSection === s.id ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'}`}
                                                aria-label={`Go to ${s.title}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            {/* Footer removed from view for cleaner "One Page" feel, or kept minimal? User said "one page of the page". Keeping main footer but pushed down. */}
        </main>
    );
}
