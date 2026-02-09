'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const campaigns = [
    {
        title: 'Youth In Action',
        description: 'Empowering young leaders to drive community change through education and mentorship programs.',
        raised: 5000,
        goal: 5000,
        percentage: 100,
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Clean Water Initiative',
        description: 'Providing sustainable access to clean drinking water for rural communities in need.',
        raised: 12500,
        goal: 15000,
        percentage: 83,
        image: 'https://images.unsplash.com/photo-1542810634-71277d95dc24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Education For All',
        description: 'Building schools and supplying learning materials to underprivileged children.',
        raised: 8200,
        goal: 10000,
        percentage: 82,
        image: 'https://images.unsplash.com/photo-1593113598340-068d5b850d9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
];

export function FeaturedCampaigns() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm mb-4 block">
                        U.S. 501(c)(3) TAX-DEDUCTIBLE
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Campaigns</h2>
                    <p className="text-[var(--color-text-light)] text-lg leading-relaxed">
                        Support our specific initiatives to make a direct impact where it matters most.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {campaigns.map((campaign, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${campaign.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--color-primary)]">
                                    Urgent
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="mb-6">
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span className="text-[var(--color-primary)]">{campaign.percentage}% Funded</span>
                                        <span className="text-[var(--color-text-light)]">${campaign.goal.toLocaleString()} Goal</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${campaign.percentage}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-[var(--color-primary)] rounded-full"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 font-serif group-hover:text-[var(--color-primary)] transition-colors">
                                    {campaign.title}
                                </h3>
                                <p className="text-[var(--color-text-light)] mb-6 flex-1">
                                    {campaign.description}
                                </p>

                                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                                    <div>
                                        <span className="block text-xs text-[var(--color-text-light)] uppercase tracking-wide">Raised</span>
                                        <span className="font-bold text-lg">${campaign.raised.toLocaleString()}</span>
                                    </div>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="rounded-full w-10 h-10 p-0 flex items-center justify-center group-hover:bg-[var(--color-secondary-dark)]"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
