'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
    { label: 'Funds Raised', value: 100, suffix: '%', prefix: '' },
    { label: 'Dedicated Volunteers', value: 68, suffix: 'K', prefix: '' },
    { label: 'Lives Impacted', value: 4.89, suffix: 'M', prefix: '', decimals: 2 },
    { label: 'Completed Projects', value: 150, suffix: '+', prefix: '' },
];

function Counter({ from, to, duration = 2, decimals = 0 }: { from: number; to: number; duration?: number; decimals?: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;
        const controls = { value: from };

        // Simple custom animation for the number
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

            // Easing (easeOutExpo)
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const current = from + (to - from) * ease;

            if (node) {
                node.textContent = current.toFixed(decimals);
            }

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [inView, from, to, duration, decimals]);

    return <span ref={nodeRef}>{from}</span>;
}

export function ImpactStats() {
    return (
        <section className="bg-[var(--color-primary)] text-white py-16">
            <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center"
                    >
                        <div className="text-4xl md:text-5xl font-bold font-serif mb-2">
                            {stat.prefix}
                            <Counter from={0} to={stat.value} decimals={stat.decimals || 0} />
                            {stat.suffix}
                        </div>
                        <div className="text-green-100 text-sm md:text-base font-medium uppercase tracking-wider">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
