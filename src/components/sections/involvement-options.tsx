'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, HandHeart, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function InvolvementOptions() {
    const [selected, setSelected] = useState<number | null>(1); // Default to Donation

    const options = [
        {
            icon: HandHeart,
            title: 'BECOME A VOLUNTEER',
            subtitle: 'JOIN THE TEAM',
            description: 'Offer your time and skills to mentor youth and support our community outreach programs.'
        },
        {
            icon: Heart,
            title: 'MAKE A DONATION',
            subtitle: 'SUPPORT OUR PROJECTS',
            description: 'Your contribution directly funds life-saving medical supplies, education, and women\'s empowerment.'
        },
        {
            icon: GraduationCap,
            title: 'GIVE A SCHOLARSHIP',
            subtitle: 'SPONSOR A STUDENT',
            description: 'Provide a bright future for a child by covering school fees and scholastic materials.'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
                    {options.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setSelected(idx)}
                            className="flex flex-col items-center group cursor-pointer relative"
                        >
                            {/* Circle Container */}
                            <motion.div
                                className={`w-56 h-56 rounded-full flex items-center justify-center mb-8 transition-all duration-500 relative z-10
                                    ${selected === idx
                                        ? 'bg-[var(--color-secondary)] shadow-[0_20px_50px_-12px_rgba(253,183,20,0.5)] scale-110'
                                        : 'bg-white border-2 border-gray-100 hover:border-[var(--color-secondary)] hover:shadow-xl'
                                    }`}
                                whileHover={{ y: -10 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <item.icon
                                    className={`w-20 h-20 transition-colors duration-300 stroke-[1.5]
                                        ${selected === idx ? 'text-white' : 'text-gray-300 group-hover:text-[var(--color-secondary)]'}`
                                    }
                                />
                            </motion.div>

                            <h3 className="text-xl font-bold font-serif text-[var(--color-text-dark)] mb-3 text-center uppercase tracking-widest">
                                {item.title}
                            </h3>
                            <p className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-4">
                                {item.subtitle}
                            </p>

                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: selected === idx ? 1 : 0, height: selected === idx ? 'auto' : 0 }}
                                className="text-center text-gray-500 text-sm max-w-[250px] leading-relaxed"
                            >
                                {item.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center gap-6 mt-12">
                    <Button className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white px-12 py-7 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        Donate Now
                    </Button>
                    <Button variant="outline" className="border-gray-200 hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] px-12 py-7 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white transition-all">
                        Register
                    </Button>
                </div>
            </div>
        </section>
    );
}
