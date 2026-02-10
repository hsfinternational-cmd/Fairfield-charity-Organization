'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function WeatherEffects({ className }: { className?: string }) {
    const [weather, setWeather] = useState<'storm' | 'stars'>('storm');
    const [raindrops, setRaindrops] = useState<{ id: number; height: string; left: string; top: number; duration: number; delay: number }[]>([]);
    const [stars, setStars] = useState<{ id: number; width: string; height: string; left: string; top: string; duration: number; delay: number }[]>([]);

    useEffect(() => {
        // Generate static random values on client-side only
        setRaindrops(
            Array.from({ length: 40 }).map((_, i) => ({
                id: i,
                height: Math.random() * 15 + 10 + 'px',
                left: Math.random() * 100 + '%',
                top: -20,
                duration: Math.random() * 0.5 + 0.3,
                delay: Math.random(),
            }))
        );

        setStars(
            Array.from({ length: 30 }).map((_, i) => ({
                id: i,
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                duration: Math.random() * 2 + 1,
                delay: Math.random(),
            }))
        );

        // Transition from Storm to Stars after 6 seconds
        const timer = setTimeout(() => {
            setWeather('stars');
        }, 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden rounded-b-xl ${className || ''}`}>
            <AnimatePresence mode="wait">
                {weather === 'storm' && (
                    <motion.div
                        key="storm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 2 } }}
                        className="absolute inset-0"
                    >
                        {/* Thunder Flash */}
                        <motion.div
                            className="absolute inset-0 bg-white/40 z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.5, 0, 0.8, 0] }}
                            transition={{
                                duration: 0.5,
                                repeat: 4, // Flash a few times
                                repeatDelay: 1.5,
                            }}
                        />

                        {/* Rain Drops */}
                        <div className="absolute inset-0 flex">
                            {raindrops.map((drop) => (
                                <motion.div
                                    key={drop.id}
                                    className="w-[1px] bg-blue-300/60"
                                    style={{
                                        position: 'absolute',
                                        height: drop.height,
                                        left: drop.left,
                                        top: drop.top,
                                    }}
                                    animate={{ top: '120%' }}
                                    transition={{
                                        duration: drop.duration,
                                        repeat: Infinity,
                                        ease: 'linear',
                                        delay: drop.delay,
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

                {weather === 'stars' && (
                    <motion.div
                        key="stars"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 2 } }}
                        className="absolute inset-0"
                    >
                        {/* Stars */}
                        {stars.map((star) => (
                            <motion.div
                                key={star.id}
                                className="absolute bg-[#FDB813] rounded-full"
                                style={{
                                    width: star.width,
                                    height: star.height,
                                    left: star.left,
                                    top: star.top,
                                }}
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: star.duration,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: star.delay,
                                }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
