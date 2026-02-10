'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const news = [
    {
        category: 'Event',
        title: "The Mongers Rugby 'Men for Change' Event",
        date: 'June 12, 2025',
        image: 'https://images.unsplash.com/photo-1529176656151-16478e13dfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Mobilizing men as allies in the fight against domestic violence and promoting positive masculinity through sport.',
    },
    {
        category: 'Civic Engagement',
        title: "The 'Vote for Peace' Civic Renewal Campaign",
        date: 'August 04, 2025',
        image: 'https://images.unsplash.com/photo-1541872703-74c5963631df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Encouraging youth participation in the democratic process with a focus on peace, unity, and informed decision making.',
    },
    {
        category: 'Gala',
        title: 'The 100 Most Influential Women Gala',
        date: 'September 20, 2025',
        image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Celebrating the women effectively shaping Uganda’s future across business, politics, and social impact.',
    }
];

export function RecentCampaigns() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-bold font-serif mb-4 text-[var(--color-primary)]">Latest Impact News</h2>
                        <div className="w-24 h-1 bg-[var(--color-secondary)]" />
                    </div>
                    <button className="hidden md:flex items-center gap-2 font-bold text-[var(--color-secondary)] hover:text-[var(--color-secondary-dark)] transition-colors">
                        View All News <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-xl h-64 mb-6">
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] rounded-full z-10 w-fit">
                                    {item.category}
                                </div>
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                <Calendar className="w-4 h-4" />
                                {item.date}
                            </div>

                            <h3 className="text-2xl font-bold font-serif mb-3 text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors leading-tight">
                                {item.title}
                            </h3>

                            <p className="text-[var(--color-text-light)] mb-4 line-clamp-3">
                                {item.excerpt}
                            </p>

                            <span className="text-[var(--color-secondary)] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read Story <ArrowRight className="w-4 h-4" />
                            </span>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
