'use client';

import { motion } from 'framer-motion';

interface InteractiveMapProps {
    currentSection: string;
    onSectionSelect: (section: string) => void;
}

export function InteractiveMap({ currentSection, onSectionSelect }: InteractiveMapProps) {
    // Static ViewBox for full Uganda view
    const viewBox = "0 0 800 800";

    // Location Coordinates (approximate on the 800x800 grid)
    const locations = {
        roots: { cx: 330, cy: 610, label: "Bukomansimbi" },
        wings: { cx: 580, cy: 260, label: "Soroti" },
        crown: { cx: 400, cy: 510, label: "Kampala" },
        // Hero/Mission center doesn't highlight a specific spot, maybe show all or none
    };

    const activeLocation = locations[currentSection as keyof typeof locations];

    return (
        <div className="w-full h-full flex items-center justify-center bg-[#18181B] relative overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl">
            {/* Subtle Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

            <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
                <span className="text-[#F59E0B] text-xs font-bold tracking-[0.3em] uppercase">Uganda</span>
            </div>

            <motion.svg
                viewBox={viewBox}
                className="w-full h-full max-w-[85%] max-h-[85%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* 
                    Uganda Outline - Gold Style
                    Accurate-ish path for the country shape
                */}
                <path
                    d="M 230,680 L 180,600 L 150,550 L 120,400 L 140,250 L 250,100 L 450,50 L 600,50 L 720,150 L 750,400 L 700,600 L 550,750 L 350,780 Z"
                    fill="transparent"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    className="drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]"
                />

                {/* Internal District Lines (Abstract/Artistic) */}
                <path d="M 250,100 L 400,300 L 600,350" stroke="#F59E0B" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
                <path d="M 150,550 L 350,500 L 550,750" stroke="#F59E0B" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
                <path d="M 400,300 L 400,510 L 350,780" stroke="#F59E0B" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />


                {/* --- ACTIVE HIGHLIGHT --- */}
                {activeLocation && (
                    <motion.g
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        key={currentSection} // Re-animate on change
                    >
                        {/* Wrapper Group for Positioning */}
                        <g transform={`translate(${activeLocation.cx}, ${activeLocation.cy})`}>

                            {/* Pulsing Rings */}
                            <motion.circle r="6" fill="#F59E0B" />
                            <motion.circle
                                r="12"
                                stroke="#F59E0B"
                                result="0.5"
                                fill="none"
                                initial={{ scale: 0.8, opacity: 1 }}
                                animate={{ scale: 2, opacity: 0 }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            />

                            {/* Label */}
                            <motion.text
                                x="20" y="5"
                                fill="white"
                                fontSize="24"
                                fontWeight="bold"
                                fontFamily="serif"
                                initial={{ x: 30, opacity: 0 }}
                                animate={{ x: 20, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {activeLocation.label}
                            </motion.text>
                        </g>
                    </motion.g>
                )}

                {/* --- INACTIVE DOTS (Context) --- */}
                {Object.entries(locations).map(([key, loc]) => {
                    if (key === currentSection) return null;
                    return (
                        <circle
                            key={key}
                            cx={loc.cx}
                            cy={loc.cy}
                            r="3"
                            fill="#F59E0B"
                            fillOpacity="0.3"
                            className="cursor-pointer hover:fill-opacity-100 transition-all"
                            onClick={() => onSectionSelect(key)}
                        />
                    );
                })}

            </motion.svg>
        </div>
    );
}
