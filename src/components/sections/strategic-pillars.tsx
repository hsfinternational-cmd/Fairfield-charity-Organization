'use client';

import { motion } from 'framer-motion';
import { Heart, Laptop, TrendingUp } from 'lucide-react';

const pillars = [
    {
        icon: Heart,
        title: 'Health: The Empowerment Nexus',
        subtitle: 'Healing the Home',
        description: "Healing the home, fighting Domestic Violence, and the 'Good Food' mental health protocol. A malnourished brain is an angry brain—we fight violence with nutrition.",
        color: 'bg-[var(--color-accent)]'
    },
    {
        icon: TrendingUp,
        title: 'Wealth: Agriculture & OWC',
        subtitle: 'Garrison to Garden',
        description: "The 'Emmwanyi' (Coffee) and 'Emmere' (Food Security) projects. Partnering with Operation Wealth Creation to secure food security and financial independence.",
        color: 'bg-[var(--color-primary)]'
    },
    {
        icon: Laptop,
        title: 'Education: Musomesa Academy',
        subtitle: 'The Future is Digital',
        description: 'The AI-driven digital academy for youth skills. Breaking information gatekeeping and preparing the next generation for the global economy with modern tools.',
        color: 'bg-[var(--color-secondary)]'
    }
];

export function StrategicPillars() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-serif mb-4 text-[var(--color-primary)]">Our 3 Strategic Pillars</h2>
                    <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                        >
                            <div className={`h-2 ${pillar.color}`} />
                            <div className="p-8">
                                <div className={`w-14 h-14 rounded-full ${pillar.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <pillar.icon className={`w-7 h-7 ${pillar.color.replace('bg-', 'text-')}`} />
                                </div>

                                <h3 className="text-xl font-bold font-serif mb-2 text-[var(--color-primary)]">{pillar.title}</h3>
                                <div className="text-[var(--color-secondary)] font-medium text-sm mb-4 uppercase tracking-wide">{pillar.subtitle}</div>

                                <p className="text-[var(--color-text-light)] leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
