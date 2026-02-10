'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stories = [
    {
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'From Survivor to Entrepreneur',
        name: 'Sarah N.',
        quote: 'Fairfield Charity gave me more than just a coffee seedling; they gave me my dignity back. Today, I employ three other women in my village.',
        category: 'Economic Resilience'
    },
    {
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'A Future Reclaimed',
        name: 'Moses K.',
        quote: 'I was lost in the city streets until the Musomesa Academy taught me how to code. Now, I build websites for local businesses.',
        category: 'Education'
    }
];

export function RealLifeStories() {
    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-[300px] bg-[#3E2723] z-0" />

            <div className="container relative z-10">
                <div className="flex justify-between items-end mb-12 text-white">
                    <div>
                        <span className="text-[var(--color-secondary)] font-bold tracking-widest text-sm uppercase mb-2 block">
                            REAL LIFE STORIES
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif">
                            Restoring Dignity
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#3E2723]">
                            Read More Stories
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {stories.map((story, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${story.image})` }}
                                />
                                <div className="absolute top-4 left-4 bg-[var(--color-secondary)] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                                    {story.category}
                                </div>
                            </div>

                            <div className="p-8 relative">
                                <Quote className="absolute top-6 right-8 w-12 h-12 text-[var(--color-primary)]/10" />
                                <h3 className="text-2xl font-bold font-serif mb-4 text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                                    {story.title}
                                </h3>
                                <p className="text-[var(--color-text-light)] italic mb-6 leading-relaxed">
                                    "{story.quote}"
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-1 bg-[var(--color-secondary)]" />
                                    <span className="font-bold text-[var(--color-text-dark)]">{story.name}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="md:hidden mt-8 text-center">
                    <Button variant="outline" className="border-[#3E2723] text-[#3E2723]">
                        Read More Stories
                    </Button>
                </div>
            </div>
        </section>
    );
}
