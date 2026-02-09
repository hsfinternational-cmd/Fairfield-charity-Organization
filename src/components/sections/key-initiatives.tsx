'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const initiatives = [
    {
        title: 'Rewards for Education',
        description: 'Partnering with the Fairfield Charity ELLE Cares Initiative (Miss Uganda) and DocuLocer to gamify attendance. Through Fairfield We don’t just pay fees; we validate learning through blockchain-secured data.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        goal: 'Empowering our people for the future',
        color: 'bg-[var(--color-secondary)]' // Use secondary (yellow/orange) for tag
    },
    {
        title: 'Feeding the hungry',
        description: 'We provide nutritious meals to fight hunger and bring hope to struggling communities.',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        goal: 'Equality',
        color: 'bg-red-500'
    },
    {
        title: 'Upgrading the next Uganda',
        description: 'Together with UGA-NDON we serve as Head Teacher. We are tearing down barriers to free, culturally relevant mental health guides and literacy tools to every Ugandan.',
        image: 'https://images.unsplash.com/photo-1542810634-71277d95dc24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        goal: 'Empowering for life',
        color: 'bg-red-500'
    }
];

export function KeyInitiatives() {
    return (
        <section className="py-24 bg-[var(--color-accent)]">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-[#004d40]">Our Key Initiatives</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {initiatives.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 flex flex-col h-full shadow-lg"
                        >
                            <div className="relative h-64 rounded-xl overflow-hidden mb-8 group">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                                <div className="absolute top-4 right-4">
                                    <span className={`${item.color} text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide`}>
                                        Goal: {item.goal}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-serif font-bold mb-4 text-[var(--color-text-dark)]">{item.title}</h3>
                            <p className="text-[var(--color-text-light)] mb-8 flex-1 leading-relaxed">
                                {item.description}
                            </p>

                            <div className="mt-auto">
                                <button className="group flex items-center gap-2 font-bold text-[var(--color-text-dark)] hover:text-[var(--color-primary)] transition-colors border border-gray-200 px-6 py-3 rounded-lg w-full justify-center hover:border-[var(--color-primary)]">
                                    Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
