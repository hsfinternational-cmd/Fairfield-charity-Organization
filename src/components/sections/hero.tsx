'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative h-[90vh] flex flex-col justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"
                    style={{ backgroundPosition: 'center 20%' }}
                />
            </div>

            {/* Hero Content */}
            <div className="container relative z-20 text-white pt-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3
                            }
                        }
                    }}
                    className="max-w-4xl"
                >
                    <motion.div
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 leading-tight tracking-tight">
                            RESTORING HOPE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] via-yellow-200 to-[var(--color-secondary)] bg-300% animate-gradient">
                                TO UGANDA'S FUTURE
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        className="text-xl md:text-2xl mb-10 font-light tracking-wide max-w-2xl text-gray-100/90 leading-relaxed"
                    >
                        The Official "Elle Cares" Initiative led by Miss Uganda, <span className="font-serif italic text-white">Elle Trivia Muhoza</span>.
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="group relative overflow-hidden rounded-full border-2 border-[var(--color-secondary)] text-white hover:text-white px-10 py-7 text-lg tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(253,183,20,0.5)] bg-transparent"
                        >
                            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Join With Us</span>
                            <div className="absolute inset-0 bg-[var(--color-secondary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Features Bar (Classic Reference Style) */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent pt-20 pb-10">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
                        {[
                            { num: '01', title: 'The Empowerment Nexus', subtitle: 'Health & Healing' },
                            { num: '02', title: 'Musomesa Academy', subtitle: 'Digital Education' },
                            { num: '03', title: 'Economic Resilience', subtitle: 'Wealth Creation' }
                        ].map((item, idx) => (
                            <div key={idx} className="px-6 py-4 flex items-center gap-4 text-white group cursor-pointer hover:bg-white/5 transition-colors">
                                <span className="text-5xl font-bold font-serif opacity-30 group-hover:opacity-100 group-hover:text-[var(--color-secondary)] transition-all">
                                    {item.num}
                                </span>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                                    <p className="text-sm opacity-70 uppercase tracking-wider">{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
