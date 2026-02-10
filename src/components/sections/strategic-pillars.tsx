'use client';

import { motion } from 'framer-motion';
import { Heart, Laptop, TrendingUp } from 'lucide-react';

const pillars = [
    {
        icon: Heart,
        title: 'The Empowerment Nexus (Health)',
        subtitle: 'Healing the Home',
        description: 'We focus on Domestic Violence prevention using the SASA! Methodology, drive awareness for Mental Health with our Butabika partnership, and end Period Poverty through the deployment of Cleannate Machines.',
        color: 'bg-[var(--color-accent)]'
    },
    {
        icon: Laptop,
        title: 'The "Musomesa" Digital Academy (Education)',
        subtitle: 'The Future is Digital',
        description: 'Bridging the digital divide with our AI-driven education app. We provide youth with essential digital literacy skills, coding workshops, and access to modern tools to compete in the global economy.',
        color: 'bg-[var(--color-secondary)]'
    },
    {
        icon: TrendingUp,
        title: 'Economic Resilience (Wealth)',
        subtitle: 'Women in Agriculture',
        description: 'Through the "Emmwanyi" Coffee project, we train women in modern farming techniques and financial literacy, turning subsistence farming into sustainable, wealth-generating agribusiness.',
        color: 'bg-[var(--color-primary)]'
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
