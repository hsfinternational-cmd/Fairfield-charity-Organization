'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { Instagram, Music2 } from 'lucide-react'; // Music2 is often used for TikTok if brand icon isn't available, or I can use a generic Share/Link
import Link from 'next/link';

// TikTok Icon SVG since Lucide might not have it or it might be renamed
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const volunteers = [
    {
        name: "Volunteer Name",
        quote: "Live What You Love",
        image: "/images/volunteers/v1.jpg",
        bg: "bg-[#D1E8FF]", // Pastel Blue
        shape: "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
    },
    {
        name: "Volunteer Name",
        quote: "Mindset is Everything",
        image: "/images/volunteers/v2.jpg",
        bg: "bg-[#E2F0CB]", // Pastel Green
        shape: "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
    },
    {
        name: "Volunteer Name",
        quote: "Know Your Own Worth",
        image: "/images/volunteers/v3.jpg",
        bg: "bg-[#FFF5BA]", // Pastel Yellow
        shape: "rounded-[40%_60%_60%_40%/40%_60%_60%_40%]"
    },
    {
        name: "Volunteer Name",
        quote: "Make it All Happen",
        image: "/images/volunteers/v4.jpg",
        bg: "bg-[#E6D4F9]", // Pastel Purple
        shape: "rounded-[70%_30%_30%_70%/60%_40%_60%_40%]"
    }
];

export function VolunteerShowcase() {
    return (
        <section className="pt-48 pb-24 bg-white overflow-hidden">
            <div className="container">
                <FadeIn className="text-center mb-16">
                    <span className="text-[var(--color-secondary)] font-bold uppercase tracking-widest text-sm mb-4 block">
                        Our Community
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-primary)]">
                        The Fairfield Wall
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {volunteers.map((person, index) => (
                        <FadeIn
                            key={index}
                            delay={index * 0.1}
                            className={`aspect-square relative p-6 flex flex-col items-center justify-center text-center group ${person.bg} transition-transform hover:scale-105 duration-300`}
                        >
                            {/* Organic Masked Image */}
                            <div className="w-48 h-48 mb-6 relative">
                                <div
                                    className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ borderRadius: person.shape.replace('rounded-', '').replace('[', '').replace(']', '') }}
                                />
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className={`w-full h-full object-cover shadow-lg ${person.shape}`}
                                />
                            </div>

                            <h3 className="font-serif font-bold text-xl text-gray-800 mb-1">{person.name}</h3>
                            <p className="font-medium text-gray-600 mb-4 italic">"{person.quote}"</p>

                            {/* Social Links */}
                            <div className="flex gap-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pink-600 hover:bg-pink-50 transition-colors shadow-sm">
                                    <Instagram size={20} />
                                </Link>
                                <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-100 transition-colors shadow-sm">
                                    <TikTokIcon className="w-5 h-5" />
                                </Link>
                            </div>

                            {/* Decorative Blob Background */}
                            <div
                                className={`absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply ${person.bg} brightness-75`}
                                style={{ borderRadius: person.shape.replace('rounded-', '').replace('[', '').replace(']', '') }}
                            />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
