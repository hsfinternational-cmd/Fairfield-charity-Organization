'use client';

import { motion } from 'framer-motion';

export function Logo({ className = "w-16 h-16" }: { className?: string }) {
    return (
        <motion.div
            className={`relative flex items-center justify-center ${className}`}
            initial="hidden"
            animate="visible"
        >
            <motion.svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Shield Background - Light Blue Gradient effect */}
                <defs>
                    <linearGradient id="shieldGradient" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E1F5FE" />
                        <stop offset="1" stopColor="#B3E5FC" />
                    </linearGradient>
                </defs>
                <motion.path
                    d="M 10 20 Q 50 10 90 20 L 90 55 Q 90 95 50 100 Q 10 95 10 55 Z"
                    fill="url(#shieldGradient)"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                />

                {/* Group for the main icon to center it within the shield */}
                <g transform="translate(0, 5) scale(0.9) translate(5,0)">
                    {/* Umbrella Handle */}
                    <motion.path
                        d="M50 25 L 50 70 C 50 78 58 78 58 70"
                        stroke="#0D47A1" // Darker Blue
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />

                    {/* Left Base - Amber/Yellow */}
                    <motion.path
                        d="M 50 65 Q 25 85 10 65 L 50 65 Z"
                        fill="#FFC107"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    />
                    {/* Right Base - Deep Orange */}
                    <motion.path
                        d="M 50 65 Q 75 85 90 65 L 50 65 Z"
                        fill="#FF5722"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    />

                    {/* People - Teal/Cyan */}
                    {/* 4 Figures: 2 Small Outer, 2 Large Inner */}

                    {/* Far Left (Small) */}
                    <motion.circle cx="20" cy="58" r="5" fill="#26C6DA" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.0 }} />
                    <motion.path d="M12 68 Q 20 60 28 68 v 10 h -16 z" fill="#26C6DA" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} />

                    {/* Inner Left (Large) */}
                    <motion.circle cx="38" cy="50" r="7" fill="#26C6DA" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
                    <motion.path d="M26 65 Q 38 55 50 65 v 10 h -24 z" fill="#26C6DA" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} />

                    {/* Inner Right (Large) */}
                    <motion.circle cx="62" cy="50" r="7" fill="#26C6DA" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} />
                    <motion.path d="M50 65 Q 62 55 74 65 v 10 h -24 z" fill="#26C6DA" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} />

                    {/* Far Right (Small) */}
                    <motion.circle cx="80" cy="58" r="5" fill="#26C6DA" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} />
                    <motion.path d="M72 68 Q 80 60 88 68 v 10 h -16 z" fill="#26C6DA" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} />

                    {/* Umbrella Canopy - Dark Blue */}
                    <motion.path
                        d="M 10 50 A 40 40 0 0 1 90 50"
                        fill="#0D47A1"
                        initial={{ scale: 0, opacity: 0, transformOrigin: "50% 50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "backOut" }}
                    />
                </g>
            </motion.svg>
        </motion.div>
    );
}
