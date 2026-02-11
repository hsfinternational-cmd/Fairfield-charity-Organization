'use client';

import { motion } from 'framer-motion';

export function Logo({
    className = "",
    variant = "icon",
    dark = false
}: {
    className?: string;
    variant?: "icon" | "full" | "horizontal";
    dark?: boolean;
}) {
    const textColor = dark ? "text-white" : "text-[#0D47A1]";

    const Icon = (
        <motion.div
            className={`relative flex items-center justify-center ${variant === 'icon' ? className : 'w-full h-full'}`}
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
                />

                {/* Group for the main icon to center it within the shield - WITH PULSE ANIMATION */}
                <motion.g
                    transform="translate(0, 5) scale(0.9) translate(5,0)"
                    animate={{ scale: [0.9, 0.95, 0.9] }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    {/* Umbrella Handle */}
                    <path
                        d="M50 25 L 50 70 C 50 78 58 78 58 70"
                        stroke="#0D47A1" // Darker Blue
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                    />

                    {/* Left Base - Amber/Yellow */}
                    <path
                        d="M 50 65 Q 25 85 10 65 L 50 65 Z"
                        fill="#FFC107"
                    />
                    {/* Right Base - Deep Orange */}
                    <path
                        d="M 50 65 Q 75 85 90 65 L 50 65 Z"
                        fill="#FF5722"
                    />

                    {/* People - Teal/Cyan */}
                    {/* Far Left (Small) */}
                    <circle cx="20" cy="58" r="5" fill="#26C6DA" />
                    <path d="M12 68 Q 20 60 28 68 v 10 h -16 z" fill="#26C6DA" />

                    {/* Inner Left (Large) */}
                    <circle cx="38" cy="50" r="7" fill="#26C6DA" />
                    <path d="M26 65 Q 38 55 50 65 v 10 h -24 z" fill="#26C6DA" />

                    {/* Inner Right (Large) */}
                    <circle cx="62" cy="50" r="7" fill="#26C6DA" />
                    <path d="M50 65 Q 62 55 74 65 v 10 h -24 z" fill="#26C6DA" />

                    {/* Far Right (Small) */}
                    <circle cx="80" cy="58" r="5" fill="#26C6DA" />
                    <path d="M72 68 Q 80 60 88 68 v 10 h -16 z" fill="#26C6DA" />

                    {/* Umbrella Canopy - Dark Blue */}
                    <path
                        d="M 10 50 A 40 40 0 0 1 90 50"
                        fill="#0D47A1"
                    />
                </motion.g>
            </motion.svg>
        </motion.div>
    );

    if (variant === 'icon') {
        return Icon;
    }

    return (
        <div className={`flex items-center ${variant === 'full' ? 'flex-col gap-2' : 'flex-row gap-3'} ${className}`}>
            <div className={`${variant === 'full' ? 'w-24 h-24' : 'w-16 h-16'}`}>
                {Icon}
            </div>
            <div className={`flex flex-col ${variant === 'full' ? 'items-center text-center' : 'items-start text-left'}`}>
                <span className={`font-bold font-sans tracking-[0.2em] leading-none ${textColor} ${variant === 'full' ? 'text-2xl' : 'text-xl'}`}>
                    FAIRFIELD
                </span>
                <span className={`font-medium font-sans tracking-[0.1em] text-[0.6rem] md:text-[0.7rem] ${textColor} opacity-90`}>
                    CHARITY ORGANIZATION
                </span>
            </div>
        </div>
    );
}
