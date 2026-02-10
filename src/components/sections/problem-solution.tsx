'use client';

import { motion } from 'framer-motion';

export function ProblemSolution() {
    return (
        <section className="py-24 bg-white text-center">
            <div className="container max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[var(--color-secondary)] font-bold tracking-widest text-sm uppercase mb-4 block">
                        Our Core Philosophy
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-8 text-[var(--color-primary)]">
                        Connecting the Dots: Health, Education, & Wealth.
                    </h2>
                    <p className="text-xl text-[var(--color-text-light)] leading-relaxed">
                        Poverty is multidimensional. Fairfield Charity Organization breaks the cycle by addressing the root causes simultaneously:
                        <strong> Mental Health</strong>, <strong>Domestic Violence</strong>, and <strong>Economic Independence</strong>.
                        We believe that true empowerment requires a holistic approach that heals the mind, skills the hand, and uplifts the community.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
