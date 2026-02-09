'use client';

import { motion } from 'framer-motion';

const stories = [
    {
        date: 'April 9, 2025',
        title: 'Bringing hope through food, shelter, and support',
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        date: 'April 8, 2025',
        title: 'Education for every child: building a brighter, inclusive future',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        date: 'April 7, 2025',
        title: 'Trigger, Explore, Change: A New Language for Healing',
        image: 'https://images.unsplash.com/photo-1593113598340-068d5b850d9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
];

export function StoriesSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-[#003366]">Stories and insights</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 relative">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${story.image})` }}
                                />
                            </div>

                            <div className="space-y-3">
                                <div className="text-gray-500 text-sm font-medium">{story.date}</div>
                                <h3 className="text-2xl font-serif font-bold text-[#003366] group-hover:text-[var(--color-primary)] transition-colors leading-tight">
                                    {story.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
